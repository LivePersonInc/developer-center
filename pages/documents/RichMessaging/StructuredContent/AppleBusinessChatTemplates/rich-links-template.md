---
pagename: Rich Links Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Link Previews
permalink: link-previews-apple-business-chat-template.html
indicator: messaging
---

### Introduction

Apple is providing a new type of message for brands to be able to send rich links to the device. Currently, links sent to devices show "Tap to Load" by default, requiring the user to tap before seeing the preview in the message transcript. Brands can now override this default behavior by including the preview content inline, avoiding “Tap to Load”.

This is accomplished by sending a new type of structured content message- richLink.

Rich link preview configurable content will include:

* Bubble title text
* Link preview image
* Link button URL

Brands will be able to adjust the preview content to their desired experience via the structured content framework and elements. Please note that all other structured content requirements apply (AC feature enablement and image whitelist).

![image alt text](img/link_preview_abc0.jpg)

![image alt text](img/link_preview_abc1.png)

### Example JSON:

Only SC body is needed for Rich Link.

```json
{
  "type": "vertical",
  "tag": "richLink",
  "elements": [
    {
      "type": "image",
      "url": "https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg"
    },
    {
      "type": "button",
      "title": "Apple’s iPhone X",
      "click": {
        "actions": [
          {
            "type": "link",
            "uri": "https://www.apple.com"
          }
        ]
      }
    }
  ]
}
```
