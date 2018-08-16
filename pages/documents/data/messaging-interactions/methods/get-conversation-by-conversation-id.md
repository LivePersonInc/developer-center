---
title: Get conversation by conversation ID
redirect_from:
  - data-messaging-interactions-get-conversation-by-conversation-id.html
level1: Documents
level2: Data
level3: Messaging Interactions API
level4: Methods
order: 20
permalink: messaging-interactions-api-methods-get-conversation-by-conversation-id.html

indicator: messaging
---

This method retrieves a conversation according to the given conversation ID.

### Request

Method     | URL
--------   | ---
POST       | https://[{domain}](/agent-domain-domain-api.html)/messaging_history/api/account/{accountID}/conversations/conversation/search

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

Required:

| Name            | Description                        | Type/Value |
| :---------      | :---------------                   | :----------|
| conversationId | ID of the conversation to search.    | string|

### Response

See Response in the  [Conversations](data-messaging-interactions-conversations.html){:target="_blank"} method.
