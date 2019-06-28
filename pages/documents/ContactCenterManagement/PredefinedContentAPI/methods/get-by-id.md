---
pagename: Get Predefined Content by ID
redirect_from:
  - account-configuration-predefined-content-get-by-id.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

order: 70
permalink: predefined-content-api-methods-get-predefined-content-by-id.html

indicator: both
---

Retrieves a Predefined Content item by ID from a specific account.

### Request

 |Method|  URL|
 |:--------|  :---------|
 |GET|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/engagement-window/canned-responses/{pre-defined-content-id} |

**Path Parameters**

 |Parameter|  Description|  Type| Notes|
 |:-----------|  :------------|  :---------------|  :---|
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |
 |pre-defined-content-id|  Account Config object’s unique ID|  Positive long number greater than zero  |

**Query Parameters**

| Name            | Description                                               | Type                                           | Required | Notes                                                                                                                                                                                                                                           |
|-----------------|-----------------------------------------------------------|------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v               | API version                                               | Double                                         | Required | Default value: 2.0 Validation fail error code: 400                                                                                                                                                                                              |
| select          | Dynamic selection of the response fields.                 | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response Supported fields: any in response body                                                                                                                                    |
| fields          | List of required fields                                   | Comma delimited list of strings                | Optional | Validation fail error code: 400. Non existing field error code: 400 Supported fields:<br> • enabled<br> • data<br> • categoriesIds <br>• hot-key<br> • type                                                                                                    |
| field_set       | Predefined set of fields                                  | Comma delimited list of strings                | Optional | Default: summary Validation fail error code: 400 Non existing field error code: 400 Supported field_set values: <br>• all(id, deleted, enabled, data, categoriesIds, type, hot-key) <br>• summary(id, deleted, enabled, categoriesIds, type, hot-key) |
| include_deleted | Whether or not deleted items in the response are included | Boolean                                        | Optional | Default: False                                                                                                                                                                                                                                  |
| sanitize_data   | Whether to sanitize any HTML messages                     | Boolean                                        | Optional | Default: False                                                                                                                                                                                                                                  |
| lang            | List of requested content languages                       | Comma delimited list of language IDs (en-US,…) | Optional | Default: all languages                                                                                                                                                                                                                          |

### Response

**Response Codes**

| Code   | Description           |
|--------|-----------------------|
| 200    | OK                    |
| 401    | Not Authenticated     |
| 403    | Not Authorized        |
| 404    | Data Not Found        |
| 500    | Internal Server Error |

**Response Headers**

 |Header | Description |
 |:------- |  :----- |
 |ac-revision | Account config object type collection revision.  |

**Response Body**

See [Appendix](account-configuration-predefined-content-appendix.html).
