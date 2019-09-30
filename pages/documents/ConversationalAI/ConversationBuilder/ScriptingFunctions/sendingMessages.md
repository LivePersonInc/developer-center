---
pagename: Sending Messages
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-sending-messages.html
indicator: both
---

The following built-in functions, can be used to send different types of messages to a user.

{: .important}
Please see the [Scripting Functions Introduction](conversation-builder-scripting-functions-introduction.html) for more information on Conversation Builder's built-in functions.

### Send Immediate Reply

Delivers a message to the user immediately and stops the message flow and any other subsequent code within this message.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendImmediateReply(message)` | message – (string or array) – A string to be added to output. Or an array of strings, each to be added to output in succession. | None |

#### Example

In the below example, the response variables gets what user just said and sends Immediate Reply to the user.

```javascript
var response = botContext.getCurrentUserMessage();
botContext.sendImmediateReply('I think you said, ' + response);
```

### Send Message

Used to send a single message to user. Using this function we can send messages to the user at any place of the code, without stopping the message flow.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

{: .important}
To send multiple messages use the [sendMessages()](#send-messages) function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessage(message)` | message (string) | None |

#### Example

```javascript
if(count > 10){
    botContext.sendMessage('Looks like you have a lot!');
}else{
    botContext.sendMessage('You could use a few more, for sure!');
}
```

### Send Messages

Used to send array of the messages to the user. In most cases we use message delay for the send messages function.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

{: .important}
To send a single message use the [sendMessage()](#send-message) function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessages(messages)` | array | None |

#### Example
```javascript
botContext.setMessageDelay(2500);
botContext.sendMessages(['Your current cash rewards balance is $37.50.' , 'If you had been using our AcmeBank Exclusive Cash Rewards Card your current rewards balance would have been $103.50.']);
```

### Send Message With Quick Reply

Used for programatically creating a message containing quick reply buttons. Quick replies have both a title (sauce name) and an optional payload (sauce number).

{: .important}
A few limitations apply to quick replies. You can have up to 10 quick replies per message. The quick reply titles have a character limit of 20 chars. The quick reply payload (delimited by `~`) is optional.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessageWithQuickReplies()` | a message with quick reply buttons. | None |

#### Example

In the example below, we create a message to select your favorite dipping sauce. The sauces are added as an array to create the quick reply buttons.

```javascript
// Create a message with Quick Replies
botContext.sendMessageWithQuickReplies('What is your favorite type of dipping sauce?', ['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Add Quick Replies

The Add Quick Replies function is used for adding quick replies to a message in JavaScript rather than defining in Bot creation. This allows for the dynamic addition of the buttons to accommodate various scenarios.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `addQuickReples()` | array | None |

#### Example

The example below shows how quick replies can be added easily to your message.

```javascript
// Add these quick replies to an existing message
botContext.addQuickReples(['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Get Quick Reply Payload

Used to get access to the Quick Reply buttons that are selected by the user. These buttons have a hidden payload that may be different than the text shown to the user. For instance, Quick Replies asking you to select your favorite color might show: Red, Blue, Green, Purple, etc. but the payloads could be color01, color02, color03, etc.

This function is used in Process User Response (where the code for assessing user interaction resides).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getQuickReplyPayload()` | None | string: The payload associated with the user-selected Quick Reply option. |

#### Example
```javascript
//get what the user just said
var response = botContext.getCurrentUserMessage();
//accessing the user selected payload
var payload = botContext.getQuickReplyPayload();
//sending an Immediate reply to the user with the desired output
botContext.sendImmediateReply('Hey you picked option ' + response  +' with a payload of '+ payload);
```

### Set Trigger Next Message

Used for triggering the message flow to selected segment of the bot.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setTriggerNextMessage(messagename)` | messagename (string) – The message to trigger, as identified by the Name of the message. | None |

#### Example

In the below example, we test for which company the user selected, and if ‘BotCentral’ we trigger the message "Welcome BotCentral", otherwise we trigger "Welcome Other".

```javascript
var company = botContext.getCurrentUserMessage();
if (company == 'BotCentral') {
      botContext.setTriggerNextMessage('Welcome BotCentral');
}else{
      botContext.setTriggerNextMessage('Welcome Other');
}
```