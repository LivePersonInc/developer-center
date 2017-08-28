---
title: Configuration of Push Proxy
Keywords:
level1: Documents
level2: Guides
level3: Push Notification Service (iOS and Android)

order: 40
permalink: push-service-configuration.html

indicator: messaging
---

Push proxy is configured by LivePerson. To enable this feature, please contact your account team.
The data and files required for push proxy configuration are:

- **App Name** - The app ID used on registration for push from the mobile app.
     Example: com.mybrand.app
     - Android - See SDK’s  [registerLPPusher](https://developers.liveperson.com/android-registerlppusher.html) method.
     - IOS - Usually the Bundle ID or an alternate ID. See SDK’s [registerPushNotifications](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#registerpushnotifications) method.
Note that In debug mode, the SDK appends "-Dev" string to the bundle ID on registration to push.
You can either configure a different endpoint for this mode or create a “duplicate” configuration to match the new ID (i.e com.mybrand.app-Dev).

- **End Point URL** - an end URL to be used for the relevant app’s push.
- **Optional configuration**
	- **Authorization** - HTTP Basic Authentication (BA) header. 
		- Username. 
		Example:  Aladdin.
		- Password. 
Example: opensesame.
	- **Key** - TLS key file. 
	Example: mybrandpushKey.pem
	- **Certificate** - TLS certification file location. 
Example: mybrandpushCrt.pem
