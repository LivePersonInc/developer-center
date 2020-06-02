---
pagename: Previewing
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Testing & Deployment
permalink: conversation-builder-testing-deployment-previewing.html
indicator: both
---

The Preview tool is a web widget that's designed to provide a full preview of the conversational experience as you design, develop and test the bot.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/preview.png">

Note the following about Preview:

- The conversation doesn't go through LiveEngage, so there's no need to deploy an agent connector to use Preview. Functionality that requires LiveEngage features (such as transfers) should be tested in a LiveEngage web widget. You can practice this using the [Connect to LiveEngage tutorial](conversation-builder-tutorials-guides-getting-started.html).
- Messages are formatted in HTML, and structured content is displayed. Depending on the channel, some features in the bot might not render. For a list of what a channel supports, see [here](conversation-builder-interactions-interaction-support.html).
- The Preview window toggles its display to show the Bot Logs window. For details on the Bot Logs window, see [here](conversation-builder-testing-deployment-debugging.html).

### Access Preview
**To access the Preview window**
- Click **Preview** in the upper-right corner.

### Reset the session

If you've already opened the Preview window and subsquently made changes to the bot while the Preview window is open (i.e., while the current session is active), you'll need to reset the session so that Preview can reflect those changes.

**To reset the session**
- Click **Reset Session** in the Preview window. Alternatively, enter "reset" and press Enter.



