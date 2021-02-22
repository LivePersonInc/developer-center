---
pagename: FAQ
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Resources
permalink: mobile-app-messaging-sdk-for-ios-resources-faq.html
indicator: messaging
---

### Where can I find the latest versions of the SDK Libraries

Githubs:
- [XCFramework](https://github.com/LivePersonInc/iOSFrameworks)
- [SampleApp + XCFramework](https://github.com/LP-Messaging/iOS-Messaging-SDK)
- [Cocoapods](https://github.com/LivePersonInc/iOSPodSpecs)

### Does the SDK use UIWebview?
No, SDK usage of UIWebview was replaced with WkWebView in Mar 2017

##### But when I run `grep -r UIWebView` command it shows a reference of UIWebview

- That's because the grep command will search the iOS SDK for text references and there was 1 reference to UIWebview in the `LPTTTAttributedLabel` dependency, this was only a comment description, and has been removed.

### While upgrading from SDK version < 6.0 to SDK 6.0+, I noticed there were tons of compile errors. What do I do? 

- Read this [guide](mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html)
- If you are upgrading versions then likely before you were using one of several public facade classes (LPInfraFacade, LPMessagingSDK, LPMonitoring, etc.).  When combining the frameworks we moved all publicly documented APIs into LPMessaging.  So look within that object for your previously used API.

### I upgraded  from SDK version < 6.0 to SDK 6.0+ and noticed that my API is gone

Prior to v6.0, our  SDK was using 4 frameworks.  There were many public APIs that were only available to serve as bridge API's between one LP SDK framework and another.  If you were using one of these previously available API's, please communicate with your Liveperson Account team to explore the options of using one of the public API’s or to file an enhancement request.

### I have link preview enabled but link previews are not being displayed?

If markdownHyperlinkFromAgent is enabled, link preview won’t be displayed.

### While updating the SDK, my Structure Content is now showing a border on the buttons:

On SDK 5.2.1, the border was introduce as an accessibility element for compliance, SDK introduce a configuration for versions 6.0 or higher that lets you control the color of this element:

<img src="../../../../img/structuredContentButtonBorderColor.png" alt="Structured Content Button Border" style="width: 600px;padding: 20px;">

`structuredContentButtonBorderColor`: Sets border color for button type element on Structured Content

### What is the amount of time it takes for the timestamp change from "Now" to the numeric "hh:mm" timestamp?

- Sitting idle on the Conversation Screen won’t trigger the timestamp to change,
- What triggers the timestamp update:
  - Scrolling up or down,
  - A new message,
  - Leaving and coming back to the Conversation Screen

### When loading conversation history, how long does it take to dismiss the loading animation?

- Loading time depends on how long does it take the SDK to sync the Consumer History,
- Loading screen will be dismissed if loading history fails.

### If I logout from SDK, can they still get Push Notifications and Unread Message Count?

- No, you won’t receive Push Notifications. As soon as you log out, SDK unregisters from the Push Notification service and you will not be able to receive any Push Notifications.
- Starting SDK 4.2.0, we preserve Unread Message count if there is one.

### When opening the Conversation Screen I will encounter empty message bubbles

This may happen as the SDK uses a unique Apple key named `identifierForVendor`, this key is an alphanumeric string that uniquely identifies a consumer device to the app’s vendor/brand, the key helps the SDK during the encryption process to create unique identifier names per device & per bundleId to store keys into the Device Keychain.

This key’s value can change when installing test builds using Xcode or when installing an app on a device using ad-hoc distribution (e.g. TestFlight, TestFairy, etc.). When this value changes it creates an inconsistency between the value that is provided and the value that is recognized by the SDK, and those empty message bubbles are displayed.

As Apple mentioned in their article:

“The value in this property remains the same while the app (or another app from the same vendor) is installed on the iOS device”. 

{:.important}
For more information, please visit Apple’s documentation [link](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor)