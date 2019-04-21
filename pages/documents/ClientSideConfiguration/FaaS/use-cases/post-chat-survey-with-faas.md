---
pagename: Post Conversation Survey Transcripts
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Use Cases
permalink: function-as-a-service-use-cases-post-conversation-survey-with-faas.html
indicator: both
---

This use case showcases how the FaaS platform can help extend LivePerson platform functionallity. In this case, we will use FaaS to re-create one of our Legacy features, the ability to conditionally send out transcripts after the conversation ended (e.g, send a transcript only if the user requested it).

### Post-Survey Integration Outline

The integration between LiveEngage and FaaS in this case is done based on an event that LiveEngage sends to the FaaS platform once a post-survey has been submitted. This event invokes the FaaS function we will use. This event sends the following data to the function:

* CSAT Rank: Numeric value between 1 (Very Dissatisfied) - 5 (Very Satisfied).

* Skill name: Name of the skill the chat was assigned to.

* Agent name: Full name of the agent in the format "forename surname"

* List of all survey questions which were answered. Each list entry is an entity containing the following properties:

    * Question: Full question string

    * Answer: Complete answer. For multi-selection, the answers will be separated by a semicolon.

The following is an example of the payload that LiveEngage Chat sends to FaaS in a JSON format:

```JSON
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
Let's take a look at how to implement an example function in FaaS to utilize this payload:

### Before Getting Started

In order to use this example, you'll need to have the Function as a Service feature enabled for your account. Please contact your LivePerson team in order to do so.

### Step 1 - Create a new Function

Create a new lambda/function via the [External UI](function-as-a-service-using-the-external-ui.html). **Remember**: templates, once selected, cannot be changed due to risk of undesired side effects. For more information on how to create fuctions, [please see this document](function-as-a-service-getting-started.html).

### Step 2 - Edit the Function

Adjust the coding from the template according to your needs by modifying the lambda/function by pressing the edit button on the template function. For more information on developing a function within FaaS, [please see this document](function-as-a-service-developing-with-faas.html).

Based on the payload sent from the LiveEngage server described above, this could be an example function that processes the data within FaaS and returns a list of email addresses back to LiveEngage:

```javascript
module.exports = (data, cb) => {
  let allSurveyEmails = [];

  //csatRank value range: 1-5, 1=very dissatisfied, 5=very satisified
  let csatRank = data.payaload.csatRank > -1 ? data.payload.csatRank : null;
  let skillName = data.payload.skillName;
  let agentName = data.payload.agentName;
  let questionsAndAnswers = data.payload.questionWithAnswers;

  if(castRank && castRank <= 3 && data.payload.skillName.match(/CustomerCare/i) !== null && data.payload.agentName.match(/John Doe/i) !== null){
    let surveyEmail = {};
    surveyEmail.targetEmail = "ReplaceMe@company.com";
    surveyEmail.senderName = "Sender X";
    surveyEmail.senderEmail = "ReplaceMe@company.com";
    surveryEmail.subject = "Email Transcript Notification";
    allSurveryEmails.push(surveyEmail);
  }

  //return result
  cb(null, allSurveryEmails);
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

Congratulations, you deployed your first FaaS function for LiveEngage! You can now invoke the `lambda` via the LiveEngage post survey invocation.
