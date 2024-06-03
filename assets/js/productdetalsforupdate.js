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
      <h1 class="active" style="text-align: center; justify-content: center;">
       trackingId:${shipmentData.trackingId}
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