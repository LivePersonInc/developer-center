---
pagename: Rich Links Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
permalink: apple-business-chat-templates-rich-links-template.html
indicator: messaging
---

### Overview

Apple has provided a new type of message that allows you to send rich links to the consumer device. 

When sending a plain URL link (eg. `https://www.apple.com`) through Apple Business Chat, it will show "Tap to Load" by default on the consumer device. This requires the consumer to tap before seeing the preview in the message transcript. 

You can now override this default "Tap to Load" behavior by sending a rich link stuctured content template instead of a plain URL.

Rich link configurable content includes:

* Bubble title text
* Link preview image
* Link button URL

*Consumer view of rich links template*

<img src="img/link_preview_abc0.jpg" style="width:300px" alt="consumer view">

*Agent view of rich links template*

<img src="img/link_preview_abc1.png" style="width:400px" alt="agent view">

### Example Template

Only the Structured Content body is needed for Rich Links.

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
