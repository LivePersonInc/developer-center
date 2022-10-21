---
pagename: initialize
redirect_from:
  - consumer-experience-ios-sdk-initialize.html
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods
order: 5
permalink: mobile-app-messaging-sdk-for-ios-methods-initialize.html
indicator: messaging
---

The SDK initialization is done only once, inside appdelegate. This function checks that the SDK has all mandatory preconditions. For example, it is able to find the bundle file, verify that all the pre-defined configurations are valid, and more. If any of the preconditions are not met, an exception is thrown. Once an exception is thrown, you must not do any other call to the SDK.

*Important: For SDK 2.5.x you must ensure that the initialize method is not called while the phone is locked, such as during a background fetch, as this will cause an unhandled exception.*

`func initialize(_ brandID: String? = nil) throws`

| Parameter | Description |
| :--- | :--- |
| brandId | An account ID |
