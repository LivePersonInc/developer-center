---
pagename: isUrgent
redirect_from:
  - consumer-experience-ios-sdk-isurgent.html
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods
order: 80
permalink: mobile-app-messaging-sdk-for-ios-methods-isurgent.html
indicator: messaging
---

Checks if the active conversation (if existing) is marked as urgent. Otherwise returns false.

*Note: You must check that the SDK is in [ready state](mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html) before calling this method.*

`func isUrgent(_ conversationQuery: ConversationParamProtocol) -> Bool`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |