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
            localStorage.setItem('TWWebsiteAdminIdByNAZA', admin._id);
            alert('Login successful');
            document.getElementsByClassName("login_admin")[0].classList.add("hid")
            // Redirect or perform any other action after successful login
        } else {
            alert(admin.message || 'Login failed');
        }
    } catch (error) {
   
        alert('Login failed');
    }
});



var adminId = localStorage.getItem("TWWebsiteAdminIdByNAZA")

if (adminId) {
    document.getElementsByClassName("login_admin")[0].classList.add("hid")
}







