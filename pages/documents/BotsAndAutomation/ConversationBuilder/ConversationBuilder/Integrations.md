---
pagename: Integrations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-integrations.html
indicator: both
---

Conversation Builder allows users to configure API Integrations to be invoked when processing a dialog. These API integrations are useful for getting data from external sub-systems. For example, an integration can fetch data from a Customer Relationship Management (CRM) system or from a Content Management System (CMS). 

### OAuth2 Configuration

Conversation Builder supports simple key based authentication for API Integrations as well as OAuth2 authentication. This allows any bots built on Conversation Builder to make API calls that require an access token that is obtained via the OAuth2 protocol.

#### Credentials

Conversation Builder allows you to store credentials for every organization. One of the supported types is OAuth2 credentials that the resource owner will have to create. 

#### API Integration

Conversation Builder allows you to attach credentials to bot API integrations. When the bot is processing a dialog and needs to call an API Integration as part of dialog flow, then it will use the associated credentials to authenticate and perform necessary actions.

#### Example Guide with Salesforce

1. Credentials view

    Go to Accounts -> Choose your organization

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_0.png">

    Click on the 3 dots and choose Credentials

2. Create new credentials

    <img class="fancyimage" style="width:950px" src="img/ConvoBuilder/oauth2_image_1.png">

    Click on Add Credentials

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_2.png">

    Choose a name and the type as OAuth 2.0 -> Click on Next

3. Set the callback/redirect uri in the resource

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_3.png">

    Click on copy and it will copy the redirect URI to your clipboard

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/oauth2_image_4.png">

    Set that redirect URI in Salesforce (or any other resource) -> Save

4. Authorize

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/oauth2_image_5.png">

    Set all the necessary fields from the OAuth2 configuration in your app -> Click on Authorize

    {: .note}
    Scope is optional

    This step will persist the credentials and will proceed to authorizing them with the resource. Next time you have to authorize with the same credentials, you can skip all the previous stages and authorize the existing credentials from the credentials view.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/oauth2_image_6.png">

    You will get redirected to Salesforce (or any other resource) for authentication. If a session is already cached then you may be immediately redirected back to Conversation Builder, or you’ll have to allow the authorization.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/oauth2_image_7.png">

    If all credentials are valid, you will be redirected back to Conversation Builder and you’ll see that popup. At this point the token is persisted in Conversation Builder and can be used freely by bots.

5. Attach credentials to a bot’s API integration

    Create an API integration for the bot. Create it as if it is an unauthenticated API.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_8.png">

    Attach the relevant credentials to the API integration. The bot will automatically enhance the request based on the credentials’ type and data.

