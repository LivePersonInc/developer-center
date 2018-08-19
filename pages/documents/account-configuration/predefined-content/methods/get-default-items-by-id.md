---
title: Get Default Predefined Content by ID
redirect_from:
  - account-configuration-predefined-content-get-default-items-by-id.html
Keywords:
sitesection: Documents
level2: Account Configuration
level3: Predefined Content API
level4: Methods

order: 10
permalink: predefined-content-api-methods-get-default-predefined-content-by-id.html

indicator: both
---

Retrieves a single, default Predefined Content item by template ID from a specific account.

### Request

| Method | URL |
 |:-------- | :-----| 
| GET | /api/configuration/defaults/engagement-window/canned-responses/{templateId} |

**Path Parameters**

 |Parameter  |Description  |Type / Value |
| :-------- | :---------- | :----------- |
 |templateId | ID of a template used to instantiate the object | string |

### Response

**Response Codes**

| Code  |Description |
 |:-----  |:------------- |
| 200|  OK| 
| 404 | Data Not Found |

**Response Body**

```json
[
  {
    "templateId": "canned-response-template-1",
    "templateDeleted": false,
    "deleted": false,
    "enabled": true,
    "data": [
      {
        "title": "Introduction",
        "msg": "Allow me to introduce myself as your chat agent.",
        "lang": "en-US",
        "isDefault": true
      }
    ],
    "type": 0
  },
  {
    "templateId": "canned-response-template-2",
    "templateDeleted": false,
    "deleted": false,
    "enabled": true,
    "data": [
      {
        "title": "Hello",
        "msg": "Hello, How may I assist you?",
        "lang": "en-US",
        "isDefault": true
      }
    ],
    "type": 0
  },
  {
    "templateId": "canned-response-template-3",
    "templateDeleted": false,
    "deleted": false,
    "enabled": true,
    "data": [
      {
        "title": "Welcome",
        "msg": "Welcome to our live chat service. My name is $!{operator.nickname} and I am here to assist you.",
        "lang": "en-US",
        "isDefault": true
      }
    ],
    "type": 0
  },
```