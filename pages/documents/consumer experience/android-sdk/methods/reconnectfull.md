---
title: reconnect
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 75
permalink: android-reconnectfull.html

indicator: messaging
---

Reconnect with a new authentication key / new JWT. the connection may be closed once the token is expired. When this happens, the [onTokenExpired](android-callbacks-index.html#token-expired){:target="_blank"} callback / local intent method is called. In this case, the application needs to obtain a fresh key and reconnect by calling the reconnect method.


There are 2 authenticated connection methods:

 1. with authenticationKey - Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.
  new LPAuthenticationParams().setAuthKey(yourAuthCode).

_Optional_ - when using this method, you can also set a special redirect URL when authenticating; by calling : lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)

 2. with jwt - new LPAuthenticationParams().setHostAppJWT(yourJwt)



`public static void reconnect(LPAuthenticationParams lpAuthenticationParams)`

| Parameter | Description |
| :--- | :--- |
| lpAuthenticationParams | authentication params |
