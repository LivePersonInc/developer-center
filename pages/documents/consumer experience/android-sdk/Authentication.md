---
title: Authentication
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android

order: 13
permalink: android-authentication.html

---

For users of OAuth 2.0 for customer authentication, the following functions apply: 

To start LivePerson's Activity mode:

`LivePerson : LivePerson.showConversation(Activity activity, String authKey);`

To start LivePerson's Fragment mode: (Attach the returned fragment to a container in your activity):

`LivePerson : LivePerson.getConversationFragment(String authKey);`

Once Authentication key is expired, you will be notified with callback ["void onTokenExpired()"](android-callbacks-index.html){:target="_blank"}. 

To re-connect with new Authentication key:

`LivePerson : public static void reconnect(String authKey)`

*Note: errors while trying to connect will call callback : void onError(TaskType type, String message);*
