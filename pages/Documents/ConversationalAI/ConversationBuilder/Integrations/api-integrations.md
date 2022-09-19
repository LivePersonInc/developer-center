---
pagename: API Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-api-integrations.html
indicator: both
---

### Introduction

API Integrations allow Conversation Builder to perform some action or access the features or data of an external service. For example, you might want to retrieve information on specific items in your product catalog, so you can use that information in interactions in a dialog.

For practice at using an API integration, try the [Integrations tutorial](tutorials-guides-getting-started-with-bot-building-integrations.html). (You’ll need to complete the Dialogs & Patterns tutorial and the Intents tutorial first, as the tutorials build on each other.)

{: .important}
If you have [IP restrictions](https://knowledge.liveperson.com/security-regulations-security-ip-restriction.html) in place, you'll need to do some [whitelisting](conversation-builder-networking-security.html) before adding an API integration.<br><br>An API integration call times out in 20 seconds; within that time, the integration attempts 3 retries. This isn’t configurable.

### Add an API integration

1. Open the bot, and click **Integrations** in the upper-left corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **API**.
    - **Method**: Select the type of HTTP request method.
    - **URL**: Enter the request target, the URL. You might want to pass variable values via the URL, like so:

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/integrations_api_url.png" alt="The URL field in the integration settings">

    - **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authentication if applicable. The bot will automatically enhance the request based on the credential's type and data.
    - **Request Headers — Use default headers**: When this toggle is on, the following request headers are included automatically in the API request:
        * Accept: application/json;charset=UTF-8
        * Content-Type: application/json;charset=UTF-8
        
        Since these headers are commonly used, the toggle is on by default as a convenience. However, you can use different values if required by your API: Just turn off the toggle, and add the headers manually as key/value pairs.
    - **Request Headers — key/value pairs**: Add any message headers to include in the request.
    - **Request Parameters**: Add the request parameters to pass in the URL’s query string. It's more common to pass variable values as key/value pairs added here:

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/integrations_api_request_parameters.png" alt="An example of specifying a request parameter">

    - **Post Body**: Enter the payload to send. You can also pass variable values using the post body, by writing them in JSON here:

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/integrations_api_post_body.png" alt="An example of passing variable values using the post body">

    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add [the fields](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields) that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields.
3. Click **Save**.

### Security best practices

When implementing API integrations, follow these security best practices:

* **URLs** and **URL parameters**: HTTPS and HTTP are supported. Don’t send credentials or sensitive data in the parameters.
* **Credentials**: Use a secure form of authentication and authorization. OAuth is recommended, but for a comparative list of credential types, see [this section](bot-accounts-credentials.html#credential-types-authentication-types).
* **API**: Your brand’s API should be designed according to security standards. For example, at a minimum, use an authentication mechanism. Also provide support for other best practices, such as protecting the API from high volume and bursts in traffic.
* **API response handling**: For security and privacy reasons, you must not log returned customer data using the JavaScript API or store the data in permanent variables.

### Disabling the predefined request header fields (legacy)

{: .important}
This section discusses a legacy approach to disabling the predefined request headers in an API integration. The approach requires a bit of JavaScript code. But there's a simpler way: In the API integration, simply disable the **Use default headers** toggle. For more on this toggle, see "Add an API integration" farther above.

As a convenience, the following request header fields are predefined for an API integration:

* Accept: application/json;charset=UTF-8
* Content-Type: application/json;charset=UTF-8

Since the values are predefined, they're always used regardless of how you've configured the integration. However, if desired, you can disable these predefined header fields in order to use different values. To disable them for only the current request, use the following Pre-Process Code in the Integration interaction:

`botContext.setBotVariable("__standardHeaders__", "off", false, false);`

To disable them for the current session, use:

`botContext.setBotVariable("__standardHeaders__", "off", true, false);`

### Handling API responses

In the [Integration interaction](conversation-builder-interactions-integrations.html#integration-interactions) that invokes the API, you can define custom rules based on the result of the API call, i.e., its success or failure. [This is done using the "API Result" match type](conversation-builder-interactions-integrations.html#defining-rules-based-on-the-result-of-the-api-integration).

In the case of a failure response (a returned status code other than 200 or 201), the bot sends a default error message of, "Sorry, I could not find anything for that." To override this message and send a different one, define a custom rule based on a failure result, as mentioned above.

Be aware that the API's response of success or failure only indicates whether the request was successfully received and processed. It doesn't indicate whether any results were returned. To determine this, you'll need to use JavaScript in the Post-Process Code of the Integration interaction to check for any results. You can then direct the conversation flow accordingly, for example:

```javascript
var count = botContext.getBotVariable("FAQS.article.count");
if(count < 1){
botContext.setTriggerNextMessage("No Articles Found");
}else{
botContext.setTriggerNextMessage("Display Article");
}
```