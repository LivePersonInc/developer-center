---
pagename: Rest API Method Appendix
redirect_from:
  - a-link-which-will-redirect-to-this-page.html
sitesection: Documents
categoryname: Highest level sidebar category the document is under. eg. "Conversational AI"
documentname: 2nd folder level under the category. Usually the ProductName. eg. "Templates"
subfoldername: optional lowest level folder possible. eg. "Methods"
permalink: documentname-subfoldername-pagename.html
indicator: accepts "messaging" "chat" or "both"
---

Optionally place any huge response payloads here so you don't have to repeat yourself. 

### Response Body

#### Properties

| Property Name | Description | Type / Value | Optional |
| --- | --- | --- |
| myprop | Tells you something | number | No |
| myobject | Contains info on something | object | No |
| info1 | Tells you stuff | string | No |
| info2 | Tells you things | string | Yes |

#### Example

```json
{
    "myprop": 4,
    "myobject": {
        "info1": "stuff",
        "info2": "things"
    }
}
```