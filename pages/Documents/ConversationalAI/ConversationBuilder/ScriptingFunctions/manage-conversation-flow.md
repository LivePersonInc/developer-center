---
pagename: Manage Conversation Flow
redirect_from:
    - conversation-builder-scripting-functions-get-and-set-conversation-flow-data.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-manage-conversation-flow.html
indicator: both
---

Use the following built-in functions to affect the flow of a conversation.

### Set message delay value

`setMessageDelay` is used to set a delay for a group of messages such that they appear like a real conversation.

{: .important}
The setMessageDelay() function should be used within the preProcess Code JavaScript.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setMessageDelay(delay_value)` | delay_value (integer) | None |

#### Example

In the below example, we send three messages to the user with a delay of 2000 milliseconds between them.

```javascript
// setting a delay of 2000 for each message……
botContext.setMessageDelay(2000);
//  sending message to user...
botContext.sendMessages(['Sorry to hear that you lost your credit card.','I just put the stop on your credit card', 'If you find any unauthorized transaction please let us know as soon as possible so we can remove them from your bill']);
```


### Set allow max text response

By default, a single text interaction has a limit of 320 characters on the word boundary before it gets split into 2 parts. However, you can override this behavior with the `setAllowMaxTextResponse` function so that all text is within a single message.

To accomplish this, use this function in the pre-process code of the interaction (i.e., before the interaction is rendered). You can then revert it if desired in a subsequent interaction.

{: .important}
Keep in mind the limits of the targeted channel(s), which might take precedence over this setting.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setAllowMaxTextResponse(value)` | value (Boolean) | None |

```javascript
botContext.setAllowMaxTextResponse(true);
```


### Set trigger next message

`setTriggerNextMessage` is used for directing the conversation flow, i.e., for triggering a specified interaction in the bot.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setTriggerNextMessage(messagename)` | messagename (string) – The name of the interaction to trigger. (An interaction's name can be found in the interaction's settings.) | None |

#### Example

In the example below, we test for which company the user selected, and, if "LivePerson", we trigger the interaction "Welcome LivePerson". Otherwise, we trigger "Welcome Other".

```javascript
var company = botContext.getCurrentUserMessage();
if (company == 'LivePerson') {
      botContext.setTriggerNextMessage('Welcome LivePerson');
}else{
      botContext.setTriggerNextMessage('Welcome Other');
}
```

### Evaluate options

`evaluateOptions` is used for matching the user’s input against an array of options.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `evaluateOptions(userResponse, options)` | <em>userResponse - </em>the user's message text<br><br><em>options - </em>array of strings | string: matched option from an array of options. |

#### Example

In the below example, we create an array of possible options. Then we test for a response using the evaluateOptions() function by including the userResponse and the array of options. If the user types “A” or “A)” or “Yes” the result returned will be “A) Yes”.

```javascript
var userResponse = (botContext.getCurrentUserMessage()).toLowerCase();
// match options
var options = ["A)Yes", "B)No"];
var result = botContext.evaluateOptions(userResponse, options);
// what was user's response?
botContext.printDebugMessage('====> User Said: ' + userResponse + ' and MATCH result = '+ result);
```

### Add quick replies

The `addQuickReplies` function is used for adding quick replies to a message in JavaScript rather than defining in bot creation. This allows for the dynamic addition of the buttons to accommodate various scenarios.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `addQuickReplies()` | array | None |

#### Example

The example below shows how quick replies can be added easily to your message.

```javascript
// Add these quick replies to an existing message
botContext.addQuickReplies(['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Get button payload

`getButtonPayload` is used to retrieve a button’s callback value that is sent to the bot when the consumer selects that button in a question.

By default, when you specify a callback value for a button in a Structured or Button question, that value is sent to the bot when the consumer selects the button. What’s more, that value, not the button’s label, is displayed to the consumer as their selected choice. The latter means you can retrieve the button’s callback value with [getCurrentUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#get-current-user-message).

However, in cases where you’re using the [enableButtonTextOnPostback](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#enablebuttontextonpostback) custom configuration field in the bot’s agent connector, the button’s label instead, not the callback value, is displayed to the consumer as their selected choice. In these cases, you need a different way to retrieve the button’s callback value. `getButtonPayload` meets this need.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getButtonPayload()` | None | (string) The button’s callback value that is sent to the bot |

#### Example

In this example, we use `getButtonPayload` in the Process User Response code of the question interaction to retrieve and store the callback value that is sent to the bot after the consumer selects a button:

```javascript
var callbackValue = botContext.getButtonPayload();
botContext.printDebugMessage("Callback : " + callbackValue);
botContext.setBotVariable("callback", callbackValue, true, false);
```
