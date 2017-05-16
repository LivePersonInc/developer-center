---
title: getPreChatSurvey
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 10
permalink: consumer-experience-javascript-chat-getprechatsurvey.html

---

Retrieves the Pre-chat survey according to the criteria passed.

*Note: For more information on the Survey Object, see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}*.

### Request

**Possible Properties**

| Value | Description | Type |  Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| visitorProfile |  The requested visitorProfile.  | string | Optional | If a skill is also, provided, visitorProfile takes precedence. |
| skill |  The requested skill for the chat. | string | Optional | |
| visitorIp | The IP address of the current visitor.  | string | Optional | The system will then decide which is the appropriate survey. |
| surveyName    | A specific survey for which the name is known. | string | Optional | This will take precedence over the skill and visitorProfile properties. |
| surveyApiId   | A specific survey which you know the server ID for. | string | Optional | |

**Sample request**

```javascript
var failedRequest = myChat.getPreChatSurvey({
    skill: "support",
    success: myChat.populateSurvey,
    error: myChat.noSurvey,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```
*Note: For more information on the Survey Object, see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.*
                                                                                                                      
### Response

**Sample response**

```json
{
    "survey": {
        "id": 123345,
        "title": "",
        "questions": {
            "question": [
                {
                    "id": 1336725,
                    "order": 0,
                    "mandatory": true,
                    "validationType": "alpha_numeric",
                    "logicId": 1,
                    "label": "What is your name?",
                    "lastKnownValue": "",
                    "type": "Text Field"
                },
                {
                    "id": 1337252,
                    "order": 1,
                    "mandatory": false,
                    "validationType": "email",
                    "logicId": 2,
                    "label": "Email Address",
                    "lastKnownValue": "",
                    "type": "Text Field"
                }
            ]
        },
        "header": "To help us serve you better, please provide some information before we begin your chat."
    }
}
```
