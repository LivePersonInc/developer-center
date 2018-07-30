---
title: Step 3 - Request Upload URL
Keywords:
level1: Documents
level2: Rich Messaging
level3: File Sharing
order: 40
permalink: rich-messaging-file-sharing-3.html
indicator: both
---

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
