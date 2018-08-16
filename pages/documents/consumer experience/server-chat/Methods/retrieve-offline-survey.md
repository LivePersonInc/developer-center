---
title: Retrieve Offline Survey
redirect_from:
  - consumer-experience-server-chat-retrieve-offline-survey.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 50
permalink: server-chat-api-methods-retrieve-offline-survey.html

indicator: chat
---

Returns an XML or JSON response with an Offline survey, or posts an Offline survey.

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/chat/offlineSurvey?v=1&NC=true |

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

| Name  | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| skill | Requests a survey for a specific skill. | alphanumeric | |
| visitorProfile | Requests a survey for a specific visitor profile. |  alphanumeric | If both the skill and visitor profile parameters are provided, only the visitor profile parameter will be considered. |
| visitorId | The ID of this visitor. | alphanumeric | |
| surveyName | Requests a specific survey. | alphanumeric | If visitorProfile or skill parameters are provided, and a survey with this name exists, the requested survey will be returned unless there is a rule that overrides this name. |
  
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example

    {
      "survey" : {
        "id" : "40290",
        "title" : "",
        "header" : "Send A Message",
        "questions" : {
          "question" : {
            "mandatory" : "false",
            "order" : "0",
    
            "validationType" : "alpha_numeric",
            "logicId" : "6",
            "id" : "13387460",
            "type" : "Text Area",
            "label" : "What do you want? :",
            "lastKnownValue" : ""
          }
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
| logicId | Unique ID of this question for logic. | | See [Logic](#logic) below. |
| id |  Unique ID of this question. | | |
| type | Identifies the question answer type. | Dropdown Box <br> Checkbox <br> Radio Button (side by side) <br> Radio Button <br> Text Field <br> Text Area | |
| validationType | Identifies the question validation type.  | alphanumeric <br> numeric <br> email | |
| label | The displayed question label. | alphanumeric | |
| lastKnownValue | An old value from an earlier session (for non-selection questions). | alphanumeric | You should show it to the user as the default value for this question. |
| entry | A selection question item. | | |
| checked | Indicates whether this item should be selected when you show this question to the user. | Boolean | |
| value (entry) | The label of the selection item. | alphanumeric | |
| <a name="logic">Logic</a> | Exists if this question has any logic. | |
| showLogicId | The logic ID of the question to be displayed if this item is selected. | numeric | |
