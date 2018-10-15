---
pagename: submitOfflineSurvey
redirect_from:
  - consumer-experience-javascript-chat-submitofflinesurvey.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Methods

order: 120
permalink: javascript-chat-sdk-methods-submitofflinesurvey.html

indicator: chat
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
