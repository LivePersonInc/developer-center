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

Version 3.9 of the Mobile Messaging SDK added the ability for agents or bots within LiveEngage to share a reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. The agent can also share photos in a resolved conversation to resume the conversation with the consumer. 

Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation screen, a thumbnail for a photo appears in the conversation. The consumer can tap on the photo to view it full screen or share it through the default app on their device.  

{:.important}
Consumers cannot download images; they can only preview or share images. 


### Supported file formats

- PNG

- JPG/JPEG

- GIF (non-animated) - previewed as a static image only


### Photo sizes

- Thumbnail - 30 KB (base64-encoded)

- Max upload size allowed - 5 MB uncompressed 
   
   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB. 

### Notes and limitations

- Consumers cannot download images; they can only preview or share images.  

- Photo sharing is two way (agent-to-consumer and consumer-to-agent). 

   **For SDKs previous to 3.8:** Photo-sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Message SDK only.

- The default value for photos stored on the device is 20, which is configurable with the `maxNumberOfSavedFilesOnDisk` attribute.  If exceeding the max value of photos or files, the SDK deletes the oldest file.

- If an attempt to view a photo is unsuccessful, an error icon covers the thumbnail.  

- The consumer can return to a resolved conversation to view the photos, as long as the photos are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format.

- For authenticated users, backgrounding the app while loading the photo does not get interrupted. 

- For unauthenticated sessions, consumers must tap the photo again with each visit or refresh of the conversation because the history gets cleared when a session expires or logs the consumer out.

- iOS supports the preview of file types per iOS operating system.

---

### Step 1. Set the requirements for Custom View Controller Mode 
When using Custom View Controller Mode, you must remove the Conversation view when leaving the App. To avoid dismissing the View when presenting CSAT/SecureForms/PhotoSharing View, you should only dismiss the Conversation view if Moving From ParentView:

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

When using ViewController Mode, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.



### Step 2. Add app privacy settings

1. Set the photo library privacy settings:
   
   - **Key:** NSPhotoLibraryUsageDescription
   
   - **Value:** "Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

2. Set the camera privacy settings:
   
   - **Key:** NSCameraUsageDescription
   
   - **Value:** "Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

{:.important}
Values for these descriptions are up to the brand to define, these are only examples.

### Step 3. Enable or disable photo sharing


1. Change the boolean value:

   ```swift
   LPConfig.defaultConfiguration.enablePhotoSharing = true
   ```
   By default, the value is set to **false**.

2. Contact your Account Team to have the feature enabled on your account.

### Step 4. Change the button text and color

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

- Print the configurations using:

   ```swift
   LPConfig.printAllConfigurations()
   ```

For a complete list of attributes, see [Attributes](consumer-experience-ios-sdk-attributes.html#photo-sharing).

**Example code:**  

```swift
// Enable Photo Sharing
LPConfig.defaultConfiguration.enablePhotoSharing = true
// Set the Background Color on Photo Sharing Menu
LPConfig.defaultConfiguration.photosharingMenuBackgroundColor = UIColor.lightGray
// Set the text of buttons on Photo Sharing Menu
LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor = UIColor.white
// Set Photo Share Menu Button's Background Color
LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor = UIColor.white
// Set Photo Sharing Menu Buttons Outline Color
LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor = UIColor.lightGray
```

