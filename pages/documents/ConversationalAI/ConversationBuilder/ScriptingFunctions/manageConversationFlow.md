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

{: .important}
New to scripting functions? Please review the [Introduction](conversation-builder-scripting-functions-introduction.html).

### Set message delay value

Used to set a delay for a group of messages such that they appear like a real conversation.

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
Keep in mind the limits of the targeted channel(s), and limit the amount of text per interaction if warranted.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setAllowMaxTextResponse(value)` | value (Boolean) | None |

```javascript
botContext.setAllowMaxTextResponse(true);
```


### Set trigger next message

Used for triggering the message flow to selected segment of the bot.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setTriggerNextMessage(messagename)` | messagename (string) – The message to trigger, as identified by the Name of the message. | None |

#### Example

In the below example, we test for which company the user selected, and if ‘LivePerson’ we trigger the message "Welcome LivePerson", otherwise we trigger "Welcome Other".

```javascript
var company = botContext.getCurrentUserMessage();
if (company == 'LivePerson') {
      botContext.setTriggerNextMessage('Welcome LivePerson');
}else{
      botContext.setTriggerNextMessage('Welcome Other');
}
```

### Evaluate options

Used for matching the user’s input against an array of options.

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

The Add Quick Replies function is used for adding quick replies to a message in JavaScript rather than defining in bot creation. This allows for the dynamic addition of the buttons to accommodate various scenarios.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `addQuickReplies()` | array | None |

#### Example

The example below shows how quick replies can be added easily to your message.

```javascript
// Add these quick replies to an existing message
botContext.addQuickReplies(['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```
