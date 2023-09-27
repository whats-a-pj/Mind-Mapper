//put event handling for views/handlebars files here?? don't think it needs to just be the login handler here
// but if so- we need more js files r.i.p.

const loginHandler = async (event) => {
    event.preventDefault();

const email = document.querySelector('#login-email').value.trim();
const password = document.querySelector('#login-pw').value.trim();

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

document.querySelector('.login').addEventListener('button', loginHandler);
document.querySelector('.signup').addEventListener('button', signupHandler);