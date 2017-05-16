---
title: Update Session
level1: Documents
level2: Real Time Interactions
level3: App Engagement API
level4: Methods

order: 20
permalink: rt-interactions-update-session.html

---

Use this method to update the session and add SDEs.

### Request

| Method | URL |
| :--- | :--- |
| PUT |`https://<CSDSdomainForMSDKGW>/api/account/{accountId}/app/engagement/visitors/{visitor-id}?sid={session-id}` |

**Path Parameters**

| Parameter | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | string ^[a-zA-Z0-9_]{1,20}$ | Required |
| visitorId | Visitor ID | string | Required |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| sid | Session ID | string | Required | |

**Body parameters**

| pageId | 

**Body entity example**

https://domainToLiveperson/api/account/{accountId}/app/engagement/visitor/{visitorId}?v=1.0&sid={sessionId}

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


