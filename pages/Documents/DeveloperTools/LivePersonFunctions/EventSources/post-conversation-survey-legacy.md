---
pagename: Post Conversation Survey (Legacy)
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-post-conversation-survey-legacy.html
indicator: both
---

{: .attn-note}
This integration with Post Conversation Survey (PCS) is only available with [PCS Legacy solution](messaging-window-api-tutorials-legacy-post-conversation-survey-pcs.html). New PCS bots can be configured in [Conversation Builder](conversation-builder-bots-post-conversation-survey-bots.html) and are **not** integrated with Functions.

A Post Conversation Survey flow is triggered at the end of a conversation with an agent or custom bot. You can use it to obtain feedback from the consumer on their experience with your brand. A PCS is a great way to measure agent/bot and skill performance and identify opportunities to improve your quality targets.

PCS Bot can be integrated with Functions. A function can be invoked when the survey starts (at the end of the conversation) and when the survey ends. This integration will not send any automated emails compared to the [chat post survey](liveperson-functions-event-sources-chat-post-survey.html).

{: .attn-note}
Post-Conversation Survey Bot is only available for **messaging**, not for chat.

<img src="img/functions/functions_survey_bot_flow.png" alt="Functions: Post Conversation Survey Flow" style="width:100%;"/>

This is the Post Conversation Survey flow with Functions integration:

1. Survey Bot listens to *conversation end* events.
2. If certain conditions occur, the Survey bot will send the survey first question to the conversation:
    1. If there is a Function deployed on the *Messaging Survey Started* event, the associated function will be invoked (if deployed).
    2. Survey will listen for survey responses, send more questions and listen to responses.
3. When the Survey ends on the *Messaging Survey Ended* event, the Survey Bot will invoke the associated function (if deployed).

### Configuration

Your account must have the Post Conversation Survey enabled; please get in touch with your account team to enable the feature.

#### Step 1 — Configure your PCS

Follow this guide on configuring a [Post Conversation Survey](messaging-window-api-tutorials-legacy-post-conversation-survey-pcs.html). If you already have a survey bot configured, make sure you have Functions enabled for your account.

#### Step 2 — Create function

Create a new function using one of the messaging survey templates. There are the following events:

* *Messaging Survey Started.*
* *Messaging Survey Ended.*

Currently, you can only create one function of this event type. If multiple types of functionality are needed that require the same event, this must be handled by a single function's code.

{: .attn-note}
The Survey Bot will not process any callback payload during the invocation.

#### Step 3 — Edit the function

Adjust the code in the template according to your needs by modifying the function. On the right side, you can see an example of the payload (in the sidebar, which you might need to open). If the calling system does not thread the function, the function can return `ok` within the callback. Please see our [Deep Dive UI Creation Process](liveperson-functions-getting-started-development-deep-dive-ui.html#creation-process) section or alternatively [Deep Dive CLI Create](liveperson-functions-getting-started-development-deep-dive-cli.html) section for further information.

#### Step 4 — Deploy the function

Like any other function, this function must be deployed before it can be used. Please see our [Deep Dive UI Deployment Process](liveperson-functions-getting-started-development-deep-dive-ui.html#deployment-process) section or alternatively [Deep Dive CLI Deploy](liveperson-functions-getting-started-development-deep-dive-cli.html) section for more information on how to deploy your function.

### Payload details

| 1. level | 2. level | 3. level | description | type | example
---|---|---|---|---|---
 conversationId | &nbsp; | &nbsp; | ID of conversation | STRING | c840e51e-5f65-4ad4-8d34-5c82b99a2200
 accountId | &nbsp; | &nbsp; | ID of account | STRING | 12345678
 surveyId | &nbsp; | &nbsp; | ID of survey | NUMBER | 3387141511
 surveyRevision | &nbsp; | &nbsp; | Revision of survey | NUMBER | 2
 skillId | &nbsp; | &nbsp; | ID of skill | STRING | 563267
 effectiveTTR | &nbsp; | &nbsp; | timestamp when agent should be available | NUMBER | 1528464044687
 lastContentEventNotification | originatorId | &nbsp; | ID of originator | NUMBER | 37607275.23
 lastContentEventNotification | originatorPId | &nbsp; | Pid of originator | STRING | f39fbc5f-da77-5417-8bc7-7584efdd1a5e
 lastContentEventNotification | sequence | &nbsp; | sequence of conversation (starting by 0) | NUMBER | 1
 lastContentEventNotification | serverTimestamp | &nbsp; | timestamp of the server | NUMBER | 1528463781807
 lastContentEventNotification | event | contentType | contenttype of last event | STRING | text/plain
 lastContentEventNotification | event | message | message of last event | STRING | Thank you for messaging us. Our contact center is currently closed. An agent should reply within 11 hours and 40 minutes.
 lastContentEventNotification | event | type | type of last event | STRING | ContentEvent
 lastContentEventNotification | originatorClientProperties | &nbsp; | Information about client | OBJECT | {"type":".ClientProperties","appId":"webAsync","ipAddress":"127.0.0.1","deviceFamily":"DESKTOP","os":"OSX","osVersion":"10.14.3","integration":"WEB_SDK","integrationVersion":"3.0.25","browser":"CHROME","browserVersion":"72.0.3626.119","features":["PHOTO_SHARING","CO_BROWSE","QUICK_REPLIES","AUTO_MESSAGES","MULTI_DIALOG","RICH_CONTENT"]},
 campaignInfo | campaignId | &nbsp; | ID of campaign | NUMBER | 2451931211
 campaignInfo | engagementId | &nbsp; | ID of engagement | NUMBER | 2451931311
 closeReason | &nbsp; | &nbsp; | close reason of conversation | STRING | CONSUMER
 context | clientProperties | &nbsp; | Information about client | OBJECT | {"type":".ClientProperties","appId":"webAsync","ipAddress":"127.0.0.1","deviceFamily":"DESKTOP","os":"OSX","osVersion":"10.14.3","integration":"WEB_SDK","integrationVersion":"3.0.25","browser":"CHROME","browserVersion":"72.0.3626.119","features":["PHOTO_SHARING","CO_BROWSE","QUICK_REPLIES","AUTO_MESSAGES","MULTI_DIALOG","RICH_CONTENT"]}
 context | interactionContextId | &nbsp; | ID of context | STRING | 5
 context | lang | &nbsp; | language | STRING | en-US
 context | sessionId | &nbsp; | ID of session | STRING | iGY4vsiETB-Zsyi7IGlIk1
 context | type | &nbsp; | type of context | STRING | SharkContext
 context | visitorId | &nbsp; | ID of visitor | STRING | hjMTk3ZTcwZmFhZjc3NDk2
 dialogs | &nbsp; | &nbsp; | array with information about the dialogs of the conversation | OBJECT-ARRAY | [{"dialogId":"efSg0XbnTkmg8OXaSyaz81","participantsDetails":[{"id":"49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911","role":"CONSUMER","state":"ACTIVE"}],"dialogType":"POST_SURVEY","channelType":"MESSAGING","metaData":{"appInstallId":"829d951a-777e-46a3-98db-c06214e3f401"},"state":"OPEN","creationTs":1551702854131,"metaDataLastUpdateTs":1551702854131},{"dialogId":"fb84c76d-0daa-46c7-b02d-eb6130c022c1","participantsDetails":[{"id":"49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911","role":"CONSUMER","state":"ACTIVE"}],"dialogType":"MAIN","channelType":"MESSAGING","state":"CLOSE","creationTs":1551702813391,"endTs":1551702854131,"metaDataLastUpdateTs":1551702854131,"closedBy":"CONSUMER","closedCause":"Closed by consumer"}],
 firstConversation | &nbsp; | &nbsp; | if this is the frist conversation of the consumer ever | BOOLEAN | TRUE/FALSE
 participants | &nbsp; | &nbsp; | array of the participants of the current state | OBJECT-ARRAY | [{"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "ASSIGNED_AGENT"}, {"id": "f9d58c57-c489-45f5-bae4-c5ebd52b3972","role": "AGENT"}]
 state | &nbsp; | &nbsp; | state of the dialog | STRING | OPEN
 startTs | &nbsp; | &nbsp; | conversation start time as timestamp | NUMBER | 1528463744663
 ttr | ttrType | &nbsp; | type of ttr | STRING | URGENT
 ttr | value | &nbsp; | value of ttr | NUMBER | 300
 lastQuestionId | &nbsp; | &nbsp; | ID of last question | STRING | 2741eea2-e184-4cd4-abbe-e8f6e1d26681
