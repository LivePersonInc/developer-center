---
pagename: Reconnect
redirect_from:
  - consumer-experience-ios-sdk-reconnectdeprecated.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 45
permalink: mobile-app-messaging-sdk-for-ios-methods-reconnect.html

indicator: messaging
---
*This method was deprecated since SDK version 2.7.0. Use [reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams](consumer-experience-ios-sdk-reconnect.html) instead*

When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](consumer-experience-ios-sdk-showconversation.html) API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks.html)). To reconnect with a new token, use the following 'reconnect’ API and pass the new token.

`func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |
