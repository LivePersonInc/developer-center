---
pagename: Audio Messages
redirect_from:
  - consumer-experience-ios-sdk-advanced-audio-ios.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
order: 238
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-audio-messages.html
indicator: messaging
---

### Introduction

Audio Messaging allows consumers to send audio messages to agents. This page describes the functionality of the feature and what needs to be done by brands in order to activate and configure the feature.

### Enabling & Configuring Audio Messages

#### Server side

Brands who wish to use the feature should contact their Account Team in order to activate the feature on the LivePerson server side.

#### Client side

1. **Permissions** - Required permission to microphone access. Add a new key ```NSMicrophoneUsageDescription``` with a value ("Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS") to Info.plist. When the system prompts the user to approve access to the microphone, it will be displayed as part of the alert.

2. **Enable\disable the feature** - The feature can be enabled/disabled on the client side by modifying the value of ```LPConfig.defaultConfiguration.enableAudioSharing```.

By default, this value is set to false.

3. **Max message length** The max length of an audio message can be configure by modifying the value of ```LPConfig.defaultConfiguration.recordingDurationLimit```.

The values are in seconds. The minimum value is 15 seconds, the maximum and default value is 120 seconds.

4. **Number of files on device** The number of audio messages that will be saved on the device. Can be configured by modifying the value of ```LPConfig.defaultConfiguration.maxNumberOfSavedAudioFilesOnDisk```. The default value is 20.

5. The following strings can be modified and localized:

 * **Short tap tooltip** - Presented when the consumer used a shorttap instead of a long tap. The string's key is ```toolTipLongTapToRecord```. The default text is "Long tap to record".

 * **Release microphone tooltip** - Presented when the consumer doesn't release the microphone icon. The string's key is ```toolTipReleaseButtonForRecording```. The default text is "Release for recording".

 * **Maximum length reached tooltip** - Presented when the message length reached to the maximum length. The string's key is ```toolTipRecordLimitReached```. The default text is "Recording limit has been reached, click to send".
