---
pagename: Photo Sharing
redirect_from:
  - android-photo-sharing.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features

order: 285
permalink: mobile-app-messaging-sdk-for-android-advanced-features-photo-sharing.html

indicator: messaging
---

Version 3.9 of the Mobile Messaging SDK added the ability for agents to share photos and files with consumers. The feature allows agents or bots within LiveEngage to send images and files to consumers within a conversation. Once sent, the consumer can tap the thumbnail to view it or share it through the default app on the device. 

With version 3.9, agents can share a reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. Agents can also share detailed information with the consumer, such as mortgage documents or a product catalog.  If an agent resolves a conversation, they can resume it by sharing a photo or file. For the consumer, they can return to a resolved conversation to view the files, as long as the files are part of the conversation history.

When an agent sends a photo or file to the consumer, they get a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. After the consumer downloads the file, they can tap it to view it full screen, which shows a share, action, and back buttons. 


### Prerequisites


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

- Photo sharing is two way (agent-to-consumer and consumer-to-agent), but file sharing is one way only (agent to consumer). 

   **For SDKs previous to 3.8.** Photo-sharing is one-way only (from consumer to agent, but not vice versa) and available for the Mobile Message SDK only.

- The default value for photos and files stored on the device is 20, which is configurable.  If exceeding the max value of downloaded photos or files, the  SDK deletes the oldest file download.

- Consumers cannot download images, but they can download files through the picker application to a location on their device (internal or external). 

- If a download attempt is unsuccessful, an error icon covers the thumbnail.  If clicked the file attempts to download again.

- For authenticated users, backgrounding the app file or photo while downloading does not interrupt the download process. 

- For unauthenticated sessions, consumers must download the file again with each visit or refresh of the conversation because the history gets cleared when a session expires or logs the consumer out. 

- **For Android SDK 3.0 on an Oreo Device (8.0 & 8.1).** Add support for Notification Channel.

- The Android SDK supports preview only for PDF files but supports opening other file types through the picker application.

---


### Step 1. Enable or disable photo sharing

1. Change the boolean value:

   ```xml
   <bool name="enable_photo_sharing">
   ```

   By default this value is set to **false**.

2. Contact your Account Team to have the feature enabled on your account.

### Step 2. Change the button text and color

1. Change the background color of the attachment menu:

   ```xml
   <color name="attachment_menu_item_background_color">
   ```

2. Change the text of buttons:

   ```xml
   <string name="lp_accessibility_gallery">
   <string name="lp_accessibility_camera">
   ```

###  Upload Photo

To upload a photo, press on the "attach" button next to the "enter message" edit text.

![Photosharing1](img/photosharing1.png)

A menu will open with 2 options: Gallery and Camera. If the user had set a default app for any of those action- it will be open by default. Otherwise Android OS will open a popup menu with all the available apps for the relevant category (gallery or camera).

![Photosharing2](img/photosharing2.png)



### Advanced features

More advanced configurations (image size, compression rate, etc..) can be found under Photo Sharing in the Configuring the SDK section.remo
