---
pagename: Retrieve Exit Survey Structure
redirect_from:
  - consumer-experience-server-chat-retrieve-exit-survey-structure.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Server Chat API
subfoldername: Methods

order: 150
permalink: server-chat-api-methods-retrieve-exit-survey-structure.html

indicator: chat
---

Used to retrieve the Exit survey structure.

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/exitSurvey?v=1&NC=true |

**Retrieving the Exit Survey Structure**

Returns the exit survey structure. The survey structure is an XML response describing the questions of the survey as well as the logic of which questions are hidden.

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

**Query Parameters**

| Name  | Description | Type | 
| :--- | :--- | :--- | :--- |
| surveyName | Requests a specific survey. If a survey with this name exists, the requested survey will be returned unless there is a rule that overrides this name. | alphanumeric |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example:

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

**Elements in the Response**

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| title | For future use. | alphanumeric | |
| header | The survey's displayed header. | alphanumeric | |
| question | Contains all the question data. | | |
| mandatory | Whether this question is mandatory in the survey. | Boolean | |
| order | The order of the question in the survey. | | You should display the questions according to their order number. |
| logicId | Unique ID of this question for logic. | | See [Logic](#logic) below |
| id |  Unique ID of this question. | | |
| type | Identifies the question answer type. | Dropdown Box <br> Checkbox <br> Radio Button (side by side) <br> Radio Button <br> Text Field <br> Text Area | |
| validationType | Identifies the question validation type.  | alphanumeric <br> numeric <br> email | |
| label | The displayed question label. | alphanumeric | |
| lastKnownValue | An old value from an earlier session (for non-selection questions). | alphanumeric | Should be showed to the user as the default value for this question. |
| entry | A selection question item. | | |
| checked | Indicates whether this item should be selected when you show this question to the user. | Boolean | |
| value (entry) | The label of the selection item. | alphanumeric | |
| <a name="logic">Logic</a> | Exists if this question has any logic. | | Logic allows specified questions in surveys to be hidden or displayed to visitors based on the answers given to previous questions in a survey. In the examples above, the question with attribute logicID 5 will be displayed when the 'CATS' answer is selected via the drop-down box in question with id="12786273". This behavior is set by the "showLogicId" element. Question Logic is particularly useful when the user might receive a long list of options that would not be as user-friendly in a single list; or you wish to hide conditional or required questions which might not be relevant for all users completing the survey. |
| showLogicId | The logic ID of the question to be displayed if this item is selected. | numeric | |
