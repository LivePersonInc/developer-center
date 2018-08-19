---
title: Category By ID
redirect_from:
  - account-configuration-categories-id.html
sitesection: Documents
level2: Account Configuration
level3: Predefined Categories API
level4: Methods

permalink: predefined-categories-api-methods-category-by-id.html
order: 30
indicator: both
---

### Description

Get one Category by id

### URI

/api/account/{accountId}/configuration/le-categories/categories/{categoryId}?v=2.0

### HTTP Methods

GET

### Response Codes

200 OK

304 Not Modified

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
    <td>categoryId</td>
    <td>Account Config object’s unique id.</td>
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
    <td>Default: $all alias: id,deleted,name,order,proposed
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
    <td>{
    "id": 1,
    "deleted": false,
    "name": "iPhone4",
    "order": 1,
    "proposed": true
}</td>
  </tr>
</table>


<table>
  <tr>
    <td>Parameter</td>
    <td>Description</td>
    <td>Notes</td>
  </tr>
  <tr>
    <td>id</td>
    <td>Account Config object’s unique id.</td>
    <td>Required
Type: long number</td>
  </tr>
</table>
