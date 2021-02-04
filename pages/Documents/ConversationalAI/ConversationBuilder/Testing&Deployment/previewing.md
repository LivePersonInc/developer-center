---
pagename: Previewing
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Testing & Deployment
permalink: conversation-builder-testing-deployment-previewing.html
indicator: both
---

The Preview tool is a web client that's designed to provide a full preview of the conversational experience as you design, develop and test the bot.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

Note the following about Preview:

- The conversation doesn't go through Conversational Cloud, so there's no need to deploy an agent connector to use Preview. To test functionality that requires Conversational Cloud features (such as transfers), deploy the bot and then test in the [Conversation Tester](conversation-builder-testing-deployment-testing-debugging-post-deployment.html) and/or in a web client. You can practice deployment and testing in a web client using the [Deploy the Bot tutorial](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html).
- Within Preview, all structured content is displayed. Keep in mind that not all channels support all structured content objects. Make sure to test and verify the bot on the device or in the appropriate application. For a list of what a channel supports, see [here](conversation-builder-interactions-interaction-support.html).
- The Preview window toggles its display to show the Bot Logs window. For details on the Bot Logs window, see [here](conversation-builder-testing-deployment-debugging.html).

### Access Preview
**To access the Preview window**
- Click **Preview** in the upper-right corner.

### Reset the session

If you've already opened the Preview window and subsquently made changes to the bot while the Preview window is open (i.e., while the current session is active), you'll need to reset the session so that Preview can reflect those changes.

**To reset the session**
- Click **Reset Session** in the Preview window. Alternatively, enter "reset" and press Enter.



