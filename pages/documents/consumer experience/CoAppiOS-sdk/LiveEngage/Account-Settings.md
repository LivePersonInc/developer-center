---
title: Account Settings
redirect_from:
  - consumer-experience-voice-video-ios-account-settings.html
level1: Documents
level2: Consumer Experience
level3: Voice & Video for iOS SDK (BETA)
level4: LiveEngage Configuration
order: 90
permalink: voice-&-video-for-ios-sdk-beta-liveengage-configuration-account-settings.html
indicator: messaging
---

### Account Features
By default, voice & video is **not enabled** in your LiveEngage account. Please contact your LivePerson account manager to have this feature enabled for you.


### User Profiles

Your agents on LiveEngage require a specific set of skills in order to use the **voice**, **video** or **In-app CoBrowse** capabilities of your account.

By default, these settings are enabled for your agents role. If you wish to disable or customize them for specific **Agent Groups**, follow these steps:

  1. Goto the **Users** tab
  2. Select **Profiles**
  3. Select the profile you wish to edit (usually: **Agent**)


![Profiles1](img/le_profiles_01.png)

Enable the permissions you wish to _grant_ to your group:

  * [x] _Initiate voice conversation_
  * [x] _Initiate live video_
  * [x] _Initiate CoBrowse view-only session, with scroll-control_ (1)
  * [x] _Initiate CoBrowse view-only session_
  * [x] _Initiate CoBrowse shared control session_

All of these settings should be self-explanatory.

![Profiles2](img/le_profiles_02.png)

_Scroll-only is currently supported in Web-based CoBrowse only. For in-app CoBrowse this setting is identical to the normal view-only mode._

### Invitation Options
The settings you chose in **User Profiles** will be reflected in all of your account's **Messaging conversations** (not Chat). Depending on the features you enabled, you will see something similar to below:

![Conversations Features](img/le_conv_features.png)
