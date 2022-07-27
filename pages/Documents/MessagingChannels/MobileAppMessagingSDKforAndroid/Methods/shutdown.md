---
pagename: shutDown
redirect_from:
  - android-shutdown.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Methods

order: 230
permalink: mobile-app-messaging-sdk-for-android-methods-shutdown.html

indicator: messaging
---

`public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)`

| Parameter | Description |
| :--- | :--- |
| shutdownCallback | A ShutDownLivePersonCallback (see below) implementation to get indication whether the shutdown succeeded or failed |

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection.

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html) API.

ShutDownLivePersonCallback callback description:

- onShutdownSucceed() method is called when the shutdown process finished successfully.
- onShutdownFailed() method is called when the shutdown process failed (for example, shutdown was called when the conversation screen is displayed in the foreground).

*Note: This does not end the current messaging conversation.*

### ShutDownLivePersonCallback

```javascript
{
public interface ShutDownLivePersonCallback {
  void onShutdownSucceed();
  void onShutdownFailed();
}
```
