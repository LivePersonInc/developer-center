---
pagename: Limitations
redirect_from:
  - rich-messaging-quick-replies-limitations.html
Keywords:
sitesection: Documents
categoryname: Rich Messaging
documentname: Quick Replies
order: 30
permalink: quick-replies-limitations.html
indicator: messaging
---

* Once a max chips per row is set (max 8), the number of rows is calculated automatically (up to 3 rows). If the number of chips exceeds max chips per row times 3, then extra chips will be added to the last row.

* A chip’s title is set to have a maximum of 25 characters. If more are set, then the first 22 characters will be used with ellipsis.

* If a consumer decided to type the text of the chip, instead of clicking on it, then no click-operation will be executed (no action or metadata will be sent to the server). If your bot depends on such data, consider "teaching" the bot to accept typed-replies, and not just clicked-replies.
