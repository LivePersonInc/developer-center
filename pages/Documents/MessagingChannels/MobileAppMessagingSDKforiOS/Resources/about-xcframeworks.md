---
pagename: About XCFrameworks
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Resources
permalink: mobile-app-messaging-sdk-for-ios-resources-about-xcframeworks.html
indicator: messaging
---

### What is XCFramework?

Apple defines XCFrameworks as a distributable binary package created by Xcode that contains variants of a framework or library so that it can be used on multiple platforms (iOS, macOS, tvOS, and watchOS), including Simulator builds. An XCFramework can be either static or dynamic and can include headers. (for more information, see [link](https://help.apple.com/xcode/mac/11.4/#/dev6f6ac218b)).

### How to consume the LPMessagingSDK.xcframework

In preparation to the XCFramework, we have created some guides to help integrating our iOS SDK into your app:
- To integrate using cocoapods, see [guide](mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html#option-1-cocoapods)
- To manually integrate library into Xcode, see [guide](mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html#option-2-libraries-copy-to-xcode-project)
    - For more information about how to link framework, refer to [apple documentation](https://help.apple.com/xcode/mac/11.4/#/dev51a648b07)

{:.important}
XCFramework can be integrated similarly to how we’re used to integrating the .framework format.

### What do I need to do to consume the XCFramework if I’m already using Cocoapods?

The only requirement is that you will need to update to Cocoapods version 1.9.0 or above.

### Why move to XCFrameworks instead of the FAT Frameworks?

The FAT Framework had a limitation, when a new Swift version was released (usually through a new Xcode version), the SDK was obsolete and couldn’t be consumed with the new Xcode, this was because FAT Frameworks are tied to the compile Swift version.

### What are the benefits of XCFramework?

- XCFramework is an officially Apple supported format for distributing binary libraries.
- Unlike FAT Frameworks, XCFrameworks can contain multiple frameworks with the same architecture.
- XCFrameworks provide Swift module stability, which refers to an XCFramework built with one version of the Swift compiler will be able to talk to a library built with another newer version. (e.g: LPMessagingSDK 6.1. was compiled with Swift 5.2.4 which means that when a new version of swift appears, you can still use this SDK version without having to move to a newer SDK version)

### What if I don’t want to consume the XCFramework?
- You can still consume the .xcframework file as if it were the old FAT .framework file but it will be tied to the Swift version it was compiled with.

For example:
> 6.1.0.747 will require Swift 5.2.4 (swiftlang-1103.0.32.9 clang-1103.0.32.53), and could only be used with the Xcode versions using that specific version.
