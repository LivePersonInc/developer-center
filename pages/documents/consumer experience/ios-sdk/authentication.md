---
title: Authentication
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS

order: 14
permalink: consumer-experience-ios-sdk-authentication.html

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
