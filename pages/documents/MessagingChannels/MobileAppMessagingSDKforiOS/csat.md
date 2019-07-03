---
pagename: CSAT Behavior
redirect_from:
  - consumer-experience-ios-sdk-advanced-csat.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 233
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-csat-behavior.html

indicator: messaging
---

You can find all the related configurations in the resources ID table, under Survey Screen.

<div style="float: left; width: 50%;height: 175px;">
<p><b>Show CSAT if:</b></p>
   <ul>
      <li>CSAT configured to appear according to: <br><code>LPConfig.defaultConfiguration.csatShowSurveyView</code></li>
      <li>Conversation has an assigned agent.</li>
      <li>Conversation’s CSAT wasn’t previously submitted.</li>
   </ul>
</div>

<div style="float: right; width: 50%;">
<p><b>Dismiss CSAT if:</b></p>
   <ul>
      <li>User presses the submit button (answers get sent to the survey).</li>
      <li>User chooses to skip the CSAT (skipped button pressed).</li>
      <li>User fills in the CSAT details on another device.</li>
      <li>If the CSAT is visible and the agent resumed the conversation.</li>
   </ul>
</div>

<div style="width: 85%;padding: 5px;">
&nbsp;
</div>


---   

The CSAT screen includes several content containers:

* [csatAgentViewHidden (avatar and agent name)](#csatagentviewhidden-avatar-and-agent-name)

* [csatRatingButtonSelectedColor (stars)](#csatratingbuttonselectedcolor-stars)

* [csatResolutionHidden (yes/no)](#csatresolutionhidden-yesno)


### Custom View Controller Mode requirements
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.


```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.



### csatAgentViewHidden (avatar and agent name)

You can either hide or show the agent avatar.

```swift
LPConfig.defaultConfiguration.csatAgentViewHidden
```

- If the conversation has an assigned agent and its image was downloaded previously using profileUrl, this image shows in the view.

- If no image available, default avatar displays. Its background and tint color can be set accordingly to agent bubble using:

```swift
LPConfig.defaultConfiguration.csatAgentAvatarBackgroundColor
LPConfig.defaultConfiguration.csatAgentAvatarIconColor
```

- Contains agent name:
	- By default it’s an empty label.
	- If conversation has assigned agent, the agent’s nickName will be used.

### csatRatingButtonSelectedColor (stars)

- Always visible - can’t configure its visibility.
- Stars color is defined by:

```swift
LPConfig.defaultConfiguration.csatRatingButtonSelectedColor
```

- Rating question includes 'Agent’ by default in the text. If conversation has assigned agent and the agent’s nickName is not empty, this nickName will be used instead.

### csatResolutionHidden (yes/no)

- Could be hidden or not using:

```swift
LPConfig.defaultConfiguration.csatResolutionHidden
```

- If agentView is shown ("**csatAgentViewHidden**"), this view will be always hidden (even if "**csatResolutionHidden**" is set to true)
- All titles colors defined with:

```swift
LPConfig.defaultConfiguration.csatAllTitlesTextColor
```
