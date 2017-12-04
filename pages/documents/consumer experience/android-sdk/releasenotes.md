---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android

order: 310
permalink: consumer-experience-android-sdk-release-notes.html
indicator: messaging
---
<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-android-sdk-release-notes.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When the Release Notes are updated, you'll get a notification straight to your email of choice!</div>

### In-App Messaging SDK Version 2.9 for android

These are the main feature releases available in the In-App Messaging SDK version 2.9 for Android.

Version 2.9 planned roll-out: November 12th 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.1.pdf){:target="_blank"}

### New functionalities

#### Oreo Support - Android API Level Support Update

**Type:** Developer Experience Feature

**Available to all customers?** Yes

The In-app Messaging SDK v2.9 was built and certified within the host app on Android API level 26.

The In-app Messaging SDK should remain on Android API level 25, while the host app may use Android API level 26.

**Important:**

The SDK Android API level should remain on level 25. Please do not change SDK Android API level to 26; support for this level 26 will be provided in 2018.

### New parameters

#### Branding and Configuration Parameters

**Type:** Parameters

**Available to all customers?** Yes

The In-app Messaging SDK v2.9 exposes additional branding configuration parameters.

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

### In-App Messaging SDK version 2.8 for Android

These are the main feature releases available in the In-App Messaging SDK version 2.8 for Android.

Version 2.8 roll-out: October 3rd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v6.0.pdf){:target="_blank"}

### New functionalities

#### Structured content enablement (GA in SDK)

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers?​** ​No - early adopters only

_The beta version was released in v2.7 (for a full description, refer to the v2.7 release notes). The SDK delivers structured content enablement only; the feature will be made fully productive in October. In v2.8 the feature is enabled by default in the SDK._

The dictionary of template elements can be found [here](https://developers.liveperson.com/structured-content-templates.html).

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

#### Automatic messages for messaging

**Type**:​ Feature

**Available​ ​to​ ​all​ ​customers**?​ ​No - early adopters only

**Description**

Automatic Messages (AKA System Messages) are predefined messages about events that occur in the conversation and are sent to the consumer as the events occur. Their purpose is to gain the consumer’s trust in the messaging channel, by setting expectations and giving the consumer visibility over the agent’s availability.

Auto messages are triggered upon specific events that are detected by the system (e.g. the consumer opens a new conversation, the conversation is transferred to another agent, the time to respond is updated, etc.). When the auto messages are sent, they are displayed to the consumer and the agent within the conversation transcript, and they also appear in the conversation’s history both on the consumer’s side and in LE.

**Notes**:

* Messages are supported in all LiveEngage languages.
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

#### Unread messages badge

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

The unread messages number is passed to the SDK through LP Push service with every push.

**IMPORTANT​ ​NOTES**​​
:
The number of unread messages are fetched by the API from the pusher regardless of whether it’s registered to the LP push service.

**How​ ​to​ ​enable​ ​the​ ​unread​ ​messages​ ​counter**

There are two options to set up this counter:

1. If the time condition is met, a REST request is performed to get the counter from the pusher

2. Return the cached number on the app

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

_Key for items as follows_:

**Backend​ ​update**:​ This feature requires an update to the backend.
**Backend​ ​enablement**​: This feature requires items to be toggled on in the backend.
**Backend​ ​configuration**​: This feature requires configuration in the backend.
**SDK​ ​enablement**:​ This feature requires items to be toggled on in the SDK.
**SDK​ ​configuration​**: This features requires items to be configured in the SDK.

### New properties

#### Structured Content

The following properties for structured content can now be configured:

|Name|Description|Default|
|----|-----------|-------|
|<bool name="enable_structured_content">|Enable or Disable toggle for Structured Content feature in conversations.|True|

### New APIs

#### Unread Messages Badge APIs

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

### In-App Messaging SDK version 2.5 for Android

These are the main feature releases available in the In-App Messaging SDK version 2.5 for Android.

Version 2.5 roll-out: July 2nd 2017

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.8.pdf){:target="_blank"}


### New functionalities

#### Custom fonts

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

The following additional conditions and configurations are required:*

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | Yes |

#### New way to listen to LP events via local intents

A new method of listening to LP events has been added. This method allows the host app to register to receive a specific action or to receive all of them. All of the actions match and correspond to the existing callback method. LivePerson recommends using the SDK’s Broadcast Receiver to receive these intent actions, as this system allows the user to listen to specific actions, and is not reliant on the SDK’s life cycle.

Note: Brands can still choose to use the callback method, which remains valid and supported.

_Related APIs_: LivePersonIntents API

**The following additional conditions and configurations are required**:

| Backend update  | Backend enablement  | Backend configuration  | SDK enablement  | SDK configuration  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| N/A | N/A | N/A | N/A | N/A |

#### Tablet supportability
To ensure that consumers using tablets can connect with brands while enjoying the tablet experience, in-app messaging is now supported on these devices, in window mode and activity mode, and in both portrait and landscape layouts.

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

#### List of certified and supported devices extended
The following devices are now also supported and/or certified to host our in-app messaging SDK:

| Device | v5.X (Lollipop) | v6.X (Marshmallow) | v7.X (Nougat) |
| ------------ | ------------ | ------------ | ------------ |
| Samsung Galaxy S8 | N/A  | Supported | Certified |
| Samsung Galaxy S8+ | N/A  | N/A | Certified |
| LG G6 | N/A  | N/A | Certified |
| LG V20 | N/A  | N/A | Certified |

A full list of supported and certified devices can be found in the LiveEngage System Requirements document.

#### Connectivity improvements
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

### New properties
The following properties of the secure form bubble on the agent side can now be configured:

#### Custom Fonts

| Name  | Description  | Default  |
| ------------ | ------------ | ------------ |
| string name="custom_font_name_conversation_feed" | The font name for all elements in the conversation feed. | Empty (use the device font) |
| string name="custom_font_name_non_conversation_feed" | The font name for all elements that are not in the conversation feed. | Empty (use the device font) |



### In-App Messaging SDK version 2.3 for Android
These are the main feature releases available in the **In-App Messaging SDK version 2.3 for Android**.

[Version Specific System Requirements Document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements+v5.6.pdf){:target="_blank"}



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


#### Secure form for in-app messaging

The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations. The form can be tailored to match the in-app messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the LiveEngage ​[secure form for messaging documentation​](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf){:target="_blank"}_.

![Secure Form](img/releasesecure.png)

Related properties: Agent PCI bubble
Related strings: PCI


#### List of certified and supported devices extended

The following devices are now also supported and/or certified to host our in-app messaging SDK:

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
