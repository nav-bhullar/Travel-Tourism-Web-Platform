/*
    Register User

    Simulates authentication by storing
    user information in localStorage.
*/

function registerUser()
{
    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    // Validation

    if(name === "" ||
       email === "" ||
       password === "")
    {
        alert("Please complete all fields.");

        return false;
    }

    // Store registration data

    localStorage.setItem(
        "registeredUser",
        email
    );

    alert(
        "Registration successful!"
    );

    return false;
}

/*
    Restrict access to attractions page.

    Users must register before
    viewing travel information.
*/

function checkAccess()
{
    let user =
        localStorage.getItem(
            "registeredUser"
        );

    if(user === null)
    {
        alert(
            "Please register to access travel attractions."
        );

        window.location.href =
            "register.html";
    }
}

/*
    Contact Form Validation
*/

function validateContactForm()
{
    let name =
        document.getElementById("contactName").value;

    let email =
        document.getElementById("contactEmail").value;

    let message =
        document.getElementById("message").value;

    if(name === "" ||
       email === "" ||
       message === "")
    {
        alert(
            "Please fill all fields."
        );

        return false;
    }

    alert(
        "Message submitted successfully!"
    );

    return false;
}