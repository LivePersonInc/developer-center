---
pagename: Get Conversations by Consumer ID
redirect_from:
  - data-messaging-interactions-get-conversations-by-consumer-id.html
sitesection: Documents
categoryname: "Historical Data"
documentname: Messaging Interactions API
subfoldername: Methods
order: 30  
permalink: messaging-interactions-api-methods-get-conversations-by-consumer-id.html

indicator: messaging
---

This method retrieves a list of conversations that the consumer participated in.

### Request

Method     | URL
--------   | ---
POST       | https://[{domain}](/agent-domain-domain-api.html)/messaging_history/api/account/{accountID}/conversations/consumer/search

**URL Parameters**

Name| Description  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
|source | Used to describe the originator of the call. The source name should be unique for every project/process within the organization. | String    | Optional. Will be required from March 2021 | The source name should not exceed 20 characters. Please follow the format of ProjectName+AppName+UseCase. Example: LP_AgentUI_History|  


**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

| Name            | Description                        | Type/Value | Required | Notes |
| :---------      | :---------------                   | :----------| :------- |:--- |
| consumer | ID of the consumer to search.| string | Required |the consumerId is the same as the participantId in the consumerParticipants section (it is an LP unique identification of the consumer)|
| status | Latest status of the conversation. | Array | Required | Valid values: "OPEN", " or "CLOSE" |
|contentToRetrieve | List of content types that should be retrieved | alphanumeric | Optional | Valid values: campaign, messageRecords, agentParticipants, agentParticipantsLeave, agentParticipantsActive, consumerParticipants, transfers, interactions, messageScores, messageStatuses, conversationSurveys, coBrowseSessions, summary, sdes, unAuthSdes, monitoring, responseTime |

### Response

See Response in the [Conversations](messaging-interactions-api-methods-conversations.html#response) method.
