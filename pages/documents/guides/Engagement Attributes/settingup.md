---
title: Setting up Engagment Attributes
Keywords:
level1: Documents
level2: Guides
level3: Engagement Attributes
order: 30
permalink: engagment-attributes-setting-up.html
indicator: both
---

Engagement Attributes configuration is located in the Data Sources page, accessed from the Campaigns footnote.

![Data Sources](img/campaigns.png)

Data can be sent to LivePerson using one of the following methods:
* Extracting from the page using LivePerson’s scraping tool
* JavaScript code

### Extracting From the Page Using LivePerson's Scraping Tool

This option requires no code, and assumes the information exists on your webpage.

To track Engagement Attributes, follow the steps described below.

1. Log into LiveEngage. At the top of the page, click **Campaigns**, and then, in the footnote, click **Data Sources**. The Data Sources page is displayed.

![Scraping Tool](img/scrapingtool.png)

{:start="2"}
2. Click **Configuration** next to the relevant Engagement Attributes category. The Configuration page is displayed for the relevant category.

3. For each property, select how to extract the information. The following options are available:

  * HTML element by class name
  * HTML element by ID
  * JavaScript global variable

4. Click **Save**.

_Notes_:

* _LiveEngage will “trim” any non-numeric characters such as dollar signs for properties that represent numbers, for example, “total”._

* _Make sure that the identifier class name or ID is unique. LiveEngage will look for your identifier on **all** of your pages._

### JavaScript code

This option requires the use of JavaScript code. This method is required if the data you want to collect does not exist on the page.

To track Engagement Attributes, follow the steps described below.

1. Insert the Engagement Attribute declaration in a script tag, either at the end of the LiveEngage tag script, or in a separate script tag just after.

2. Insert the push function below the declaration and add the type of Engagement Attribute, for example, “prodView”.

_Notes_:

* _The push method expects a JSON format._

* _The JSON structure is unique to each Engagement Attribute. The appropriate format for each Engagement Attribute can be found in Types of Engagement Attributes section below._

{:start="3"}
3. Validate the code by going to the visitor page and simulating the visitor actions that trigger an event.

Example for data that is sent when a visitor views “Asics Women's GT 2000 4”:

```javascript
window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
lpTag.sdes.push(
  {
    "type": "prodView", //MANDATORY
    "products": [{ //ARRAY OF PRODUCTS
      "product": {
        "name": "Asics Women's GT 2000 4", //PRODUCT NAME
        "category": "Women running shoes", //PRODUCT CATEGORY NAME
        "sku": "10305020", //PRODUCT SKU OR UNIQUE IDENTIFIER
        "price": 119.95 //PRODUCT PRICE
      }
    }]
  }
);
```

_Note: When LiveEngage gets a list, the system never calculates totals nor numbers of items. LiveEngage relies on the event to send that information._
