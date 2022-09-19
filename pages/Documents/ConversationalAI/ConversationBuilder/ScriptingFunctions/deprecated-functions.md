---
pagename: Deprecated functions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting functions
permalink: conversation-builder-scripting-functions-deprecated-functions.html
indicator: both
---

Most deprecated functions are still supported but not recommended. Bot developers are encouraged to use stated alternatives instead.

### Get channel

{: .note}
This function is supported but not recommended. Bot developers are encouraged to use [getUserChannel](conversation-builder-scripting-functions-get-user-data.html#get-user-channel) instead.

`getChannel` returns the platform channel the user is currently communicating on. This function returns — lp_sms, lp_web, lp_inapp, sms, web, inapp. lp_ prefix indicates the LivePerson platform.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getChannel()` | None | lp_sms, lp_web, lp_inapp, sms, web, inapp |

#### Example

```javascript
var channel = botContext.getChannel();
botContext.printDebugMessage("channel used by the user is: " + channel);
```

### Add quick reples

{: .note}
This function is supported but not recommended. Bot developers are encouraged to use [addQuickReplies](conversation-builder-scripting-functions-manage-conversation-flow.html#add-quick-replies) instead.

The Add Quick Reples function is used for adding quick replies to a message in JavaScript rather than defining in bot creation. This allows for the dynamic addition of the buttons to accommodate various scenarios.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `addQuickReples()` | array | None |

#### Example

The example below shows how quick replies can be added easily to your message.

```javascript
// Add these quick replies to an existing message
botContext.addQuickReples(['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Log escalation event

{: .note}
This function isn't supported. The system logs escalation events automatically, and this data is viewable in Bot Analytics.

`logEscalationEvent` is used to count the number of times the user called a particular escalation type. The function requries a user input and the string 'LivePerson' for the type of escalation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `logEscalationEvent(user_message, escalation_type)` | <em>user_message</em> — the user's message text<br><br><em>escalation_type</em> — 'LivePerson' | void |

#### Example

```javascript
botContext.logEscalationEvent(botContext.getCurrentUserMessage(), 'LivePerson');
```