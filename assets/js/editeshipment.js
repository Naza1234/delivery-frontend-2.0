const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")



          console.log(itemId);
    
   
        fetch(`${apiUrl}/shipment/shipments/${itemId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
        
        
            fetch(`${apiUrl}/shipmentPackage/shipment-packages-by-shipment-id/${data._id}`)
            .then((response) => {
              return response.json();
            })
            .then((dataPackage) => {
              
        
                console.log(data,dataPackage)
               
        
        
            })
            .catch((error) => {
              // Handle any errors
              console.error('Error:', error);
            }); 
        
        
        
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error:', error);
        }); 
         
 



  