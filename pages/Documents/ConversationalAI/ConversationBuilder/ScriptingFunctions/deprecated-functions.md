---
pagename: Deprecated Functions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-deprecated-functions.html
indicator: both
---

Deprecated functions are still supported but not recommended. Bot developers are encouraged to use stated alternatives instead.

### Get channel

{: .important}
This function is supported but not recommended. Bot developers are encouraged to use [getUserChannel](conversation-builder-scripting-functions-get-user-data.html#get-user-channel) instead.

`getChannel` returns the platform channel the user is currently communicating on. This function returns - lp_sms, lp_web, lp_inapp, sms, web, inapp. lp_ prefix indicates the LivePerson platform.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getChannel()` | None | lp_sms, lp_web, lp_inapp, sms, web, inapp |

#### Example

```javascript
var channel = botContext.getChannel();
botContext.printDebugMessage("channel used by the user is: " + channel);
```

### Add quick reples

{: .important}
addQuickReples is supported but not recommended. Bot developers are encouraged to use [addQuickReplies](conversation-builder-scripting-functions-manage-conversation-flow.html#add-quick-replies) instead.

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
