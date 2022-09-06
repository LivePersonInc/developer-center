---
pagename: resolveConversation
redirect_from:
  - consumer-experience-ios-sdk-resolveconversation.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 100
permalink: mobile-app-messaging-sdk-for-ios-methods-resolveconversation.html

indicator: messaging
---

This API enables a conversation to be resolved. The API will request the server to mark the active conversation as resolved. If there is no active conversation, an alert will be displayed. 

`func resolveConversation(_ conversation: Conversation, completion: (() -> Void)? = {()})`

`public class func resolveConversationForConversationQuery(_ conversationQuery: ConversationParamProtocol, completion: (() -> Void)? = {()})`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |