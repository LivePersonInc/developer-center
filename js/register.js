$(document).ready(function () {
  createAccount();
});

function createAccount () {
    $('#captchaContainer').on('click', '#registerButton', function (event) {
      console.log('registerClicked');
      postRequest();
  })
};

function postRequest () {
  console.log('I posted!');
  const URL = 'https://uohcduank4.execute-api.us-east-2.amazonaws.com/dev/devaccount';
  //declaring variables from the form
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let country = $('#country').val();
  let emailAddress = $('#emailAddress').val();
  let password = $('#password').val();
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
