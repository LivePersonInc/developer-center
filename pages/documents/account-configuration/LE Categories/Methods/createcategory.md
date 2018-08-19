---
title: Create Category
redirect_from:
  - account-configuration-categories-create.html
sitesection: Documents
level2: Account Configuration
level3: Predefined Categories API
level4: Methods

permalink: predefined-categories-api-methods-create-category.html
order: 60
indicator: both
---
### Description

Create new Category for an account. It is possible to create several categories at a time.

### URI

/api/account/{accountId}/configuration/le-categories/categories?v=2.0

### HTTP Methods

POST

### Response Codes

201 Created

400 Bad Request

401 Not Authorized

403 Forbidden

404 Data not found

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

The request body is able to accept single JSON object as shown below, or a JSON array [] of such objects.

Notes**:**

1. Order attribute is not mandatory. It is a sequential and consecutive value managed by the server.

2. If order is not passed and there are multiple items in the request, order assigned by the server is not guaranteed to be the sorting in the request body.

3. Sending categories to be created with duplicate order value results in a BAD_REQUEST response code.

4. Order value has to greater than zero. Failing this validation will result in a BAD_REQUEST response code.

5. Should you choose to pass order value, you may have order value collision with existing order resulting in a BAD_REQUEST response code.

Single category creation

<table>
  <tr>
    <td>{
             "deleted":false,
             "name":"iPhone4",
             "order":10,
             "proposed":true
}</td>
  </tr>
</table>


For the above body:

* if no categories exist, the newly created category is assigned order 1.

* if n categories exist, where n < 10, the newly created category is assigned order n + 1.

* if n categories exist, where n >= 10, order collision is detected  resulting in a BAD_REQUEST response code.

Multiple category creation

Note: order assigned by the server is not guaranteed to be the order in the request body

<table>
  <tr>
    <td>[{
    "deleted": false,
    "name": "A1",
    "proposed": false
},{
    "deleted": false,
    "name": "A2",
    "order": "10",
    "proposed": false
},{
    "deleted": false,
    "name": "A3",
    "proposed": false
}]</td>
  </tr>
</table>


For the above body:

* if no categories exist, category A2 is assigned order 1 and the other categories passing null orders are assigned order value of 2,3 randomly.

* if n categories exist, where n < 10, category A2 is assigned order n + 1 and the other categories passing null orders are assigned order value of n + 2, n + 3 randomly.

* if n categories exist, where n >= 10, order collision is detected  resulting in a BAD_REQUEST response code.

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
    <td>delete</td>
    <td>Whether the item is deleted or not </td>
    <td>Type: boolean</td>
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
  <tr>
    <td>location</td>
    <td>URI Location of the newly created resource. This header is included only when the request created single object. </td>
  </tr>
</table>


**Response Body**

Newly created Category json.
