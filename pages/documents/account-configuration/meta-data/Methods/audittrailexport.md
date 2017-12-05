---
title: Export Audit Trail to CSV file
keywords:
level1: Documents
level2: Account Configuration
level3: Meta Data
level4: Methods

order: 10
permalink: account-configuration-meta-data-audit-trail-export.html

indicator: both
---

Exports account audit trail to csv file.

### Request

| Method | URL |
| :-------- | :------ |
| GET | /api/account/{accountId}/configuration/metadata/audit/export |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
|Authorization | Contains token string to allow request authentication and authorization. See the introduction doc for more details. |



**Path Parameters**

|Parameter|  Description|  Type|  Notes| 
|:----------|  :--------------|  :--------------|  :---| 
|accountId|  LP site ID|  string ^[a-zA-Z0-9_]{1,20}$|  Validation fail error code: 400 |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
|fromDate|Start date for filtering|Date|Optional, Format: yyyy-MM-dd|
|toDate|End date for filtering|Date|Optional, Format: yyyy-MM-dd|
|limit|Number of records to return|Integer|Optional, Default: 1000000|
|users|List of users for filtering|String|Optional, Comma divided list of users|
|componentTypes|List of component types for filtering|String|Optional, Comma divided list of users|
|language|Language to return the results in|String|Optional, Default: en-US|
|timezone|Time zone to use in results|String|Optional, Default: US/Eastern|
|lpa|Include changes done by LPAs in the results|Boolean|Optional, Default: false|
|automaticUpdates|Include automatic updates in the results|Boolean|Optional, Default: false|

### Response

**Response type**

CSV

JSON - for error message

**Response Headers**

NA 

**Response Codes**

| Code | Description |
| :----- | :------------ |
| 200 | OK |
| 400 | Bad Request |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 500 | Internal Server Error |

**Response Body**

The response is comma divided file with the following structure:

1. Search critiria table
2. Count of the result rows
3. Results Table

**Example resposne**
```
Search Criteria
Account ID,Start(Europe/London),End(Europe/London),Object types,Originators,Include Automatic Updates,Include LPA Users
le33192344,2017-11-29,2017-12-05,"ACUserObject,ACSkillObject,ACProfileObject,ACAgentGroupObject",All,true,true
Total Items
168
Results
Object type,Object ID,Object name,Action type,Element,Old value,New value,Date and time,Originator,Originator Employee ID,Originator Profiles
Users,objectId0,objectName0,Add new,property,oldValue,newValue,2017-12-05T11:47:06,user name,employeeId,"[profile1, profile2]"
Users,objectId1,objectName0,Edit,property,oldValue,newValue,2017-12-05T11:47:06,user name,employeeId,"[profile1, profile2]"
```

