var registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var gender = document.querySelector("input[name=gender]:checked");

        if (name == "" || dob == "" || email == "" || gender == null) {
            alert("Please fill all the fields");
        } else if (email.indexOf("@") == -1) {
            alert("Please enter a valid email");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters");
        } else {
            localStorage.setItem("user", JSON.stringify({ name: name, email: email, password: password }));
            alert("Registration successful! Now you can login.");
            window.location.href = "Login.html";
        }
    });
}

var loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email === "admin@gmail.com" && password === "pass@123") {
            window.location.href = "dashboard.html";
        } else {
            alert("Wrong email or password");
        }
    });
}

var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (document.getElementById("cname").value == "" || document.getElementById("cmessage").value == "") {
            alert("Please enter your name and message");
        } else {
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        }
    });
}

var uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (document.getElementById("fileInput").files.length == 0) {
            alert("Please select a file first");
        } else {
            alert("Upload feature coming soon!");
        }
    });
}
