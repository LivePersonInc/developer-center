---
title: Limitations
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
order: 80
permalink: rich-messaging-connectors-limitations.html
indicator: both
---

* List template - Top_element_style in the List FB template will not be supported (will always be set to "Compact")

* For Generic and Button templates - FB "Default action" will not be supported

* Agent or bot will receive an error when trying to send Structured Content elements with the following configurations:

    * In case of button and generic templates:

        * If number of characters in text (on main card) larger than 640 (UTF-8-encoded)

        * If number of characters on button text title is larger than 20

        * If number of characters in "title" or “subtitle” text is more than 80

        * If map element is applied

    * In case of generic template only:

        * If a "subtitle" tag is placed **without** a “title” tag in the SC card layout

        * If a "image" element is placed **without** a “title” text in the SC card layout

        * If a "button" elements are placed **without** a “title” text in the SC card layout

    * In case of List template

        * If number of list items is lower than 2 items

        * If number of buttons is larger than 1 in a list item object

        * If number of characters on button text title is larger than 20

        * If number of characters in "title" or “subtitle” text is more than 80

        * If a "title" text tag is placed **without** a “subtitle” text tag **OR** “Image” element in the SC list item object

        * If Image element is placed without a title or subtitle in list item object

        * If map element is placed in a List layout
