---
pagename: Authentication
redirect_from:
  - consumer-experience-ios-sdk-authentication.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

order: 14
permalink: mobile-app-messaging-sdk-for-ios-authentication.html

indicator: messaging
---
For users of OAuth 2.0 for customer authentication, the following functions apply:


### Methods

Reconnects the conversation’s connection for conversation query:

   ```swift
   public func reconnect(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams)
   ```

### Delegates

1. Triggered when authentication process fails:

   ```swift
   <LPMessagingSDKdelegate> func LPMessagingSDKAuthenticationFailed(error: NSError)
   ```

2. Triggered when the token which used for authentication is expired:

   ```swift
   <LPMessagingSDKdelegate> func LPMessagingSDKTokenExpired(brandID: String)
   ```
