---
title: Notifications
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android

order: 14
permalink: android-push-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that make the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available. 

*Note: In order to enable push notifications, you must also configure them within the LiveEngage UI. See instructions [here](android-pushnotifications.html).*

To implement push notifications on the client side: 

- Get your app’s AppKey from [Google GCM](https://developers.google.com/cloud-messaging/gcm){:target="_blank"} or [Google FCM](https://firebase.google.com/docs/cloud-messaging/){:target="_blank"} and set it in the LiveEngage backend, as explained [here](android-pushnotifications.html){:target="_blank"}, to identify your app by LiveEngage.
- On every app launch get the GCM Token from your device and register it on the LiveEngage push service using the [registerLPPusher()](android-registerlppusher.html){:target="_blank"} API call so it knows which device should get each push message.
- Upon receiving a push message to your app, [handle](android-handlepush.html){:target="_blank"} it so it is displayed to the customer.

`public class MyFirebase extends FirebaseMessagingService {`

```javascript
{
/**
 * Called when message is received.
 *
 * @param remoteMessage Object representing the message received from Firebase Cloud Messaging.
 */
@Override
public void onMessageReceived(RemoteMessage remoteMessage) {

   // Sends the message into the SDK
   LivePerson.handlePushMessage(this, remoteMessage.getData(), lpAccount, true);
}
}
```

### Configuring Push Notifcations

Log into your LiveEngage account using an administrator’s credentials and navigate to **Campaigns**.

![campaigns](img/campaigns.png)

**Step 1:** Click **Data Sources**, and then select **App**. 

![app](img/App.png)

**Step 2:** Click **Configure**.

![keymanagement](img/keymanagement.png)

**Step 3:** Click **Add new** to associate your app with the LiveEngage account.

**Step 4:** Select your platform as Android, enter your app’s name and your push notification API key, and then click **Create app**. 

Refer to the [Notifications](android-notifications.html){:target="_blank"} section on how to get the notification API key.

![addnewapp](img/addnewapp.png)

**Step 5:** Click **Close** to finish the process.
