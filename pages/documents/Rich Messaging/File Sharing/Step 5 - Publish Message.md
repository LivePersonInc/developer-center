---
title: Step 5 - Publish Message
Keywords:
level1: Documents
level2: Rich Messaging
level3: File Sharing
order: 60
permalink: rich-messaging-file-sharing-5.html
indicator: both
---

Once the file is saved in storage, publish the file URL along with an optional caption and thumbnail as a message. See full documentation [here](https://developers.liveperson.com/consumer-int-msg-reqs.html). Event type should be `HostedFile`.

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
