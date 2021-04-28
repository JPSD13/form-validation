const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs () {
    //get the values from the inputs
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
  //chekcing for username  
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
//checking for email
    if (emailValue === '') {
         setErrorFor(email, 'Email cannot be blank');
    
        }else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email not valid');
    
    } else {
        setSuccessFor(email);
    }
//checking for pasword
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }else if (!isPassword(password)) {
        setErrorFor(password, 'Password not valid')
    }  else {
        setSuccessFor(password);
    }
//checking for password2
    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    }else if(password2Value !== passwordValue){
        setErrorFor(password2, 'Password2 not valid');
    }  else {
        setSuccessFor(password2);
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    
    //add success class
    formControl.className = 'form-control success';
}

function isEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isPassword (password) {
   if( password.value.length > 6) return true; 
}
