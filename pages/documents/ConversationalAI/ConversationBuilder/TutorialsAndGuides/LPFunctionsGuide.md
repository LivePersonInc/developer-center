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

Use the LivePerson Functions integration to invoke a function (lambda) that is deployed to the LivePerson Functions (Function as a Service or FaaS) platform. There are no constraints here; if there is some custom logic (a function) you want to invoke with a bot, you can do it with a LivePerson Functions integration.

To enable the use of LivePerson's Function (FaaS) integrations please contact your LivePerson account representative for assistance.

### LivePerson Functions - Function configuration

1A. Access FaaS from LiveEngage by clicking on the menu at the bottom left.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_menuOption.png">

1B. Create and configure a Function with the custom JavaScript logic you need to use for your use case. As an example, the following Function takes `item` and `price` from the `input` Object and based on the value of price it decides which sentence to send back to the Bot which will consequently display in the conversation.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_exFunction.png">

2. Once you’re happy with your Function, deploy it. You should see the status of the Function to change from `Modified` to `Productive`.

### Conversation Builder - Integrations

1. Within LiveEngage, go to Conversation Builder and then click on the Integrations tab.
2. Provide a name for the Function’s Integration. In the example below, `UnsolicitedCommentFunction`
3. Set Integration Type to `FaaS`
4. Select the `Productive` Function you want to integrate
5. Function Headers: this is where you should set particular k/v pairs like Bot Variables or Slots
6. Function Payload: this is where you should set a specific JSON body to send to the Function. NB: in the example below, for demonstration purposes, the two slots are being set in both the Headers and the Payload. By doing this, you’re able to understand the correct notation to use. In a real world scenario, the best practice is to use Slots, custom variables and Bot variables as Function Headers and a JSON body to be set as Function Payload
7. Transform Result Script: In order to process the response coming from the Function you can set the following code to extract it in a JSON format and then send directly the sentence (in this case it is a string) as Bot message.

var faasData = botContext.getBotVariable("api_UnsolicitedCommentFunction");
var faasJsonData = JSON.parse(faasData.jsonData);
var jsonResponse = faasJsonData.api_UnsolicitedCommentFunction;
botContext.sendMessage(jsonResponse);

In this scenario the Transform Result Script is used because the Function is simply returning a string. In case a Function should return a complex JSON structure, then it is up to you to use the same or to take advantage of the Custom Data Fields. For instance, if the response from the Function were,

{“response”: “200$ is way too much for a bag!”}

You could set the following as Custom Data Fields,

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_customDataFields.png">

Then, you can use the `response` within a Dialog’s Interaction by using the following notation: {UnsolicitedCommentFunction.response}

Here’s a visual summary of what needs to be done within the Integrations tab.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_integrationSettings.png">

### Conversation Builder - Dialog

1. Create an Interaction of type Integration and select from the dropdown the Function’s Integration
2. Save the change

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_dialog.png">

### Conversation Builder - Preview

This is the end-user experience in a conversation.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideFunctions_preview.png">
