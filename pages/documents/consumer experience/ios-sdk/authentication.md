---
title: Authentication
redirect_from:
  - consumer-experience-ios-sdk-authentication.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS

order: 14
permalink: mobile-app-messaging-sdk-for-ios-authentication.html

indicator: messaging
---
For users of OAuth 2.0 for customer authentication, the following functions apply:


### Methods

1. This method reconnects the conversation’s connection for conversation query.

```swift
public func reconnect(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams)
```

### Delegates

1. Will be triggered when authentication process fails

```swift
<LPMessagingSDKdelegate> func LPMessagingSDKAuthenticationFailed(error: NSError)
```

{:start="2"}
2. Will be triggered when the token which used for authentication is expired

```swift
<LPMessagingSDKdelegate> func LPMessagingSDKTokenExpired(brandID: String)
```
