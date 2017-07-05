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

1. `public func reconnect(conversationQuery: ConversationParamProtocol, authenticationCode: String) `  
2. `<LPMessagingSDKdelegate> func LPMessagingSDKAuthenticationFailed(error: NSError)`
3. `<LPMessagingSDKdelegate> func LPMessagingSDKTokenExpired(brandID: String)`