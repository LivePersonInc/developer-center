---
pagename: Best Practices
redirect_from:
  - structured-content-facebook-messenger-templates-best-practices.html
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Facebook Messenger Templates
permalink: facebook-messenger-templates-best-practices.html
indicator: messaging
---

### Finding the common denominator for the structured content template between mobile messaging, web messaging and Facebook Messenger.

In order to make it easier to create multi source type structured content templates, we recommend finding the common denominator between the sources that are using structured content as part of your agents and bots conversational flow.

Here are the basic rules for creating unified structured content templates and experience across mobile messaging, web messaging and Facebook Messenger:

#### Generic, Button and Carousel Messenger templates

To create unified templates when looking to use the **Generic, Button and Carousel** Messenger templates, please use these limitations guidelines to create templates with common denominator:

* Facebook button limit is 3 buttons. Conversational Cloud does not have any limitations for number of buttons, but nonetheless will still send the card to Messenger, but will render up to the 3rd button while ignoring the 4th button and up.
* Facebook does not allow more than 20 characters on button text title. Conversational Cloud will allow up to 128 characters.
* Facebook does not allow more than 640 characters on text elements (which are not part of of a button text). Conversational Cloud will allow up to 5000 characters.
* Navigation action will render a link Google map (with exact location rendered by structured content coordinates), while in-app and web messaging will render the map inline conversation
* Facebook Carousels (a collection of horizontally scrollable generic or button templates) does not support more than 10 generic or buttons cards in each message

#### List Messenger templates

To create unified templates when looking to use the **List** Messenger templates, please use these limitations guidelines to create templates with common denominator:

* Facebook has a minimum of 2 item objects. Conversational Cloud does not have any minimum.
* Facebook has a maximum of 4 item objects. Conversational Cloud does not have any limitation on number of items, but nonetheless, If template is created with more than 4 item objects and sent to Messenger channel, Conversational Cloud will ignore the 5th list item and will send up to 4th item
* Facebook does not allow for more than 1 button in a list item object. Conversational Cloud to does have any limitation for number of buttons in list object.
* Facebook does not allow more than 20 characters on button text title.  Conversational Cloud will allow up to 128 characters.
* Facebook does not allow more than 80 characters on title or subtitle text title. Conversational Cloud will allow up to 5000 characters.
* Facebook requires that the "title" element has one or both of the image url or subtitle in list item object. Conversational Cloud do not force that.
* Navigation action will render a link Google Map (with exact location rendered by structured content coordinates), while in-app and web messaging will render the map inline conversation 