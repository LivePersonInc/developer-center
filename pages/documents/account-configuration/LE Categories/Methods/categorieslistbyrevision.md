---
title: Categories List By Revision
level1: Documents
level2: Account Configuration
level3: Predefined Categories API
level4: Methods

permalink: account-configuration-categories-revision.html
order: 20
indicator: both
---

### Description

Get list of  all Categories of an account for a specific revision

### URI

/api/account/{accountId}/configuration/le-categories/categories/revision/{revision}?v=2.0

### HTTP Methods

GET

### Response Codes

200 OK

400 Bad Request

401 Not Authorized

404 Data not found

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
  <tr>
    <td>revision</td>
    <td>Revision id</td>
    <td>Type: Positive long number greater than zero</td>
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
    <td>select</td>
    <td>dynamic selection of response fields</td>
    <td>Default: $summary alias: id,deleted,name
Available aliases:
$all: id,deleted,name,order,proposed
$summary: id,deleted,name
type: YOGA 'gdata' dialect
validation error: 400
supported fields: any in response body
**yoga GData dialect builder url:
https://github.com/skyscreamer/yoga/wiki/Using-the-Selector-Builder-GUI</td>
  </tr>
  <tr>
    <td>include_deleted</td>
    <td>Whether include deleted items in the response or not</td>
    <td>Default: false</td>
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


### Request Body

<table>
  <tr>
    <td>N/A</td>
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
    <td>Account config object type collection revision</td>
  </tr>
</table>


### Response Body

<table>
  <tr>
    <td>[
    {
        "id": 1,
        "deleted": false,
        "name": "iPhone4",
        "order": 1,
        "proposed": true
    },
    {
        "id": 2,
        "deleted": false,
        "name": "iPhone5",
        "order": 2,
        "proposed": true
    }
]
</td>
  </tr>
</table>


<table>
  <tr>
    <td>Attribute</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>id</td>
    <td>Account Config object’s unique id.</td>
    <td>Required
Type: long number</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Value of Category name</td>
    <td>Type: string</td>
  </tr>
  <tr>
    <td>deleted</td>
    <td>Whether the item is deleted or not </td>
    <td>Type: boolean</td>
  </tr>
  <tr>
    <td>order</td>
    <td>Sorting order of category</td>
    <td>Type: number</td>
  </tr>
  <tr>
    <td>proposed</td>
    <td>Category might be marked as proposed, this means every engagement will be assigned to it upon creation. </td>
    <td>Type:boolean
Default: false</td>
  </tr>
</table>
