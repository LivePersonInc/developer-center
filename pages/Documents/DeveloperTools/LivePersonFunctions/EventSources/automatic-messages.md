---
pagename: Automatic Messages
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-automatic-messages.html
indicator: both
---

# Automatic Messages

Automatic Messages are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur.

Auto messages are triggered upon specific events that are detected by the system (e.g. the consumer opens a new conversation, the conversation is transferred to another agent, the time to respond is updated, etc.). When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, and they also appear in the conversation’s history both on the consumer’s side and in LiveEngage.

### Messaging events for Function Invocation

Conversational Cloud Messaging uses a series of "Conversation State Change Events" which are fired when specific actions or events occur within the conversation. You are able to use these events to trigger your functions.

#### System Messages and invocations on messaging events

System Messages feature (also known as Automatic Messages) is responsible for invoking functions on certain messaging events.

<div class="important">Multiple conversation event types are mapped to the same invocation messaging event.</div>

A deployed function on certain messaging event can be invoked on multiple conversation events. I.e, a function deployed on **Messaging conversation end** event will be invoked when one of these events occurs during a conversation: `AGENT_END_CONVERSATION`, `CONSUMER_END_CONVERSATION` and `SYSTEM_END_CONVERSATION`.

In order to distinguish the conversation event type during the invocation, the `cbotEventType` property is included in the invocation payload. The following table shows the conversation event type mapping to messaging events on functions:

<table>
<thead><tr><th>Event Type</th><th>Mapped to</th></tr></thead><tbody>
<tr><td>CONSUMER_OPEN_NEW_CONVERSATION_FIRST_TIME_OFF_HOURS</td><td>Messaging new conversation</td></tr>
<tr><td>CONSUMER_OPEN_NEW_CONVERSATION_OFF_HOURS</td><td>Messaging new conversation</td></tr>
<tr><td>CONSUMER_OPEN_NEW_CONVERSATION_FIRST_TIME</td><td>Messaging new conversation</td></tr>
<tr><td>CONSUMER_OPEN_NEW_CONVERSATION</td><td>Messaging new conversation</td></tr>
<tr><td>CONSUMER_OPEN_NEW_CONVERSATION_AFTER_AUTOCLOSE</td><td>Messaging new conversation</td></tr>
<tr><td>AGENT_END_CONVERSATION</td><td>Messaging conversation end</td></tr>
<tr><td>CONSUMER_END_CONVERSATION</td><td>Messaging conversation end</td></tr>
<tr><td>SYSTEM_END_CONVERSATION</td><td>Messaging conversation end</td></tr>
<tr><td>ENGAGEMENT_TRANSFERED</td><td>messaging conversation routing</td></tr>
<tr><td>YOU_ARE_CONNECTED_TO</td><td>Messaging participants change</td></tr>
<tr><td>BACK_TO_QUEUE</td><td>Messaging participants change</td></tr>
<tr><td>JOINED_AGENT_LEFT_CONVERSATION</td><td>Messaging participants change</td></tr>
<tr><td>ANOTHER_AGENT_JOINED_CONVERSATION</td><td>Messaging participants change</td></tr>
<tr><td>AGENT_UPDATED_RESPONSE_TIME</td><td>Messaging TTR</td></tr>
<tr><td>CONSUMER_CANCELED_URGENT_RESPONSE_TIME</td><td>Messaging TTR</td></tr>
<tr><td>CONSUMER_ASKED_URGENT_RESPONSE_TIME</td><td>Messaging TTR</td></tr>
<tr><td>CONSUMER_SEND_MESSAGE_ON_OFFHOURS</td><td>Messaging Line in Off-Hours</td></tr>
<tr><td>CONV_AWAITING_IN_QUEUE</td><td>Messaging conversation idle</td></tr>
<tr><td>AGENT_NON_RESPONSIVE</td><td>Messaging conversation idle</td></tr>
<tr><td>CONSUMER_NON_RESPONSIVE</td><td>Messaging conversation idle</td></tr>
<tr><td>CONSUMER_STEP_UP</td><td>Messaging consumer step up</td></tr>
</tbody></table>
