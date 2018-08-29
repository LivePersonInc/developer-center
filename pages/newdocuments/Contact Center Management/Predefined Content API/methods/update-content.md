---
pagename: Update Predefined Content
redirect_from:
  - account-configuration-predefined-content-update-content.html
Keywords:
sitesection: Documents
categoryname: Account Configuration
documentname: Predefined Content API
subfoldername: Methods

order: 60
permalink: predefined-content-api-methods-update-predefined-content.html

indicator: both
---

Updates an existing Predefined Content item for a specific account.

### Request

| Method  |  URL  |  
| :------- | :----- |
 |PUT   |    /api/account/{accountId}/configuration/engagement-window/canned-responses/{pre-defined-content-id} |

**Path Parameters**

| Parameter | Description  |Type|  Notes |
 |:---------- | :-------------- | :-------------- | :--- |
| accountId | LP site ID | string  | Validation fail error code: 400 |
 |predefined-content-id | Account Config object's unique ID | Positive long number greater than zero  |

### Query Parameters

 | Name      | Description                               | Type                                           | Required | Notes                                                                                                                                                                                                                                           |
|-----------|-------------------------------------------|------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v         | API version                               | Double                                         | Required | Default value: 2.0 Validation fail error code: 400                                                                                                                                                                                              |
| select    | Dynamic selection of the response fields. | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response Supported fields: any in response body                                                                                                                                    |
| fields    | List of required fields                   | Comma delimited list of strings                | Optional | Validation fail error code: 400 Non existing field error code: 400 Supported fields:<br> • enabled<br> • data<br> • categoriesIds <br>• hot-key<br> • type                                                                                                     |
| field_set | Predefined set of fields                  | Comma delimited list of strings                | Optional | Default: summary Validation fail error code: 400 Non existing field error code: 400 Supported field_set values:<br> • all(id, deleted, enabled, data, categoriesIds, type, hot-key) <br>• summary(id, deleted, enabled, categoriesIds, type, hot-key) |
| lang      | List of requested content languages       | Comma delimited list of language IDs (en-US,…) | Optional | Default: all languages|

**Request Headers**

| Header|   Description|  Notes| 
 |:-------|   :-----------  |:--- |
 |Authorization|  Contains token string to allow request authentication and authorization.  |
 |X-HTTP-Method-Override=PUT|  Overrides unsupported HTTP methods.|  To be used with the PUT value. |
 |If-Match  |Contains data revision, as known by the client.|  Allows optimization of backend, networking and client resource utilization. |

**Request Body**

See [Appendix](account-configuration-predefined-content-appendix.html) for objects’ data structure.

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |

**Response Body**

Updated Predefined Content JSON.
