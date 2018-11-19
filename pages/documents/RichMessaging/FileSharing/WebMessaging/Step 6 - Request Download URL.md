---
pagename: Request Download URL
redirect_from:
  - rich-messaging-file-sharing-6.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: File Sharing
order: 70
permalink: file-sharing-web-messaging-request-download-url.html
indicator: both
---

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
