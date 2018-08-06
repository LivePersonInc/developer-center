---
title: Initialization
redirect_from:
  - android-initialization.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Configuration

order: 20
permalink: mobile-app-messaging-sdk-for-android-configuration-initialization.html

indicator: messaging
---

Add the code below to initialize the SDK:

```swift
String brandID = "Your-Liveperson-Account-Id-String";
String appID = "your-app-package-name"
LivePerson.initialize(context, new InitLivePersonProperties( brandID, appID,
  new InitLivePersonCallBack() {
    @Override
    public void onInitSucceed() {
    }

    @Override
    public void onInitFailed(Exception e) {
    }
  }
);
```

| Element | Description |
| :--- | :--- |
| brandID | Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative. |
| appID | Your app ID, used for registering LP pusher service. |
| onInitSuccess | Callback that indicates the init process has finished successfully. |
| onInitFailed | Callback that indicates the init process has failed. <br> *Note: You can call initialize before showing LivePerson's Activity/Fragment, but it is recommended to initialize the SDK in your app's Application class.* |

<div class="important">
Important:


**To use the Monitoring API, you need to initialize the SDK with MonitoringParams. For more information, click [here](android-quickstart-manual.html#step-4-optional-initialization-with-monitoring-params){:target="_blank"}**

Once initialization is completed (**onInitSucceed**), you can call LivePerson methods.

</div>

The SDK supports two operation modes:

* Activity.

* Fragment.

_**Note: For more information about each mode, refer to [Step 3: Code integration for basic deployment](android-quickstart.html#step-3-code-integration-for-basic-deployment){:target="_blank"}.**_

To start LivePerson's Activity mode:

```swift
LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

To start LivePerson's Fragment mode: (Attach the returned fragment to a container in your activity) :

```swift
LivePerson.getConversationFragment( LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

When using fragment mode, you could use the provided SDK callbacks in your app in order to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.


**Shut Down**

Close LivePerson Messaging SDK- Uninitialized SDK without cleaning data.

```swift
public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)
```

Click [here](android-shutdown.html){:target="_blank"} for more information.

**Logout**

Close LivePerson Messaging SDK- Clear LivePerson Messaging SDK data and unregister push.

```swift
public static void logOut(final Context context, final String brandId, final String appId, final LogoutLivePersonCallback logoutCallback)
```

Click [here](android-logout.html){:target="_blank"} for more information.
