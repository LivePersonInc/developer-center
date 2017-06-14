---
title: CSAT Behavior
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Advanced Features

order: 233
permalink: consumer-experience-ios-sdk-advanced-csat.html

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

### CSAT UI content

CSAT screen includes several content containers:

**Agent View (avatar and agent name)**

- Could be hidden or not according to `LPConfig.defaultConfiguration.csatAgentViewHidden`
- Contains agent avatar:
	- If conversation has assigned agent and its image was downloaded previously using profileUrl, this image will be presented in the view.
	- If no image available, default avatar is presented. It’s background and tint color is according to agent bubble with `LPConfig.defaultConfiguration.csatAgentAvatarBackgroundColor`  and `LPConfig.defaultConfiguration.csatAgentAvatarIconColor`
- Contains agent name:
	- By default it’s an empty label.
	- If conversation has assigned agent, the agent’s nickName will be used.

**Rating Question View (stars)**

- Always visible - can’t configure its visibility. 
- Stars color is defined by `LPConfig.defaultConfiguration.csatRatingButtonSelectedColor`
- Rating question includes ‘Agent’ by default in the text. If conversation has assigned agent and the agent’s nickName is not empty, this nickName will be used instead.

**Resolution Confirmation View (yes/no)**

- Could be hidden or not according to `LPConfig.defaultConfiguration.csatResolutionHidden`
- If agentView is shown ("`csatAgentViewHidden`"), this view will be always hidden (even if "`csatResolutionHidden`" is set to true)
- All titles colors defined with `LPConfig.defaultConfiguration.csatAllTitlesTextColor`
