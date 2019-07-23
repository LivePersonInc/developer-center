//declaring variables
let firstName;
let lastName;
let country;
let emailAddress;
let password;
let confirmPassword;
let trialButtton;
let radioValue;

$(document).ready(function () {
  dynamicUserDetails();
  createAccount();
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
    if (radioValue) {
      console.log(radioValue);
    }
  });
}

//make sure all the info submitted to the form is valid
function validateInfo (){
  //filling variables from the form
  firstName = $('#firstName').val();
  lastName = $('#lastName').val();
  country = $('#country').val();
  emailAddress = $('#emailAddress').val();
  password = $('#createPassword').val();
  confirmPassword = $("#confirmPassword").val();
  //make sure password and confirmpassword match
  if(password != confirmPassword) {
    //if they don't match, show an error message on screen
    $('#passwordErrorMatch').show();
  } else {
    //if they do match, don't show the error message and hide it in case it was displayed previously
      $('#passwordErrorMatch').hide();
    }
    //make sure all fields are filled
  if (firstName && lastName && country && emailAddress && password && confirmPassword) {
    //if they are filled, don't show an error message and hide it in case it was displayed previously
    $('#allFields').hide();
  } else {
    //if they aren't filled, show the error message
    $('#allFields').show();
  }
  //if all fields were filled and the passwords match, call the request to create an account
  if ((firstName && lastName && country && emailAddress && password && confirmPassword) && (password == confirmPassword)) {
    postRequest();
    //we're going to need the email for the confirmation page so let's save it
    localStorage.setItem ('userEmail', emailAddress );
  }
}

function postRequest () {
//defining the endpoint for account creation
  const URL = 'https://uohcduank4.execute-api.us-east-2.amazonaws.com/dev/devaccount';
//filling in request body with variables from the form
  const user ={
    firstName: firstName,
    lastName: lastName,
    country: country,
    email: emailAddress,
    password: password
  }
  //using the axios module to make the request
  axios({
    method: 'post',
    url: URL,
    headers: {'x-api-key': 'gUi91Xlj5lWOJdOiYttA0jA6EqUTxS626YJ0zW20', 'Content-Type': 'application/json', 'Accept': 'application/json'},
    data: {
      user
    }
  })
  .then(function (response) {
    console.log(response.data);
    //save the account number received from the service so we can display it on the confirmation page
    localStorage.setItem ('accountNumber', response.data.accountId );
  })
  .catch(err=>console.log(err))
  //load the confirmation page
  window.location = '/confirmation.html';
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
