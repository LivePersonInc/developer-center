---
pagename: Authentication for Android
redirect_from:
  - android-authentication.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Appendix

order: 130
permalink: mobile-app-messaging-sdk-for-android-appendix-authentication.html

indicator: messaging
---

### Authentication methods 

If your system implementation involves an authentication step , you can use one of the following methods in order to get the conversation view:

#### Activity mode

```java
LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

#### Fragment mode (Attach the returned fragment to a container in your activity)

```java
LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

### Authenticated connection methods

#### AuthenticationKey
The LivePerson back-end verifies the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

```java
LPAuthenticationParams().setAuthKey("yourAuthCode").
```

**Tip:** Alternatively, when using this method, you can also set a special redirect URL when authenticating by calling:

```java
lpAuthenticationParams.setHostAppRedirectUri("yourRedirectUrl")
```

#### JWT

```java
LPAuthenticationParams().setHostAppJWT("yourJwt")
```

Once the Authentication key expires, you get notified with a callback / local intent ["void onTokenExpired()"](android-callbacks-index.html#token-expired).

To re-connect with a new Authentication key, use [reconnect( LPAuthenticationParams lpAuthenticationParams) ](android-methods.html#reconnect)


{:.important}
Errors while trying to connect uses callback: `void onError(TaskType type, String message);`
