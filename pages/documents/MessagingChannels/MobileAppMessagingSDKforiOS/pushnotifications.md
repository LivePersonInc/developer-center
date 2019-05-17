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

For push notifications to work, you must have a physical device and two .pem files for LiveEngage. Here, you will set up push notifications in your Xcode project, create your app certificate and key files, and create the required .pem files to implement push notifications.  

### Prerequisites

Followed the [Quick Start Guide for iOS](mobile-app-messaging-sdk-for-ios-quick-start.html) and you are now ready to implement and enable features.

### Step 1. Set up push notifications in your project

1. In your Xcode project, under **Capabilities**, flip the toggle on for the following:

   - **Push:** Notifies the user when a new message from the remote user is received.

   - **Maps:** Shows the location on the map.

   - **Background Modes + Remote notifications:** Minimizes the amount of time that elapses between when a user sees a push notification and when your app is able to display the content.


2. Pass the user info of a remote push notification to the SDK:

   ```swift
   public func handlePush(userInfo: [NSObject : AnyObject])
   ```

3. Register the device token on LPMesssagingSDK instance:

   ```swift
   func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil, authenticationParams: LPAuthenticationParams? = nil)
   ```

   The SDK receives the device token from the registerPushNotifications but the actual registration occurs only after calling showConversation.

4. Add custom behavior if LivePerson Push Notification was touched:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)
   ```

5. Hide or show the In-App Push Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool
   ```

6. Override LPMessagingSDK - In-App Push Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView
   ```

7. Add custom tap behavior to LPMessagingSDK - In-App Notification:

   ```swift
   <LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(notificationTapped notification: LPNotification)
   ```

   When using a Custom View for the in-app notification (LPMessagingSDKNotification(customLocalPushNotificationView)) the LPMessagingSDKNotificationDelete method gets overridden. 

   {:.important}
   The proprietary SDK notification is only for display purposes, interacting with it launches the app, but does not navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.

### Step 2. Create a Certificate Signing Request

In this step, you create a Certificate Signing Request (CSR) file that contains a public/private key pair. With this file, you create a key file with a password (Certificates.p12) file and a certificate (.cer) file using a pem format.

1. In the Applications folder, launch **Keychain Access**.

2. From the Keychain Access menu, select **Certificate Assistant > Request a Certificate from a Certificate Authority**. 

3. Enter the required information:

   - User Email Address

   - Common Name (a name for your private key, for example, John Doe Dev Key)

   - CA Email Address

4. Select the **Saved to disk** option for the Request is and then click **Continue**. 

5. Click **Save**. 

### Step 3. Create the SSL certificate

1. Go to your Apple Developer Portal, under Push Notification, select **Apple Push Notifications service SSL Certificates** and then click **Create Certificate** for either Development or Production.

2. Under Upload CSR file, click **Choose File**, select the CSR file you created earlier, and then click **Generate**.

3. Click **Download** to download the apps_development.cer file and then click **Done**. 

   You use this .cer file to create the dev-cert.pem file.

### Step 4. Create the certificate and key .pem files 

1. Locate the downloaded **apps_development.cer** file and double-click it to install it in Keychain Access.

2. In Keychain Access, right-click on your new push certificate and select **Export**.

3. Save the certificate as **Certificates.p12**.

4. (Optional) Enter a password when prompted.  

5. Open a terminal and navigate to the folder where you saved the **apps_developement.cer** file and convert it to **dev-cert.pem**:

    ```bash
    openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
    ```

6. Convert the private keys .p12 file to **keyWithPassword.pem**:

    ```bash
    cp Certificates.p12 key.p12
    openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
    ```

7. Enter a passphrase for the keyWithPassword.pem file, which you for the the RSA .pem key.

8. Create the RSA .pem key and enter the passphrase used in the previous step.

    ```bash
    openssl rsa -in keyWithPassword.pem -out hostkey.pem
    ```

### Step 5. Configure push notifications in LiveEngage

1. Log into your [LiveEngage account](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~).

2. In LiveEngage, click the **Campaigns** tab, and then **Data Sources**.

   ![Data Sources](img/androiddatasources.jpg)

3. On the Integrations tab, under **Mobile app management**, click **Manage**.

4. Click **Add new** to add your app to the mobile campaign.

5. Select your platform as iOS, enter your app’s name, and then click **Create app**. 

6. Upload your app certificate and key file in the appropriate locations. 

   - **Certificate file:** dev-cert.pem

   - **Key file:** hostkey.pem

   {:.notice}
   If you are using a development certificate you should uncheck the Production checkbox and add DEV postfix to the Mobile app name. For example, if your app Bundle ID is AppId, your mobile app name should be "AppId-Dev". If you are using a production certificate you should leave the production checkbox checked and insert to the Mobile App name your App Bundle ID as it is.

   **Tip:** You have a **50** character limit for your Bundle ID.

7. Click **Close**.

### Next steps

Make sure to test the push notifications.

