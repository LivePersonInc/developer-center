---
pagename: initialize (with SDK properties object)
redirect_from:
  - android-initializeproperties.html
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods
order: 20
permalink: mobile-app-messaging-sdk-for-android-methods-initialize-(with-sdk-properties-object).html
indicator: messaging
---

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK; all subsequent API calls. Except for the handlePushMessage, assume that the SDK has been initialized.

When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session. This method gets InitLivePersonProperties, which includes the properties needed for the init phase of the SDK.

`public static void initialize (Context context, InitLivePersonProperties initProperties)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| initProperties | An object with all the properties needed to initialize the SDK |

