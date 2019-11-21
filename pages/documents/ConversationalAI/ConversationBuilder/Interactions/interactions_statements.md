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

### Text
Text statements display the text provided, for example:

<img style="width:300px" src="img/ConvoBuilder/statements_text.png">

Text statements can display dynamic values through the use of variables; for help with using variables, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).

### Image
Image statements display a single image.

<img style="width:250px" src="img/ConvoBuilder/statements_image.png">

The domain in the image URL must be [whitelisted]((conversation-builder-interactions-interaction-basics.html#whitelisting)).

### Audio
Audio statements currently aren't supported.

### Video
Video statements currently aren't supported. Use a text statement that includes the video URL as a link.

### Apple Rich Links
**For Apple Business Chat only.**

If your business uses Apple’s Business Chat service to chat with consumers via the Messages app, you can use this type of interaction to send a richer, more interactive and structured message, for example:

<img style="width:450px" src="img/ConvoBuilder/statements_richLink.png">

Apple rich links let consumers directly preview an inline image or video. If you were to use a plain URL for an inline image or video sent through Apple Business Chat, the consumer would have to tap the “Tap to Load” message to load the content. But with an Apple rich link, the content is displayed directly. (The interaction has been developed per Apple's Rich Link specifications, which you can find [here](https://developer.apple.com/documentation/businesschatapi/messages_sent/sending_rich_link_messages).)

<img style="width:375px" src="img/ConvoBuilder/statements_richLink2.png">

#### Rich Link settings

| Setting | Description | Required or Optional | Example |
| --- | --- | --- | --- | 
| ADD IMAGE OR VIDEO > Image URL | For an image, this is the URL for the image file. <br><br>For a video, this is the URL for the background image to display beneath the play button/link. Consider using a complementary image or one from the video itself. <br><br>The domain in the URL must be [whitelisted](conversation-builder-interactions-interaction-basics.html#whitelisting).<br><br>Keep images fairly small in size \(MB\) and dimension, so they load quickly. | Required | https://www\.mysite\.com/images/myImage\.jpg |
| ADD IMAGE OR VIDEO > URL | For an image, this is the item/business URL to load when the image is clicked. For a video, this is the URL for the video file to play when clicked. | Required | https://www\.mysite\.com/videos/myVideo\.mp4 |
| Title | The title of the rich link. | Required | Flower arranging 101 |

#### Populating an Apple Rich Link dynamically

You can populate the statement with static information, or it can be populated dynamically during run time, for example, using data received from an [API integration](conversation-builder-integrations-api-integrations.html).

<img style="width:600px" src="img/ConvoBuilder/statements_richLink3.png">

#### Notes on Apple Rich Links
- While LiveEngage supports formatting in Apple rich links, Conversation Builder currently doesn't.