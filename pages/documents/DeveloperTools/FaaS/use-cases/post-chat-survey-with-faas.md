---
pagename: Post Chat Survey Transcripts
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Use Cases
permalink: liveperson-functions-use-cases-post-chat-survey-transcripts.html
indicator: chat
redirect_from:
  - function-as-a-service-use-cases-post-chat-survey-transcripts.html
---

This use case showcases how the LivePerson Functions platform can help extend the LiveEngage platform functionality. In this case, we will use Functions to re-create one of our Legacy features, the ability to conditionally send out transcripts after a chat conversation ended.

**Note:** Within this integration, the chat server will still take care of sending out emails. Functions will only be used to write more sophisticated conditions.

<div class="important">Once a Functions lambda is implemented for this specific event, any old logic outside of Functions will not be used anymore (i.e, any rules defined otherwise in LiveEngage). Therefore, make sure that the complete logic was implemented within your function before deploying it.</div>

### Post-Survey Integration Outline

The integration between LiveEngage and Functions in this case is done based on an event that LiveEngage sends to the Functions platform once a Post Conversation Survey has been submitted. This event invokes our function within the platform that we want to use. This event sends the following data to the function:

* CSAT Rank: Numeric value between 1 (Very Dissatisfied) - 5 (Very Satisfied).

* Skill name: Name of the skill the chat was assigned to.

* Agent name: Full name of the agent in the format "first name surname"

* List of all survey questions which were answered. Each list entry is an entity containing the following properties:

    * Question: Full question string

    * Answer: Complete answer. For multi-selection, the answers will be separated by a semicolon.

The following is an example of the payload that LiveEngage Chat sends to Functions in a JSON format:

```json
{
  "timestamp": 2342343242,
  "headers": [],
  "payload": {
    "csatRank": 3,
    "skillName": "CustomerCare",
    "agentName": "John Doe",
    "questionWithAnswers": [
    {
      "question": "How was the chat experience?",
      "answer": "Poor;Below Average"
    }
    ]
  }
}
```
Let's take a look at how to implement an example function in Functions to utilize this payload:

### Before Getting Started

In order to use this example, you'll need to have the LivePerson Functions feature enabled for your account. Please contact your LivePerson team in order to do so.

### Step 1 - Create a new Function

Create a new lambda/function. **Remember**: templates, once selected, cannot be changed due to risk of undesired side effects. For more information on how to create functions, [please see this document](function-as-a-service-getting-started.html).

### Step 2 - Edit the Function

Adjust the coding from the template according to your needs by modifying the lambda/function by pressing the edit button on the template function. For more information on developing a function within Functions, [please see this document](function-as-a-service-developing-with-functions.html).

Based on the payload sent from the LiveEngage server described above, this could be an example `lambda` that processes the data within LivePerson Functions and returns a list of email addresses back to LiveEngage:

```javascript
module.exports = (data, cb) => {
  let allSurveyEmails = [];

  //csatRank value range: 1-5, 1=very dissatisfied, 5=very satisified
  let csatRank = data.payload.csatRank > -1 ? data.payload.csatRank : null;
  let skillName = data.payload.skillName;
  let agentName = data.payload.agentName;
  let questionsAndAnswers = data.payload.questionWithAnswers;

  if(csatRank && csatRank <= 3 && data.payload.skillName.match(/CustomerCare/i) !== null && data.payload.agentName.match(/John Doe/i) !== null){
    let surveyEmail = {};
    surveyEmail.targetEmail = "ReplaceMe@company.com";
    surveyEmail.senderName = "Sender X";
    surveyEmail.senderEmail = "ReplaceMe@company.com";
    surveyEmail.subject = "Email Transcript Notification";
    allSurveyEmails.push(surveyEmail);
  }

  //return result
  cb(null, allSurveyEmails);
};
```

This sample code checks whether the `csatRank` is smaller than or equal to 3, that the `skillName` matches "CustomerCare" and that the `agentName` was “John Doe”. If these conditions are true, a new entry will be written to the returned email property list.

The email result entry needs to contain the following properties:

* targetEmail: Receiving email address

* senderName: The name of the sender of the post-survey email transcript

* senderEmail: Sender email address

* subject: Email subject

### Step 3 - Deploy the Function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

Congratulations, you deployed your first function for LiveEngage! You can now invoke the `lambda` via the LiveEngage post survey invocation.

### Payload details

```json
{
  "headers": [],
  "payload": {
    "ttr": {
      "value": 3600,
      "ttrType": "NORMAL"
    },
    "state": "CLOSE",
    "context": {
      "lang": "en-US",
      "type": "SharkContext",
      "sessionId": "iGY4vsiETB-Zsyi7IGlIk1",
      "visitorId": "hjMTk3ZTcwZmFhZjc3NDk2",
      "clientProperties": {
        "os": "OSX",
        "type": ".ClientProperties",
        "appId": "webAsync",
        "browser": "CHROME",
        "features": [
          "PHOTO_SHARING",
          "CO_BROWSE",
          "QUICK_REPLIES",
          "AUTO_MESSAGES",
          "MULTI_DIALOG",
          "RICH_CONTENT"
        ],
        "ipAddress": "127.0.0.1",
        "osVersion": "10.14.3",
        "integration": "WEB_SDK",
        "deviceFamily": "DESKTOP",
        "browserVersion": "72.0.3626.119",
        "integrationVersion": "3.0.25"
      },
      "interactionContextId": "3"
    },
    "dialogs": [
      {
        "state": "OPEN",
        "dialogId": "efSg0XbnTkmg8OXaSyaz81",
        "metaData": {
          "appInstallId": "829d951a-777e-46a3-98db-c06214e3f401"
        },
        "creationTs": 1551702854131,
        "dialogType": "POST_SURVEY",
        "channelType": "MESSAGING",
        "participantsDetails": [
          {
            "id": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
            "role": "CONSUMER",
            "state": "ACTIVE"
          }
        ],
        "metaDataLastUpdateTs": 1551702854131
      },
      {
        "endTs": 1551702854131,
        "state": "CLOSE",
        "closedBy": "CONSUMER",
        "dialogId": "fb84c76d-0daa-46c7-b02d-eb6130c022c1",
        "creationTs": 1551702813391,
        "dialogType": "MAIN",
        "channelType": "MESSAGING",
        "closedCause": "Closed by consumer",
        "participantsDetails": [
          {
            "id": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
            "role": "CONSUMER",
            "state": "ACTIVE"
          }
        ],
        "metaDataLastUpdateTs": 1551702854131
      }
    ],
    "skillId": "3386914911",
    "startTs": 1551702813390,
    "surveyId": 3387141511,
    "accountId": "accountId",
    "closeReason": "CONSUMER",
    "campaignInfo": {
      "campaignId": 2451931211,
      "engagementId": 2451931311
    },
    "effectiveTTR": -1,
    "participants": [
      {
        "id": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
        "role": "CONSUMER"
      }
    ],
    "conversationId": "fb84c76d-0daa-46c7-b02d-eb6130c022c9",
    "lastQuestionId": "2741eea2-e184-4cd4-abbe-e8f6e1d26681",
    "surveyRevision": 2,
    "firstConversation": false,
    "lastContentEventNotification": {
      "event": {
        "type": "ContentEvent",
        "message": "sdf",
        "contentType": "text/plain"
      },
      "dialogId": "fb84c76d-0daa-46c7-b02d-eb6130c022c1",
      "sequence": 0,
      "originatorId": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
      "originatorPId": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
      "serverTimestamp": 1551702813512,
      "originatorMetadata": {
        "id": "49b673cb7d08168a9f14640346340237054482174d65ff8c70e0f4d0d9bfa911",
        "role": "CONSUMER",
        "clientProperties": {
          "os": "OSX",
          "type": ".ClientProperties",
          "appId": "webAsync",
          "browser": "CHROME",
          "features": [
            "PHOTO_SHARING",
            "CO_BROWSE",
            "QUICK_REPLIES",
            "AUTO_MESSAGES",
            "MULTI_DIALOG",
            "RICH_CONTENT"
          ],
          "ipAddress": "127.0.0.1",
          "osVersion": "10.14.3",
          "integration": "WEB_SDK",
          "deviceFamily": "DESKTOP",
          "browserVersion": "72.0.3626.119",
          "integrationVersion": "3.0.25"
        }
      },
      "originatorClientProperties": {
        "os": "OSX",
        "type": ".ClientProperties",
        "appId": "webAsync",
        "browser": "CHROME",
        "features": [
          "PHOTO_SHARING",
          "CO_BROWSE",
          "QUICK_REPLIES",
          "AUTO_MESSAGES",
          "MULTI_DIALOG",
          "RICH_CONTENT"
        ],
        "ipAddress": "127.0.0.1",
        "osVersion": "10.14.3",
        "integration": "WEB_SDK",
        "deviceFamily": "DESKTOP",
        "browserVersion": "72.0.3626.119",
        "integrationVersion": "3.0.25"
      }
    }
  }
}

```

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
