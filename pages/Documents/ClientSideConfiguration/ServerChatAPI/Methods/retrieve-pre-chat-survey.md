---
pagename: Retrieve Pre-Chat Survey
redirect_from:
  - consumer-experience-server-chat-retrieve-pre-chat-survey.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Server Chat API
subfoldername: Methods

order: 40
permalink: server-chat-api-methods-retrieve-pre-chat-survey.html

indicator: chat
---

Returns an XML or JSON response with the pre-chat survey.

*Note: Posting answers for a pre-chat survey is done through [Start Chat](consumer-experience-server-chat-start-chat.html).*

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat//preSurvey?v=1&NC=true |

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
| surveyName | Requests a specific survey by name.  | alphanumeric | If the surveyName is provided, this will override all of the other parameters. |
| surveyApiId | Requests a specific survey by API ID. | alphanumeric | If the surveyName is provided, this parameter will be ignored. To retrieve the `surveyApiId`, please follow the note below this table. |
| visitorIp | This parameter can be used by the LivePerson Rules Engine to decide which survey to return. | alphanumeric (IP) | The visitor's host name is found using this IP address. If no IP address is specified, the visitor's IP  will be taken from the request's IP. |
| userAgent | This parameter can be used by the LivePerson Rules Engine to decide which survey to return.  | alphanumeric | If no user agent is specified, it will be  taken from the HTTP "User-Agent" header. |
| visitorId | The current visitor ID. | alphanumeric | This parameter can be used to associate the survey to the current visitor.|
| skill | Set a skill to the current visitor. | alphanumeric | |

<div class="important">
To retrieve the <code>surveyApiId</code>, you need to call the Engagement and Window API. The information to retrieve the <code>domain</code> name can be found <a href="/agent-domain-domain-api.html">here</a>. Make sure to set the service name as <code>acCdnDomain</code>. <br><br>Through the Engagement API, you need to call <code>GET https://{domain}/api/account/{accountId}/configuration/le-campaigns/campaigns/{campaignId}/engagements/{engagementId}/revision/{revisionId}?v=3.0</code> to get the <code>windowId</code>. <br><br>Next, through the Window API, you need to call <code>GET https://{domain}/api/account/{accountId}/configuration/engagement-window/window-confs/{windowId}</code> to get the <code>surveyPreChatId</code>. The <code>surveyPreChatId</code> is the value that needs to be passed through the <code>surveyApiId</code> parameter.
</div>

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example

```json
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
```

*Note: The examples above demonstrate the usage of question logic. Question logicId 5 will be displayed when the 'CATS' answer is selected via the drop-down box in the question with id="12786273". This behavior is set by the "showLogicId" element.*

**Elements in the Response**

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| title | For future use. | alphanumeric | |
| header | The survey's displayed header. | alphanumeric | |
| question | Contains all the question data. | | |
| mandatory | Whether this question is mandatory in the survey. | Boolean | |
| order | The order of the question in the survey. | | You should display the questions according to their order number. |
| logicId | Unique ID of this question for logic. | | See Logic below |
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
