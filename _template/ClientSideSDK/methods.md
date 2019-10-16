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

Explain what a developer can do with these methods/functions.

{: .important}
Perhaps note that the developer should see the [introduction](introduction-to-this-product.html) to this product if they have not yet?

### Function One

Explain what this function does. Why the developer would want to use it.

{: .important}
Optionally include a best practice or gotcha note.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendImmediateReply(message)` | message – (string or array) – A string to be added to output. Or an array of strings, each to be added to output in succession. | None |

#### Example

Explain what the below example does

```javascript
var response = botContext.getCurrentUserMessage();
botContext.sendImmediateReply('I think you said, ' + response);
```