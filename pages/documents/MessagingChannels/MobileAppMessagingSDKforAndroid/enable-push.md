---
pagename: Notifications
redirect_from:
  - android-push-notifications.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android

order: 140
permalink: mobile-app-messaging-sdk-for-android-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that make the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.


### Prerequisites
- **LiveEngage account** information (account ID and login credentials), messaging enabled, and the mobile app configured. 
  <div class="notice">If you don't know your account information, you can get it from your LivePerson account team.</div>
- [Latest version](https://developer.android.com/studio) of **Android Studio**. 
- [Latest version](https://gradle.org/install/) of **Gradle**.
- **Firebase** has been [added to your Android project](https://firebase.google.com/docs/android/setup). 
- **Firebase Cloud Messaging (FCM) SDK** installed and set up. For more details, see [Google FCM](https://firebase.google.com/docs/cloud-messaging/android/client).
- **Registration token for the client app instance**, which identifies your app in LiveEngage. On initial startup of your app, the FCM SDK generates a registration token.  

### Configure push notifications

<div class="important">
The proprietary SDK notification is only for display purposes, interacting with it won't launch the Application or navigate to the Conversation Fragment/Activity. For a fully interactive notification, the host app needs to provide the implementation.
</div>

1. Use the registration token for the client app instance and register it using the [registerLPPusher()](android-registerlppusher.html) API call so it knows which device should get each push message. 
2. Upon receiving a push message to your app, **handle** it so it is displayed to the customer.  
   
   ```java
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
3. Log into your [LiveEngage account](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~).

4. Navigate to **Campaigns**, and click **Data Sources**.

   ![campaigns](img/campaigns.png)

5. Select **Manage** under **Mobile App management**.

   ![app](img/mobieAppManagement.png)

6. Click **Add new** to associate your app with the LiveEngage account.

   ![keymanagement](img/keymanagement.png)

7. Select your platform as Android, enter your app’s name and your push notification API key, and then click **Create app**.

   ![addnewapp](img/addnewapp.png)

8. Click **Close** to complete the process.
