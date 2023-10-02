//put event handling for views/handlebars files here?? don't think it needs to just be the login handler here
// but if so- we need more js files r.i.p.

const loginHandler = async (event) => {
    event.preventDefault();

const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(email, password)
if (email && password) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
        
    }}
};

// Get references to the "Sign Up" link and the sign-up form
const signUpLink = document.getElementById('signup-link');
const signUpForm = document.getElementById('signUpForm');

// A click event listener for the "sign Up" link
signUpLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    // Toggle the visibility of the sign-up form
    signUpForm.classList.toggle('hidden');

    // Smoothly scroll to the sign-up form
    window.scrollTo({
        behavior: 'smooth'
    });
});

// get references to the password input fields and messages
const passwordInput = document.getElementById('signupPassword');
const confirmPasswordInput = document.getElementById('signupPasswordConfirm');
const passwordMatchMessage = document.getElementById('passwordMatchMessage');
const passwordMismatchMessage = document.getElementById('passwordMismatchMessage');

// function to check if passwords match
function checkPasswordsMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordMatchMessage.classList.remove('hidden');
        passwordMismatchMessage.classList.add('hidden');
    } else {
        passwordMatchMessage.classList.add('hidden');
        passwordMismatchMessage.classList.remove('hidden');
    }
}

// event listeners for both password fields
passwordInput.addEventListener('input', checkPasswordsMatch);
confirmPasswordInput.addEventListener('input', checkPasswordsMatch);



const signupHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#signup-name').value.trim();
const email = document.querySelector('#signup-email').value.trim();
const password = document.querySelector('#signup-pw').value.trim();

if (name && email && password) {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('#loginBtn').addEventListener('click', loginHandler);
document.querySelector('.signup').addEventListener('click', signupHandler);