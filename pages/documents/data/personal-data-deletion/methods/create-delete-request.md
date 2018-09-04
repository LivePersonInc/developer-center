---
title: Create Deletion Request
keywords:
level1: Documents
level2: Data
level3: Personal Data Deletion API
level4: Methods
order: 10
permalink: personal-data-deletion-delete-request.html
indicator: both
---

This API allows a the brand to submit a deletion request via one of the following methods:

By Chat Engagement - deletion of the personal data that is related to specific chat engagement(s) (including transcripts, Personally identifiable information (PII), etc.).

By Messaging Conversation - deletion of personal data that is related to specific messaging conversation(s) (including transcripts, PII, etc.).

By consumerId - deletion of personal data that is related to a specific consumer (does not include the consumer's conversations; those must be deleted in a separate request).

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{site_id}/personal-data-deletion |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains oAuth string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account id|   String |

 **Request BODY Parameters**


All fields are sent in a JSON format

**Note**: Only one of the deletion types which appear below can be sent in a single request with a list of up to 100 unique ids.

 | Name | Description | Type / Value | Required | Notes |
 | :---- | :------- | :--------- | :--- | :--- |
 | engagement| Engagement ids for deletion (chat) | array of strings | Optional | The format should be the account id + chat id (same as the engagementId returned in the Engagement History API response).  |
 | conversation| Conversation ids for deletion (messaging) | array of strings | Optional | |
 | consumer| Consumer ids for deletion | array of strings | Optional |  |

BODY Examples:

Example 1:

```json
  {
    "engagement": ["207623244295067780"]
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

### Response

 **Response Codes**

  |Code|  Response|  
  |:------    |:-------- |
  |201 |  Created|  
  |400 |  Bad request|  
  |401 |  Unauthorized request|  
  |403 |  Not sufficient priviliges|  
  |429 |  Requests threshold for current month was reached|
  |500 |  Internal server error|  

**Note**: by default, the requests threshold is set to 100 requests per calendar month. If you wish to change this, please contact your LivePerson Account Team.


  **Elements in the Response**

 |Name                 | Description                                                                    | Type/Value
 |:------------------- | :----------------------------------------------------------------------------- | :---------
 |request_id           | ID of the deletion request                                     | long |
 |siteId               | LP account id                                  | string|
 |request_time         | Time in which the deletion request was requested                                | string|
 |requested_by         | The user who requested to delete     | string|
 |cancelled_by         | The user who canceled the deletion request     | string|
 |delete_json          | The body parameter of the request     | string|
 |cancel_timestamp     | Time in which the deletion request was requested      | string|
 |is_canceled          | Boolean indicates if the deletion request was cancelled or not     | boolean|

 **Response Example**

Response is in a JSON format.

```json
{
    "request_id": 127223,
    "siteid": "20762324",
    "request_time": "2018-01-04T14:07:32.000Z",
    "requested_by": "Mike",
    "cancelled_by": null,
    "delete_json": "{\"engagement\":["207623244295067780"]}",
    "cancel_timestamp": null,
    "is_canceled": false
}
```
