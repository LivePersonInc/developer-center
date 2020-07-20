---
pagename: shutDown (Deprecated)
redirect_from:
  - android-shutdowndeprecated.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 240
permalink: mobile-app-messaging-sdk-for-android-methods-shutdown-(deprecated).html

indicator: messaging
---


*Deprecated. Please use the [shutDown(ShutDownLivePersonCallback)](android-shutdown.html) method.*

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection. 

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html) API. 

`public static void shutDown()`

*Note: This does not end the current messaging conversation.*

**Important: This method must not be called when the conversation screen is displayed.**