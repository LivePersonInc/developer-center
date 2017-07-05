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

1. `public func setUserProfile(lpuser: LPUser, brandID: String)`  
2. `public func getAssignedAgent(conversationQuery: ConversationParamProtocol) -> LPUser?`  
3. `<LPMessagingSDKdelegate>  optional func LPMessagingSDKAgentDetails(agent: LPUser?)`