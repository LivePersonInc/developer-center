---
pagename: initialize (Deprecated)
redirect_from:
  - android-initializedeprecated.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 12
permalink: mobile-app-messaging-sdk-for-android-methods-initialize-(deprecated).html

indicator: messaging
---

*This method was deprecated - please use the [new method](android-initializeproperties.html).*

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK. All subsequent API calls, except to the handlePushMessage, assume that the SDK has been initialized.
When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session.

`public static void initialize (Context context, String brandId, InitLivePersonCallBack initCallBack)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| brandId | An account ID |
| initCallBack | An InitLivePersonCallBack implementation |


