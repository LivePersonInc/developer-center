//declaring variables
let firstName;
let lastName;
let region;
let emailAddress;
let password;
let confirmPassword;
let trialButtton;
let radioValue;
let passwordStrength;
let passwordLength;
let passwordPassed;

$(document).ready(function () {
  dynamicUserDetails();
  createAccount();
  //if you're working locally, comment out the next function to bypass captcha
  disableBtn();
  radioListener();
});

function dynamicUserDetails () {
  let accountNumber = localStorage.getItem ('accountNumber');
  let userEmail = localStorage.getItem ('userEmail');
  if (accountNumber) {
    $('#accountNumber').html('Account number: <b>' + accountNumber + '</b>');
  }
  if (userEmail) {
    $('#userID').html('User ID/Email: <b>' + userEmail + '</b>');
  }
}

//on click on the free trial button
function createAccount () {
    $('#captchaContainer').on('click', '#registerButton', function (event) {
      console.log('registerClicked');
      validateInfo();
  })
};

//disable the free trial button
function disableBtn () {
  trialButton = document.getElementById('registerButton');
  trialButton.disabled = true;
  $(trialButton).removeClass('activeButton');
}

//enable the free trial button
function enableBtn () {
  trialButton.disabled = false;
  $(trialButton).addClass('activeButton');
}

function radioListener () {
  $('#captchaContainer').on('click', 'input', function (event) {
    radioValue = $('input:checked').val();
  });
}

//make sure all the info submitted to the form is valid
function validateInfo (){
  //filling variables from the form
  firstName = $('#firstName').val();
  lastName = $('#lastName').val();
  region = $('#region').val();
  emailAddress = $('#emailAddress').val();
  password = $('#createPassword').val();
  confirmPassword = $("#confirmPassword").val();
  //make sure the radio button was clicked
  if (radioValue != "on") {
    $('#agreeButton').show();
  } else {
    $('#agreeButton').hide();
  }
  //check if email is valid
  var emailRegexPtn = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var isValidEmail = emailRegexPtn.test(emailAddress);
  if (!isValidEmail) {
      $('#invalidEmail').show();
  } else {
        $('#invalidEmail').hide();
  }
  //check password length
  if(password.length < 8) {
    $('#passwordTooShort').show();
    passwordLength = false;
  } else {
    $('#passwordTooShort').hide();
    passwordLength = true;
  }
  //check that passwords match
  if(password != confirmPassword) {
    $('#passwordErrorMatch').show();
  } else {
      $('#passwordErrorMatch').hide();
  }
  //check that password meets requirements
  passwordStrength = new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])');
  if (password.match(passwordStrength)){
    $('#passwordErrorStrength').hide();
    passwordPassed = true;
  } else {
    $('#passwordErrorStrength').show();
    passwordPassed = false
  }
    //make sure all fields are filled
  if (firstName && lastName && region && emailAddress && password && confirmPassword) {
    $('#allFields').hide();
  } else {
    $('#allFields').show();
  }
  //if all fields were filled and the passwords match, call the request to create an account
  if ((firstName && lastName && region && emailAddress && isValidEmail && password && confirmPassword && passwordLength && passwordPassed) && (radioValue == "on") && (password == confirmPassword)) {

    postRequest();
    //we're going to need the email for the confirmation page so let's save it
    localStorage.setItem ('userEmail', emailAddress );
    $('#loader').css('display', 'block');
    $('#successMessage').css('display', 'block');
  }
}

function postRequest () {
//defining the endpoint for account creation
  const URL = 'https://ssuw1fkby4.execute-api.us-east-2.amazonaws.com/prod/devaccount';
//filling in request body with variables from the form
  const user = {
    firstName: firstName,
    lastName: lastName,
    region: region,
    email: emailAddress,
    password: password
  }

  //using the axios module to make the request
  axios({
    method: 'post',
    url: URL,
    headers: {'x-api-key': 'WOhfspRcQX2rXsYhdkFSU5LBAy87mw78VdEus7ej', 'Content-Type': 'application/json', 'Accept': 'application/json'},
    data: user
  })
  .then(function (response) {
    console.log(response.data);
    //save the account number received from the service so we can display it on the confirmation page
    localStorage.setItem ('accountNumber', response.data.accountId );
    //load the confirmation page
    window.location = '/confirmation.html';
  })
  .catch(err=>console.log(err))
}

//a simple fuction to hide typed passwords and show them when the relevant checkbox is filled
function showPassword() {
  var x = document.getElementsByClassName("passwordField");
  $(x).each(function () {
    if ($(this).attr('type') === "password") {
      $(this).attr('type', 'text');
    } else {
      $(this).attr('type', 'password');
    }
  })
}
