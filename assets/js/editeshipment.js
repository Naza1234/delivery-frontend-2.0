const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")



          console.log(itemId);
    
   

          var forms=document.getElementsByTagName("form")




          var id



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
              
        
                console.log(data.from,dataPackage)
                loadValue(data,dataPackage)
        
        
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
         
 


        function loadValue(addData,ShipmentData){
          var inputs=forms[0].getElementsByTagName("input")        

          inputs[0].value = addData.from.name || "";
          inputs[1].value = addData.from.company || "";
          inputs[2].value = addData.from.countryLocation || "";
          inputs[3].value = addData.from.address || "";
          inputs[4].value = addData.from.zip || "";
          inputs[5].value = addData.from.city || "";
          inputs[6].value = addData.from.start || "";
          inputs[7].value = addData.from.phone || "";
          inputs[8].value = addData.from.email || "";
      
          inputs[9].value = addData.to.name || "";
          inputs[10].value = addData.to.company || "";
          inputs[11].value = addData.to.countryLocation || "";
          inputs[12].value = addData.to.address || "";
          inputs[13].value = addData.to.zip || "";
          inputs[14].value = addData.to.city || "";
          inputs[15].value = addData.to.start || "";
          inputs[16].value = addData.to.phone || "";
          inputs[17].value = addData.to.email || "";


          var inputs=forms[1].getElementsByTagName("input")
        //  console.log(inputs);


         inputs[0].value = ShipmentData.productName
         inputs[1].value = ShipmentData.productWeight
         inputs[2].value = ShipmentData.productSize
         inputs[3].value = ShipmentData.productDescription
        }


        


        
forms[0].addEventListener("submit",(e)=>{
  e.preventDefault()
  forms[0].classList.add("active_parent_to_button")
  var inputs=forms[0].getElementsByTagName("input")
   
  console.log(inputs);

  const paramsFrom={
      name: inputs[0].value,
      company:inputs[1].value ,
      countryLocation:inputs[2].value ,
      address:inputs[3].value ,
      zip:inputs[4].value ,
      city: inputs[5].value,
      start: inputs[6].value,
      phone: inputs[7].value,
      email: inputs[8].value
  }
  
  const paramsTo={
      name: inputs[9].value,
      company:inputs[10].value ,
      countryLocation:inputs[11].value ,
      address:inputs[12].value ,
      zip:inputs[13].value ,
      city: inputs[14].value,
      start: inputs[15].value,
      phone: inputs[16].value,
      email: inputs[17].value
  }
  
  const params={
      from: paramsFrom,
      to: paramsTo,
  }



  const requestOptions = {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify(params),
    };

    fetch(`${apiUrl}/shipment/shipments/${itemId}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      id=data._id
      forms[0].classList.add("hid")
      forms[1].classList.remove("hid")
      // Handle the response data here
    })
    .catch((error) => {
      // Handle any errors
      console.error('Error:', error);
    }); 


})



forms[1].addEventListener("submit",(e)=>{
  e.preventDefault()
  forms[1].classList.add("active_parent_to_button")
  var inputs=forms[1].getElementsByTagName("input")
   

  const params={
      shipmentId:id,
      productName: inputs[0].value,
      productWeight:inputs[1].value,
      productSize:inputs[2].value,
      productDescription:inputs[3].value
  }



  const requestOptions = {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify(params),
    };

    fetch(`${apiUrl}/shipmentPackage/shipment-packages/${itemId}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      forms[1].classList.add("hid")
      popup()
    })
    .catch((error) => {
      // Handle any errors
      console.error('Error:', error);
    }); 


})



function popup(){
  var html=`
  <div class="cont">
             <div class="div1">
              <div class="check-container">
                  <div class="check-background">
                      <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </div>
                  <div class="check-shadow"></div>
              </div>
          </div>
      <h1>
      Shipment updated
      </h1>
    
    <p>
     please reload to close this page
    </p>
  </div>
  `
  
  document.getElementsByClassName("conecting")[0].innerHTML=html
  document.getElementsByClassName("conecting")[0].classList.remove("hid")
  
  }