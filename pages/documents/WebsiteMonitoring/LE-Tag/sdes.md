---
pagename: SDEs
redirect_from:
sitesection: Documents
categoryname: "Website Monitoring"
documentname: LE-Tag
permalink: le-tag-sdes.html
indicator: both
---

The `lpTag.sdes` object is useful for testing and troubleshooting behavior with [Engagement Attributes (SDEs)](engagement-attributes-overview.html).

These functions are only available after the taglet has been loaded. Therefore, it is a good practice to prepend the following before any function calls:

```javascript
window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
// Function here
```

### Push SDEs

The `lpTag.sdes.push` function will push an sde object or array of objects to the visitor session when the lpTag communicates next.

{: .important}
See the [Send](#send-sdes) function if you need the SDEs to send immediately (eg. Single Page Apps)

It will trigger the [VAR_ADDED](le-tag-events-events.html#var_added) event as well.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `lpTag.sdes.push(sdes)` | sdes: object or array of objects | None |

#### Example

```javascript
lpTag.sdes.push(
  {
    "type": "prodView", //MANDATORY
    "products": [{ //ARRAY OF PRODUCTS
      "product": {
        "name": "Women's Running Shoes", //PRODUCT NAME
        "category": "shoes", //PRODUCT CATEGORY NAME
        "sku": "10305020", //PRODUCT SKU OR UNIQUE IDENTIFIER
        "price": 119.95 //PRODUCT PRICE
      }
    }]
  }
);
```

### Send SDEs

The `lpTag.sdes.send` function will push an sde object or array of objects to the visitor session immediately.

{: .important}
If using on page load, make sure the function exists. Falling back to `lpTag.sdes.push` is a good practice.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `lpTag.sdes.send(data,fun)` | data (optional): can be `undefined`, one sde object, or an array of sde objects, fun (optional): can be `undefined`, this will be executed when the request to send SDE comes back (in case of error - fn will be called only on next successfull call or never in case of permanent error) | None |

#### Example

```javascript
var data = {
   "type": "prodView", //MANDATORY
   "products": [{ //ARRAY OF PRODUCTS
     "product": {
       "name": "Women's Running Shoes", //PRODUCT NAME
       "category": "shoes", //PRODUCT CATEGORY NAME
       "sku": "10305020", //PRODUCT SKU OR UNIQUE IDENTIFIER
       "price": 119.95 //PRODUCT PRICE
     }
   }]
 };
 
var fun = function() {};
lpTag.sdes.send(data, fun);
```

### Get SDEs

The `lpTag.sdes.get` function will return the sdes in the object store. It does not return all of the sdes from the visitor's session, but just the sdes that are present in the store on the given page.

{: .important}
This function returns the actual object and not a clone. Any tempering with the object may interfere with the expected functionality of the function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `lpTag.sdes.get(sdeType)` | sdeType (optional): string | **If sdeType was given**: array of sdes with the type equal to the type given, or `undefined` if does not exist. **If no sdeType was given**: array of ALL sdes in the store |

#### Example

```javascript
lpTag.sdes.get("prodView");
```

