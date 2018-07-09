---
title: getConversationFragment (full authentication support + view modes)
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 55
permalink: mobile-app-messaging-sdk-for-android-methods-getconversationfragment-(full-authentication-support-+-view-modes).html

indicator: messaging
---

The getConversationFragment method creates and returns the conversation fragment.

*Note: This API does not show the actual screen, but only creates the fragment. Your implementation needs to handle when and how to show it.*

**LPAuthenticationParams:**

If your system implementation involves an authentication step - pass LPAuthenticationParams.

There are 2 authenticated connection methods:

 1. with authenticationKey - Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.
  new LPAuthenticationParams().setAuthKey(yourAuthCode).

_Optional_ - when using this method, you can also set a special redirect URL when authenticating; by calling : lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)

 2. with jwt - new LPAuthenticationParams().setHostAppJWT(yourJwt)

if you want to connect in an *unAuthenticated* way, you can pass null or an empty LPAuthenticationParams.

**ConversationViewParams:**

boolean viewOnlyMode : define if to show /hide the enter message area (under the conversation view)

`public static Fragment getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)`

| Parameter | Description |
| :--- | :--- |
| LPAuthenticationParams | authentication params |
| ConversationViewParams | view params |
