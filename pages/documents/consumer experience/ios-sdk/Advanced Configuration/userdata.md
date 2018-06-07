---
title: User Data
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Configuration

order: 7
permalink: consumer-experience-ios-sdk-user-data.html

indicator: messaging
---

Pass and display consumer information to agents, and agent information to consumers.

_**Note: for information about the LPUser object, click [here](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser)**_

1. Will set user profile on LiveEngage

```swift
public func setUserProfile(lpuser: LPUser, brandID: String)
```

{:start="2"}
2. Will return Previously Assigned Agent, if any

```swift
public func getAssignedAgent(conversationQuery: ConversationParamProtocol) -> LPUser?
```

{:start="3"}
3. Will be triggered each time the SDK receives info about the agent from the Server.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKAgentDetails(agent: LPUser?)
```
