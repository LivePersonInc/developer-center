---
title: Appendix
Keywords:
level1: Documents
level2: Account Configuration
level3: Predefined Content API

order: 101
permalink: account-configuration-predefined-content-appendix.html

---

This section contains API details that are common to every API’s resource and action.

### Request Headers

 |Header | Description | Notes| 
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization.  |
| If-Match | Contains data revision, as known by the client. | Allows optimization of backend, networking and client resource utilization. |

### Response Headers

 |Header | Description | Notes| 
 |:-------  | :----- | :--- |
 |ac-revision | Account config object type collection revision. | 
 |location | URI Location of the newly created resource. | Included only when the request creates a single object. v

### Query Parameters

| Name            | Description                                               | Type                                           | Required | Notes                                                                                                                                         |                                                                                                |                                                                  |                                                                |
|-----------------|-----------------------------------------------------------|------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| v               | API version                                               | Double                                         | Required | Validation fail error code: 400                                                                                                               |                                                                                                |                                                                  |                                                                |
| select          | Dynamic selection of the response fields.                 | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response. Supported fields: any in response body                                 |                                                                                                |                                                                  |                                                                |
| fields          | List of required fields                                   | Comma delimited list of strings                | Optional | Validation fail error code: 400. Non existing field error code: 400. Supported fields: 1. enabled 2. data 3. categoriesIds 4. hot-key 5. type |                                                                                                |                                                                  |                                                                |
| field_set       | Predefined set of fields                                  | Comma delimited list of strings                | Optional | Default: summary Validation fail error code: 400.Non existing field error code: 400.Supported field_set values: 1. all(id, deleted, enabled, data, categoriesIds, type, hot-key)  2. summary(id, deleted, enabled, categoriesIds, type, hot-key) |
| include_deleted | Whether or not deleted items in the response are included | Boolean                                        | Optional | Default: False                                                                                                                                |                                                                                                |                                                                  |                                                                |
| sanitize_data   | Whether to sanitize any HTML messages                     | Boolean                                        | Optional | Default: False                                                                                                                                |                                                                                                |                                                                  |                                                                |
| lang            | List of requested content languages                       | Comma delimited list of language IDs (en-US,…) | Optional | Default: all languages                                                                                                                        |                                                                                                |                                                                  |                                                                |

**Path Parameters**

 |Parameter | Description|  Type  |Notes |
 |:----------|  :-------------- | :-------------- | :--- |
 |accountId|  LP site ID | string ^[a-zA-Z0-9_]{1,20}$ | Validation fail error code: 400 |
 |predefined-content-id | Account Config object's unique ID | Positive long number greater than zero  |

### Entity Structure

| Attribute          | Description                                                      | Type                   | Required | Notes                                                                                                                                       |
|--------------------|------------------------------------------------------------------|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | Account Config object’s unique ID.                               | long number            | Required |                                                                                                                                             |
| deleted            | Indicates whether or not the item is deleted.                    | Boolean                | Required |                                                                                                                                             |
| enabled            | Whether the item is active or not                                | Boolean                | Required |                                                                                                                                             |
| type               | The type of Predefined Content (text, video, etc.)               | number                 | Required | Valid values: 0 (text)                                                                                                                      |
| hotkey             | Hotkey value combination for this object.                        | object                 | Optional |                                                                                                                                             |
| hotkey.prefix      | First key of the hotkey combination                              | string                 | Required |                                                                                                                                             |
| data.*.isDefault   | Flag to state whether the value of the msg attribute is default. | True/False             | Optional | If a templateId exists, all message entries that were not overridden will have the isDefault flag set to true. Otherwise the flag is false. |
| templateId         | An identification of a template used to instantiate the object.  | string                 | Optional |                                                                                                                                             |
| title              | Predefined Content title translation.                            | string                 | Required |                                                                                                                                             |
| data.*.msg         | Predefined Content translated message.                           | string                 | Required |                                                                                                                                             |
| data.*.lang        | The language of the Predefined Content translation.              | enum of language codes | Required | Example values: en-US, en-UK)                                                                                                               |
| attributes         | Array of attributes associated with this system message.         | array                  | Optional |                                                                                                                                             |
| attributes.*.name  | Name of an attribute.                                            | string                 | Required |                                                                                                                                             |
| attributes.*.value | Value of an attribute.                                           | string                 | Required |                                                                                                                                             |
| categoriesIds      | Categories assigned to this object.                              | array of numbers       | Optional |                                                                                                                                             |
| skillsIds          | Skill assigned to this object                                    | array of numbers       | Optional |                                                                                                                                             |

### Entity Example

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
        }


