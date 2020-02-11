---
pagename: FAQ
redirect_from:
  - consumer-experience-voice-video-android-FAQ.html
  - voice-and-video-for-android-sdk-beta-faq.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Voice & Video for Android SDK (BETA)
permalink: mobile-app-messaging-sdk-for-android-voice-and-video-for-android-sdk-beta-faq.html
indicator: messaging
---

<div class="important">
<h2>Deprecation Notice</h2>

the CoApp product is deprecated and will be discontinued from February 28th, 2020 on.
</div>

### How much diskspace does the SDK need?

* A universal build of the SDK is around **350kb**.

**Note:** Note that when adding the `aar` dependency, the Android build system only binds the binaries for the desired architecture.

### Does the SDK rely on native code?

Since version 0.2.0 the SDK does not rely directly on native code. However the SDK relies on WebRTC which
is implemented with native code (C++) together with JNI bindings for Java.

### Which ABIs/architectures are supported?

Currently, we support the following architectures/ABIs:

* x86
* x86_64
* armeabi
* armeabi-v7a
* arm64-v8a

