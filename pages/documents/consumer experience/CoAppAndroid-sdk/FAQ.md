---
title: FAQ
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)

order: 100
permalink: consumer-experience-voice-video-android-FAQ.html
indicator: messaging
---


### How much diskspace does the SDK need?

* Universal build: **+40MB**
* Architecture-specific builds
    * smallest: **+7MB** (armeabi)
    * biggest: **+14MB** (arm64-v8a)

**Note:** the LPCoApp-SDK for Android comes packaged with prebuilt libraries for all supported architectures. Since we use native code, the SDK `aar` already contains precompiled binaries for all architectures. The size of the `aar` is *21.6 MB*. Note that when adding the `aar` dependency, the Android build system only binds the binaries for the desired architecture.

### Which ABIs/architectures are supported?

Currently, we support the following architectures/ABIs:

* x86
* x86_64
* armeabi
* armeabi-v7a
* arm64-v8a

**Note:** we do not support MIPS architectures at the moment!
