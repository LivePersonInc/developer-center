---
title: Conversations Lifecycle
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Configuration

order: 40
permalink: android-conversations-lifecycle.html

indicator: messaging
---

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.

LivePerson API:

```swift
public static void checkActiveConversation(final ICallback<Boolean, Exception> callback)
public static void checkConversationIsMarkedAsUrgent(final ICallback<Boolean, Exception> callback)
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
public static void markConversationAsUrgent()
public static void markConversationAsNormal()
public static void resolveConversation()
public static boolean clearHistory()
```

*Note: Click [here](android-methods.html){:target="_blank"} for more information.*

Also via Callbacks:

```swift
void onConversationStarted(LPConversationData convData);
void onConversationResolved(LPConversationData convData);
void onConnectionChanged(boolean isConnected);
```

*Note: Click [here](android-callbacks-index.html#livepersoncallback){:target="_blank"} for more information.*
