---
title: initialize (Deprecated)
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Methods

order: 12
permalink: android-initializedeprecated.html

---

*This method was deprecated - please use the [new method](android-initializeproperties.html){:target="_blank"}.*

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK. All subsequent API calls, except to the handlePush, assume that the SDK has been initialized.
When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session.

`public static void initialize (Context context, String brandId, InitLivePersonCallBack initCallBack)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| brandId | An account ID |
| initCallBack | An InitLivePersonCallBack implementation |


