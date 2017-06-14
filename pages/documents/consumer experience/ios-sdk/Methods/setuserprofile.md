---
title: setUserProfile
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 160
permalink: consumer-experience-ios-sdk-setuserprofile.html

indicator: chat messaging
---

Add custom parameters about the user and set them for the messaging agent. 

`func setUserProfile(_ lpuser: LPUser, brandID: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
|lpuser | object is an instance of LPUser. | Example: let user = LPUser(firstName: "John", lastName: "Doe", profileImageURL: "URL of image", phoneNumber: "555-555555") |
| brandId  | An account ID | |
