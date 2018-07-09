---
title: submitExitSurvey
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 100
permalink: javascript-chat-sdk-methods-submitexitsurvey.html

indicator: chat
---

Submits the Exit survey results to the server. For more information about the Survey Object see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.

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
