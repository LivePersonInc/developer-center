---
title: showConversation (with authentication support)
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Methods

order: 40
permalink: android-showconversationauth.html

---

Same as [showConversation](android-showconversation.html){:target="_blank"} with the addition of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

`public static boolean showConversation(Activity activity, String authenticationKey)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
| authenticationKey | The authentication key  |

