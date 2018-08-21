---
pagename: Conversations Lifecycle
redirect_from:
  - consumer-experience-ios-sdk-lifecycle.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 5
permalink: mobile-app-messaging-sdk-for-ios-configuration-conversations-lifecycle.html

indicator: messaging
---

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.  

### Methods

**Note: for the complete information about the methods, refer to this [link](consumer-experience-ios-sdk-messaging-methods.html)**

1. This method checks for an active conversation, **True** - there is an active conversation. **False** - there is no active conversation

```swift
public func checkActiveConversation(conversationQuery: ConversationParamProtocol) -> Bool

{:start="2"}
2. This method marks the current conversation as Urgent.

```swift
public func markAsUrgent(conversationQuery: ConversationParamProtocol)
```

{:start="3"}
3. This method checks if the current conversation is marked as Urgent.

```swift
public func isUrgent(conversationQuery: ConversationParamProtocol) -> Bool
```

{:start="4"}
4. This method marks an urgent conversation as normal.

```swift
public func dismissUrgent(conversationQuery: ConversationParamProtocol)
```

{:start="5"}
5. This method resolves the current conversation.

```swift
public func resolveConversation(conversationQuery: ConversationParamProtocol)
```

{:start="6"}
6. This method clears the conversation history.

```swift
public func clearHistory(conversationQuery: ConversationParamProtocol) throws
```

_**Note: clear history is allowed only if there is no open/active conversation**_

{:start="7"}
7. This method will logout Current User from LPMessagingSDK

```swift
public func logout()
```

{:start="8"}
8. This method is typically used to stop and clear all the metadata of the SDK

```swift
public func destruct()
```

### Delegates

1. Will be triggered when the customer satisfaction survey is dismissed after the user has submitted the survey

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)
```

{:start="2"}
2. Will be triggered after the customer satisfaction page is submitted with a score.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)
```

{:start="3"}
3. Will be triggered when a new conversation has started, from the agent or from the consumer side.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKConversationStarted(conversationID: String?)
```

{:start="4"}
4. Will be triggered when a conversation has ended, from the agent or from the consumer side.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)
```

{:start="5"}
5. Will be triggered when the conversation view controller removed from its container view controller or window.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKConversationViewControllerDidDismiss()
```

{:start="6"}
6. Will be triggered each time the agent typing state changes.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)
```
