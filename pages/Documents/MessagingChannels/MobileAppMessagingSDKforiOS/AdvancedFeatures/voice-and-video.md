---
pagename: Voice and Video
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-voice-and-video.html
indicator: messaging
---

### Introduction

Voice and Video integration allows brand agents to communicate with consumers via voice or video calls.
<div style="width: 100%; position: relative;">
    <img src="../../../../img/iosSDK/in_app_sdk_ios_voice_call.png" alt="Voice call example screen" style="float: left; width: 15%;height: auto; margin-right: 1em">
    <img src="../../../../img/iosSDK/in_app_sdk_ios_video_call.png" alt="Video call example screen" style="width: 15%;height: auto;">
</div>

{:.important}
Voice & Video capabilities are available only on iOS SDK 6.3.0 and above

KB article: [Voice & Video Overview](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-cobrowse-for-messaging.html)

To enable the feature on your Conversational Cloud account please review the KB article

### How to enable:

```swift
    LPConfig.defaultConfiguration.enableVoiceVideoCall = true
```

{:.notice}
Known limitations: Due some compatibility issues with WebRTC some iOS 12.X device might not be able to connect voice or video call. 

### Branding and Configurations

#### enableVoiceVideoCall
Enables or disables the ability for an Agent to start a voice or video call.

- **Type:** bool
- **Default value:** false

#### voiceCallImageIcon
Defines default Image icon for Voice Invite.

- **Type:** UIImage
- **Default value:** nil

#### videoCallImageIcon
Defines default Image icon for Video Invite.

- **Type:** UIImage
- **Default value:** nil

#### voiceVideoAcceptCallButtonImage
Defines default background image for Decline button on Voice & Video Invite

- **Type:** UIImage
- **Default value:** nil

#### voiceVideoDeclineCallButtonImage
Defines default background image for Decline button on Voice & Video Invite

- **Type:** UIImage
- **Default value:** nil

#### voiceVideoEndCallButtonImage
Defines default background image for End button on Voice & Video Invite

- **Type:** UIImage
- **Default value:** nil
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call
- **Notes:** To enable this image voiceVideoEndCallButtonType should be set to hangup`

#### voiceVideoJoinCallButtonImage
Defines default background image for Join button on Voice & Video Invite

- **Type:** UIImage
- **Default value:** nil
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call

---

#### voiceVideoInviteIconTint
Defines default icon tint color on Voice & Video Invite

- **Type:** UIColor
- **Default value:** gray

#### voiceVideoAcceptButtonTint
Defines default tint color for Accept/Join Button on Voice & Video Invite

- **Type:** UIColor
- **Default value:** white
- **Note:** This property controls both the Accept and Join call Button

#### voiceVideoDeclineButtonTint
Defines default tint color for Decline/End Button on Voice & Video Invite

- **Type:** UIColor
- **Default value:** red
- **Note:** This property controls both the Decline and End call Button

#### voiceVideoAcceptButtonBackgroundColor
Defines default background color for Accept/Join Button on Voice & Video Invite

- **Type:** UIColor
- **Default value:** green
- **Note:** This property controls both the Accept and Join call Button

#### voiceVideoDeclineButtonBackgroundColor
Defines default background color for Decline/End Button on Voice & Video Invite

- **Type:** UIColor
- **Default value:** clear
- **Note:** This property controls both the Decline and End call Button

#### voiceVideoInvitationIconRenderingMode
Defines default rendering mode for Voice or Video Invitation Icon

- **Type:** UIImage.RenderingMode
- **Default value:** alwaysTemplate

#### voiceVideoAcceptButtonRenderingMode
Defines default rendering mode for Accept Button on Voice & Video Invitation

- **Type:** UIImage.RenderingMode
- **Default value:** alwaysTemplate

#### voiceVideoDeclineButtonRenderingMode
Defines default rendering mode for Decline Button on Voice & Video Invitation

- **Type:** UIImage.RenderingMode
- **Default value:** alwaysTemplate

#### voiceVideoEndCallButtonType
Defines which icon to display on Join Button for Voice & Video Invitation

- **Type:** VoiceVideoEndCallButtonType
- **Default value:** close
- **Preconditions:** This type is only shown on the Voice & Video Invite when Consumer has an active Call

#### voiceVideoButtonsInnerPadding
Defines inner padding between Accept & Decline Buttons on Voice & Video Invitation

- **Type:** Double
- **Default value:** 8.0

#### voiceVideoButtonsOuterPadding
Defines outer padding between Accept & Decline Buttons on Voice & Video Invitation

- **Type:** Double
- **Default value:** 24.0

#### voiceVideoInvitationBubbleBackgroundColor
Defines background color for Voice & Video Bubble

- **Type:** UIColor
- **Default value:** light gray

#### voiceVideoInvitationBubbleBorderColor
Defines border color for Voice & Video Invitation Bubble

- **Type:** UIColor
- **Default value:** clear

#### voiceVideoInvitationBubbleBorderWidth
Defines border width for Voice & Video Invitation Bubble

- **Type:** Double
- **Default value:** 0.0


---


#### voiceVideoNavigationBackgroundColor
Defines background color of Navigation & Tab Bar for Voice & Video SFSafariViewController

- **Type:** UIColor
- **Default value:** gray

#### voiceVideoNavigationTintColor
Defines tint color for icons on Navigation & Tab Bar Icons for Voice & Video SFSafariViewController

- **Type:** UIColor
- **Default value:** black
