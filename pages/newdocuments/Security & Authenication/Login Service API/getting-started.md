---
pagename: Overview
redirect_from:
  - login-getting-started.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
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

When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

**Use Cases**

1. User Login - use this method when you need to provide a programmatic way for _users_ to access and manage a LiveEngage session such as customized agent workspace or hosting a LiveEngage user in an external app. _Note_:

    * Using the User Login method, logged in users will be managed under the same restrictions as normal users in LiveEngage, including (for example) password expiration, concurrent conversations limits, skill groups and so on.

    * Using the User Login method, if your account has SSO enabled, this method will not be standalone and you will have to register the relevant user through your hub to provide LiveEngage with an SSO SAML assertion.

{:start="2"}
2. Appplication Login - use this method when you need to provide a programmatic way for _applications_ to access and manage a LiveEngage session such as bots, virtual agents or any other app that needs to act as an agent in the LiveEngage.

    * **_Note: the Application Login method overcomes both issues detailed above with the User Login method, for example password expiration or SSO integration_**.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* agentVep

    **Request example**:

    [http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0](http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0)

{:start="2"}
2. Choose your method of login:

  As a user:

  * use your LiveEngage username and password to [login](/agent-user-login.html).

  As an application:

  **_Note: In order to login as an application, you first need to have the "User Type - Bot" feature activated. Please contact your account team before moving forward_**.

  * [Follow these instructions](guides-gettingstarted.html), to create and use an API key. Select the "Agent Interactions" category and check the "User Login" box.

      ![APIKeyCreation](img/APIKeyCreation.png)

      Note that all of the authentication details below have been filled out. You will use these in the application login body of this API.

      Copy the generated app key to clipboard for future use.

      ![APIKeyCreation1](img/apikeycreation1.png)

  * Create a new user from within LiveEngage and set the user type to "Bot":

      ![SetBot](img/setbot.png)

  * Select "App Key" from the Login Method dropdown:

      ![LoginMethod](img/loginmethod.png)

  * Paste the app key you generated earlier into the app key field and finish creating the user (fill in all mandatory fields). Once done, click save at the top right.

      ![UserWithKey](img/userwithkey.png)
