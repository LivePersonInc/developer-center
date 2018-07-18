---
title: Step 4 - Upload File to Storage
Keywords:
level1: Documents
level2: Rich Messaging
level3: File Sharing
order: 50
permalink: file-sharing-step-4---upload-file-to-storage.html
indicator: both
---

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


**Upload and download file requests are also available as a postman collection**. Use the following [link](assets/content/Swift.postman_collection){:target="_blank"}_


Unfamiliar with Postman? [Click here for more information](https://www.getpostman.com/){:target="_blank"}_
