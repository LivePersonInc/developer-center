---
pagename: Using Consumer Access Tokens
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-using-consumer-access-tokens.html
indicator: both
---

### Introduction

Brands can provide LivePerson's Conversational Builder Bots a consumer (OAuth 2.0) access token. This token can later be used to access the brand's APIs on behalf of the consumer.  
By [configuring Consumer Authentication credentials](conversation-builder-integrations-using-consumer-access-tokens.html#configure-consumer-authentication-credentials), an authentication challange is sent to the consumer. Once autnentication is completed, an access token is obtained and sent to the bot. This “delegates” access to the bot, so it can make the API calls.  
This can be done in order to accomplish many business and operational use cases on which Bots integrates with brand's APIs such as:
* To enrich conversation by retrieving information about the consumer.
* To making an operation on behalf of the user

### The Flow

You can create a Consumer Authentication credential and use it in [API integrations](conversation-builder-integrations-api-integrations.html) when you require the bot to make API calls on behalf of the consumer. With this credential, the consumer receives an authentication link, uses it to authenticate, and obtains a token that is sent to the bot. This “delegates” access to the bot, so it can make the API calls. The general flow is this:

   <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/delegation_flow.png">

1. In the bot, the Integration interaction is triggered in the dialog.
2. The bot sends an authentication URL (a plain link) to the consumer.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/creds_consumer_auth_2.png">

3. The consumer clicks the link, is directed to the authentication URL (e.g., a login page), and authenticates, thereby obtaining a token.
4. The token is sent to the bot.
5. The bot runs the integration (with the token) and responds with a result.

### Configure Consumer Authentication credentials

1. In the Bot Accounts application, select the name of the organization for which to create the credential.
2. Click **Credentials** in the upper-left corner.
3. Click **Add Credentials** in the upper-right corner.
4. In the Add Credentials dialog box, specify the following:
    * **Name**: Enter a descriptive name.
    * **Authentication Type**: Select "Consumer Authentication."
5. Click **Next**.
6. In the Add Credentials dialog box, specify the following:
    * **Authentication URL**: Enter the authentication endpoint to be sent to the consumer in order to obtain an access token that is sent to the bot. The URL is provided by the resource provider; see their documentation for this information.
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/creds_consumer_auth_1.png">
7. Click **Save**.

### Add Consumer Delegation Link to the Conversation Flow
--@Mary to add--

### Integrate with Brand API
--@Mary to add--

### Configure Delegated Access Provider
Follow this guide: [Consumer Delegation](consumer-delegation-introduction.html)
