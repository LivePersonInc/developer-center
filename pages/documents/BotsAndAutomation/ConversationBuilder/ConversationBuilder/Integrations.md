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

Conversation Builder allows users to configure API integrations that are invoked when processing a dialog. Integrations are useful for sending or receiving necessary data from other systems.

The Conversation Builder [templates](conversation-builder-templates-overview.html) include common integrations. For example, the [Simple FAQ](conversation-builder-templates-simple-faq.html) template includes a Knowledge Base integration.

Want some practice with integrations? [Tutorial #3](conversation-builder-getting-started-3-integrations.html) provides a walkthrough of adding one. You'll need to complete [tutorial #1](conversation-builder-getting-started-1-dialogs-and-patterns.html) and [tutorial #2](conversation-builder-getting-started-2-intents.html) first.

### Integration types
An integration can be one of the following types:

- **API**: Use this type to invoke an API that performs some action. You might want to fetch data from a Customer Relationship Management (CRM) system or Content Management System (CMS). Or, you might want to query a brand internal API to get information needed to answer a question or to look up a customer's history.
- **Email**: Use this type to send an email.
- **Knowledge Base**: Use this type to search a knowledge base for articles.
- **LivePerson Agent Escalation**: Use this type to transfer the conversation to another skill.
- **FaaS**: Use this type to invoke a function (`lambda`) that has been created and deployed via the [LivePerson Functions](liveperson-functions-overview.html) UI.

### Add a FaaS integration

Before you add a FaaS integration in Conversation Builder, you must create and deploy the function (`lambda`) using the LivePerson Functions UI. For help with this, see [here](liveperson-functions-getting-started.html).

**To add a FaaS integration**

1. Open the automation, and click **Integrations** in the upper-left corner.
2. Configure the integration settings:
    - **Integration Name**: 
    - **Response Data Variable Name**: 
    - **Integration Type**: Select **FaaS**.
    - **Credential**: 
    - **Function**:
    - **Version Number**:
    - **FaaS User ID**:
    - **Function Headers**:
    - **Function Payload**: Enter the payload to pass into the function.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result into JSON format, so you can use the information in the automation's dialogs. For more on this, see [Transform an API result](#transform-an-api-result) farther below.
    - **Custom Data Fields**: 
3. Click **Save**.

### Transform an API result

You can invoke non-LivePerson APIs from Conversation Builder. With JavaScript code, you can process the responses (typically in a JSON format) and use the information within the dialogs of your bot.

The following screen from the API integration setup shows that you must remember to use the "Response Data Variable Name" with the “api_” prefix when it comes to **_Transform Result Script_** (the place where you manipulate the API response as you want).

<img class="fancyimage" width="550" src="img/ConvoBuilder/bestPractices/tips_integration-setup.png">

1. Get the raw API response and save it in a variable:

    ```javascript
    var getContextData = botContext.getBotVariable("api_GetContext");
    ```

2. Turn this into a JavaScript object, so you can access the properties:

    ```javascript
    var getContextJsonResponse = JSON.parse(getContextData.jsonData);
    ```

    If you were to debug log the `getContextJsonResponse`, this would give you an object such as:

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
    The first property of that object is named `api_GetContext`, so adjust this with whatever the name you gave to your Bot Response Variable when defining the integration and append to the “**api_**” prefix.

3. Clean the JSON.

    To access the actual JSON from your response, you would need to perform one more extraction like this to make it easier to reference:

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

4. Extract the key/value pairs from the JSON-format response and create bot-level variables as required.

    This means you can now access the various properties directly via these lines of code:

    ```javascript
    var company = jsonResponse.company;
    var guid = jsonResponse.guid || false;
    var age = jsonResponse.age || false;
    var email = jsonResponse.email || false;
    ```

    {: .important}
    The `|| false` construction means if the requested value does not exist, we will return false. This allows us to easily check later on if this was populated. (You could also use **null** in place of false if you prefer, as that is a **FALSE** value within JavaScript when it comes to conditional comparisons.)

5. Set bot-level variables using those values and output them within a text interaction:

```javascript
botContext.setBotVariable("guid", guid, true, false);
botContext.setBotVariable("age", age, true, false);
botContext.setBotVariable("email", email, true, false);
botContext.printDebugMessage("*** checking values were set: " + guid + age + email);
```

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_40.png">

### Check the API response status

You can obtain the HTTP status code of the API response using this special variable syntax:

```javascript
var statusCode = botContext.getBotVariable("api_<RESPONSE DATA VARIABLE NAME OF INTEGRATION>Status");
```

So, for an API Integration with the following settings:
* Integration Name = `RegisterNamespace`
* Response Data Variable Name = `RegisterNamespace`

You would get the response status code by using the following:

```javascript
var statusCode = botContext.getBotVariable("api_RegisterNamespaceStatus");

botContext.printDebugMessage(">>> api_RegisterNamespaceStatus statusCode:" + statusCode);
```

You can then check if the value matches the desired HTTP response code for successful operation and then proceed to trigger the next desired message interaction within your dialog.

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

### OAuth2 configuration

Conversation Builder supports simple key based authentication for API integrations as well as OAuth2 authentication. This allows any bots built on Conversation Builder to make API calls that require an access token that is obtained via the OAuth2 protocol.

#### Credentials

Conversation Builder allows you to store credentials for every organization. One of the supported types is OAuth2 credentials that the resource owner will have to create. 

#### API integration

Conversation Builder allows you to attach credentials to bot API integrations. When the bot is processing a dialog and needs to call an API integration as part of dialog flow, then it will use the associated credentials to authenticate and perform necessary actions.

#### Example guide with Salesforce

1. Credentials view:

    Go to Accounts -> Choose your organization.

    <!--<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_0.png">-->

    Click the 3 dots and choose Credentials.

2. Create new credentials.

    <img class="fancyimage" style="width:950px" src="img/ConvoBuilder/oauth2_image_1.png">

    Click Add Credentials.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_2.png">

    Choose a name and the type as OAuth 2.0. Click Next.

3. Set the callback/redirect uri in the resource:

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_3.png">

    Click copy, and it will copy the redirect URI to your clipboard.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/oauth2_image_4.png">

    Set that redirect URI in Salesforce (or any other resource), and save.

4. Authorize:

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/oauth2_image_5.png">

    Set all the necessary fields from the OAuth2 configuration in your app, and click Authorize.

    {: .note}
    Scope is optional.

    This step will persist the credentials and will proceed to authorizing them with the resource. Next time you have to authorize with the same credentials, you can skip all the previous stages and authorize the existing credentials from the credentials view.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/oauth2_image_6.png">

    You will get redirected to Salesforce (or any other resource) for authentication. If a session is already cached, then you might be redirected immediately back to Conversation Builder, or you’ll have to allow the authorization.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/oauth2_image_7.png">

    If all credentials are valid, you will be redirected back to Conversation Builder, and you’ll see that pop-up. At this point, the token is persisted in Conversation Builder and can be used freely by bots.

5. Attach credentials to a bot’s API integration.

    Create an API integration for the bot. Create it as if it is an unauthenticated API.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/oauth2_image_8.png">

    Attach the relevant credentials to the API integration. The bot will automatically enhance the request based on the credentials’ type and data.

### Delete an integration
{ add intro describing important considerations/actions before doing this }

**To delete an integration**

1. In the automation, click **Integrations**.
2. In the left panel, move your mouse over the integration name, and click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> icon that appears.
3. Click **Delete Integration**, and then click **Yes** in the confirmation dialog that appears.

### Display integration data in an interaction

For information on how to display in an interaction the data that's retrieved by an integration call and stored in the integration's custom data fields, see [here](conversation-builder-conversation-builder-interactions.html).