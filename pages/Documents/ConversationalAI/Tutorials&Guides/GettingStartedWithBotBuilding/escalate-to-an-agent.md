---
pagename: Escalate to an Agent
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-escalate-to-an-agent.html
indicator: both
---

{: .important}
This is a tutorial series that's cumulative in nature. To start from the beginning, [start here](tutorials-guides-getting-started-with-bot-building-dialogs-patterns.html).

In this final Getting Started tutorial, you add an Agent Escalation dialog to connect the user with a human agent.

<!--
### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/451534344" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0; right: 0; left: 0;"></iframe></div></div>
<br>
-->

### Step 15: Create a Human skill

1. Return to the **User Management** section of the Conversational Cloud.
2. Select the **Skills** tab from the menu bar, and click **+ Add skill** in the lower-left corner. 
3. Complete the **Add skill** form with the following:

    * **Name**: Human
    * **Description**: Transfer to a human agent
	
	Leave the remaining fields as default, and click **Save**.

4. After saving, you will be back in the **Skills** section of **User Management**. Select the skill you’ve just created, as you need to reference the Skill ID.
5. From the URL, take note of the Skill ID. This is the number at the end of the URL.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/skill_id.png" alt="An example of the skill ID that can be found in the skill's URL">

6. Click the **Users** link from the menu bar, and select your profile that you’ve used to log in to the Conversational Cloud.
7. Navigate to the **Assignment** section at the bottom of the **Edit user** form. Ensure that you have an **Agent** profile assigned to you, and select your newly created **Human** skill in the **Skills** field.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/assign_skill.png" alt="The Assignment settings where you assign profiles and skills">

8. Click **Save**.
9. Lastly, ensure that you are showing as available: Click your profile icon in the lower-left corner of the screen, and update your status to **Online**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/online_user.png" alt="The online indicator for your user profile">

    From here, we’ll navigate back to Conversation Builder to create our Escalation dialog.

### Step 16: Create the Escalation dialog

1. In **Conversation Builder**, click **Add Dialog** in the lower-left corner, and create a new standard dialog (dialog type = Dialog) with the name "Escalation."
2. In the dialog starter, set this dialog to be triggered using patterns. Select **+ Pattern** and enter the following pattern values:

    * agent
    * human
    * representative

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/escalation_dialog_starter.png" alt="The dialog starter for the Escalation dialog, with some patterns for agent, human, and representative">

    Alternatively, use the pattern library that you've used before to add the "Help" set of patterns. Then click **Save**.

3. On triggering this dialog, we want to transfer the user to a human agent. For this, you use the **Agent Transfer** interaction. Select this from the Integrations section of the Interactions menu. Notice that you immediately receive an error message stating ‘Agent skill id is not set.’.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/agent_transfer_interaction.png" alt="The Agent Transfer Interaction in its default state after being added to the dialog">

4. Modify the transfer message by clicking into the interaction and typing. Modify this message to say, "Transferring to a human agent…"
5. Click the **Settings** icon in the upper-right corner of the interaction to open the Interaction Settings. Click the **Advanced** tab, and paste in or enter the skill ID for our Human skill that you took note of earlier.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/agent_transfer_settings.png" alt="The Advanced tab in the interaction's settings">

5. Click **Save**.

    Let's re-test the deployed bot to ensure that human escalation is happening as expected.

### Step 17: Test the escalation

1. Open a new browser tab, and navigate to the [Messaging demo page](https://developers.liveperson.com/web-messaging/emulator.html). Enter your account number and username, and click **Update**.
2. Click into the Messaging call to action, and wake your bot with a "hi" or "hello."
3. From here, type in one of the patterns you used when creating the **Escalation** dialog.
4. If successful, you now see the updated transfer message from the Agent Escalation interaction. You also hear a phone ring from your Conversational Cloud browser tab.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/deploy_test_2.png" alt="Testing the bot using the Messaging test page">

5. Navigate back to the Conversation Cloud browser tab. Note the **Agent Workspace** icon on the left of the page shows a notification badge with the number 1. Click the **Agent Workspace** icon.
6. In the lower-left corner, click **Accept**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/accept.png" alt="The Accept button in the Conversational Cloud for accepting the conversation">

7. You can now communicate with the demo browser tab using the messaging interface in Conversational Cloud. Try sending a few messages back and forth to see the conversation in action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/conversation.png" alt="The My Conversations tab in the Agent Workspace">

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/conversation_2.png" alt="The consumer's side of the conversation on the Messaging test page">

### What's next?

Congratulations on completing this tutorial series! To learn more, check out the [Bot Groups & Other Techniques tutorial series](tutorials-guides-bot-groups-other-techniques-overview.html).