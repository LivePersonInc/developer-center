---
title: Update Session
redirect_from:
  - rt-interactions-update-session.html
sitesection: Documents
level2: Consumer Information
level3: App Engagement API
level4: Methods

order: 20
permalink: app-engagement-api-methods-update-session.html

indicator: both
---

Use this method to update the session and add SDEs.

### Request

| Method | URL |
| :--- | :--- |
| PUT |`https://<CSDSdomainForMSDKGW>/api/account/{accountId}/app/engagement/visitors/{visitor-id}` |

**Path Parameters**

| Parameter | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | string  | Required |
| visitorId | Visitor ID | string | Required |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| sid | Session ID | string | Required | |

**Body parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| pageId | Page identification ID for sending event on the current engagement | string | Required  ||
| impAttributes | Array of impression events attributes | string | Optional | Can be used in order to update funnel. See [here](rt-interactions-example.html) for supported values examples |
| engagementAttributes | Array of engagement attributes (SDEs) | string | Optional | Supported Values: all SDEs excluding the type of ImpressionEvent. See [here](engagement-attributes-types.html) for examples.  |

**Body entity example**


    {  
       "pageId":"4743822558",
       "impAttributes":[  
          {  
             "type":"impAccept",
             "campaign":3115242510,
             "engId":3115242810,
             "revision":537,
             "eContext":[  
                {  
                   "type":"engagementContext",
                   "id":"1"
                }
             ]
          },
          {  
             "type":"impDisplay",
             "campaign":3115242510,
             "engId":3115242810,
             "revision":537,
             "eContext":[  
                {  
                   "type":"engagementContext",
                   "id":"1"
                }
             ]
          }
       ],
       "engagementAttributes":[
         {
           "type": "personal",
           "personal": {
             "contacts": [{"email":"sarah@gmail.com","phone":"0987653"}],
             "age": {
               "age":30.0,
               "year":1986,
               "month":7,
               "day":22
             },
             "firstname": "Sarah",
             "lastname": "West",
             "gender": "FEMALE",
             "company": "liveperson"
           }
         }
       ]
    }

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
| 400 | Validation error |
| 401 | Unauthorized |
| 404 | Data not found |
| 500 | Internal server error |
| 503 | The server is temporarily unavailable |

**Retry Policy Recommendation**

| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problem in code |
| 5xx | Error on server side | Retry 3 times with 5, 10, 15 second pause between retries. |

**Response empty entity**

Error Response entity:

    {
      "time" : Long
      "message" : String [Optional]
      "internalCode" : Integer
    }


Example:

    {
                 "time":1469543282471,
                 "message":"Illegal Version",
                 "internalCode":33
    }
