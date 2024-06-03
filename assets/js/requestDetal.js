const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")



          console.log(itemId);
    
   
        fetch(`${apiUrl}/shipmentRating/shipment-ratings/${itemId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
        
        
        
                populate(data)
               
        
        
        
        
        
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error:', error);
        }); 
         
 



  








function populate(shipmentData) {
        

    var html=`
    <ul>
    <li>
      <h1 class="active" style="text-align: center; justify-content: center;">
       pricing request
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
 
   </ul>
    
    `
    
document.getElementsByClassName("add_form_init")[0].innerHTML=html

}


