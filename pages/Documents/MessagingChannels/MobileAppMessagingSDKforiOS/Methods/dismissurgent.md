---
pagename: dismissUrgent
redirect_from:
  - consumer-experience-ios-sdk-dismissurgent.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 90
permalink: mobile-app-messaging-sdk-for-ios-methods-dismissurgent.html

indicator: messaging
---

This API is used to cancel the [markAsUrgent API](consumer-experience-ios-sdk-markasurgent.html). It will reset the SLA for the agent response back to default.  This API can be called only for open conversations.

`func dismissUrgent(_ conversationQuery: ConversationParamProtocol`)

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

