---
pagename: Best Practices
redirect_from:
  - rich-messaging-structured-content-best-practices.html
  - structured-content-mobile-sdk-and-web-templates-best-practices.html
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Mobile SDK and Web Templates
permalink: mobile-sdk-and-web-templates-best-practices.html
indicator: both
---

* We recommend that brands use our JSON script validator [JSON Pollock](/rich-messaging-structured-content-pollock.html) in order to format the strings correctly before use. This validator, hosted on GitHub, can be shared with brands for this use.

* When building your cards and actions, it is recommended to ensure that every click will also have a publishText action. This ensures that the click is “recorded” in the transcript and makes it easier for bots and agents to respond to consumer interactions with the card.

* It is recommended not to add more than three or four buttons at the maximum per card, to avoid noise for the visitor.

* Use high resolution images in your cards, verify them and their quality before you use the card for the first time and make sure your cards are interesting and aesthetically pleasing.

* Don’t assign a navigate and a deep-link action together, as they are mutually exclusive.

* Use a carousel when there's a priority order to your content, i.e., the first item is probably the most interesting.

* Strive for consistency. All cards within the carousel should have the same look and feel and the same business logic. If one card has an image, include an image in all of them.

* Don't mix types of content. If you include an article next to a list of products, your experience could cause confusion.

* Don't use a carousel when it's important that people see everything in the list. They may not scroll to the end. Consider creating a List instead (a [Structured Content card](rich-messaging-structured-content-card.html) with vertical elements and click operations).