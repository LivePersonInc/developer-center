---
pagename: Push Proxy
redirect_from:
  - push-service-configuration.html
  - configuration-of-push-proxy.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Push Notification Service
subfoldername: Configuration
order: 40
permalink: push-notification-service-configuration-push-proxy.html

indicator: messaging
---

Push proxy is a feature that can be self-managed in the Conversational Cloud console.

In order to enable the push proxy feature, you will require the following data and files:

* **App Name** - The app ID used on registration for push from the mobile app. For example: `com.mybrand.app`

     * Android Registration for Push Method - See SDK’s  [registerLPPusher](android-registerlppusher.html) method.

     * IOS Registration for Push - The app name is usually the Bundle ID or an alternate ID. See SDK’s [registerPushNotifications](mobile-app-messaging-sdk-for-ios-sdk-apis-monitoring-api.html#registerpushnotifications) method on how to register. **Note** that in debug mode, the SDK appends a "-Dev" string to the bundle ID on registration to push. You can either configure a different endpoint for this mode or create a “duplicate” configuration to match the new ID (i.e `com.mybrand.app-Dev`).

* **End Point URL** - an end URL to be used for the relevant app’s push.

---

### Optional configurations

* **Authorization** - HTTP Basic Authentication (BA) header.

    * Username. _Example_:  Alibaba.

    * Password. _Example_: opensesame.

* **Key** - TLS Key file. _Example_: mybrandpushKey.pem

* **Certificate** - TLS certification file. _Example_: mybrandpushCrt.pem

* **Custom Headers** - Custom HTTP header set by the Brand (up to 4 custom headers)

  * Name - max length of 24 characters (only alphabets)

  * Value - max length of 300 characters (allows alphanumeric & special characters : -, _, $, &, @,.,#,*)

--- 

This information can be added to the Mobile app management section under Data Sources

<img src="/img/pusher/ProxyHeaders.png" alt="Push Notification Proxy" style="width: 800px;padding: 20px;">
