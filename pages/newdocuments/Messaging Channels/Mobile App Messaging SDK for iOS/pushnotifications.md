---
pagename: Notifications
redirect_from:
  - consumer-experience-ios-sdk-pushnotifications.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS

order: 15
permalink: mobile-app-messaging-sdk-for-ios-notifications.html

indicator: messaging
---

Push and local notifications are a key factor that make the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

_**Note: In order to enable push notifications, you must also configure them within the LiveEngage UI.  See instructions.**_

1. This method passes the user info of a remote push notification to the SDK:

```swift
public func handlePush(userInfo: [NSObject : AnyObject])
```

{:start="2"}
2. Register device token on LPMesssagingSDK instance:

```swift
public func registerPushNotifications(token token: NSData, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil)
```

_**Note: this method pass the Device Token to the SDK, the actual registration ocurrs only after showConversation method is called.**_

{:start="3"}
3. Will add custom behavior if LivePerson Push Notification was touched

```swift
<LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)
```

{:start="4"}
4. Will hide/show the In-App Push Notification

```swift
<LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool
```

{:start="5"}
5. Override LPMessagingSDK - In-App Push Notification

```swift
<LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView
```

{:start="6"}
6. Add Custom Tap Behavior to LPMessagingSDK - In-App Notification

```swift
<LPMessagingSDKNotificationDelegate> optional func LPMessagingSDKNotification(notificationTapped notification: LPNotification)
```

_**Note: This method is override when using a Custom View for the In-App Notification (LPMessagingSDKNotification(customLocalPushNotificationView)**_

<div class="important">
Important:


**The proprietary SDK notification is only for display purposes, interacting with it will launch the Application, but won't navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.**

</div>

### Configuring Push Notifications

Follow the instructions below to set up your certificate and key file to enable push notifications.

_**Note: Before you begin the setup, you must ensure your LiveEngage account is configured and connected to the SDK.**_

1. Enter your LiveEngage account through this [Login URL](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~){:target="_blank"}.

	You will need the following info from your LivePerson account team:

	* LiveEngage account number

	* User ID (must be an administrator user)

	* Password

2. Within LiveEngage, navigate to **Campaigns**, and click **Data Sources**.

![campaigns](img/campaigns.png)

{:start="3"}
3. Then select **Manage** under **Mobile App management**.

![app](img/mobieAppManagement.png)

{:start="4"}
4. Click **Add new** to associate your app with the LiveEngage account.

![keymanagement](img/keymanagement.png)

{:start="5"}
5. Select your platform as iOS, enter your app’s name, and then click **Create app**. Then, upload your app certificate and key file in the appropriate locations. For more information on your app certificate, please **[click here](consumer-experience-ios-sdk-createcertificate.html){:target="_blank"}**.

<div class="important">
Important:

*If you are using a development certificate you should uncheck the Production checkbox and add DEV postfix to the Mobile app name.For example, if your app Bundle ID is AppId, your mobile app name should be **"AppId-Dev"**. If you are using a production certificate you should leave the production checkbox checked and insert to the Mobile App name your App Bundle ID as it is.*

</div>

**Note: there is a 50 character limit for your Bundle ID**

![newapp](img/newapp.png)

{:start="6"}
6. Click **Close** to complete the process.
