---
title: Audit Trail
level1: Documents
level2: Account Configuration
level3: Meta Data
level4: Methods

permalink: account-configuration-meta-data-audit-trail.html
order: 50
indicator: both
---

### Description

Get account's audit trail records

### URI

/api/account/{accountId}/configuration/metadata/audit

### HTTP Methods

POST

### Response Codes

200 OK

400 Bad Request

401 Not Authorized

403 Forbidden

400 Bad Request

500 Internal server error

### Formats

JSON

### Path Parameters

<table>
  <tr>
    <td>Parameter</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>accountId</td>
    <td>LP site id</td>
    <td>Validation fail error code: 400<br>Type: String ^[a-zA-Z0-9_]{1,20}$</td>
  </tr>
</table>


### Query Parameters

<table>
  <tr>
    <td>N/A</td>
  </tr>
</table>

### Request Headers

<table>
  <tr>
    <td>Header</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Contains token string to allow request authentication and authorization. See the introduction doc for more details.</td>
  </tr>
</table> 

###Request Body

Contains a json object with single "query" field which define the requested graphql query for api auditData
and the fields subselect. For details see [graphql website](http://graphql.org/)

```json
{"query" : "{auditData  
              {accountId 
              objectType 
              objectName 
              actionType 
              element 
              oldValue 
              newValue 
              changeDate 
              originator 
              originatorLoginName 
              originatorUserId 
              originatorUserAgent 
              originatorAuthType 
              originatorIsLpa}}"}
```

### Optional graphql parameters

<table>
  <tr>
    <td>name</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>fromDate</td>
    <td>Start date for filtering</td>
    <td>Format: yyyy-MM-dd</td>
  </tr>
  <tr>
    <td>toDate</td>
    <td>End date for filtering</td>
    <td>Format: yyyy-MM-dd</td>
  </tr>
  <tr>
    <td>first</td>
    <td>Number of records to return</td>
    <td>Default: 50</td>
  </tr>
  <tr>
    <td>offset</td>
    <td>Offset to start returning records from</td>
    <td/>
  </tr>
  <tr>
    <td>orderBy</td>
    <td>List of columns to order by</td>
    <td>Default: changeTimestamp</td>
  </tr>
  <tr>
    <td>orderDirection</td>
    <td>List of ordering direction(ASC, DESC), in relevance to orderBy list</td>
    <td>Default: DESC</td>
  </tr>
  <tr>
    <td>users</td>
    <td>List of users for filtering</td>
    <td/>
  </tr>
  <tr>
    <td>componentTypes</td>
    <td>List of component types for filtering</td>
    <td/>
  </tr>
  <tr>
    <td>language</td>
    <td>Language to return the results in</td>
    <td>Default: en-US</td>
  </tr>
  <tr>
    <td>timezone</td>
    <td>Time zone to use in results</td>
    <td>Default: US/Eastern</td>
  </tr>
  <tr>
    <td>lpa</td>
    <td>Boolean, Include changes done by LPAs in the results</td>
    <td>Default: false</td>
  </tr>
  <tr>
    <td>automaticUpdates</td>
    <td>Boolean, Include automatic updates in the results</td>
    <td>Default: false</td>
  </tr>
</table>

### Response Headers

<table>
  <tr>
    <td>Header</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>X-Total-Count</td>
    <td>Contains the count of returned audit items</td>
  </tr>
</table>


### Response Body
```json
{
  "data": {
    "auditData": [
        {
        "accountId": "le33192344",
        "objectType": "Users",
        "objectName": "objectName1",
        "actionType": "Edit",
        "element": "property",
        "oldValue": "oldValue",
        "newValue": "newValue",
        "changeDate": "2017-12-04 08:13:34.0",
        "originator": "user name",
        "originatorLoginName": "loginName",
        "originatorUserId": "userId_1",
        "originatorUserAgent": "userAgent",
        "originatorAuthType": "auth1",
        "originatorIsLpa": false
      }
    ]
}
```
