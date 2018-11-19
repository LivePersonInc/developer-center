---
pagename: Upload File to Storage
redirect_from:
  - rich-messaging-file-sharing-4.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: File Sharing
order: 50
permalink: file-sharing-web-messaging-upload-file-to-storage.html
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


**Upload and download file requests are also available as a postman collection**. Use the following [link](assets/content/Swift.postman_collection)_


Unfamiliar with Postman? [Click here for more information](https://www.getpostman.com/)_
