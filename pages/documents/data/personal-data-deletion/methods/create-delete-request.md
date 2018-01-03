---
title: Create Deletion Request
keywords:
level1: Documents
level3: Personal Data Deletion API
level4: Methods
order: 10
permalink: personal-data-deletion-delete-request.html
indicator: both
---

This API allows a the brand to submit a deletion request by one of the following: 
Engagement - deletion of the personal data that is related to the chat (including transcripts, PII etc.). 
Conversation - deletion of personal data that is related to the conversation (including transcripts, PII etc.)
ConsumerId - deletion of perosanl data that is related to the consumer (doesn't include the consumer's conversations)

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://{domain}/api/account/{site_id}/personal-data-deletion |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account id|   String ^[a-zA-Z0-9_]{1,20}$|

 **Request BODY Parameters**


All fields are sent in a JSON format

 | Name | Description | Type / Value | Required | Notes |
 | :---- | :------- | :--------- | :--- | :--- |
 | engagement| Engagement ids for deletion (chat) | list of string ids | Optional | Only one of the deletion types can be sent in a single request |
 | conversation| Conversation ids for deletion (messaging) | list of string ids | Optional | Only one of the deletion types can be sent in a request |
 | consumer| Consumer ids for deletion | list of string ids | Optional | Only one of the deletion types can be sent in a request |

BODY Examples:

Example 1:

```json
  {
    "engagement": ["le207623244295067780"]
  }
```

Example 2:

```json
  {
    "consumer": ["7524a955-db4b-4a6c-b2b4-66f520a7895e"]
  }
```

Example 3:

```json
  {
    "conversation": ["0345bf7d-08dc-4e61-8a11-e566e3bcd787","a2776761-5e66-4ea8-83e7-a955cd925471"]
  }
```
