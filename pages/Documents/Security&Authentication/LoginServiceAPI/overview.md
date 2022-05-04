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
<br>
The Login Service API provides endpoints to manage the User Session in Conversational Cloud, such as User Login, Application Login, Logout and Refresh.  Use this API to log into Conversational Cloud as a *user* with credentials or an *application* with an API key. After logging in, you receive a session token (Bearer) to use for other related API calls.


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

- **User Login** - Provides a way for **users** to access and manage a Conversational Cloud session. A session could be a customized workspace or hosting a Conversational Cloud user in an external app. Use the Conversational Cloud username and password, and refer to [User Login](https://developers.liveperson.com/login-service-api-methods-user-login.html) for more details.

   <div class="notice">Logged in users are managed under the same restrictions as regular users in Conversational Cloud, including password expiration, concurrent conversation limits, skill groups and so on.  If your account has SSO enabled, this method is not standalone, and you must register the relevant user through your hub to provide Conversational Cloud with an SSO SAML assertion.</div>

- **Application** - Provides a way for **applications** to access and manage Conversational Cloud sessions, such as bots, virtual agents, or other apps that need to act as an agent. The Application Login method overcomes both issues detailed in the User Login method (above), such as password expiration or SSO integration. For more details, refer to [Application Login](https://developers.liveperson.com/login-service-api-methods-application-login.html).

   <div class="important">
   To login as an application, you must have the <i>User Type - Bot</i> feature activated.  If you do not, contact your account team before proceeding.
   </div>

### Step 3. Create an OAuth 1.0 API key and new Bot

[Refer to our Getting Started guide for more information on creating API keys](common-resources-create-api-keys.html). You'll need the details (like username or app secert) to use the methods of this API mentioned above so make sure to note them.
