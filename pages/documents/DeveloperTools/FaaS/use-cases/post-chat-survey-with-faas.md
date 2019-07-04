---
pagename: Post Chat Survey Transcripts
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Use Cases
permalink: function-as-a-service-use-cases-post-chat-survey-transcripts.html
indicator: chat
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
