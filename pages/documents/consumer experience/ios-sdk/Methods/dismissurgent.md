---
title: dismissUrgent
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 90
permalink: consumer-experience-ios-sdk-dismissurgent.html

indicator: chat messaging
---

This API is used to cancel the [markAsUrgent API](consumer-experience-ios-sdk-markasurgent.html){:target="_blank"}. It will reset the SLA for the agent response back to default.  This API can be called only for open conversations.

`func dismissUrgent(_ conversationQuery: ConversationParamProtocol`)

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

