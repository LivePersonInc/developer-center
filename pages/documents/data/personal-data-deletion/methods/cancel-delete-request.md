---
title: Cancel Deletion Request
keywords:
level1: Documents
level3: Personal Data Deletion API
level4: Methods
order: 20
permalink: personal-data-deletion-cancel-delete-request.html
indicator: both
---

This API allows cancellation of an existing deletion request.

### Request

 |Method|      URL|
 |:--------  |:---  |
 |POST|  https://{domain}/api/account/{site_id}/personal-data-deletion/{request_id}/cancel |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account id|   String ^[a-zA-Z0-9_]{1,20}$|
  |request_id  |Specific request id   |String|

  ### Response

  **Elements in the Response**

  |Name                 | Description                                                                    | Type/Value
  |:------------------- | :----------------------------------------------------------------------------- | :---------
  |request_id           | ID of the deletion request                                     | String
  |siteId               | LP account id                                  | string
  |request_time         | Time in which the deletion request was requested                                | string
  |requested_by         | The user id who requested to delete     | string
  |approved_by          | The user who approved the deletion request    | string
  |cancelled_by         | The user who canceled the deletion request                                | string
  |delete_json          | The deletion request's metadata    | string
  |approve_timestamp    | The approval's timestamp    | string
  |update_timestamp     | The update's timestamp   | string
  |cancel_timestamp     | Time in which the deletion request was requested                                | string
  |is_approved          | Boolean indicates if the deletion request was approved or not     | Boolean
  |is_canceled          | Boolean indicates if the deletion request was cancelled or not     | Boolean


  **Response Example**

  Response is in a JSON format

```json
  [
      {
          "request_id": 7723,
          "siteid": "le92186583",
          "request_time": "2017-12-24T09:31:25.000Z",
          "requested_by": "yyy",
          "approved_by": null,
          "cancelled_by": "acc",
          "delete_json": "{\"consumer\":[1,2]}",
          "approve_timestamp": null,
          "update_timestamp": "2017-12-25T06:36:05.000Z",
          "cancel_timestamp": "2017-12-25T06:39:38.000Z",
          "is_approved": false,
          "is_canceled": true
      }
  ]
```
