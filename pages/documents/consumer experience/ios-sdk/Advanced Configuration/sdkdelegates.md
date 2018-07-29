---
title: SDK Delegates
redirect_from:
  - consumer-experience-ios-sdk-delegates.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Configuration

order: 4
permalink: mobile-app-messaging-sdk-for-ios-configuration-sdk-delegates.html

indicator: messaging
---
The SDK uses 2 delegates:

1. **LPMessagingSDKDelegate** - for lifecycle and connectivity events.

```swift
LPMessagingSDK.instance.delegate = self
```

2. **LPMessagingSDKNotificationDelegate** - for handling Push and In-App Notifications.

```swift
LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
```

You should implement and set the **LPMessagingSDKNotificationDelegate**, in order to receive Push Notifications from the SDK.
