---
title: Predefined Content Query Delta
redirect_from:
  - account-configuration-predefined-content-query-delta.html
Keywords:
sitesection: Documents
level2: Account Configuration
level3: Predefined Content API
level4: Methods

order: 30
permalink: predefined-content-api-methods-predefined-content-query-delta.html

indicator: both
---

Changes Queries in Predefined Content data.

### Request 

 |Method | URL |
 |:--------|  :----------| 
 |POST|  /api/account/configuration/engagement-window/canned-responses/query |

**Query Parameters**

| Name          | Description                               | Type                                           | Required | Notes                                                                                                                                                                                                                                           |
|---------------|-------------------------------------------|------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| select        | Dynamic selection of the response fields. | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response Supported fields: any in response body                                                                                                                                    |
| fields        | List of required fields                   | Comma delimited list of strings                | Optional | Validation fail error code: 400 Non existing field error code: 400 Supported fields: <br>• enabled <br>• data <br>• categoriesIds <br>• hot-key<br> • type                                                                                                     |
| field_set     | Predefined set of fields                  | Comma delimited list of strings                | Optional | Default: summary Validation fail error code: 400 Non existing field error code: 400 Supported field_set values: <br>• all(id, deleted, enabled, data, categoriesIds, type, hot-key) <br>• summary(id, deleted, enabled, categoriesIds, type, hot-key) |
| sanitize_data | Whether to sanitize any HTML messages     | Boolean                                        | Optional | Default: False                                                                                                                                                                                                                                  |
| lang          | List of requested content languages       | Comma delimited list of language IDs (en-US,…) | Optional | Default: all languages                                                                                                                                                                                                                          |

**Request Body**

There are 2 types of queries:

- Delta (type 0): Returns the active revision for a site
- All changes (type 1): Returns a range of revision data

Type 0 (delta):

    {
       "type":0,
       "parameters":[
           {
             "site": "1236744443",
             "revision": 17890
            },
            {
             "site": "243256785",
             "revision": 2456
            }
       ]
    }

Type 1 (all changes)

    {
       " type":1,
       "parameters":[
           {
             "site": "1236744443",
             "from": 17890,
             "to":17930
            },
            {
             "site": "243256785",
             "from": 2456,
             "to": 2500
            }
       ]
    }

**Request Headers**

| Header|  Description|  
 |:-------  |:--------------|  
 |Authorization|  Contains token string to allow request authentication and authorization.  |

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |

**Response Body for Delta Query**

    {
     "appDataList":[
       {
         "appName":"canned-responses",
         "appApiVersion":2.0,
         "accountList":{
           "accountList":[
             {
               "siteId":"1236744443",
               "itemsCollection":{
                 "items":[
                   {
                     "id":1,
                     "deleted":false,
                     "enabled":true,
                     "templateId":"canned-response-template-1"
                     "hot-key":{
                       "prefix":"a",
                       "suffix":"9"
                     },
                     "type": 0,
                     "data":[
                       {
                         "msg":"Hello.  How may I assist you?",
                         "lang":"en-us",
                         "title":"Hello",
                         "isDefault":false
                       },
                       {
                         "msg":"!שלום",
                         "lang":"he",
                         "title":"משפט פתיחה",
                         "isDefault":false
                       }
                     ],
                     "categoriesIds":[]
                   },
                   {
                     "id":2,
                     "deleted":false,
                     "enabled":true,
                     "hot-key":{
                       "prefix":"b",
                       "suffix":"9"
                     },
                     "type":0",
                     "data":[
                       {
                         "msg":"Thank you for chatting with me!",
                         "lang":"en-us",
                         "title":"Closing",
                         "isDefault":false
                       },
                       {
                         "msg":"תודה ושלום",
                         "lang":"he",
                         "title":"משפט סגירה",
                         "isDefault":false
                       }
                     ],
                     "categoriesIds":[
                       13,
                       22,
                       46
                     ]
                   }
                 ],
                 "revision":17891
               }
             }
           ]
         }
       }
     ]
    }

**Response Body - All Changes Query**

    {
     {
       "revisionsCollection": [
         {
           "revision": 2,
           "items": [
             {
               "id": 284099611,
               "enabled": true,
               "data": [
                 {
                   "title": "hold",
                   "isDefault": false,
                   "msg": "I'll be right with you",
                   "lang": "en-US"
                 }
               ],
               "type": 0,
               "deleted": false,
               "hotkey": {
                 "prefix": "alt",
                 "suffix": "7"
               }
             }
           ],
           "revisionDate": "2014-06-08 15:34:37"
         },
         {
           "revision": 3,
           "items": [
             {
               "id": 284099711,
               "enabled": true,
               "data": [
                 {
                   "title": "hold",
                   "isDefault": false,
                   "msg": "I'll be right with you",
                   "lang": "en-US"
                 }
               ],
               "type": 0,
               "deleted": false,
               "hotkey": {
                 "prefix": "alt",
                 "suffix": "8"
               }
             }
           ],
           "revisionDate": "2014-06-08 15:34:37"
         },
         {
           "revision": 4,
           "items": [
             {
               "id": 284099711,
               "enabled": true,
               "data": [
                 {
                   "title": "hold",
                   "isDefault": false,
                   "msg": "I'll be right with you",
                   "lang": "en-US"
                 }
               ],
               "type": 0,
               "deleted": true,
               "hotkey": {
                 "prefix": "alt",
                 "suffix": "8"
               }
             }
           ],
           "revisionDate": "2014-06-08 15:34:37"
         }
       ],
       "siteId": "S69757867"
     }
    {
