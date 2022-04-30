---
pagename: Get Conversation by Conversation ID
redirect_from:
  - data-messaging-interactions-get-conversation-by-conversation-id.html
sitesection: Documents
categoryname: "Reporting"
documentname: Messaging Interactions API
subfoldername: Methods
order: 20
permalink: messaging-interactions-api-methods-get-conversation-by-conversation-id.html

indicator: messaging
---

This method retrieves a conversation according to the given conversation ID.

### Request

Method     | URL
--------   | ---
POST       | https://[{domain}](/agent-domain-domain-api.html)/messaging_history/api/account/{accountID}/conversations/conversation/search

**URL Parameters**

|Name   | Description  | Type/Value | Required | Notes
|:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
|source | Used to describe the originator of the call. The source name should be unique for every project/process within the organization. | String    | Required | The source name should not exceed 20 characters. Please follow the format of ProjectName+AppName+UseCase. Example: LP_AgentUI_History|  

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.


| Name            | Description                | Type/Value | Required |  Notes |
| :---------      | :---------------           | :----------| :--------|  :-----|
| conversationId | ID of the conversation to search    | string | Optional (conditional) | Optional if 'conversationIds' was provided
| conversationIds | List of conversation Ids (Limited to 100 conversations) | string | Optional (conditional)  | Optional if 'conversationId' was provided  
| contentToRetrieve | List of content types that should be retrieved | string | Optional | Valid values: campaign, messageRecords, agentParticipants, agentParticipantsLeave, agentParticipantsActive, consumerParticipants, transfers, interactions, messageScores, messageStatuses, conversationSurveys, coBrowseSessions, summary, sdes, unAuthSdes, monitoring, dialogs, responseTime, skillChanges, intents, uniqueIntents, latestAgentSurvey, previouslySubmittedAgentSurveys | 

### Response

See Response in the  [Conversations](messaging-interactions-api-methods-conversations.html#response) method.
