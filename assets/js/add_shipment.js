




var forms=document.getElementsByTagName("form")




var id


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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
         body: JSON.stringify(params),
      };
  
      fetch(`${apiUrl}/shipment/shipments`, requestOptions)
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
    var Selects=forms[1].getElementsByTagName("select")
     

    const params={
        shipmentId:id,
        productName: inputs[0].value,
        productWeight:inputs[1].value,
        productSize:inputs[2].value,
        productDescription:inputs[3].value,
        BookingMode:Selects[0].value,
        PostingDate:inputs[4].value,
        ConsignmentNo:inputs[5].value,
    }



    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
         body: JSON.stringify(params),
      };
  
      fetch(`${apiUrl}/shipmentPackage/shipment-packages`, requestOptions)
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
        Shipment Made
        </h1>
        <p>
       <b>
       you will get an email to proceed. 
       </b>
        </p>
      <p>
       please reload to close this page
      </p>
    </div>
    `
    
    document.getElementsByClassName("conecting")[0].innerHTML=html
    document.getElementsByClassName("conecting")[0].classList.remove("hid")
    
    }



    function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  }

  document.getElementById('generateButton').addEventListener('click', () => {
      const randomString = generateRandomString(10);
      // console.log(randomString);
      document.getElementsByClassName("gen_input")[0].value=randomString
  });