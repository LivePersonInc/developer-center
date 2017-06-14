---
title: Initialization
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Configuration

order: 3
permalink: consumer-experience-ios-sdk-initialization.html

indicator: messaging
---

In order to get started and initialize the In-App Messaging SDK, utilize the following functions:

  1. `public func initialize(brandID: String? = nil) throws`
  2. `public func showConversation(conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil) `
  3. `public func removeConversation(conversationQuery: ConversationParamProtocol)  `
  4. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKConnectionStateChanged(isReady: Bool, brandID: String)`
  5. `<LPMessagingSDKdelegate>   func LPMessagingSDKError(error: NSError)`
  6. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKHasConnectionError(error: String?)`

### Supporting functions:
  1. `public func getConversationBrandQuery(brandID: String) -> ConversationParamProtocol  `
  2. `public func getConversationBrandAndSkillQuery(brandID: String, skillID: String) -> ConversationParamProtocol ` 
  3. `public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol  `
  4. `public func isBrandReady(brandID: String) -> Bool  `