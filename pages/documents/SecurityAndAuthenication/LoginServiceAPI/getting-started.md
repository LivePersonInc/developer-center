---
pagename: Login Service API
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
<br>
The Login Service API provides endpoints to manage the User Session in LiveEngage, such as User Login, Application Login, Logout and Refresh.  Use this API to log into LiveEngage as a *user* with credentials or an *application* with an API key.   After logging in, you receive a session token (Bearer) to use for other related API calls.


<div class="important">
Refer to the <a href="https://www.liveperson.com/policies/apitou">API Terms of Use</a>, if you haven't already done so.<br>

We recommend that you implement our <a href="https://developers.liveperson.com/retry-and-keepalive-best-practices-overview.html">Retry Policy and KeepAlive Best Practices</a>. 
</div>


#### Let's get started!

### Step 1. Retrieve your domain

Before you can choose your login method, you must retrieve your domain using the [Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html).  


**TIP:** Use the `agentVep` service name to retrieve your domain.

```html
http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0
```

### Step 2. Choose your method of login

- **User Login** - Provides a way for **users** to access and manage a LiveEngage session. A session could be a customized workspace or hosting a LiveEngage user in an external app. Use the LiveEngage username and password, and refer to [User Login](https://developers.liveperson.com/login-service-api-methods-user-login.html) for more details.

   <div class="notice">Logged in users are managed under the same restrictions as regular users in LiveEngage, including password expiration, concurrent conversation limits, skill groups and so on.  If your account has SSO enabled, this method is not standalone, and you must register the relevant user through your hub to provide LiveEngage with an SSO SAML assertion.</div>

- **Application** - Provides a way for **applications** to access and manage LiveEngage sessions, such as bots, virtual agents, or other apps that need to act as an agent. The Application Login method overcomes both issues detailed in the User Login method (above), such as password expiration or SSO integration. For more details, refer to [Application Login](https://developers.liveperson.com/login-service-api-methods-application-login.html).

   <div class="important">
   To login as an application, you must have the <i>User Type - Bot</i> feature activated.  If you do not, contact your account team before proceeding.
   </div>

### Step 3. Create an API key and new Bot

1. Log into LiveEngage with Administrator or Campaign Manager permissions and along the top open the **Campaigns** area.

2. In the footnote, click **Data Sources**.

3. Open the API tab and click **Add new**.

   **TIP:** Alternatively, you can click on an existing key to edit its privileges.

4. Provide the name of the application and the developer name.  Optionally, you can provide a description of the app by clicking the **Add description** link below the Application name field.

5. Select the **Agent Interactions** category, click the **User Login** check box to select it, and then click **Save**.  

   ![APIKeyCreation](img/APIKeyCreation.png)  

   Once the API key has been successfully created, the authentication details display for four AUTH request values, which you use in the request body of this API:

   - App key

   - Secret

   - Access token

   - Access token secret

6. Copy the generated **App key**.  

   ![APIKeyCreation1](img/apikeycreation1.png)

7. Along the top, open the **Users** area and click **Add user**. From the Login Method, select **App Key** from the drop-down menu.  
   
   ![LoginMethod](img/loginmethod.png)  

8. Remember the App Key you copied earlier?  Paste it into the *App key* field.  
   
   ![UserWithKey](img/userwithkey.png)

9. Complete the required fields to finish creating the user and then click **Save** at the top of the form.
   
   You use the Username field in the request body of this API.

10. Log into LiveEngage with the following information:

   - App Key

   - App Secret

   - Access Token

   - Access Token Secret

   - Username of the user created in the previous step

### Next steps







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
