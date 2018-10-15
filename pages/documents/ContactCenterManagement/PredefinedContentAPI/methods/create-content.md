---
pagename: Create Predefined Content
redirect_from:
  - account-configuration-predefined-content-create-content.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

order: 40
permalink: predefined-content-api-methods-create-predefined-content.html

indicator: both
---

Creates new Predefined Content for an account.

### Request 

 |Method | Request |
 |:-------- | :--------- |
| POST | /api/account/{accountId}/configuration/engagement-window/canned-responses |

**Path Parameters**

| Parameter  |Description  |Type | Notes |
| :---------- | :-------------- | :--------------  |:--- |
| accountId | LP site ID  |string  | Validation fail error code: 400 |

### Query Parameters

| Name      | Description                               | Type                                           | Required | Notes                                                                                                                                                                                                                                            |
|-----------|-------------------------------------------|------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| v         | API version                               | Double                                         | Required | Default value: 2.0 Validation fail error code: 400                                                                                                                                                                                               |
| select    | Dynamic selection of the response fields. | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response Supported fields: any in response body                                                                                                                                     |
| fields    | List of required fields                   | Comma delimited list of strings                | Optional | Validation fail error code: 400. Non existing field error code: 400. Supported fields: <br> • enabled <br> • data <br> • categoriesIds <br> • hot-key <br> • type                                                                                                    |
| field_set | Predefined set of fields                  | Comma delimited list of strings                | Optional | Default: summary.Validation fail error code: 400. Non existing field error code: 400 Supported field_set values: <br>• all(id, deleted, enabled, data, categoriesIds, type, hot-key) <br>• summary(id, deleted, enabled, categoriesIds, type, hot-key) |
| lang      | List of requested content languages       | Comma delimited list of language IDs (en-US,…) | Optional | Default: all languages|



### Request Headers

|Header | Description |
 |:------- | :-------------- |
| Authorization  |Contains token string to allow request authentication and authorization.|  

**Request Body**

The request body is able to accept a single JSON object, as shown below, or a JSON array of such objects. See [Appendix](account-configuration-predefined-content-appendix.html) for the object format.

### Response

**Response Codes**

 |Code | Description |
| :----- | :-------------| 
 |200 | OK |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 500 | Internal Server Error |

### Response Headers

| Header | Description | Notes |
 |:-------  | :-----  |:--- |
 |ac-revision | Account config object type collection revision. | 
| location | URI Location of the newly created resource. | Included only when the request creates a single object. |

**Response Body**

Newly created Predefined Content JSON.
