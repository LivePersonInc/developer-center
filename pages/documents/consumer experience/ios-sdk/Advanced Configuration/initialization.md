---
title: Initialization
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Configuration

order: 3
permalink: consumer-experience-ios-sdk-initialization.html

indicator: messaging
---

In order to get started and initialize the Mobile App Messaging SDK, utilize the following functions:

1. Initialize the SDK and all of its components, SDK can be initialized with or without a Brand Id.

```swift
public func initialize(brandID: String? = nil) throws
```

{:start="2"}
2. The ContainerViewController paramater will show the Conversation Window. If no ContainerViewController is passed, the SDK will provide a ViewController. This is called Window Mode. If ContainerViewController is passed, the SDK will use it to Host the Conversation Window. This is called ViewController Mode.

```swift
public func showConversation(conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```

{:start="3"}
3. The below will remove the Conversation Windown from the ViewController. If using Window mode, this will remove the ConversationViewController from the Screen. When in ViewController mode, the host ViewController needs to be dismissed.

```swift
public func removeConversation(conversationQuery: ConversationParamProtocol)
```

<div class="important">
Important:
</div>
- When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, example [here](consumer-experience-ios-sdk-messaging-methods.html#removeconversation)

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
