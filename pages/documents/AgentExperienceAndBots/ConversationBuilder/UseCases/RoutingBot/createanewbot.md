---
pagename: Step 1 - Create a New Router Bot
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: Routing Bot Use Case
permalink: conversation-builder-routing-bot-use-case-step-1-create-a-new-router-bot.html
indicator: both
---

This step requires that you have a user account for the Conversation Builder platform. If you do not, your team should have an Administrator assigned who can create one for you.

### Importing the Template

1. Once provided a Conversation Builder account, select your region (United States) and login at [https://alpha.botcentralai.com/#/account/signin](https://alpha.botcentralai.com/#/account/signin)

    ![](img/conversationimages/image_1.png)

2. Click on the Bot Builder icon.

    ![](img/conversationimages/image_2.png)

3. Click on the NEW BOT icon and give your bot a unique name and description. Be sure to select Version 2.0 under Bot Builder and Consumer Facing Bot. Then select **Router Bot for Training** from the template area below and hit Save.

4. You will be taken to your new automation in the Conversation Builder.

    ![](img/conversationimages/image_3.png)

### Initial Bot Setup

**Before you do anything else**, we need to "Publish" the bot to your Organization. (For those with access to multiple organizations, the bot will default to Private, which is why we want to change it.)

1. Click the gear <img class="inlineimage" src="img/conversationimages/image_4.png" /> icon on the right sidebar and then Bot Settings. Scroll down and click "More Settings".

2. Where it says "Publish Bot" change to the appropriate organization and hit Save.

    ![](img/conversationimages/image_5.png)

### Testing Your Bot

To quickly test your bot’s functionality, click on the Chat preview button <img class="inlineimage" src="img/conversationimages/image_6.png" /> on the right sidebar and type one of the options (or not, if you want to see how the bot responds to unstructured text). Keep in mind, the Chat preview is not connected to LiveEngage and cannot display the actual transfer to agent. For that you’ll need to connect your bot to LiveEngage and view an interaction with a chat or messaging consumer.

You may need to type "**reset**" and hit enter. Then type “hi” to trigger the initial Welcome message. **Reset** clears all variables to start fresh.

<img src="img/conversationimages/image_7.png" style="height:500px">

Select one of the options by clicking on a button or by typing a keyword like **billing**, **account**, **offers** or **help**.
