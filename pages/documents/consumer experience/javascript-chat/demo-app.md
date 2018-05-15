---
title: Sample App
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK

order: 5
permalink: consumer-experience-javascript-chat-sample.html

indicator: chat
---

This sample app includes information on how to work with the SDK. There are two flows:

- [Unmonitored Flow](#unmonitored-flow)
- [Monitored Flow](#monitored-flow)

Download the Sample App from the following [Github repository](https://github.com/LivePersonInc/chat-js-sdk-sample-app){:target="_blank"}.

### Unmonitored Flow

###  Prerequisites for un-monitored flow

- An existing LiveEngage site - [click here](https://register.liveperson.com/){:target="_blank"} to create a site.      
- An existing API-based engagement window configured in LiveEngage.
- An existing External engagement configured in LiveEngage, which refers to the above API-based engagement window. 
- An available user (agent) who is logged into LiveEngage.

*Note: Please contact your LivePerson representative in order to create your API-based engagement window and External engagement.*

###  Launch your API-based Window in an Unmonitored Flow

1. From the Sample App project, open the "index.html" file in the browser.
2. Once open in the browser add the following query params `/index.html?site={siteId}&lptag=false`. 
3. An engagement button should be displayed on this page.
4. Click the chat button to start a chat.

### Monitored Flow

###  Prerequisites for monitored flow

- An existing LiveEngage site - [click here](https://register.liveperson.com/){:target="_blank"} to create a site.
- An existing API-based engagement window configured in LiveEngage, with the context:`window` and methodName: `externalJsMethodName`. <br> *Note: Please contact your LivePerson representative in order to create your API-based engagement window.*
- An existing Website engagement configured in LiveEngage, which refers to the above API-based engagement window.  <br> *Note: This is configured in the Engagement template gallery.*
- An available user (agent) who is logged into LiveEngage.

###  Launch your API-based Window in a Monitored Flow

1. From the Sample App project, open the "index.html" file in the browser.
2. Once open in the browser add the following query params `/index.html?site={siteId}&lptag=true`. 
3. An engagement button should be displayed on this page.
4. Click the chat button to start a chat.


### Authenticated users Flow

####  Prerequisites for authentication flow

- In our Sample App project there is an example of using [Auth0](https://auth0.com/) with liveEngage authenticated visitors flow.
- Inside script.js you will find two parameters: AUTH0_CLIENT_ID, AUTH0_DOMAIN, fill them with your own data.
- Fill the correct data in the [Data Sources](/guides-authentication-configuration.html){:target="_blank"} section on LiveEngage;
