---
title: showConversation
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Methods

order: 20
permalink: consumer-experience-ios-sdk-showconversation.html

indicator: messaging
---

This method is used to open the conversation screen.

`func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationViewParams | Object type: LPConversationViewParams. Represents an object to determine on conversation mode, filter and container. Such as Container or Window or if ViewOnly. | For object details see [LPConversationViewParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' paramater only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
