---
pagename: Get Deletion Request
redirect_from:
  - personal-data-deletion-get-deletion-requests.html
keywords:
sitesection: Documents
categoryname: Data
documentname: Personal Data Deletion API
subfoldername: Methods
order: 30
permalink: personal-data-deletion-api-methods-get-deletion-request.html
indicator: both
---

This API returns the metadata related to the deletion requests that were submitted by the brand, including their current status. It can be used to retrieve all requests, a specific request by ID, or a set of requests opened during a specified timeframe.

### Request

 |Method|      URL|
 |:--------  |:---  |
 |GET|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{site_id}/personal-data-deletion(/{request_id}) |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains oAuth string to allow request authentication and authorization.  |

 **Path Parameters**

  |Parameter|  Description|  Type/Value |
  |:------    |:--------    |:--------|
  |site_id|  LP account ID|   String |
  |requestId  |Optional - specific request id   |String|

 **Query Parameters**

 | Name | Description | Type / Value | Required | Notes |
 | :---- | :------- | :--------- | :--- | :--- |
 | status| Filter by status of the deletion request (NOT_STARTED,IN_PROGRESS,CANCELED,DONE)  | string| Optional | Default is all requests. Can't be used with request_id parameter. |
 | fromDate| The start of the date range for returning the deletion requests | yyyy-mm-dd string - represents the start date| Optional | Default is 1970-01-01. Can't be used with request_id parameter. |
 | toDate| The end of the date range for returning the deletion requests| yyyy-mm-dd string  - represents the end date| Optional | Default is current time. Can't be used only with request_id parameter. |

**Note: The current date format (YYYY-MM-DD) will be deprecated in the near future and the new expected format will be unix timestamps.**

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
