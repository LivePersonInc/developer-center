---
pagename: App Extensions
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Configuration
permalink: mobile-app-messaging-sdk-for-ios-advanced-configuration-app-extensions.html
indicator: messaging
---
To make sure the SDK uses the iOS keyboard only, and not third party ones, disable app extensions for keyboard as follows:

In your **AppDelegate**, add the method application(_:shouldAllowExtensionPointIdentifier:)
 with the implementation of:

```swift
func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplicationExtensionPointIdentifier) -> Bool {
    return extensionPointIdentifier != UIApplicationExtensionPointIdentifier.keyboard
 }
```