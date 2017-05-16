---
title: LivePerson Callbacks Interface
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 3
permalink: android-callbacks-interface.html

---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation.

To register the callback call:

`LivePerson : public static void setCallback(final LivePersonCallback listener) `

To remove a callback:

`LivePerson : public static void removeCallBack()` 

Click [here](android-callbacks-index.html){:target="_blank"} for more information.

**Shut Down**

Close LivePerson Messaging SDK- Uninitialized SDK without cleaning data.

`public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)`

Click [here](android-shutdown.html){:target="_blank"} for more information.

**Logout**

Close LivePerson Messaging SDK- Clear LivePerson Messaging SDK data and unregistering push.

`public static void logOut(final Context context, final String brandId, final String appId, final LogoutLivePersonCallback logoutCallback)`

Click [here](android-logout.html){:target="_blank"} for more information.