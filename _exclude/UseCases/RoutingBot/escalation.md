---
pagename: Step 4 - Escalation
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: Routing Bot Tutorial
permalink: conversation-builder-routing-bot-tutorial-step-4-escalation.html
indicator: both
---

Because this is a routing bot, its main purpose is to route to a particular skill based on the user’s intent.

*Note: For the purposes of this tutorial we will NOT be connecting to LiveEngage.*

### Edit transfer messages

<img src="img/conversationimages/image_38.png" style="height:200px">

1. Select one of the options dialogs (eg: Billing), select the text interaction with the variable transferMessage being shown.

2. Navigate to view the PreProcess code using the settings panel. This is where you will edit the **transfer message** for that intent; this is the message that will be sent to the user before being transferred to an agent.

3. Currently the transfer message says "Thank you! I'll transfer you to an agent who can help with your billing issue. One moment, please." Edit this message to reflect your brand’s tone and personality. Hit Save and test in the previewer.

4. Edit the transfer messages in each of the other Option dialogs as well.

5. You can also see the Escalation interaction in each of these dialogs. This will perform the API call that handles the transfer to a LiveEngage agent (once your automation is connected to a LiveEngage account).
