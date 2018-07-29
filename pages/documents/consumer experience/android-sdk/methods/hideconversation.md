---
title: hideConversation
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 50
permalink: android-hideconversation.html

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

