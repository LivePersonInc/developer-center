---
title: Limitations
Keywords:
level1: Documents
level2: Rich Messaging
level3: Facebook Messenger Templates
order: 80
permalink: rich-messaging-connectors-fb-limitations.html
indicator: messaging
---

* **Navigation action** - when navigation action button is tapped on Facebook Messenger templates, Google Maps will be displayed in Facebook webview with the Rich Messaging coordinates location and not the exact address. Important to consider this when using the navigation action.

* **List template** - Top_element_style in the List Facebook template will not be supported (will always be set to "Compact")

* **Generic and Button templates** - Facebook "Default action" will not be supported

* Due to Facebook Templates characters limitations and additional layout limitations, Structured Content elements with the following configuration will not be supported:

    * In case of **Button and Generic** templates:

        * If number of characters in text (on main card) larger than 640 (UTF-8-encoded)
        * If number of characters on button text title is larger than 20
        * If number of characters in "title" or “subtitle” text is more than 80
        * If map element is applied (Map is not supported by Facebook templates)

    * In case of **Generic** template only:

        * If a "subtitle" tag is placed **without** a “title” tag in the Rich Messaging card layout
        * If an "image" element is placed **without** a “title” text in the Rich Messaging card layout
        * If "button" elements are placed **without** a “title” text in the Rich Messaging card layout

    * In case of **List** template
        * If number of list items is lower than 2 items
        * If number of buttons is larger than 1 in a list item object
        * If number of characters on button text title is larger than 20
        * If number of characters in "title" or “subtitle” text is more than 80
        * If a "title" text tag is placed **without** a “subtitle” text tag **OR** “Image” element in the SC list item object
        * If an Image element is placed without a title or subtitle in list item object
        * If map element is placed in a List layout
