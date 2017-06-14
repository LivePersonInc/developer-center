---
title: submitOfflineSurvey
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 120
permalink: consumer-experience-javascript-chat-submitofflinesurvey.html

indicator: messaging
---

Used to submit the Offline survey.

### Request

**Properties**

| Value | Description | Type | Required |
| :--- | :--- | :--- | :--- | 
| survey | The survey answers as entered by the visitor. | object | Required |

Structure:

```json
{
    "survey": {
        "id": 1,
        "question": [
            {
                "id": 1,
                "value": "Need help fixing my car"
            },
            {
                "id": 2,
                "value": "me@me.com"
            }
        ]
    }
}
```

**Sample code**

```javascript
var failedRequest = myChat.submitOfflineSurvey({
    survey: {
        id: 1,
        question: [
            {id: 1, value: "Need help fixing my car"},
            {id: 2, value: "me@me.com"}
        ]
    },
    success: myChat.offlineSurveySubmitted,
    error: myChat.offlineSubmitFailed,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```                                                                                                               
