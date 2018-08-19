---
pagename: setUserProfile (Deprecated)
redirect_from:
  - android-setuserprofiledeprecated.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 100
permalink: mobile-app-messaging-sdk-for-android-methods-setuserprofile-(deprecated).html

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


