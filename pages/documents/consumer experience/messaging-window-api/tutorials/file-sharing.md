---
title: Overview
level1: Documents
level2: Data
level3: Messaging Interactions API

level-order: 3
order: 1
permalink: data-messaging-interactions-overview.html
root-link: true
indicator: messaging
---
### Introduction

The LiveEngage Messaging Window API have a file sharing capability that enables consumers to share files with agents.


A typical flow of file sharing:
1.  Both consumer and agent are connected to messaging socket
2.  Consumer requests upload url
3.  Consumer uploads the file to storage using the upload url
4.  Consumer publishes the image as a message, specifying the publish URL, caption and thumbnail.  
5.  Agent receives the message and request download URL
6.  Agent issue a request to file storage for download


We examine each step in detail below:

## Step 1 - Connect to messaging socket
Please follow the [messaging window API](https://developers.liveperson.com/consumer-int-overview.html) and make sure you have an active messaging session.

## Step 2 - Request upload token

1. **Retrieve your storage domain**

	Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* swift

2. **Request an upload url**:

	Using the messaging API, request an upload url, specifying the type and size of the file.
> note the supported types and size limitations.

	@See full documentation @See full documentation [here](https://developers.liveperson.com/consumer-int-msg-reqs.html)


Request Body Example:

	{
		"kind": "req",
		"id": 1,
		"body": {
		"fileSize": "1000",
		"fileType": "JPG"
		},
		"type": "ms.GenerateURLForUploadFile"
	}


Request Body Example:

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


## Step 3 - Upload the file to storage

Use the following requests and the parameters obtained in steps 1 & 2 to upload the file to storage:

###### Upload request

| Method | URL |
| :--- | :--- |
| PUT | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

Upload the file as binary.

###### Upload response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | CREATED |

## Step 4 Publish message
Once the file is saved in storage, publish the file URL along with an optional caption and thumbnail.

@See full documentation @See full documentation [here](https://developers.liveperson.com/consumer-int-msg-reqs.html)

Example message:

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


==----------------------------------------------

## Step 4 Request Download URL


1. **Retrieve your storage domain**

	Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* swift

2. **Request a download url**:

	Using the messaging API, request an upload url, specifying the relative path of the file.

	@See full documentation [here](https://developers.liveperson.com/consumer-int-msg-reqs.html)


Request Body Example:

	{
  	"kind": "req",
  	"id": 1,
  	"body": {
    	"relativePath": "1234.JPG"
  	},
  	"type": "ms.GenerateURLForDownloadFile"
	}

## Step 6 - Download the file from storage

| Method | URL |
| :--- | :--- |
| GET | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |


**Download the Chat API resources by a Postman collection**. Use the following [link](assets/content/Swift.postman_collection){:target="_blank"}

Unfamiliar with Postman? [Click here for more information](https://www.getpostman.com/){:target="_blank"}
