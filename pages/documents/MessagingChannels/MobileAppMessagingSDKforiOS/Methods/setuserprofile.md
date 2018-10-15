---
pagename: setUserProfile
redirect_from:
  - consumer-experience-ios-sdk-setuserprofile.html
Keywords:

categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 160
permalink: mobile-app-messaging-sdk-for-ios-methods-setuserprofile.html

indicator: messaging
---

Add custom parameters about the user and set them for the messaging agent. 

`func setUserProfile(_ lpuser: LPUser, brandID: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
|lpuser | object is an instance of LPUser. | Example: let user = LPUser(firstName: "John", lastName: "Doe", profileImageURL: "URL of image", phoneNumber: "555-555555") |
| brandId  | An account ID | |
