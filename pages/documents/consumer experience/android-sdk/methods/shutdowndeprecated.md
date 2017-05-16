---
title: shutDown (Deprecated)
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Methods

order: 240
permalink: android-shutdowndeprecated.html

---


*Deprecated. Please use the [shutDown(ShutDownLivePersonCallback)](android-shutdown.html){:target="_blank"} method.*

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection. 

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html){:target="_blank"} API. 

`public static void shutDown()`

*Note: This does not end the current messaging conversation.*

**Important: This method must not be called when the conversation screen is displayed.**