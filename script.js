// script.js

let map, directionsService, directionsRenderer;
const statusElement = document.getElementById('status');

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    
    directionsRenderer.setMap(map);
}

function simulateJourney() {
    const start = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;
    const speed = document.getElementById('speed').value;
    const startTime = Date.now();
    
    const request = {
        origin: start,
        destination: destination,
        travelMode: 'DRIVING'
    };
    
    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            const route = result.routes[0];
            
            const totalDistance = route.legs[0].distance.value / 1000; // Total distance in km
            const totalJourneyTime = totalDistance / speed * 3600; // Total time in seconds

            let progress = 0;
            const steps = route.legs[0].steps;
            let stepIndex = 0;

            function advanceStep() {
                if (stepIndex < steps.length) {
                    const step = steps[stepIndex];
                    map.setCenter(step.end_location);
                    statusElement.textContent = `Journey in progress: Step ${stepIndex + 1} of ${steps.length}`;
                    stepIndex++;
                    setTimeout(advanceStep, totalJourneyTime * 1000 / totalDistance);
                } else {
                    statusElement.textContent = `Journey completed! Product arrived at ${destination}.`;
                }
            }

            advanceStep();
        } else {
            statusElement.textContent = `Error: ${status}`;
        }
    });
}

document.getElementById('journeyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    statusElement.textContent = 'Starting simulation...';
    simulateJourney();
});

// Initialize the map
initMap();
