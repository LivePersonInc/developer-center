---
title: isUrgent
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 80
permalink: consumer-experience-ios-sdk-isurgent.html

indicator: messaging
---

Checks if the active conversation (if existing) is marked as urgent. Otherwise returns false. 

*Note: You must check that the SDK is in [ready state](consumer-experience-ios-sdk-advanced-configurations.html) before calling this method.*

`func isUrgent(_ conversationQuery: ConversationParamProtocol) -> Bool`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

