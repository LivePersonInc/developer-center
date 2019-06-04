---
pagename: Photo Sharing
redirect_from:
  - consumer-experience-ios-sdk-photosharing.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 234
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-photo-sharing.html

indicator: messaging
---

Version 3.9 of the Mobile Messaging SDK added the ability for agents to share photos with consumers (two-way photo sharing). The feature allows agents or bots within LiveEngage to send images, in PNG, JPG/JPEG, and GIF (non-animated) formats, to consumers within a conversation. Once sent, the consumer can tap the image thumbnail to view it, but they cannot download it. 





### Prerequisites


### Supported file formats

- PNG
- JPG/JPEG
- GIF (non-animated) - previewed as a static image only




### Photo size reductions

- Thumbnail - 30 KB (base64-encoded)
- Max upload size allowed - 5 MB uncompressed (if larger, the SDK resizes to 800x600)
   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB. 

### Notes

**For SDKs previous to 3.8.** Photo-sharing is one-way only (from consumer to agent, but not vice versa) and available for the Mobile Message SDK only.



### Custom View Controller Mode requirements
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView,:

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

When using ViewController Mode, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

### Step 1. Add app privacy settings

1. Set the photo library privacy settings:
   - **Key:** NSPhotoLibraryUsageDescription
   - **Value:** "Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

2. Set the camera privacy settings:
   - **Key:** NSCameraUsageDescription
   - **Value:** "Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

{:.important}
Values for these descriptions are up to the brand to define, these are only examples.

### Step 2. Enable or disable photo sharing

1. Change the boolean value:

   ```swift
   LPConfig.defaultConfiguration.enablePhotoSharing
   ```

   By default this value is set to **false**.

2. Contact your Account Team to have the feature enabled on your account.

### Step 3. Change the button text and color

- Change the background color of attachment menu:

   ```swift
   LPConfig.defaultConfiguration.photosharingMenuBackgroundColor
   ```

- Change the text of buttons:

   ```swift
   LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor
   ```

- Change the menu button's background color:

   ```swift
   LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor
   ```

- Change the menu button's tint color:

   ```swift
   LPConfig.defaultConfiguration.photosharingMenuButtonsTintColor
   ```

You can find all the related configurations in the [resources ID table](consumer-experience-ios-sdk-attributes.html), under Photo Sharing.

### Upload Photo

To upload a photo, click the "attach" button next to "enter message" edit text.

![uploadphoto1](img/uploadphoto1.png)

A menu opens with 2 options: Photo Library and Camera.

![uploadphoto2](img/uploadphoto2.png)


