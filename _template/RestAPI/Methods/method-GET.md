---
pagename: Rest API Method GET Template
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
| GET | https://base/product/api/account/accountID/methodname?param1=value&param2=value |

#### Request Query Parameters

| Name | Description | Type / Value | Required |
| --- | --- | --- | --- |
| param1 | This parameter specifies something | number | Yes |
| param2 | This specifies something else | string | No |

### Response

Explain generally what you will get back from this method.

Link to the [appendix](appendixStuff.html) if you'd like to define the response just once and link to it from every method.

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


