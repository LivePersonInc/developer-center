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

LPAuthenticationParams:

If your system implementation involves an authentication step - pass LPAuthenticationParams.

There are 2 authenticated connection methods:

with authenticationKey - LPAuthenticationParams().setAuthKey("yourAuthCode").
Note: Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

Optional: When using this method, you can also set a special redirect URL when authenticating by calling : lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl) with jwt - new LPAuthenticationParams().setHostAppJWT("yourJwt")

**Note**: if you want to connect in an unAuthenticated way, you can pass null or an empty LPAuthenticationParams.

`public static void registerLPPusher(String brandId, String appId, String gcmToken, LPAuthenticationParams authenticationParams, final ICallback<Void, Exception> registrationCompletedCallback)`

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID (e.g. 652838922). |
| appId | The host app ID (e.g. com.liveperson.myApp). |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. |

*Note: If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server.*
