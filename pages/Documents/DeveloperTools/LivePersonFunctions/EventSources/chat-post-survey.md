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

Chat Post Survey integrates LivePerson Functions with LiveEngage Chat. This integration will use Functions to re-create one of our Legacy features, the ability to conditionally send out email transcripts after a chat conversation ended.

<div class="important">Within this integration, the chat server will still take care of sending out emails. Functions will only be used to write more sophisticated conditions.</div>

### Configuration

There is not further requirements than FaaS feature enabled. Remember that this integration is available only with LiveEngage Chat.

#### Step 1 - Create a new Function

Create a new `lambda` from **Chat Post Survey E-mail Transcript** event. The default template for this event will be selected for the function.

<div class="important">Once a Function is implemented for this specific event, any old logic outside of Functions will not be used anymore (i.e, any rules defined otherwise in Conversational Cloud). Therefore, make sure that the complete logic was implemented within your function before deploying it.</div>

#### Step 2 - Edit the Function

Adjust the coding from the template according to your needs by modifying the lambda/function by pressing the edit button on the template function.

The email result entry needs to contain the following properties:

<table>
  <thead><tr><th>Property</th><th>description</th><th>type</th></tr></thead>
  <tbody>
    <tr><td>targetEmail</td><td>Receiving email address.</td><td>STRING</td></tr>
    <tr><td>senderName</td><td>The name of the sender of the post-survey email transcript.</td><td>STRING</td></tr>
    <tr><td>senderEmail</td><td>Sender email address.</td><td>STRING</td></tr>
    <tr><td>subject</td><td>Email subject.</td><td>STRING</td></tr>
  </tbody>
</table>

#### Step 3 - Deploy the Function

Just like any other function, this function must be deployed before it can be used. [Please see this document](liveperson-functions-getting-started-your-first-function.html#deploy) for more information on how to deploy your function.

### Function example

Based on the payload sent from the Conversational Cloud server described bellow, this could be an example `lambda` that processes the data within LivePerson Functions and returns a list of email addresses back to Conversational Cloud:

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

### Payload Details

The integration between Conversational Cloud and Functions in this case is done based on an event that Conversational Cloud sends to the Functions platform once a Post Conversation Survey has been submitted. This event invokes our function within the platform that we want to use. This event sends the following data to the function:

<table>
<thead><tr><th>1. level</th><th>2. level</th><th>description</th><th>type</th><th>example</th></tr></thead><tbody>
<tr><td>csatRank</td><td></td><td>Numeric value between 1 (Very Dissatisfied) - 5 (Very Satisfied).</td><td>NUMBER</td><td>3</td></tr>
<tr><td>skillName</td><td></td><td>Name of the skill the chat was assigned to.</td><td>STRING</td><td>CustomerCare</td></tr>
<tr><td>agentName</td><td></td><td>Full name of the agent in the format "first name surname".</td><td>STRING</td><td>John Doe</td></tr>
<tr><td>questionWithAnswers</td><td></td><td>List of all survey questions which were answered.</td><td>STRING</td><td></td></tr>
<tr><td>questionWithAnswers</td><td>Question</td><td>Full question string.</td><td>STRING</td><td>How was the chat experience?</td></tr>
<tr><td>questionWithAnswers</td><td>Answer</td><td>Complete answer. For multi-selection, the answers will be separated by a semicolon.</td><td>STRING</td><td>Poor;Below Average</td></tr>
</tbody></table>

The following is an example of the payload that Conversational Cloud Chat sends to Functions in a JSON format:

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

### Hints

* Only **Chat Post Survey E-mail Transcript** event is supported for this integration.
* Functions platform won't send out any email. The chat server will take care of sending out emails.
* Any old logic/rules related to this event outside the Functions will be replaced by the function once it is deployed. Be sure to implement the completed logic to avoid unexpected behaviors.
* If there is any error during an invocation, the email won't be sent, there is no retry mechanism in the chat server for this integration.
