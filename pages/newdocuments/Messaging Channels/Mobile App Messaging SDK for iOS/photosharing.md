---
pagename: Photo Sharing
redirect_from:
  - consumer-experience-ios-sdk-photosharing.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 234
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-photo-sharing.html

indicator: messaging
---

This section describes the photo sharing behavior and configurations in the Messaging SDK.

You can find all the related configurations in the [resources ID table](consumer-experience-ios-sdk-attributes.html), under Photo Sharing.

*Notes*:

- *This feature is available only for the Mobile App Messaging SDK*.
- *This features enables photo sharing only (not video/files).*
- *Photo-sharing is one-way only: Photos can be sent from consumer to agent, but not vice versa.*
- *Device storage includes up to 20 images - this is configurable.*
- *Supported formats: .png, .jpg, .gif (non-animated).*
- *Photo size reduction: Thumbnail - 30 KB, Preview -3 MB.*
- *App Privacy settings are needed:*
    - Key: **NSPhotoLibraryUsageDescription**, Value: "Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS",
    - Key: **NSCameraUsageDescription**, Value: "Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"
    - **Important:** Values for these descriptions are up to the brand to define, these are only examples.

<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.
</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

### Enable Photo Sharing

To enable/disable photo sharing you can change the boolean value:

```swift
LPConfig.defaultConfiguration.enablePhotoSharing
```

By default this value is set to false.

**Note that you will need to contact your Account Team in order to enable the feature on your account**.

### Upload Photo

To upload a photo, click the "attach" button next to "enter message" edit text.

![uploadphoto1](img/uploadphoto1.png)

A menu will open with 2 options: Photo Library and Camera.

![uploadphoto2](img/uploadphoto2.png)

Changing the background color of attachment menu is available with configuration:

```swift
LPConfig.defaultConfiguration.photosharingMenuBackgroundColor
```

Changing the text of buttons:

```swift
LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor
```

Changing the menu button's background color:

```swift
LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor
```

Changing the menu button's tint color:

```swift
LPConfig.defaultConfiguration.photosharingMenuButtonsTintColor
```

**Note: for the list of all configurable attributes, click [here](consumer-experience-ios-sdk-attributes.html#photo-sharing)**
