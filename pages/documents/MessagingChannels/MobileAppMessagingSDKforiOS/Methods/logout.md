---
pagename: logout
redirect_from:
  - consumer-experience-ios-sdk-logout.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 120
permalink: mobile-app-messaging-sdk-for-ios-methods-logout.html

indicator: messaging
---

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](consumer-experience-ios-sdk-destruct.html)).


`func logout()`
