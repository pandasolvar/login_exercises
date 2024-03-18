document.addEventListener("DOMContentLoaded", function() {
    // Function to handle login submission
    document.getElementById('submitBtn').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // this is the part of the code that makes the login validation or submission here:
        alert('Email: ' + email + '\nPassword: ' + password);
    });

    // this is the part of the function that handles the login with Google:
    function logInWithGoogle() {
        // this is the function that makes the logging in with Google possible:
        console.log('Logging in with Google...');
        // to make it call from Google add the authentication API or action here.
    }

    document.getElementById('googleLoginBtn').addEventListener('click', logInWithGoogle);

    // this is the function that handles the login with Facebook:
    function logInWithFacebook() {
        // and this is the function that makes the logging in with Facebook possible:
        console.log('Logging in with Facebook...');
        // Now finalize you add the call to the Facebook authentication API here. 
    }

    document.getElementById('facebookLoginBtn').addEventListener('click', logInWithFacebook);

// Function to get registration with email
function registerWithEmail() {
    // here is where you add the URL for the registration page:
    var registrationUrl = "https://register";
    // this function will open the registration URL in a new tab/window:
    window.open(registrationUrl, "_blank");
}

document.getElementById('registerWithEmailBtn').addEventListener('click', registerWithEmail);
});

// It should work just fine from there. 