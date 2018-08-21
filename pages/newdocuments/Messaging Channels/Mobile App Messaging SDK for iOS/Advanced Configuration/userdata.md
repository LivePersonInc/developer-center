---
pagename: User Data
redirect_from:
  - consumer-experience-ios-sdk-user-data.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 7
permalink: mobile-app-messaging-sdk-for-ios-configuration-user-data.html

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
