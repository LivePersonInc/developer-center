---
title: Configuration of Push Proxy
redirect_from:
  - push-service-configuration.html
Keywords:
sitesection: Documents
level2: Guides


order: 40
permalink: push-notification-service-configuration-of-push-proxy.html

indicator: messaging
---

Push proxy is a feature configured by LivePerson. To enable this feature, please contact your account team.

In order for LivePerson to enable the push proxy feature, you must provide the following data and files:

* **App Name** - The app ID used on registration for push from the mobile app. For example: `com.mybrand.app`

     * Android Registration for Push Method - See SDK’s  [registerLPPusher](android-registerlppusher.html){:target="_blank"} method.

     * IOS Registration for Push - The app name is usually the Bundle ID or an alternate ID. See SDK’s [registerPushNotifications](consumer-experience-ios-sdk-methods.html#registerpushnotifications){:target="_blank"} method on how to register. **Note** that in debug mode, the SDK appends a "-Dev" string to the bundle ID on registration to push. You can either configure a different endpoint for this mode or create a “duplicate” configuration to match the new ID (i.e `com.mybrand.app-Dev`).

* **End Point URL** - an end URL to be used for the relevant app’s push.

* **Optional configuration**

	* **Authorization** - HTTP Basic Authentication (BA) header.

		* Username. _Example_:  Alibaba.

		* Password. _Example_: opensesame.

	* **Key** - TLS Key file. _Example_: mybrandpushKey.pem

  * **Certificate** - TLS certification file. _Example_: mybrandpushCrt.pem
