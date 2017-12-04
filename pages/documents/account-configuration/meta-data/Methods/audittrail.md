---
title: Get Audit trail
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


###Request Body

Contains a json object with single "query" field which define the requested graphql query for api auditData
and the required fields subselect. For details see [graphql website](http://graphql.org/)

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
