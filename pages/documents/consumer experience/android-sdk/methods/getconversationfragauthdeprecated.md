---
title: getConversationFragment with authentication support (Deprecated)
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 70
permalink: android-getconversationfragauthdeprecated.html

indicator: messaging
---

*This method was deprecated - please use the [getConversationFragment( LPAuthenticationParams, ConversationViewParams) ](android-getconversationfragfull.html){:target="_blank"}.*

Same as [getConversationFragment](android-getconversationfragdeprecated.html){:target="_blank"} with the attention of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified, or your backend isn’t set up with the LivePerson backend, this call will fail.

`public static Fragment getConversationFragment(String authKey)`

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |
