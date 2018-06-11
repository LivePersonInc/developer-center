---
title: Notifications
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android

order: 140
permalink: android-push-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that make the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

_**Note:** In order to enable push notifications, you must also configure them within the LiveEngage UI. See instructions below._

To implement push notifications on the client side:

- Get your app’s AppKey from [Google GCM](https://developers.google.com/cloud-messaging/gcm){:target="_blank"} or [Google FCM](https://firebase.google.com/docs/cloud-messaging/){:target="_blank"} and set it in the LiveEngage backend, as explained below, to identify your app by LiveEngage.
- On every app launch get the GCM Token from your device and register it on the LiveEngage push service using the [registerLPPusher()](android-registerlppusher.html){:target="_blank"} API call so it knows which device should get each push message.
- Upon receiving a push message to your app, [handle](android-handlepush.html){:target="_blank"} it so it is displayed to the customer.


```swift
public class MyFirebase extends FirebaseMessagingService {
  /**
   * Called when message is received.
   * @param remoteMessage Object representing the message received from Firebase Cloud Messaging.
   */
  @Override
  public void onMessageReceived(RemoteMessage remoteMessage) {
    // Sends the message into the SDK
    LivePerson.handlePushMessage(this, remoteMessage.getData(), lpAccount, true);
  }
}
```

<div style="color:red;font-weight:bold;">
Important:
</div>

**The proprietary SDK notification is only for display purposes, interacting with it won't launch the Application or navigate to the Conversation Fragment/Activity, for a fully interactive notification, the host app needs to provide the implementation.**

### Configuring Push Notifications

Follow the instructions below to set up your app key to enable push notifications.

*Note: Before you begin the setup, you must ensure your LiveEngage account is configured and connected to the SDK.*

1. Enter your LiveEngage account through this [Login URL](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~){:target="_blank"}.

	You will need the following info from your LivePerson account team:

	* LiveEngage account number

	* User ID (must be an administrator user)

	* Password

2. Within LiveEngage, navigate to **Campaigns**, and click **Data Sources**.

![campaigns](img/campaigns.png)

3. Then select **Manage** under **Mobile App management**.

![app](img/mobieAppManagement.png)

4. Click **Add new** to associate your app with the LiveEngage account.

![keymanagement](img/keymanagement.png)

5. Select your platform as Android, enter your app’s name and your push notification API key, and then click **Create app**.

![addnewapp](img/addnewapp.png)

6. Click **Close** to complete the process.
