---
title: Retrieve Pre-Chat Survey
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 40
permalink: server-chat-api-methods-retrieve-pre-chat-survey.html

indicator: chat
---

Returns an XML or JSON response with the Pre-Chat survey.

*Note: Posting answers for a Pre-Chat survey is done through [Start Chat](consumer-experience-server-chat-start-chat.html){:target="_blank"}.*

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat//preSurvey?v=1&NC=true |

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
| visitorProfile | Requests a survey for a specific visitor profile.  | alphanumeric | If both the skill and visitor profile parameters are provided, only the visitor profile parameter will be considered. |
| visitorIp | This parameter can be used by the LivePerson Rules Engine to decide which survey to return. | alphanumeric (IP) | The visitor's host name is found using this IP address. If no IP address is specified, the visitor's IP  will be taken from the request's IP. |
| userAgent | This parameter can be used by the LivePerson Rules Engine to decide which survey to return.  | alphanumeric | If no user agent is specified, it will be  taken from the HTTP "User-Agent" header. |
| surveyName | Requests a specific survey.  | alphanumeric | If visitorprofile or skill parameters are provided, and a survey with this name exists, the requested survey will be returned unless there is a rule that overrides this name. |
  
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example

    {
      "survey" : {
        "id" : "40216",
        "title" : "",
        "header" : "To help us serve you better, please provide some information before we begin your chat.",
        "questions" : {
          "question" : [ {
            "mandatory" : "true",
    
            "validationType" : "alpha_numeric",
            "order" : "0",
            "logicId" : "4",
            "id" : "12786273",
            "type" : "Dropdown Box",
            "label" : "With whom would you like to chat?",
            "entry" : [ {
              "checked" : "false",
              "value" : "CATS",
              "logic" : {
                "showLogicId" : "5"
              }
            }, {
              "checked" : "false",
              "value" : "DOGS"
            }]
          }, {
            "mandatory" : "true",
    
            "validationType" : "alpha_numeric",
            "order" : "1",
            "logicId" : "5",
            "id" : "16314710",
            "type" : "Text Field",
            "label" : "What is your name?",
            "lastKnownValue" : "John"
          } ]
        }
      }
    }

*Note: The examples above demonstrate the usage of question logic. Question logicId 5 will be displayed when the 'CATS' answer is selected via the drop-down box in the question with id="12786273". This behavior is set by the "showLogicId" element.*

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
