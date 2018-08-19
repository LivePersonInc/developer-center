---
pagename: Delete Multiple Categories
redirect_from:
  - account-configuration-categories-delete-multiple.html
sitesection: Documents
categoryname: Account Configuration
documentname: Predefined Categories API
subfoldername: Methods

permalink: predefined-categories-api-methods-delete-multiple-categories.html
order: 90
indicator: both
---

### Description

Delete existing categories by given list of object ids, tolerant to missing or already deleted ids.

### URI

/api/account/{accountId}/configuration/le-categories/categories?v=2.0

### HTTP Methods

DELETE

### Response Codes

200 OK

304 Not Modified

400 Bad Request

401 Not Authorized

403 Forbidden

409 Conflict

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
    <td>Default: none - return the active revision with no response body. 'order’ attribute is not maintained by the server
Also accepts:
active - return all active (non-deleted) categories with the response body
all - return all categories with the response body, including the deleted categories
On both 'active’ and 'all’ the 'order’ attribute is maintained by the server</td>
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
    <td>X-HTTP-Method-Override=DELETE</td>
    <td>Tells to the backend this POST request is actually DELETE</td>
  </tr>
  <tr>
    <td>If-Match</td>
    <td>Contains AC Categories current revision number</td>
  </tr>
</table>


**Request Body**

<table>
  <tr>
    <td>['12345’,’67890’]</td>
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

Delete a multiple categories data, depends on the 'return’ query parameter

Delete categories example:

Initial state:

Site contains 4 categories (id/order/name triplets): 11,1,"IPhone5”; 22,2,”Nexus5”; 33,3,”Nexus6”; 44,4,”IPhone5C”

After deletion of category ids 22,33 state:

Site contains 2 active categories (id/order/name triplets): 11,1,"IPhone5”; 44,3,”IPhone5C”

Note that 3 out of 4 existing order values are affected by the delete operation.

Response body without return policy specified (default = NONE): no response body

Response body with return policy ACTIVE

<table>
  <tr>
    <td>[{
        "id":11,
        "deleted":false,
        "name":"IPhone5",
        "order":1,
        "proposed":true
 },{
        "id":44,
        "deleted":false,
        "name":"IPhone5C",
        "order":2,
        "proposed":true
 }]</td>
  </tr>
</table>


Response body with return policy ALL

<table>
  <tr>
    <td>[{
        "id":11,
        "deleted":false,
        "name":"IPhone5",
        "order":1,
        "proposed":true
 },{
        "id":22,
        "deleted":true,
        "name":"Nexus5",
        "order":2,
        "proposed":true
 },{
        "id":33,
        "deleted":true,
        "name":"Nexus6",
        "order":3,
        "proposed":true
 },{
        "id":44,
        "deleted":false,
        "name":"IPhone5C",
        "order":2,
        "proposed":true
 }]</td>
  </tr>
</table>
