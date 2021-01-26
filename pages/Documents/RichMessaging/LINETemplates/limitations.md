---
pagename: Limitations
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: LINE Templates
permalink: line-templates-limitations.html
indicator: messaging
---

### General limitations

* Line does not guarantee message order and some message types might take longer to send than others. Therefore a small timeout is recommended when sending multiple successive messages. 

### Element limitations

* Cards have a maximum of 3 buttons
* Carousels have a maximum of 10 scrollable cards
* Quick replies have a maximun of 13 chips 

### Character limitations

* **Title** has a max of 40 characters 
* **Subtitle**:
    * Without image and title - subtitle can be up to 160 chars
    * With image and title - subtitle can be up to 60 chars

### Styling limitations

 * Fonts, font colors or background color can’t be configured - default LINE font and colors will be used

### Image limitations
  * Image URL has a limit of 1000 characters.
  * Image URL must be HTTPS
  * File type can only be JPEG or PNG
  * Image max width: 1024px
  * Max size - 1MB

### Error conditions

* An agent or bot will receive an error when trying to send LINE Structured Content elements with the following character limitations:
    * If title text exceeds 40 characters, or subtitle with image exceeds 60, or if subtitle without image exceeds 160 
    * If structured content Map element is applied
