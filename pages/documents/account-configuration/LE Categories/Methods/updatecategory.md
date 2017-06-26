---
title: Update Category
level1: Documents
level2: Account Configuration
level3: Predefined Categories API
level4: Methods

permalink: account-configuration-categories-update.html
order: 70
indicator: both
---

### Description

Update an existing Category.

### URI

/api/account/{accountId}/configuration/le-categories/categories/{categoryId}?v=2.0

### HTTP Methods

PUT

### Response Codes

200 OK

304 Not Modified

400 Bad Request

401 Not Authorized

403 Forbidden

404 Data not found

409 Conflict

500 Internal server error

### Formats

JSON

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
    <td>return</td>
    <td>determine the return policy </td>
    <td>Default: effected - return only the effected category with the response body
Also accepts:
active - return all active (non-deleted) categories with the response body
all - return all categories with the response body, including the deleted categories</td>
  </tr>
</table>


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
Type: String ^[a-zA-Z0-9_]{1,20}$</td>
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
  <tr>
    <td>X-HTTP-Method-Override=PUT</td>
    <td>Tells to the backend this POST request is actually PUT</td>
  </tr>
  <tr>
    <td>If-Match</td>
    <td>Contains AC Categories current revision number</td>
  </tr>
</table>


Notes**:**

1. Order attribute is mandatory. It is a sequential and consecutive value managed by the server.

2. Sending a category without order value results in a BAD_REQUEST response code.

3. Order value has to greater than zero. Failing this validation will result in a BAD_REQUEST response code.

**Request Body**

<table>
  <tr>
    <td>{
        "id":11,
        "deleted":false,
        "name":"Nexus5",
        "order":2, ← mandatory field
        "proposed":true
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
    <td>Account config object type collection revision after the operation</td>
  </tr>
</table>

**Response Body**

Updated category data, depends on the ‘return’ query parameter

Update order example (based on the above request body):

Initial state:

Site contains 3 categories (id/order/name triplets): 11,1,"Nexus5”; 22,2,”IPhone5”; 33,3,”Nexus6”

After update state:

Site contains 3 categories (id/order/name triplets): 11,**2**,"Nexus5”; 22,**1**,”IPhone5”; 33,3,”Nexus6”

Note that 2 out of 3 existing order values are affected by the update operation.

Response body without return policy specified (default = EFFECTED)

<table>
  <tr>
    <td>[{
        "id":11,
        "deleted":false,
        "name":"Nexus5",
        "order":2,
        "proposed":true
 },{
        "id":22,
        "deleted":false,
        "name":"IPhone5",
        "order":1,
        "proposed":true
 }]</td>
  </tr>
</table>


Response body with return policy ALL/ACTIVE

<table>
  <tr>
    <td>[{
        "id":11,
        "deleted":false,
        "name":"Nexus5",
        "order":2,
        "proposed":true
 },
{
        "id":22,
        "deleted":false,
        "name":"IPhone5",
        "order":1,
        "proposed":true
 }
,{
        "id":33,
        "deleted":false,
        "name":"Nexus6",
        "order":3,
        "proposed":true
 }]</td>
  </tr>
</table>
