---
pagename: checkAgentID
redirect_from:
  - android-checkagentid.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 180
permalink: mobile-app-messaging-sdk-for-android-methods-checkagentid.html

indicator: messaging
---


If there is an active conversation, this API returns agent data through the provided callback. If there is no active conversation, the API returns null.

[AgentData definition](android-interface-definitions.html)

`public static void checkAgentID(final ICallback<AgentData, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html) implementation |
