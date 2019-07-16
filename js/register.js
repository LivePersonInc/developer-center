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
  const URL = 'https://lijrjpi0t5.execute-api.us-east-2.amazonaws.com/dev/devaccount';
  const user ={
    firstName: "John",
    lastName: "Doe",
    websiteURL: "http://example.org",
    country: "Canada",
    email: "stefan@liveperson.com",
    password: "javascript:alert(null)"
  }
  axios({
    method: 'post',
    url: URL,
    data: {
      user
    }
  })
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
}
