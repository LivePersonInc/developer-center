---
title: handlePush (Deprecated)
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Methods

order: 130
permalink: android-handlepush.html

indicator: messaging
---

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification.

Handling the push message allows the host app to do the following:

- Receive non-messaging related push messages.
- Handle custom in-app alerts upon an incoming message.

*Note: Whether the host app fully handles any push messages or partially, any messaging push message should be sent to the SDK using the handlePushMessage method.*

`public static void handlePushMessage(Context context, Bundle data, String brandId, Boolean showNotification)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| data | A Bundle that contains the message. The bundle should hold a string with key named "message". |
| brandId | The account ID. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false. |

