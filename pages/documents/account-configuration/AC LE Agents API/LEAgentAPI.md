# AC LE Agents API

- [Introduction](#h.vciwox5eabzx)
- [Authentication](#h.gdcgz6qdpjbv)
- [Resources](#h.d7unh2b3wht7)
- [General](#h.538t6in1im79)
- [Formats](#h.x6845zsyw9ur)
- [Request Headers](#request-headers)
- [Query Parameters](#h.wpeociufzh9w)
- [Status reason object description](#h.5x7qiqz82s0m)
- [Status reason List](#h.wchu0g9xtcby)
 -  [Description](#h.cq7xq4mi7ip6)
 -  [URI](#h.hhi67i7m2rsn)
 -  [HTTP Methods](#h.fihfw5d6jr2i)
 -  [Response Codes](#h.vzx01lygknwi)
 -  [Formats](#h.q71fsdxdwp2)
 -  [Path Parameters](#h.74bmouh1rbc0)
 -  [Query Parameters](#h.njlx3ha5tbml)
 -  [Request Headers](#h.a7hds07kjlsq)
 -  [Request Body](#h.jxxli9m1m2wt)
 -  [Response Headers](#h.rxoo0tduo0i6)
 -  [Body](#h.l7dmj35r0bil)
- [Status reasonby Id](#h.lo60nwkypooc)
 -  [Description](#h.dzulfzr91z7r)
 -  [URI](#h.mm9nmscqk1ps)
 -  [HTTP Methods](#h.zhdgou5ob4o4)
 -  [Response Codes](#h.200z0v9aa2em)
 -  [Formats](#h.y47lj7ml46gc)
 -  [Parameters](#h.u0g4merwrn6)
 -  [Query Parameters](#h.7h5rmwtf1ok1)
 -  [Request Body](#h.buy5qiedujte)
 -  [Response Headers](#h.ml1u4vsv5vdu)
 -  [Response Body](#h.at3vl7aaemrk)
- [Create Status reason](#h.tk63pamncbwb)
 -  [Description](#h.5nmr61kxlfer)
 -  [URI](#h.1p40whrzzxbp)
 -  [HTTP Methods](#h.9xbiprqtw9wx)
 -  [Response Codes](#h.r22rg87xq650)
 -  [Formats](#h.33ld16ie1c78)
 -  [Path Parameters](#h.qufzkyrd49py)
 -  [Parameters](#h.so4a7ilqqpek)
 -  [Request Headers](#h.351749zbdpi)
 -  [Request Body](#h.7hbpbnyo23u9)
 -  [Response Headers](#h.s772du1vfapu)
 - [Response Body](#h.poknstkp3xuo)
- [Update Status reeason](#h.o5xa9f1xnhld)
 -  [Description](#h.omykhabaz1a3)
 -  [URI](#h.5ub2xpv6xmb9)
 -  [HTTP Methods](#h.f8jdb2va0q8r)
 -  [Response Codes](#h.m475ohpg3vfg)
 -  [Formats](#h.q7ga9mgukxdg)
 -  [Path Parameters](#h.gnf11d9u8eea)
 -  [Query Parameters](#h.uj4sfzvnvuvc)
 -  [Request Headers](#h.qpjckalwit7u)
 -  [Response Headers](#h.asbfgg9bl568)
 -  [Request Body](#h.ikkpp3oeexh5)
- [Delete Status reason](#h.n1tqgyiozl1y)
 -  [Description](#h.pftg7ga7kbgp)
 -  [URI](#h.vlnm666pzyft)
 -  [HTTP Methods](#h.qgsp18ipbsm2)
 -  [Response Codes](#h.lwfdksmqdplc)
 -  [Formats](#h.b6tjl2kmd74b)
 -  [Path Parameters](#h.l0cyk3sxtjgd)
 -  [Request Headers](#h.cql73ic44l00)
 -  [Response Headers](#h.l5qbv558w5dj)
 -  [Response Body](#h.p9qw7ks04bhv)
- [Status reason Query Delta](#h.n1tqgyiozl1y1)
 -  [Description](#h.pftg7ga7kbgp1)
 -  [URI](#h.vlnm666pzyft1)
 -  [HTTP Methods](#h.qgsp18ipbsm21)
 -  [Response Codes](#h.lwfdksmqdplc1)
 -  [Formats](#h.b6tjl2kmd74b1)
 -  [Path Parameters](#h.l0cyk3sxtjgd1)
 -  [Request Headers](#h.cql73ic44l001)
 - [Request Body](#h.ikkpp3oeexh51)
 -  [Response Headers](#h.l5qbv558w5dj1)
 -  [Response Body](#h.p9qw7ks04bhv1)
- [Get all changes Query](#h.n1tqgyiozl1y2)
 -  [Description](#h.pftg7ga7kbgp2)
 -  [URI](#h.vlnm666pzyft2)
 -  [HTTP Methods](#h.qgsp18ipbsm22)
 -  [Response Codes](#h.lwfdksmqdplc2)
 -  [Formats](#h.b6tjl2kmd74b2)
 -  [Path Parameters](#h.l0cyk3sxtjgd2)
 -  [Request Headers](#h.cql73ic44l002)
 - [Request Body](#h.ikkpp3oeexh52)
 -  [Response Headers](#h.l5qbv558w5dj2)
 -  [Response Body](#h.p9qw7ks04bhv2)
 
* * *

### <a name="h.vciwox5eabzx"></a>Introduction
This spec scope is AC Status reason backend logic, capabilities and description of the AC Status reason API. 
AC Status reason purpose is to allow agents add additional away status. 
### <a name="h.gdcgz6qdpjbv"></a>Authentication

This API supports both LP OAuth1.0 and LP Access Token authentication patterns. More info about LP APIs authentication is [here](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1).

### <a name="h.d7unh2b3wht7"></a>Resources

### <a name="h.538t6in1im79"></a>General
This section contains api details that are common for every api’s resource and action.

### <a name="h.x6845zsyw9ur"></a>Formats
JSON
### Request Headers
| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |

#### <a name="h.wpeociufzh9w"></a>Query Parameters
Parameter | Description | Notes
--- | --- | ---
v | api version number|<ul><li> Required </li><li>Type: Double </li><li>Default Value: 1.0</li><li> Validation fail error code: 400</li></ul>

#### <a name="h.5x7qiqz82s0m"></a>Status reason object description
```javascript
{
  "id":121212,
  "text": "some text252",
  "state": "Away",
  "deleted":false,  
  "enabled": true
}
```

Attribute | Description | Notes
--- | --- | --- 
id | Account Config object’s unique id. | <ul><li>Type: long number (automatically generated)</li></ul>
name | Status reason text | <ul><li>Type: string</li><li>Required</li><li>Unique</li><li>Esapi validation: safeMediumString length 100</li></ul>
state | agent state | <ul><li>type: string</li><li>possible values: "Online", "Occupied", "Away"</li></ul></li></ul>
deleted | Whether the item is deleted or not  | <ul><li>Type: boolean</li></ul>
enabled | Whether the item is enabled or not  | <ul><li>Type: boolean</li></ul>

### <a name="h.wchu0g9xtcby"></a>Status reason List 

#### <a name="h.cq7xq4mi7ip6"></a>Description

Get list of all status reasons of an account

#### <a name="h.hhi67i7m2rsn"></a>URI

/api/account/{accountId}/configuration/le-agents/status-reasons

#### <a name="h.fihfw5d6jr2i"></a>HTTP Methods

GET
#### <a name="h.vzx01lygknwi"></a>Response Codes

200 OK<br/>
400 Bad Request<br/>
401 Not Authenticated<br/>
403 Not Authorized<br/>
404 Data not found<br/>
500 Internal server error<br/>

#### <a name="h.q71fsdxdwp2"></a>Formats

JSON
#### <a name="h.74bmouh1rbc0"></a>Path Parameters
Parameter | Description | Notes
--- | --- | ---
accountId | LP site id | <ul><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li><ul>

#### <a name="h.njlx3ha5tbml"></a>Query Parameters
Parameter | Description | Notes
--- | --- | ---
include_deleted | Whether include deleted items in the response or not | <ul><li>Default: false</li></ul>

#### <a name="h.a7hds07kjlsq"></a>Request Headers
Header | Description
--- | ---
Authorization | Contains token string to allow request authentication and authorization. See the [doc ](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1)for more details.

#### <a name="h.jxxli9m1m2wt"></a>Request Body

> N/A

#### <a name="h.rxoo0tduo0i6"></a>Response Headers
Header | Description
--- | ---
eTag | Account config object type collection revision

#### <a name="h.l7dmj35r0bil"></a>Body
```javascript
[{"text":"some reason text","state":"Away","enabled":true,"id":725987312,"deleted":false},{"text":"another reason text","state":"Away","enabled":true,"id":725987412,"deleted":false}]  
``` 
### <a name="h.lo60nwkypooc"></a>Status reason by Id
#### <a name="h.dzulfzr91z7r"></a>Description

Get one Status reason by id

#### <a name="h.mm9nmscqk1ps"></a>URI

/api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId}

#### <a name="h.zhdgou5ob4o4"></a>HTTP Methods

GET
#### <a name="h.200z0v9aa2em"></a>Response Codes
200 OK<br/>
400 Bad Request<br/>
401 Not Authenticated<br/>
403 Not Authorized<br/>
404 Data not found<br/>
500 Internal server error<br/>
#### <a name="h.y47lj7ml46gc"></a>Formats

JSON

#### <a name="h.u0g4merwrn6"></a>Parameters
Parameter | Description | Notes
--- | --- | ---
accountId | LP site id | <ul><li>Validation fail error code: 400</li><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li></ul>
statusReasonId | Account Config object’s unique id. | <ul><li>Type: Positive long number greater than zero</li></ul>

#### <a name="h.7h5rmwtf1ok1"></a>Query Parameters
Parameter | Description | Notes
--- | --- | ---
include_deleted | Whether include deleted items in the response or not | <ul><li>Default: false</li></ul>
#### <a name="h.buy5qiedujte"></a>Request Body
> N/A
#### <a name="h.ml1u4vsv5vdu"></a>Response Headers

Header | Description
--- | ---
eTag | Account config object type collection revision

#### <a name="h.at3vl7aaemrk"></a>Response Body
```javascript
{"text":"some text","state":"Away","enabled":true,"id":725989512,"deleted":false}
```
### <a name="h.tk63pamncbwb"></a>Create Status
 reasons#### <a name="h.5nmr61kxlfer"></a>Description

Create new status reason for an account. It is possible to create several items at a time.

#### <a name="h.1p40whrzzxbp"></a>URI

/api/account/{accountId}/configuration/le-agents/status-reasons

#### <a name="h.9xbiprqtw9wx"></a>HTTP Methods

POST

#### <a name="h.r22rg87xq650"></a>Response Codes
201 Created<br/>
400 Bad Request<br/>
401 Not Authorized<br/>
403 Forbidden<br/>
404 Data not found<br/>
409 Conflict<br/>
500 Internal server error<br/>

#### <a name="h.33ld16ie1c78"></a>Formats

JSON

#### <a name="h.qufzkyrd49py"></a>Path Parameters

Parameter | Description | Notes
--- | --- | ---
accountId | LP site id | <ul><li>Validation fail error code: 400</li><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li></ul>

#### <a name="h.so4a7ilqqpek"></a>Parameters
Parameter | Description | Notes
--- | --- | ---

#### <a name="h.351749zbdpi"></a>Request Headers

| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |

#### <a name="h.7hbpbnyo23u9"></a>Request Body

The request body is able to accept single JSON object as shown below, or a JSON array [] of such objects.

Note: order attribute is not mandatory, however you should note the following:

1.  If order is not passed and there are multiple items in the request, order assigned by the server is not guaranteed to be the sorting in the request body.
3.  Created items where order was not defined will always get bigger order then existing ones

Single status reason creation
```javascript
{"text":"some new reason text","state":"Away","enabled":true,"deleted":false}
```

Multiple status reasons creation

Note: order assigned by the server is not guaranteed to be the order in the request body
```javascript
[{"text":"some reason text","state":"Away","enabled":true,"deleted":false},{"text":"another reason text","state":"Away","enabled":true,"deleted":false}] 
```

Attribute | Description | Notes
--- | --- | ---
id | Account Config object’s unique id. | <ul><il>Not used when creating items, the id will be auto generated and returned as part of the response items</il><il>Type: long number </il>

#### <a name="h.s772du1vfapu"></a>Response Headers
Header | Description
--- | ---
eTag | Account config object type collection revision


#### <a name="h.poknstkp3xuo"></a> Response Body

Newly created status reason json.

### <a name="h.o5xa9f1xnhld"></a>Update Status reason

#### <a name="h.omykhabaz1a3"></a>Description

Update an existing status reason.

#### <a name="h.5ub2xpv6xmb9"></a>URI

/api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId}

#### <a name="h.f8jdb2va0q8r"></a>HTTP Methods

PUT

#### <a name="h.m475ohpg3vfg"></a>Response Codes
200 OK<br/>
304 Not Modified<br/>
400 Bad Request<br/>
401 Not Authorized<br/>
403 Forbidden<br/>
404 Data not found<br/>
409 Conflict<br/>
500 Internal server error<br/>

#### <a name="h.q7ga9mgukxdg"></a>Formats

JSON

#### <a name="h.gnf11d9u8eea"></a>Path Parameters
Parameter | Description | Notes
--- | --- | ---
accountId | LP site id | <ul><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li><ul>
statusReasonId | Account Config object’s unique id. | <ul><li>Type: Positive long number greater than zero</li><ul>

#### <a name="h.uj4sfzvnvuvc"></a>Query Parameters
Parameter | Description | Notes
--- | --- | ---

#### <a name="h.qpjckalwit7u"></a>Request Headers

| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |
X-HTTP-Method-Override=PUT | Tells to the backend this POST request is actually PUT | 
| If-Match | Contains widgets’ current revision number |

#### <a name="h.ikkpp3oeexh5"></a> Request Body

```javascript
{"text":"some reason text","state":"Away","enabled":true,"id":725987312,"deleted":false}
```

#### <a name="h.asbfgg9bl568"></a>Response Headers

Header | Description
--- | ---
eTag | Account config object type collection revision

#### Response Body

Updated widget data

### <a name="h.n1tqgyiozl1y"></a>Delete Status reason
#### <a name="h.pftg7ga7kbgp"></a>Description
Delete an existing status reason
#### <a name="h.vlnm666pzyft"></a>URI

/api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId}
#### <a name="h.qgsp18ipbsm2"></a>HTTP Methods
DELETE
#### <a name="h.lwfdksmqdplc"></a>Response Codes
200 OK<br/>
304 Not Modified<br/>
400 Bad Request<br/>
401 Not Authorized<br/>
403 Forbidden<br/>
404 Data not found<br/>
409 Conflict<br/>
500 Internal server error<br/>
#### <a name="h.b6tjl2kmd74b"></a>Formats
JSON
#### <a name="h.l0cyk3sxtjgd"></a>Path Parameters
Parameter | Description | Notes
--- | --- | ---
accountId | LP site id | <ul><li>Validation fail error code: 400</li><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li></ul>
statusReasonId | Account Config object’s unique id. | <ul><li>Type: Positive long number greater than zero</li></ul>

#### <a name="h.cql73ic44l00"></a>Request Headers
| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |
| If-Match | Contains widgets’ current revision number |

#### <a name="h.l5qbv558w5dj"></a>Response Headers
Header | Description
--- | ---
eTag | Account config object type collection revision
#### <a name="h.p9qw7ks04bhv"></a>Response Body


### <a name="h.n1tqgyiozl1y1"></a>Status reason Query Delta
#### <a name="h.pftg7ga7kbgp1"></a>Description
Query changes in Status reason data
#### <a name="h.vlnm666pzyft1"></a>URI

/api/account/configuration/le-agents/status-reasons/query
#### <a name="h.qgsp18ipbsm21"></a>HTTP Methods
POST
#### <a name="h.lwfdksmqdplc1"></a>Response Codes
200 OK<br/>
400 Bad Request<br/>
401 Not Authorized<br/>
403 Forbidden<br/>
500 Internal server error<br/>
#### <a name="h.b6tjl2kmd74b1"></a>Formats
JSON
#### <a name="h.l0cyk3sxtjgd1"></a>Path Parameters
Parameter | Description | Notes
--- | --- | ---
N/A |  |
#### <a name="h.cql73ic44l001"></a>Request Headers
| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |

#### <a name="h.ikkpp3oeexh51"></a> Request Body
```javascript
{
    " type": 1,
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
}
```

    
#### <a name="h.l5qbv558w5dj1"></a>Response Headers
Header | Description
--- | ---
N/A | 
#### <a name="h.p9qw7ks04bhv1"></a>Response Body
```javascript
{
  "appDataList": [
    {
      "appName": "status-reasons",
      "appApiVersion": 1,
      "accountList": {
        "accountList": [
          {
            "siteId": "1236744443",
            "itemsCollection": {
              "items": [
                {
                  "text": "some update text",
                  "state": "Online",
                  "enabled": true,
                  "id": 728675212,
                  "deleted": false
                },
                {
                  "text": "some text289",
                  "state": "Away",
                  "enabled": true,
                  "id": 728675312,
                  "deleted": false
                }
              ],
              "revision": 17890,
	            "context": {
	              "contextType": "ACCOUNT",
	              "contextId": "1236744443"
	            }
            }
          }
        ]
      }
    }
  ]
}
```

### <a name="h.n1tqgyiozl1y2"></a>Get all changes Query
#### <a name="h.pftg7ga7kbgp2"></a>Description
Query changes in Status reason data for a range of revisions.
#### <a name="h.vlnm666pzyft2"></a>URI

/api/account/configuration/le-agents/status-reasons/query
#### <a name="h.qgsp18ipbsm22"></a>HTTP Methods
POST
#### <a name="h.lwfdksmqdplc2"></a>Response Codes
200 OK<br/>
400 Bad Request<br/>
401 Not Authorized<br/>
403 Forbidden<br/>
500 Internal server error<br/>
#### <a name="h.b6tjl2kmd74b2"></a>Formats
JSON
#### <a name="h.l0cyk3sxtjgd2"></a>Path Parameters
Parameter | Description | Notes
--- | --- | ---
N/A |  |
#### <a name="h.cql73ic44l002"></a>Request Headers
| Header | Description | 
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |

#### <a name="h.ikkpp3oeexh52"></a> Request Body
```javascript
{
    " type": 1,
    "parameters": 
    [
        {
            "site": "187648512",
            "from": 18,
            "to": 20
        }
    ]
}
```

    
#### <a name="h.l5qbv558w5dj2"></a>Response Headers
Header | Description
--- | ---
N/A | 
#### <a name="h.p9qw7ks04bhv2"></a>Response Body

```javascript
[
  {
    "siteId": "le34165338",
    "revisionsCollection": [
      {
        "revision": 4,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some text697",
            "state": "Away",
            "enabled": true,
            "id": 730069512,
            "deleted": false
          }
        ]
      },
      {
        "revision": 2,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some update text",
            "state": "Away",
            "enabled": true,
            "id": 730069412,
            "deleted": false
          }
        ]
      },
      {
        "revision": 3,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some update text",
            "state": "Away",
            "enabled": true,
            "id": 730069412,
            "deleted": true
          }
        ]
      }
    ]
  }
]
```


