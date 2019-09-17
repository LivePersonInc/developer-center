---
pagename: Statements
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-statements.html
indicator: both
---

Statement interactions simply display information and then execute the next action. They don’t expect or wait for a user response.

{: .important}
See [Interaction Basics](conversation-builder-interactions-interaction-basics.html) for important information on whitelisting, guidelines on how to approach channel-specific limitations, and more.

### Text statements
Text statements display the text provided, for example:

<img style="width:300px" src="img/ConvoBuilder/statements_text.png">

Text statements can display dynamic values through the use of variables; for help with using variables, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

### Image statements
Image statements display a single image. A thumbnail is initially presented, which can be clicked to view the larger image.

### Audio statements
Audio statements currently aren't supported due to a limitation regarding the chat window.

### Video statements
Video statements currently aren't supported, so use a text statement that includes the video URL as a link.

### Apple rich link statements
If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use this type of interaction to send a richer, more interactive and structured message, for example:

<img style="width:450px" src="img/ConvoBuilder/statements_richLink.png">

Apple rich links let consumers directly preview an inline image or video. If you were to use a plain URL for an inline image or video sent through Apple Business Chat, the consumer would have to tap the “Tap to Load Preview” message to load the content. But with an Apple rich link, the content is displayed immediately.

**Rich link settings**

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- | 
| ADD IMAGE OR VIDEO > Image URL | For an image, this is the URL for the image file. Keep images fairly small in size \(MB\) and dimension, so they load quickly. For a video, this is the URL for the background image to display beneath the play button/link. Consider using a complementary image from the video itself. | Required | https://www\.mysite\.com/images/myImage\.jpg |
| URL | For an image, this is the item/business URL to load when the image is clicked. For a video, this is the URL for the video file to play when clicked. | Required | https://www\.mysite\.com/videos/myVideo\.mp4 |
| Title | The title of the rich link. | Required | Flower arranging 101 |

**Notes**
- While LiveEngage supports formatting in Apple rich links, Conversation Builder currently doesn't.