---
title: Photo Sharing
redirect_from:
  - android-photo-sharing.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Advanced Features

order: 285
permalink: mobile-app-messaging-sdk-for-android-advanced-features-photo-sharing.html

indicator: messaging
---

### Overview

This section describes the photo sharing behavior and configurations in the Messaging SDK. You can find all the related configurations in the resources ID table, under Photo Sharing.

**Notes:**

- *This feature is available only for the Mobile App Messaging SDK.*
- *This feature enables photo sharing only (not video/files).*
- *Photo-sharing is one-way only: Photos can be sent from consumer to agent, but not vice versa.*
- *Device storage includes up to 20 images - this is configurable.*
- *Supported formats: .png, .jpg, .gif (non-animated).*
- *Photo size reduction: Thumbnail - 30 KB, Preview -3 MB.*
- *The SDK version contains a beta version of the Photo sharing feature. For now the SDK doesn’t support continuous uploading photos outside the conversation screen. Full-blown solution is under construction.*

### Enable Photo Sharing

To enable/disable photo sharing you can change the boolean value:

```xml
<bool name="enable_photo_sharing">
```

By default this value is set to false.

**Note that you will need to contact your Account Team in order to enable the feature on your account**.

**Note:**

- *if using SDK 3.0 on an Oreo Device (8.0 & 8.1) support for Notification Channel needs to be added.*

###  Upload Photo

To upload a photo, press on the "attach" button next to the "enter message" edit text.

![Photosharing1](img/photosharing1.png)

A menu will open with 2 options: Gallery and Camera. If the user had set a default app for any of those action- it will be open by default. Otherwise Android OS will open a popup menu with all the available apps for the relevant category (gallery or camera).

![Photosharing2](img/photosharing2.png)

Changing the background color of the attachment menu is available with configuration :

```xml
<color name="attachment_menu_item_background_color">
```

Changing the text of Gallery/Camera:

```xml
<string name="lp_accessibility_gallery">
<string name="lp_accessibility_camera">
```

### Advanced features

More advanced configurations (image size, compression rate, etc..) can be found under Photo Sharing in the Configuring the SDK section.remo
