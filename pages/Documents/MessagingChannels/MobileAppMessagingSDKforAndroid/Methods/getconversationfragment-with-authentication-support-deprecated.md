---
pagename: getConversationFragment with authentication support (Deprecated)
redirect_from:
  - android-getconversationfragauthdeprecated.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 70
permalink: mobile-app-messaging-sdk-for-android-methods-getconversationfragment-with-authentication-support-(deprecated).html

indicator: messaging
---

*This method was deprecated — please use [getConversationFragment(LPAuthenticationParams, ConversationViewParams)](android-getconversationfragfull.html).*

Same as [getConversationFragment](android-getconversationfragdeprecated.html) with the attention of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified, or your backend isn’t set up with the LivePerson backend, this call will fail.

`public static Fragment getConversationFragment(String authKey)`

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |
