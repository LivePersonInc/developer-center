---
pagename: Project Settings
redirect_from:
  - consumer-experience-voice-video-ios-project-settings.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Getting Started
order: 40
permalink: voice-&-video-for-ios-sdk-beta-getting-started-project-settings.html
indicator: messaging
---

These settings must be adjusted in your XCode project.

  1. [Bitcode Compilation](#bitcode-compilation)
  2. [VoIP Background Mode](#voip-background-mode)
  3. [Privacy Info (iOS 10)](#voip-support)
  4. [Ring Sound](#ring-sound)



### Bitcode Compilation
Currently the SDK does not support **Bitcode Compilation**. In your `Build Settings` choose:

   * __Enabled Bitcode__ : **NO**

### VoIP Support
In the app `Capabilities` section, enable **`Background Mode`**, and check the following options:

  * [x] _Audio, AirPlay and Picture in Picture_
  * [x] _Voice over IP_
  * [x] _Remote notifications_

![Capabilities](img/capabilities_voip.png)

Your app will now be able to receive background calls and continue voice conversations while the app is running in the background.

### Privacy Info (iOS 10)

Starting from iOS 10, you are required to provide a description of why you need access to the **Microphone** and **Camera**. This is **essential**, as otherwise your app may crash.

Please add the following keys to your app's `Info.plist`:

| Key | Type | Value |
| ------------- |:-------------:|:-------------:|
|  **NSMicrophoneUsageDescription** (Privacy - Microphone Usage Description) | String  | Needed for voice calls |
|  **NSCameraUsageDescription** (Privacy - Camera Usage Description) | String  | Needed for video calls  |

![Settings Privacy](img/settings_privacy.png)

If you wish to localize the user message, create a *localized* file called `InfoPlist.strings` and add translations like this:

```
NSMicrophoneUsageDescription = "Allow for voice calls";
NSCameraUsageDescription = "Allow for video calls";
```

Also set the key __`Localized resources can be mixed`__ in your `Info.plist` to `YES`

For a complete documentation see: [Apple Tech FAQ](https://developer.apple.com/library/content/qa/qa1937/_index.html)
& [Info.plist HowTo](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html#//apple_ref/doc/uid/TP40009254-102276)

### Ring Sound

To add a ring sound for Push-Calls do either of the following:

  * Create a new sound file named `ring.caf` and add to your project
  * Copy the file `ring.caf` file from our Sample App project into your app's project

Either way make sure it's included in the bundle resources of your app's target. **Hint:** `caf` files are optimized audio files for iOS. You can convert any `aiff` file using the command below:

`afconvert -v -f 'caff' -d aac -s 1 -b 192000 MySource.aif MyOutput.caf`
