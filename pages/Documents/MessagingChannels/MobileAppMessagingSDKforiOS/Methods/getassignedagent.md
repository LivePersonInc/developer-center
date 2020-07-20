---
pagename: getAssignedAgent
redirect_from:
  - consumer-experience-ios-sdk-getassignedagent.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 170
permalink: mobile-app-messaging-sdk-for-ios-methods-getassignedagent.html

indicator: messaging
---

Get assigned agent details of the last or current conversation - depending on retrieveAssignedAgentFromLastClosedConversation in the LPConfig defaultConfiguration. 

You must check that the SDK is ready before calling this method.

`func getAssignedAgent(_ conversationQuery: ConversationParamProtocol) -> LPUser?`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |