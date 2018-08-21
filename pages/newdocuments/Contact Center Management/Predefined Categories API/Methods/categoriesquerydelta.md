---
pagename: Categories Query Delta
redirect_from:
  - account-configuration-categories-delta.html
sitesection: Documents
categoryname: Account Configuration
documentname: Predefined Categories API
subfoldername: Methods

permalink: predefined-categories-api-methods-categories-query-delta.html
order: 40
indicator: both
---
### Description

Query changes in Categories data.

### URI

/api/account/configuration/le-categories/categories/query?v=2.0

### HTTP Methods

POST

### Response Codes

200 OK

400 Bad Request

401 Not Authorized

500 Internal server error

### Formats

JSON

### Path Parameters

<table>
  <tr>
    <td>N/A</td>
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
</table>


**Request Body**

Contains query parameters - a mapping between account id and revision number

<table>
  <tr>
    <td>{
    " type": 0,
    "parameters":
    [
        {
            "site": "1236744443",
            "revision": 17890
        },
        {
            "site": "243256785",
            "revision": 2456
        }
    ]
}</td>
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


### Response Headers

<table>
  <tr>
    <td>N/A</td>
  </tr>
</table>


### Response Body

<table>
  <tr>
    <td>{
    "appDataList": [
        {
            "appName": "categories",
            "appApiVersion": 1,
            "accountList": {
                "accountList": [
                    {
                        "siteId": "TEST_SITE_ID",
                        "itemsCollection": {
                            "items": [
                                {
                                     "id":1,
                                     "deleted":false,
                                     "name":"iPhone4",
                                     "order":1,
                                     "proposed":true
                                }
                            ],
                            "revision": 123123
                        }
                    }
                ]
            }
        }
    ]
}</td>
  </tr>
</table>
