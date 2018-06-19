---
title: Reconnect
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Methods

order: 40
permalink: consumer-experience-ios-sdk-reconnect.html

indicator: messaging
---

When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](consumer-experience-ios-sdk-showconversation.html){:target="_blank"} API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html){:target="_blank"}). To reconnect with a new token, use the following 'reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the converstion with its latest updates.

`func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' paramater only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
