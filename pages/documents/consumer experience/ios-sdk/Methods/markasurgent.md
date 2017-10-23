---
title: markAsUrgent
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 70
permalink: consumer-experience-ios-sdk-markasurgent.html

indicator: messaging
---

A consumer can mark a conversation as urgent in order to request a faster response from the agent. You can call the API only if there’s an active conversation, otherwise an alert will be triggered. The conversation is marked as urgent only after an ACK is received from the server. 

`func markAsUrgent(_ conversationQuery: ConversationParamProtocol)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |