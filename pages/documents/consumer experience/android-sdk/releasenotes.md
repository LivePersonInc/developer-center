---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android

order: 281
permalink: consumer-experience-android-sdk-release-notes.html
---
### In-App Messaging SDK version 2.3 for Android
These are the main feature releases available in the **In-App Messaging SDK version 2.3 for Android**.

### Presence enablement for photo sharing - beta
Presence enablement for photo sharing provides consumers with the ability to receive notifications while uploading a photo, whether they remain within the app or keep it running in the background. The Web Socket remains open for a maximum of 5 seconds when the app moves to the background. This scenario is also applicable for non photo sharing flows.

In addition, brands can also customize notifications for photo sharing, indicating to the consumer when a photo is loading, has successfully sent or has failed to send

![Presence Enablement](img/releasepresence.png)

Related API: Photo sharing
Related strings: Photo sharing upload status

### In-app unread messages badge enablement
When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualisation of a badge, such as a number, icon or other marker to show unread messages.

![Unread Messages Badge](img/releaseunread.png)

Related API: Handle Push Message, Get Num Unread Messages, Deprecated API

### Secure form for in-app messaging
The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations. The form can be tailored to match the in-app messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the LiveEngage ​[secure form for messaging documentation​](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf){:target="_blank"}_.

![Secure Form](img/releasesecure.png)

Related properties: Agent PCI bubble
Related strings: PCI

### List of certified and supported devices extended
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

### New APIS

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

**LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION;**

To get the number of unread messages out of the intent, use the following extra key:

**LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA;**
