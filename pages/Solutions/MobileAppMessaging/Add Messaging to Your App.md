---
pagename: Add Messaging to your app
redirect_from:
  - products-channels-inapp-messaging.html
sitesection: Solutions

documentname: Mobile App Messaging

order: 1
level-order: 1
root-link: true
permalink: mobile-app-messaging-add-messaging-to-your-app.html
indicator:
---

When you add messaging to your app, you enable your consumers to communicate with your agents through their channel of choice: Android or iOS.


### Benefits
* Increased customer satisfaction with an ideal customer experience through an always connected, ongoing conversation.

* Increased customer retention and engagement (stickiness of your app).

* Consumers never miss a new message with push notifications.

* Fully customizable customer experience including look and feel.

* Optimized for network bandwidth and battery usage.


<img src="img/inapp1.png" alt="InApp" style="max-width:230px;max-height:700px;"> <img src="img/inapp2.png" style="max-width:230px;max-height:700px;"> <img src="img/inapp3.png" alt="InApp" style="max-width:230px;max-height:700px;">


### Prerequisites

To begin, you need:

* LiveEngage account with messaging enabled.
  
  <div class="notice">Contact your LivePerson representative to enable messaging on your account.  Tip: If you see 'all connections’ when you log in, your account has messaging enabled.</div>

* LivePerson only supports OAuth2.0 authentication. For more information, please see [Getting Started with Authentication](../../documents/GettingStarted/Getting Started with Authentication.md).

* iOS native app with:

   * Bundle ID registered in an Apple developer account

   * Xcode with the latest GA version

* Android native app with:

   * Package name 

   * Android Studio (any version)

*For more information, refer to the LiveEngage Enterprise In-App Messaging SDK Supported Devices section of [System Requirements](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) for supported operating systems and devices.* 

### Implementation overview

For a successful deployment of messaging within your iOS or Android app, you must implement three main components:

* Deploy all customization you require using the Mobile App Messaging SDK deployment guide for [iOS](consumer-experience-ios-sdk-quick-start.html) or [Android](android-quickstart.html). 

* Configure Push Notifications

* Configure Authentication [what authentication is supported?  OAuth or API keys or both? What ever is supported should be mentioned in the prerequisites section above.]

### Considerations

Deployment of the Mobile App Messaging SDK can have several functions and tasks.  In order to make the process easier for you, we recommend you make decisions on the following topics before beginning your deployment:

* **Supported and Certified Devices**: [Click here](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) to view the LiveEngage System Requirements document. Under "LiveEngage Enterprise In-App Messenger SDK Supported Devices", you can find the list of devices supported and certified by the In-App SDK. You may need to deploy two different Android APKs (one with messaging and one without) if many of your users are on unsupported devices.

* **Authentication**: The most important and potentially most complex portion of your Mobile App Messaging deployment can be the the authentication.  

    * Determine if you will place messaging in authenticated areas of your app?

    * LivePerson only supports oAuth2.0 authentication.  Ensure you have the setup to support this.  For more information, please see Authentication using oAuth2.0

* **Push notifications**: For your messaging to be effective, you must determine how you’d like the push notifications to work.

    * Do you have your own a push service?

    * Will you use LivePerson’s push services only?

* **How much control do you want to have over the conversation window?** You can customize the conversations window offered through the SDK in two different levels of control:

    * Customize the window provide by LivePerson: (iOS-Window mode, Android - activity mode) -utilize the LiveEngage window and customize the colors, header and options presented to customers.

    * Full control over entire window: (iOS -ViewControler mode Android- Fragment mode): Fully control the look, feel and actions including the footer and header of the conversational window.

* **Select the features you want to configure:** review the list of default configuration available in the guide ([iOS](/consumer-experience-ios-sdk-configuring-the-sdk.html) / [Android](/android-authentication.html)) and determine what features you’d like to enable and how. [link to place in guide]  [insert video]

* **Branding & Design**: The messaging configuration will be faster and easier for you if you have the exact design - the look and feel of the messaging experience to match your brand ready. [link to place in guide]

* **Customization of messaging behavior:** You can utilize our callbacks ([iOS](consumer-experience-ios-sdk-callbacks-index.html) / [Android](/android-callbacks-index.html)) and APIs ([iOS](consumer-experience-ios-sdk-initialize.html) / [Android](/android-initializeproperties.html)) in order to control or change the default behaviors and actions of the messaging app.  Review the default list and determine if there are actions or flows you’d like to change

* **Languages**: determine if you will offer messaging in multiple languages.  The Mobile App Messaging SDK allows you flexibility in selecting the language to display:

    * Based on user’s phone language setting

    * Based on users app language setting

    * Override all settings and maintain your default language at all times

    * Note: LivePerson translates SDK texts to various languages.  You can utilize our default translations or override them with your own text and language adjustments.

* **Masking**: will you require real time data masking? Is your brand providing support over potentially sensitive data.  LiveEngage offers two masking capabilities:

    * Client side masking: The data is masked in the conversation transcript (appear as asterisks) but the Agent can read it.

    * Real time masking - The data is masked for both Client and Agent

    * Configuration of such masking is conducted via LivePerson.  Please contact your representative for configuration.

* **Accessibility**: Is your app accessible to people with disabilities? Do you want to extend accessibility to your Mobile App Messaging?

    * Not all features available in the SDK support accessibility - you may need to turn off various features in order to be fully compliant.  

    * The following is the list of features that need to be configured in order to be completely accessible:

    * IOS:

* Enter timeout & expiration controls:

    * sendingMessageTimeoutInMinutes (60)

    * csatSurveyExpirationInMinutes (1440)

* Disable shortcut to new messages feature:

    * scrollToBottomButtonEnabled (false)

    * scrollToBottomButtonMessagePreviewEnabled (false)

    * unreadMessagesDividerEnabled (false)

* Disable link preview

    * enablelinkPreview (false)

    * Android

        * Snackbar duration: <integer name = snachbar_duration_for_accessibility> 60000 </integer>

        * Disable: Link preview -

            * <bool name ="link_preview_enable_real_time_preview" > false </bool>

            * <bool name ="link_preview_enable_feature" > false </bool>

        * Disable In-conversation shortcut to new messages

            * <bool name ="scroll_down_indicator_enabled" > false </bool>

            * <bool name ="scroll_down_indicator_unread_summary_enabled" > false </bool>
