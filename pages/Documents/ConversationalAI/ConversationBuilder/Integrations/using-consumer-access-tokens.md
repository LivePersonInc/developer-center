---
pagename: Using Consumer Access Tokens
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-using-consumer-access-tokens.html
indicator: both
---

### Introduction

Brands can provide LivePerson's Conversational Builder bots a consumer (OAuth 2.0) access token. This token can later be used to access the brand's APIs on behalf of the consumer.

By configuring Consumer Authentication credentials, an authentication challenge is sent to the consumer. Once authentication is completed, an access token is obtained and sent to the bot. This “delegates” access to the bot, so it can make the API calls.

This can be done in order to accomplish many business and operational use cases on which bots integrate with brand's APIs such as:

* To enrich conversation by retrieving information about the consumer
* To perform an operation on behalf of the consumer

{: .attn-note}
LivePerson strongly recommends Consumer Pre-Authentication credentials over Consumer Authentication credentials; [learn why](bot-accounts-credentials.html#how-does-consumer-pre-authentication-differ-from-consumer-authentication).

### The flow

You can create a Consumer Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the bot to make API calls on behalf of the consumer. With this credential, the consumer receives an authentication link, uses it to authenticate, and obtains a token that is sent to the bot. This “delegates” access to the bot, so it can make the API calls. The general flow is this:

   <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/delegation_flow.png" alt="The flow for consumer authentication">

1. In the bot, the Integration interaction is triggered in the dialog.
2. The bot sends an authentication URL (a plain link) to the consumer.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/creds_consumer_auth_2.png" alt="Sending an authentication URL to the consumer">

3. The consumer clicks the link, is directed to the authentication URL (e.g., a login page), and authenticates, thereby obtaining a token.
4. The token is sent to the bot.
5. The bot runs the integration (with the token) and responds with a result.

### Implementation steps

#### 1. Configure Consumer Authentication credentials

In Bot Accounts, [add the Consumer Authentication credential](bot-accounts-credentials.html#add-a-consumer-authentication-credential).

#### 2. Integrate with your brand's API

To use a defined Consumer Authentication credential in a bot, go into the bot and add an API integration. When you do, select the Consumer Authentication credential that you created and provide the endpoint.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/consumerAuthCred.png" alt="Selecting the Consumer Authentication credential in the integration's settings on the Add Integration window">

Then, add the provided access as an authorization header to the API integration.
In request headers, add authorization header:
**key** = Authorization
**value** = Bearer {$botContext.cidp_accessToken}

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/authorizationDelegation.png" alt="Adding the authorization header in the request parameters">

#### 3. Configure the delegated access provider

Follow this configuration guide: [Consumer Delegation](consumer-delegation-configuration.html)

#### 4. Configure the dialog

The dialog should include an API integration and consumer verification delegation button.

{: .attn-note}
The API integration must be included and ordered in the dialog flow before the consumer verification dialog button.

##### 4.1 Add the integration

Add the integration that requires the consumer access token and make sure the following are applied:

* "Next action" should be using custom rules — one for failure and the other for success.
In case of API failure, route the dialog to the connsumer delegation link.
* The following code should be included as a pre-process code for the Integration API.

```bash
var cidp_accessToken = botContext.getWebViewVariable('cidp_accessToken');

if(cidp_accessToken) {
  botContext.setBotVariable('cidp_accessToken',cidp_accessToken,true,false);
}
```

##### 4.2. Add the consumer delegation link to the conversation flow

Before accessing the protected integrated API, we need to prompt the user to verify their identity. This will be done in the conversation dialog by adding an interactive button to the conversation.
The following paraeter should be define in the [interactive button/questions](conversation-builder-interactions-questions.html):
**Button Label** = Login
**Action Type** = Web URL
**Webview** = Full
**Target** = New Window
**Callback** = {$botContext.external_auth_url}

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/loginDialogBoxInDelegationFlow.png" alt="Adding an interactive button, to provide the consumer delegation link">