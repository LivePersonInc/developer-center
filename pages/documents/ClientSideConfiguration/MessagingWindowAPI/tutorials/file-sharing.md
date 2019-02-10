---
pagename: File Sharing
redirect_from:
  - rich-messaging-file-sharing.html
  - file-sharing-introduction.html
  - rich-messaging-file-sharing-1.html
  - file-sharing-enable-file-sharing.html
  - rich-messaging-file-sharing-2.html
  - file-sharing-create-a-conversation.html
  - rich-messaging-file-sharing-3.html
  - file-sharing-request-upload-url.html
  - rich-messaging-file-sharing-4.html
  - file-sharing-upload-file-to-storage.html
  - rich-messaging-file-sharing-5.html
  - file-sharing-publish-message.html
  - rich-messaging-file-sharing-6.html
  - file-sharing-request-download-url.html
  - rich-messaging-file-sharing-7.html
  - file-sharing-download-file-from-storage.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: Tutorials
permalink: messaging-window-api-tutorials-file-sharing.html
indicator: messaging
---

### Introduction

The LiveEngage Messaging Window API includes a file sharing feature. This feature enables consumers to share files with agents, such as images. This feature is enabled as part of the Messaging Window API.

<div class="important">The below tutorials assume that you have performed the initial steps required in order to work with this API, which can be found <a href="/messaging-window-api-getting-started.html">here</a>.</div>

File Sharing can also be enabled by using the Connector API, for cases when images are sent through third party applications. Please refer to the [Connector API documentation](/share-image-example.html) for more information on how to do this.

A typical flow of setting up the file sharing feature using the Messaging Window API:

1. [Enable File Sharing](#step-1---enable-file-sharing)
2. [Create a Conversation](#step-2---create-a-conversation)
3. [Request Upload URL](#step-3---request-upload-url)
4. [Upload File to Storage](#step-4---upload-file-to-storage)
5. [Publish Message](#step-5---publish-message)
6. [Request Download URL](#step-6---request-download-url)
7. [Download File From Storage](#step-7---download-file-from-storage)

We will examine and explain each stage in detail as part of this documentation.

**Note:** If you would like to follow the steps using `bash`, please see the [Prerequisites document](consumer-int-get-msg.html#prerequisites).

### Step 1 - Enable File Sharing

In order to enable file sharing on your account, you should first enable the feature itself. Run the following commands, inserting the account admin username and admin password instead of the placeholders below in order to do so:

```sh
LP_USER= ADMIN_USERNAME
LP_PASS= ADMIN_PASSWORD
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.1" | jq -r .bearer`
./set_site_property.sh $LP_BEARER true messaging.file.sharing.enabled
```

### Step 2 - Create a Conversation

You will need to have an active conversation, along with its `converationId`, where the files will be shared. Below, creating a conversation is summarized but please follow the [Messaging Window API](consumer-int-overview.html) documentation if you need any more information. Make sure you have an active conversation and a `conversationId` at hand by the end of this step.

#### Using bash

Open a connection to the messaging service.

```sh
  wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Then, ask to create a new conversation:

```json
  {"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

In response, you will get a `conversationId` that will be used in the next steps.

### Step 3 - Request Upload URL

Use the following request to retrieve an upload URL, specifying the type and size of the file.

**Note**: The supported file types are `JPG`, `JPEG`, `PNG`, and `GIF`. Each file can be up to 3MB and the preview must be under 30KB.
Although file sharing supports uploading file of sizes up to 3MB, we recommend resizing and/or compressing the file to shorten the file processing time (sanitation services, post-processing services, etc.).

See full documentation for generating temporary upload URL [here](consumer-int-msg-generate-temp-upload-url.html).

Request Body Example:

```json
  {
  "kind": "req",
  "id": 1,
  "body": {
  "fileSize": "1000",
  "fileType": "JPG"
  },
  "type": "ms.GenerateURLForUploadFile"
  }
```

Request Body Example:

```json
  {
  "kind": "resp",
  "reqId": "1",
  "code": 200,
  "body": {
  "relativePath": "",
  "queryParams": {
  "temp_url_sig": "12345",
  "temp_url_expires": "1234"
  }
  },
  "type": "ms.GenerateURLResponse"
  }
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use them in the next request, to upload the file.

#### Using bash

```json
{"kind":"req","id":"3","body":{"fileSize":1000,"fileType":"PNG"},"type":"ms.GenerateURLForUploadFile"    }
```

In response you will get the following message:

```json
{"kind":"resp","reqId":"3","code":200,"body":{"relativePath":"/v1/AUTH_async-images/qa57221676/8a66a22f-81ee-4447-b92f-78e9c3ecc819.PNG","queryParams":{"temp_url_sig":"6f52625b7f148325071c2518c714109134acd7a3","temp_url_expires":"1474973420"}},"type":"ms.BaseGenerateURLResponse"}
```

### Step 4 - Upload File to Storage

Use the following request and the parameters obtained in steps 1 & 2 (`relativePath`, `temp_url_sig`, `temp_url_expires`) to upload the file to storage.

**Note**: file expiration is set to 1 minute by default.

#### Upload request

| Method | URL |
| :--- | :--- |
| PUT | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

Upload the file as binary.

#### Upload response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | CREATED |
| 401 | Temp URL invalid |


**Upload and download file requests are also available as a postman collection**. Use the following [link](assets/content/Swift.postman_collection)_


Unfamiliar with Postman? [Click here for more information](https://www.getpostman.com/)_

### Step 5 - Publish Message

Once the file is saved in storage, publish the file URL along with an optional caption and thumbnail as a message. See full documentation [here](consumer-int-msg-reqs.html). Event type should be `HostedFile`.

Example message:

```json
  {
    "kind": "req",
    "id": 1,
    "body": {
      "dialogId": "",
      "event": {
        "type": "ContentEvent",
        "contentType": "hosted/file",
        "message": {
          "caption": "Hello Kitten",
          "relativePath": "",
          "fileType": "JPG",
          "preview": ""
        }
      }
    },
    "type": "ms.PublishEvent"
  }
```

#### Using bash

```json
{"kind":"req","id":"22","body":{"dialogId":"__CONVERSATION_ID__","event":{"type":"ContentEvent","message":{"caption":"LivePerson logo","relativePath":"__relative_path__","fileType":"PNG","preview":"data:image/png;base64,<Base64Image>"},"contentType":"hosted/file"}},"type":"ms.PublishEvent"}
```

### Step 6 - Request Download URL

**Request a download URL**:

Using the messaging API, request a download url, specifying the relative path of the file. See full documentation [here](consumer-int-msg-generate-temp-download-url.html).


Request Body Example:

```json
  {
  	"kind": "req",
  	"id": 1,
  	"body": {
    	"relativePath": "1234.JPG"
  	},
  	"type": "ms.GenerateURLForDownloadFile"
  }
```

#### Using bash

```json
{"kind":"req","id":"33","body":{"relativePath":"__relative_path__"},"type":"ms.GenerateURLForDownloadFile"}
```

In response, you will get the URL details:

```json
{"kind":"resp","reqId":"3","code":200,"body":{"relativePath":"/v1/AUTH_async-images/qa57221676/8a66a22f-81ee-4447-b92f-78e9c3ecc819.PNG","queryParams":{"temp_url_sig":"6f52625b7f148325071c2518c714109134acd7a3","temp_url_expires":"1474973420"}},"type":"ms.BaseGenerateURLResponse"}
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use it in the next request, to download the file.

### Step 7 - Download File From Storage

Use the following request to download the file, using the parameters from the previous step.

| Method | URL |
| :--- | :--- |
| GET | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

**Note**: file expiration is set to 1 minute by default.
