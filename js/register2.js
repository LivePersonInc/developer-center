const ENDPOINT = 'https://d0j6xh4g99.execute-api.us-east-2.amazonaws.com/prod/web/account'

let firstName
let lastName
let region
let emailAddress
let password
let confirmPassword
let trialButtton
let radioValue
let passwordStrength
let passwordLength
let passwordPassed
let recaptchaResponseToken

let player = null
let submitSucces = false
let videoComplete = false

$(document).ready(function () {
  player = new Vimeo.Player($('#vid-container iframe'))
  registerEvents()
  //if you're working locally, comment out the next function to bypass captcha
  //disableBtn()
})

// Register events that need to be handled in register.js.
function registerEvents() {
  $('#captchaContainer').on('click', '#registerButton', function (event) {
    const valid = validateInfo()
    if (valid) postRequest()
  })

  $('#captchaContainer').on('click', '#registerButtonTest', function (event) {
    //const valid = validateInfo()
    postRequestTest()
  })

  $('#captchaContainer').on('click', 'input', function (event) {
    radioValue = $('input:checked').val()
  })

  // Detect when the Vimeo player has finished the video.
  player.on('ended', function() {
      videoComplete = true
      attemptConfirmationTransition()
  })
}

// Disable submit button.
function disableBtn () {
  trialButton = document.getElementById('registerButton')
  trialButton.disabled = true
  $(trialButton).removeClass('activeButton')
}

// Enabled submit button.
function enableBtn (token) {
  recaptchaResponseToken = token
  trialButton.disabled = false
  $(trialButton).addClass('activeButton')
}

// Validate info submitted in form.
function validateInfo () {
  firstName = $('#firstName').val()
  lastName = $('#lastName').val()
  region = $('#region').val()
  emailAddress = $('#emailAddress').val()
  password = $('#createPassword').val()
  confirmPassword = $("#confirmPassword").val()

  // Ensure "agree button" was clicked.
  // TODO: This code doesn't seem to actually ensure anything...
  if (radioValue !== 'on') $('#agreeMessage').show()
  else $('#agreeMessage').hide()

  // Ensure email is valid.
  let emailRegexPtn = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  let isValidEmail = emailRegexPtn.test(emailAddress)
  let containsPlus = emailAddress.includes('+')

  if (!isValidEmail) {
      $('#invalidEmail').show()
      if (containsPlus) {
        $('#invalidEmailWithPlus').show()
      }
  } else {
        $('#invalidEmail').hide()
        // hide has no effect if already hidden so not necessary to track if it was previously visible or not
        $('#invalidEmailWithPlus').hide()
  }

  // Check password length.
  if(password.length < 8) {
    $('#passwordTooShort').show()
    passwordLength = false
  } else {
    $('#passwordTooShort').hide()
    passwordLength = true
  }

  // Check that passwords match.
  if(password != confirmPassword) {
    $('#passwordErrorMatch').show()
  } else {
      $('#passwordErrorMatch').hide()
  }

  const includesSpecialCharacter = /.*[~!@#$%^&*()<>,.:/?=]/
  const includesUppercase = /[A-Z]/
  const includesNumber = /\d/

  if(!includesSpecialCharacter.test(password)) {
    $('#passwordSpecialCharacterNeeded').show()
  } else {
    $('#passwordSpecialCharacterNeeded').hide()
  }

  if(!includesUppercase.test(password)) {
    $('#passwordUppercaseNeeded').show()
  } else {
    $('#passwordUppercaseNeeded').hide()
  }

  if(!includesNumber.test(password)) {
    $('#passwordNumberNeeded').show()
  } else {
    $('#passwordNumberNeeded').hide()
  }

  // Check that password meets requirements.
  passwordStrength = new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()<>,.:/?=])')
  if (password.match(passwordStrength)){
    $('#passwordErrorStrength').hide()
    passwordPassed = true
  } else {
    $('#passwordErrorStrength').show()
    passwordPassed = false
  }
    //make sure all fields are filled
  if (firstName && lastName && region && emailAddress && password && confirmPassword) {
    $('#allFields').hide()
  } else {
    $('#allFields').show()
  }

  const isValidForm = (firstName && lastName && region && emailAddress && isValidEmail && password && confirmPassword && passwordLength && passwordPassed) && (radioValue == "on") && (password == confirmPassword)

  // current acceptance criteria as of 9/3/19 for hotjar form submit metrics are to tally an error for
  //  "Anything that would cause a submit to fail (i.e. both invalid form values and network errors)."
  if (!isValidForm && window.hj) {
    window.hj('formSubmitFailed')
  }

  return isValidForm
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^]+)'))
  if (match) {
    const result = match[2]
    if (result !== "null" && result !== "NULL") {
      return result
    }
  }
  return undefined
}

function postRequest () {
  //videoTransition()

  // Get data from the form.
  const user = {
    firstName: firstName,
    lastName: lastName,
    region: region,
    email: emailAddress,
    password: password,
    recaptchaResponseToken: recaptchaResponseToken || '',
    marketingData: {
      leadSource: getCookie('lp-leadSource'),
      referringUrl: getCookie('lp-lsRef'),
      utmCampaignId: getCookie('lp-lsCampaign'),
      utmCampaignMedium: getCookie('lp-lsMedium'),
      utmCampaignSearchKeywords: getCookie('lp-lsTerms'),
      utmCampaignSource: getCookie('lp-lsSource'),
      utmContent: getCookie('lp-lsContent')
    }
  }


  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'x-api-key': 'ZfOpH2ParBartRHs1hfFwadaycOPbrum5HUqItEW',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: user
  })
  .then(function (response) {
    const res = response.json()
    const accountId = res.data.accountId
    if (window.hj) {
      window.hj('formSubmitSuccessful')
    }
    submitSucces = true
    attemptConfirmationTransition()
  })
  .catch(function (err) {
    console.log(err)
    if (window.hj) {
      window.hj('formSubmitFailed')
    }
    document.getElementById('confirmationWrapper').style.display = 'none'
    document.getElementById('videoWrapper').style.display = 'none'
    submitSucces = false
    videoComplete = false
  })
}

function postRequestTest () {
  videoTransition()
  submitSucces = true
  attemptConfirmationTransition()
}

function attemptConfirmationTransition() {
  if (submitSucces === true && videoComplete === true) {
    document.getElementById('registerWrapper').style.display = 'none'
    document.getElementById('videoWrapper').style.display = 'none'
    document.getElementById('confirmationWrapper').style.display = 'block'
  }
}

function videoTransition() {
    document.getElementById('registerWrapper').style.display = 'none'
    document.getElementById('confirmationWrapper').style.display = 'none'
    document.getElementById('videoWrapper').style.display = 'block'
    player.setCurrentTime(0)
    player.play()
}

//a simple fuction to hide typed passwords and show them when the relevant checkbox is filled
function showPassword() {
  var x = document.getElementsByClassName("passwordField")
  $(x).each(function () {
    if ($(this).attr('type') === "password") {
      $(this).attr('type', 'text')
    } else {
      $(this).attr('type', 'password')
    }
  })
}
