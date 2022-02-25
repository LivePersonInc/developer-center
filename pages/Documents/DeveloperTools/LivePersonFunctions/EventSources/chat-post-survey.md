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

Chat Post Survey integrates LivePerson Functions and LiveEngage Chat. This integration will use Functions to re-create one of our Legacy features, the ability to conditionally send out email transcripts after a chat conversation ended. This integration a function will be invoke only for  *Post email transcript* event.

**Note:** Within this integration, the chat server will still take care of sending out emails. Functions will only be used to write more sophisticated conditions.

<div class="important">Once a Function is implemented for this specific event, any old logic outside of Functions will not be used anymore (i.e, any rules defined otherwise in Conversational Cloud). Therefore, make sure that the complete logic was implemented within your function before deploying it.</div>

### Configuration

There is not further requirements that FaaS feature enabled. Remember that this integration is available only with LiveEngage Chat.

#### Step 1 - Create a new Function

Create a new lambda/function from **Chat Post Survey E-mail Transcript" event. THe default template for this event will be selected for the function.

#### Step 2 - Edit the Function

Adjust the coding from the template according to your needs by modifying the lambda/function by pressing the edit button on the template function.

The email result entry needs to contain the following properties:

* targetEmail: Receiving email address

* senderName: The name of the sender of the post-survey email transcript

* senderEmail: Sender email address

* subject: Email subject

#### Step 3 - Deploy the Function

Just like any other function, this function must be deployed before it can be used. [Please see this document](liveperson-functions-getting-started-your-first-function.html#deploy) for more information on how to deploy your function. 
### Events

Only *Post Survey Email Transcript event* is available within this integration.

### Example

Based on the payload sent from the Conversational Cloud server described above, this could be an example `lambda` that processes the data within LivePerson Functions and returns a list of email addresses back to Conversational Cloud:

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

### Invocation Errors

If there is any error during the invocation, the email wont be sent , (there is no retry mechanissm for this integration)

### Payload Details

The integration between Conversational Cloud and Functions in this case is done based on an event that Conversational Cloud sends to the Functions platform once a Post Conversation Survey has been submitted. This event invokes our function within the platform that we want to use. This event sends the following data to the function:

* CSAT Rank: Numeric value between 1 (Very Dissatisfied) - 5 (Very Satisfied).

* Skill name: Name of the skill the chat was assigned to.

* Agent name: Full name of the agent in the format "first name surname"

* List of all survey questions which were answered. Each list entry is an entity containing the following properties:

    * Question: Full question string

    * Answer: Complete answer. For multi-selection, the answers will be separated by a semicolon.

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
