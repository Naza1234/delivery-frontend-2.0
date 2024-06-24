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
              
        
                populate(data,dataPackage)
               
        
        
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
         
 



  








function populate(shipmentData,packageData) {
        

    var html=`
 
    <ul>
    <li>
      <h1 class="active" style="text-align: center; justify-content: center; position: relative;">
       trackingId: <input type="text" value="${shipmentData.trackingId}" style="width: fit-content;" class="tract_input" readonly>
     
       <div class="edite_it" style="
       position: absolute;
       right: 5px;
       top: 15px;
       ">
        
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" onclick="editTag()">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#fff"/>
<path d="M8.50008 17.6901C7.89008 17.6901 7.33008 17.4701 6.92008 17.0701C6.43008 16.5801 6.22008 15.8701 6.33008 15.1201L6.76008 12.1101C6.84008 11.5301 7.22008 10.7801 7.63008 10.3701L15.5101 2.49006C17.5001 0.500059 19.5201 0.500059 21.5101 2.49006C22.6001 3.58006 23.0901 4.69006 22.9901 5.80006C22.9001 6.70006 22.4201 7.58006 21.5101 8.48006L13.6301 16.3601C13.2201 16.7701 12.4701 17.1501 11.8901 17.2301L8.88008 17.6601C8.75008 17.6901 8.62008 17.6901 8.50008 17.6901ZM16.5701 3.55006L8.69008 11.4301C8.50008 11.6201 8.28008 12.0601 8.24008 12.3201L7.81008 15.3301C7.77008 15.6201 7.83008 15.8601 7.98008 16.0101C8.13008 16.1601 8.37008 16.2201 8.66008 16.1801L11.6701 15.7501C11.9301 15.7101 12.3801 15.4901 12.5601 15.3001L20.4401 7.42006C21.0901 6.77006 21.4301 6.19006 21.4801 5.65006C21.5401 5.00006 21.2001 4.31006 20.4401 3.54006C18.8401 1.94006 17.7401 2.39006 16.5701 3.55006Z" fill="#fff"/>
<path d="M19.8501 9.83003C19.7801 9.83003 19.7101 9.82003 19.6501 9.80003C17.0201 9.06003 14.9301 6.97003 14.1901 4.34003C14.0801 3.94003 14.3101 3.53003 14.7101 3.41003C15.1101 3.30003 15.5201 3.53003 15.6301 3.93003C16.2301 6.06003 17.9201 7.75003 20.0501 8.35003C20.4501 8.46003 20.6801 8.88003 20.5701 9.28003C20.4801 9.62003 20.1801 9.83003 19.8501 9.83003Z" fill="#fff"/>
</svg>

       </div>
     
      </h1>
      <form class="form1">
       <div>
        <h2>
          From Address
        </h2>
        <label for="your name">
          your name
          <h3>
           ${shipmentData.from.name}
          </h3>
        </label>


        
        <label for="your company">
           company
           <h3>
           ${shipmentData.from.company}
            </h3>
        </label>



        <label for="your country">
           country / location
           <h3>
           ${shipmentData.from.countryLocation}
            </h3>
        </label>



        <label for="your address">
           address
           <h3>
           ${shipmentData.from.address}
            </h3>
        </label>



        <label for="your ZIP">
           ZIP
           <h3>
           ${shipmentData.from.zip}
            </h3>
        </label>



        <label for="your city">
           city
           <h3>
           ${shipmentData.from.city}
            </h3>
        </label>



        <label for="your state">
           state
           <h3>
           ${shipmentData.from.start}
            </h3>
        </label>



        <label for="your phone">
           phone
           <h3>
           ${shipmentData.from.phone}
            </h3>
        </label>



        <label for="your email">
          email
          <h3>
          ${shipmentData.from.email}
          </h3>
        </label>

       </div>
       <div>
        <h2>
          To Address
        </h2>
        <label for="to name">
          your name
          <h3>
          ${shipmentData.to.name}
          </h3>
        </label>


        
        <label for="to company">
           company
           <h3>
             d${shipmentData.to.company}
            </h3>
        </label>



        <label for="to country">
           country / location
           <h3>
           ${shipmentData.to.countryLocation}
            </h3>
        </label>



        <label for="to address">
           address
           <h3>
           ${shipmentData.to.address}
            </h3>
        </label>



        <label for="to ZIP">
           ZIP
           <h3>
           ${shipmentData.to.zip}
            </h3>
        </label>



        <label for="to city">
           city
           <h3>
           ${shipmentData.to.city}
            </h3>
        </label>



        <label for="to state">
           state
           <h3>
           ${shipmentData.to.start}
            </h3>
        </label>



        <label for="your phone">
           phone
           <h3>
           ${shipmentData.to.phone}
            </h3>
        </label>



        <label for="your email">
          email
          <h3>
          ${shipmentData.to.email}
          </h3>
        </label>

       </div>
      </form>
    </li>
    <li>
      <form >
       <div>
        <h2>
          product
        </h2>
        <label for="product name">
          ${packageData.productName}
          <h3>
           done
          </h3>
        </label>


        
        <label for="product weight">
          weight
          <h3>
          ${packageData.productWeight}
          </h3>
        </label>



        <label for="product size">
          product size
          <h3>
          ${packageData.productSize}
          </h3>
        </label>

        <label for="product size">
        Booking Mode
          <h3>
          ${packageData.BookingMode}
          </h3>
        </label>

        <label for="product size">
        Posting Date
          <h3>
          ${packageData.PostingDate}
          </h3>
        </label>

        <label for="product size">
        Consignment No
          <h3>
          ${packageData.ConsignmentNo}
          </h3>
        </label>



        <label for="product description">
          product description
          <h3>
          ${packageData.productDescription}
          </h3>
        </label>



       </div>
      </form>
    </li>
    <li>
      <form class="update_form">
       <div>
        <h2>
          location
        </h2>
        <label for="product name">
        current location
        <input type="text" value="${shipmentData.currentLocation}">
      </label>
      <label for="product name">
        location link
       <input type="text">
      </label>
     </div>
     <button>
         update
     </button>
      </form>
      
    </li>
   </ul>
    
    `
    document.getElementsByClassName("add_form_init")[0].innerHTML=html
   
    update(shipmentData._id)
}


function update(Id){
document.getElementsByClassName("update_form")[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    document.getElementsByClassName("update_form")[0].classList.add("active_parent_to_button")
   var inputs=document.querySelectorAll(".update_form input")
   console.log(inputs);


   const params={
    currentLocation:inputs[0].value,
    currentLocationMap:inputs[1].value
}
console.log(params);
var errorIs=false
const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers if required (e.g., authentication headers)
    },
    body: JSON.stringify(params),
  };

  fetch(`${apiUrl}/shipment/shipments/${Id}`, requestOptions)
  .then((response) => {
    if (response.status != 200) {
        errorIs=!errorIs
      // Handle the 400 Bad Request error
      console.error('Bad Request Error:', response);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the response data here
    window.location=window.location
   
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error);
   
  });



})








  
}



function editTag(){
   console.log("we are a go");
   var input = document.querySelector('.tract_input');
   input.removeAttribute('readonly');
  //  input.value=""
   input.classList.add("active")
   document.getElementsByClassName("edite_it")[0].innerHTML=`
           
<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" onclick="saveEdit()">
<path d="M10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78 15.23C8.49 14.94 8.49 14.46 8.78 14.17C9.07 13.88 9.55 13.88 9.84 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73L11.34 16.73C11.2 16.88 11 16.95 10.81 16.95Z" fill="#fff"/>
<path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" fill="#fff"/>
<path d="M15 22.7501H9C3.38 22.7501 2.25 20.1701 2.25 16.0001V10.0001C2.25 5.44005 3.9 3.49005 7.96 3.28005C8.37 3.26005 8.73 3.57005 8.75 3.99005C8.77 4.41005 8.45 4.75005 8.04 4.77005C5.2 4.93005 3.75 5.78005 3.75 10.0001V16.0001C3.75 19.7001 4.48 21.2501 9 21.2501H15C19.52 21.2501 20.25 19.7001 20.25 16.0001V10.0001C20.25 5.78005 18.8 4.93005 15.96 4.77005C15.55 4.75005 15.23 4.39005 15.25 3.98005C15.27 3.57005 15.62 3.25005 16.04 3.27005C20.1 3.49005 21.75 5.44005 21.75 9.99005V15.9901C21.75 20.1701 20.62 22.7501 15 22.7501Z" fill="#fff"/>
</svg>

   `
}



function saveEdit(){
  var input = document.querySelector('.tract_input');

  
  const params={
    trackingId:input.value,
}
console.log(params);
var errorIs=false
const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers if required (e.g., authentication headers)
    },
    body: JSON.stringify(params),
  };

  fetch(`${apiUrl}/shipment/shipments/${itemId}`, requestOptions)
  .then((response) => {
    if (response.status != 200) {
        errorIs=!errorIs
      // Handle the 400 Bad Request error
      console.error('Bad Request Error:', response);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the response data here
    window.location=window.location
   
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error:', error);
   
  });

}
