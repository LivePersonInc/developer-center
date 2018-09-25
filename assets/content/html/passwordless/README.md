# Auth0 jQuery Passwordless SPA Samples

This set of samples shows how you can use passwordless authentication in your single page application. There are samples for both SMS and Email connections and both using the Auth0 Lock widget or a custom UI.

## Key Features

Single Page Passwordless samples include:

* Login with a **one time code** via **sms** using **Lock**
* Login with a **one time code** via **email** using **Lock**
* Login with a **magic link** via **email** using **Lock**
* Login with a **one time code** via **sms** using your **own UI**
* Login with a **one time code** via **email** using your **own UI**
* Login with a **magic link** via **email** using your **own UI**

You can read more about Passwordless Authentication on our [Doc's Site](https://auth0.com/docs/connections/passwordless), where you will find the complete Single Page App tutorials for:

* [Authenticate users with a one time code via SMS](https://auth0.com/docs/connections/passwordless/spa-sms)
* [Authenticate users with a one time code via Email](https://auth0.com/docs/connections/passwordless/spa-email-code)
* [Authenticate users with a magic link via Email](https://auth0.com/docs/connections/passwordless/spa-email-link)

## Install locally

1. Create an auth0-variables.js file with your Auth0 credentials. You can use auth0-variables.sample.js as a template. You can get the clientId and domain from the [Auth0 Dashboard](https://manage.auth0.com).
2. In your App's configuration on the [Auth0 Dashboard](https://manage.auth0.com), add `http://localhost:3000` to the **Allowed Origins (CORS)** list in order for the one time code samples to work, and add `http://localhost:3000/custom-magic-link.html, http://localhost:3000/lock-magic-link.html` to the **Allowed Callback URLs** list for the magic link samples to function. 
3. Initialize a web server in the samples folder. You can do it for instance with `serve`:
	* Install node
	* run `npm install -g serve`
	* run `serve` in the project's folder to start a server
4. Go to the [index page](http://localhost:3000) and select the scenario you want to try. 

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
