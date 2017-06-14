---
title: Visitor Flow Events
level1: Documents
level2: Account Configuration
level3: LE-Tag
level4: Events

order: 10
permalink: lp-tag-visitor-flow.html

indicator: both
---
These events include monitoring and decision events.

### VAR_ADDED

This event is triggered when an Engagement Attribute (/SDE) is reported.

**Event Information**

| Name | Value |
| :---| :--- |
| eventName | "VAR_ADDED" |
| appName | "lp_sdes" |

**Event Properties**

| Name | Description | Type / Value |
| :--- | :--- | :--- |
| | The SDE JSON | JSON |

*Example (Transaction Engagement Attribute):*

```javascript
{
       "type": "cart", //MANDATORY
       "total": 11.7, //TOTAL CART VALUE
       "numItems": 6, //NUMBER OF ITEMS IN CART
       "products": [{  //ARRAY OF PRODUCTS
           "product": {
           "name": "prod1", //PRODUCT NAME
           "category": "category", //PRODUCT CATEGORY NAME
           "sku": "sku", //PRODUCT SKU OR UNIQUE IDENTIFIER
           "price": 7.8 //PRODUCT PRICE
           }, "quantity": 1 //NUMBER OF PRODUCTS
       }]
  }
```

### MONITORING_STATE

This event is triggered when monitoring starts and/or when its state is changed.

**Event Information**

| Name | Value |
| :---| :--- |
| eventName | "MONITORING_STATE" |
| appName | "lp_SMT" |

**Event Properties**

| Name | Description | Type / Value |
| :--- | :--- | :--- |
| active | The monitoring state. | Boolean |

*Example:*

    {
       active: true/false
    }