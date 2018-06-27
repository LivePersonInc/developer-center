---
title: Authentication
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android

order: 130
permalink: android-authentication.html

indicator: messaging
---

If your system implementation involves an authentication step , you can use one of the following methods in order to get the conversation view:

To start LivePerson's Activity mode:

```swift
LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

To start LivePerson's Fragment mode: (Attach the returned fragment to a container in your activity):

```swift
LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

There are 2 authenticated connection methods:

 1. **AuthenticationKey** - Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

    ```swift
    LPAuthenticationParams().setAuthKey("yourAuthCode").
    ```

 _**Optional**_ - when using this method, you can also set a special redirect URL when authenticating by calling: lpAuthenticationParams.setHostAppRedirectUri("yourRedirectUrl")

 2. **JWT**:

    ```swift
    LPAuthenticationParams().setHostAppJWT("yourJwt")
    ```


Once the Authentication key is expired, you will be notified with callback / local intent ["void onTokenExpired()"](android-callbacks-index.html#token-expired){:target="_blank"}.

To re-connect with new Authentication key use [reconnect( LPAuthenticationParams lpAuthenticationParams) ](https://developers.liveperson.com/android-methods.html#reconnect){:target="_blank"}


**Note: errors while trying to connect will call callback : void onError(TaskType type, String message);**
