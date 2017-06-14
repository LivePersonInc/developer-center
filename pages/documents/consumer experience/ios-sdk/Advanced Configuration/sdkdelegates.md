---
title: SDK Delegates
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Configuration

order: 4
permalink: consumer-experience-ios-sdk-delegates.html

indicator: chat messaging
---
The SDK uses 2 delegates:

1. `LPMessagingSDKDelegate - for lifecycle and connectivity events.`

2. `LPMessagingSDKNotificationDelegate - for handling push and in app notifications.`

You should implement and set the delegate for the above in order to receive notification from the SDK.