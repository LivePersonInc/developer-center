---
pagename: Limitations
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Facebook Messenger Templates
permalink: structured-content-facebook-messenger-templates-limitations.html
indicator: messaging
---

* Navigation action - when navigation action button is tapped on Facebook Messenger templates, Google Maps will be displayed in Facebook webview with the structured content coordinates **location** and **not the exact address**. Important to consider this when using the navigation action. 
(This is currently in planed to be resolved in the next versions of msg-gw-facebook).
* List template - Top_element_style in the List Facebook template will not be supported (will always be set to "Compact")
* For Generic and Button templates - Facebook "Default action" will not be supported
* Default message size is limited to 15,000K. Keep this in mind when building large templates.
* Facebook allows to perform various actions within buttons - share user location, share email, and phone number - this is not supported with the structured content framework.
* Agent or bot will receive an error when trying to send Structured Content elements with the following configurations: 
  * In case of button and generic templates: 
    * If number of characters in text (on main card) larger than 640 (UTF-8-encoded) 
    * If number of characters on button text title is larger than 20
    * If number of characters in "title" or “subtitle” text is more than 80
    * If map element is applied
  * In case of generic template only:
    * If a "subtitle" tag is placed **without** a “title” tag in the structured content card template 
    * If a "image" element is placed **without** a “title” text in the structured content card template
    * If a "button" elements are placed **without** a “title” text in the structured content card template
  * In case of List template
    * If number of list items is lower than 2 items
    * If number of buttons is larger than 1 in a list item object 
    * If number of characters on button text title is larger than 20
    * If number of characters in "title" or “subtitle” text is more than 80 
    * If a "title" text tag is placed **without** a “subtitle” text tag **OR** “Image” element in the structured content list item object 
    * If Image element is placed without a title or subtitle in list item object 
    * If map element is placed in a List template 