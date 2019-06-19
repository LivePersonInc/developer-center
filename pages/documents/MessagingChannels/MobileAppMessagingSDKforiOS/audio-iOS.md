---
pagename: Audio Messages
redirect_from:
  - consumer-experience-ios-sdk-advanced-audio-ios.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
order: 238
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-audio-messages.html
indicator: messaging
---


Audio Messaging allows consumers to send audio messages to agents. 

1. Contact your Account Team to activate the feature on the LivePerson server side.

2. Open the Info.plist and add the required permission to access the microphone. 

   * **Key:** `NSMicrophoneUsageDescription`

   * **Value:** "Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"   

   When the system prompts the user to approve access to the microphone, it displays as part of the alert.

2. Enable the feature:  

   `LPConfig.defaultConfiguration.enableAudioSharing`  

   By default, the value is *false* (disabled).  

3. Define the max length of an audio message:

   `LPConfig.defaultConfiguration.recordingDurationLimit`  

   The values are in seconds. 
   
   The minimum value is 15 seconds; the maximum and the default value is *120* seconds.

4. Define the max number of audio messages saved on the device:  

   `LPConfig.defaultConfiguration.maxNumberOfSavedAudioFilesOnDisk`  

   The default value is *20*.  

5. Modify and localize the following strings:  

   * **Short tap tooltip**  

     Presented when the consumer used a shorttap instead of a long tap.  
     
     **Key:** `toolTipLongTapToRecord`
     
     The default text is *"Long tap to record."*

   * **Release microphone tooltip**

     Presented when the consumer doesn't release the microphone icon. 
     
     **Key:** `toolTipReleaseButtonForRecording` 
     
     The default text is *"Release for recording."*

   * **Maximum length reached tooltip**

     Presented when the message length reached to the maximum length. 
     
     **Key:** `toolTipRecordLimitReached`
     
     The default text is *"Recording limit has been reached, click to send."*
