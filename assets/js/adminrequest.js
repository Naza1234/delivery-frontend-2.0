fetch(`${apiUrl}/shipmentRating/shipment-ratings`)
.then((response) => {
  return response.json();
})
.then((data) => {
    data.reverse()
    document.getElementsByClassName("no_of_request")[0].innerHTML=data.length
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    populate(element)
}
   


})

.catch((error) => {
  // Handle any errors
  console.error('Error:', error);
}); 

fetch(`${apiUrl}/shipment/shipments`)
.then((response) => {
  return response.json();
})
.then((data) => {
    
    document.getElementsByClassName("no_of_shipment")[0].innerHTML=data.length

   


})
.catch((error) => {
  // Handle any errors
  console.error('Error:', error);
}); 

function populate(data){
   const container=document.querySelector(".admine_list ul")  
    var html=
    `
    <li>
    <p>${data.createdAt} <img src="../assets/images/trash.png" alt="" class="trash"></p>
    <p class="hid">${data._id}</p>
    <h4>
        <b>shipment from:</b> ${data.from.name}
    </h4>
    <h4>
        <b>shipment to:</b>${data.to.name}
    </h4>
    </li>
          
    `
    container.insertAdjacentHTML("beforeend",html)
    buttonClick()
}

function buttonClick(){
   var button=document.querySelectorAll(".admine_list ul li")
   for (let i = 0; i < button.length; i++) {
    const element = button[i];
      element.addEventListener("click",(e)=>{
        var btn=e.target
        var id= btn.querySelector(".hid").innerHTML
        window.location=`${winUrl}/admin_page_on_pass_1234_TW/reqestDetails.html?r=${id}`
      })
   }
}