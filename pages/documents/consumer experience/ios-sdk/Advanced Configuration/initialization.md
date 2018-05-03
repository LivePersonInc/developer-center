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

1. Initialize the SDK and all of its components, SDK can be initialize with or without a Brand Id.

```swift
public func initialize(brandID: String? = nil) throws
```

{:start="2"}
2. Will show the Conversation Window, if no ContainerViewController is passed, the SDK will provide a ViewController, this is called Window Mode, if one is passed, the SDK will use it to Host the Conversation Window, this is called ViewController Mode.

```swift
public func showConversation(conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```

{:start="3"}
3. Will remove the Conversation Windown from the ViewController, if using Window mode, this will remove the ConversationViewController from the Screen, when in ViewController mode, the host ViewController needs to be dismissed.

```swift
public func removeConversation(conversationQuery: ConversationParamProtocol)
```

### Supporting functions:

1. Will get ’filter’ for the conversation screen, determining which of the conversations will be displayed in the Conversation Window

```swift
public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
```

{:start="2"}
2. Will get ’filter’ for the conversation screen, determining which of the conversations will be displayed in the Conversation Window, using the Consumer ID

```swift
public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
```

{:start="3"}
3. Will return a boolean flag, ready means that the Brand is connected and conversation can be proccessed.

```swift
public func isBrandReady(brandID: String) -> Bool
```
