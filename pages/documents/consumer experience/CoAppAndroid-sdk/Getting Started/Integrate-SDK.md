---
title: Installing the SDK
redirect_from:
  - consumer-experience-voice-video-android-installing-the-sdk.html
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)
level4: Getting Started
order: 20
permalink: voice-&-video-for-android-sdk-(beta)-getting-started-installing-the-sdk.html
indicator: messaging
---

### Setting up Android Studio

In order to use the Voice & Video SDK within your project, you need to have the LP-Messaging-SDK for Android preconfigured and set up in your project (minimum required version is [**v2.0**](https://github.com/LP-Messaging/Android-Messaging-SDK/tree/v2.0.0)). Please take a look at the [Official Documentation](https://developers.liveperson.com/android-overview.html) for further information.

### Setting up with Gradle (recommended)

**NOTE: Gradle installation is currently not publicly available as this SDK is in BETA**!

To add the SDK to your project, just add the following dependency to your `build.gradle`:

```gradle
    compile 'com.liveperson:coapp:LATEST@aar'
```

### Manual Installation

If you do not want to use dependency management you can add the desired Android SDK archive `*.aar` file manually. Just add the `coapp-release.aar` to the project's `libs` folder and adjust your Gradle build file like shown below:

```gradle
...
android {
    ...
    repositories {
        ...
        flatDir {
            dirs 'libs' // i.e. if LPCoapp-SDK-Android-0.1.0-release.aar resides in <your-project>/libs
        }
    }
}

dependencies {
    ...
    compile(name:'LPCoapp-SDK-Android-0.1.0-release', ext:'aar')
    // add 3rd-party dependency for Dexter as well
    compile 'com.karumi:dexter:2.3.1'
}
```

**Hint:** If you have trouble integrating the SDK in your project you should take a look at our [Sample App](consumer-experience-voice-video-android-sample-app.html) project which is already preconfigured and ready to go.

### Next steps

After the SDK is added as a dependency to your app's project, you can now proceed with our [Integration Guide](consumer-experience-voice-video-android-integrate-the-sdk.html) to see how to use the Voice & Video SDK in your code, enable Push Notifications, start a call, and more.
