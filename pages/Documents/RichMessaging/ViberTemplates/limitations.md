---
pagename: Limitations
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Viber Templates
permalink: viber-templates-limitations.html
indicator: messaging
---

### General limitations

* A rich card can contain any or all of the supported elements: image, title, subtitle, buttons. However, it **must contain at least an image or title** to be valid.

### Element limitations

* Cards have a maximum of 7 elements. This includes the image, title, subtitle, and then buttons. 
* Carousels have a maximum of 10 scrollable cards

### Character limitations

* Button text can contain up to 25 characters
* Viber has a character limit for the title and subtitle which is based on how many button elements are set. The more action buttons that are used, the less space the text button has to consume so text will be shortened with ellipses.
  * title, subtitle, (4 to 0) buttons ~25 to 250 characters
  * image, title, subtitle, 1 buttons ~150 characters 
  * image, title, subtitle, 2 buttons ~100 characters
  * image, title, subtitle, 3 buttons ~50 characters
  * image, title, subtitle, 4 buttons ~25 characters

### Styling

* Fonts can’t be configured — default Viber font will be used

### Sizing

* Viber Card Images sizes — It is recommend that you provide the highest resolution for the image without going over the 500kb limit. Images are the set to **fit** the container.
    * Only JPG and PNG are supported

### Error conditions

* Agent or bot will receive an error when trying to send Viber Structured Content elements with the following character limitations:
    * If button text exceeds 25 characters
    * If structured content map element is applied
