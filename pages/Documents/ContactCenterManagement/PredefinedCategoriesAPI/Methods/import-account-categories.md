---
pagename: Import Account Categories
redirect_from:
  - account-configuration-categories-import.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Categories API
subfoldername: Methods

permalink: predefined-categories-api-methods-import-account-categories.html
order: 100
indicator: both
---

### Description

As part of the canned response import, this API support adding multiple categories from a CSV file.

### URI

/api/account/{accountId}/configuration/le-categories/import?v=2.0

### HTTP Methods

POST

### Response Codes

200 OK

400 Bad Request

401 Not Authorized

403 Forbidden

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
    <td>Validation fail error code: 400
Type: String </td>
  </tr>
</table>

### Query Parameters

<table>
  <tr>
    <td>Parameter</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>v</td>
    <td>api version</td>
    <td>Positive full double, current only 1.0 is supported</td>
  </tr>
  <tr>
    <td>fileType</td>
    <td>Type of the file (parrent ac type)</td>
    <td>CANNED_RESPONSE — canned response file type</td>
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
    <td>Contains token string to allow request authentication and authorization. See the doc for more details.</td>
  </tr>
</table>

**Request Body**

The request payload contain the csv content as string and a structure for containing the validation errors in that csv

<table>
  <tr>
    <td>{
   "csvContent":””,
   “errorsData”:{
                           “rows”:[
                                          {“index”:1, “columns”:[“name”:”language”, “value”: “fake”], “errors”: [{“columnName”: “language”, “error” : “invalid language value”}]}
                                      ]
                        }
}</td>
  </tr>
</table>

### Response Headers

<table>
  <tr>
    <td>Header</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ac-revision</td>
    <td>This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value. after the operation</td>
  </tr>
</table>

### Response Body

The response contain all account categories (both existing and new categories from this import request)

<table>
  <tr>
    <td>[{
  "id": 1,
  "deleted": false,
  "name": "iPhone4",
  "order": 1,
  "proposed": true
}, {
  "id": 2,
  "deleted": false,
  "name": "Nexus5",
  "order": 2,
  "proposed": true
}, {
  "id": 3,
  "deleted": false,
  "name": "Nexus6",
  "order": 3,
  "proposed": true
}]</td>
  </tr>
</table>
