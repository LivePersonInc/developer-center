---
title: Proguard Configuration
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 9
permalink: android-proguard.html

---

The SDK handles its own obfuscation and all its dependencies according to ProGuard rules. There is no need to add any ProGuard specific rules that relate to the SDK.

The SDK ProGuard will run automatically when the ProGuard option is enabled in the gradle file of your application.

In case there is no ProGuard activated, the SDK ProGuard will also be disabled.