---
title: initialize
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 10
permalink: consumer-experience-ios-sdk-initialize.html

---

The SDK initialization is done only once, inside appdelegate. This function checks that the SDK has all mandatory preconditions. For example, it is able to find the bundle file, verify that all the pre-defined configurations are valid, and more. If any of the preconditions are not met, an exception is thrown. Once an exception is thrown, you must not do any other call to the SDK. 

`func initialize(_ brandID: String? = nil) throws`

| Parameter | Description |
| :--- | :--- |
| brandId | An account ID |
