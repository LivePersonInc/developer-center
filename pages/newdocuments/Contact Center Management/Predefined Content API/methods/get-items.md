---
pagename: Get Predefined Content Items
redirect_from:
  - account-configuration-predefined-content-get-items.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

order: 60
permalink: predefined-content-api-methods-get-predefined-content-items.html

indicator: both
---

Retrieves a list of Predefined Content items from a specific account.

### Request

| Method  |URL| 
 |:--------|  :------| 
 |GET|  /api/account/{accountId}/configuration/engagement-window/canned-responses |

**Path Parameters**

 |Parameter|  Description|  Type|  Notes| 
 |:----------|  :--------------|  :--------------|  :---| 
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| fields          | Response property type to include in the response entity.                    | Boolean | Deprecated - use select                        |
| field_set       | Alias of response property types to include in the response entity.          | Boolean | Deprecated - use select                        |
| include_deleted | Flag indicating whether deleted entities should be returned in the response. | Boolean | Valid values: True/False. Default value: False |
| sanitize_data   | Flag indicating whether the text should be sanitized (Antisamy).             | Boolean | Valid values: True/False. Default value: False |
| lang            | Languages (separated by commas) to filter the response by.                   | string  | Format: en-US, en-UK. Default value: null      |
| select          | Yoga selector expression.                                                    | string  | Example values: id, name. Default value: null  |
| group_by        | Property type to group the return entities by.                               | string  | Example value: CATEGORIES. Default value: null |
| skill_ids       | Skills IDs (separated by commas) to filter the response by.                  | string  | Example values: 2,3,4. Default value: null     |
| ids             | Entity IDs (separated by commas) to filter the response by.                  | string  | Example values: 2,3,4. Default value: null     |

**Request Headers**

| Header | Description | Notes| 
 |:-------  |:-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization. | 
 |If-Match  |Contains data revision, as known by the client. | Allows optimization of backend, networking and client resource utilization. |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. | 

**Response Body**

    {
        {
            "id":18799,
            "deleted":false,
            "enabled":true,
            "hotkey":{"prefix":"a", "suffix":"9"}, 
            "type":0,
            "data": [
                {
                    "msg": "Hello, how can I help you?",
                    "lang": "en-us",
                    "title": "Hello",
                    "isDefault":false
                },
                {
                    "msg": "!שלום",
                    "lang": "he-il",
                    "title": "משפט פתיחה",
                    "isDefault":false
                }
            ],
            "categoriesIds": [234,5674,4,3],
             "skillIds": [234,5674,4,3]
        },
        {
            "id": 2,
            "deleted": false,
            "enabled": true,
            "hot-key": {"prefix":"b", "suffix":"9"},
            "type": 0,
            "data": [
                {
                    "msg": "Thank you for chatting with me!",
                    "lang": "en-us",
                    "title": "Closing",
                    "isDefault":false  
                },
                {
                    "msg": "תודה ושלום",
                    "lang": "he",
                    "title": "משפט סגירה",
                    "isDefault":false
                }
            ],
            "categoriesIds": [13,22,46],
             "skillIds": [234,5674,4,3]
        }
    {

**Response group by categories**

    {
      "275396111": [
        {
          "id": 275396211,
          "deleted": false,
          "enabled": true,
          "data": [
            {
              "title": "hold",
              "msg": "I'll be right with you",
              "lang": "en-US",
              "isDefault": false
            },
            {
              "title": "mantener",
              "msg": "Estaré con ustedes",
              "lang": "ca-ES",
              "isDefault": false
            }
                 ],
          "hotkey": {
            "prefix": "alt",
            "suffix": "6"
          },
          "type": 0,
          "categoriesIds": [
            275395911,
            275396011,
            275396111
          ]
        }
      ],
      "275395911": [
        {
          "id": 275396211,
          "deleted": false,
          "enabled": true,
          "data": [
            {
              "title": "hold",
              "msg": "I'll be right with you",
              "lang": "en-US",
              "isDefault": false
            },
            {
              "title": "mantener",
              "msg": "Estaré con ustedes",
              "lang": "ca-ES",
              "isDefault": false
            }
          ],
          "hotkey": {
            "prefix": "alt",
            "suffix": "6"
          },
          "type": 0,
          "categoriesIds": [
            275395911,
            275396011,
            275396111
          ]
        }
      ],
      "275396011": [
        {
          "id": 275396211,
          "deleted": false,
          "enabled": true,
          "data": [
            {
              "title": "hold",
              "msg": "I'll be right with you",
              "lang": "en-US",
              "isDefault": false
            }
          ],
          "hotkey": {
            "prefix": "alt",
            "suffix": "6"
          },
          "type": 0,
          "categoriesIds": [
            275395911,
            275396011,
            275396111
          ]
        }
      ]
    }

