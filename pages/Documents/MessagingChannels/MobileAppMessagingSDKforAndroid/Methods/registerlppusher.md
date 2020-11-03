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


If your system implementation involves an authentication step, use `LPAuthenticationParams`.

There are 2 authenticated connection methods:

* Authenticated (authenticationKey) 

* Unauthenticated 

```java
public static void registerLPPusher(String brandId, String appId, String gcmToken, LPAuthenticationParams authenticationParams, final ICallback<Void, Exception> registrationCompletedCallback)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID, for example, 652838922. |
| appId | The host app ID, for example, com.liveperson.myApp. |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server. |
| authenticationParams | An optional parameter that enables registering without first opening a conversation. |
| registrationCompletedCallback | An optional callback on the registration status. |


### Authenticated (authenticationKey)

Call `LPAuthenticationParams().setAuthKey("yourAuthCode")` to allow the LivePerson backend to verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

**Note:** When using this method, you can also set a special redirect URL when authenticating by calling: `lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)` with jwt - new `LPAuthenticationParams().setHostAppJWT("yourJwt")`.

When using **registerLPPusher** with authentication parameters for JWT renewal (JWT renewal when in the background), the authentication process goes into an infinite loop.  Use `updateTokenInBackground` to separate the *register to push* and the *token update* when in the background.  

When the JWT expires or if the registration fails due to an expired token, the `onTokenExpired()` callback gets called.  

* If the screen is in the background, the host app uses the updateTokenInBackground() API with new authentication parameters instead of calling `registerLPPusher()`. 

* If the screen is in the foreground, the host app calls `reconnect()` to renew the JWT.

Code sample
```java
@Override
 public void onTokenExpired() {

 String jwt = generateNewJwt(); // A host app method

 LivePerson.updateTokenInBackground("1234567", new LPAuthenticationParams().setAuthKey(jwt));

}
```

### Unauthenticated

Pass null or an empty LPAuthenticationParams.