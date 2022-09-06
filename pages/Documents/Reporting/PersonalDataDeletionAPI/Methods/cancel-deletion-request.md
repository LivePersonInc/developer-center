---
pagename: Cancel Deletion Request
redirect_from:
  - personal-data-deletion-cancel-delete-request.html
keywords:
sitesection: Documents
categoryname: "Reporting"
documentname: Personal Data Deletion API
subfoldername: Methods
order: 20
permalink: personal-data-deletion-api-methods-cancel-deletion-request.html
indicator: both
---

This API allows cancellation of an existing deletion request in the time period before it is approved by LP.

### Request

 |Method|      URL|
 |:--------  |:---  |
 |POST|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{site_id}/personal-data-deletion/{request_id}/cancel |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains oAuth string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account id|   String |
  |request_id  |Specific request id   |String|

### Response

  **Elements in the Response**

  |Name                 | Description                                                                    | Type/Value
  |:------------------- | :----------------------------------------------------------------------------- | :---------
  |request_id           | ID of the deletion request                                     | long
  |siteId               | LP account id                                  | string
  |request_time         | Time in which the deletion request was requested                                | string
  |requested_by         | The user id who requested to delete     | string
  |cancelled_by         | The user who canceled the deletion request                                | string
  |cancel_timestamp     | Time in which the deletion request was requested                                | string
  |is_canceled          | Boolean indicates if the deletion request was cancelled or not     | boolean

  **Response Example**

  Response is in a JSON format

```json
  [
      {
          "request_id": 7723,
          "siteid": "92186583",
          "request_time": "2017-12-24T09:31:25.000Z",
          "requested_by": "yyy",
          "cancelled_by": "acc",
          "cancel_timestamp": "2017-12-25T06:39:38.000Z",
          "is_canceled": true
      }
  ]
```
