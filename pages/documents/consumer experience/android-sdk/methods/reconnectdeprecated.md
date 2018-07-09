---
title: reconnect (Deprecated)
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 80
permalink: mobile-app-messaging-sdk-for-android-methods-reconnect-(deprecated).html

indicator: messaging
---

*This method was deprecated - please use the [reconnect( LPAuthenticationParams) ](android-reconnectfull.html){:target="_blank"}.*

Reconnect with a new authentication key. When connecting with an authentication key, the connection may be closed once the token is expired. When this happens, the [onTokenExpired](android-callbacks-index.html){:target="_blank"} callback method is called. In this case, the application needs to obtain a fresh key and reconnect by calling the reconnect method.

`public static void reconnect(String authKey)`

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |
