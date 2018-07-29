---
title: onPreChatSurvey
redirect_from:
  - consumer-experience-javascript-chat-onprechatsurvey.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 210
permalink: javascript-chat-sdk-events-onprechatsurvey.html

indicator: chat
---

Triggered in response to getPreChatSurvey.

*Note: For more information about the Survey object, see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.*

**Sample Response**

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
