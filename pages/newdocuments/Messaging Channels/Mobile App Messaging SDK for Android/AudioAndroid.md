---
pagename: Audio Messages
redirect_from:
  - consumer-experience-android-sdk-advanced-audio.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features

order: 293
permalink: mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html

indicator: messaging
---

### Introduction

Audio Messaging allows a consumer to send audio messages to agents. This page describes the functionality of the feature and what needs to be done by brands in order to activate and configure the feature.

### Enabling & Configuring Audio messaging

#### Server side
Brands who wish to use the feature should contact their Account Team in order to activate the feature on the LivePerson server side.

#### Client side (In-App SDK)

1. **Permissions** - The Audio Messaging feature requires the following Android permissions:

 * ```<uses-permission android:name="android.permission.RECORD_AUDIO" />``` - required for audio recording

 * ```<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />``` - required for saving voice files to internal storage

 * ```<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />``` - required for reading voice files stored in internal storage

2. **Enable\disable the feature** - The feature can be enabled/disabled on the client side by modifying the value of ```<bool name="enable_voice_sharing">```
By default, this value is set to false.

3. **Max message length** - The max length of an audio message can be configured by modifying the value of ```<integer name="lp_record_max_time_seconds">```.
The values are in seconds. The minimum value is 15 seconds, the maximum and default value is 120 seconds

4. **Number of files on device** - The number of audio messages that will be saved on the device can be configured by modifying the value of ```<integer name="max_number_stored_voice_files">```. The default value is 20.

5. The following strings can be modified and localized:

 * **Short tap tooltip** - Presented when the consumer used a short tap instead of a long tap. The string's key is ```lp_mic_tooltip_long_press```. The default text is "Long tap to record"

 * **Release microphone tooltip** - Presented when the consumer doesn't release the microphone icon. The string's key is ```lp_mic_tooltip_release```. The default text is "Release for recording"

 * **Maximum length reached tooltip** - Presented when the message length reached to the maximum length. The string's key is ```lp_mic_tooltip_max_recording```. The default text is "Recording limit has been reached, click to send"
