---
pagename: Uses-permission and Uses-feature
redirect_from:
  - android-uses-permission-and-uses-feature.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Resources
permalink: mobile-app-messaging-sdk-for-android-resources-uses-permission-and-uses-feature.html
indicator: messaging
---

### Uses-permission

| Name                                                | Permission Type              | Feature                      |
|-----------------------------------------------------|------------------------------|------------------------------|
| android.permission.INTERNET `*`                     | Normal                       | |
| android.permission.ACCESS_NETWORK_STATE `*`         | Normal                       | |
| android.permission.CAMERA     	                    | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)<br />[Photo and File Sharing](mobile-app-messaging-sdk-for-android-advanced-features-photo-and-file-sharing.html) |
| android.permission.READ_EXTERNAL_STORAGE     	      | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)<br />[Audio Message](mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html)<br />[Photo and File Sharing](mobile-app-messaging-sdk-for-android-advanced-features-photo-and-file-sharing.html) | 
| android.permission.WRITE_EXTERNAL_STORAGE           | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)<br />[Audio Message](mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html)<br />[Photo and File Sharing](mobile-app-messaging-sdk-for-android-advanced-features-photo-and-file-sharing.html) | 
| android.permission.RECORD_AUDIO     		            | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)<br />[Audio Message](mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html) | 
| android.webkit.resource.AUDIO_CAPTURE     	        | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html) | 
| android.webkit.resource.VIDEO_CAPTURE     	        | Runtime                      | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html) | 
| android.permission.MODIFY_AUDIO_SETTINGS    	      | Normal                       | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html) | 
| android.permission.FOREGROUND_SERVICE     	        | Normal                       | [Photo and File Sharing](mobile-app-messaging-sdk-for-android-advanced-features-photo-and-file-sharing.html) | 
| android.permission.VIBRATE                          | Normal                       | [Vibrate on new incoming message](mobile-app-messaging-sdk-for-android-resources-use-the-liveperson-sdk-android.html#step-2---add-enabled-features-to-your-androidmanifestxml-file) | 

`*` **Required** permission

When a project has LivePerson Android SDK (lp_messaging_sdk) as one of dependencies, all of the other permissions will be merged into the final AndroidManifest.xml. Any of these permissions can be removed if the application does not use it. <br />
Example: If an application does not implement [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html) yet, then it can remove corresponding permissions:
- Declare `tools` namespace in the <manifest> element, to use merge rule maker, as shown here:
    ```xml
        <manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.example.myapp"
          xmlns:tools="http://schemas.android.com/tools">
    ```
- Remove permissions from the merged manifest by using ```tools:node="remove" ```
    ```xml
        <uses-permission android:name="android.webkit.resource.AUDIO_CAPTURE" tools:node="remove"/>
        <uses-permission android:name="android.webkit.resource.VIDEO_CAPTURE" tools:node="remove"/>
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" tools:node="remove"/>
    ```

***Use merge rule makers carefully when the application has multiple dependencies.***

### Uses-feature

| Name                                                | Feature                      | 
|-----------------------------------------------------|------------------------------|
| android.hardware.audio.pro                          | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)              |
| android.hardware.microphone                         | [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html)              |

***Declare these features enables Google Play filter your application from devices that do not meet its hardware requirements. You can disable the filter by using merge rule makers. Check more in [Voice and Video](mobile-app-messaging-sdk-for-android-advanced-features-voice-and-video.html).***