---
title: Conversations Lifecycle
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Configuration

order: 5
permalink: consumer-experience-ios-sdk-lifecycle.html

---

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.  

1. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKConversationStarted(conversationID: String?)`
2. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKConversationEnded(conversationID: String?)`
3. `func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)`
4. `public func checkActiveConversation(conversationQuery: ConversationParamProtocol) -> Bool  `
5. `public func markAsUrgent(conversationQuery: ConversationParamProtocol)  `
6. `public func isUrgent(conversationQuery: ConversationParamProtocol) -> Bool  `
7. `public func dismissUrgent(conversationQuery: ConversationParamProtocol)  `
8. `public func resolveConversation(conversationQuery: ConversationParamProtocol)  `
9. `<LPMessagingSDKdelegate>  optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)`
10. `<LPMessagingSDKdelegate>  optional func LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)`
11. `public func clearHistory(conversationQuery: ConversationParamProtocol) throws  `
12. `public func logout()`
13. `public func destruct()`