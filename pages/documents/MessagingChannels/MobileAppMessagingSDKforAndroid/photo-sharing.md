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

Version 3.9 of the Mobile Messaging SDK added the ability for agents or bots within LiveEngage to share photos with consumers. Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. The consumer can tap the thumbnail to view it or share it through the default app on the device. 

Agents can share:

- A reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. The consumer can tap it to view it full screen, which shows a share, action, and back options. 

- A photo in a resolved conversation to resume the conversation with the consumer. 

{:.important}
Consumers cannot download images, but they can download files through the picker application to a location on their device (internal or external). 


### Supported file formats

- PNG
- JPG/JPEG
- GIF (non-animated) - previewed as a static image only


### Photo/file sizes

- Thumbnail - 30 KB (base64-encoded)

- Max upload size allowed - 5 MB uncompressed 

   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB. 

### Notes and limitations

- Consumers cannot download images, but they can download files through the picker application to a location on their device (internal or external). 

- Photo sharing is two way (agent-to-consumer and consumer-to-agent). 

   **For SDKs previous to 3.8.** Photo-sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Message SDK only.

- The default value for photos stored on the device is 20, which is configurable.  If exceeding the max value of downloaded photos, the SDK deletes the oldest photo downloaded.

- If a download attempt is unsuccessful, an error icon covers the thumbnail.  If clicked the photo attempts to download again.

- The consumer can return to a resolved conversation to view the files, as long as the files are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format.

- For authenticated users, backgrounding the app file or photo while downloading does not interrupt the download process. 

- For unauthenticated sessions, consumers must download the photo again with each visit or refresh of the conversation because the history gets cleared when a session expires or logs the consumer out. 

- **For Android SDK 3.0 on an Oreo Device (8.0 & 8.1).** Add support for Notification Channel.

- The Android SDK supports preview only for PDF files but supports opening other file types through the picker application.

---


### Step 1. Enable or disable photo sharing

1. Add permissions to your app’s AndroidManifest.xml file:

   ```xml
   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
   ```


2. Change the boolean value:

   ```xml
   <bool name="enable_photo_sharing">
   ```

   By default this value is set to **false**.

3. Contact your Account Team to have the feature enabled on your account.

### Step 2. Change the button text and color

1. Set the max image size:

   ```xml
   <integer name="max_image_size_kb">
   ```

   The default max image is is 3000kb.


2. Change the color of the attachment menu:

   ```xml
   <color name="attachment_menu_item_background_color">
   <color name="lp_attachment_menu_background_color">
   <color name="lp_attachment_menu_item_text_color">
   <color name="lp_attachment_menu_item_icon_color">
   ```

3. Change the text of buttons:

   ```xml
   <string name="lp_accessibility_gallery">
   <string name="lp_accessibility_camera">
   ```

4. Define the max number of stored images allowed locally.

   ```xml
   <integer name="max_number_stored_images">
   ```
   The default max number is 20.

5. Define the resize dimensions:

   ```xml
   <integer name="thumbnail_longer_dimension_resize">
   ```

   The default thumbnail dimension is 100.


   ```xml
   <integer name="full_image_longer_dimension_resize">
   ```
   
   The default full image dimension is 800.

6. Set the compression rate (percentage) for full images:

   ```xml
   <integer name="full_image_compression_rate">
   ```

   The default compression rate is 50.


