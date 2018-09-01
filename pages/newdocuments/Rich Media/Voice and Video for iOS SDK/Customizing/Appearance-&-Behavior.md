---
pagename: Appearance and Behavior
redirect_from:
  - consumer-experience-voice-video-ios-appearance-behavior.html
sitesection: Documents
categoryname: "Rich Media"
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Customizing
order: 60
permalink: voice-and-video-for-ios-sdk-beta-customizing-appearance-and-behavior.html
indicator: messaging
---
**Note**: Full white-labeling is currently not supported. If you are missing an important customization feature, don't hesitate to contact you LivePerson account manager for help.

Below you'll learn how to customize various SDK settings to fit your app's needs. You can customise different aspects of the SDK:

   * [General Behavior](consumer-experience-voice-video-ios-appearance-behavior.html#behavior)
   * [Appearance](consumer-experience-voice-video-ios-appearance-behavior.html#appearance)
   * [Sounds](consumer-experience-voice-video-ios-appearance-behavior.html#sounds)

***

### Step 1: Setup

In your XCode project create a new `plist` file named:

  * `LPCoAppSDK.plist` and include it into your app target resources

### Step 2: Add custom settings

Open your `LPCoAppSDK.plist` in XCode and add the settings you wish to customize.

### Behavior
<style>
td:first-child {
  width: 200px!important;
}
</style>

| Key        | Type | Default Value | About  |
| ------------- |:-------------:|:-------------:|:-----|
|  **acceptCallOnNotificationTap** | BOOL  | YES  | Determines if a tap on a Push-call notification is considered **Accepting** the call. If set to `NO`, the user is presented the call screen and must accept explicitly. |
| **ringRepeatTimes** | Number | 3 | The number of times a push-call is presented to the user when the app is in background. _Hint_: On average a notification (with ring) is presented _7 seconds_, followed by a _3 second_ pause. So the total ring duration of **3** repeats amounts to approx. 3 * 10 = 30 seconds. iOS will limit to **4x repeats at max** |
| **speakerOnVideo** | BOOL | YES | Determines if the phone's speaker should be automatically enabled when a video call is started. This is recommended, as the volume in non-speaker mode is too low to be heard from a viewing distance. |
| **useProximitySensor** | BOOL | YES | Determines if the device's screen should be switched off and camera streaming should be paused, while the device is close to a user's ear (e.g. in a voice-call)  |

### Appearance

| Key        | Type | Default Value | About  |
| ------------- |:-------------:|:-------------:|:-----|
|  **cobrowseFrameColor** | String  | #004dc9   | The color of the frame surrounding the app's screen during a CoBrowse session. Use a HEX color value as String, including a leading hash (#) |
| **cobrowseTitleColor** | String | #ffffff | The color of the title on the top bar during a CoBrowse session. Make sure the color is sufficiently visible against the `cobrowseFrameColor` background |

### Sounds

| Key        | Type | Default Value | About  |
| ------------- |:-------------:|:-------------:|:-----|
|  **ringSound** | String  | ring.caf   | The ring sound file in you `Main.bundle` played when an incoming call is presented to the user. __Note__: This does not affect the ring of push-calls. Push-calls always use a file named `ring.caf` |
| **escalationSound** | String | escalation.caf | The sound in your `Main.bundle` played, when a call escalation (permissions request) is presented to the user. This sound is played once and should be no more than `3 seconds` long |

**Hint:** `caf` files are optimized audio files for iOS. You can convert any `aiff` file using the command below:

`afconvert -v -f 'caff' -d aac -s 1 -b 192000 MySource.aif MyOutput.caf`
