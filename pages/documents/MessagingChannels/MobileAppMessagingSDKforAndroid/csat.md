---
pagename: CSAT Behavior
redirect_from:
  - android-csat.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features

order: 290
permalink: mobile-app-messaging-sdk-for-android-advanced-features-csat-behavior.html

indicator: messaging
---


You can find all the related configurations in the resources ID table, under Survey Screen.

Show CSAT if:

- CSAT configured to appear according to:
   <bool name="show_feedback">
- Conversation has an assigned agent.
- Conversation’s CSAT wasn’t previously submitted.

Dismiss CSAT if:

- User presses the submit button (answers get sent to the survey).
- User chooses to skip the CSAT (skipped button pressed).
- User fills in the CSAT details on another device.
- If the CSAT is visible and the agent resumed the conversation.


The CSAT screen includes several content containers:

* [agentView (avatar and agent name)](#agentview-avatar-and-agent-name)

* [ratingQuestionView (stars)](#ratingquestionview-stars)

- [agentView (avatar and agent name)](#agentview-avatar-and-agent-name)
- [ratingQuestionView (stars)](#ratingquestionview-stars)
- [resolutionConfirmationView (yes/no)](#resolutionconfirmationview-yesno)


### agentView (avatar and agent name)
   
You can either hide or show the agent avatar.

```xml
<bool name="show_agent_details_csat">
```

- If the conversation has assigned agent and its image was downloaded previously using profileUrl, this image shows in the view.

- If no image available, the default avatar displays. Its background and tint color is according to the agent bubble with `lp_messaging_ui_ic_agent_avatar` and `agent_avatar_background_color`.

- If the conversation has assigned agent, the SDK uses the agent’s nickName.


### ratingQuestionView (stars) 

By default, it’s a blank label and always visible (you cannot configure its visibility).

Define the color for the stars:

```xml
<color name="feedback_fragment_star">
```

Rating question includes Agent by default in the text. If the conversation has assigned agent and the agent’s nickName is not empty, this nickName is used instead.

### resolutionConfirmationView (yes/no)

You can either hide or show the confirmation view resolution.  

```xml
<bool name="show_yes_no_question">
```

 If both agentView (show_agent_details_csat) and resolutionConfirmationView (how_yes_no_question) are shown, resolutionConfirmationView will be always hidden (even if set to true).

Define the question text color:

```xml
<color name="feedback_fragment_title_yesno">
```

All the configuration related to Yes/No buttons is explained in the Survey Screen resources table and starting with the prefix: **feedback_fragment_yesno_btn_**.