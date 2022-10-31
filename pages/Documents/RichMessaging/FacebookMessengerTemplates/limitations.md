---
pagename: Limitations
redirect_from:
  - structured-content-facebook-messenger-templates-limitations.html
keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Facebook Messenger Templates
permalink: facebook-messenger-templates-limitations.html
indicator: messaging
---

### General limitations

* Navigation action — when navigation action button is tapped on Facebook Messenger templates, Google Maps will be displayed in Facebook webview with the structured content coordinates **location** and **not the exact address**. Important to consider this when using the navigation action. (This is currently in planed to be resolved in the next versions of msg-gw-facebook).

* Generic and Button templates — Facebook "Default action" will not be supported.

* Default message size is limited to 15,000K. Keep this in mind when building large templates.

* Facebook allows various actions within buttons — share user location, share email, and phone number — this is not supported with LivePerson's templates.

### Error conditions

Agent or bot will receive an error when trying to send Structured Content elements with the following configurations:

#### Button and Generic Templates

  * If there are more than 3 button items

  * If number of characters in text (on main card) larger than 640 (UTF-8-encoded)

  * If number of characters on button text title is larger than 20

  * If number of characters in "title" or “subtitle” text is more than 80

  * If map element is applied

#### Generic Template Only

  * If a "subtitle" tag is placed **without** a “title” tag in the structured content card template

  * If a "image" element is placed **without** a “title” text in the structured content card template

  * If a "button" elements are placed **without** a “title” text in the structured content card template