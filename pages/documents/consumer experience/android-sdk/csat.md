---
title: CSAT Behavior
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Advanced Features

order: 290
permalink: android-csat.html

indicator: messaging
---

### Overview

This document describes the CSAT behavior and configurations in the Messaging SDK. You can find all the related configurations in the resources ID table, under [Survey Screen](android-attributes.html){:target="_blank"}.

### Show CSAT flow

Show if:

- CSAT configured to appear according to:

```xml
<bool name="show_feedback">
```

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

**agentView (avatar and agent name)**

- Could be hidden or not according to:

```xml
<bool name="show_agent_details_csat">
```

- Contains agent avatar:
  - If conversation has assigned agent and its image was downloaded previously using profileUrl, this image will be presented in the view.
  - If no image available, default avatar is presented. Its background and tint color is according to the agent bubble with **lp_messaging_ui_ic_agent_avatar** and **agent_avatar_background_color**.

More info in [Configuring the SDK](/android-configuring-sdk.html){:target="_blank"}.

- Contains agent name:
  - By default it’s an empty label.
  - If conversation has assigned agent, the agent’s nickName will be used.

**ratingQuestionView (stars)**

- Always visible - can’t configure its visibility.
- Stars color is defined by:

```xml
<color name="feedback_fragment_star">
```
- Rating question includes **Agent** by default in the text. If conversation has assigned agent and the agent’s nickName is not empty, this nickName will be used instead.

**resolutionConfirmationView (yes/no)**

- Could be hidden or not according to:

```xml
<bool name="show_yes_no_question">
```

<div class="important">Important:</div>
If both agentView(**show_agent_details_csat**) and resolutionConfirmationView(**show_yes_no_question**) are shown, resolutionConfirmationView will be always hidden (even if set to true).

- The question text color is defined with:

```xml
<color name="feedback_fragment_title_yesno">
```

All the configuration related to Yes/No buttons is explained in the [Survey Screen](android-attributes.html){:target="_blank"} resources table and starting with the prefix: **feedback_fragment_yesno_btn_**.
