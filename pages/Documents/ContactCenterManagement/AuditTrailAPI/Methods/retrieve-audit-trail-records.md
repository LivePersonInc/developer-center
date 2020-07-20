---
pagename: Retrieve Audit Trail Records
redirect_from:
  - account-configuration-meta-data-audit-trail.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Audit Trail API
subfoldername: Methods
permalink: audit-trail-api-methods-retrieve-audit-trail-records.html
order: 10
indicator: both
---

Get an account's audit trail records.

### Request

| Method | URL |
| :-------- | :------ |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/metadata/audit |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
|Authorization | Contains token string to allow request authentication and authorization. See the introduction page for more details. |
|Content-Type | application/json |
|Accept | application/json |

**Path Parameters**

|Parameter|  Description|  Type|  Notes|
|:----------|  :--------------|  :--------------|  :---|
|accountId|  LP site ID|  string |  Validation fail error code: 400 |

**Query Parameters**

N/A

**Request Body**

Contains a json object with a single "query" field which defines the requested GraphQL query for the auditData API and the fields sub-select. For details see [graphql website](http://graphql.org/).

```json
{"query" : 
"{auditData { 
        accountId 
        objectType 
        objectName 
        element 
        oldValue 
        newValue 
        originator 
        originatorLoginName
        originatorUserId
        originatorUserAgent
        originatorAuthType 
        originatorIsLpa 
        changeDate}}"
 } 
```

**Required parameters**
At least one parameter from the above parameters is required in order to retirve audit data.

**Optional graphql parameters**

|name|Description|Notes|
| :--- | :--- | :--- |
|fromDate|Start date for filtering|Format: yyyy-MM-dd|
|toDate|End date for filtering|Format: yyyy-MM-dd|
|first|Number of records to return|Default: 50|
|offset|Offset to start returning records from||
|orderBy|List of columns to order by|Default: changeTimestamp|
|orderDirection|List of ordering direction(ASC, DESC), in relevance to orderBy list|Default: DESC|
|users|List of users for filtering||
|componentTypes|List of component types for filtering||
|language|Language to return the results in|Default: en-US|
|timezone|Time zone to use in results|Default: US/Eastern|
|lpa|Boolean, include changes done by LPAs in the results|Default: false|
|automaticUpdates|Boolean, include automatic updates in the results|Default: false|

Example:
```json
{"query" : 
"{auditData (lpa:true) { accountId objectType element oldValue newValue originatorIsLpa changeDate}}"
}

```

### Response

**Response type**

JSON

**Response Headers**

|Header|Description|
| :--- | :--- |
|X-Total-Count|Contains the count of returned audit items|

**Response Codes**

| Code | Description |
| :----- | :------------ |
| 200 | OK |
| 400 | Bad Request |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 500 | Internal Server Error |


**Response Body**

```json
{
    "data": {
        "auditData": [
            {
                "accountId": "le52642741",
                "objectType": "Profiles",
                "element": "Generate secure form token",
                "oldValue": "false",
                "newValue": "true",
                "originatorIsLpa": false,
                "changeDate": "2019-11-12 06:10:46.0"
            },
            {
                "accountId": "le52642741",
                "objectType": "Campaigns",
                "element": "N/A",
                "oldValue": "",
                "newValue": "",
                "originatorIsLpa": false,
                "changeDate": "2019-10-31 10:35:37.0"
            },
            {
                "accountId": "le52642741",
                "objectType": "Users",
                "element": "N/A",
                "oldValue": "",
                "newValue": "",
                "originatorIsLpa": false,
                "changeDate": "2019-10-30 08:56:59.0"
            },
            {
                "accountId": "le52642741",
                "objectType": "Predefined Content",
                "element": "N/A",
                "oldValue": "",
                "newValue": "",
                "originatorIsLpa": false,
                "changeDate": "2019-10-30 08:56:55.0"
            },
            {
                "accountId": "le52642741",
                "objectType": "Content Categories",
                "element": "N/A",
                "oldValue": "",
                "newValue": "",
                "originatorIsLpa": false,
                "changeDate": "2019-10-30 08:56:55.0"
            },
            {
                "accountId": "le52642741",
                "objectType": "Agent Groups",
                "element": "N/A",
                "oldValue": "",
                "newValue": "",
                "originatorIsLpa": false,
                "changeDate": "2019-10-30 08:56:54.0"
            }
        ]
    }
}
```
