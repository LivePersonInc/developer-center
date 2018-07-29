---
title: logout
Keywords:

level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: Methods

order: 120
permalink: consumer-experience-ios-sdk-logout.html

indicator: messaging
---

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](consumer-experience-ios-sdk-destruct.html){:target="_blank"}).


`func logout()`
