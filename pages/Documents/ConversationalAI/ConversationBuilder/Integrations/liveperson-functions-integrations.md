---
pagename: LivePerson Functions Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-liveperson-functions-integrations.html
indicator: both
---

Use the LivePerson Functions integration to invoke a function (lambda) that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service or FaaS) platform. There are no constraints here; if there is some custom logic (a function) you want to invoke with a bot, you can do it with a LivePerson Functions integration.

{: .important}
Enabling the use of LivePerson's Function (FaaS) integrations requires a configuration change made by LivePerson. Contact your LivePerson account representative for assistance.

### Add a LivePerson Functions integration

**To add a LivePerson Functions integration**

1. Open the bot, and click **Integrations** in the upper-left corner.
2. Configure the integration settings:
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **FaaS**.
    - **Function**: Select the function (`lambda`) to invoke via this integration. You can select from all functions added under your LivePerson account. Each is listed with its status.
    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/integrations_faaSFunctionList.png">
    The Function list provides an easy pass-through to the Functions UI in case you still need to create or modify the relevant function. Clicking **Create New Function** or <img style="width:20px" src="img/ConvoBuilder/icon_pencilModify.png"> (pencil icon) beside a function name opens a new browser window and prompt you to log into the Functions UI where you can do the work. Once done, return here and click <img style="width:25px" src="img/ConvoBuilder/icon_functionReload.png"> (reload icon) to refresh the Function list if needed.
    - **Function Headers**: Add the necessary data in key/value pairs to pass into the request via the header.
    - **Function Payload**: Enter the payload to pass into the function.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialogs. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields. For more on this, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).
3. Click **Save**.

### Example guide

For a step-by-step, example guide that uses this integration, see [here](conversation-builder-tutorials-guides-using-liveperson-functions-with-a-bot.html).
