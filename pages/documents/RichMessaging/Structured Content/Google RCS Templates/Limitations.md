---
pagename: Limitations
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: RCS Business Messaging Templates
permalink: structured-content-rcs-business-messaging-templates-limitations.html
indicator: messaging
---

* Cards have a maximum of 4 buttons
* Carousels have  a maximum of 10 scrollable cards 
* Button text can contain up to 25 characters
* Google doesn't have a hard limitation on number of characters within title or subtitle, but generally recommend to be concise
* Rendering styles:
    * Fonts can’t be configured - default Google font will be used
    * Colors of fonts are taken by default from the profile branding color that the brand has configured 
    * Colors of brand messages displayed on the consumer messenger are taken by default from the profile branding color that the brand has configured
* RCS Card Images sizes - RCS card images are available in three heights: short, medium, tall. In structured content, the card will be set by default to medium (Height of 168 DP). 
    * Google recommends that when sharing a vertical image (horizontal card), the optimal resolution for the image is 764 x 1024 (3:4 ratio). 
    * Google recommends that when sharing a horizontal image (vertical card), the optimal resolution for the image is 1440x720 (3:4 ratio). 
    * Google recommends the image file size should not exceed 2MB. 
    * If the image size added doesn’t fit the dimensions of the card’s height, the image preview is chosen by zooming and cropping the image. 
* A rich card can contain any or all of the supported elements: image, title, subtitle, buttons. However, it MUST contain at least an image or title to be valid. 
* Google RCS Business Messaging allows consumers to perform various actions using button actions - share user location, dial phone number, add to calendar, payment request  - these actions are not currently supported  by the structured content framework.
* Agent or bot will receive an error when trying to send RCS Structured Content elements with the following character limitations: 
    * If  button text exceeds 25 characters
    * If structured content map element is applied