---
pagename: Integrations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-integrations.html
indicator: both
---

Conversation Builder allows users to configure API Integrations to be invoked when processing a dialog. These API integrations are useful for getting data from external sub-systems. 

Use cases include, but are not limited to:

* fetch data from a Customer Relationship Management (CRM) system or from a Content Management System (CMS).
* transfer the conversation to another skill
* search the Knowledge Base
* query a brand internal API to get the information needed to answer a question or look up a customer’s history

Each integration will need to define the following items (if necessary) to make the API accept the request from Conversation Builder.

* URL to call
* Method (GET,POST etc)
* any headers
* post body params 

[See a basic walkthrough in the Getting Started.](conversation-builder-getting-started-3-integrations.html)

Conversation Builder [Templates](conversation-builder-templates-overview.html) also include common integrations. For example, the [Simple FAQ](conversation-builder-templates-simple-faq.html) includes a Knowledge Base integration.

### Transforming an API result

You can invoke non-LivePerson APIs from Conversation Builder. With javascript code, you can process the responses (typically in a JSON format) and use the information within the dialogs of your bot.

The following screen from the API integration setup shows that you must remember to use the "Response Data Variable Name" with the “api_” prefix when it comes to **_Transform Result Script_** (the place you manipulate the API response as you wish).

<img class="fancyimage" width="550" src="img/ConvoBuilder/bestPractices/tips_integration-setup.png">

1. Get the raw API response and save in a variable

    ```javascript
    var getContextData = botContext.getBotVariable("api_GetContext");
    ```

2. Turn this into a javascript object so you can access the properties

    ```javascript
    var getContextJsonResponse = JSON.parse(getContextData.jsonData);
    ```

    If you were to debug log the `getContextJsonResponse` this would give you an object such as…

    ```json
    {
        "api_GetContext" : {
            "_id": "5d15f436966b92b943be9219",
            "index": 5,
            "guid": "4f60a28d-3eae-4f2d-abd2-184931b57c6e",
            "isActive": false,
            "balance": "$1,023.36",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "blue",
            "name": {
                "first": "Moon",
                "last": "Petty"
            },
            "company": "KONGENE",
            "email": "moon.petty@kongene.ca",
            "phone": "+1 (962) 489-3119"
        }
    }
    ```

    {: .important}
    The first property of that object is named `api_GetContext` - so adjust this with whatever the name you gave to you Bot Response Variable when defining the integration and append to the “**api_**” prefix.

3. Clean the JSON

    To access the actual JSON from your response you would need to perform one more extraction like this to make it easier to reference.

    ```javascript
    var jsonResponse = getContextJsonResponse.api_GetContext;
    ```

    Where `jsonResponse` would now be:

    ```json
    {
        "_id": "5d15f436966b92b943be9219",
        "index": 5,
        "guid": "4f60a28d-3eae-4f2d-abd2-184931b57c6e",
        "isActive": false,
        "balance": "$1,023.36",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "eyeColor": "blue",
        "name": {
            "first": "Moon",
            "last": "Petty"
        },
        "company": "KONGENE",
        "email": "moon.petty@kongene.ca",
        "phone": "+1 (962) 489-3119"
    }
    ```

4. Extract the key/value pairs from the JSON format response and create bot level variables as required.

    Meaning you could now access the various properties directly via these such lines of code:

    ```javascript
    var company = jsonResponse.company;
    var guid = jsonResponse.guid || false;
    var age = jsonResponse.age || false;
    var email = jsonResponse.email || false;
    ```

    {: .important}
    The `|| false` construction means if the requested value does not exist, we will return false - allowing us to easily check later on if this was populated. (you could also use **null** in place of false if you prefer, as that is a **FALSEY** value within javascript when it comes to conditional comparisons)

5. Set Bot level variables using those values and output them within a text interaction

```javascript
botContext.setBotVariable("guid", guid, true, false);
botContext.setBotVariable("age", age, true, false);
botContext.setBotVariable("email", email, true, false);
botContext.printDebugMessage("*** checking values were set: " + guid + age + email);
```

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_40.png">

### Checking the API Response Status

You can obtain the HTTP status code of the API response using this special variable syntax.

```javascript
var statusCode = botContext.getBotVariable("api_<RESPONSE DATA VARIABLE NAME OF INTEGRATION>Status");
```

So for an API Integration with the following settings:
* Integration Name = `RegisterNamespace`
* Response Data Variable Name = `RegisterNamespace`

You would get the response status code by using the following:

```javascript
var statusCode = botContext.getBotVariable("api_RegisterNamespaceStatus");

botContext.printDebugMessage(">>> api_RegisterNamespaceStatus statusCode:" + statusCode);
```

You can then check if the value matches the desired HTTP response code for successful operation and then proceed to trigger the next desired message interaction within your dialog

```javascript
if (statusCode === 204 || statusCode === 201) {
    botContext.printDebugMessage(">>> api_RegisterNamespaceStatus API success");
    botContext.setTriggerNextMessage("saveContext");
} else {
    botContext.printDebugMessage("!!! api_RegisterNamespaceStatus API failure");
    botContext.setTriggerNextMessage("sdeSender_FAILED");
}
```

Typically, this block of code is placed in the POST PROCESS section attached to calling an API integration within a dialog.

<img class="fancyimage" width="700" src="img/ConvoBuilder/bestPractices/tips_image_41.png">

### OAuth2 Configuration

Conversation Builder supports simple key based authentication for API Integrations as well as OAuth2 authentication. This allows any bots built on Conversation Builder to make API calls that require an access token that is obtained via the OAuth2 protocol.

#### Credentials

Conversation Builder allows you to store credentials for every organization. One of the supported types is OAuth2 credentials that the resource owner will have to create. 

#### API Integration

Conversation Builder allows you to attach credentials to bot API integrations. When the bot is processing a dialog and needs to call an API Integration as part of dialog flow, then it will use the associated credentials to authenticate and perform necessary actions.

#### Example Guide with Salesforce

1. Credentials view

    Go to Accounts -> Choose your organization

    <!--<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_0.png">-->

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

