---
title: Step 7 - Download File From Storage
redirect_from:
  - rich-messaging-file-sharing-7.html
Keywords:
level1: Documents
level2: Rich Messaging
level3: File Sharing
order: 80
permalink: file-sharing-step-7---download-file-from-storage.html
indicator: both
---

Use the following request to download the file, using the parameters from the previous step.

| Method | URL |
| :--- | :--- |
| GET | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

**Note**: file expiration is set to 1 minute by default.
