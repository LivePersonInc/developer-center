---
pagename: registerPushNotifications
redirect_from:
  - consumer-experience-ios-sdk-registerpushnotifications.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 150
permalink: mobile-app-messaging-sdk-for-ios-methods-registerpushnotifications.html

indicator: messaging
---

Register to LPMessagingSDK push notifications with the following code in AppDelegate:

*Note: Push notifications must be pre-configured, and an APN certificate has to be uploaded to the LiveEngage platform. See more info on [how to configure push notifications](consumer-experience-ios-sdk-configuration.html).*

`func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| token | A token that identifies the device to APNs. The token is an opaque data type because that is the form that the provider needs to submit to the APNs servers when it sends a notification to a device. | The APNs servers require a binary format for performance reasons. <br> This is the exact same dictionary as received in application:didRegisterForRemoteNotificationsWithDeviceToken: method |
| notificationDelegate | An implementer of LPMessagingSDKNotificationDelegate. | |
| alternateBundleID | An optional value that can be used so that the LivePerson pusher service identifies your app with this identifier. | In debug mode, the SDK appends "-dev" string to the bundle ID.  |

