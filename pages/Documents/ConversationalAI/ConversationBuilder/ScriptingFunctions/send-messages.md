---
pagename: Send Messages
redirect_from:
    - conversation-builder-scripting-functions-sending-messages.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-send-messages.html
indicator: both
---

Use the following built-in functions to send different types of messages to the consumer.

### Send message

Use `sendMessage` to send a single message to the consumer at any place of the code, without stopping the message flow. Note the following:

* To set a delay for the message, use the [setMessageDelay](conversation-builder-scripting-functions-manage-conversation-flow.html#set-message-delay-value) function.
* To send multiple messages, use the [sendMessages](conversation-builder-scripting-functions-send-messages.html#send-messages) function.

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

### Send messages

Use `sendMessages` to send an array of the messages to the consumer. Note the following:

* To set a delay for the messages, use the [setMessageDelay](conversation-builder-scripting-functions-manage-conversation-flow.html#set-message-delay-value) function.
* To send a single message, use the [sendMessage](conversation-builder-scripting-functions-send-messages.html#send-message) function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessages(messages)` | array | None |

#### Example
```javascript
botContext.sendMessages(['Your current cash rewards balance is $37.50.' , 'If you had been using our AcmeBank Exclusive Cash Rewards Card your current rewards balance would have been $103.50.']);
```

### Send message with quick reply

`sendMessageWithQuickReplies` is used for programatically creating a message containing quick reply buttons. Quick replies have both a title (sauce name) and an optional payload (sauce number).

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

### Send immediate reply

`sendImmediateReply` delivers a message to the user immediately and stops the message flow and any other subsequent code within this message.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendImmediateReply(message)` | message — (string or array) — A string to be added to output. Or an array of strings, each to be added to output in succession. | None |

#### Example

In the below example, the response variables gets what user just said and sends Immediate Reply to the user.

```javascript
var response = botContext.getCurrentUserMessage();
botContext.sendImmediateReply('I think you said, ' + response);
```

### Send private message to agent

Private messages are messages that are visible to all conversation participants *except* the consumer. Use `sendPrivateMessage` to programmatically send a private message at any point in the conversation flow.

Note that there’s also a Private Message interaction that’s available. For more on this, and for example scenarios where you might want to send a private message, see [here](conversation-builder-interactions-statements.html#private-message).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendPrivateMessage(message)` | message (String) — the message to send | None |

#### Example

```javascript
botContext.sendPrivateMessage("This is a private message. It is visible to all the conversation participants excluding consumer.");
```