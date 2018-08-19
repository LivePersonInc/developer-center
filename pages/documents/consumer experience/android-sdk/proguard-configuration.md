---
title: Proguard Configuration
redirect_from:
  - android-proguard.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Configuration

order: 80
permalink: mobile-app-messaging-sdk-for-android-configuration-proguard-configuration.html

indicator: messaging
---

The SDK handles its own obfuscation and all its dependencies according to ProGuard rules. There is no need to add any ProGuard specific rules that relate to the SDK.

The SDK ProGuard will run automatically when the ProGuard option is enabled in the gradle file of your application.

In case there is no ProGuard activated, the SDK ProGuard will also be disabled.
