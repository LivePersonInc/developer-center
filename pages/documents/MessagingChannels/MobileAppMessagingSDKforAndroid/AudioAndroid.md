---
pagename: Audio Messages
redirect_from:
  - consumer-experience-android-sdk-advanced-audio.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features

order: 293
permalink: mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html

indicator: messaging
---


Audio Messaging allows a consumer to send audio messages to agents. 

1. Contact your Account Team to activate the feature on the LivePerson server side.

2. Add the required Android permissions to access the microphone:

   ```java
   <uses-permission android:name="android.permission.RECORD_AUDIO" /> //to record audio
   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> //to save voice files to internal storage
   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> // to read voice files stored in internal storage
   ```

3. Enable the feature:

   ```java
   <bool name="enable_voice_sharing">
   ```

   By default, the value is **false** (disabled).


4. Define the max length of an audio message:

   ```java
   <integer name="lp_record_max_time_seconds">
   ```

   The values are in seconds.  

   The minimum value is 15 seconds; the maximum and the default value is **120** seconds.

5. Define the max number of audio messages saved on the device:

   ```java
   <integer name="max_number_stored_voice_files">
   ```

   The default value is **20**.

6. Modify and localize the following strings:

   * **Short tap tooltip**

     Presented when the consumer used a short tap instead of a long tap. 
     
     **Key:** `lp_mic_tooltip_long_press` 
     
     The default text is *Long tap to record*.

   * **Release microphone tooltip**

     Presented when the consumer doesn't release the microphone icon. 
     
     **Key:** `lp_mic_tooltip_release`
     
     The default text is *Release for recording*.

   * **Maximum length reached tooltip**

     Presented when the message length reached to the maximum length. 
     
     **Key:** `lp_mic_tooltip_max_recording`
     
     The default text is *Recording limit has been reached, click to send*.

