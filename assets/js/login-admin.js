const submitLoginAdmin=document.getElementsByClassName("input")[0]

submitLoginAdmin.addEventListener("submit", async (e) => {
    e.preventDefault();
    var input = submitLoginAdmin.getElementsByTagName("input");
    var params = {
        name: input[0].value,
        password: input[1].value
    };

    try {
        const response = await fetch(`${apiUrl}/admin/admin-login`, { // Replace with your backend API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const admin = await response.json();

        // Assuming the response contains the admin ID
        if (response.ok && admin && admin._id) {
            // console.log(admin);
            const adminData = {
                id: admin._id,
                timestamp: Date.now()
            };
            localStorage.setItem('TWWebsiteAdminIdByNAZA', JSON.stringify(adminData));
            alert('Login successful');
            document.getElementsByClassName("login_admin")[0].classList.add("hid")
            document.getElementsByClassName("login_admin")[1].classList.remove("hid")
            // Redirect or perform any other action after successful login
        } else {
            alert(admin.message || 'Login failed');
        }
    } catch (error) {
   
        alert('Login failed');
    }
});



// localStorage.removeItem("TWWebsiteAdminIdByNAZA")



function checkAndDeleteAdminId() {
    const adminData = JSON.parse(localStorage.getItem("TWWebsite§AdminIdByNAZA"));
    if (adminData) {
        const currentTime = Date.now();
        const timeElapsed = currentTime - adminData.timestamp; // Time elapsed in milliseconds
        const hoursPassed = timeElapsed / (1000 * 60 * 60); // Convert milliseconds to hours

        if (hoursPassed >= 24) {
            localStorage.removeItem("TWWebsiteAdminIdByNAZA");
            // console.log("Admin ID has been removed due to expiration.");
        } 
    } else {
        console.log("No Admin ID found in local storage.");
    }
}

// You can run this function on page load or at any appropriate event

checkAndDeleteAdminId();

var adminId = localStorage.getItem("TWWebsiteAdminIdByNAZA")

if (adminId) {
    document.getElementsByClassName("login_admin")[0].classList.add("hid")
}


var buttons = document.querySelectorAll(".check div button")

buttons[0].addEventListener("click",()=>{
    document.getElementsByClassName("login_admin")[1].classList.add("hid")
})


buttons[1].addEventListener("click", () => {
    // Get all elements with class 'login_admin'
    const loginAdminElements = document.getElementsByClassName("login_admin");

    // Hide the second 'login_admin' element
    loginAdminElements[1].classList.add("hid");

    // Show the first 'login_admin' element
    loginAdminElements[0].classList.add("hid");

    loginAdminElements[2].classList.remove("hid");

    update()

});

function update(){
    

const submitLoginAdminUpdate = document.getElementsByClassName("change_pass")[0]; // Ensure class name is correct
const storedData = localStorage.getItem("TWWebsiteAdminIdByNAZA");
const adminData = JSON.parse(storedData);
console.log(adminData.id);
submitLoginAdminUpdate.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Collect input values
    var inputs = submitLoginAdminUpdate.getElementsByTagName("input");
    var params = {
        userName: inputs[0].value,
        userPassword: inputs[1].value
    };
    console.log(params);

    try {
        // Assume apiUrl is declared somewhere in your script
        const response = await fetch(`${apiUrl}/admin/admin/${adminData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const admin = await response.json();

        // Check if the response includes an admin ID
        if (admin && admin._id) {
            const newAdminData = {
                id: admin._id,
                timestamp: Date.now()
            };
            localStorage.setItem('TWWebsiteAdminIdByNAZA', JSON.stringify(newAdminData));
            alert('Update successful');
            document.getElementsByClassName("login_admin")[2].classList.add("hid");
            // Additional UI updates or redirection after successful update
        } else {
            alert(admin.message || 'Update failed');
        }
    } catch (error) {
        alert(`Update failed: ${error.message}`);
    }
});

}