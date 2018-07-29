---
title: Retrieve Agent Survey Structure
redirect_from:
  - agent-retrieve-survey-structure.html
Keywords:
level1: 
level2: Agent Interactions
level3: Chat Agent API
level4: Methods
order: 220
permalink: chat-agent-api-methods-retrieve-agent-survey-structure.html
indicator: chat
---

This method returns the agent survey structure. The survey structure is in XML that describes the questions of the survey as well as the logic of which questions are hidden.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/survey?v=1&NC=true  |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON


**Body Parameters**

 |Name|  Description|  Type/Value|  Required|
 |:---|  :---|  :---|  :--- |
 |windowSurveyEnabled|  Indicates if the survey was enabled in the engagement's window |   boolean|  optional|
 |surveyApiId|  The desired survey id |  alphanumeric| optional|
 |engSkillId|   The current engagement's skill id |  alphanumeric| optional|

### Response

**Elements in the response**

| Name | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| header | The survey's displayed header. | alphanumeric | |
| question | Contains all the question data. | | |
| mandatory | Whether this question is mandatory in the survey. | Boolean | |
| order | The order of the question in the survey. | | |
| logicId | Unique ID of this question for logic. | | See [Logic](#logic).|
| id | Unique ID of this question. | | |
| type | Identifies the question answer type. | Dropdown Box, Checkbox, Radio Button (side by side), Radio Button | |
| validationType | Identifies the question validation type. | alphanumeric, numeric, email | |
| label | The displayed question label. | alphanumeric | |
| lastKnownValue | An old value from an earlier session (for non-selection questions). | alphanumeric | Show it to the user as the default value for this question. |
| entry | A selection question item. | | |
| checked | Indicates whether this item should be selected when you show this question to the user. | Boolean | |
| value (entry) | The label of the selection item. | alphanumeric | |
| <a name="logic"></a>logic | Exists if this question has any logic. | | Logic allows specified questions in surveys to be hidden or displayed to visitors based on the answers given to previous questions in a survey. In the examples above, the question with attribute logicID 5 will be displayed when the 'CATS' answer is selected via the drop-down box in question with id="12786273". This behavior is set by the "showLogicId" element. Question Logic is particularly useful when the user might get a long list of options that would not be as user-friendly in a single list; or you wish to hide conditional or required questions which might not be relevant for all users completing the survey. |
| showLogicId | The ID of the question to be displayed if this item is selected. | numeric | |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
