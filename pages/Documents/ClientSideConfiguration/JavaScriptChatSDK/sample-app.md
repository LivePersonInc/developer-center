---
pagename: Sample App
redirect_from:
  - consumer-experience-javascript-chat-sample.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK

order: 5
permalink: javascript-chat-sdk-sample-app.html

indicator: chat
---

This sample app includes information on how to work with the SDK. There are two flows:

- [Unmonitored Flow](#unmonitored-flow)
- [Monitored Flow](#monitored-flow)

Download the Sample App from the following [GitHub repository](https://github.com/LivePersonInc/chat-js-sdk-sample-app).

### Unmonitored flow

#### Prerequisites for un-monitored flow

- An existing Conversational Cloud site — [click here](https://register.liveperson.com/) to create a site.      
- An existing API-based engagement window configured in Conversational Cloud.
- An existing External engagement configured in Conversational Cloud, which refers to the above API-based engagement window.
- An available user (agent) who is logged into Conversational Cloud.

*Note: Please contact your LivePerson representative in order to create your API-based engagement window and External engagement.*

#### Launch your API-based window in an unmonitored flow

1. From the Sample App project, open the "index.html" file in the browser.
2. Once open in the browser add the following query params `/index.html?site={siteId}&lptag=false`.
3. An engagement button should be displayed on this page.
4. Click the chat button to start a chat.

### Monitored flow

#### Prerequisites for monitored flow

- An existing Conversational Cloud site — [click here](https://register.liveperson.com/) to create a site.
- An existing API-based engagement window configured in Conversational Cloud, with the context:`window` and methodName: `externalJsMethodName`. <br> *Note: Please contact your LivePerson representative in order to create your API-based engagement window.*
- An existing Website engagement configured in Conversational Cloud, which refers to the above API-based engagement window.  <br> *Note: This is configured in the Engagement template gallery.*
- An available user (agent) who is logged into Conversational Cloud.

#### Launch your API-based window in a monitored flow

1. From the Sample App project, open the "index.html" file in the browser.
2. Once open in the browser add the following query params `/index.html?site={siteId}&lptag=true`.
3. An engagement button should be displayed on this page.
4. Click the chat button to start a chat.

### Authenticated users flow

#### Prerequisites for the authentication flow

- In our Sample App project there is an example of using [Auth0](https://auth0.com/) with Conversational Cloud authenticated visitors flow.
- Inside script.js you find two parameters: AUTH0_CLIENT_ID, AUTH0_DOMAIN; fill them with your own data.
- Fill the correct data in the [Data Sources](/guides-authentication-configuration.html) section in the Conversational Cloud.