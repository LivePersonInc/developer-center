---
pagename: handlePush
redirect_from:
  - consumer-experience-ios-sdk-handlepush.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 140
permalink: mobile-app-messaging-sdk-for-ios-methods-handlepush.html

indicator: messaging
---

In order to receive all incoming push notifications in a single function and handle them, add the following method. This method cooperates with two other API methods: 

* This method calls the shouldShowPushNotification method. If the host app returns false, the SDK will not show anything to the UI. 
* Otherwise, the SDK will ask the host app to provide a view as an in-app notification. If the host app doesn’t implement this method, the SDK will use its own implementation. 

```javascript
func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {

		LPMessagingSDK.instance.handlePush(userInfo)

}
```