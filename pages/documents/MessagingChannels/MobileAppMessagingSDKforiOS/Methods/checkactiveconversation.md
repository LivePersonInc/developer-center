---
pagename: checkActiveConversation
redirect_from:
  - consumer-experience-ios-sdk-checkactiveconversation.html


categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 60
permalink: mobile-app-messaging-sdk-for-ios-methods-checkactiveconversation.html

indicator: messaging
---

Check if there is an active conversation by passing a conversation query. 

**Notes:**

* Conversation query defines a filter that fetches conversations which match certain conditions. Each query can have one active conversation at most.*
* Conversation is said to be active the moment an 'ack’ is received from the server. It may not yet have an assigned agent.*
* You may call this API only if you are sure that the SDK is in sync with the server, meaning LPMessagingSDKConnectionStateChanged was invoked and isReady is set to true.*

`func checkActiveConversation(_ conversationQuery: ConversationParamProtocol) -> Bool`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |


