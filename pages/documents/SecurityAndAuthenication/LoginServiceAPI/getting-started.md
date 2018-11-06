---
pagename: Overview
redirect_from:
  - login-getting-started.html
Keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Login Service API

order: 9
permalink: login-service-api-overview.html
root-link: true
level-order: 6

indicator: both
---
### Introduction

This API allows you to Login to LiveEngage, as a *user*, using a username and password _or_ as an *application*, using an API key. Once you login, a session token (Bearer) will be provided and can be used for relevant API calls.

This API provides endpoints for managing the User Session (User Login, Application Login, Logout and Refresh).

[Here are the API terms of use](https://www.liveperson.com/policies/apitou).

When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](retry-and-keepalive-best-practices-overview.html)

### Use Cases

#### User Login

Use this method when you need to provide a programmatic way for _users_ to access and manage a LiveEngage session such as customized agent workspace or hosting a LiveEngage user in an external app.

_Note:_

* Using the User Login method, logged in users will be managed under the same restrictions as normal users in LiveEngage, including (for example) password expiration, concurrent conversations limits, skill groups and so on.

* Using the User Login method, if your account has SSO enabled, this method will not be standalone and you will have to register the relevant user through your hub to provide LiveEngage with an SSO SAML assertion.

#### Application Login

Use this method when you need to provide a programmatic way for _applications_ to access and manage a LiveEngage session such as bots, virtual agents or any other app that needs to act as an agent in the LiveEngage.

_Note:_

* The Application Login method overcomes both issues detailed above with the User Login method, for example password expiration or SSO integration_**.

### Getting Started

#### Retrieve your domain

Use the [LivePerson Domain API](retrieve-api-domains-using-the-domain-api.html) to retrieve this information by providing the service name `agentVep`.

##### Request URL Example

`http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0`

#### Choose your method of login

##### As a User

Use your LiveEngage username and password to [login](/agent-user-login.html).

##### As an Application

_Note: In order to login as an application, you first need to have the "User Type - Bot" feature activated. Please contact your account team before moving forward._

1. [Follow these instructions](retrieve-api-keys-create-a-new-api-key.html), to create and use an API key. Select the "Agent Interactions" category and check the "User Login" API.

    ![APIKeyCreation](img/APIKeyCreation.png)

    After checking the "User Login" API, you will be provided the following authentication details:
    * App Key
    * App Secret
    * Access Token
    * Access Token Secret

    You will use these in the request body of this API.

    Copy the generated app key to clipboard for future use.

    ![APIKeyCreation1](img/apikeycreation1.png)

2. Create a new user from within LiveEngage and set the user type to "Bot":

    ![SetBot](img/setbot.png)

    You will use the username value to login.

3. Select "App Key" from the Login Method dropdown:

    ![LoginMethod](img/loginmethod.png)

4. Paste the app key you generated earlier into the app key field and finish creating the user (fill in all mandatory fields). Once done, click save at the top right.

    ![UserWithKey](img/userwithkey.png)

    You will use the Username field in the request body of this API

5. Use the authentication details from step 1 and username from step 4 to [login](login-service-api-methods-application-login.html).
