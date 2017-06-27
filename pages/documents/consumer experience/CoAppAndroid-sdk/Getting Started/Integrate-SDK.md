---
title: Installing the SDK
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)
level4: Getting Started
order: 20
permalink: consumer-experience-voice-video-android-installing-the-sdk.html
indicator: messaging
---

### Setting up Android Studio

In order to use the CoApp SDK within your project, you need to have the LP-Messaging-SDK for Android preconfigured and set up in your project (minimum required version is [**v2.0**](https://github.com/LP-Messaging/Android-Messaging-SDK/tree/v2.0.0)). Please take a look at the [Official Documentation](https://developers.liveperson.com/android-overview.html) for further information.

### Setting up with Gradle (recommended)

**NOTE: Gradle dependency is currently only available in intranet, i.e. with connection to LivePerson artifactory**!

To add the CoApp SDK to your project, just add the following dependency to your `build.gradle`:

```gradle
    compile 'com.liveperson:coapp:LATEST@aar'
```

### Manually

If you do not want to use dependency management you can add the desired CoApp SDK Android archive `*.aar` file manually. Just add the `coapp-release.aar` to the project's `libs` folder and adjust your Gradle build file like shown below:

```gradle
...
android {
    ...
    repositories {
        ...
        flatDirs {
            dirs 'libs' // i.e. if LPCoapp-SDK-Android-0.1.0-release.aar resides in <your-project>/libs
        }
    }
}

dependencies {
    ...
    compile(name:'LPCoapp-SDK-Android-0.1.0-release.aar', ext:'aar')
    // add 3rd-party dependency for Dexter as well
    compile 'com.karumi:dexter:2.3.1'
}
```

**Hint:** If you have trouble integrating the CoApp SDK in your project you should take a look at our [CoApp SDK Sample App](consumer-experience-voice-video-android-sample-app.html) project which is already preconfigured and ready to go.

### Next steps

After the SDK is added as a dependency to your app's project, you can now proceed with our [Coding Guide](Integration Guide) to see how to use the LP-CoApp SDK in your code, enable Push Notifications, start a call, and much more.
