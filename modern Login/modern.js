
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('button');
const googleLoginBtn = document.getElementById('googleLoginBtn');
const facebookLoginBtn = document.getElementById('facebookLoginBtn');


loginButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    // Inputs:
    const email = emailInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberCheckbox.checked;

    // Validation:
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Redirect to a new page or display a success message - will be the next screen.
});

// Google login button
googleLoginBtn.addEventListener('click', function() {
    // Google login integration**
    console.log('Google login clicked');
});

// Facebook login button
facebookLoginBtn.addEventListener('click', function() {
    // Facebook login integration**
    console.log('Facebook login clicked');
});
