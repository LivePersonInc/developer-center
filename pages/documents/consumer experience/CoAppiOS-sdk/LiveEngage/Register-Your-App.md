---
title: Register Your App
level1: Documents
level2: Consumer Experience
level3: Voice & Video for iOS SDK (BETA)
level4: LiveEngage Configuration
order: 110
permalink: voice-and-video-for-ios-sdk-beta-liveengage-configuration-register-your-app.html
indicator: messaging
---


In order to use your app with your LiveEngage account, you need to register it. The steps below are mandatory to receive push-call notifications on iOS.

### Register your App ID

  * Login to your **LiveEngage** account as _Account Admin_
  * Open **Campaigns** tab
  * Select **Datasources** label below the campaigns list

![Data Sources](img/le_campaigns_datasources.png)

  * Select **APP** tab
  * Under **Mobile App Management** choose **Manage**

![Data Sources Apps](img/le_campaigns_datasources_apps.png)

  * Click **+ Add New**

![Data Sources Apps2](img/le_campaigns_datasources_apps_02.png)

  * Choose [*iOS*] as Platform
  * Enter your app's **Bundle ID** prefixed with `voip:` in **Mobile App name**, for example: **`voip:com.mybrand.app`**. Adding the prefix is mandatory to receive VoIP calls.
  * Press __Create app__
  * Wait for a confirmation, then __Close__

![Data Sources Apps3](img/le_campaigns_datasources_apps_03.png)

***

### Configure your App

  * Choose your app from the list
  * Click **Edit** when hovering

![Data Sources Apps4](img/le_campaigns_datasources_apps_04.png)

  1. Upload your **Certificate file**
  2. Upload your **Key file**
  3. Save changes

![Data Sources Apps5](img/le_campaigns_datasources_apps_05.png)
_Note_: If you followed the [VoIP Example Setup](consumer-experience-voice-video-ios-voip-configuration.html){:target="_blank"}, these are `myvoipapp-certificate.pem` and private-key `myvoipapp-private-key-nopass.pem`, respectively.

Your app registration is now complete.
