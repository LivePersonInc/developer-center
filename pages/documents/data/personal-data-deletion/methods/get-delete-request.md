---
title: Get Deletion Requests
keywords:
level1: Documents
level2: 
level3: Personal Data Deletion API
level4: Methods
order: 30
permalink: personal-data-deletion-get-deletion-requests.html
indicator: both
---

This API returns the metadata related to the deletion requests that were submitted by the brand, including their current status.

### Request

 |Method|      URL|
 |:--------  |:---  |
 |GET|  https://{domain}/api/account/{site_id}/personal-data-deletion(/{request_id}) |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains oAuth string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account ID|   String ^[a-zA-Z0-9_]{1,20}$|
  |requestId  |Optional - specific request id   |String|

 **Query Parameters**

 | Name | Description | Type / Value | Required | Notes |
 | :---- | :------- | :--------- | :--- | :--- |
 | status| Filter by status of the deletion request (NOT_STARTED,IN_PROGRESS,CANCELED)  | string| Optional | Default is all requests. Can be used only without request_id parameter |
 | fromDate| The start of the timeframe for returning the deletion requests | long - represents the start time| Optional | Default is 1/1/1970. Can be used only without request_id parameter. |
 | toDate| The end of the timeframe for returning the deletion requests| long  - represents the end time| Optional | Default is current time. Can be used only without request_id parameter. |


### Response

 **Elements in the Response**

 |Name                 | Description                                                                    | Type/Value
 |:------------------- | :----------------------------------------------------------------------------- | :---------
 |request_id           | ID of the deletion request                                     | long |
 |siteId               | LP account id                                  | string|
 |request_time         | Time in which the deletion request was requested                                | string|
 |requested_by         | The user id who requested to delete     | string|
 |status               | The current status of the deletion request     | string|


 **Response Example**

Response is in a JSON format.

```json
[
    {
        "request_id": 323,
        "siteid": "39913159",
        "request_time": "2017-11-06T14:03:57.000Z",
        "requested_by": "John",
        "status": "IN_PROGRESS"
    },
    {
        "request_id": 23,
        "siteid": "39913159",
        "request_time": "2017-11-21T11:08:54.000Z",
        "requested_by": "Mike",
        "status": "NOT_STARTED"
    },
    {
        "request_id": 123,
        "siteid": "39913159",
        "request_time": "2017-11-21T12:14:41.000Z",
        "requested_by": "Lisa",
        "status": "CANCELED"
    }
]

```
