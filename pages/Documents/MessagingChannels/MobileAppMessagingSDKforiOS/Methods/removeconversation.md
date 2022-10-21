---
pagename: removeConversation
redirect_from:
  - consumer-experience-ios-sdk-removeconversation.html
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods
order: 30
permalink: mobile-app-messaging-sdk-for-ios-methods-removeconversation.html
indicator: messaging
---

When navigating out of the conversation screen, remove the view controller from its container. This is done by calling remove conversation API. The method will remove the SDK UI and clean the service or network operation that was running.

`func removeConversation(_ conversationQuery: ConversationParamProtocol)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |