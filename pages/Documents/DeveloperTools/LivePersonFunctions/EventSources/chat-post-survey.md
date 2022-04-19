---
pagename: Chat Post Survey
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-chat-post-survey.html
indicator: both
---

Chat Post Survey integrates LivePerson Functions with Conversational Cloud Chat. This integration will use Functions to re-create one of our Legacy features: the ability to send out email transcripts after a chat conversation ends conditionally.

{: .important}
For this integration, the chat server will still take care of sending out emails. Functions will enable you to write more sophisticated conditions.

### Configuration

There are no further requirements other than your Functions account has been [provisioned](liveperson-functions-provisioning.html). This integration is available **only with Conversational Cloud Chat, not Conversational Cloud Messaging**.

#### Step 1 - Create a new Function

Create a new function from the **Chat Post Survey Email Transcript** event. Leave the default template selected.

{: .important}
Once a Function implements this specific event, it will disable the existing logic (i.e., any rules defined otherwise in Conversational Cloud). Therefore, confirm that you implemented the current logic within your function before deployment.

#### Step 2 - Edit the Function

Adjust the code of the template according to your needs. The email result entry **needs** to contain the following properties:

|Property|description|type|
|--- |--- |--- |
|targetEmail|Receiving email address.|STRING|
|senderName|The name of the sender of the post-survey email transcript.|STRING|
|senderEmail|Sender email address.|STRING|
|subject|Email subject.|STRING|

Please see our [Deep Dive UI Creation Process](liveperson-functions-getting-started-development-deep-dive-ui.html#creation-process) section or alternatively [Deep Dive CLI Create](liveperson-functions-getting-started-development-deep-dive-cli.html) section for further information.
#### Step 3 - Deploy the Function

Like any other function, this function must be deployed before it can be used. Please see our [Deep Dive UI Deployment Process](liveperson-functions-getting-started-development-deep-dive-ui.html#deployment-process) section or alternatively [Deep Dive CLI Deploy](liveperson-functions-getting-started-development-deep-dive-cli.html) section for more information on how to deploy your function.
### Function example

The following code is an example function that processes a payload sent from the Conversational Cloud. The function processes the data and returns a list of email addresses to Conversational Cloud:

```javascript
function lambda(input, callback) {
  let allSurveyEmails = [];

  //csatRank value range: 1-5, 1=very dissatisfied, 5=very satisified
  let csatRank = input.payload.csatRank > -1 ? input.payload.csatRank : null;
  let skillName = input.payload.skillName;
  let agentName = input.payload.agentName;
  let questionsAndAnswers = input.payload.questionWithAnswers;

  if(csatRank && csatRank <= 3 && input.payload.skillName.match(/CustomerCare/i) !== null && input.payload.agentName.match(/John Doe/i) !== null){
    let surveyEmail = {};
    surveyEmail.targetEmail = "ReplaceMe@company.com";
    surveyEmail.senderName = "Sender X";
    surveyEmail.senderEmail = "ReplaceMe@company.com";
    surveyEmail.subject = "Email Transcript Notification";
    allSurveyEmails.push(surveyEmail);
  }

  //return result
  callback(null, allSurveyEmails);
};
```

This sample code checks whether the `csatRank` is smaller than or equal to 3, that the `skillName` matches "CustomerCare", and that the `agentName` was “John Doe”. If these conditions are true, a new entry will be written to the returned email list.

### Payload Details

The Conversational Cloud sends events to the Functions platform once a *Post Conversation Survey* has been submitted. This event invokes our function, which is attached to the *Post Conversation Survey* event. This event contains the following data:

|1. level|2. level|description|type|example|
|--- |--- |--- |--- |--- |
|csatRank||Numeric value between 1 (Very Dissatisfied) - 5 (Very Satisfied).|NUMBER|3|
|skillName||Name of the skill the chat was assigned to.|STRING|CustomerCare|
|agentName||Full name of the agent in the format "first name surname".|STRING|John Doe|
|questionWithAnswers||List of all survey questions which were answered.|STRING||
|questionWithAnswers|Question|Full question string.|STRING|How was the chat experience?|
|questionWithAnswers|Answer|Complete answer. For multi-selection, the answers will be separated by a semicolon.|STRING|Poor;Below Average|

The following example is a payload that Conversational Cloud Chat sends to Functions:

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

### Helpful hints

* Only **Chat Post Survey Email Transcript** event is supported for this integration.
* The Functions platform will not send out any email. Instead, the triggering service will send the email based on the function's response.
* Any logic/rules related to this event outside the Functions will be replaced by the function once deployed. Be sure to implement the completed logic to avoid unexpected behaviours.
* If there is an error during an invocation, the email will not be sent. There is **no retry** mechanism in the chat server for this integration.
