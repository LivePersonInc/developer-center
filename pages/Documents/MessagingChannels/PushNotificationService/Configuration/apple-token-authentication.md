---
pagename: Apple Token Authentication
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Push Notification Service
subfoldername: Configuration
order: 40
permalink: push-notification-service-configuration-apple-token-authentication.html

indicator: messaging
---

Apple Token Based Authentication is a feature that can be self-managed in the Conversational Cloud console.

### Required Details

In order to enable Apple Token Authentication, you will require the following data and files:

* **App Name**: The app ID used on registration for push from the mobile app. For example: `com.liveperson.myapp`

     * Android Registration for Push Method: See SDK’s  [registerLPPusher](android-registerlppusher.html) method.

     * IOS Registration for Push: The app name is usually the Bundle ID or an alternate ID. See SDK’s [registerPushNotifications](/mobile-app-messaging-sdk-for-ios-methods-registerpushnotifications.html) method on how to register. **Note:** In debug mode, the SDK appends a "-Dev" string to the bundle ID on registration to push. You can either configure a different endpoint for this mode or create a “duplicate” configuration to match the new ID (i.e. `com.mybrand.app-Dev`).

* **Key File**: p8 file containing Apple Token Key, to obtain your Token Key, see how to [Obtain an Encryption Key and Key ID from Apple](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_token-based_connection_to_apns).

{: .attn-note}
Key File should be an authentication token signing key, specified as a text file (with a .p8 file extension), as downloaded from the Apple Developer Portal.

* **Team ID:**: Unique Apple Team Identifier, for how to achieve this, see [link](#how-to-get-your-apple-team-id)

* **Key ID:**: A 10-character string with the Key ID.

{: .attn-note}
The Key ID is provided by Apple during the creation of the Apple Token Authentication.

### How to create a Token based App on the Conversational Cloud

This information can be added to the Mobile app management section under Campaigns → Data Sources.

* On the **Platform** dropdown select **iOS** and enter your **App Name**, then click on the **Create app** button.

* Once the App is created, on the **Key File** dropdown select **Apple Key**

<img src="/img/pusher/AppleKeyOption.png" alt="Apple Push Token Authentication Option" style="width: 800px;padding: 20px;">
* Locate and upload your p8 file containing your Token Authentication Key.

* Enter both your Team ID and Key ID on their respective fields.

<img src="/img/pusher/AppleKeyDetails.png" alt="Apple Push Token Authentication Details" style="width: 800px;padding: 20px;">

{: .attn-note}
if your Application is running on debug mode (running from Xcode), the **Production** switch should be **OFF**.

{: .attn-alert}
if using an Application downloaded from the App Store, or any other Ad-Hoc distribution service, the **Production** switch should be **ON**.

### How to get your Apple Team ID

To retrieve your Team ID, follow the next steps:

- Log in to [Apple’s Developer Center](https://developer.apple.com/account/)
- Once you are logged in, click on [Account](https://developer.apple.com/account)
- Then [Membership](https://developer.apple.com/account/#/membership/)
- Under Membership Information, please you'll find the Team Name and Team ID fields