---
pagename: Publish Message
redirect_from:
  - rich-messaging-file-sharing-5.html
Keywords:
sitesection: Documents
categoryname: "Rich Media"
documentname: File Sharing
order: 60
permalink: file-sharing-publish-message.html
indicator: both
---

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
