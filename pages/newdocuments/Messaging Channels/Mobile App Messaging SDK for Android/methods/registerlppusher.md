---
pagename: registerLPPusher
redirect_from:
  - android-registerlppusher.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 110
permalink: mobile-app-messaging-sdk-for-android-methods-registerlppusher.html

indicator: messaging
---


`public static void registerLPPusher(String brandId, String appId, String gcmToken)`

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID (e.g. 652838922). |
| appId | The host app ID (e.g. com.liveperson.myApp). |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. |

*Note: If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server.*