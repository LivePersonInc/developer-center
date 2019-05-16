---
pagename: Notifications
redirect_from:
  - consumer-experience-ios-sdk-pushnotifications.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 15
permalink: mobile-app-messaging-sdk-for-ios-configuration-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that makes the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

### Prerequisites

Followed the [Quick Start Guide for iOS](mobile-app-messaging-sdk-for-ios-quick-start.html) and you are now ready to implement and enable features.

### Step 1. Turn on push notifications

In your Xcode project, under **Capabilities**, flip the toggle on for the following:

- **Push:** Notifies the user when a new message from the remote user is received.

- **Maps:** Shows the location on the map.

### Step 2. Set up in-app push notifications 

1. Pass the user info of a remote push notification to the SDK:

   ```swift
   public func handlePush(userInfo: [NSObject : AnyObject])
   ```

2. Register the device token on LPMesssagingSDK instance:

   ```swift
   func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil, authenticationParams: LPAuthenticationParams? = nil)
   ```

   The SDK receives the device token from the registerPushNotifications but the actual registration occurs only after calling showConversation.

3. Add custom behavior if LivePerson Push Notification was touched:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)
   ```

4. Hide or show the In-App Push Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool
   ```

5. Override LPMessagingSDK - In-App Push Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView
   ```

6. Add custom tap behavior to LPMessagingSDK - In-App Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(notificationTapped notification: LPNotification)
   ```

   When using a Custom View for the in-app notification (LPMessagingSDKNotification(customLocalPushNotificationView)) the LPMessagingSDKNotificationDelete method gets overridden. 

   {:.important}
   The proprietary SDK notification is only for display purposes, interacting with it launches the app, but does not navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.

### Step 3. Create your app certificate and key file

In this step, you create a Certificate Signing Request (CSR) file that contains a public/private key pair. With this file, you create a key file without a password (.p12) file and a certificate (.crt) file using a pem format.

1. In the Applications folder, launch **Keychain Access**.

2. From the Keychain Access menu, select **Certificate Assistant > Request a Certificate from a Certificate Authority**. 

3. Enter the required information:

   - User Email Address

   - Common Name (a name for your private key, for example, John Doe Dev Key)

   - CA Email Address

4. Select the **Saved to disk** option for the Request is and then click **Continue**. 

5. Click **Save**. 

6. Go to your Apple Developer Portal, under Push Notification, select **Apple Push Notifications service SSL Certificates** and then click **Create Certificate** for either Development or Production.

7. Under Upload CSR file, click **Choose File**, select the CSR file you created earlier, and then click **Generate**.

8. Click **Download** to download a .cer file and then click **Done**. 

   You use this file to create the .pem file certificate.

9. Locate the downloaded **.cer** file and double-click it to install in Keychain Access.

10. In Keychain Access, right-click on your new push certificate and select **Export**.

11. Enter a certificate name, for example **key**.

12. Ensure the file type selected is **Personal Information Exchange (.p12)** and then click **Save**.

13. (Optional) Enter a password when prompted.  

    You use the cert.pem and key.pem files when you configure push notifications in LiveEngage.

14. Open a terminal and navigate to the folder where you want to save the file.

15. Run the following command to **create the cert.pem file**:

    ```bash
    openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
    ```

16. Run the following commands to **convert the private key.p12 file** into a .pem file:

    ```bash
    cp Certificates.p12 key.p12
    openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
    ```

16. Enter a passphrase for the key pem file and then enter any password the RSA .pem key.

    ```bash
    openssl rsa -in keyWithPassword.pem -out hostkey.pem
    ```

### Step 4. Configure push notifications in LiveEngage

Before you begin, make sure you have configured your LiveEngage account and connected it to the SDK.

1. Log into your [LiveEngage account](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~).

2. In LiveEngage, click the **Campaigns** tab, and then **Data Sources**.

   ![Data Sources](img/androiddatasources.jpg)

3. On the Integrations tab, under **Mobile app management**, click **Manage**.

4. Click **Add new** to add your app to the mobile campaign.

5. Select your platform as iOS, enter your app’s name, and then click **Create app**. 

6. Upload your app certificate and key file in the appropriate locations. 

   - **Certificate file:** dev-cert.pem

   - **Key file:** hostkey.pem

   If you are using a development certificate you should uncheck the Production checkbox and add DEV postfix to the Mobile app name. For example, if your app Bundle ID is AppId, your mobile app name should be "AppId-Dev". If you are using a production certificate you should leave the production checkbox checked and insert to the Mobile App name your App Bundle ID as it is.

   **Tip:** You have a 50 character limit for your Bundle ID.

7. Click **Close**.

