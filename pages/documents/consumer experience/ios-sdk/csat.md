---
title: CSAT Behavior
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Advanced Features

order: 233
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-csat-behavior.html

indicator: messaging
---

This document describes the CSAT behaviour and configurations in the Messaging SDK.
You can find all the related configurations in the resources ID table, under Survey Screen.

### Show CSAT flow

Show if:

- CSAT configured to appear according to LPConfig.defaultConfiguration.csatShowSurveyView
- Conversation has an assigned agent.
- Conversation’s CSAT wasn’t previously submitted.

### Dismiss CSAT

The CSAT view is dismissed in one of four cases:

- User pressed the submit button (answers are sent to the survey).
- User choose to skip the CSAT (skipped button is pressed).
- The CSAT is automatically dismissed if it was filled in any other device.
- If agent resumed the conversation while csat is visible - it will automatically dismissed.

<div markdown="1" class="important">
Important:

When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.

</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

### CSAT UI content

CSAT screen includes several content containers:

**Agent View (avatar and agent name)**

- Could be hidden or not using:

```swift
LPConfig.defaultConfiguration.csatAgentViewHidden
```

- Contains agent avatar:
	- If conversation has assigned agent and its image was downloaded previously using profileUrl, this image will be presented in the view.
	- If no image available, default avatar is presented. Its background and tint color can be set accordingly to agent bubble using:

```swift
LPConfig.defaultConfiguration.csatAgentAvatarBackgroundColor
LPConfig.defaultConfiguration.csatAgentAvatarIconColor
```

- Contains agent name:
	- By default it’s an empty label.
	- If conversation has assigned agent, the agent’s nickName will be used.

**Rating Question View (stars)**

- Always visible - can’t configure its visibility.
- Stars color is defined by:

```swift
LPConfig.defaultConfiguration.csatRatingButtonSelectedColor
```

- Rating question includes 'Agent’ by default in the text. If conversation has assigned agent and the agent’s nickName is not empty, this nickName will be used instead.

**Resolution Confirmation View (yes/no)**

- Could be hidden or not using:

```swift
LPConfig.defaultConfiguration.csatResolutionHidden
```

- If agentView is shown ("**csatAgentViewHidden**"), this view will be always hidden (even if "**csatResolutionHidden**" is set to true)
- All titles colors defined with:

```swift
LPConfig.defaultConfiguration.csatAllTitlesTextColor
```
