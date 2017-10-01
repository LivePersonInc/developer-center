---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android

order: 281
permalink: consumer-experience-android-sdk-release-notes.html
indicator: messaging
---
<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-android-sdk-release-notes.html&mode=web&css=post-content" target="_blank">click here to subscribe to any further changes!</a> When the Release Notes are updated, you'll get a notification straight to your email of choice!</div>

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
