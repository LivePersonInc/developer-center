---
pagename: Photo and File Sharing
redirect_from:
  - android-photo-sharing.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-android-advanced-features-photo-and-file-sharing.html
indicator: messaging
---


### File Sharing from Agent to Consumer:
Mobile Messaging SDK v3.9 introduces a feature for agents within LiveEngage to share photos or files with the consumers.

Agents can share:

- **Photos:** Reference photos or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product. The agent can also share photos in a resolved conversation to resume the conversation with the consumer.  Consumers can tap on the photo to view it full screen or share it through the default app on their device.

- **Files:** Agents can also share files to provide consumers with information such as mortgage documents, product catalog, or transaction details as requested by consumers. They can also share files in a resolved conversation to resume the conversation with the consumer. Consumers can download files through the picker application to a location on their device (internal or external).

When the agent shares any supported file type from the LE, if the consumer isn't within the conversation view, they get a notification from the customer app only if the push notification is enabled. Otherwise, when the consumer returns to the conversation screen, a thumbnail for the photo or file appears in the conversation window.

### File Sharing from Consumer to Agent:
Mobile Messaging SDK v4.3 introduces a feature for consumers to share supported types of files to agents.

Consumers can share:

- **Photos:** Consumers can choose photos from gallery, internal storage, external storage as well as Google drives. They can also share photos in a resolved conversation to resume the conversation with the agents. Consumers can tap on the photo to view it full screen or share it through the default app on their device.

- **Files:** Consumers can also share files with agents, chosen from internal storage, external storage or Google drives. They can also share files in a resolved conversation to resume the conversation with the agent. Consumers can download files through the picker application to a location on their device (internal or external).

{:.important}
   The Android SDK supports opening any supported file types other than images through the picker application. The consumer can either long click on the thumbnail or open the file through picker application to share and save the file.


### Supported formats

- PNG
- JPG/JPEG
- GIF (non-animated) - previewed as a static image only
- PDF
- DOCX
- PPTX
- XLSX

### Photo and file sizes

- Thumbnail - 30 KB (base64-encoded)
- Max upload size allowed - 5 MB uncompressed

   **For SDKs previous to 3.8.** The max upload size allowed is 3 MB.

### Notes and limitations

- Both photo sharing and file sharing are two way (agent-to-consumer and consumer-to-agent) starting from SDK version 4.3.

   **For SDKs previous to 4.3:** File sharing is one-way only (from agent-to-consumer, but not vice versa).
   **For SDKs previous to 3.8:** Photo sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Messaging SDK only.

- If an attempt to view a photo or file is unsuccessful, an error icon covers the thumbnail. Upon retry, the file attempts to download again. Retry can be attempted as many times as possible (in case of a poor network) until the file is downloaded successfully.

- The consumer can return to a resolved conversation to view the photos, as long as the photos are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format. On the consumer side, they see an empty message with no content.

- For authenticated users, backgrounding the app while loading the photo does not get interrupted.

- For unauthenticated sessions, consumers must tap the photo again with each visit because the history gets cleared when a session expires or logs the consumer out.

- **For Android SDK 3.0 on an Oreo Device (8.0 &amp; 8.1).** Add support for Notification Channel.

### How photo and file sharing works from agent to consumer

<img src="../../../../img/photo-file-sharing-diagram.png" alt="How photo and file sharing works" style="width: 600px;padding: 20px;">


---

### Step 1. Enable or disable the feature

1. Change the boolean value:

   ```xml
   <bool name="enable_photo_sharing">
   ```
  
   By default, this value is set to **false**.

   ```xml
   <bool name="enable_file_sharing">
   ```

   Starting in v3.9, the default value is set to **true**.

2. Contact your Account Team to have the feature enabled on your account.

### Step 2. Change settings

1. Set the max number of photos or files to save on disk:

   ```xml
   <integer name="max_number_stored_images">

   <integer name="max_number_stored_documents">

   <integer name="max_number_stored_voice_files">
   ```

   The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest downloaded file.

2. Set the max image size:

   ```xml
   <integer name="max_image_size_kb">
   ```

   The default max image is 3000kb.

   **Important:** At this time, you can only set the max image size.

3. Change the color of the attachment menu:

   ```xml
   <color name="attachment_menu_item_background_color">

   <color name="lp_attachment_menu_background_color">

   <color name="lp_attachment_menu_item_text_color">

   <color name="lp_attachment_menu_item_icon_color">
   ```

4. Change the text of buttons:

   ```xml
   <string name="lp_accessibility_gallery">

   <string name="lp_accessibility_camera">
   ```

5. Define the max number of stored images allowed locally.

   ```xml
   <integer name="max_number_stored_images">
   ```

   The default max number is 20.

6. Define the max number of stored documents allowed locally.

   ```xml
   <integer name="max_number_stored_documents">
   ```

   The default max number is 20.

7. Define the resize dimensions:

   ```xml
   <integer name="thumbnail_longer_dimension_resize">
   ```

   The default thumbnail dimension is 100.

   ```xml
   <integer name="full_image_longer_dimension_resize">
   ```

   The default full image dimension is 800.

8. Set the compression rate (percentage) for full images:

   ```xml
   <integer name="full_image_compression_rate">
   ```

   The default compression rate is 50.

Other configurations can be found in the [Attributes](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html) section of the Dev Community.

---

### Permission dialog to let consumer grant file sharing permissions
- Show a permission request dialog when a consumer has disabled or denied either the camera, file or audio permissions and later tries to access these UI element.
- When clicked on "Go To Settings" button on request dialog, consumer will be taken to app's Settings screen where they have to manually grant respective permissions.

### Request Storage Permission
<img src="../../../../img/android_permission_dialog_storage.png" alt="Requesting Storage Permission" style="width: 600px;padding: 20px;">
### Request Camera Permission
<img src="../../../../img/android_permission_dialog_camera.png" alt="Requesting Camera Permission" style="width: 600px;padding: 20px;">
### Request Microphone Permission
<img src="../../../../img/android_permission_dialog_microphone.png" alt="Requesting Microphone Permission" style="width: 600px;padding: 20px;">

---

### User Interface to save files on consumer's device
- When decided to save a file, consumer now can choose a specific folder on their devices, SD card or upload the file to a cloud service such as Google drive.
<img src="../../../../img/android_save_file_to_UI.png" alt="Save file" style="width: 600px;padding: 20px;">
