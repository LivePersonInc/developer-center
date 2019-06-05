---
pagename: Photo and file sharing
redirect_from:
  - consumer-experience-ios-sdk-photosharing.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 234
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-photo-and-file-sharing.html

indicator: messaging
---

Version 3.9 of the Mobile Messaging SDK added the ability for agents or bots within LiveEngage to share photos and files with consumers. Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. The consumer can tap the thumbnail to view it or share it through the default app on the device. 

Agents can share:

- A reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. The consumer can tap it to view it full screen, which shows a share, action, and back options. 

- Detailed documents or files to provide the consumer with more information, such as mortgage documents or a product catalog.  After the consumer downloads the file, they can tap it to view it full screen, which shows a share and action options. 

- A photo or file in a resolved conversation to resume the conversation with the consumer. 

{:.important}
Consumers cannot download images, but they can download files through the picker application to a location on their device (internal or external). 


### Supported file formats

- PNG
- JPG/JPEG
- GIF (non-animated) - previewed as a static image only
- PDF
- DOCX
- PPTX
- XSLX


### Photo/file sizes

- Thumbnail - 30 KB (base64-encoded)

- Max upload size allowed - 5 MB uncompressed 
   
   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB. 

### Notes and limitations

- Consumers cannot download images, but they can download files through the picker application to a location on their device (internal or external). 

- Photo sharing is two way (agent-to-consumer and consumer-to-agent), but file sharing is one way only (agent to consumer). 

   **For SDKs previous to 3.8.** Photo-sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Message SDK only.

- The default value for photos and files stored on the device is 20, which is configurable.  If exceeding the max value of downloaded photos or files, the  SDK deletes the oldest file download.

- If a download attempt is unsuccessful, an error icon covers the thumbnail.  If clicked the file attempts to download again.

- The consumer can return to a resolved conversation to view the files, as long as the files are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format.

- For authenticated users, backgrounding the app file or photo while downloading does not interrupt the download process. 

- For unauthenticated sessions, consumers must download the file again with each visit or refresh of the conversation because the history gets cleared when a session expires or logs the consumer out. 

- iOS supports the preview of file types per iOS operating system.


### Custom View Controller Mode requirements
When using Custom View Controller Mode, you must remove the Conversation view when leaving the App. To avoid dismissing the View when presenting CSAT/SecureForms/PhotoSharing View, you should only dismiss the Conversation view if Moving From ParentView:

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

When using ViewController Mode, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

---

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

