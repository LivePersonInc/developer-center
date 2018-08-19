---
title: onExitSurvey
redirect_from:
  - consumer-experience-javascript-chat-onexitsurvey.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 300
permalink: javascript-chat-sdk-events-onexitsurvey.html

indicator: chat
---

Triggered in response to the [getExitSurvey](consumer-experience-javascript-chat-getexitsurvey.html){:target="_blank"} method.

*Note: For more information on the Survey object see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.*

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