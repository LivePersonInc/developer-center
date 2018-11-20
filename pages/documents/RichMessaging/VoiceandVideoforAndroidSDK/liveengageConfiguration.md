---
pagename: LiveEngage Configuration
redirect_from:
  - consumer-experience-voice-video-android-workspace-requirements.html
  - voice-and-video-for-android-sdk-beta-liveengage-configuration-agent-workspace-requirements.html
  - consumer-experience-voice-video-android-account-settings.html
  - voice-and-video-for-android-sdk-beta-liveengage-configuration-account-settings.html
  - consumer-experience-voice-video-android-register-app.html
  - voice-and-video-for-android-sdk-beta-liveengage-configuration-register-your-app.html
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Voice & Video for Android SDK (BETA)
permalink: voice-and-video-for-android-sdk-beta-liveengage-configuration.html
indicator: messaging
---

### Agent Workspace Requirements

Your agents will be using LiveEngage from a supported web browser to make calls to your consumers. This section explains how to setup your LiveEngage account for voice & video support.

**Note:** Legacy systems do NOT support this feature.

#### Supported Browsers

| Browser | Version |  Desktop OS |
| ------------- |:-------------:|:-------------|
| Chrome | latest (>= v54)  | Windows, MacOSX, Linux |

**Note:** Only web browsers listed here are supported. When using LiveEngage from an unsupported browser the feature is automatically disabled from the agent workspace.

#### Required Hardware

| Feature	| Hardware | Note |
| --------|:---------|:-----|
| Voice Calls |	Microphone | - |
| Video Calls |	Microphone + Webcam |	- |
| In-app CoBrowse |	- | requires a voice-call |

### Account Settings

#### Account features

By default, voice & video is __not enabled__ in your LiveEngage account. Please contact your LivePerson account manager to have this feature enabled for you.

#### User Profiles

Your agents on LiveEngage require a specific set of skills in order to use the **voice**, **video** or **In-app CoBrowse** capabilities of your account.

By default, these settings are enabled for your "agent" role. If you wish to disable or customize them for specific **Agent Groups**, follow these steps:

  1. Goto the **Users** tab
  2. Select **Profiles**
  3. Select the profile you wish to edit (usually: __Agent__)


![Profiles1](img/le_profiles_01.png)

Enable the permissions you wish to _grant_ to your group:

  *  _Initiate voice conversation_
  *  _Initiate live video_
  *  _Initiate CoBrowse view-only session, with scroll-control_ (1)
  *  _Initiate CoBrowse view-only session_
  *  _Initiate CoBrowse shared control session_

All of these settings should be self-explanatory.


![Profiles2](img/le_profiles_02.png)
_(1) Scroll-only is currently supported in Web-based CoBrowse only. For in-app CoBrowse this setting is identical to the normal view-only mode._


#### Invitation Options
The settings you chose in **User Profiles** will be reflected in all of your account's **Messaging conversations** (not Chat). Depending on the features you enabled, you will see something similar to below:

  ![Conversation Features](img/le_conv_features.png)

### Register Your App with LiveEngage

In order to use your app with your LiveEngage account, you need to first register it. Just a few steps are required.

#### Register your App ID

  * Login to your **LiveEngage** account as _Account Admin_
  * Open **Campaigns** tab
  * Select **Data Sources** label below the campaigns list

![Data Sources](img/le_campaigns_datasources.png)

  * Select **APP** tab
  * Under **Mobile app Management** choose **Manage**

![Data Sources Apps](img/le_campaigns_datasources_apps.png)

  * Click **+ Add New**

![Data Sources App2](img/le_campaigns_datasources_apps_02.png)

  * Choose [*Android*] as Platform
  * Enter your app's **Bundle ID** in **Mobile App name**
  * Enter your Firebase/GCM **Server Key** in **Push notification API key**
  * Press __Create app__
  * Wait for a confirmation, then __Close__

![Data Sources Android](img/le_campaigns_datasources_apps_03_android.png)

Your app registration is now complete!
