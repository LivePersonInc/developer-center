---
pagename: hideConversation
redirect_from:
  - android-hideconversation.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 50
permalink: mobile-app-messaging-sdk-for-android-methods-hideconversation.html

indicator: messaging
---

The hideConversation API hides the conversation activity. The conversation screen is shown again by calling Start Conversation. 

`public static void hideConversation(Activity activity)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |

*Notes*: 

- *Hiding the conversation closes the WebSocket.*
- *When using the SDK’s activity, the back button performs the same function.*

