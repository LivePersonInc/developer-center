---
title: Customizing the SDK
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Customization and Branding

order: 223
permalink: consumer-experience-ios-sdk-configuring-the-sdk.html

---

The SDK allows you to customize the look and feel of your app using LPConfig object. To apply a custom look and feel, create your own configuration instance and assign the attributes you want to customize. 

The most suitable time to customize configuration is right after the SDK initialization and before calling showConversation().

To get the default configuration:

`let configuration = LPConfig.defaultConfiguration`

To print all configurable attributes and their default values call:

`LPConfig.printAllConfigurations()`

To customize an attribute, follow this example:

```javascript
configuration.remoteUserBubbleBackgroundColor = UIColor.purpleColor()
configuration.brandName = "Brand Name"
configuration.remoteUserBubbleBorderWidth = 0.5
```
