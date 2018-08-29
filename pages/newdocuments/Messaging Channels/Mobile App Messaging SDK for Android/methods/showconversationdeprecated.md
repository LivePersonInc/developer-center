---
pagename: showConversation (Deprecated)
redirect_from:
  - android-showconversationdeprecated.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 30
permalink: mobile-app-messaging-sdk-for-android-methods-showconversation-(deprecated).html

indicator: messaging
---
*This method was deprecated - please use the [showConversation(Activity, LPAuthenticationParams, ConversationViewParams) ](android-showconversationfull.html).*

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns true, else it returns false.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

`public static boolean showConversation(Activity activity)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
