---
pagename: showConversation
redirect_from:
  - consumer-experience-ios-sdk-showconversation.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 20
permalink: mobile-app-messaging-sdk-for-ios-methods-showconversation.html

indicator: messaging
---

This method is used to open the conversation screen.

`func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationViewParams | Object type: LPConversationViewParams. Represents an object to determine on conversation mode, filter and container. Such as Container or Window or if ViewOnly. | For object details see [LPConversationViewParams](consumer-experience-ios-sdk-interfacedefinitions.html). |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' paramater only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html). |
