---
pagename: Share Image File
redirect_from:
  - share-image-example.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Connector API
subfoldername: Examples
order: 68
indicator: messaging
permalink: connector-api-examples-share-image-file.html

---

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Introduction

The LiveEngage Connector API includes a file sharing feature. This feature enables consumers to share files with agents, such as images.


A typical flow of setting up the file sharing feature using the Messaging Window API:

1. Enable file sharing capability

2. Create a conversation

3. Request an upload URL

4. Upload the file to storage

5. Publish the file as a message inside the conversation  

6. Request a download URL

7. Download file from storage


Below, we will examine and explain each stage in detail.


### Step 1 - Enable File Sharing

In order to enable file sharing on your account, you should first enable the feature itself. Run the following commands, inserting the account admin username and admin password instead of the placeholders below:

```sh
LP_USER= ADMIN_USERNAME
LP_PASS= ADMIN_PASSWORD
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.1" | jq -r .bearer`
./set_site_property.sh $LP_BEARER true messaging.file.sharing.enabled
```

### Step 2 - Create a Conversation

You will need to have an active conversation, along with its converationID, where the files will be shared. Below, creating a conversation is summarized but please follow the [CONVERSATION API](sendapi-create.html) documentation if you need any more information. Make sure you have an active conversation and a conversationId at hand by the end of this step.

###  Step 3 - Request Upload URL

Use the following request to retrieve an upload url, specifying the type and size of the file.


**Note**: The supported file types are `JPG`, `JPEG`, `PNG`, `GIF`. Each file can be up to 3MB and the preview must be under 30KB.

See full documentation for generating temporary upload URL [here](consumer-int-msg-generate-temp-upload-url.html).

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html)) |

**Request Body Example - JSON Payload**

```json
	{
		"kind": "req",
		"id": 3,
		"body": {
		"fileSize": "1000",
		"fileType": "PNG"
		},
		"type": "ms.GenerateURLForUploadFile"
	}
```

**Response Body Example**:

```json
{
  "code": "OK",
  "body": {
      "relativePath": "/v1/AUTH_async-images/64467156/6be59ddb8f54d88845a4fd4987cf5717878eacd2f893b7a7331717f113d2589f_uuid_326931e5-062f-46cb-b981-a383040d2cb8_04-06-2018_04-10-59-845.PNG",
      "queryParams": {
          "temp_url_sig": "dd9e3bdb2bebbc254653f0dd090922b40489ca6e",
          "temp_url_expires": "1528099919"
      }
  },
  "reqId": "3"
}
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use them in the next request, to upload the file.

### Step 4 - Upload File to Storage

Use the following request and the parameters obtained in step 3 (`relativePath`, `temp_url_sig`, `temp_url_expires`) to upload the file to storage.

**Note**: file expiration is set to 1 minute by default.

**Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* swift

#### Upload request

| Method | URL |
| :--- | :--- |
| PUT | https://{swift}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

Upload the file as binary to swift storage.

#### Upload response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | CREATED |
| 401 | Temp URL invalid |


### Step 5 Publish Image to Conversation

Once the file is saved in storage, publish the file URL along with an optional caption and thumbnail as a message. See full documentation [here](consumer-int-msg-reqs.html). Event type should be `HostedFile`

**Optional thumbnail**

In order to generate a thumbnail you need to convert your image to base64. The output will populate the parameter `imageData`.


### Publish the file to the conversation - Example

```json
{
	"kind": "req",
	"id": "3",
	"body": {
		"dialogId": "{conversationId}",
		"event": {
			"type": "ContentEvent",
			"message": {
				"caption": "File logo",
				"relativePath": "{relativePath}",
				"fileType": "JPEG",
				"preview": "data:image/png;base64,{imageData}"
			},
			"contentType": "hosted/file"
		}
	},
	"type": "ms.PublishEvent"
}
```

#### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId | The `conversationId` created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpint](sendapi-create.html#response) |
| type | The messaging event type | ContentEvent | string | true | ContentEvent will be used for sending a text message or a file |
| contentType | Which content is sent | "hosted/file" | string | true | file is hosted on swing server |
| message | Array of properties describing the file | {"caption": "File logo", "relativePath": "{relativePath}", "fileType": "JPEG", "preview": "data:image/png;base64,{imageData}"} | Array of file properties | true | **caption** is an optional string, **relative path** is Mandatory (extracted on step 3), **file type** (JPEG,PNG) is Mandatory and **preview** is the base64 data conversion of the file (optional) |

#### Publish response

**Response Codes**

| Code | Description | Notes |
| :--- | :--- |
| 200 | Ok | File was sent to the Agent |
| 400 | Bad Request | Check your file size and that its is not corrupted |


### Step 6 Request Download URL

**Request a download url**:

Using the messaging API, request a download url, specifying the relative path of the file. See full documentation [here](consumer-int-msg-generate-temp-download-url.html).


Request Body Example:

```json
{
	"kind": "req",
	"id": "3",
	"body": {
		"relativePath": "{{relativePath}}"
	},
	"type": "ms.GenerateURLForDownloadFile"
}
```

In response, you will get the URL details:

```json
{
    "code": "OK",
    "body": {
        "relativePath": "/v1/AUTH_async-images/64467156/5f3aab9eb95ff60f159cab500e3a83f1aba98a99749c07143fbda2dece70e601_uuid_5c68d4e8-3bde-40ac-86c2-1e5f43089cd4_07-06-2018_09-47-15-947.JPEG",
        "queryParams": {
            "temp_url_sig": "384bcb0b188920909d4a068473824e964ecbffcd",
            "temp_url_expires": "1528379356"
        }
    },
    "reqId": "3"
}
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use it in the next request, to download the file.


## Step 7 - Download File From Storage

Use the following request to download the file, using the parameters from the previous step.

| Method | URL |
| :--- | :--- |
| GET | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

**Note**: file expiration is set to 1 minute by default.
