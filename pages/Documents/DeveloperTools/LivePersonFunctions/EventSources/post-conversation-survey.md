---
pagename: Post ConversationSurvey
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-post-conversation-survey.html
indicator: both
---

A post-conversation survey flow is triggered at the end of a conversation with an agent or custom bot. You can use it to obtain feedback from the consumer on the consumer's experience with your brand. A survey bot is a great way to measure agent/bot and skill performance and to identify opportunities to improve on your quality targets.

Survey bots can be integrated with Functions.  A `lambada` can be invoke when the Survey start (at the end of the conversation) and when teh survey ends. In comparison to the [chat post survey](function-as-a-service-use-cases-post-chat-survey-transcripts.html) this integration will not send any automated emails.

{: .important}
Post Conversation Survey Bot is only available for **Messaging**, not for chat.

<img src="img/faas-survey-bot-flow.png" alt="FaaS Automatic Messages Flow" style="width:70%;"/>

This is the Post Conversation Survey flow with Functions integration:

1. Survey Bot listens to conversation end events.
2. If certain conditions occur, Survey bot will send the survey first question to the conversation:
    1. If there is a Function deployed on *Messaging Survey Started* event -->  The function will be invoked.
    2. Survey will listen for survey responses and send more question.
3. When the Survey ends on *Messaging Survey Ended* event --> Survey Bot will invoke the function.

### Configuration

Survey Bot can be configured under  [Conversation Builder Survey Bots](conversation-builder-bots-post-conversation-survey-bots.html).

{: .important}
Please, follow this guide on how to configure a [Post Conversation Survey Bot](conversation-builder-bots-post-conversation-survey-bots.html) before start. If you have already a survey bot configured make sure you have Functions enabled for your account.

#### Step 1 - Create function

Create a new function using one of the messaging survey templates. There are are the following events:

* *Messaging Survey Started.*
* *Messaging Survey Ended.*

Currently, only one function per event type can be created. If there are multiple types of functionality needed that stem from the same event invocation, these should be coded into the same `lambda`.

{: .important}
The Survey Bot won't process any callback payload during the invocation. //TODO: needs to clarify

#### Step 2 - Edit the Function

Adjust the code in the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open). In the event of the function not being threaded by the calling system, the function can simply return `ok` within the callback.

#### Step 4 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](liveperson-functions-getting-started-your-first-function.html#deploy) for more information on how to deploy your function. At this point, you can also test your function.

### Payload details

<table>
<thead><tr><th>1. level</th><th>2. level</th><th>3. level</th><th>description</th><th>type</th><th>example</th></tr></thead><tbody>
 <tr><td>conversationId</td><td>&nbsp;</td><td>&nbsp;</td><td>ID of conversation</td><td>STRING</td><td>c840e51e-5f65-4ad4-8d34-5c82b99a2200</td></tr>
 <tr><td>accountId</td><td>&nbsp;</td><td>&nbsp;</td><td>ID of account</td><td>STRING</td><td>12345678</td></tr>
 <tr><td>surveyId</td><td>&nbsp;</td><td>&nbsp;</td><td>ID of survey</td><td>NUMBER</td><td>3387141511</td></tr>
 <tr><td>surveyRevision</td><td>&nbsp;</td><td>&nbsp;</td><td>Revision of survey</td><td>NUMBER</td><td>2</td></tr>
 <tr><td>skillId</td><td>&nbsp;</td><td>&nbsp;</td><td>ID of skill</td><td>STRING</td><td>563267</td></tr>
 <tr><td>effectiveTTR</td><td>&nbsp;</td><td>&nbsp;</td><td>timestamp when agent should be available</td><td>NUMBER</td><td>1528464044687</td></tr>
 <tr><td>lastContentEventNotification</td><td>originatorId</td><td>&nbsp;</td><td>ID of originator</td><td>NUMBER</td><td>37607275.23</td></tr>
 <tr><td>lastContentEventNotification</td><td>originatorPId</td><td>&nbsp;</td><td>Pid of originator</td><td>STRING</td><td>f39fbc5f-da77-5417-8bc7-7584efdd1a5e</td></tr>
 <tr><td>lastContentEventNotification</td><td>sequence</td><td>&nbsp;</td><td>sequence of conversation (starting by 0)</td><td>NUMBER</td><td>1</td></tr>
 <tr><td>lastContentEventNotification</td><td>serverTimestamp</td><td>&nbsp;</td><td>timestamp of the server</td><td>NUMBER</td><td>1528463781807</td></tr>
 <tr><td>lastContentEventNotification</td><td>event</td><td>contentType</td><td>contenttype of last event</td><td>STRING</td><td>text/plain</td></tr>
 <tr><td>lastContentEventNotification</td><td>event</td><td>message</td><td>message of last event</td><td>STRING</td><td>Thank you for messaging us. Our contact center is currently closed. An agent should reply within 11 hours and 40 minutes.</td></tr>
 <tr><td>lastContentEventNotification</td><td>event</td><td>type</td><td>type of last event</td><td>STRING</td><td>ContentEvent</td></tr>
 <tr><td>lastContentEventNotification</td><td>originatorClientProperties</td><td>&nbsp;</td><td>Information about client</td><td>OBJECT</td><td>{"type":".ClientProperties","appId":"webAsync","ipAddress":"127.0.0.1","deviceFamily":"DESKTOP","os":"OSX","osVersion":"10.14.3","integration":"WEB_SDK","integrationVersion":"3.0.25","browser":"CHROME","browserVersion":"72.0.3626.119","features":["PHOTO_SHARING","CO_BROWSE","QUICK_REPLIES","AUTO_MESSAGES","MULTI_DIALOG","RICH_CONTENT"]},</td></tr>
 <tr><td>campaignInfo</td><td>campaignId</td><td>&nbsp;</td><td>ID of campaign</td><td>NUMBER</td><td>2451931211</td></tr>
 <tr><td>campaignInfo</td><td>engagementId</td><td>&nbsp;</td><td>ID of engagement</td><td>NUMBER</td><td>2451931311</td></tr>
 <tr><td>closeReason</td><td>&nbsp;</td><td>&nbsp;</td><td>close reason of conversation</td><td>STRING</td><td>CONSUMER</td></tr>
 <tr><td>context</td><td>clientProperties</td><td>&nbsp;</td><td>Information about client</td><td>OBJECT</td><td>{"type":".ClientProperties","appId":"webAsync","ipAddress":"127.0.0.1","deviceFamily":"DESKTOP","os":"OSX","osVersion":"10.14.3","integration":"WEB_SDK","integrationVersion":"3.0.25","browser":"CHROME","browserVersion":"72.0.3626.119","features":["PHOTO_SHARING","CO_BROWSE","QUICK_REPLIES","AUTO_MESSAGES","MULTI_DIALOG","RICH_CONTENT"]}</td></tr>
 <tr><td>context</td><td>interactionContextId</td><td>&nbsp;</td><td>ID of context</td><td>STRING</td><td>5</td></tr>
 <tr><td>context</td><td>lang</td><td>&nbsp;</td><td>language</td><td>STRING</td><td>en-US</td></tr>
 <tr><td>context</td><td>sessionId</td><td>&nbsp;</td><td>ID of session</td><td>STRING</td><td>iGY4vsiETB-Zsyi7IGlIk1</td></tr>
 <tr><td>context</td><td>type</td><td>&nbsp;</td><td>type of context</td><td>STRING</td><td>SharkContext</td></tr>
 <tr><td>context</td><td>visitorId</td><td>&nbsp;</td><td>ID of visitor</td><td>STRING</td><td>hjMTk3ZTcwZmFhZjc3NDk2</td></tr>
 <tr><td>dialogs</td><td>&nbsp;</td><td>&nbsp;</td><td>array with information about the dialogs of the conversation</td><td>OBJECT-ARRAY</td><td>[{"dialogId":"efSg0XbnTkmg8OXaSyaz81","participantsDetails":[{"id":"49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911","role":"CONSUMER","state":"ACTIVE"}],"dialogType":"POST_SURVEY","channelType":"MESSAGING","metaData":{"appInstallId":"829d951a-777e-46a3-98db-c06214e3f401"},"state":"OPEN","creationTs":1551702854131,"metaDataLastUpdateTs":1551702854131},{"dialogId":"fb84c76d-0daa-46c7-b02d-eb6130c022c1","participantsDetails":[{"id":"49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911","role":"CONSUMER","state":"ACTIVE"}],"dialogType":"MAIN","channelType":"MESSAGING","state":"CLOSE","creationTs":1551702813391,"endTs":1551702854131,"metaDataLastUpdateTs":1551702854131,"closedBy":"CONSUMER","closedCause":"Closed by consumer"}],</td></tr>
 <tr><td>firstConversation</td><td>&nbsp;</td><td>&nbsp;</td><td>if this is the frist conversation of the consumer ever</td><td>BOOLEAN</td><td>TRUE/FALSE</td></tr>
 <tr><td>participants</td><td>&nbsp;</td><td>&nbsp;</td><td>array of the participants of the current state</td><td>OBJECT-ARRAY</td><td>[{"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "ASSIGNED_AGENT"}, {"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "AGENT"}]</td></tr>
 <tr><td>state</td><td>&nbsp;</td><td>&nbsp;</td><td>state of the dialog</td><td>STRING</td><td>OPEN</td></tr>
 <tr><td>startTs</td><td>&nbsp;</td><td>&nbsp;</td><td>conversation start time as timestamp</td><td>NUMBER</td><td>1528463744663</td></tr>
 <tr><td>ttr</td><td>ttrType</td><td>&nbsp;</td><td>type of ttr</td><td>STRING</td><td>URGENT</td></tr>
 <tr><td>ttr</td><td>value</td><td>&nbsp;</td><td>value of ttr</td><td>NUMBER</td><td>300</td></tr>
 <tr><td>lastQuestionId</td><td>&nbsp;</td><td>&nbsp;</td><td>ID of last question</td><td>STRING</td><td>2741eea2-e184-4cd4-abbe-e8f6e1d26681</td></tr>
</tbody></table>