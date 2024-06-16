fetch(`${apiUrl}/shipment/shipments`)
.then((response) => {
  return response.json();
})
.then((data) => {
    data.reverse()
    document.getElementsByClassName("no_of_shipment")[0].innerHTML=data.length
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    populate(element)
}
   

buttonClick()
trash()
updateShipment()
console.log("done");
})
.catch((error) => {
  // Handle any errors
  console.error('Error:', error);
}); 

fetch(`${apiUrl}/shipmentRating/shipment-ratings`)
.then((response) => {
  return response.json();
})
.then((data) => {
  document.getElementsByClassName("no_of_request")[0].innerHTML=data.length

})
.catch((error) => {
  // Handle any errors
  console.error('Error:', error);
}); 

function populate(data){
  

   const container=document.querySelector(".admine_list ul")  
  //  console.log(container);
    var html=
    `
    <li>
    <p>${data.createdAt} <img src="../assets/images/edit-2.png" alt="" class="edit"><img src="../assets/images/trash.png" alt="" class="trash"></p>
    <p class="hid">${data._id}</p>
    <h4>
        <b>shipment from:</b> ${data.from.name}
    </h4>
    <h4>
        <b>shipment to:</b>${data.to.name}
    </h4>
    <h4>
        <b>current location:</b>${data.currentLocation}
    </h4>

    </li>
          
    `

    container.insertAdjacentHTML("beforeend",html)
   
}

function buttonClick(){
   var button=document.querySelectorAll(".admine_list ul li")
   for (let i = 0; i < button.length; i++) {
    const element = button[i];
      element.addEventListener("click",(e)=>{
        var btn=e.target
        var id= btn.querySelector(".hid").innerHTML
        window.location=`${winUrl}/admin_page_on_pass_1234_TW/detail.html?r=${id}`
      })
   }
}

function updateShipment(){
  var button=document.querySelectorAll(".edit")
  console.log("done again");
  for (let i = 0; i < button.length; i++) {
   const element = button[i];
     element.addEventListener("click",(e)=>{
       var btn=e.target
    // Get the parent element of the button
 var parentElement = btn.parentElement.parentElement;

 // Find the first element with the class name 'hid'
 var hiddenElement = parentElement.getElementsByClassName("hid")[0];

 // Ensure the hidden element exists before attempting to get its innerHTML
 if (hiddenElement) {
   var id = hiddenElement.innerHTML.trim()
  console.log(id);
  // Send the DELETE request
  window.location=`${winUrl}/admin_page_on_pass_1234_TW/editeproduct.html?r=${id}`
 }
     })
  }
}




function trash(){
  var button=document.querySelectorAll(".trash")
   for (let i = 0; i < button.length; i++) {
    const element = button[i];
      element.addEventListener("click",(e)=>{
        var btn=e.target
     // Get the parent element of the button
  var parentElement = btn.parentElement.parentElement;

  // Find the first element with the class name 'hid'
  var hiddenElement = parentElement.getElementsByClassName("hid")[0];

  // Ensure the hidden element exists before attempting to get its innerHTML
  if (hiddenElement) {
    var id = hiddenElement.innerHTML.trim()
   console.log(id);
   // Send the DELETE request
fetch(`${apiUrl}/shipment/shipments/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to delete the resource');
  }
})
.then(data => {
  console.log('Resource deleted successfully:', data);
  window.location.reload()
})
.catch(error => {
  console.error('Error:', error);
});
  }
      })
   }
}