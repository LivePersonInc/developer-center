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

