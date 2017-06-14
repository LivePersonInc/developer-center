---
title: handlePush
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 140
permalink: consumer-experience-ios-sdk-handlepush.html

indicator: chat messaging
---

In order to receive all incoming push notifications in a single function and handle them, add the following method. This method cooperates with two other API methods: 

* This method calls the shouldShowPushNotification method. If the host app returns false, the SDK will not show anything to the UI. 
* Otherwise, the SDK will ask the host app to provide a view as an in-app notification. If the host app doesn’t implement this method, the SDK will use its own implementation. 

```javascript
func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {

		LPMessagingSDK.instance.handlePush(userInfo)

}
```