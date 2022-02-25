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


Automatic Messages (also known as System Messages) are predefined messages triggered upon specific events that are detected by the system (e.g. the consumer opens a new conversation, the conversation is transferred to another agent, the time to respond is updated, etc.). When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, and they also appear in the conversation’s history both on the consumer’s side and in LiveEngage.

With Functions for messaging you are able to invoke lambdas from standard messaging events thanks to our integration with Automatic Messages. Along with the invocation, the function is sent a payload containing metadata related to the conversation which invoked the function. This payload can then be used in the function for further processing and referencing.

<img src="img/faas-automessages-flow.png" alt="FaaS Automatic Messages Flow" style="width:70%;"/>

<div class="important">If an specific system message is disabled, the associated function will be invoked regardless of the state of the enabled flag.</div>

This is the Automatic Messages flow with Functions integration:

1. Controller Bot listens at conversation events.
2. If there is an Auto-message configured for the event --> It will send that message to the conversation.
3. If there is a Function deployed associated to that event -->  The function will be invoked.
4. After invocation --> Controller Bot will check the response and will perform one of the following actions based on the callback payload:
    1. Transfer Conversation to a different Skill.
    2. Transfer Conversation to a different Agent.
    3. Close the Conversation.
    4. Do nothing.

### Configuration

#### Step 1 - Enable Automatic Messages

Enable the Automatic Messages feature.

<div class="important"> It is required that your account has the Controller Bot permissions enabled; please contact your account team in order to do this.</div>

#### Step 2 - Create a function

Create a new function using one of the following messaging events:

* Messaging new conversation.
* Messaging conversation end.
* Messaging conversation routing.
* Messaging participants change.
* Messaging TTR.
* Messaging Line in Off-Hours
* Messaging conversation idle.
* Messaging consumer step up.

You can select one of the available [templates](liveperson-functions-event-sources-overview.html#templates) for the chosen event. Currently, only one function per template type can be created for those conversational events. If there are multiple types of functionality needed that stem from the same event invocation, these should be coded into the same `lambda`.

You can select a Skill or set of Skills. Specifying a skill has the advantage of reducing the complexity of the lambda's code. Furthermore, it reduces the number of unnecessary invocations.

#### Step 3 - Edit your Function

Adjust the coding from the template according to your needs by modifying the function. The function can return a series of commands back to the invoker.

#### Step 4 - Deploy your function

Just like any other function, this function must be deployed before it can be used. [Please see this document](liveperson-functions-getting-started-your-first-function.html#deploy) for more information on how to deploy your function. At this point, you can also test your function.

### Messaging events

Conversational Cloud Messaging uses a series of "Conversation State Change Events" which are fired when specific actions or events occur within the conversation. You are able to use these events to trigger your functions. The Controller Bot (Automatic Messages) is responsible for invoking functions on certain messaging events.

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
<tr><td>ENGAGEMENT_TRANSFERED</td><td>Messaging conversation routing</td></tr>
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

### Callback commands

You have the option to send callback commands back to the invoker. You can add multiple commands to the response as the functions itself can return an array or a single object.

With the controller bot as the invoker, as is the case for messaging events, you have the option to execute the following callback commands:

* Send a message. The default automatic message can be overwritten with:

<code>{
            type: "systemMessage",
            text: "your message"
        }</code>. To set the message empty just pass <code>[]</code> as text.

<div class="important">
    If no message is set in the result of the function (which it returns to the invoker, for example: <code>callback();</code> ), the default automatic message for the account will be triggered.
</div>

* Transfer Conversation to a different Skill:

```javascript
let result = [
   {
       type: "transfer", // Transfers the conversation.
       skillId: "123456", // Transfer to different skill.
   }
]
callback(null, result);
```

* Transfer Conversation to a different Agent (to configure this feature see [here](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html)):

```javascript
let result = [
   {
       type: "transfer", // Transfers the conversation.
       agentId: "123456", // Transfer to different skill.
   }
]
callback(null, result);
```

* Close the Conversation:

```javascript
let result = [
   {
       type: "closeConversation" // Closes the conversation
   }
]
callback(null, result);
```

Here's an example of a response sent back to the invoker using multiple of these commands:

```javascript
let result = [
   {
       type: "systemMessage", // Returns a system message into the conversation
       text: "your message"
   },
   {
       type: "transfer", // Transfers the conversation.
       skillId: "123456", // Transfer to different skill.
       agentId: "123456" // Propose an agent.
   },
   {
       type: "closeConversation" // Closes the conversation
   }
]
callback(null, result);
```

<div class="important">Using callback commands is <b>not</b> mandatory. If you only wish to use the events listed above to trigger functions and nothing else, there's no reason for you to pass callback commands back.</div>

If you add more than one command of a certain type (e.g. 2 messages) **only the first command** of this type will be processed.

### Best Practices

#### Messaging event are asynchronous

Functions for messaging listens for messaging events asynchronously. As a consequence this can cause race conditions with other parts of the platform. Therefore, it is considered best practice to use bots instead of Functions for implementing routing logic. Functions is a good option to sync data with third-party systems like CRMs or to save data in the [Conversation Context Service](maven-context-warehouse-overview.html) in order to use it within Conversation Orchestrator. Routing via Functions makes sense whenever a conversation is in a stagnant state (i.e. not in process of being routed), e.g. a conversation is idle or a message line has been sent in off-hours. Otherwise, the asynchronous nature of its events might interfere with the proper flow of a "dynamic" conversation.

<div class="important">if the authenticated consumer's previous conversation was auto-closed, and the new one opened within 48 hours of that, the new conversation event won't be triggered.</div>

#### Controller Bot will Retry on failed invocation

If your function invocation takes too long or you have coding errors, the Controller Bot will retry up to 3 times, this will increase the number of invocations when your function does not perform well and could lead to more overload.

<div class="important">Controller Bot will retry up to 3 times when an invocation fails.</div>

#### Multiple Messaging events are mapped to the same Functions event

Since multiple conversational events are mapped to the same Functions event, you can differentiate the conversational event by the `cbotEventType` property in the invocation payload and adapt your for the interested events.

#### Any automatic message is disabled

As mentioned above, if any auto message is disabled, the Controller Bot will invoke your function when any of the mentioned conversational event occurs within the conversation. You could disable all the automatic messages and your function still will be invoke in for those events, but you cannot disable the a Automatic Messages feature, the Controller Bot needs to be running and listening for conversational events in order to invoke you function. If you don't want your function to be invoked for a disabled system message, you have these options:

* Undeploy your function.
* Ignore it in your function code. You can distinguish the system message with the `cbotEventType` property included in the invocation payload.

### Payload Details

<table>
<thead><tr><th>1. level</th><th>2. level</th><th>3. level</th><th>description</th><th>type</th><th>example</th></tr></thead><tbody>
 <tr><td>general</td><td>cbotEventType</td><td>&nbsp;</td><td>ID of the system message</td><td>STRING</td><td>CONSUMER_OPEN_NEW_CONVERSATION_FIRST_TIME_OFF_HOURS</td></tr>
 <tr><td>end</td><td>closeReason</td><td>&nbsp;</td><td>which role closed conversation</td><td>STRING</td><td>AGENT/CONSUMER/SYSTEM</td></tr>
 <tr><td>general</td><td>type</td><td>&nbsp;</td><td>notification type</td><td>STRING</td><td>UPSERT</td></tr>
 <tr><td>general</td><td>convId</td><td>&nbsp;</td><td>ID of conversation</td><td>STRING</td><td>c840e51e-5f65-4ad4-8d34-5c82b99a2200</td></tr>
 <tr><td>general</td><td>dialogId</td><td>&nbsp;</td><td>ID of dialog</td><td>STRING</td><td>c840e51e-5f65-4ad4-8d34-5c82b99a2200</td></tr>
 <tr><td>general</td><td>sessionId</td><td>&nbsp;</td><td>ID of session</td><td>NUMBER</td><td>1528463744580</td></tr>
 <tr><td>general</td><td>startTs</td><td>&nbsp;</td><td>conversation start time as timestamp</td><td>NUMBER</td><td>1528463744663</td></tr>
 <tr><td>general</td><td>effectiveTTR</td><td>&nbsp;</td><td>timestamp when agent should be available</td><td>NUMBER</td><td>1528464044687</td></tr>
 <tr><td>general</td><td>oldConvState</td><td>&nbsp;</td><td>previous state of the dialog</td><td>STRING</td><td>CLOSE</td></tr>
 <tr><td>general</td><td>newConvState</td><td>&nbsp;</td><td>current state of the dialog</td><td>STRING</td><td>OPEN</td></tr>
 <tr><td>general</td><td>contexttype</td><td>&nbsp;</td><td>type of cotext</td><td>STRING</td><td>SharkContext</td></tr>
 <tr><td>general</td><td>campaignInfo</td><td>id</td><td>ID of campaign</td><td>NUMBER</td><td>2327699812</td></tr>
 <tr><td>general</td><td>campaignInfo</td><td>engangementId</td><td>ID of engangement </td><td>NUMBER</td><td>2327699912</td></tr>
 <tr><td>general</td><td>clientLanguage</td><td>&nbsp;</td><td>language of the client device</td><td>STRING</td><td>en-US</td></tr>
 <tr><td>general</td><td>clientFeatures</td><td>&nbsp;</td><td>list of supported client features</td><td>ARRAY</td><td>["AUTO_MESSAGES", "MULTI_DIALOG"]</td></tr>
 <tr><td>general</td><td>inOffHours</td><td>&nbsp;</td><td>shift-status of the contact center</td><td>BOOLEAN</td><td>TRUE/FALSE</td></tr>
 <tr><td>general</td><td>visitorId</td><td>&nbsp;</td><td>ID of visitor</td><td>NUMBER</td><td>1528463744580</td></tr>
 <tr><td>general</td><td>originatorId</td><td>&nbsp;</td><td>ID of originator</td><td>NUMBER</td><td>37607275.23</td></tr>
 <tr><td>general</td><td>originatorPid</td><td>&nbsp;</td><td>Pid of originator</td><td>STRING</td><td>f39fbc5f-da77-5417-8bc7-7584efdd1a5e</td></tr>
 <tr><td>general</td><td>originatorMetadata</td><td>id</td><td>Pid of originator of metadata change</td><td>STRING</td><td>f39fbc5f-da77-5417-8bc7-7584efdd1a5e</td></tr>
 <tr><td>general</td><td>originatorMetadata</td><td>role</td><td>Role of originator of metadata change</td><td>STRING</td><td>CONTROLLER</td></tr>
 <tr><td>general</td><td>serverTimestamp</td><td>&nbsp;</td><td>timestamp of the server</td><td>NUMBER</td><td>1528463781807</td></tr>
 <tr><td>general</td><td>clientIpAdress</td><td>&nbsp;</td><td>IP Address of client</td><td>STRING</td><td>172.26.138.38</td></tr>
 <tr><td>general</td><td>manualETTR</td><td>&nbsp;</td><td>time to response manually updated by agent</td><td>STRING</td><td>1541152938069</td></tr>
 <tr><td>general</td><td>lastMessageComposer</td><td>&nbsp;</td><td>the role of the last composer</td><td>STRING</td><td>CONSUMER</td></tr>
 <tr><td>general</td><td>lastMessageTs</td><td>&nbsp;</td><td>timestamp of last message</td><td>NUMBER</td><td>1541152938069</td></tr>
 <tr><td>general</td><td>lastAgentMsgTs</td><td>&nbsp;</td><td>timestamp of last agent message</td><td>NUMBER</td><td>1541152938069</td></tr>
 <tr><td>general</td><td>backToQueueTs</td><td>&nbsp;</td><td>timestamp when the conversation was returned to queue</td><td>NUMBER</td><td>1541152938069</td></tr>
 <tr><td>idle</td><td>lastConsumerMsgTs</td><td>&nbsp;</td><td>timestamp of last consumer message</td><td>NUMBER</td><td>1541152938069</td></tr>
 <tr><td>idle</td><td>agentNonResponsive</td><td>time</td><td>time that should pass after consumer's last message in order the agent to be non-responsive</td><td>NUMBER</td><td>30</td></tr>
 <tr><td>idle</td><td>agentNonResponsive</td><td>timeUnits</td><td>time units in which agent non-responsive time should be calculated</td><td>STRING</td><td>minutes</td></tr>
 <tr><td>idle</td><td>consumserNonResponsive</td><td>time</td><td>time that should pass after agent's last message in order the consumer to be non-responsive</td><td>NUMBER</td><td>30</td></tr>
 <tr><td>idle</td><td>consumserNonResponsive</td><td>timeUnits</td><td>time units in which consumer non-responsive time should be calculated</td><td>STRING</td><td>minutes</td></tr>
 <tr><td>idle</td><td>convNotTakenTime</td><td>time</td><td>time units in which conversation idle time should be calculated</td><td>STRING</td><td>minutes</td></tr>
 <tr><td>idle</td><td>convNotTakenTime</td><td>timeUnits</td><td>how long should the conversation stay in queue in order to be idle</td><td>NUMBER</td><td>30</td></tr>
 <tr><td>mid</td><td>openedInOffHours</td><td>&nbsp;</td><td>indicator if the conversation was opened in off hours</td><td>BOOLEAN</td><td>TRUE/FALSE</td></tr>
 <tr><td>participantChange</td><td>oldParticipants</td><td>&nbsp;</td><td>array of the participants of the previous state</td><td>ARRAY</td><td>[{"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "ASSIGNED_AGENT"}]</td></tr>
 <tr><td>participantChange</td><td>newParticipants</td><td>&nbsp;</td><td>array of the participants of the current state</td><td>ARRAY</td><td>[{"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "ASSIGNED_AGENT"}, {"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "AGENT"}]</td></tr>
 <tr><td>routing</td><td>oldSkillId</td><td>&nbsp;</td><td>previous skillId of conversation</td><td>STRING</td><td>563268</td></tr>
 <tr><td>routing</td><td>newSkillId</td><td>&nbsp;</td><td>current skillId of conversation</td><td>STRING</td><td>563267</td></tr>
 <tr><td>start</td><td>firstConversation</td><td>&nbsp;</td><td>if this is the frist conversation of the consumer ever</td><td>BOOLEAN</td><td>TRUE/ FALSE</td></tr>
 <tr><td>ttr</td><td>oldTtr</td><td>ttrType</td><td>type of ttr of the previous state</td><td>STRING</td><td>NORMAL</td></tr>
 <tr><td>ttr</td><td>oldTtr</td><td>value</td><td>value of ttr of the previous state</td><td>NUMBER</td><td>600</td></tr>
 <tr><td>ttr</td><td>newTtr</td><td>ttrType</td><td>type of ttr of the new state</td><td>STRING</td><td>URGENT</td></tr>
 <tr><td>ttr</td><td>newTtr</td><td>value</td><td>value of ttr of the new state (after change for example to URGENT)</td><td>NUMBER</td><td>300</td></tr>
</tbody></table>
