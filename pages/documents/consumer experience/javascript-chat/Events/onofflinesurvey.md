---
title: onOfflineSurvey
redirect_from:
  - consumer-experience-javascript-chat-onofflinesurvey.html

Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 212
permalink: javascript-chat-sdk-events-onofflinesurvey.html

indicator: chat
---

Triggered in response to the [getOfflineSurvey](consumer-experience-javascript-chat-getofflinesurvey.html) method.

*Note: For more information on the Survey object see [Surveys](consumer-experience-javascript-chat-surveys.html).*

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
                    "label": "What was your experience?",
                    "lastKnownValue": "",
                    "type": "Text Field"
                },
                {
                    "id": 1337252,
                    "order": 1,
                    "mandatory": false,
                    "validationType": "numeric",
                    "logicId": 2,
                    "label": "How many points would you like?",
                    "lastKnownValue": "",
                    "type": "Text Field"
                }
            ]
        },
        "header": "To help us serve you better, please provide some information before we begin your chat."
    }
}
```