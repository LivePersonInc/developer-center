---
pagename: Submit Survey Data
redirect_from:
  - consumer-experience-server-chat-submit-survey-data.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Server Chat API
subfoldername: Methods
order: 160
permalink: server-chat-api-methods-submit-survey-data.html
indicator: chat
---

Used to submit the survey data.

### Request

| Method | URL |
| :--- | :--- |
| PUT |  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/exitSurvey?v=1&NC=true |

*Currently PUT is supported using a POST method with the "X-HTTP-Method-Override=PUT" header.*

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |
| X-HTTP-Method-Override | PUT |

**Body Parameters**

| Name  | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| question | Contains answer elements for the survey's question with this ID. |  |
| answer| Provided answer for the container question. | alphanumeric | If the question is a multi-selection type (CheckBox) it can contain more than one answer. |

JSON Request Body Example:

```json
    {
      "survey": {
        "id": 361348,
        "title": "",
        "header": "",
        "questions": {
          "question": [
            {
              "type": "Radio Button",
              "validationType": "alpha_numeric",
              "id": 4991315,
              "logicId": 1,
              "order": 0,
              "mandatory": false,
              "label": "Would you like us to email you a transcript of this chat?",
              "entry": [
                {
                  "checked": false,
                  "value": "yes",
                  "displayValue": "Yes"
                },
                {
                  "checked": false,
                  "value": "no",
                  "displayValue": "No"
                }
              ]
            },
            {
              "type": "Text Field",
              "validationType": "email",
              "id": 4991311,
              "logicId": 2,
              "order": 1,
              "mandatory": false,
              "label": "If yes, please provide your email:",
              "lastKnownValue": ""
            }
          ]
        }
      }
    }
```
