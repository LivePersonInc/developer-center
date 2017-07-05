---
title: setUserProfile (Deprecated)
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Methods

order: 100
permalink: android-setuserprofiledeprecated.html

indicator: messaging
---

*Deprecated. Please use the [setUserProfile](android-setuserprofile.html){:target="_blank"} (String firstName, String lastName, String phone) method ).*

The setUserProfile API takes custom parameters about the consumer as an input and sets it to be displayed on the messaging Agent Workspace consumer transcript. This can be set at any time either before, after, or during a messaging session.

`public static void setUserProfile(String appId, String firstName, String lastName, String phone)*`

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| firstName | User’s first name |
| lastName | User’s last name |
| phone | User’s phone |


