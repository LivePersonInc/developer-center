---
title: Initialization
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 2
permalink: android-initialization.html

---

Add the code below to initialize the SDK:

```javascript
{
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

Once initialization is completed (onInitSucceed), you can call LivePerson methods.

The SDK supports two operation modes: Activity and Fragment. For more information about each mode, refer to [Step 3: Code integration for basic deployment](android-quickstart.html#step-3-code-integration-for-basic-deployment){:target="_blank"}.

To start LivePerson's Activity mode:

`LivePerson.showConversation(Activity activity);`

To start LivePerson's Fragment mode: (Attach the returned fragment to a container in your activity) :

`LivePerson.getConversationFragment();`

When using fragment mode, you could use the provided SDK callbacks in your app in order to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.


***

**Shut Down**

Close LivePerson Messaging SDK- Uninitialized SDK without cleaning data.

`public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)`

Click [here](android-shutdown.html){:target="_blank"} for more information.

**Logout**

Close LivePerson Messaging SDK- Clear LivePerson Messaging SDK data and unregistering push.

`public static void logOut(final Context context, final String brandId, final String appId, final LogoutLivePersonCallback logoutCallback)`

Click [here](android-logout.html){:target="_blank"} for more information.
