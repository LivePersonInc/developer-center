---
pagename: Using LivePerson Functions with a Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Tutorials & Guides
permalink: conversation-builder-tutorials-guides-using-liveperson-functions-with-a-bot.html
indicator: both
---

### Introduction

Use the [LivePerson Functions integration](conversation-builder-integrations-liveperson-functions-integrations.html) to invoke a function (lambda) that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service or FaaS) platform. There are no constraints here; if there is some custom logic (a function) you want to invoke with a bot, you can do it with a LivePerson Functions integration.

To enable the use of LivePerson's Function (FaaS) integrations, please contact your LivePerson account representative for assistance.

### LivePerson Functions - Configure the function

1. Access LivePerson Functions from Conversational Cloud by clicking the menu in the lower-left corner.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/guideFunctions_menuOption.png">

2. Create and configure a function with the custom JavaScript logic that you need for your use case. As an example, the following function takes `item` and `price` from the `input` Object, and, based on the value of price, it decides which sentence to send back to the bot. (This sentence is subsequently displayed in the conversation.)

    <img class="fancyimage" style="width:650px" src="img/ConvoBuilder/guideFunctions_exFunction.png">

3. Once you’re happy with your function, deploy it.

    You should see the status of the function change from `Modified` to `Productive`.

### Conversation Builder - Configure the integration

1. Within Conversational Cloud, open Conversation Builder and click the **Integrations** tab.
2. Provide a name for the function’s integration. In our example, we'll use `UnsolicitedCommentFunction`.
3. Set the **Integration Type** to `FaaS`.
4. Select the `Productive` function that you want to integrate.
5. **Function Headers**: This is where you should set particular key/value pairs like bot variables or slots.
6. **Function Payload**: This is where you should set a specific JSON body to send to the function. **Note:** In the example below, for demonstration purposes, the two slots are being set in both the headers and the payload. By doing this, you’re able to understand the correct notation to use. In a real world scenario, the best practice is to use slots, custom variables, and bot variables as Function Headers and a JSON body to be set as the Function Payload.
7. **Transform Result Script**: To process the response coming from the function, you can set the following code to extract it in a JSON format and then send the sentence (in this case, it's a string) directly as a bot message.

```javascript
var faasData = botContext.getBotVariable("api_UnsolicitedCommentFunction");
var faasJsonData = JSON.parse(faasData.jsonData);
var jsonResponse = faasJsonData.api_UnsolicitedCommentFunction;
botContext.sendMessage(jsonResponse);
```

In this scenario the Transform Result Script is used because the function is simply returning a string. In the case where a function returns a complex JSON structure, it's up to you to use the same or to take advantage of the Custom Data Fields. For instance, if the response from the function were:

`{“response”: “200$ is way too much for a bag!”}`

You could set the following as Custom Data Fields:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_customDataFields.png">

Then, you could use the `response` within a dialog’s interaction by using the following notation: 

`{UnsolicitedCommentFunction.response}`

Here’s a visual summary of what needs to be done within the Integrations tab:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_integrationSettings.png">

### Conversation Builder - Configure the dialog

1. Create an interaction of type Integration, and select from the dropdown the function’s integration.
2. Save the change.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_dialog.png">

### Conversation Builder - Preview

This is the end user's experience in a conversation:

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/guideFunctions_preview.png">
