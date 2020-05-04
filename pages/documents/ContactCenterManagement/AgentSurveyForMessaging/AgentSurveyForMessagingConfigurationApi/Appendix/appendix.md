---
pagename: Appendix
redirect_from:
  - administration-agentsurvey-config-api-appendix.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API

permalink: agent-survey-for-messaging-configuration-api-appendix.html
indicator: messaging
---

This section contains API details that are common to every API’s resource, method and action.

### Request Headers

 |Header | Description | Notes|
 |:------- | :-------------- | :--- |
 | Authorization | Contains token string to allow request authentication and authorization.  |
 | If-Match | This parameter allows you to specify a version of the data object to retrieve. If this parameter is not specified, the latest version of the data object is retrieved.. | Allows optimization of backend, networking and client resource utilization. |

### Response Headers

|Header | Description | Notes|
|:-------  | :----- | :--- |
| ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specific version using this parameter's value..

### Query Parameters

| Name   | Description   | Type   | Required |Notes    |
|--------|---------------|--------|----------|---------|
| v   | API version        | Double  | Required   |
| select  | Dynamic selection of the response fields. | YOGA 'gdata' dialect.  | Optional | Validation error: 400 Non-existing field: no error, blank in response. Supported fields: any in response body       |


**Path Parameters**

 |Parameter | Description|  Type  |Notes |
 |:----------|  :-------------- | :-------------- | :--- |
 | accountId |  LP site ID | string  |

**Entity Structure**

 | Attribute | Description | Type/Value | Notes |
 | :--------- | :-------------- | :----------- | :--- | 
 | name | Agent survey’s unique name| String |   
 | description | Survey's description | String |
 | root | The first question in the survey | String |  
 | isDefault | is this the default survey | boolean | 
 | defaultTimeoutInMinutes | default timeout of the survey | long | Timeout defined on skill level, overrides this default timeout |
 | deleted | Whether the item is deleted or not | boolean |
 | enabled | Whether the item is enabled or not| boolean |
 | questions | Array of Agent survey questions | Array or questions |


**Entity Example**

 ```json
{
    "name": "survey_name",
    "description": "survey description",
    "root": 11,
    "isDefault": true,
    "defaultTimeoutInMinutes": 123, 
    "deleted": false,
    "enabled": true,
    "questions": [
    {
      "id": 11,
      "orderId": 1,
      "text": "questionText",
      "required": true,
      "category": "date",
      "questionDefinition": "regular_question",
      "next": 12
    },
    {
      "id": 12,
      "orderId": 2,
      "text": "questionText",
      "required": true,
      "category": "dropdown",
      "questionDefinition": "regular_question",
      "replies": [
        {
          "id": 13,
          "text": "questionText"
        }
      ]
    }
  ]
}
 ```

**Question definition**

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- |  
| id | Question unique ID | Long | 
| orderId |  Ordered number, represents the location of the question in the survey |
| text | Question's text | String |
| next | ID of the next question in the survey | Long | should be null in case the question contains replies |
| nextInOrder | True if the next question is in order | Boolean | For example - question with orderId 2 followed by question with orderId 3 |
| required | Is the question is mandatory | boolean |
| category | Question's category. Possible values: free_text, radio_button, checkbox, dropdown, number, date | enum |
| questionDefinition | Question's definition. Possible values: regular_question, conversation_topic, conversation_outcome, engagement_attributes | enum |
| maxCharacters |  Characters limit to an answer | Integer |
| engagementAttribute | Engagement attributes (SDEs) the agent can submit on behalf of the consumer | Object - [EngagementAttribute](/agent-survey-for-messaging-runtime-api-appendix.html#engagementAttribute-structure) | Submitting an engagement attribute question will trigger PurchaseEvent/LeadEvent/ServiceActivity event - based on the engagement attribute's type.
| replies | Array of replies associated with this question | Array or replies |

**Reply definition**

| Attribute | Description | Type/Value | Notes |
| :--------- | :-------------- | :----------- | :--- |  
| id | Answer unique ID | Long | 
| text | Answer's text | String |
| next | ID of the next question in the survey that the agent will be redirected to when he choose this answer | Long |
| nextInOrder|  True if the next question this answer redirects to, is in order | Boolean |
