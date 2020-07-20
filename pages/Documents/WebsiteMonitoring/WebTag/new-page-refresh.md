---
pagename: New Page Refresh
redirect_from:
  - le-tag-new-page-refresh.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Web Tag
permalink: web-tag-new-page-refresh.html
indicator: both
---

The `lpTag` can be set up to work with a Single Page Application (SPA) by using the `newPage()` method.

### Usage

When a new page is triggered call the following method:

```javascript
lpTag.newPage(url, {
  section : [],
  sdes: [],
  taglets: {
	  rendererStub:{
		divIdsToKeep: {
			"divId": true
		}
	  }
  }
});
```

#### Parameters Explanation

| Parameter Name | Type | Description | Required |
| --- | --- | --- | --- |
| url | string | the new url that is the result of the page | Yes |
| anonymous object | object | contains the following properties | No |
| section | array of strings | sections which are active | No |
| sdes | array of SDE objects | sdes in the new page context | No |
| taglets | object | configuration that will be passed to the specific taglet names | No |
| rendererStub | object | `{ divIdsToKeep: {  “DIVID” :  true } }` where “DIVID” should be replaced with the ID of the div who’s button you want to keep during the page refresh. | No |
| YOURTAGLETNAME | object | add your own specific configuration for your taglet here | No |

#### Example Call

```javascript
lpTag.newPage('https://x.com/newUrl/', {
    section: [ 'NEWSECTION' , 'NEWSECTION2'],
    sdes: [
        {   "type": "cart",
            "total": 11.7,
            "numItems": 6,
            "products": [
                {
                    "product": {
                        "name": "prod1",
                        "category": "category",
                        "sku": "sku",
                        "price": 7.8
                    },
                    "quantity": 1}
            ]
        }
    ], taglets: {
        rendererStub: {
            divIdsToKeep: {  MYDIV: true } },
            SOMETAGLETNAME: { /*SOME CONFIGURATION*/ }
    }
});
```
<!--
### newPage API Lifecycle

The following will explain the steps that the newPage method takes when it is called:

1. override section
2. go fetch taglets (passing the already existing ones).
3. by holding taglets states in memory we know which taglets should be stopped, restart or completely new.
4. call the taglets lifecycle by that order
    1. 1st for loop - stop (removed taglets)
    2. 2nd for loop - init (new taglets)
    3. 3rd for loop - start / restart (new /existing)
5. merge and update taglets state list
-->

### Example HTML page

```html
<!-- lpTag with your site ID goes here -->

<!-- Example that sends customer info with the new page -->
<button onclick='lpTag.newPage("http://www.salesenglish.com/", {
    section: ["unit-sales","lang-english","lob-sales-english"],
    sdes: [{
    "type": "ctmrinfo",
    "info": {
        "cstatus": "cancelled",
        "ctype": "vip",
        "customerId": "138766AC",
        "balance": -400.99,
        "socialId": "11256324780",
        "imei": "3543546543545688",
        "userName": "user000",
        "companySize": 500,
        "accountName": "bank corp",
        "role": "broker",
        "lastPaymentDate": {
            "day": 15,
            "month": 10,
            "year": 2014
        },
        "registrationDate": {
            "day": 23,
            "month": 5,
            "year": 2013
        }
    }
    }],
    taglets: {}
});'>New Page Info</button>

<!-- Example that sends customer cart information with the new page -->
<button onclick='lpTag.newPage("https://x.com/newUrl/Cart.html", {
    section: ["sales","lang-english","lob-sales-english"],
    sdes: [{
        "type": "cart",
        "total": 11.7,
        "numItems": 6,
        "products": [{
            "product": {
                "name": "prod1",
                "category": "category",
                "sku": "sku",
                "price": 7.8
            },
            "quantity": 1
        }]
    }],
    taglets: {
        rendererStub: {
            "divIdsToKeep": {
                "MYDIV": true
            }
        }
    }
});'>New Page Cart</button>

<!-- Example with just updating the url and nothing else -->
<button onclick='lpTag.newPage("https://fakeDomainName.com/Page");'>New Page</button>
```
