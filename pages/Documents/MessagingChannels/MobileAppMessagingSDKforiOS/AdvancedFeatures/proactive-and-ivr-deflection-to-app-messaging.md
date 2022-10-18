---
pagename: Proactive and IVR Deflection to App Messaging
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html
indicator: messaging
---

To integrate Proactive or IVR Deflection to App messaging, brands must follow these configurations steps when implementing the SDK (minimum version iOS SDK 6.2):

* Make sure the brand app already has push notification set up in order to enable their consumers to receive notifications. You can find detailed instructions on how to set up LivePerson's push notification service [here](mobile-app-messaging-sdk-for-ios-push-notifications.html).

### Limitations

- Currently, the proactive messages only work for Push Notifications that are received when the application state is not active, and the notifications are tapped.
- Processing InApp Notifications for Proactive and IVR Deflection messages is only supported when using the default In App Notification provided by the LPMessagingSDK.
- When using Custom InApp Notifications, Host App has to call `handleTapForInAppNotification` to notify the SDK an InApp Notification was tapped.

### Send Push Notification in logout state (new Logout API)

Consumers can now receive push notifications even in logged out state. SDK has introduced new enum configurations to let brands decide If they want consumers to receive notifications when logged out.
Brands can choose either of the following configurations to unregister user from pusher:

```swift
func logout(unregisterType: LPPusherUnregisterType,
                       completion: @escaping ()->(),
                       failure: @escaping (_ errors: [Error])->())
```

#### LPPusherUnregisterType
**All**: unregister for all types of push notification messages

**None**: do not unregister from the pusher at all

**Agent**: Unregister only for agent push notification messages. Consumers can still receive outbound push notifications sent from the Proactive or Connect to Messaging (IVR) services.

-----

### Processing InApp Notifications when App is active

To enable processing of Proactive and IVR Deflection while the Application is active, the following configuration needs to be enable:

```swift
enableInAppProcessingForActiveState = true
```

##### enableInAppProcessingForActiveState
Enable or disable the ability to display Proactive and IVR Deflection messages on Conversation Screen
- **Type:** Bool
- **Default Value:** false
- **Preconditions:**
    - Consumer to be registered for Push Notifications
    - Consumer tapped InApp Notification
- **Available since:** 6.4.1

{: .attn-alert}
This flags enables SDK to process InApp Notifications for Proactive and IVR Deflection messages, is not related to Push Notifications received when the Application is not active.

-----

### (Optional) Overriding InApp Notification

When using the `LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification)` protocol to override the InApp Notification, Host App has to call the following method to notify the SDK an InApp Notification was tapped:

```swift
public func handleTapForInAppNotification(notification: LPNotification)
```