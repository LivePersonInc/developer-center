---
pagename: Appendix
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API 


order: 100
permalink: agent-survey-for-messaging-runtime-api-appendix.html

indicator: messaging
---

This section contains API details that are common to every API’s resource and action.

### Request Headers

| Header | Description |
| :-------- | :------------ |
| Authorization | Contains token string to allow request authentication and authorization. |

### Response Headers

| Header | Description |
| :-------- | :------------ |
| x-lp-state-rev|  state revision - used in POST/PUT/DELETE requests to avoid data discrepancy |  

**Path Parameters**

| Parameter | Description | Type |
| :----------- | :------------  | :----- |
| accountId | LP site ID | String |

**Query Parameters**

| Parameter | Description | Notes | Required |
| :------------ | :------------ | :------- | :--- |
| conv  | conversation id | String | Required | 
| skill | skill id (-1 in case of unassigned )| long | Required |
| v | API version number | String | Required |

### Entity Structure

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| id | Account Config object’s unique ID | Long |   
| name | Agent survey’s unique name | String |  
| description | The Agent survey’s description | String | 
| root | The Agent Survey's first question | long | 
| actualTimeInMinutes | Timeout of the Agent survey - defined in skill or in the survey configuration as fallback | Integer |
| questions | list of Agent survey questions | List of AgentSurveyResponseQuestions |
| agentSurveyContext | The status, last action time, survey expiration time and the survey revision | Object - AgentSurveyContext |

### AgentSurveyResponseQuestion definition

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| id | Question unique ID | Long | 
| orderId | Ordered number, represents the location of the question in the survey |
| text | Question's text | String |
| next | The id of the next question in the survey | Long | should be null in case the question contains replies | 
| nextInOrder| Next question is the next in order question | Boolean | For example - question with orderId 2 followed by question with orderId 3 |
| required | Is the question is mandatory | boolean | 
| category | Question's category. Possible values: free_text, radio_button, checkbox, dropdown, number, date | enum |
| questionDefinition | Question's definition. Possible values: regular_question, conversation_topic, conversation_outcome, engagement_attributes | enum | Submitting a question of type engagement_attributes will generate SDE event| 
| maxCharacters | Characters limit to an answer | Integer |
| replies | List of replies associated with this question | Object - AgentSurveyResponseReply  |
| containsLogic | True if at least two answers directs the agent to different questions in the survey | Boolean |
| engagementAttribute | Engagement attributes (SDEs) the agent can submit on behalf of the consumer | Object - EngagementAttribute  | 
| question State | The state of the question | Object - QuestionState |

### Entity Example

```json
    {
        "id": 3538577310,
        "name": "skillsurvey",
        "root": 1,
        "questions": [
            {
                "id": 1,
                "orderId": 1,
                "text": "questionText",
                "next": 3,
                "nextInOrder": false,
                "required": true,
                "category": "date",
                "questionDefinition": "regular_question",
                "containsLogic": false
            },
     
            {
                "id": 4,
                "orderId": 4,
                "text": "question_text",
                "next": 5,
                "nextInOrder": false,
                "required": true,
                "category": "free_text",
                "questionDefinition": "engagement_attributes",
                "maxCharacters": 1024,
                "containsLogic": false,
                "engagementAttribute": {
                    "type": "service_activity",
                    "attributes": [
                        "topic",
                        "status"
                    ]
                }
            },
            {
                "id": 8,
                "orderId": 8,
                "text": "question_text",
                "next": 9,
                "nextInOrder": false,
                "required": true,
                "category": "checkbox",
                "questionDefinition": "regular_question",
                "replies": [
                    {
                        "id": 11,
                        "text": "questionText"
                    },
                    {
                        "id": 12,
                        "text": "questionText"
                    }
                ],
                "containsLogic": false
            }
        ],
        "agentSurveyContext": {
            "agentSurveyStatus": "open",
            "lastActionTimeInMillis": 0,
            "autoCloseTimestamp": 0,
            "stateRevision": 1564031641145901056
        }
    }
```


### AgentSurveyContext definition

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| agentSurveyStatus | The Agent survey's status. Possible values: open, submitted, dismissed | enum |
| lastActionTimeInMillis | Timestamp of the last submit/dismiss action | Long |
| autoCloseTimestamp | Agent survey's expiration timestamp | Long | available only after the conversation is closed | 
| stateRevision | Agent survey's state revision | Long |

### AgentSurveyResponseReply definition

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| id | Reply ID | Long |
| text | Reply's text | String |
| next | The id of the next question in the survey | Long |
| nextInOrder | Next question is the next in order question | Boolean | For example - question with orderId 2 followed by question with orderId 3 |

### QuestionState definition

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| id | Question ID | Long |
| questionStatus | Question's status. Possible values: show, answer | enum |
| replyIds | The reply IDs the agent chose | list of Long values | for questions of type radio_button, checkbox, dropdown |
| freeTextReply | Answer to a free text question | String | for questions of type free_text, number, date |
| engAttribute | Answer to a question of type engagement attribute | Object |

### EngagementAttribute definition  {#engagementAttribute-structure}

| Attribute | Description | Type/Value | 
| :--------- | :-------------- | :----------- |  
| type | The type of the SDE. Possible values: purchase, lead, service | enum |
| attributes | list of values can be sent. Possible values: order_total, currency, order_id, topic, value, lead_id, status, category, service_id | enum |