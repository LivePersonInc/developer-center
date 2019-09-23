---
pagename: API integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-api-integrations.html
indicator: both
---

Use an API integration to perform some action via an external system. It’s common to use an API integration to retrieve or post data to an external system. For example, you might want to retrieve information on specific items in your product catalog, so you can use that information in interactions in a dialog.

For practice at using an API integration, try [tutorial #3](conversation-builder-getting-started-3-integrations.html). (You’ll need to complete [tutorial #1](conversation-builder-getting-started-1-dialogs-and-patterns.html) and [tutorial #2](conversation-builder-getting-started-2-intents.html) first, as the tutorials build on each other.)

**To add an API integration**

1. Open the bot, and click **Integrations** in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **API**.
    - **Method**: Select the type of HTTP request method.
    - **URL**: Enter the request target, the URL.
    - **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authentication if applicable. The bot will automatically enhance the request based on the credential's type and data.
    - **Request Headers**: Add any message headers to include in the request.
    - **Request Parameters**: Add the request parameters to pass in the URL’s query string.
    - **Post Body**: Enter the payload to send.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).
3. Click **Save**.