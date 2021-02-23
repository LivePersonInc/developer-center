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

* Unregisters from the push notification service based on unregister Type provided.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](consumer-experience-ios-sdk-destruct.html)).


`func logout(unregisterType: LPPusherUnregisterType, 
            completion: @escaping ()->(), 
            failure: @escaping (_ error: Error)->())`

#### LPPusherUnregisterType
* **All**: unregister for all types of push notification messages

* **None**: do not unregister from the pusher at all

* **Agent**: Unregister only for agent push notification messages. Consumers can still receive outbound push notifications sent from the Proactive or Connect to Messaging (IVR) services.