---
title: getAssignedAgent
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 170
permalink: consumer-experience-ios-sdk-getassignedagent.html

indicator: messaging
---

Get assigned agent details of the last or current conversation - depending on retrieveAssignedAgentFromLastClosedConversation in the LPConfig defaultConfiguration. 

You must check that the SDK is ready before calling this method.

`func getAssignedAgent(_ conversationQuery: ConversationParamProtocol) -> LPUser?`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |