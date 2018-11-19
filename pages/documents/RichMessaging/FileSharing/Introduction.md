---
pagename: Introduction
redirect_from:
  - rich-messaging-file-sharing.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: File Sharing
level-order: 5
order: 10
permalink: file-sharing-introduction.html
root-link: true
indicator: both
---

### Introduction

The LiveEngage Messaging Window API includes a file sharing feature. This feature enables consumers to share files with agents, such as images. This feature is enabled as part of the Messaging Window API.

<div class="important">The below tutorials assume that you have performed the initial steps required in order to work with this API, which can be found <a href="/messaging-window-api-getting-started.html">here</a>.</div>

File Sharing can also be enabled by using the Connector API, for cases when images are sent through third party applications. Please refer to the [Connector API documentation](/share-image-example.html) for more information on how to do this.

A typical flow of setting up the file sharing feature using the Messaging Window API:

1. [Enable file sharing capability](file-sharing-enable-file-sharing.html)

2. [Create a conversation](file-sharing-create-a-conversation.html)

3. [Request an upload URL](file-sharing-request-upload-url.html)

4. [Upload the file to storage](file-sharing-upload-file-to-storage.html)

5. [Publish the file as a message inside the conversation](file-sharing-publish-message.html)

6. [Request a download URL](file-sharing-request-download-url.html)

7. [Download file from storage](file-sharing-download-file-from-storage.html)

We will examine and explain each stage in detail as part of this documentation.

**Note:** If you would like to follow the steps using `bash`, please see the [Prerequisites document](consumer-int-get-msg.html#prerequisites).
