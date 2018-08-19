---
pagename: showConversation (full authentication support + view modes)
redirect_from:
  - android-showconversationfull.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 25
permalink: mobile-app-messaging-sdk-for-android-methods-showconversation-(full-authentication-support-+-view-modes).html

indicator: messaging
---

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns true, else it returns false.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

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

`public static boolean showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
| LPAuthenticationParams | authentication params |
| ConversationViewParams | view params |
