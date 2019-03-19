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

The Login Service API provides endpoints to manage the User Session in LiveEngage, such as User Login, Application Login, Logout and Refresh.  Use this API to log into LiveEngage as a *user* with credentials or an *application* with an API key.   After logging in, you receive a session token (Bearer) to use for other related API calls.


<div class="important">
Refer to the [API Terms of Use](https://www.liveperson.com/policies/apitou).

We recommend that you implement our [Retry Policy and KeepAlive Best Practices](https://developers.liveperson.com/retry-and-keepalive-best-practices-overview.html). 
</div>


### Use Cases

#### User Login
Provides a way for users to access and manage a LiveEngage session. A session could be a customized workspace or hosting a LiveEngage user in an external app.

<div class="notice">
Logged in users are managed under the same restrictions as regular users in LiveEngage, including password expiration, concurrent conversation limits, skill groups and so on.  If your account has SSO enabled, this method is not standalone, and you must register the relevant user through your hub to provide LiveEngage with an SSO SAML assertion.
</div>
  
#### Application Login
Provides a way for applications to access and manage LiveEngage sessions, such as bots, virtual agents, or other apps that need to act as an agent.  

<div class="notice">  
The Application Login method overcomes both issues detailed in the User Login method (above), such as password expiration or SSO integration. </div>

### Let's get started!

#### Step 1. Retrieve your domain
Before you can choose your login method, you must retrieve your domain using the [Domain API](https://developers.liveperson.com/retrieve-api-domains-using-the-domain-api.html).  


**TIP:** Use the `agentVep` service name to retrieve your domain.



##### Request URL example

`https://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0`

##### Response example
```json
{
 "service": "agentVep",
 "account": "1234",
 "baseURI": "exampleDomain.liveperson.net"
}
```

#### Step 2. Choose your method of login

A. **User Login**: Use the LiveEngage username and password, and refer to [User Login](https://developers.liveperson.com/login-service-api-methods-user-login.html) for more details.

   -OR-

B. **Application**: For more details, refer to [Application Login](https://developers.liveperson.com/login-service-api-methods-application-login.html).

   <div class="important">
   To login as an application, you must have the <i>User Type - Bot</i> feature activated.  If you do not, contact your account team before proceeding.
   </div>

#### Step 3. Create an API key

1. Log into LiveEngage with Administrator or Campaign Manager permissions and open the campaign area.
2. In the footnote, click **Data Sources**.
3. Open the API tab and click **Add new API key**.<p>**TIP:** Alternatively, you can click on an existing key to edit its privileges.
4. Complete the required fields, and then click **Save**.
5. Select the **Agent Interactions** category, click the **User Login** check box to select it, and the click **Save**.<p>![APIKeyCreation.png](images/APIKeyCreation.png)<p>The four AUTH request values are provided for you to use in the request body of this API:<ul><li>App Key</li><li>App Secret</li><li>Access Token</li><li>Access Token Secret</li></ul>
6. Copy the generated **App Key** to the clipboard.<p>![apikeycreation1.png](images/apikeycreation1.png)

#### Step 4. Create a new Bot
You use the username of the bot to log in. ![setbot.png](images/setbot.png)

1. From within LiveEngage, create a new user and set the type to **Bot**.
2. From the Login Method, select **App Key** from the drop-down menu.<p>![loginmethod.png](images/loginmethod.png)
3.  Remember the App Key you copied earlier?  Paste it into the *App key* field.<p>![userwithkey.png](images/userwithkey.png)
4. Complete the required fields to finish creating the user and then click **Save** at the top of the form.<p>You use the Username field in the request body of this API.
5. Use the following to log into LiveEngage:<ul><li>App Key</li><li>App Secret</li><li>Access Token</li><li>Access Token Secret</li></ul>


### Methods

#### User Login 

#### Application Login

#### Refresh

#### Logout






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
