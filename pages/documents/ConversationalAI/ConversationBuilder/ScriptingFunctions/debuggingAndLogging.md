---
pagename: Debugging and Logging
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-debugging-and-logging.html
indicator: both
---

The following built-in functions, can be used to debug or log events in your bot.

{: .important}
Please see the [Scripting Functions Introduction](conversation-builder-scripting-functions-introduction.html) for more information on Conversation Builder's built-in functions.

### Print Debug Message

The Print Debug Message is used to log what user said in the debug console of the bot. For instance, the `response` variable stores the most recent messages from the user, which we print to the debugger using `printDebugMessage`.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `printDebugMessage(message)` | message (string) – A message to print to the debug logs. | None |

#### Example

```javascript
// get what the user just said
var response = botContext.getCurrentUserMessage();
botContext.printDebugMessage('User said ' + response);
```

### Log Custom Event

Used for tracking specific bot events for the purposes of analytics. This function requires some type of user message and event name. The event detail is optional. In the example, we are setting the user message to the currentUserMessage and naming the event “Invoice API”.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `logCustomEvent(user_message, event_name[, event_detail])` | <em>user_message - </em>the user's message text<br><br><em>event_name - </em>string | Void |

#### Example

```javascript
botContext.logCustomEvent(botContext.getCurrentUserMessage(), 'Invoice API','');
```

### Log Escalation Event

Used to count the number of times the user called a particular escalation type. The function requries a user input and the string 'LivePerson' for the type of escalation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `logEscalationEvent(user_message, escalation_type)` | <em>user_message - </em>the user's message text<br><br><em>escalation_type - </em>'LivePerson' | void |

#### Example

```javascript
botContext.logEscalationEvent(botContext.getCurrentUserMessage(), 'LivePerson');
```

