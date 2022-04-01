function showPassword() {
    var password = document.getElementById('password');
    var eye = document.getElementById('eye');
    if (password.type === 'password') {
        password.type = "text";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
    else {
        password.type = "password";
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
}

function login() {
    var loginButton = document.getElementById('login-button');
    var user = document.getElementById('email').value;
    var pass = password.value;
    if (user == 'hiashraful@gmail.com' && pass == 'password') {
        loginButton.setAttribute('href', 'main.html');
    }
    else {
        alert('Wrong username or password! Try Again!');
    }
}

function deposit() {
    var balance = parseInt(document.getElementById('balance-amount').innerHTML);
    var depositAmount = parseInt(document.getElementById('deposit-input').value);
    if(depositAmount < 10){
        alert("Minimum deposit amount is $10");
    }
    else{
        document.getElementById('deposit-amount').innerHTML = depositAmount;
    document.getElementById('balance-amount').innerHTML = balance + depositAmount;
    }
}

function withdraw() {
    var balance = parseInt(document.getElementById('balance-amount').innerHTML);
    var withdrawAmount = parseInt(document.getElementById('withdraw-input').value);
    if(balance <= 0 || withdrawAmount > balance){
        alert("Insufficient Balance");
    }
    else if(withdrawAmount < 10){
        alert("Minimum withdraw amount is $10");
        }
    else{
        document.getElementById('withdraw-amount').innerHTML = withdrawAmount;
        document.getElementById('balance-amount').innerHTML = balance - withdrawAmount;
    }   
}