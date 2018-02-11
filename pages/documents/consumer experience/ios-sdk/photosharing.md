---
title: Photo Sharing (Beta)
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Advanced Features

order: 234
permalink: consumer-experience-ios-sdk-photosharing.html

indicator: messaging
---

This section describes the photo sharing behavior and configurations in the Messaging SDK.

You can find all the related configurations in the [resources ID table](consumer-experience-ios-sdk-attributes.html), under Photo Sharing.

*Notes*:

- *This feature is available only for the In-App Messaging SDK*.
- *This features enables photo sharing only (not video/files).*
- *Photo-sharing is one-way only: Photos can be sent from consumer to agent, but not vice versa.*
- *Device storage includes up to 20 images - this is configurable.*
- *Supported formats: .png, .jpg, .gif (non-animated).*
- *Photo size reduction: Thumbnail - 30 KB, Preview -3 MB.*

### Enable Photo Sharing

To enable/disable photo sharing you can change the boolean value `LPConfig.defaultConfiguration.enablePhotoSharing` By default this value is set to false. **Note that you will need to contact your Account Team in order to enable the feature on your account**.

### Upload Photo

To upload a photo, click the "attach" button next to "enter message" edit text.

![uploadphoto1](img/uploadphoto1.png)

A menu will open with 2 options: Photo Library and Camera.

![uploadphoto2](img/uploadphoto2.png)

Changing the background color of attachment menu is available with configuration:
`LPConfig.defaultConfiguration.photosharingMenuBackgroundColor`

Changing the text of buttons:
`LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor`

Changing the menu button's background color:
`LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor`

Changing the menu button's tint color:
`LPConfig.defaultConfiguration.photosharingMenuButtonsTintColor`
