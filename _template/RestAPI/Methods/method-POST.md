---
pagename: Rest API Method POST Template
redirect_from:
  - a-link-which-will-redirect-to-this-page.html
sitesection: Documents
categoryname: Highest level sidebar category the document is under. eg. "Conversational AI"
documentname: 2nd folder level under the category. Usually the ProductName. eg. "Templates"
subfoldername: optional lowest level folder possible. eg. "Methods"
permalink: documentname-subfoldername-pagename.html
indicator: accepts "messaging" "chat" or "both"
---

Explain what this method does.

{: .important}
Perhaps note that the developer should see the [introduction](introduction-to-this-product.html) to this product if they have not yet?

### Request

| Method | URL |
| --- | --- |
| POST | https://base/product/api/account/accountID/methodname?param1=value&param2=value |

#### Request Query Parameters

| Name | Description | Type / Value | Required |
| --- | --- | --- | --- |
| param1 | This parameter specifies something | number | Yes |
| param2 | This specifies something else | string | No |

#### Request Body

Explain what the POST body payload is for.

| Property Name | Description | Type / Value | Required |
| --- | --- | --- | --- |
| filter | filters something | boolean | No |
| start | specifies a timerange | object | Yes |
| from | timerange starting point | number | Yes |
| to | timerange ending point | number | No |

##### Request Body Example 

```json
{
    "filter": true,
    "start": {
        "from": 1437054059354,
        "to": 1437661693023
    }
}
```

### Response

Explain generally what you will get back from this method.

| Property Name | Description | Type / Value | Optional |
| --- | --- | --- |
| myprop | Tells you something | number | No |
| myobject | Contains info on something | object | No |
| info1 | Tells you stuff | string | No |
| info2 | Tells you things | string | Yes |

#### Response Example

```json
{
    "myprop": 4,
    "myobject": {
        "info1": "stuff",
        "info2": "things"
    }
}
```
