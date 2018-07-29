---
title: User Data
redirect_from:
  - android-user-data.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Configuration

order: 60
permalink: mobile-app-messaging-sdk-for-android-configuration-user-data.html

indicator: messaging
---

Pass and display consumer information to agents, and agent information to consumers. See more information about each method [click here for setUserProfile](android-methods.html#setuserprofile){:target="_blank"} and [click here for checkAgentID](android-methods.html#checkagentid){:target="_blank"}

* To set the User Profile (Not an SDE):

```swift
public static void setUserProfile(ConsumerProfile profile)
```

_**Note:** when using SDEs (Authenticated Chat), SDEs have priority and will override the setUserProfile._

* Get Agent Details:

```swift
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
```
