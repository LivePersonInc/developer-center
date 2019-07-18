//declaring variables
let firstName;
let lastName;
let country;
let emailAddress;
let password;
let confirmPassword;
let trialButtton;

$(document).ready(function () {
  createAccount();
  trialButton = document.getElementById('registerButton');
  trialButton.disabled = true;
});

function enableBtn () {
  trialButton.disabled = false;
  $(trialButton).addClass('activeButton');
}

function createAccount () {
    $('#captchaContainer').on('click', '#registerButton', function (event) {
      console.log('registerClicked');
      validatePassword();
  })
};

function validatePassword (){
  //filling variables from the form
  firstName = $('#firstName').val();
  lastName = $('#lastName').val();
  country = $('#country').val();
  emailAddress = $('#emailAddress').val();
  password = $('#createPassword').val();
  confirmPassword = $("#confirmPassword").val();
  if(password != confirmPassword) {
    console.log("Passwords Don't Match");
    $('#passwordErrorMatch').show();
  } else {
      $('#passwordErrorMatch').hide();
    }
  if (firstName && lastName && country && emailAddress && password && confirmPassword) {
    $('#allFields').hide();
  } else {
    $('#allFields').show();
  }
  if ((firstName && lastName && country && emailAddress && password && confirmPassword) && (password == confirmPassword)) {
    postRequest();
  }
}

function postRequest () {
  console.log('I posted!');
  const URL = 'https://uohcduank4.execute-api.us-east-2.amazonaws.com/dev/devaccount';
  const user ={
    firstName: firstName,
    lastName: lastName,
    country: country,
    email: emailAddress,
    password: password
  }
  axios({
    method: 'post',
    url: URL,
    headers: {'x-api-key': 'gUi91Xlj5lWOJdOiYttA0jA6EqUTxS626YJ0zW20', 'Content-Type': 'application/json', 'Accept': 'application/json'},
    data: {
      user
    }
  })
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
}

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
