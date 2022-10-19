---
pagename: submitExitSurvey
redirect_from:
  - consumer-experience-javascript-chat-submitexitsurvey.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Methods
order: 100
permalink: javascript-chat-sdk-methods-submitexitsurvey.html
indicator: chat
---

Submits the exit survey results to the server. For more information about the Survey Object see [Surveys](consumer-experience-javascript-chat-surveys.html).

### Request

**Properties**

| Value | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| survey | See survey structure below. | JSON object | Required |

Survey structure:

```json
{
    "survey": {
        "id": 1,
        "question": [
            {
                "id": 1,
                "answer": "123345"
            },
            {
                "id": 2,
                "answer": [
                    "1",
                    "2"
                ]
            }
        ]
    }
}
```

**Sample code**

```javascript
var failedRequest = myChat.submitExitSurvey({
    survey: {
        id: 1,
        question: [
            {id: 1, answer: ["1", "2"]},
            {id: 2, answer: "123123123132123"}
        ]
    },
    success: myChat.exitSurveySubmitted,
    error: myChat.exitSurveyFailed,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```
