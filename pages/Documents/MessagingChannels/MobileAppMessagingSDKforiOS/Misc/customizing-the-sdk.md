---
pagename: Customizing the SDK
redirect_from:
  - consumer-experience-ios-sdk-configuring-the-sdk.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Customization and Branding

order: 223
permalink: mobile-app-messaging-sdk-for-ios-customization-and-branding-customizing-the-sdk.html

indicator: messaging
---

You can customize the look and feel of your app using the `LPConfig` object. Create your configuration instance and assign the attributes you want to customize.  For the list of all the attributes to can configure, see [Attributes](mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes.html).

The most suitable time to customize configuration is right after the SDK initialization and before calling `showConversation()`.

Default configuration:

```swift
let configuration = LPConfig.defaultConfiguration
```

Print all configurable attributes and their default values:

```swift
LPConfig.printAllConfigurations()
```

**Example configuration:**   

```swift
configuration.remoteUserBubbleBackgroundColor = UIColor.purpleColor()
configuration.brandName = "Brand Name"
configuration.remoteUserBubbleBorderWidth = 0.5
```
