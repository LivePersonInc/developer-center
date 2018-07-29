---
title: Appearance and Behavior
redirect_from:
  - consumer-experience-voice-video-android-appearance-behavior.html
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)
level4: Customizing
order: 70
permalink: voice-&-video-for-android-sdk-(beta)-customizing-appearance-and-behavior.html
indicator: messaging
---

**Note**: Full white-labeling is currently not supported. If you are missing an important customization feature, please don't hesitate to contact your LivePerson account manager for help.

Below you'll learn how to customise various SDK settings to fit your app's needs. You can customize different aspects of the SDK including:

   * [Colors](consumer-experience-voice-video-android-appearance-behavior.html#colors)
   * [Settings](consumer-experience-voice-video-android-appearance-behavior.html#settings)
   * [Sounds](consumer-experience-voice-video-android-appearance-behavior.html#sounds)
   * [Fieldmasking](consumer-experience-voice-video-android-appearance-behavior.html#secure-fields-fieldmasking)


The Voice & Video Android SDK allows you to customize its appearance via Android resource files. With these you can change colors, default images, text strings, etc. By convention, all resources specified by the SDK are prefixed with `coapp_`. The following resources are available for customization:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Colors -->
    <public name="coapp_frame_color" type="color" />
    <public name="coapp_ringing_color" type="color" />

    <!-- Strings -->
    <public name="coapp_default_caller_name" type="string" />

    <!-- Settings -->
    <public name="coapp_ringtone_call" type="string" />
    <public name="coapp_ringtone_escalation" type="string" />
    <public name="coapp_mute_mic_on_start" type="string" />
    <public name="coapp_speakers_on_video" type="string" />
    <public name="coapp_enable_wakelock" type="string" />
</resources>
```

### Colors
<style>
td:first-child {
  width: 200px!important;
}
</style>

| Key        | Type | Default Value | About  |
| ------------- |:-------------:|:-------------:|:-----|
| **coapp_frame_color** | Color | #ff007aff | The color of the frame surrounding the app's screen during an In-app CoBrowse session. Use a HEX color value, including a leading hash (#) |

### Settings

| Key        | Type | Default Value | About  |
| ------------- |:-------------:|:-------------:|:-----|
| **coapp_speakers_on_video** | BOOL | YES | Determines if the phone's speaker should be automatically enabled when a video call is started. This is recommended, as the volume in non-speaker mode is too low to be heard from a viewing distance. |

### Sounds

You can also adjust ringtones and the default avatar by overriding non-xml resources in your `res/` folder. The following resources exist:

| Resource                          | Description                                                     | Notes                                                                             |
|-----------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| res/drawable-nodpi/coapp_default_avatar | Default avatar used when agent does not actively supply one     | The default avatar is the LivePerson logo                                         |
| res/raw/notification_ringtone     | Ringtone sound to be played on a In-app CoBrowsing invitation or escalation | You can override these with `coapp_ringtone_call` and `coapp_ringtone_escalation` |
|

### Secure fields & fieldmasking

Since the SDK offers screen sharing capabilities, it might be of interest to black out some fields the agent should not see in a screensharing session. For this, the SDK offers a mechanism to flag `View` instances which are covered by a black rectangle.

**Note:** this feature is still in BETA and in some cases, the fieldmasking might not cover all sensitive screen areas.

To try the fieldmasking option you can either add a `android:tag` on the layout resources or call `setTag()` programmatically:

```
<EditText
    ...
    android:tag="@string/coapp_secure_field" /> <!-- add tag to resource -->
```

```
mySecureView.setTag(getResources().getString(R.string.coapp_secure_field)); // calling setTag()
```
