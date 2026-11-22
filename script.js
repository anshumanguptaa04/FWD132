// Register page
var registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var gender = document.querySelector("input[name=gender]:checked");

        if (name == "" && dob == "" && email == "" && password == "" && gender == null) {
            alert("Nothing is filled in. Please fill the form");
        } else if (name == "" || dob == "" || email == "" || password == "" || gender == null) {
            alert("Please fill all the fields");
        } else if (email.indexOf("@") == -1) {
            alert("Please enter a valid email");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters");
        } else {
            alert("Registration successful! Now you can login.");
            window.location.href = "Login.html";
        }
    });
}

// Login page
var loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (name == "" && email == "" && password == "") {
            alert("Nothing is filled in. Please fill the form");
        } else if (name == "" || email == "" || password == "") {
            alert("Please fill all the fields");
        } else if (email == "admin@gmail.com" && password == "pass@123") {
            window.location.href = "dashboard.html";
        } else {
            alert("Wrong email or password");
        }
    });
}

// Contact page
var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("cname").value;
        var message = document.getElementById("cmessage").value;

        if (name == "" || message == "") {
            alert("Please enter your name and message");
        } else {
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        }
    });
}

// Upload page
var uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var file = document.getElementById("fileInput").files.length;

        if (file == 0) {
            alert("Please select a file first");
        } else {
            alert("Upload feature coming soon!");
        }
    });
}
