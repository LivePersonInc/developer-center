---
pagename: File Sharing
redirect_from:
  - consumer-experience-ios-sdk-photosharing.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 234
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-file-sharing.html

indicator: messaging
---

Version 3.9 of the Mobile Messaging SDK added the ability for agents or bots within LiveEngage to share detailed documents or files with the consumer to provide them with information, such as mortgage documents or a product catalog.  The agent can also share files in a resolved conversation to resume the conversation with the consumer.

Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation screen, a thumbnail for the file appears with a download icon in the conversation window. Once downloaded, the consumer can tap on the file to view it full screen or share it through the default app on the device. The consumer can also tap the download icon to download the file to a location on their device (internal or external) through the picker application. 

{:.important}
iOS supports the preview of file types per iOS operating system. 

### Supported file formats
- PDF

- DOCX

- PPTX

- XSLX

### File sizes
- Thumbnail - 30 KB (base64-encoded)

- Max upload size allowed - 5 MB uncompressed 
   **For SDKs previous to 3.8:** The max upload size allowed is 3 MB.

### Notes and limitations
- The default value for files stored on the device is 20, which is configurable with the `maxNumberOfSavedFilesOnDisk` attribute.  If exceeding the max value of photos or files, the SDK deletes the oldest file.

- If a download attempt is unsuccessful, an error icon covers the thumbnail.  If clicked the file attempts to download again.

- The consumer can return to a resolved conversation to view the files, as long as the files are part of the conversation history.

- If an agent sends an unsupported file, a message displays indicating the file type shared with the consumer is not supported, and the agent should retry sending a supported file format.

- For authenticated users, backgrounding the app while downloading does not interrupt the download process. 

- For unauthenticated sessions, consumers must download the file again with each visit or refresh of the conversation because the history gets cleared when a session expires or logs the consumer out.


### Custom View Controller Mode requirements
When using Custom View Controller Mode, you must remove the Conversation view when leaving the App. To avoid dismissing the View when presenting CSAT/SecureForms/PhotoSharing View, you should only dismiss the Conversation view if Moving From ParentView:

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

When using ViewController Mode, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

---