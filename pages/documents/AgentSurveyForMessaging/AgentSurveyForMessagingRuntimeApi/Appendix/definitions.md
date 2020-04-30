---
pagename: AgentSurveyContext definition
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime AgentSurveyContext definition 


order: 100
permalink: agentsurvey-runtime-api-definitions.html

indicator: messaging
---

### AgentSurveyContext definition {#agentsurveycontext-structure}

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| agentSurveyStatus | The Agent survey's status. Possible values: open, submitted, dismissed | enum |
| lastActionTimeInMillis | Timestamp of the last submit/dismiss action | Long |
| autoCloseTimestamp | Agent survey's expiration timestamp | Long | available only after the conversation is closed | 
| stateRevision | Agent survey's state revision | Long |

### AgentSurveyResponseReply definition {#agentsurveyresponse-structure}

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- | 
| id | Reply ID | Long |
| text | Reply's text | String |
| next | The id of the next question in the survey | Long |
| nextInOrder | Next question is the next in order question | Boolean | For example - question with orderId 2 followed by question with orderId 3 |

### QuestionState definition {#questionstate-structure}

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