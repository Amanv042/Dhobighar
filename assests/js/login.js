let loginBtn = document.getElementById('login-btn')
let registerBtn = document.getElementById('register-btn')
let loginForm = document.querySelector('.login-form')
let signupForm = document.querySelector('.signup-form')


function login() {
    loginForm.style.left = `${200}px`
    signupForm.style.left = `${600}px`
}

function register() {
  loginForm.style.left = `-${600}px`
  signupForm.style.left = `${200}px`
}

loginBtn.addEventListener('click',login)
registerBtn.addEventListener('click',register)