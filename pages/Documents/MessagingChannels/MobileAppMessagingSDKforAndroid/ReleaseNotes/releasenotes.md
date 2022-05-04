---
pagename: Release Notes
redirect_from:
  - consumer-experience-android-sdk-release-notes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-release-notes.html
indicator: messaging
---
<br>

<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-android-sdk-release-notes.html&mode=web&css=post-content">subscribe</a> to receive notifications of changes! When we update the Release Notes, you'll get a notification straight to your email of choice!</div>

# Android Messaging SDK - Version 5.9.0

# Overview
Android Mobile Messaging SDK version 5.9.0 release includes performance improvements and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.9.0 uses:
- Minimum API version 21
- Compile API version 31
- Target API version 31
- Maps SDK "com.google.android.gms:play-services-maps:17.0.1"
- Structured Content Library “com.liveperson.android:lp_structured_content:2.2.1”
- Date Picker Library “com.liveperson.android:lp-date-picker:2.0.1”
- Schedule Slot List Library "com.liveperson.android:lp-appointment-scheduler:2.0.0"


# Bugs Fixed:
- SDK does not auto re-connect for UnAuth users.
- Failed to apply Quick reply button radius in dark mode.

# Enhancements:
- SDK performance improvements to reduce conversation window loading time.
- Use APIs instead of shell commands to delete files cached during file sharing.
- Added configuration to hide welcome message on clearing a history.

```xml
<bool name="lp_hide_welcome_message_on_clear_history">false</bool>
```



# Android Messaging SDK - Version 5.8.0

**Release date:** October 18, 2021

# Overview
Android Mobile Messaging SDK version 5.8.0 release includes Schedule Slot List support, Dark Mode for Date Picker, Android 12 support and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.8.0 uses:
- Minimum API version 21
- Compile API version 31
- Target API version 31
- Maps SDK "com.google.android.gms:play-services-maps:17.0.1"
- Structured Content Library “com.liveperson.android:lp_structured_content:2.2.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:2.0.1”
- Schedule Slot List Library "com.liveperson.android:lp-appointment-scheduler:2.0.0"

**(compileSdkVersion and targetSdkVersion bump to 31)**

# New Features:

## Schedule Slot List allows brand agents to send the Structured Content to consumers to share available appointment slots within in-app messaging. [Here](mobile-sdk-and-web-templates-schedule-slot-list-template.html) is the Schedule Slot List Template.

<div style="width: 100%; position: relative;">
    <img src="/img/AndroidAppointmentSlotGif1.gif" alt="Schedule Slot List Dark Mode" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/AndroidAppointmentSlotGif2.gif" alt="Schedule Slot List Light Mode" style="width: 30%;height: auto;">
</div>


{: .notice}
ScheduleSlotList JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.

## [Date Picker](mobile-sdk-and-web-templates-date-picker-template.html) now supports Dark Mode.

<div style="width: 100%; position: relative;">
    <img src="/img/android_datepicker_single_darkmode.png" alt="Date Picker Single Selection" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/android_datepicker_range_darkmode.png" alt="Date Picker Range Selection" style="width: 30%;height: auto;">
</div>


# Bugs Fixed:
- Crash on initialization/logout.
- Deep link fails to open.
- Secure form self closed after returning to the app.

# Enhancements:
- When the conversation comes from background to foreground, instead of always requesting authCode from IDP, SDK will check if it has the token (LP_JWT), then connect to UMS and let UMS do the expiration check. If the token is not available, then request authCode before connecting to UMS.
- Support markdown hyperlink in controller bot message.



# Android Messaging SDK - Version 5.7.1

**Release date:** September 10, 2021

# Overview
Android Mobile Messaging SDK version 5.7.1 release includes Rich Content Push Notification support for Proactive outbound messaging and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.7.1 uses:
- Minimum API version 21
- Compile API version 30
- Target API version 30
- Maps SDK "com.google.android.gms:play-services-maps:17.0.1"
- Structured Content Library “com.liveperson.android:lp_structured_content:2.1.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:2.0.0”

**(unchanged from version 5.7.0)**

# Bugs Fixed:
- Link previews for consumer messages are not hidden even when the feature is disabled.

# Enhancements:
- [Proactive to InApp messaging](mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) feature now has extended to support Rich Content Push Notification messages.

# Known Issue:

Deep links shared via Structured Content for InApp navigation are failing due to `http` prefix is getting added when clicked on a link.
The workaround for this issue is to use [structured_content_link_as_callback](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#structured-content) configuration of SDK and handle links inside host app when fired SDK event:  [LP_ON_STRUCTURED_CONTENT_LINK_CLICKED](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#structured-content-link-clicked)


# Android Messaging SDK - Version 5.7.0

**Release date:** July 19, 2021

# Overview
Android Mobile Messaging SDK version 5.7.0 release includes Date Picker support and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.7.0 uses:
- Minimum API version 21
- Compile API version 30
- Target API version 30
- Maps SDK "com.google.android.gms:play-services-maps:17.0.1"
- Structured Content Library “com.liveperson.android:lp_structured_content:2.1.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:2.0.0”

# New Feature:

DatePicker allows brand agents to send the Structured Content to consumers to choose desired date or a date range using an inbuilt calendar.

<div style="width: 100%; position: relative;">
    <img src="/img/DatePickerSingleSelection.gif" alt="Date Picker Single Selection" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/DatePickerRangeSelection.gif" alt="Date Picker Range Selection" style="width: 30%;height: auto;">
</div>

# Bugs Fixed:

- [onConversationResolved](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#conversation-resolved) fired twice for main conversation and PCS.
- Part of color configurations not working when set the app to light mode or dark mode.

# Enhancements:

- Support bold and italic in system messages.
- Support five additional languages. (Malaysian, Arabic, French-Canadian, Indonesian, Latin American Spanish)
- Optimized [History Control APIs](mobile-app-messaging-sdk-for-android-sdk-apis-control-history-apis.html#important-notes) to allow brands to decide which historical or current conversations displays to the consumer when opening the conversation screen.

# Known Issue:

Deep links shared via Structured Content for InApp navigation are failing due to `http` prefix is getting added when clicked on a link.
The workaround for this issue is to use [structured_content_link_as_callback](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#structured-content) configuration of SDK and handle links inside host app when fired SDK event:  [LP_ON_STRUCTURED_CONTENT_LINK_CLICKED](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#structured-content-link-clicked)


# Android Messaging SDK - Version 5.6.0

**Release date:** May 3, 2021

# Overview
Android Mobile Messaging SDK version 5.6.0 release includes Voice & Video support and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.6.0 uses:
- Minimum API version 21
- Compile API version 30
- Target API version 30
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 5.5.1)**

# Maven Central

Maven Central is the new repository for SDK v5.6.0 and above. 

Maven Central Repository: [LivePerson Messaging SDK](https://search.maven.org/search?q=com.liveperson.android)

Add `mavenCentral()` to the project level gradle file.

```java
repositories {
    mavenCentral()
}
```

# New Feature:

Voice and Video integration allows brand agents to communicate with consumers via voice or video calls.
<div style="width: 100%; position: relative;">
    <img src="/img/android_voice_call.png" alt="Voice call example screen" style="float: left; width: 25%;height: auto; margin-right: 1em">
    <img src="/img/android_video_call.png" alt="Video call example screen" style="width: 25%;height: auto;">
</div>

{:.important}
Voice & Video capabilities are available only on Android SDK 5.6.0 and above. Only enabled for authentication mode: Code flow and JWT flow.

KB article: [Voice & Video Overview](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-cobrowse-for-messaging.html)

To enable the feature on your Conversational Cloud account please review the KB article

### Features and Permissions
Below is the list of features and permissions elements added in the manifest file to support this feature. 

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.webkit.resource.AUDIO_CAPTURE" />
<uses-permission android:name="android.webkit.resource.VIDEO_CAPTURE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />

<uses-feature android:name="android.hardware.audio.pro" />
<uses-feature android:name="android.hardware.microphone" />
```

If you want to allow consumers to download the app from Google Play Store, even if their devices don't support Audio latency, please add below features in your app's manifest file:

```xml
<uses-feature android:name="android.hardware.audio.pro"  android:required="false" tools:replace="required" />
<uses-feature android:name="android.hardware.microphone"  android:required="false" tools:replace="required" />
```

Similarly for permissions, you can disable these permissions elements by adding:
```xml
<uses-permission android:name="android.permission.CAMERA" tools:node="remove" />
<uses-permission android:name="android.webkit.resource.AUDIO_CAPTURE" tools:node="remove" />
<uses-permission android:name="android.webkit.resource.VIDEO_CAPTURE" tools:node="remove" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" tools:node="remove" />
```

### How to enable:

```xml
<bool name="lp_enable_voice_video_call">true</bool>
```


### Branding and Configurations

#### lp_enable_voice_video_call
Enables or disables the ability for an Agent to start a voice or video call.

- **Type:** bool
- **Default value:** false

#### lp_voice_call_image_icon
Defines default Image icon for Voice Invite.

- **Type:** drawable

#### lp_video_call_image_icon
Defines default Image icon for Video Invite.

- **Type:** drawable

#### lp_voice_video_accept_call_button_image
Defines default background image for Accept button on Voice & Video Invite

- **Type:** drawable

#### lp_voice_video_decline_call_button_image
Defines default background image for Decline button on Voice & Video Invite

- **Type:** drawable

#### lp_voice_video_end_call_button_image
Defines default background image for End button on Voice & Video Invite

- **Type:** drawable
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call
- **Notes:** To enable this image lp_voice_video_end_call_button_type should be set to hangup`

#### lp_voice_video_join_call_button_image
Defines default background image for Join button on Voice & Video Invite

- **Type:** drawable
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call

---

#### lp_voice_video_invite_icon_tint
Defines default icon tint color on Voice & Video Invite

- **Type:** color
- **Default value:** gray

#### lp_voice_video_accept_button_tint
Defines default tint color for Accept/Join Button on Voice & Video Invite

- **Type:** color
- **Default value:** white
- **Note:** This property controls both the Accept and Join call Button

#### lp_voice_video_decline_button_tint
Defines default tint color for Decline/End Button on Voice & Video Invite

- **Type:** color
- **Default value:** red
- **Note:** This property controls both the Decline and End call Button

#### lp_voice_video_accept_button_background_color
Defines default background color for Accept/Join Button on Voice & Video Invite

- **Type:** color
- **Default value:** green
- **Note:** This property controls both the Accept and Join call Button

#### lp_voice_video_decline_button_background_color
Defines default background color for Decline/End Button on Voice & Video Invite

- **Type:** color
- **Default value:** clear
- **Note:** This property controls both the Decline and End call Button

#### lp_voice_video_invite_icon_render_original_image
Defines if use original image lp_video_call_image_icon or lp_voice_call_image_icon image for Voice or Video Invitation Icon

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_accept_button_render_original_image
Defines if use original image lp_voice_video_accept_call_button_image or lp_voice_video_join_call_button_image for Accept Button on Voice & Video Invitation

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_decline_button_render_original_image
Defines if use lp_voice_video_decline_call_button_image or lp_voice_video_end_call_button_image for Decline Button on Voice & Video Invitation

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_end_call_button_type
Defines which icon to display on Join Button for Voice & Video Invitation

0: Close
1: Hangup

- **Type:** integer
- **Default value:** 0
- **Preconditions:** This type is only shown on the Voice & Video Invite when Consumer has an active Call

#### lp_voice_video_invitation_bubble_background_color
Defines background color for Voice & Video Bubble

- **Type:** color
- **Default value:** light gray


# Attribute Update:
[lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#lp_hide_ui_until_auth) is added back.


# Bugs Fixed:
- Crash on conversation screen.
- Removed "requestLegacyExternalStorage" from SDK.

# Enhancements:
- Accessibility enhancements.

# Android Messaging SDK - Version 5.5.1

**Release date:** February 19, 2021

# Overview
Android Mobile Messaging SDK version 5.5.1 release provides the push notification support for Huawei devices without Google Mobile Services and bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.5.1 uses:
- Minimum API version 21
- Compile API version 30
- Target API version 30
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

# New API:

## [registerLPPusher API](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#registerlppusher)

Added [PushType](mobile-app-messaging-sdk-for-android-sdk-apis-interface-and-class-definitions.html#pushtype) to support Huawei devices without Google Play Services. Note: LivePerson [push notification service](push-notification-service-overview.html) doesn't support sending push notification directly to Huawei Push Kit. Only [push proxy](push-notification-service-configuration-of-push-proxy.html) is supported.

The notificationType in payload for Huawei device is "huawei". See [Android payload json](push-notification-service-tls-authentication.html#payload) for details.

```java
public static void registerLPPusher(String brandId, String appId, String deviceToken, PushType pushType, LPAuthenticationParams authenticationParams, ICallback<Void, Exception> registrationCompletedCallback)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID, for example, 652838922. |
| appId | The host app ID, for example, com.liveperson.myApp. |
| deviceToken | The device token for push notification. |
| pushType | The push notification type. See [PushType](mobile-app-messaging-sdk-for-android-sdk-apis-interface-and-class-definitions.html#pushtype) for details. |
| authenticationParams | An optional parameter that enables registering without first opening a conversation. |
| registrationCompletedCallback | An optional callback on the registration status. |

# Bugs Fixed:
- Crash on conversation screen.


# Android Messaging SDK - Version 5.5.0

**Release date:** December 11, 2020

# Overview
Android Mobile Messaging SDK version 5.5.0 release focuses on improvements and bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.5.0 uses:
- Minimum API version 21
- Compile API version 30
- Target API version 30
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(compileSdkVersion and targetSdkVersion bump to 30)**

# New API:

## [logOut API](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#logout)

If the logout call on the SDK fails, the local files will not get removed by the SDK. In order to solve this problem, we added a new logOut API to allow brands to perform a forced logout, which will perform the logout without waiting for LP pusher to unregister. In this way, we will not allow a failed logout call and therefore local files will always be removed.

```java
public static void logOut(Context context, String brandId, String appId, boolean forceLogOut, PushUnregisterType type, LogoutLivePersonCallback logoutCallback)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| brandId | An account ID. |
| appId | The host app ID. |
| forceLogOut | When true, SDK force a user logout no matter unregisterPusher succeed or failed. When false, SDK waits unregisterPusher succeed before logout. |
| type | PushUnregisterType.ALL: User will be unregistered from pusher for both agent message and Proactive Messaging. |
| logoutCallback | An [LogoutLivePersonCallback](android-callbacks-index.html) implementation. |

# Attribute Update:

## [conversation_background](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#conversation_background)
Added image support for Fragment mode. 
Limitation: there will be distortion of background image when keyboard appears.

# Bugs Fixed:
- Crash on conversation screen.
- Data masking system message text does not pick up app language.
- Camera not working the first time request camere permission.


# Android Messaging SDK - Version 5.4.0

**Release date:** October 08, 2020

# Overview
Android Mobile Messaging SDK version 5.4.0 release includes  support  of auto logout with few bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 5.4.0 uses:
- Minimum API version 21
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(Minimum API version bump to 21. There is a known issue for API 19)**

# New Features:
## Auto logout - Improve logout options

An SDK enhancement has been added that will prevent a second customer from viewing the chat history of the customer who chatted before them, while optimizing the flow in a way that clears just the necessary set of user information in a quick manner. This new feature adds an additional layer of security to our brand’s while verifying that conversation history and information will only be available to the consumer that was logged in to the app at the time of the conversation.

### How to enable
It’s enabled out of the box -  there’s nothing the brands need to do.

Note: Auto logout works only for authenticated users. 

# Attribute Update:
[lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#lp_hide_ui_until_auth) is removed. Previous conversations will now not be displayed automatically until the consumer's authentication information is validated.

# Retry Mechanism Update:
Notify host app immediately when failed to authenticate consumer instead of performing periodic retries.

# New Callback:
## Added following error events and error callback:
> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_ERROR_TYPE_INTENT_ACTION
>
> - To get the type param from the Intent, use LivePersonIntents.getErrorType(intent).
> - To get the message param from the Intent, use LivePersonIntents.getOnErrorMessage(intent).
>
> **Callback:** 
>
> onError(LpError lpError, String message);

| Parameter | Type | Description |
|----|----|----|
| lpError | LpError (enum)| The error.   |
| message | String        | A detailed message on the error. |

More details can be found at [LivePerson Callbacks](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#liveperson-callbacks)

## Added [LpError enum](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#lperror-enum)
```java
enum class LpError {
  IDP,
  CSDS,
  INVALID_CERTIFICATE,
  SOCKET,
  TIMEOUT,
  INVALID_SDK_VERSION,
  UNKNOWN
}
```

| Type | Description |
|----|----|
| IDP                 | An error occurred during the authentication process, which is usually because of a wrong or expired authentication key. |
| CSDS                | Error while requesting domains. |
| INVALID_CERTIFICATE | Error with a peer's certificate (server cert not valid, cert pinning mismatch, etc). |
| SOCKET              | Error opening a socket to the server or a request has timed out while trying to reach a server, and as a result we are closing our socket. |
| TIMEOUT             | A general timed out error. |
| INVALID_SDK_VERSION | Your host app is using an old SDK version and cannot be initialized. |
| UNKNOWN             | General SDK error. |

# Bugs Fixed:
- Android SDK crash due to empty RecyclerView object.
- “link_preview_enable_feature” configuration is not working as expected.
- [Messaging.reconnect()](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#reconnect) does not work when the token is not expired.
- SDK fails to connect when opened a conversation screen using a valid JWT and host app is missing reconnect mechanism.

# Android Messaging SDK - Version 5.3.0

**Release date:** August 10, 2020

### Overview
Android Mobile Messaging SDK version 5.3.0 release provides a new feature to display hyperlink with bug fixes.

### Environmental Requirements
The Android Mobile Messaging SDK version 5.3.0 uses:
- Minimum API version 19
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 5.2.0)**


# New Features:
## Hyperlink Support in Messaging

Users using the enhanced Agent Workspace have the ability to share hyperlinks with consumers during a messaging conversation. Now, they can share it with consumers that are messaging over the Mobile SDK.

<img src="img/mobilesdkhyperlinkandroidversion5_3.png" alt="mobilesdkhyperlinkandroid" height="600px">

### How to enabled
- KB article: [Hyperlinks overview](https://knowledge.liveperson.com/messaging-channels-rich-conversations-hyperlinks-overview.html)
- AC feature and site settings to enable:
  - AC features : Messaging.Agent_Link_Sending
  - Site settings: le.agent.messaging.showEnhancedAgentWorkspace = true

Limitations:
- “Link Preview” will be disabled if Hyperlink in messaging is enabled.
- Hyperlink in messaging from consumer to agent is not supported.


# New Attribute:
## [enable_markdown_hyperlink](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#enable_markdown_hyperlink)
Enable or disable hyperlink support. Agent won’t be able to send hyperlink messages if set to false.

* **Type:** bool
* **Default value:** true

## [lp_markdown_hyperlink_copy_text_only](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#lp_markdown_hyperlink_copy_text_only)
Define the copy content of a link message. Copying the message will copy both message and hyperlink. Only the message will be copied if set to true.

* **Type:** bool
* **Default value:** false

## [agent_bubble_message_markdown_hyperlink_text_color](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#agent_bubble_message_markdown_hyperlink_text_color)
Set the link message text color.

* **Type:** color
* **Default value:** @color/lp_consumer_action_highLight_color

## [enable_ime_options_action_send](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#enable_ime_options_action_send)
Enable or disable the action button of the keyboard. If enabled, pressing the action button will send a message. Multi line messages are not supported if enabled.

* **Type:** bool
* **Default value:** false

## [lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#lp_hide_ui_until_auth)
Define if SDK shows conversation until pass authentication check.

* **Type:** bool
* **Default value:** true


# Secure Element Encryption
The SDK now performs all encryption through the system Secure Encryption Element (hardware-backed Android Keystore) on devices running Android 6.0 and higher.

To take advantage of the new encryption process on existing installations, each Host App instance should call logout() and then log back in after upgrading to this version of the SDK or later.


# Bugs Fixed:
- Optimized the logout process - logout time has been decreased with this optimization.
- Fixed a bug that the “Enter” key can’t move the cursor to a new line for some input methods. Provided a configuration `enable_ime_options_action_send` to set the behavior of keyboard action key.
- Fixed inconsistency of masked PII messages by fetching all closed conversation messages from the history server.
- Fixed a bug which would report Keystore Exceptions due to use of an old API on devices running Android P.
- Fixed a bug that attributes `sc_buttonElement_text_color` and `sc_buttonElement_background_color` failed to change the style of structured content button element.


# Android Messaging SDK - Version 5.2.0

**Release date:** May 8, 2020

### Overview
Android Mobile Messaging SDK version 5.2.0 release offers a few new features for devs and comes with a sizable side of bugfixes.

### Environmental Requirements
The Android Mobile Messaging SDK version 5.2.0 uses:
- Minimum API version 19
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 5.1.1)**

# New Features:
## Improved Unread Message Count

- Get the count of unread messages that are not yet received by the consumer's device. This API returns the count through the provided callback which is a sum of unread messages in the  open as well as closed conversation messages.
- When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.
- This API method uses a threshold mechanism of 10 seconds. If this API is called within 10 seconds from the last request was made, the counter will be returned from SDK cache otherwise a new request to the server will be made to fetch the latest count. 

**Note:** 
- This new API is available from SDK version 5.2.0
- The SDK needs to be initialized before calling this API.

{:.important}
This API will allow the user to get the count of unread messages for all conversations without the need to be registered to pusher service.

```java
public static void getUnreadMessagesCount(String appId, LPAuthenticationParams authenticationParams, final ICallback<Integer, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| callback | An [ICallback](android-callbacks-index.html) implementation |
| authenticationParams | Authentication parameters |

## Verify your Push Registrations

- Check if the consumer's device is registered to receive push notification messages.

```java
public static void isPusherRegistered(@NonNull String deviceToken, @NonNull String appId, @NonNull LPAuthenticationParams lpAuthenticationParams, @NonNull ICallback<Boolean, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| deviceToken | The FCM device token |
| appId | The host app ID |
| lpAuthenticationParams | Authentication params |
| callback | An ICallback implementation |

## Control your Logs
New Logging subsystem, which introduces: 
- Granular log level controls can now be set as verbose, purely-informational, or completely-off as you desire.
- Data Masking feature ensures no sensitive consumer data can be leaked through system logs, even if they're set to Verbose.
Head over [here](mobile-app-messaging-sdk-for-android-advanced-features-logging.html) to find out more!

## Auto adjust "Scroll to bottom" button width
- The width of the "scroll to bottom" button will be auto adjusted based on length of a message text.
- The button width can be auto adjusted up to half of the device's screen size. This is applicable for both portrait as well as landscape mode.

## Permission dialog to let consumer grant file sharing permissions
- Show a permission request dialog when a consumer has disabled or denied either the camera, file or audio permissions and later tries to access these UI element.
- When clicked on "Go To Settings" button on request dialog, consumer will be taken to app's Settings screen where they have to manually grant respective permissions.

## New User interface to save files on consumer's device
- When decided to save a file, consumer now can choose a specific folder on their devices, SD card or upload the file to a cloud service such as Google drive.

# New Attribute:
## [structured_content_button_background_enabled](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#structured_content_button_background_enabled)
Enable or disable structured content button border.

* **Type:** bool
* **Default value:** true

# Bugs Fixed:
- Corrected an issue where lost connections while sending images could cause a loading spinner to appear forever.
- Fixed an issue where lost connections while sending a file as the first message would display a confusing error.
- Adjusted the alignment of the labels beneath the Upload File Type selector icons for languages where "Gallery", "Camera", or "Document" are longer words than the UI previously accounted for.
- Removed an unnecessary API call that may have been slowing down SDK operations.
- Added static GIF images to the image type upload whitelist.
- Corrected an issue that would prevent consumers from receiving an end-of-conversation survey if the agent they were talking to closed their conversation within five seconds of the consumer sending the app to the background.
- Removed the "Agent Is Typing" indicator for filtered views that show only closed, historical conversations. (This indicator could appear as though an agent were talking in history, if there was also an open conversation visible to other filtered views.)
- Fixed faulty retry logic that would post code to the Agent console if a Consumer's authentication token expired while they were busy filling in a Secure Form.
- Reconfigured the default Drawables and animation code for the agent-is-typing 3-dots animation to allow host app implementations to override the animation via the entire animation list in addition to overriding the fixed set of frames.
- Corrected the behavior of the Voice Clip button, which would sometimes reappear even when the feature was disabled if the user performed certain background-and-foreground steps.
- Introduced extra safety-check code to ensure no messages can be sent with a String-empty text body or a text body consisting of only whitespace.
- Fixed an issue where a user looking at a history-only filtered view could have an end-of-conversation survey presented to them, if they were also in an open conversation and the agent closes it.

## Accessibility-Specific Bugs Fixed:
- The TalkBack implementation surrounding the Voice Clip feature has been refined to better articulate what the controls will do and keep the user from becoming confused as to their state while recording.
- Fixed a pair of issues surrounding left/right swipe navigation within Structured Content cards.

# Deprecations:
- The old Logging API, `LivePerson.setIsDebuggable(bool)`, has been deprecated in favor of the new Logging subsystem.
  - This API will still work for the time being:
  - Passing `true` is equivalent to calling `LivePerson.Logging.setSDKLoggingLevel(LogLevel.VERBOSE);`
  - Passing `false` is equivalent to calling `LivePerson.Logging.setSDKLoggingLevel(LogLevel.ERROR);`
- 'Signup' auth flow is officially deprecated by the LivePerson Mobile SDK, and will reach **end-of-life on the 30th of June, 2020**.
  - Please contact LivePerson through our client support channels to learn how to migrate your app to Authenticated or Unauthenticated auth flows.


# Android Messaging SDK - Version 5.1.1

**Release date:** January 29, 2020

### Overview
Android Mobile Messaging SDK version 5.1.1 release fixes a bug that might lead to a crash of the messaging service on Android KitKat(4.4).

### Environmental Requirements
The Android Mobile Messaging SDK version 5.1.1 uses:
- Minimum API version 19
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

# Android Messaging SDK - Version 5.1.0
**Release date:** January 21, 2020

### Overview
The Android Mobile Messaging SDK version 5.1.0 release offers a few powerful features, improvements on the TalkBack accessible experience for vision-impaired users and bug fixes.

### Environmental Requirements
The Android Mobile Messaging SDK version 5.1.0 uses:
- Minimum API version 19
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 5.0.0)**

### New Features:
- Consumers can now send Word (.docx), Excel (.xlsx), PowerPoint (.pptx), and PDF (.pdf) documents to Agents.
- Photo Upload Preview window is now a child fragment of the SDK, rather than a new Activity that must push and pop on the Activity Stack.
- Scroll Behavior Configuration - clients can now use flags in our branding.xml config file to set the messaging window scroll behavior in various cases.
    - `lp_scroll_show_conversation` sets the scrolling behavior for when the SDK window is shown via a call to `showConversation` or `getConversationFragment`.
    - `lp_scroll_when_foreground` sets the scrolling behavior for when the app and SDK are resumed from a background state.
    - `lp_scroll_when_push_notification` sets the scrolling behavior for when the SDK is launched from a tap on a push notification.
    - `lp_scroll_when_scroll_down` sets the scrolling behavior for when the "scroll to bottom" UI element is tapped within the SDK window.
    - Each of these can be set to "Bottom" (auto-scrolls all the way down) or "FirstUnreadMessage" (auto-scrolls down to show the oldest unseen message).
    - `lp_scroll_show_conversation`, `lp_scroll_when_foreground`, and `lp_scroll_when_push_notification` can also be set to "LastPosition" (does not auto-scroll at all).
    - For more detailed information, see the [Scroll Behavior Configuration](mobile-app-messaging-sdk-for-android-advanced-features-scroll-behavior-configuration.html) page.
- Also added `lp_scroll_to_bottom_after_resolve_conversation`, a setting to allow enabling or disabling the auto-scroll-to-bottom when `enable_conversation_resolved_message`, `enable_conversation_resolved_separator` are disabled and a conversation is resolved.

### Bugs Fixed:
- Conversation Resolved message should now always contain the Agent's name, rather than simply 'resolved by agent'.
- Bot agents that do not send a done-typing notice between messages will no longer cause unnecessary whitespace in message history.
- Link previews should now appear even if the link does not contain a protocol prefix (http:// or https://).
- Long-tapping a link for a context menu will no longer also attempt to open the link.
- Fixed a pair of crashes related to loading messages.
- Metadata attached to Structured Content actions is now included in the retry, if connection is lost during the first attempt.
- Corrected a typo in our Portuguese translations.

##### Accessibility-Specific Bugs Fixed:
- Links that generate Previews will now properly be described by TalkBack as links.
- Structured Content Buttons that open hyperlinks will now be described as "links" instead of "buttons".
- Links without protocol prefixes (http:// or https://) are now clickable using TalkBack.
- Phone Number and Email Address "links" (tel: and mailto:) are now clickable using TalkBack.
- Opening a photo attachment will no longer leave TalkBack focus on the screen behind it.
- Removed an extra stop when using TalkBack swipe gestures to navigate between elements of a Structured Content Carousel.
- Removed unnecessary TalkBack swipe gestures needed to navigate through Structured Content Map elements.
- Structured Content now scales with system accessibility Text Size settings, preventing cramped content elements with scaled-up text.
- Fullscreen photo view no longer erroneously suggests that the photo can be double-tapped, and will now only provide double-tap-and-hold instructions. 

### Deprecation
- 'Signup' auth flow is officially deprecated by the LivePerson Mobile SDK, and will reach **end-of-life on the 30th of June, 2020**. 
- Please contact LivePerson through our client support channels to learn how to migrate your app to Authenticated or Unauthenticated auth flows.


# Android Messaging SDK - Version 5.0.0

**Release Date**: Oct 31, 2019 

### Overview
Android Mobile Messaging SDK version 5.0.0 release provides Android Q support and fixing bugs

### Environmental Requirements
The Android Mobile Messaging SDK version 5.0.0 uses:
- Minimum API version 19
- Compile API version 29
- Target API version 29
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

### Bugs fixed 
* Fixed issue where crash could occur while loading conversation.

### New Features 
* **Dark Theme Support** - The Android Mobile Messaging SDK Supports Dark Theme for Android 10.  
For More information see: [Attributes Page](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html)
 
### Known Issues 
* **Android 10, Structured Content and Quick reply messages**: Currently, structured content message colors are sent from the Conversational Cloud Agent Workspace as hexadecimal colors and we cannot be certain of the appearance setting the consumer will have enabled as the structured content message arrives. Currently the Android Mobile Messaging SDK does not support converting these colors to an alternate appearance for Dark Theme. Therefore we ask our customers to ensure that colors selected for the structured content JSON are visually legible for both appearance modes for backgrounds and text within the Android Mobile Messaging SDK. As an alternative, from SDK 5.0.0 you can also set Dark Mode configuration `darkMode_SC_QR_override_colors_from_LE` in SDk not to override colors from LE and use Quick Replies, Structured Content color attributes in SDK. 

* **Android 10 and Secure Form web view**: We support Dark Theme for Secure Form by force enabling it with attribute `darkMode_force_enable_for_webView`(enabled by default).

#### LivePerson Obsoleted functions

* **initialize(final Context context, final String brandId, final InitLivePersonCallBack initCallBack)** , use *initialize(Context context, final InitLivePersonProperties initProperties)* instead
* **showConversation(Activity activity)** and showConversation(Activity activity, String authenticationKey) use *showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params)* instead
* **getConversationFragment(String authKey)** , use *getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params)* instead
* **handlePush(Context context, Bundle data, String brandId, boolean showNotification)** , use *handlePushMessage(Context context, Map<String, String> remoteMessage, String brandId, boolean showNotification)* instead
* **shutDown()** , use *shutDown(final ShutDownLivePersonCallback shutdownCallback)* instead
* **setUserProfile(String appId, String firstName, String lastName, String phone)** , use *setUserProfile(ConsumerProfile profile)* instead

# Android Messaging SDK - Version 4.10.0

**Release date:** October 29, 2021

# Overview
Android Mobile Messaging SDK version 4.10.0 release includes Schedule Slot List support and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.10.0 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
- Structured Content Library “com.liveperson.android:lp_structured_content:1.2.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:1.0.1”
- Schedule Slot List Library "com.liveperson.android:lp-appointment-scheduler:1.0.0"


# New Features:

## Schedule Slot List allows brand agents to send the Structured Content to consumers to share available appointment slots within in-app messaging. [Here](mobile-sdk-and-web-templates-schedule-slot-list-template.html) is the Schedule Slot List Template.

<div style="width: 100%; position: relative;">
    <img src="/img/AndroidAppointmentSlotGif1.gif" alt="Schedule Slot List Dark Mode" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/AndroidAppointmentSlotGif2.gif" alt="Schedule Slot List Light Mode" style="width: 30%;height: auto;">
</div>


{: .notice}
ScheduleSlotList JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.


# Bugs Fixed:
- Crash on initialization/logout.
- Deep link fails to open.
- Secure form self closed after returning to the app.

# Enhancements:
- When the conversation comes from background to foreground, instead of always requesting authCode from IDP, SDK will check if it has the token (LP_JWT), then connect to UMS and let UMS do the expiration check. If the token is not available, then request authCode before connecting to UMS.
- Support markdown hyperlink in controller bot message.

# Android Messaging SDK - Version 4.9.1

**Release date:** September 07, 2021

# Overview
Android Mobile Messaging SDK version 4.9.1 release includes Rich Content Push Notification support for Proactive outbound messaging and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.9.1 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
- Structured Content Library “com.liveperson.android:lp_structured_content:1.1.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:1.0.1”

**(unchanged from version 4.9.0)**

# Enhancements:
- [Proactive to InApp messaging](mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html) feature now has extended to support Rich Content Push Notification messages.

# Bugs Fixed:
- Link previews for consumer messages are not hidden even when the feature is disabled.

# Known Issue:

Deep links shared via Structured Content for InApp navigation are failing due to `http` prefix is getting added when clicked on a link.
The workaround for this issue is to use [structured_content_link_as_callback](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#structured-content) configuration of SDK and handle links inside host app when fired SDK event:  [LP_ON_STRUCTURED_CONTENT_LINK_CLICKED](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#structured-content-link-clicked)


# Android Messaging SDK - Version 4.9.0

**Release date:** July 12, 2021

# Overview
Android Mobile Messaging SDK version 4.9.0 release includes Date Picker support and enhancements.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.9.0 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"
- Structured Content Library “com.liveperson.android:lp_structured_content:1.1.0”
- Date Picker Library “com.liveperson.android:lp-date-picker:1.0.1”

**(unchanged from version 4.8.1)**

# New Feature:

DatePicker allows brand agents to send the Structured Content to consumers to choose desired date or a date range using an inbuilt calendar.

<div style="width: 100%; position: relative;">
    <img src="/img/DatePickerSingleSelection.gif" alt="Date Picker Single Selection" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/DatePickerRangeSelection.gif" alt="Date Picker Range Selection" style="width: 30%;height: auto;">
</div>

# Bugs Fixed:

- [onConversationResolved](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#conversation-resolved) fired twice for main conversation and PCS.

# Enhancements:

- Support bold and italic in system messages.
- Support five additional languages. (Malaysian, Arabic, French-Canadian, Indonesian, Latin American Spanish)
- Optimized [History Control APIs](mobile-app-messaging-sdk-for-android-sdk-apis-control-history-apis.html#important-notes) to allow brands to decide which historical or current conversations displays to the consumer when opening the conversation screen.

# Known Issue:

Deep links shared via Structured Content for InApp navigation are failing due to `http` prefix is getting added when clicked on a link.
The workaround for this issue is to use [structured_content_link_as_callback](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-above.html#structured-content) configuration of SDK and handle links inside host app when fired SDK event:  [LP_ON_STRUCTURED_CONTENT_LINK_CLICKED](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#structured-content-link-clicked)


# Android Messaging SDK - Version 4.8.1

**Release date:** April 26, 2021

# Overview
Android Mobile Messaging SDK version 4.8.1 release includes Voice & Video support and enhancements. 

## Environmental Requirements
The Android Mobile Messaging SDK version 4.8.1 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.7.1)**

# Maven Central

Maven Central is the new repository for SDK v4.8.1 and above. 

Maven Central Repository: [LivePerson Messaging SDK](https://search.maven.org/search?q=com.liveperson.android)

Add `mavenCentral()` to the project level gradle file.

```java
repositories {
    mavenCentral()
}
```

# New Feature:

Voice and Video integration allows brand agents to communicate with consumers via voice or video calls.
<div style="width: 100%; position: relative;">
    <img src="/img/android_voice_call.png" alt="Voice call example screen" style="float: left; width: 25%;height: auto; margin-right: 1em">
    <img src="/img/android_video_call.png" alt="Video call example screen" style="width: 25%;height: auto;">
</div>

{:.important}
Voice & Video capabilities are available only on Android SDK 4.8.1 and above. Only enabled for authentication mode: Code flow and JWT flow.

KB article: [Voice & Video Overview](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-cobrowse-for-messaging.html)

To enable the feature on your Conversational Cloud account please review the KB article

### Features and Permissions
Below is the list of features and permissions elements added in the manifest file to support this feature. 

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.webkit.resource.AUDIO_CAPTURE" />
<uses-permission android:name="android.webkit.resource.VIDEO_CAPTURE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />

<uses-feature android:name="android.hardware.audio.pro" />
<uses-feature android:name="android.hardware.microphone" />
```

If you want to allow consumers to download the app from Google Play Store, even if their devices don't support Audio latency, please add below features in your app's manifest file:

```xml
<uses-feature android:name="android.hardware.audio.pro"  android:required="false" tools:replace="required" />
<uses-feature android:name="android.hardware.microphone"  android:required="false" tools:replace="required" />
```

Similarly for permissions, you can disable these permissions elements by adding:
```xml
<uses-permission android:name="android.permission.CAMERA" tools:node="remove" />
<uses-permission android:name="android.webkit.resource.AUDIO_CAPTURE" tools:node="remove" />
<uses-permission android:name="android.webkit.resource.VIDEO_CAPTURE" tools:node="remove" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" tools:node="remove" />
```

### How to enable:

```xml
<bool name="lp_enable_voice_video_call">true</bool>
```


### Branding and Configurations

#### lp_enable_voice_video_call
Enables or disables the ability for an Agent to start a voice or video call.

- **Type:** bool
- **Default value:** false

#### lp_voice_call_image_icon
Defines default Image icon for Voice Invite.

- **Type:** drawable

#### lp_video_call_image_icon
Defines default Image icon for Video Invite.

- **Type:** drawable

#### lp_voice_video_accept_call_button_image
Defines default background image for Accept button on Voice & Video Invite

- **Type:** drawable

#### lp_voice_video_decline_call_button_image
Defines default background image for Decline button on Voice & Video Invite

- **Type:** drawable

#### lp_voice_video_end_call_button_image
Defines default background image for End button on Voice & Video Invite

- **Type:** drawable
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call
- **Notes:** To enable this image lp_voice_video_end_call_button_type should be set to hangup`

#### lp_voice_video_join_call_button_image
Defines default background image for Join button on Voice & Video Invite

- **Type:** drawable
- **Preconditions:** This image is only shown on the Voice & Video Invite when Consumer has an active Call

---

#### lp_voice_video_invite_icon_tint
Defines default icon tint color on Voice & Video Invite

- **Type:** color
- **Default value:** gray

#### lp_voice_video_accept_button_tint
Defines default tint color for Accept/Join Button on Voice & Video Invite

- **Type:** color
- **Default value:** white
- **Note:** This property controls both the Accept and Join call Button

#### lp_voice_video_decline_button_tint
Defines default tint color for Decline/End Button on Voice & Video Invite

- **Type:** color
- **Default value:** red
- **Note:** This property controls both the Decline and End call Button

#### lp_voice_video_accept_button_background_color
Defines default background color for Accept/Join Button on Voice & Video Invite

- **Type:** color
- **Default value:** green
- **Note:** This property controls both the Accept and Join call Button

#### lp_voice_video_decline_button_background_color
Defines default background color for Decline/End Button on Voice & Video Invite

- **Type:** color
- **Default value:** clear
- **Note:** This property controls both the Decline and End call Button

#### lp_voice_video_invite_icon_render_original_image
Defines if use original image lp_video_call_image_icon or lp_voice_call_image_icon image for Voice or Video Invitation Icon

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_accept_button_render_original_image
Defines if use original image lp_voice_video_accept_call_button_image or lp_voice_video_join_call_button_image for Accept Button on Voice & Video Invitation

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_decline_button_render_original_image
Defines if use lp_voice_video_decline_call_button_image or lp_voice_video_end_call_button_image for Decline Button on Voice & Video Invitation

- **Type:** boolean
- **Default value:** false

#### lp_voice_video_end_call_button_type
Defines which icon to display on Join Button for Voice & Video Invitation

0: Close
1: Hangup

- **Type:** integer
- **Default value:** 0
- **Preconditions:** This type is only shown on the Voice & Video Invite when Consumer has an active Call

#### lp_voice_video_invitation_bubble_background_color
Defines background color for Voice & Video Bubble

- **Type:** color
- **Default value:** light gray


# Attribute Update:
[lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#lp_hide_ui_until_auth) is added back.


# Bugs Fixed:
- Crash on conversation screen.

# Enhancements:
- Accessibility enhancements.

# Android Messaging SDK - Version 4.7.1

**Release date:** February 19, 2021

# Overview
Android Mobile Messaging SDK version 4.7.1 release provides the push notification support for Huawei devices without Google Mobile Services and bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.7.1 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.7.0)**

# New API:

## [registerLPPusher API](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#registerlppusher)

Added [PushType](mobile-app-messaging-sdk-for-android-sdk-apis-interface-and-class-definitions.html#pushtype) to support Huawei devices without Google Play Services. Note: LivePerson [push notification service](push-notification-service-overview.html) doesn't support sending push notification directly to Huawei Push Kit. Only [push proxy](push-notification-service-configuration-push-proxy.html) is supported.

The notificationType in payload for Huawei device is "huawei". See [Android payload json](push-notification-service-tls-authentication.html#payload) for details.

```java
public static void registerLPPusher(String brandId, String appId, String deviceToken, PushType pushType, LPAuthenticationParams authenticationParams, ICallback<Void, Exception> registrationCompletedCallback)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID, for example, 652838922. |
| appId | The host app ID, for example, com.liveperson.myApp. |
| deviceToken | The device token for push notification. |
| pushType | The push notification type. See [PushType](mobile-app-messaging-sdk-for-android-sdk-apis-interface-and-class-definitions.html#pushtype) for details. |
| authenticationParams | An optional parameter that enables registering without first opening a conversation. |
| registrationCompletedCallback | An optional callback on the registration status. |

# Bugs Fixed:
- Crash on conversation screen.


# Android Messaging SDK - Version 4.7.0

**Release date:** December 11, 2020

# Overview
Android Mobile Messaging SDK version 4.7.0 release focuses on improvements and bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.7.0 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.6.1)**

# New API:

## [logOut API](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#logout)

If the logout call on the SDK fails, the local files will not get removed by the SDK. In order to solve this problem, we added a new logOut API to allow brands to perform a forced logout, which will perform the logout without waiting for LP pusher to unregister. In this way, we will not allow a failed logout call and therefore local files will always be removed.

```java
public static void logOut(Context context, String brandId, String appId, boolean forceLogOut, PushUnregisterType type, LogoutLivePersonCallback logoutCallback)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| brandId | An account ID. |
| appId | The host app ID. |
| forceLogOut | When true, SDK force a user logout no matter unregisterPusher succeed or failed. When false, SDK waits unregisterPusher succeed before logout. |
| type | PushUnregisterType.ALL: User will be unregistered from pusher for both agent message and Proactive Messaging. |
| logoutCallback | An [LogoutLivePersonCallback](android-callbacks-index.html) implementation. |

# Attribute Update:

## [conversation_background](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#conversation_background)
Added image support for Fragment mode. 
Limitation: there will be distortion of background image when keyboard appears.

# Bugs Fixed:
- Crash on conversation screen.
- Data masking system message text does not pick up app language.
- Camera not working the first time request camere permission.

# Android Messaging SDK - Version 4.6.1

**Release date:** October 08, 2020

# Overview
Android Mobile Messaging SDK version 4.6.1 release includes the change of retry mechanism of authentication. SDK will notify host app immediately when failed to authenticate consumer instead of performing periodic retries.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.6.1 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.6.0)**

# New Callback:
## Added following error events and error callback:
> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_ERROR_TYPE_INTENT_ACTION
>
> - To get the type param from the Intent, use LivePersonIntents.getErrorType(intent).
> - To get the message param from the Intent, use LivePersonIntents.getOnErrorMessage(intent).
>
> **Callback:** 
>
> onError(LpError lpError, String message);

| Parameter | Type | Description |
|----|----|----|
| lpError | LpError (enum)| The error.   |
| message | String        | A detailed message on the error. |

More details can be found at [LivePerson Callbacks](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#liveperson-callbacks)

## Added [LpError enum](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#lperror-enum)
```java
enum class LpError {
  IDP,
  CSDS,
  INVALID_CERTIFICATE,
  SOCKET,
  TIMEOUT,
  INVALID_SDK_VERSION,
  UNKNOWN
}
```

| Type | Description |
|----|----|
| IDP                 | An error occurred during the authentication process, which is usually because of a wrong or expired authentication key. |
| CSDS                | Error while requesting domains. |
| INVALID_CERTIFICATE | Error with a peer's certificate (server cert not valid, cert pinning mismatch, etc). |
| SOCKET              | Error opening a socket to the server or a request has timed out while trying to reach a server, and as a result we are closing our socket. |
| TIMEOUT             | A general timed out error. |
| INVALID_SDK_VERSION | Your host app is using an old SDK version and cannot be initialized. |
| UNKNOWN             | General SDK error. |

# Deprecations:
The old Error Events [ILivePersonIntentAction.LP_ON_ERROR_INTENT_ACTION](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#error-events) and [Error Callback: void onError(TaskType type, String message);](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#liveperson-callbacks) are deprecated. 

# Android Messaging SDK - Version 4.6.0

**Release date:** September 16, 2020

# Overview
Android Mobile Messaging SDK version 4.6.0 release includes  support  of auto logout with few bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.6.0 uses:
- Minimum API version 21
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(Minimum API version bump to 21. There is a known issue for API 19)**

# New Features:
## Auto logout - Improve logout options

An SDK enhancement has been added that will prevent a second customer from viewing the chat history of the customer who chatted before them, while optimizing the flow in a way that clears just the necessary set of user information in a quick manner. This new feature adds an additional layer of security to our brand’s while verifying that conversation history and information will only be available to the consumer that was logged in to the app at the time of the conversation.

### How to enable
It’s enabled out of the box -  there’s nothing the brands need to do.

Note: Auto logout works only for authenticated users. 

# Attribute Update:
[lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#lp_hide_ui_until_auth) is removed. Previous conversations will now not be displayed automatically until the consumer's authentication information is validated.

# Bugs Fixed:
- Android SDK crash due to empty RecyclerView object.
- “link_preview_enable_feature” configuration is not working as expected.
- [Messaging.reconnect()](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#reconnect) does not work when the token is not expired.
- SDK fails to connect when opened a conversation screen using a valid JWT and host app is missing reconnect mechanism.


# Android Messaging SDK - Version 4.5.0

**Release date:** July 31, 2020


# Overview
Android Mobile Messaging SDK version 4.5.0 release provides a new feature to display hyperlink with bug fixes.

## Environmental Requirements
The Android Mobile Messaging SDK version 4.5.0 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.4.2)**


# New Features:
## Hyperlink Support in Messaging

Users using the enhanced Agent Workspace have the ability to share hyperlinks with consumers during a messaging conversation. Now, they can share it with consumers that are messaging over the Mobile SDK.

<img src="img/mobilesdkhyperlinkandroid.png" alt="mobilesdkhyperlinkandroid" height="600px">

### How to enabled
- KB article: [Hyperlinks overview](https://knowledge.liveperson.com/messaging-channels-rich-conversations-hyperlinks-overview.html)
- AC feature and site settings to enable:
  - AC features : Messaging.Agent_Link_Sending
  - Site settings: le.agent.messaging.showEnhancedAgentWorkspace = true

Limitations:
- “Link Preview” will be disabled if Hyperlink in messaging is enabled.
- Hyperlink in messaging from consumer to agent is not supported.


# New Attribute:
## [enable_markdown_hyperlink](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#enable_markdown_hyperlink)
Enable or disable hyperlink support. Agent won’t be able to send hyperlink messages if set to false.

* **Type:** bool
* **Default value:** true

## [lp_markdown_hyperlink_copy_text_only](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#lp_markdown_hyperlink_copy_text_only)
Define the copy content of a link message. Copying the message will copy both message and hyperlink. Only the message will be copied if set to true.

* **Type:** bool
* **Default value:** false

## [agent_bubble_message_markdown_hyperlink_text_color](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#agent_bubble_message_markdown_hyperlink_text_color)
Set the link message text color.

* **Type:** color
* **Default value:** @android:color/white

## [enable_ime_options_action_send](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#enable_ime_options_action_send)
Enable or disable the action button of the keyboard. If enabled, pressing the action button will send a message. Multi line messages are not supported if enabled.

* **Type:** bool
* **Default value:** false

## [lp_hide_ui_until_auth](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#lp_hide_ui_until_auth)
Define if SDK shows conversation until pass authentication check.

* **Type:** bool
* **Default value:** true


# Secure Element Encryption
The SDK now performs all encryption through the system Secure Encryption Element (hardware-backed Android Keystore) on devices running Android 6.0 and higher.

To take advantage of the new encryption process on existing installations, each Host App instance should call logout() and then log back in after upgrading to this version of the SDK or later.


# Bugs Fixed:
- Optimized the logout process - logout time has been decreased with this optimization.
- Fixed a bug that the “Enter” key can’t move the cursor to a new line for some input methods. Provided a configuration “enable_ime_options_action_send” to set the behavior of keyboard action key.
- Fixed inconsistency of masked PII messages by fetching all closed conversation messages from the history server.
- Fixed a bug which would report Keystore Exceptions due to use of an old API on devices running Android P.


# Android Messaging SDK - Version 4.4.2

**Release date:** May 05, 2020

### Bug fixed
MobileSDK version 4.4.2 contains a bug fix for an unread message count not being reset on pusher.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.4.2 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.4.1)**


# Android Messaging SDK - Version 4.4.1

**Release date:** April 27, 2020

### Bug fixed
MobileSDK version 4.4.1 contains a bug fix for a history-loading issue on Unauthenticated conversations.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.4.1 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.4.0)**

# Android Messaging SDK - Version 4.4.0

**Release date:** April 23, 2020

### Overview
Android Mobile Messaging SDK version 4.4.0 release offers a few new features for devs and comes with a sizable side of bugfixes.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.4.0 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.3.2)**


### New Features:
#### Improved Unread Message Count

- Get the count of unread messages that are not yet received by the consumer's device. This API returns the count through the provided callback which is a sum of unread messages in the  open as well as closed conversation messages.
- When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.
- This API method uses a threshold mechanism of 10 seconds. If this API is called within 10 seconds from the last request was made, the counter will be returned from SDK cache otherwise a new request to the server will be made to fetch the latest count. 

**Note:** 
- This new API is available from SDK version 4.4.0
- The SDK needs to be initialized before calling this API.

{:.important}
This API will allow the user to get the count of unread messages for all conversations without the need to be registered to pusher service.

```java
public static void getUnreadMessagesCount(String appId, LPAuthenticationParams authenticationParams, final ICallback<Integer, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| callback | An [ICallback](android-callbacks-index.html) implementation |
| authenticationParams | Authentication parameters |

#### Verify your Push Registrations

- Check if the consumer's device is registered to receive push notification messages.

```java
public static void isPusherRegistered(@NonNull String deviceToken, @NonNull String appId, @NonNull LPAuthenticationParams lpAuthenticationParams, @NonNull ICallback<Boolean, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| deviceToken | The FCM device token |
| appId | The host app ID |
| lpAuthenticationParams | Authentication params |
| callback | An ICallback implementation |

#### Control your Logs
New Logging subsystem, which introduces: 
- Granular log level controls can now be set as verbose, purely-informational, or completely-off as you desire.
- Data Masking feature ensures no sensitive consumer data can be leaked through system logs, even if they're set to Verbose.
Head over [here](mobile-app-messaging-sdk-for-android-advanced-features-logging.html) to find out more!

#### Auto adjust "Scroll to bottom" button width
- The width of the "scroll to bottom" button will be auto adjusted based on length of a message text.
- The button width can be auto adjusted up to half of the device's screen size. This is applicable for both portrait as well as landscape mode.

#### Permission dialog to let consumer grant file sharing permissions
- Show a permission request dialog when a consumer has disabled or denied either the camera, file or audio permissions and later tries to access these UI element.
- When clicked on "Go To Settings" button on request dialog, consumer will be taken to app's Settings screen where they have to manually grant respective permissions.

#### New User interface to save files on consumer's device
- When decided to save a file, consumer now can choose a specific folder on their devices, SD card or upload the file to a cloud service such as Google drive.

### New Attribute:
#### [structured_content_button_background_enabled](mobile-app-messaging-sdk-for-android-sdk-attributes-5-0-and-below.html#structured_content_button_background_enabled)
Enable or disable structured content button border.

* **Type:** bool
* **Default value:** true

### Bugs Fixed:
- Corrected an issue where lost connections while sending images could cause a loading spinner to appear forever.
- Fixed an issue where lost connections while sending a file as the first message would display a confusing error.
- Adjusted the alignment of the labels beneath the Upload File Type selector icons for languages where "Gallery", "Camera", or "Document" are longer words than the UI previously accounted for.
- Removed an unnecessary API call that may have been slowing down SDK operations.
- Added static GIF images to the image type upload whitelist.
- Corrected an issue that would prevent consumers from receiving an end-of-conversation survey if the agent they were talking to closed their conversation within five seconds of the consumer sending the app to the background.
- Removed the "Agent Is Typing" indicator for filtered views that show only closed, historical conversations. (This indicator could appear as though an agent were talking in history, if there was also an open conversation visible to other filtered views.)
- Fixed faulty retry logic that would post code to the Agent console if a Consumer's authentication token expired while they were busy filling in a Secure Form.
- Reconfigured the default Drawables and animation code for the agent-is-typing 3-dots animation to allow host app implementations to override the animation via the entire animation list in addition to overriding the fixed set of frames.
- Corrected the behavior of the Voice Clip button, which would sometimes reappear even when the feature was disabled if the user performed certain background-and-foreground steps.
- Introduced extra safety-check code to ensure no messages can be sent with a String-empty text body or a text body consisting of only whitespace.
- Fixed an issue where a user looking at a history-only filtered view could have an end-of-conversation survey presented to them, if they were also in an open conversation and the agent closes it.

## Accessibility-Specific Bugs Fixed:
- The TalkBack implementation surrounding the Voice Clip feature has been refined to better articulate what the controls will do and keep the user from becoming confused as to their state while recording.
- Fixed a pair of issues surrounding left/right swipe navigation within Structured Content cards.


### Deprecations:
- The old Logging API, `LivePerson.setIsDebuggable(bool)`, has been deprecated in favor of the new Logging subsystem.
  - This API will still work for the time being:
  - Passing `true` is equivalent to calling `LivePerson.Logging.setSDKLoggingLevel(LogLevel.VERBOSE);`
  - Passing `false` is equivalent to calling `LivePerson.Logging.setSDKLoggingLevel(LogLevel.ERROR);`
- 'Signup' auth flow is officially deprecated by the LivePerson Mobile SDK, and will reach **end-of-life on the 30th of June, 2020**.
  - Please contact LivePerson through our client support channels to learn how to migrate your app to Authenticated or Unauthenticated auth flows.

# Android Messaging SDK - Version 4.3.2

**Release date:** January 29, 2020

### Overview
Android Mobile Messaging SDK version 4.3.2 release fixes a bug that might lead to a crash of the messaging service on Android KitKat(4.4).

### Environmental Requirements
The Android Mobile Messaging SDK version 4.3.2 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"


# Android Messaging SDK - Version 4.3.1

**Release date:** January 10, 2020

### Overview
Android Mobile Messaging SDK version 4.3.1 release focuses on bug fixes around file sharing in UnAuth mode.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.3.1 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"


# Android Messaging SDK - Version 4.3.0
**Release date:** December 16, 2019

### Overview
Android Mobile Messaging SDK version 4.3.0 release offers a few powerful features and improves on the TalkBack accessible experience for vision-impaired users.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.3.0 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.2.1)**

### New Features:
- Consumers can now send Word (.docx), Excel (.xlsx), PowerPoint (.pptx), and PDF (.pdf) documents to Agents.
- Photo Upload Preview window is now a child fragment of the SDK, rather than a new Activity that must push and pop on the Activity Stack.
- Scroll Behavior Configuration - clients can now use flags in our branding.xml config file to set the messaging window scroll behavior in various cases.
    - `lp_scroll_show_conversation` sets the scrolling behavior for when the SDK window is shown via a call to `showConversation` or `getConversationFragment`.
    - `lp_scroll_when_foreground` sets the scrolling behavior for when the app and SDK are resumed from a background state.
    - `lp_scroll_when_push_notification` sets the scrolling behavior for when the SDK is launched from a tap on a push notification.
    - `lp_scroll_when_scroll_down` sets the scrolling behavior for when the "scroll to bottom" UI element is tapped within the SDK window.
    - Each of these can be set to "Bottom" (auto-scrolls all the way down) or "FirstUnreadMessage" (auto-scrolls down to show the oldest unseen message).
    - `lp_scroll_show_conversation`, `lp_scroll_when_foreground`, and `lp_scroll_when_push_notification` can also be set to "LastPosition" (does not auto-scroll at all).
    - For more detailed information, see the [Scroll Behavior Configuration](mobile-app-messaging-sdk-for-android-advanced-features-scroll-behavior-configuration.html) page.
- Also added `lp_scroll_to_bottom_after_resolve_conversation`, a setting to allow enabling or disabling the auto-scroll-to-bottom when a conversation is resolved.

### Bugs Fixed:
- Conversation Resolved message should now always contain the Agent's name, rather than simply 'resolved by agent'.
- Bot agents that do not send a done-typing notice between messages will no longer cause unnecessary whitespace in message history.
- Link previews should now appear even if the link does not contain a protocol prefix (http:// or https://).
- Long-tapping a link for a context menu will no longer also attempt to open the link.
- Fixed a pair of crashes related to loading messages.
- Metadata attached to Structured Content actions is now included in the retry, if connection is lost during the first attempt.
- Corrected a typo in our Portuguese translations.

##### Accessibility-Specific Bugs Fixed:
- Links that generate Previews will now properly be described by TalkBack as links.
- Structured Content Buttons that open hyperlinks will now be described as "links" instead of "buttons".
- Links without protocol prefixes (http:// or https://) are now clickable using TalkBack.
- Phone Number and Email Address "links" (tel: and mailto:) are now clickable using TalkBack.
- Opening a photo attachment will no longer leave TalkBack focus on the screen behind it.
- Removed an extra stop when using TalkBack swipe gestures to navigate between elements of a Structured Content Carousel.
- Removed unnecessary TalkBack swipe gestures needed to navigate through Structured Content Map elements.
- Structured Content now scales with system accessibility Text Size settings, preventing cramped content elements with scaled-up text.
- Fullscreen photo view no longer erroneously suggests that the photo can be double-tapped, and will now only provide double-tap-and-hold instructions. 

### Deprecation
- 'Signup' auth flow is officially deprecated by the LivePerson Mobile SDK, and will reach **end-of-life on the 30th of June, 2020**.
    - Please contact LivePerson through our client support channels to learn how to migrate your app to Authenticated or Unauthenticated auth flows.



# Android Messaging SDK - Version 4.2.1

**Release date:** September 24, 2019

### Overview
Android Mobile Messaging SDK version 4.2.1 release focuses on internal bug fixes.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.2.1 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"



# Android Messaging SDK - Version 4.2.0

**Release date:** September 16, 2019

### Overview
Android Mobile Messaging SDK version 4.2.0 release focuses on fixing bugs and adding quality-of-life features.

### Environmental Requirements
The Android Mobile Messaging SDK version 4.2.0 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

**(unchanged from version 4.1.0)**

### New Features:
- Messages typed in the chat box are now saved when leaving and returning to the chat window
- Audio messages can now be stopped and previewed before sending them
- Added a new getUnreadMessageCount API to allow the user to get the count of unread messages without needing to be registered to receive Push Notifications
- Added Metadata support to Welcome Message Quick Replies
- Added a setting to hide the "clear history" context menu option: `clear_history_menu_item_visible` in branding.xml
- Added a setting for the color of the "attach" paperclip icon and its associated "close" icon: `lp_file_attach_icon_clip_color` and `lp_file_close_icon_clip_color` in branding.xml 
- Added a setting to adjust the maximum number of text lines that can appear in a Structured Content's button elements: `structured_content_button_no_text_lines` in branding.xml
- Added a parameter to the onCsatSubmitted callback containing the submitted survey's star rating
- Added TLSv1.2 support to the image loading library

### Bugs fixed:
- Reworked logic that caused bot avatars to not show up when fetching history; avatars should now load properly as expected
- Solved an issue where the setting for the maximum historical conversations kept on-device was not being respected
- Corrected a problem causing several environmental information fields (os version, device model, etc) to not be reported to Conversational Cloud
- Fixed a bug causing Quick Reply buttons to not appear in certain circumstances
- Moved several customizable attributes from incorrect locations to the branding.xml files
- Resolved an issue causing certain Welcome Message Quick Reply items to not appear when using Unauthenticated / Signup flows
- Squashed a bug that caused Welcome Messages to sometimes not appear when using the History Control APIs
- Fixed an issue with customization attributes for Structured Content corner rounding and background colors
- Solved a problem where customization attributes were not correctly changing certain message texts
- Fixed a bug where agents couldn't tell if a user had read their messages if the conversation was closed



# Android Messaging SDK - Version 4.1.0

**Release date:** July 25, 2019

### Overview
Android Mobile Messaging SDK version 4.1.0 primarily provides enhancements to SDK stability and Accessibility tools (TalkBack).

### Environmental Requirements
The Android Mobile Messaging SDK version 4.1.0 uses:
- Minimum API version 19
- Compile API version 28
- Target API version 28
- Maps SDK "com.google.android.gms:play-services-maps:16.1.0"


### New Features:
- Added a callback parameter to the `unregisterLPPusher` API, similar to the one that exists for the `registerLPPusher` API.
- A backwards-compatible copy of `unregisterLPPusher` without the callback has also been added, and marked Deprecated, as the version with a callback is the preferred one for all uses. 

### Bugs fixed:
- Hyperlink color property `consumer_bubble_message_link_text_color` is now properly applied to both preview-able and non-preview-able links.
- Incoming messages are no longer marked as "read" when the user is looking at the History View instead of the active conversation.
- CSAT survey screen no longer loses the Agent's information when an Agent closes and immediately re-opens a conversation.
- Image resources `lp_messaging_ui_ic_agent_avatar` and `lp_messaging_ui_brand_logo` can now both be overridden with Vector Drawables in the `drawable` folder, where previously a workaround was required.
- Corrected several instances of String resources not respecting the SDK language settings, instead picking up the device language.
- Pressing the scroll-to-bottom button while in an Unauthenticated flow no longer occasionally crashes the SDK.
- Automatic Messages now correctly adapt to the relevant language settings in circumstances that previously caused a mismatch.
- Using the Control History API while in Fragment Mode will no longer show a blank screen instead of a "no conversations" message.
- Using Quick Replies and Emojis no longer occasionally duplicates the unread message banner.
- Fixed several issues related to what TalkBack reads to users.

### Important Notes for Developers
- Resource misspelled as `snachbar_duration_for_accessibility` has been renamed to `snackbar_duration_for_accessibility`; if you override this value, please update the override accordingly.
- PushMessage method misspelled as `getCurrentUnreadMessgesCounter()` has been renamed to `getCurrentUnreadMessagesCounter()`; if you use this method, you will need to update it in your code.
- Class `MonitoringParams` was moved from package `com.liveperson.sdk` to `com.liveperson.monitoring.sdk` to better reflect its class associations; updating your `import` statements may be necessary.
- Interface `EngagementCallbacks` was moved from package `com.liveperson.sdk.callbacks` to `com.liveperson.monitoring.sdk.callbacks` to better reflect its class associations; updating your `import` statements may be necessary.



# Android Messaging SDK - Version 4.0.0

**Release date:** July 8, 2019

### Overview
Android Mobile Messaging SDK version 4.0.0 provides Android P support. 
Built with Maps SDK "com.google.android.gms:play-services-maps:16.1.0"

### Environmental requirements
The Android Mobile Messaging SDK version 4.0.0 requires the minimum Android API version 19, SDK is compiled against API 28 and targeted API is 28.



## Android Messaging SDK - Version 3.9.0

**Release date:** June 18, 2019

#### Environmental requirements
The Android Mobile Messaging SDK version 3.9 requires the minimum Android API version 19, SDK is compiled against API 26 and targeted API is 27.

#### New feature

##### Photo and File sharing

Mobile Messaging SDK v3.9 introduces a feature for agents within Conversational Cloud to share photos or files with the consumers.    

Agents can share:

- **Photos:** Reference photos or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. The agent can also share photos in a resolved conversation to resume the conversation with the consumer.  Consumers can tap on the photo to view it full screen or share it through the default app on their device.   

- **Files:** Agents can also share files to provide consumers with information such as mortgage documents, product catalog, or transaction details as requested by consumers. They can also share files in a resolved conversation to resume the conversation with the consumer. Consumers can download files through the picker application to a location on their device (internal or external).

   {:.important}
   The Android SDK supports opening any file types other than images through the picker application. The consumer can either long click on the thumbnail or open the file through picker application to share and save the file.


When the agent shares any supported file type from the LE, if the consumer isn't within the conversation view, they get a notification from the customer app only if the push notification is enabled. Otherwise, when the consumer returns to the conversation screen, a thumbnail for the photo or file appears in the conversation window.


##### Supported formats

- PNG
- JPG/JPEG
- GIF (non-animated) - previewed as a static image only
- PDF
- DOCX
- PPTX
- XLSX

##### Photo and file sizes

- Thumbnail - 30 KB (base64-encoded)
- Max upload size allowed - 5 MB uncompressed

   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB.

##### Notes and limitations

- Photo sharing is two way (agent-to-consumer and consumer-to-agent), but file sharing is one way only (agent-to-consumer) for now.

   **For SDKs previous to 3.8:** Photo sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Message SDK only.

- If an attempt to view a photo or file is unsuccessful, an error icon covers the thumbnail. Upon retry, the file attempts to download again. Retry can be attempted as many times as possible (in case of a poor network) until the file is downloaded successfully.

- The consumer can return to a resolved conversation to view the photos, as long as the photos are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format. On the consumer side, they see an empty message with no content.

- For authenticated users, backgrounding the app while loading the photo does not get interrupted.

- For unauthenticated sessions, consumers must tap the photo again with each visit because the history gets cleared when a session expires or logs the consumer out.

- **For Android SDK 3.0 on an Oreo Device (8.0 &amp; 8.1).** Add support for Notification Channel.

##### How photo and file sharing works

<img src="/img/photo-file-sharing-diagram.png" alt="How photo and file sharing works" style="width: 600px;padding: 20px;">

---   

##### Step 1. Enable or disable 

1. Change the boolean value:

   ```java
   <bool name="enable_photo_sharing">
   ```
   
   By default, this value is set to **false**.

   ```java
   <bool name="enable_file_sharing">
   ```

   Starting in v3.9, the default value is set to **true**.

2. Contact your Account Team to have the feature enabled on your account.

##### Step 2. Change settings

1. Set the max number of photos or files to save on disk:

   ```java
   <integer name="max_number_stored_images">

   <integer name="max_number_stored_documents">

   <integer name="max_number_stored_voice_files">
   ```

   The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest downloaded file.

2. Set the max image size:

   ```java
   <integername="max_image_size_kb">
   ```

   The default max image is 3000kb.

   **Important:** At this time, you can only set the max image size.

3. Change the color of the attachment menu:

   ```java
   <colorname="attachment_menu_item_background_color">

   <colorname="lp_attachment_menu_background_color">

   <colorname="lp_attachment_menu_item_text_color">

   <colorname="lp_attachment_menu_item_icon_color">
   ```

4. Change the text of buttons:

   ```java
   <stringname="lp_accessibility_gallery">

   <stringname="lp_accessibility_camera">
   ```

5. Define the max number of stored images allowed locally.

   ```java
   <integername="max_number_stored_images">
   ```

   The default max number is 20.

6. Define the resize dimensions:

   ```java
   <integername="thumbnail_longer_dimension_resize">
   ```

   The default thumbnail dimension is 100.

   ```java
   <integername="full_image_longer_dimension_resize">
   ```

   The default full image dimension is 800.

7. Set the compression rate (percentage) for full images:

   ```java
   <integername="full_image_compression_rate">
   ```

   The default compression rate is 50.

Other configurations can be found in the [Attributes](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html) section of the Dev Community.



# Android Messaging SDK - Version 3.8.1

**Release date:** June 13, 2019

Android Mobile App SDK v3.8.1 fixed one bug.

#### Environmental requirements
The Android Mobile Messaging SDK version 3.8.1 requires the minimum Android API version 19, SDK is compiled against API 26 and targeted API is 27.

#### Bug fixed
Reported in SDK 3.8.0 on Android. When the conversation history for an authenticated user has the SUGGESTED_ASSIGNED_AGENT role assigned in it, the app crashed.



# Android Messaging SDK - Version 3.8.0

**Release date:** May 17, 2019

Android Mobile App SDK v3.8.0 introduces a new feature.

#### Environmental Requirements

The Android Mobile Messaging SDK version 3.8 requires the minimum Android API version 19, SDK is compiled against API 26 and targeted API is 27.


#### New Feature

##### Welcome message with quick reply options

Version 3.8 of the Mobile Messaging SDK introduces a Welcome message with quick reply options in the conversation window. When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents.

You can configure the Welcome message as a simple text message with or without quick replies, for example: 

> *Welcome to our support! What can we help you with today?*   
> 
> *[Questions about existing account] [open a new account] [tech support]*

A consumer’s quick reply selection or answer gets inserted as their first message in the conversation, which opens the conversation in the Conversational Cloud agent workspace. 

##### How to enable

```java
LPWelcomeMessage lpWelcomeMessage = new LPWelcomeMessage("Welcome Message");
List<MessageOption> optionItems = new ArrayList<>();
optionItems.add(new MessageOption("bill", "bill"));
optionItems.add(new MessageOption("sales", "sales"));
optionItems.add(new MessageOption("support", "support"));
try {
       lpWelcomeMessage.setMessageOptions(optionItems);
} catch (Exception e) {
       e.printStackTrace();
}
lpWelcomeMessage.setNumberOfItemsPerRow(8);
lpWelcomeMessage.setMessageFrequency(LPWelcomeMessage.MessageFrequency.EVERY_CONVERSATION);
conversationViewParams.setLpWelcomeMessage(lpWelcomeMessage);
LivePerson.showConversation(Activity, LPAuthenticationParams, conversationViewParams);

```

If set empty String in constructor `LPWelcomeMessage(String welcomeMessage)`, the welcome message with quick reply feature will be disabled. It shows the default welcome message, which is set up in the String resources `lp_first_message`.

There are two parameters in the MessageOption class constructor.

```java
public MessageOption(@NonNull String displayText, @NonNull String value)
```

- **displayText** is the text displayed in the quick reply button.
- **value** is the content that is sent to the agent. Default value is displayText if set to empty String.


There are two message frequencies: 
- **FIRST_TIME_CONVERSATION:** Shows the welcome message for first conversation only.
- **EVERY_CONVERSATION:** Shows welcome a message for every new conversation.


##### Limitations  

You can configure up to 24 quick reply options for the user to chose.

- You have a maximum of 25 characters for your title, but anything over displays an ellipsis after the 22nd  character.  When building your client, you have control over the character limit for the title.

- Once you set `itemsPerRow` (max 8), the number of rows calculate automatically (up to 3 rows). If the number of replies exceeds `itemsPerRow` times 3, the extra replies get added to the last row.

- When the consumer ends the conversation, the window remains open, and the Welcome message appears again. The message frequency should be set to `EVERY_CONVERSATION`.

- Quick reply messages do not get recorded in the conversation history.

- The conversational metadata (ExternalId) does not get populated.
   ```json
   "metadata": [
   {
   "type": "ExternalId",
   "id": "Yes-1234"
   }
   ]
   ```  

#### Bug Fixes

- **For Android 9 only.** Calling `hideConversation()` while app is in the background caused the app to come to the foreground. When having multiple apps and the consumer has one CustID across all apps, the consumer could not log out of all apps bringing the other app to the foreground.

- Data masking message displayed after sending SecureForm. When setting the `enable_client_only_masking` bool to **true**, and the customer sent a SecureForm, the “Your personal data has been masked to protect your security. Only the agent can read it.” system message appeared. 

- The Unread Message Divider separator appeared after the agent resumed conversation. If the agent closed the conversation but reopened it by sending a new message, the Unread divider appeared above the new message when it should not appear.  
   
   By default, the Unread Message Divider separator appears in the message view.   When enabled, this feature does not prevent the badge or message text from displaying on the **Scroll to Bottom** button. Instead, the Unread Message Divider system message displays above the unread messages within the view of the user when returning to the conversation view. When disabled, the separator does not appear, and the unread message badge count displays on the **Scroll to Bottom** button. 

- Scroll bar did not scroll to the bottom with specific branding settings. When setting the `enable_conversation_resolved_separator` and `enable_conversation_resolved_message` bool to **false** the scroll bar did not scroll to the bottom. The bug prevented users from scrolling to the bottom of the message. 

- Skipping PCS showed Quick reply JSON. If PCS is activated and you send messages, close the conversation, and then skip the PCS it resulted in showing the quick reply JSON in RAW form. 



# Android Messaging SDK - Version 3.7.0

**Release date:** April 1, 2019


Android Mobile App SDK v3.7.0 contains fixes for high priority bugs reported by customers.

#### Environmental Requirements

Android Mobile App SDK v3.7.0 requires the minimum Android API version 19, SDK is compiled against API 26 and targeted API is 27.

#### Bug Fixes

* Android SDK crashed with ClassCastException.

* Client Masking Ignored when Logged out from Authenticated conversation and Logged back in as UnAuthenticated user.

* Conversation bubble is empty if the agent sends empty structured content.

* TalkBack was reading hidden conversation content behind a Secure Form.

* Secure Form was not announced to the consumer in TalkBack.

* TalkBack did not announce out of view contents from Structured Content.

* CSAT question sent via PCS was not visible in the Conversational Cloud UI conversation info widget.

* Android SDK crashed with IllegalArgumentException.

* Android SDK failed while trying to send an image via photo sharing.

* Android KitKat did not support TLSv1.2.

* TalkBack did not announce all elements in Secure Form upon arrival.



# Android Messaging SDK - Version 3.6.1

**Release date:** March 8, 2019

Android Mobile App SDK v3.6.1 contains a new API call to enable/disable SDK logs.

#### Environmental Requirements

Android Mobile App SDK v3.6.1 requires the minimum Android API version 19, SDK is compiled against API 26 and targeted API is 27.

#### Bug Fixes

SDK logging information is not available while the host application is running in debug mode.

#### New APIs

|     API      | Description |
| ------------ | ------------ |
| public static void setIsDebuggable(boolean isDebuggable) | Use this api to enable/disable the SDK logs. |

Note: SDK logging is disabled by default. To Enable it, use the above method.

Example:
`Liveperson.setIsDebuggable(BuildConfig.DEBUG)`



# Android Messaging SDK - Version 3.6.0

**Release date:** February 12, 2019

Android Mobile App SDK v3.6.0 contains fixes for high priority bugs reported by customers.

#### Environmental Requirements

Android Mobile App SDK v3.6 requires the minimum Android API version 19 and targeted API is 27.

#### Bug Fixes

* Unauthenticated user failed to connect when passing campaign information.

* Loading spinner is stuck even when conversation History is loaded.

* Failed to establish conversation when airplane mode was enabled or disabled multiple times while network connection was poor.

* TalkBack does not read agent name when a message was clicked.

* Resumed conversation with unauthenticated user does not show campaign info on agent side when `contextId` is null.

* "http://" was appended as prefix for customized links (Deep Links).

* Wrong value for unread message count on scroll down indicator.

* Entire structured content component receives focus when tapped.

* Released SDK build displays debug, info and warning logs.

* Links and text in agent message truncated on changing chat_bubble_padding to non-default values.



# Android Messaging SDK - Version 3.5.0

Android Mobile App SDK v3.5 contains fixes for high priority bugs reported by customers.

#### Environmental Requirements

The SDK’s minimum API is 19 and the target API is 27.

#### Bug Fixes

* When using unauthenticated messaging and setting the history flag to false, in case the conversation was resolved while the SDK was in the background, the conversation screen will be stuck and the consumer will not be able to start a new conversation.

* SDK uses an old authentication token, even when the consumer is passed a new auth token.

* User conversation system info (OS Type & Device) is not updated in Conversational Cloud when a consumer switches between IOS and Android.

* Unauthenticated consumers passing campaign info cannot connect successfully.

* Conversation close event has been added to be triggered when hideConversation() is called.

* Accessibility - When Voiceover was turned on, opened Secure form can read hidden message.

* Multiple "Missing current dialog" appear in the logs after a consumer clears history resulting a slow connection establishment.



# Android Messaging SDK - Version 3.4.0

Android Mobile App SDK v3.4 contains fixes for high priority bugs reported by customers and a new call back for leaving the conversation screen. There is one API change which will be explained in this document.

#### Environmental Requirements

The SDK’s minimum API is 19 and the target API is 27.

#### Main Features

The `onConversationFragmentClosed` callback is returned when a consumer leaves the conversation screen.

**Available to all customers**? Yes.

**Description**

When a consumer leaves the conversation screen, the call back `onConversationFragmentClosed` will be returned.

#### Bug Fixes

* When using unauthenticated messaging and setting the history flag to false, in case the conversation was resolved while the SDK was in the background, the conversation screen will be stuck and the consumer will not be able to start a new conversation.

* Accessibility - When Voiceover was turned on, the Secure Forms ‘X’ button read “Unlabeled Button”.

* Accessibility - When Voiceover was turned on, messages inside the conversation window read as actionable items.

* Accessibility - When Voiceover was turned on, the Secure Form title was skipped.

* Monitoring APIs - SDK was not using the returned VID when querying "getEngagement" request. This might have caused a longer time for getting a response.

* Accessibility - When Voiceover was turned on, the talk over tried to read a blank area inside the CSAT field.

* During conversation, a "no internet connection" message was displayed but the send button was enabled.

* Monitoring APIs URLs were using HTTP instead of HTTPS.

* When using registerLPPusher with authentication parameters and opening the conversation screen before JWT renewal was completed, the authentication process would go into an infinite loop. **Please note the API change explained below**.

* SetUserProfile behaveed differently on iOS and Android for the `phonenumber` attribute.

* In some cases, when opening the conversation screen with a filter for presenting only the closed conversations, the “There are currently no conversations at the time” message appeared.

* In some cases, when the consumer went into the conversation via push notification and then out multiple times, the app could crash with IndexOutOfBounds exception.

#### API Changes

##### updateTokenInBackground

**Description**: When using registerLPPusher with authentication parameters for JWT renewal (JWT renewal when in background) the authentication process will go into an infinite loop. In order to solve the issue we’ve introduced a new API to separate the register to push and updating the token when in background.

**How to use**? When JWT expires, the `onTokenExpired()` callback is called. If the screen is in the background the host app should use the new API `updateTokenInBackground()` with new authentication parameters instead of calling r`egisterLPPusher()`.

**Note**: No change in cases where the screen is in foreground - host app should call `reconnect()` to renew the JWT.

##### Code sample

```java

@Override
 public void onTokenExpired() {

 String jwt = generateNewJwt(); // A host app method

 LivePerson.updateTokenInBackground("1234567", new LPAuthenticationParams().setAuthKey(jwt));

}
```



# Android Messaging SDK -  Version 3.3.0

Android Mobile App SDK v3.3.0 contains support for the Post Conversation Survey feature, update for Google Map’s API key meta tag and addresses several bugs reported by customers.

#### Environment Requirements

The SDK’s minimum API is 19 and the target API is 27.

#### Main Features

##### Post Conversation Survey

**Available to all customers?**  No. Please contact account team.

**Description**

The post conversation survey enables brands to both collect feedback and measure their success from their consumers after conversations have taken place. The survey is delivered via a conversational experience to drive higher completion rates and provide consumers with the best experience possible.

Brands can customize the survey to their needs, including predefined questions (CSAT, NPS and FCR), custom questions and free text, as well as the ability to configure the logic and flow from question to question.

This enables brands to prove the success of messaging and compare their KPIs across different channels. Additional information about Post Conversation Survey can be found [here](https://s3-eu-west-1.amazonaws.com/ce-sr/botstudio/Conversation+Survey+-+Configuration+Guide.pdf) .

#### Update for Google Maps API key meta tag

**Available to all customers?** Yes.

**Description**

Update the Google Maps API key meta tag from `com.google.android.maps.v2.API_KEY` to `com.google.android.geo.API_KEY`.

* The Geo key meta tag is backwards compatible with V2 keys.

* Brands who do not specify the Maps API key meta tag in the app’s `Manifest.xml`, do not need to perform any change.

* Brands who specify the the Maps API key meta tag in the app’s Manifest.xml as `com.google.android.maps.v2.API_KEY` should change it to `com.google.android.geo.API_KEY`.

#### Bug Fixes

* Improper exception handling would cause the host application to freeze.

* Sporadic crashes when conversations are initiated, when the 3.2.1 version of the Mobile App SDK was used on Android platform version 4.4.2.

* Consumer’s OS parameter is missing from the agent workspace.

* Redundant animation to indicate new messages from agent, when using ("show_agent_typing_in_message_bubble”).

* When a message fails to be sent, subsequent messages may also fail when they should be re-sent successfully.

* Invalid JWT authentication token causes host application to freeze after retry mechanism has been complete.

* Not registering to push notifications will result in a failure to logout from the SDK.

* `getNumUnreadMessages` function returns wrong value after clear history is performed.

* The host app crashed when it tried to access the application context, after process is killed by Android OS.

#### Known Issues

* When using `registerLPPusher` with authentication parameters and opening the conversation screen before JWT renewal was completed, the authentication process will go into an infinite loop.

* Monitoring APIs URLs are using HTTP instead of HTTPS. This can changed by replacing the current URLs with the following:

`<string name="get_engagement_url">https://%1$s/api/account/%2$s/app/%3$s/engage ment?v=1.0&lt;/string>`

`<string name="send_sde_url"> https://%1$s/api/account/%2$s/app/%3$s/report?v=1.0&lt ;/string >`

* In some cases, the assigned agent details are not presented in the CSAT form.



# Android Messaging SDK -  Version 3.2.2

**Version 3.2.2 release: September 9th 2018**

This release of the Android Mobile App SDK v3.2.2 is primarily focused on assessing critical bugs reported by LivePerson’s support & solution teams. This release version does not include new features or behavior changes.

#### Environment Requirements
The SDK’s minimum API is 19 and the target API is 27.

#### Bug Fixes

1. Improper exception handling would cause the host application to freeze.

2. Sporadic crashes when conversations are initiated, when the 3.2.1 version of the Mobile App SDK was used on Android platform version 4.4.2.

3. Consumer’s OS parameter is missing from the agent workspace.

4. Redundant animation to indicate new messages from agent, when using `show_agent_typing_in_message_bubble`.

5. When a message fails to be sent, subsequent messages may also fail when they should be re-sent successfully.

6. Invalid JWT authentication token causes host application to freeze after retry mechanism has been complete.

#### Known Issues

The following issues are still being investigated & have been prioritized for a subsequent release based on their frequency of occurrence and severity:

1. Audio/Image message fails to be sent, when it is the first message in the conversation.

2. Infrequent crash when initializing the SDK for Authenticated mode and providing an empty/null JWT.

3. Conversation is not auto-scrolled to bottom when sending a message, if the Agent is typing and `show_agent_typing_in_message_bubble` is set to true.

4. When an expired authentication token is used to register for push notifications, the registration does not complete and OnTokenExpire does not trigger Customers should notify support if they are seeing any increase of frequency or impact from any of the following issues.



# Android Messaging SDK -  Version 3.2

**Version 3.2 release: July 1st 2018**

#### Main Features

##### Audio Messaging

**Type:** Consumer Experience Feature  

**Available to all customers?** No. Please contact your account team.

Consumers are now able to send Audio messages to brands which makes the communication even easier.

In Audio messages the Brands can configure:

1. The maximum length of the message (15 seconds - 2 minutes long by default)

2. Enable/Disable the feature

3. Max stored audio messages on device

4. Tooltips text

##### Unauthenticated In-App Messaging

**Type:** Developer Experience Feature

**Available to all customers?** Yes

Brands can communicate with their consumers in an unauthenticated manner while being able to leverage additional Conversational Cloud capabilities such as Campaigns for Messaging.

Unauthenticated messaging allows brands to:

1. Easier & quicker on-boarding to Conversational Cloud

2. Having pre authentication messaging use cases, for example, assistance with password recovery

3. The ability to use Campaigns for Messaging while having unauthenticated conversations

##### Quick Replies

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

Quick Replies enrich the consumer experience by using rich text interactions that guide the consumer throughout the conversation. The consumer is presented with number of brief answers that can be selected in order to navigate the conversation in the right path.

The quick replies can contain the same actions as Structured Content buttons:

1. Publish Text

2. Link

3. Navigation

As Quick Replies contain predefined values, it can dramatically improve communication with Bots and improve both consumer experience and operational efficiency.

##### Structured Content Carousel

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

Structured Contend experience is enriched with the Carousel allowing more capabilities, more use cases and moving agents one step forward in being able to provide end to end assistance.

The Carousel consists of more than one card at a time, side by side and the consumer can swipe between cards.

##### New Devices Certification

The following devices are now also supported and/or certified to host our In-App Messaging SDK:

<table>
<thead>
  <tr>
    <th></th>
    <th>Operating system</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>Device</td>
    <td>v5.X (Lollipop)</td>
    <td>v6.X (Marshmallow)</td>
    <td>v7.X (Nougat)</td>
    <td>v8.X (Oreo)</td>
  </tr>
  <tr>
    <td>Xiaomi Mi 6</td>
    <td>---------</td>
    <td>---------</td>
    <td>---------</td>
    <td>Certified</td>
  </tr>
  <tr>
    <td>Galaxy S9*</td>
    <td>---------</td>
    <td>---------</td>
    <td>---------</td>
    <td>Certified</td>
  </tr>
</tbody>
</table>


* **Photo Sharing functionality is limited on the device. Only photos which were <strong>not</strong> taken by the device can be shared**

##### Experience and Branding Enhancements

**Type:** Consumer Experience Feature

**Available to all customers?** Yes

The SDK allows Brands to customize the SDK even more, giving a personal touch to their customers.

**Large Emojis**

When using Emojis in a conversation:

1. One Emoji - The Emoji will be enlarged to a Extra Large size

2. Two Emojis - The Emojis will be enlarged to a Large size

3. More than two Emojis or Emojis with text - The Emojis size will be small

**Conversation Window Background Image**

A new way for Brands to set their own background to conversation to add a more personal touch. As in fragment mode, LivePerson does not have control over the Activity which contains the conversation window fragment, this feature works only in Activity mode. In Fragment mode, brands can add the background picture on the Activity window.


#### New APIs

<table>
<thead>
  <tr>
    <th>API</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>public static void registerLPPusher(String brandId, String appId, String gcmToken,
LPAuthenticationParams authenticationParams,final ICallback<Void, Exception> registrationCompletedCallback)</td>
    <td>added authenticationParams parameter. If passed, this method will register immediately to LPPusher without needing to open the conversation view first (showConversation).
New registrationCompletedCallback callback parameter will be called back when registration to LPPusher is succeed or failed</td>
  </tr>
  <tr>
    <td>public static void getEngagement(Context context, @Nullable ArrayList&lt;LPMonitoringIdentity&gt; identities,                            MonitoringParams monitoringParams, EngagementCallback callback)</td>
    <td>List&lt;LPMonitoringIdentity&gt; replaced previous consumerId parameter - an array of identity objects of type LpMonitoringIdentity which includes the details of the consumer</td>
  </tr>
  <tr>
    <td>public static void sendSde(Context context, @NonNull ArrayList&lt;LPMonitoringIdentity&gt; identities,
@NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
    <td>List&lt;LPMonitoringIdentity&gt; replaced previous consumerId parameter - an array of identity objects of type LpMonitoringIdentity which includes the details of the consumer</td>
  </tr>
  <tr>
    <td>Class LPMonitoringIdentity</td>
    <td>A new class that contains String consumerId, String issuer to provide identities to the new getEngagement() and sendSde() methods (Monitoring API)</td>
  </tr>
  <tr>
    <td>LPAuthenticationType → Added new enum instance to LPAuthenticationParams</td>
    <td>This enum is used for determine the authentication type with the following options:
SIGN_UP (default) // old unauthenticated method. Is deprecated as of July 2019
UN_AUTH
AUTH</td>
  </tr>
</tbody>
</table>


#### Deprecated APIs

<table>
<thead>
  <tr>
    <th>API</th>
    <th>Description</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>@Deprecated
public static void registerLPPusher(String brandId, String appId, String gcmToken)</td>
    <td>See new APIs for the new API</td>
  </tr>
</tbody>
</table>


#### Removed APIs

<table>
<thead>
  <tr>
    <th>API</th>
    <th>Description</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>public static void getEngagement(Context context, @Nullable String consumerId
MonitoringParams monitoringParams, EngagementCallback callback)</td>
    <td></td>
  </tr>
  <tr>
    <td>public static void sendSde(Context context, @NonNull String consumerId,
@NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
    <td></td>
  </tr>
</tbody>
</table>


#### Configurations

##### Experience and Branding Enhancements

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>is_enable_enlarge_emojis</td>
    <td>When true, user and remote user messages containing one or two emojis will be enlarged in chat. Messages with one emoji will be the largest, two emojis will be large, and 3 or more will be displayed as normal text.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>conversation_background</td>
    <td>Sets the conversation background image</td>
    <td></td>
  </tr>
</tbody>
</table>


##### Link Preview

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>agent_bubble_link_preview_background_stroke_color</td>
    <td>The border color of the link preview bubble sent by the agent.</td>
    <td>#EDEDED
</td>
  </tr>
  <tr>
    <td>agent_bubble_link_preview_background_stroke_width</td>
    <td>The border width of the link preview bubble sent by the agent.</td>
    <td>1dp
</td>
  </tr>
  <tr>
    <td>consumer_bubble_link_preview_background_stroke_color</td>
    <td>The border color of the link preview bubble sent by the consumer.</td>
    <td>#EDEDED</td>
  </tr>
  <tr>
    <td>consumer_bubble_link_preview_background_stroke_width</td>
    <td>The border width of the link preview bubble sent by the consumer.
</td>
    <td>1dp</td>
  </tr>
</tbody>
</table>


##### Structured Content

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>structured_content_bottom_right_radius</td>
    <td>Sets the radius of the bottom right corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_top_left_radius</td>
    <td>Configuration for top left corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_top_right_radius</td>
    <td>Configuration for top right corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_bottom_left_radius</td>
    <td>Configuration for bottom left corner radius of structured content card. </td>
    <td>0dp </td>
  </tr>
  <tr>
    <td>structured_content_background_color
</td>
    <td>The background color of structured content card</td>
    <td>#FFFFFF</td>
  </tr>
  <tr>
    <td>conversation_background
</td>
    <td>The background image of conversation screen</td>
    <td>No value</td>
  </tr>
</tbody>
</table>


##### Audio Messaging

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lp_record_max_time_seconds</td>
    <td>Maximum voice recording time in seconds</td>
    <td>120 seconds</td>
  </tr>
  <tr>
    <td>max_number_stored_voice_files</td>
    <td>Maximum number of voice files stored on the device</td>
    <td>20 messages</td>
  </tr>
  <tr>
    <td>enable_voice_sharing</td>
    <td>Enable/disable voice sharing</td>
    <td>false</td>
  </tr>
</tbody>
</table>


##### Quick Replies

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lpui_quick_reply_button_vertical_padding</td>
    <td>Quick Replies button padding above and below the button text</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_horizontal_padding</td>
    <td>Quick Replies button padding on right and left of button text</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_vertical_margin</td>
    <td>Quick Replies button margin below</td>
    <td>12dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_horizontal_margin</td>
    <td>Quick Replies button margin to the right</td>
    <td>8dp</td>
  </tr>
  <tr>
    <td>lpui_quick_reply_button_border_width</td>
    <td>Quick Replies button border width</td>
    <td>1dp</td>
  </tr>
</tbody>
</table>


##### Deprecated Configurations

<table>
<thead>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>enter_message_divider_visible</td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>


#### Strings Localization

##### Audio Messaging

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lp_accessibility_voice</td>
    <td>Accessibility on the mic button</td>
    <td>"Voice"</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_long_press</td>
    <td>Tooltip shown when short tapping the mic button. </td>
    <td>“Long tap to record”</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_release</td>
    <td>Tooltip shown when keeping mic tapped.</td>
    <td>“Release for recording”</td>
  </tr>
  <tr>
    <td>lp_mic_tooltip_max_recording</td>
    <td>Tooltip shown when the maximum recording time reached.</td>
    <td>“Recording limit has been reached, click to send”</td>
  </tr>
</tbody>
</table>


##### Unauthenticated In-App Messaging

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lp_new_unauth_user_dialog_title
</td>
    <td>The title of the presented dialog when the identity is expired.</td>
    <td>"New Conversation"</td>
  </tr>
  <tr>
    <td>lp_new_unauth_user_dialog_message
</td>
    <td>The body of the presented dialog when the identity is expired.</td>
    <td>“Hi there! As we haven't seen you for a while, we're opening a new conversation for you”</td>
  </tr>
  <tr>
    <td>lp_new_unauth_user_dialog_positive_button
</td>
    <td>The button of the presented dialog when the identity is expired.</td>
    <td>“Ok”</td>
  </tr>
</tbody>
</table>


##### Quick Replies

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Default text</th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>lpmessaging_ui_quick_replies_section</td>
    <td>Accessibility string when hovering on the Quick Replies control</td>
    <td></td>
  </tr>
  <tr>
    <td>lpmessaging_ui_quick_replies_button_content_description
</td>
    <td>Accessibility string when hovering on the Quick Replies button
</td>
    <td></td>
  </tr>
</tbody>
</table>


#### Features Enablement Chart

<table>
<thead>
  <tr>
    <th>Feature</th>
    <th>Backend update</th>
    <th>Backend enablement</th>
    <th>Backend configuration </th>
    <th>SDK enablement </th>
    <th>SDK configuration </th>
  </tr>
  </thead>
<tbody>
  <tr>
    <td>Audio Messaging</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Unauthenticated Messaging</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Quick Replies</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Structured Content Carousel</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Branding Enhancements</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
</tbody>
</table>



# Android Messaging SDK -  Version 3.1

These are the main feature releases available in the **Mobile App Messaging SDK version 3.1 for Android**.

**Version 3.1 planned roll-out: March 18h 2018**

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.4.pdf)

#### New functionalities

##### Campaigns for Messaging - Monitoring APIs

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

The addition of campaigns for mobile app and web messaging will allow brands to manage their engagements easily and efficiently across these channels, targeting customers based on unauthenticated attributes or locations and routing them to a desired skill.

Being able to track customer activity in all areas of the brand app and provide information on these interactions to Conversational Cloud boosts agent efficiency and enables more accurate reporting.

Using the Monitoring APIs, brands can:

1. Report on the customer’s journey inside the app

2. Get engagements based on the reported SDEs

3. Route conversations to a specific skill (based on engagements)

##### Monitoring APIs

The below APIs enable brands to use Campaigns for Messaging inside the brand’s app

<table>
<thead>
 <tr>
 <th>New APIs</th>
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>Added to Liveperson.initialize() →
InitLivePersonProperties contains new MonitoringInitParams object</td>
 <td>Added new optional MonitoringInitParams object. Brands who wish to use Monitoring capabilities & campaigns should add the required parameters.
The SDK can be initialized once without MonitoringInitParams and then have another initialize call using these params.
</td>
 </tr>
 <tr>
 <td>CampaignInfo was added to ConversationViewParams (used in showConversation() and getConversationFragment())
</td>
 <td>Added new optional CampaignInfo object to be able to pass a new campaign information to conversation.
Campaign includes Engagement info which allows to control the consumer's routing.</td>
 </tr>
 <tr>
 <td>New BadArgumentException was added.
</td>
 <td>CampaignInfo has three mandatory members: campaignId, engagementId and engagementContextId. If constructing CampaignInfo with one of them null or empty BadArgumentException is thrown.</td>
 </tr>
 <tr>
 <td>getEngagement(Context context, @Nullable String consumerId, MonitoringParams monitoringParams, EngagementCallback callback)</td>
 <td>Use this API to get an engagement for a consumer in an appInstallationId context. When calculating eligibility the decision is based on the SDEs and other parameters. Based on messaging campaign concept
As an optional parameter, you can pass MontoringParams which includes PageId, Entry Points and Engagement Attributes for routing the conversation.
- Parameters:
      - context: application context
      - consumerID: an optional brand app consumer ID to get the engagement for
      - monitoringParams: an instance of includes optional PageId, JSONArray of Entry Points and a JSONArray of Engagement Attributes
      - EngagementCallback: operation callback:
    onSuccess() response with LPEngagementResponse that contains pageId, sessionId, visitorId and engagementDetailsList
   onError() response with the MonitoringErrorType</td>
 </tr>
 <tr>
 <td>sendSde(Context context, @NonNull String consumerId, @NonNull MonitoringParams monitoringParams, SdeCallback callback)</td>
 <td>Use this API to report an engagement attributes (SDEs) for a consumer in an appInstallationId context.
- Parameters:
      - context: application context
      - consumerID: brand app consumer ID to get the engagement for
      - monitoringParams: an instance of LPMonitoringParams includes optional Array of Entry Points and an optional dictionary of Engagement Attributes. Additional optional parameter is PageID which is used for Page identification for sending events on the current engagement. PageID will be received in LPSdeResponse and in LPtEngagementResponse
    - SdeCallback: operation callback:
    onSuccess() response with LPSdeResponse that contains pageId, sessionId and visitorId
   onError() response with the MonitoringErrorType
</td>
 </tr>
 </tbody>
</table>

**Please note: while the APIs are already available in the SDK, the backend will be available in mid-April. Please consult your account team before using the APIs.**

**The following additional conditions and configurations are required:**

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
 </tbody>
</table>


##### Conversation History Control

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

To enhance control of customer data retention, scalability and performance, and support the EU’s General Data Protection Regulation (GDPR), open conversations will be loaded from a real time service while closed conversations will be loaded from a history service.

The change will be **seamless** for brands who upgrade to SDK version 3.1. Brands choosing not to upgrade to SDK v3.1 will be able to view the conversation history from the last 14 days. The history stored on the consumer’s device will also be available.

The following additional conditions and configurations are required:*

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
 </tbody>
</table>


##### History and Active Conversation View

**Type:** Developer Experience Feature

**Available to all customers?** Yes.

New APIs will give brands control over the conversations presented in the conversation window. For example, brands can choose to present only the last 180 days of conversation history.

These APIs can be used together with getengagement (Monitoring APIs) to decide how to present  conversations history according to whether there is an open conversation or not. For example, if there is no open conversation, brands can present a ‘View conversation history’ button which will present only the closed conversations from the last 180 days.

The new APIs allows:

* Getting an indication if there is an open conversation or not (Monitoring APIs)

* Controlling which conversations will be presented by status (open\closed)

* Controlling the time frame of presented conversations (by days)

 * When using historyConversationsMaxDays, LPConversationHistoryMaxDaysDateType will decide if to filter by the conversations' start date or end date. When not providing a value, startConversationDate will be the default.

##### History and Active Conversation APIs

<table>
<thead>
 <tr>
 <th>New APIs</th>
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationsStateToDisplay</td>
 <td>Allows to control which conversation will be presented when opening the conversation screen, by status (open or closed).
(mHistoryConversationsStateToDisplay is of type LPConversationsHistoryStateToDisplay ENUM which has the following values:
OPEN, CLOSE , ALL)</td>
 </tr>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationMaxDaysType</td>
 <td>When using mHistoryConversationsMaxDays, LPConversationHistoryMaxDaysDateType will decide if to filter by the conversations' start date or end date.
When not providing a value, startConversationDate will be the default.
(mHistoryConversationMaxDaysType is of type LPConversationHistoryMaxDaysDateType ENUM which has the following values:
startConversationDate, endConversationDate)</td>
 </tr>
 <tr>
 <td>ConversationViewParams -> mHistoryConversationsMaxDays</td>
 <td>Allows to control the amount of conversations history that will be presented when opening the conversation screen by days.
(Default is -1 (no limit))</td>
 </tr>
 </tbody>
</table>


The following additional conditions and configurations are required:*

<table>
<thead>
 <tr>
 <th>Backend update</th>
 <th>Backend enablement</th>
 <th>Backend configuration </th>
 <th>SDK enablement </th>
 <th>SDK configuration </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 <td>Yes</td>
 </tr>
 </tbody>
</table>


#### New Strings Localizations

<table>
<thead>
 <tr>
 <th>New Strings Localization</th>
 <th> Description </th>
  </tr>
 </thead>
 <tbody>
 <tr>
 <td>lp_history_control_api_empty_state</td>
 <td>There are currently no conversations at this time</td>
 </tr>
 </tbody>
</table>


#### New parameters

##### Branding and configuration parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v3.1 exposes additional branding configuration parameters.

The new parameters may control text, padding of conversation UI elements and more.

<table>
<thead>
 <tr>
 <th>Name</th>
 <th>Description</th>
 <th>Default</th>
 <th>Screenshot</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>&lt;color name="lp_brand_header_text_color"&gt;@android:color/black&lt;/color&gt;
</td>
 <td>The configuration to change the Brand name / Agent name text color in the header
</td>
 <td>Black</td>
 <td><img src="img/android_brandname_color.png"></td>
 </tr>
 <tr>
 <td>&lt;bool name="show_agent_typing_in_message_bubble"&gt;false&lt;/bool&gt;</td>
 <td>True - the agent-is-typing-indicator will appear in "temporary" bubble. This style is available in both fragment and activity modes.
False - the agent-is-typing-indicator will appear in the status bar (under the agent name). This style is available only in activity mode.
This configuration is available as long as the announce_agent_typing configuration is on (set as true).
</td>
 <td>false
</td>
<td><img src="img/android_agent_typing_bubble.png"></td>
 </tr>
 <tr>
 <td>lp_messaging_ui_typing_animation_frames.xml
</td>
 <td>In case the brand wants to present a different animation / different image resources. They may create a file named "lp_messaging_ui_typing_animation_frames.xml", this will override the SDK's original animation.</td>
 <td>LivePerson animation</td>
 <td><img src="img/android_custom_agent_typing_bubble.png.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_send_disabled.xml</td>
 <td>In case the brand wants to display a different drawable to represent sending a message.
The brand create a drawable file named "lpinfra_ui_ic_send_disabled.xml" which will override the SDK's default drawable.
</td>
 <td>The default image is the one from the screenshot to the to the right.
Please notice that in order to display an image instead of a text the boolean
use_send_image_button
should be set to true</td>
 <td><img src="img/android_disabled_send_button.png"></td>
 </tr>
 <tr>
 <td>lpmessaging_ui_ic_gallery.xml
</td>
 <td> In order to replace the existing add image from library button (photo sharing). The brand may create a drawable file named "lpmessaging_ui_ic_gallery.xml" which will override the SDK's default drawable.</td>
 <td>LivePerson image</td>
 <td><img src="img/android_gallery_button.png"></td>
 </tr>
 <tr>
 <td>lpmessaging_ui_ic_camera.xml
</td>
 <td>In Order to replace the add image from camera button (photo sharing), the brand may create a drawable file named "lpmessaging_ui_ic_camera.xml" which will override the SDK's default drawable.
</td>
 <td>LivePerson image</td>
 <td><img src="img/android_camera_button.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_attach.xml
</td>
 <td>In case the brand wants to display a different drawable for opening the photo-sharing menu tab. They may create a drawable file named "lpinfra_ui_ic_attach.xml" which will override the SDK's default drawable.
</td>
 <td>LivePerson image</td>
 <td><img src="img/android_attach_button.png"></td>
 </tr>
 <tr>
 <td>lpinfra_ui_ic_close.xml</td>
 <td>In case the brand wants to display a different drawable for closing the photo-sharing menu tab. They may create a drawable file named "lpinfra_ui_ic_close.xml" which will override the SDK's default drawable.</td>
 <td>LivePerson image</td>
 <td><img src="img/android_ps_close_button.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="button_corner_radius"&gt;30dp&lt;/dimen&gt;
</td>
 <td>Makes CSAT Yes/No and Submit buttons corner radiuses customizable (through dimens.xml).</td>
 <td>30dp</td>
 <td><img src="img/android_csat_yesno_radius.png"></td>
 </tr>
 </tbody>
</table>


#### Additional Features

##### Adding Support for Android O

Mobile App Messaging SDK v3.1 can be integrated into apps running on Android O (api 26 & api 27)

##### Wrapping Text in Edit Text Box

Parity with iOS in the Edit Text box.  The max lines is declared at 3. meaning when the text suppresses the length fit for 3 lines the first line will be hidden.

##### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

<table>
<thead>
 <tr>
 <th colspan="5">Operating system</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Device</td>
 <td>v5.X (Lollipop)</td>
 <td>v6.X (Marshmallow)</td>
 <td>v7.X (Nougat)</td>
 <td>v8.X (Oreo)</td>
 </tr>
 <tr>
 <td>Pixel XL</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Supported</td>
 <td>Certified</td>
 </tr>
 </tbody>
</table>


A full list of supported and certified devices can be found in the [Conversational Cloud System Requirements document](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf).

**Key for items as follows:**

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.



# Mobile App Messaging SDK version 3.0

#### New functionalities

##### Certificate Pinning

**Type:** Security Feature

**Available to all customers?** No. Contact support for more details.

Certificate Pinning allows increased security on top of the commonly used SSL protocol for mobile apps. It assists to prevent certificate hijacks and mitigates implications from compromised certificate authorities. By using Certificate Pinning, apps have an additional validation of the server’s certificate.

The object mCertificatePinningKeys was added to the object LPAuthenticationParams.

**Please note**: using the new object without completing the on-boarding process will result in failures while trying to communicate with LivePerson’s servers.

The following additional conditions and configurations are required:

| Backend update | Backend enablement | Backend configuration | SDK enablement | SDK configuration |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Yes | Yes | Yes | Yes | Yes |


#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

<table>
<thead>
 <tr>
 <th></th>
 <th colspan="4">Operating system</th>
 </tr>
 <tr>
 <th>Device</th>
 <th>v5.X (Lollipop)</th>
 <th>v6.X (Marshmallow)</th>
 <th>v7.X (Nougat)</th>
 <th>v8.X (Oreo)</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Note 8</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 <td>Supported</td>
 </tr>
 <tr>
 <td>Pixel</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 <tr>
 <td>Pixel 2</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>N/A</td>
 <td>Certified</td>
 </tr>
 </tbody>
</table>

A full list of supported and certified devices can be found in the [Conversational Cloud System Requirements document](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf).

#### New APIs

#### New parameters

##### Branding and configuration parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v3.0 exposes additional branding configuration parameters.

New parameters may control text, padding of conversation UI elements and more.

<table>
<thead>
 <tr>
 <th>Parameter name and default value</th>
 <th>Description</th>
 <th>Image</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>&lt;dimen name="sticky_timestamp_text_size"&gt;@dimen/small_text_size</dimen></td>
 <td>Defines the Date Separator font text size.</td>
 <td><img src="img/android_sticky_timestamp_text_size.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="sticky_timestamp_margin_top">8dp</dimen></td>
 <td>Defines the Date Separator top spacing.</td>
 <td><img src="img/android_sticky_timestamp_margin_top.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="avatar_margin_leading"&gt;@dimen/margin_regular</dimen></td>
 <td>Defines the remote avatar leading spacing (from the left edge to the avatar).</td>
 <td><img src="img/android_avatar_margin_leading.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="avatar_margin_trailing"&gt;@dimen/margin_regular</dimen></td>
 <td>Defines the remote avatar Trailing spacing (from the avatar to the bubble).</td>
 <td><img src="img/android_avatar_margin_trailing.png"></td>
 </tr>
 <tr>
 <td>
  &lt;color name="enter_message_top_separator_color"&gt;@android:color/darker_gray&lt;/color&gt;</td>
 <td>Input TextView top border color. The default color is clear.</td>
 <td><img src="img/android_enter_message_top_separator_color.png"></td>
 </tr>
 <tr>
 <td>&lt;bool name="enter_message_divider_visible"&gt;false&lt;/bool&gt;
</td>
 <td>Determine if the Enter Message edit text divider is visible or not.</td>
 <td><img src="img/android_enter_message_divider_visible.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_text_size"&gt;@dimen/small_text_size</dimen>
</td>
 <td>Defines the Resolved system message text size.</td>
 <td><img src="img/android_bubble_system_resolved_text_size.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_padding"&gt;@dimen/margin_half</dimen></td>
 <td>Defines the Resolved system message padding.</td>
 <td><img src="img/android_bubble_system_resolved_padding.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_line_spacing">0dp</dimen>
</td>
 <td>Defines the Resolved system message line spacing.</td>
 <td><img src="img/android_bubble_system_resolved_line_spacing.png"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_separator_padding_bottom"&gt;@dimen/margin_half</dimen>
</td>
 <td>Defines the Resolved system message Separator padding.</td>
 <td><img src="img/android_bubble_system_resolved_separator_padding_bottom.png"></td>
 </tr>
 <tr>
 <td>&lt;drawable name="lp_progress_bar_image"&gt;&lt;/drawable&gt;</td>
 <td>Defines the Progress bar image. If empty, the default Progress bar appears.</td>
 <td><img src="img/android_lp_progress_bar_image.png"></td>
 </tr>
 </tbody>
</table>


**Key for items as follows:**

**Backend update:** This feature requires an update to the backend.

**Backend enablement**: This feature requires items to be toggled on in the backend.

**Backend configuration**: This feature requires configuration in the backend.

**SDK enablement:** This feature requires items to be toggled on in the SDK.

**SDK configuration**: This features requires items to be configured in the SDK.



# Android Messaging SDK -  Version 2.9

These are the main feature releases available in the Mobile App Messaging SDK version 2.9 for Android.

Version 2.9 planned roll-out: November 12th 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.1.pdf)

#### New functionalities

##### Oreo Support - Android API Level Support Update

**Type:** Developer Experience Feature

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 was built and certified within the host app on Android API level 26.

The Mobile App Messaging SDK should remain on Android API level 25, while the host app may use Android API level 26.

**Important:**

The SDK Android API level should remain on level 25. Please do not change SDK Android API level to 26; support for this level 26 will be provided in 2018.

#### New parameters

##### Branding and Configuration Parameters

**Type:** Parameters

**Available to all customers?** Yes

The Mobile App Messaging SDK v2.9 exposes additional branding configuration parameters.

New parameters may control text, padding of conversation UI elements and more.

<table>
<thead>
 <tr>
 <th>Parameter name and default value</th>
 <th>Description</th>
 <th>Image</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>&lt;color name="lp_header_background_color"&gt;@android:color/white (#FFFFFF)</td>
 <td>Day/date sticky header background color.</td>
 <td><img src="img/androidheaderbackground.png" alt="androidheaderbackground"></td>
 </tr>
 <tr>
 <td>&lt;color name="lp_header_text_color"&gt;@color/lp_dark_gray_1 (#46474a)</td>
 <td>Day/date sticky header text color.</td>
 <td><img src="img/androidtextcolor.png" alt="androidtextcolor"></td>
 </tr>
 <tr>
 <td>&lt;color name="lp_textColorSecondary"&gt;@android:color/black (#000000)</td>
 <td>Color of menu button and back arrow on toolbar (Activity Mode).</td>
 <td><img src="img/textcolorsecondary.png" alt="lp_textColorSecondary"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_bottom"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) bottom spacing.</td>
 <td><img src="img/androidpaddingbottom.png" alt="androidpaddingbottom"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_left"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) left spacing.</td>
 <td><img src="img/androidpaddingleft.png" alt="androidpaddingleft"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_right"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) right spacing.</td>
 <td><img src="img/androidpaddingright.png" alt="androidpaddingright"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="brand_bubble_padding_top"&gt;8dp</td>
 <td>Brand welcome message bubble (brand) top spacing.</td>
 <td><img src="img/androidpaddingtop.png" alt="androidpaddingtop"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_line_spacing"&gt;0dp</td>
 <td>Resolve message spacing from above.</td>
 <td><img src="img/linespacing.png" alt="linespacing"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_padding"&gt;@dimen/margin_half (4dp)</td>
 <td>Resolve message spacing from below.</td>
 <td><img src="img/systemresolved.png" alt="systemresolved"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="bubble_system_resolved_text_size"&gt;@dimen/small_text_size (12sp)</td>
 <td>Resolve message text size.</td>
 <td><img src="img/androidtextsize.png" alt="androidtextsize"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_bottom"&gt;8dp</td>
 <td>Conversation message (agent / consumer) bottom spacing.</td>
 <td><img src="img/androidbubblepaddingbottom.png" alt="androidbubblepaddingbottom"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_left"&gt;8dp</td>
 <td>Conversation message (agent / consumer) left spacing.</td>
 <td><img src="img/androidbubblepaddingleft.png" alt="androidbubblepaddingleft"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_right"&gt;8dp</td>
 <td>Conversation message (agent / consumer) right spacing.</td>
 <td><img src="img/androidbubblepaddingright.png" alt="androidbubblepaddingright"></td>
 </tr>
 <tr>
 <td>&lt;dimen name="chat_bubble_padding_top"&gt;8dp</td>
 <td>Conversation message (agent / consumer) top padding</td>
 <td><img src="img/androidbubblepaddingtop.png" alt="androidbubblepaddingtop"></td>
 </tr>
 </tbody>
</table>



# Android Messaging SDK -  version 2.8

These are the main feature releases available in the Mobile App Messaging SDK version 2.8 for Android.

Version 2.8 roll-out: October 3rd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.0.pdf)

#### New functionalities

##### Structured content enablement (GA in SDK)

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers?​** ​No - early adopters only

_The beta version was released in v2.7 (for a full description, refer to the v2.7 release notes). The SDK delivers structured content enablement only; the feature will be made fully productive in October. In v2.8 the feature is enabled by default in the SDK._

The dictionary of template elements can be found [here](structured-content-templates.html).

**What​ ​does​ ​enablement​ ​mean**?

Until rollout is complete, the structured content capability in SDK v2.7 was flagged as a Beta feature. The feature has an enablement toggle in the SDK which was disabled by default. In SDK v2.8, it is enabled by default.

The toggle may be switched on or off as part of the SDK implementation within the host app, however it is highly recommended not to release the SDK in the host app with structured content enabled until end to end flow has been fully tested on the brand’s account.

**In-app​ ​Messaging​ ​SDK​ ​toggle**​ -

* Android - `enable_structured_content`

Related​ ​properties:​ ​Structured content

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| Yes| Yes| Yes| Yes|

##### Automatic messages for messaging

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers**?​ ​No - early adopters only

**Description**

Automatic Messages (AKA System Messages) are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur. Their purpose is to gain the consumer’s trust in the messaging channel, by setting expectations and giving the consumer visibility over the agent’s availability.

Auto messages are triggered upon specific events that are detected by the system (e.g. the consumer opens a new conversation, the conversation is transferred to another agent, the time to respond is updated, etc.). When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, and they also appear in the conversation’s history both on the consumer’s side and in LE.

**Notes**:

* Messages are supported in all Conversational Cloud languages.
* The content of each message can be edited by the brand.
* Skill variation is supported, including enabling/disabling the messages for each skill.
* Certain messages can have different parameters, such as the time the conversation is in the queue before the message is sent.
* Dynamic text can be added to the messages, which will be replaced with a runtime value, such as agent name.
* Auto messages do not affect whom the conversation is pending, nor the time to respond.
* They are filtered out of the reports by default (unless manually included).

The following auto messages are supported:

* New conversations

  * A consumer opens a conversation during working hours
  * A consumer opens a conversation for the first time ever, during working hours

* Off hours

  * A consumer opens a conversation during off hours
  * A consumer opens a conversation for the first time ever, during off hours
  * The consumer sends the first message during off hours in an open conversation

* Time to respond

  * The response time is updated manually by the agent
  * The consumer marks the conversation as urgent
  * The consumer dismisses the conversation urgent state

* Consumer/Agent non-responsive

  * The consumer has not responded for X seconds/minutes/hours
  * The agent did not respond for X seconds/minutes/hours
  * Conversation is in queue for X mins/hours

* Transfers and connection to agents

  * The conversation is transferred to a different skill
  * The agent returns the conversation to the queue
  * The consumer is connected to an agent

* Conversation participants

  * Agent manager joins the conversation
  * The joined agent manager leaves the conversation

**How​ ​to​ ​enable​ ​auto​ ​messages**

Auto messages will be enabled for early adopters upon release. Please contact your account manager for more information.

**IMPORTANT​ ​NOTES**​:

When auto messages are enabled, they are all enabled by default and all have the default text. It is advised to review them immediately and modify them to suit the brand’s needs. Once auto messages are enabled, the SDK does not show toast messages which were presented in the past.

The following messages remain in the SDK:

* Introduction message from the consumer’s first ever conversation. Make sure you do not have a collision between that message and auto messages.

* Conversation resolved message

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| Yes| Yes| Yes| Yes|

##### Unread messages badge

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

The unread messages number is passed to the SDK through LP Push service with every push.

**IMPORTANT​ ​NOTES**​​
:
The number of unread messages are fetched by the API from the pusher regardless of whether it’s registered to the LP push service.

**Getting the unread message badge counter**

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache otherwise,
it will be fetched again with new data.

**Parameters**​:

* conversationQuery: conversationQuery: used to identify the related brand

* completion: called once the operation ends successfully

* failure: called once the operation failed

**Related​ ​properties**:​ ​Unread messages badge
**Related​ ​API**:​ Unread messages badge API

The following additional conditions and configurations are required:

|Backend update |Backend enablement|Backend configuration|SDK enablement|SDK configuration|
|---------------|------------------|---------------------|--------------|-----------------|
|Yes| No| No| No| Yes|

**Key for items as follows**:

**Backend​ ​update**:​ This feature requires an update to the backend.
**Backend​ ​enablement**​: This feature requires items to be toggled on in the backend.
**Backend​ ​configuration**​: This feature requires configuration in the backend.
**SDK​ ​enablement**:​ This feature requires items to be toggled on in the SDK.
**SDK​ ​configuration​**: This features requires items to be configured in the SDK.

#### New properties

##### Structured Content

The following properties for structured content can now be configured:

|Name|Description|Default|
|----|-----------|-------|
|&lt;bool name="enable_structured_content"&gt;|Enable or Disable toggle for Structured Content feature in conversations.|True|

#### New APIs

##### Unread Messages Badge APIs

```javascript
public​ ​static​ ​void​ ​getNumUnreadMessages(String​ ​appId,​ ​final​ ​ICallback<Integer,
Exception>​ ​callback)​ ​{
​ ​ ​ ​if​ ​(!isValidState())​ ​{
​ ​ ​ ​ ​ ​ ​ ​callback.onError(new​ ​Exception("SDK​ ​not​ ​initialized"));
​ ​ ​ ​}​ ​else​ ​{
​ ​ ​ ​ ​ ​ ​ ​MessagingFactory.getInstance().getController().getUnreadMessagesCount(mBrandId,
appId,​ ​callback);
​ ​ ​ ​}
}
```

To use this API, the SDK must be after initialization.



# Android Messaging SDK -  version 2.5

These are the main feature releases available in the Mobile App Messaging SDK version 2.5 for Android.

Version 2.5 roll-out: July 2nd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.8.pdf)


#### New functionalities

##### Custom fonts

In order for consumers to enjoy the full brand experience while messaging in-app, brands are able to configure certified operating system fonts to appear in the messaging window. The fonts can be used across all elements, or only for the font within the message bubble.

The SDK also supports the use of a brand’s own customized fonts (although these are not certified).

Custom fonts are not supported for Native iOS properties such as:
* Activity mode - Overflow menu
* Popup messages

![Conversation Custom Font](img/CustomFont.png)

Conversation Custom Fonts

![Non Conversation Custom Font](img/NonConversation.png)

Non Conversation Custom Fonts

_Related properties_: Custom fonts

**The following additional conditions and configurations are required:**

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

##### New way to listen to LP events via local intents

A new method of listening to LP events has been added. This method allows the host app to register to receive a specific action or to receive all of them. All of the actions match and correspond to the existing callback method. LivePerson recommends using the SDK’s Broadcast Receiver to receive these intent actions, as this system allows the user to listen to specific actions, and is not reliant on the SDK’s life cycle.

Note: Brands can still choose to use the callback method, which remains valid and supported.

_Related APIs_: LivePersonIntents API

**The following additional conditions and configurations are required**:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

##### Tablet supportability
To ensure that consumers using tablets can connect with brands while enjoying the tablet experience, Mobile App Messaging is now supported on these devices, in window mode and activity mode, and in both portrait and landscape layouts.

All supported devices have gone through automation tests and all certified devices have gone through both automation and manual testing.

| Device | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| ------------ | ------------ | ------------ | ------------ |
| Samsung Galaxy Tab S2 9.7 | N/A  | Supported | N/A |
| Samsung Galaxy Tab S3 | N/A  | N/A | Supported |
| Huawei MediaPad M3 | N/A  | Supported | N/A |

![Tablet Portrait](img/TabletPortrait.png)

Tablet Portrait Mode

![Tablet Landscape](img/TabletLandscape.png)

Tablet Landscape Mode

##### List of certified and supported devices extended
The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

| Device | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| ------------ | ------------ | ------------ | ------------ |
| Samsung Galaxy S8 | N/A  | Supported | Certified |
| Samsung Galaxy S8+ | N/A  | N/A | Certified |
| LG G6 | N/A  | N/A | Certified |
| LG V20 | N/A  | N/A | Certified |

A full list of supported and certified devices can be found in the Conversational Cloud System Requirements document.

##### Connectivity improvements
The user experience when connecting to the app has been significantly improved. When users first log-in, and during all subsequent attempts, the login process is now much smoother and faster.

In addition, other aspects such as feature and conversation history will also be more rapid as a result of the improvements.

The following additional conditions and configurations are required*:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

#### New APIs
LivePersonIntents API
* All Actions are defined in the LivePersonIntents.ILivePersonIntentAction Interface.
* All additional data is provided using Extras on the intents and defined in the LivePersonIntents.ILivePersonIntentExtras Interface.
* The LivePersonIntents class provides several methods that help extract the data from of the intent, without dealing with the Extras.

For more information on this API, please refer to the deployment guide.

#### New properties
The following properties of the secure form bubble on the agent side can now be configured:

##### Custom Fonts

| Name  | Description  | Default  |
| ------------ | ------------ | ------------ |
| string name="custom_font_name_conversation_feed" | The font name for all elements in the conversation feed. | Empty (use the device font) |
| string name="custom_font_name_non_conversation_feed" | The font name for all elements that are not in the conversation feed. | Empty (use the device font) |



# Android Messaging SDK -  version 2.3
These are the main feature releases available in the **Mobile App Messaging SDK version 2.3 for Android**.

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.6.pdf)



#### Presence enablement for photo sharing - beta

Presence enablement for photo sharing provides consumers with the ability to receive notifications while uploading a photo, whether they remain within the app or keep it running in the background. The Web Socket remains open for a maximum of 5 seconds when the app moves to the background. This scenario is also applicable for non photo sharing flows.

In addition, brands can also customize notifications for photo sharing, indicating to the consumer when a photo is loading, has successfully sent or has failed to send

![Presence Enablement](img/releasepresence.png)

Related API: Photo sharing
Related strings: Photo sharing upload status


#### In-app unread messages badge enablement

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualisation of a badge, such as a number, icon or other marker to show unread messages.

![Unread Messages Badge](img/releaseunread.png)

Related API: Handle Push Message, Get Num Unread Messages, Deprecated API


#### Secure form for Mobile App Messaging

The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations. The form can be tailored to match the Mobile App Messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the Conversational Cloud ​[secure form for messaging documentation​](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf)_.

![Secure Form](img/releasesecure.png)

Related properties: Agent PCI bubble
Related strings: PCI


#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our Mobile App Messaging SDK:

**Mobile**

|                        | Operating system |                    |               |
|------------------------|------------------|--------------------|---------------|
| **Device**                 | **v5.x (Lollipop)**   | **v6.X (Marshmallow)** | **v7.X (Nougat)** |
| Samsung Galaxy S4      | Supported        | -                  | -             |
| Samsung Galaxy A5      | Supported        | Certified          | -             |
| Samsung Galaxy J3      | Certified        | -                  | -             |
| Samsung Galaxy J5      | -                | Certified          | -             |
| Samsung Galaxy S6      | -                | -                  | Certified     |
| Samsung Galaxy S6 edge | -                | -                  | Certified     |
| Samsung Galaxy S7      | -                | -                  | Certified     |
| Samsung Galaxy S7 edge | -                | -                  | Certified     |
| LG V20                 | -                | -                  | Supported     |
| Sony Xperia X          | -                | Certified          | Supported     |

**Tablet**


|              | Operating System |                 |                    |               |
|--------------|------------------|-----------------|--------------------|---------------|
| Device       | V4.4X (KitKat)   | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| Galaxy Tab A | -                | Supported       | Supported          | -             |
| Galaxy Tab 3 | Supported        | -               | -                  | -             |
| Nexus        | Supported        | Supported       | Supported          | -             |
| HTC          | -                | -               | Supported          | Supported     |


#### New APIS


**handlePushMessage**

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| data | A Bundle that contains the message. The bundle should hold a string with key named "message". |
| brandId | The account ID. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false. |

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification. In a case the host app decides to show its own custom notification, it can call handlePushMessage() with the ​showNotification​ parameter set to false and will parse and return a PushMessage object. In case the push message is not related to the SDK, it will return null.

_Note: For the unread messages feature to work correctly, the host app must call this method upon receiving SDK push messages (whether showing a custom notification or not)_.

**getNumUnreadMessages**

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |

This returns the counter of the unread messages to the number of push messages received.
This number is set to 0 when opening the conversation screen.

To get updates on the unread messages counter: create a BroadcastReceiver that will listen to the following Action:

_LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION;_

To get the number of unread messages out of the intent, use the following extra key:

_LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA;_

**Photo Sharing**

Set a pending intent for the image upload foreground service notification -

`setImageServicePendingIntent(PendingIntent pendingIntent)`

Set a notification builder for the image upload foreground service notification -

`setImageServiceUploadNotificationBuilder(Notification.Builder builder)`

Set a notification builder for the image down foreground service notification -

`setImageServiceDownloadNotificationBuilder(Notification.Builder builder)`


#### Deprecated API


The following API has been deprecated:

`public static void handlePush(Context context, Bundle data, String brandId, boolean
showNotification)`

Please use the above ​handlePushMessage()​ method instead.

#### New properties


**agent PCI bubble**

The following properties of the secure form bubble on the agent side can now be configured:

Background color of the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_background_color"​>
@android:color/white​</color>`

Background color of the form invitation button only -

`<color​ ​name=​"agent_bubble_pci_form_invitation_background_btn_color"​>
@android:color/white​</color>`

Color of the stroke (border) of the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_stroke_color"​>​ ​@color/lp_gray​</color>`

Color of the text on the button -

`<color ​name=​"agent_bubble_pci_form_invitation_button_text_color"​>
@color/lp_blue​</color>​`

Text color on the description in the form invitation bubble -

`<color ​name=​"agent_bubble_pci_form_invitation_description_text_color"​>
@color/lp_gray​</color>`

Text color on the title in the form invitation bubble -

`<color​ ​name=​"agent_bubble_pci_form_invitation_title_text_color"​>
@android:color/black​</color>`

Color of the icon in the form invitation bubble -

`<color ​name=​"agent_bubble_pci_form_invitation_icon_tint_color"​>
@color/lp_blue​</color>`

**consumer read status**

Color of the read status indicator in the consumer message status line -

`<color​ ​name=​"​consumer_bubble_read_status_color​"​>​@color/lp_blue​</color>`

Color of the received status indicator in the consumer message status line -

`<color ​name=​"​consumer_bubble_received_status_color​"​>​#cecece​</color>`

Color of the sent status indicator in the consumer message status line -

`<color​ ​name=​"​consumer_bubble_sent_status_color​"​>​#cecece​</color>`

Color of the sending status indicator in the consumer message status line -

`<color ​name=​"​consumer_bubble_sending_status_color​"​>​@color/lp_gray​</color>`


#### New strings keys

**Photo Sharing Upload Status**

`<string​ ​name=​"uploading_image"​>​Uploading image...​</string>`
`<string​ ​name=​"downloading_image"​>​Downloading image...​</string>`

**Accessibility**

`<string​ ​name=​"lp_accessibility_message_preview_close_description"​>​Close​</string>``
`<string​ ​name=​"lp_accessibility_scroll_down_indicator_description"​>​scroll
down​</string>`

**Connection Status**

`<string​ ​name=​"lp_connection_status_trying_to_connect"​>​Still trying to
connect…​</string>`
`<string​ ​name=​"lp_connection_status_no_connection"​>​Offline. Please check your
connection.​</string>`

**PCI**

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_title"​>​Are you sure?​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_description"​>​Once you leave the secure
form, you will not be able to access it again.​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_btn_positive"​>​OK​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_btn_negative"​>​STAY​</string>`

`<string​ ​name=​"lpmessaging_ui_fill_in_form_text_button"​>​Fill in form​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_to_fill_in_message"​>​This is a secure form.
Information entered here is protected and cannot be accessed once submitted.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_viewed_message"​>​This form has already been
viewed. Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_error_message"​>​There was a problem opening
this form. Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_expired_message"​>​Secure form has expired.
Please ask the agent to resend the form.​</string>`

`<string​ ​name=​"lpmessaging_ui_secure_form_submitted_message"​>​This form has been
submitted and cannot be reopened for security reasons.​</string>`

`<string​ ​name=​"lpmessaging_ui_pci_leave_dialog_description"​>​Once you leave the secure
form, you will not be able to access it again.​</string>`
