---
title: checkAgentID
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Methods

order: 180
permalink: android-checkagentid.html

indicator: messaging
---


If there is an active conversation, this API returns agent data through the provided callback. If there is no active conversation, the API returns null.

[AgentData definition](android-interface-definitions.html){:target="_blank"}

`public static void checkAgentID(final ICallback<AgentData, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html){:target="_blank"} implementation |
