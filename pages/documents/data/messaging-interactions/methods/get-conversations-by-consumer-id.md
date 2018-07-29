---
title: Get Conversations by Consumer ID
redirect_from:
  - data-messaging-interactions-get-conversations-by-consumer-id.html
level1: Documents
level2: Data
level3: Messaging Interactions API
level4: Methods
order: 30  
permalink: messaging-interactions-api-methods-get-conversations-by-consumer-id.html

indicator: messaging
---

This method retrieves a list of conversations that the consumer participated in.

### Request

Method     | URL
--------   | ---
POST       | https://{domain}/messaging_history/api/account/{accountID}/conversations/consumer/search

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

| Name            | Description                        | Type/Value | Required | Notes |
| :---------      | :---------------                   | :----------| :------- |:--- |
| consumer | ID of the consumer to search.| string | Required |the consumerId is the same as the participantId in the consumerParticipants section (it is an LP unique identification of the consumer)|
| status | Latest status of the conversation. | Array | Required | Valid values: "OPEN", " or "CLOSE" |
|contentToRetrieve | List of content types that should be retrieved | alphanumeric | Optional | Valid values: campaign, messageRecords, agentParticipants, agentParticipantsLeave, agentParticipantsActive, consumerParticipants, transfers, interactions, messageScores, messageStatuses, conversationSurveys, coBrowseSessions, summary, sdes, unAuthSdes, monitoring, responseTime |

### Response

See Response in the [Conversations](data-messaging-interactions-conversations.html){:target="_blank"} method.
