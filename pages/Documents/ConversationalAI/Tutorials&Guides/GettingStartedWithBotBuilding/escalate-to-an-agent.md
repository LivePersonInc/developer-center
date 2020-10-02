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

In this final Getting Started tutorial, you add an Agent Escalation dialog to connect the user with a human agent.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/451534344" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 17: Create a Human skill

1. Return to the **User Management** section of the Conversational Cloud.
2. Select the **Skills** tab from the menu bar, and click **+ Add skill** in the lower-left corner. 
3. Complete the **Add skill** form with the following:

    * **Name**: Human
    * **Description**: Transfer to a human agent
	
	Leave the remaining fields as default, and click **Save**.

4. After saving, you will be back in the **Skills** section of **User Management**. Select the skill you’ve just created, as we need to reference the Skill ID.
5. From the URL, take note of the Skill ID, which will be the number at the end of the URL.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/skill_id.png">

6. Click the **Users** link from the menu bar, and select your profile that you’ve used to log in to the Conversational Cloud.
7. Navigate to the **Assignment** section at the bottom of the **Edit user** form. Ensure that you have an **Agent** profile assigned to you, and select your newly created **Human** skill in the **Skills** field.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/assign_skill.png">

8. Click **Save**.
9. Lastly, ensure that you are showing as available by clicking your profile icon in the lower left corner of the screen and updating your status to **Online**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/online_user.png">

    From here, we’ll navigate back to Conversation Builder to create our Escalation dialog.

### Step 18: Create the Escalation dialog

1. In **Conversation Builder**, select **Add Dialog** from the lower-left corner, and create a new standard dialog with the name ‘Escalation’.
2. In the dialog starter, set this dialog to be triggered using patterns. Select **+ Pattern** and enter the following pattern values:

    * Agent
    * Human
    * Representative

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/escalation_dialog_starter.png">

3. On triggering this dialog, we want to transfer our user to a human agent. For this, we will use the **Agent Transfer** interaction. Select this from the integrations section of the interaction menu, and notice that we immediately receive an error message stating ‘Agent skill id is not set.’.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/agent_transfer_interaction.png">

4. Modify the transfer message by clicking into the interaction and typing. Modify this message to say, "Transferring to a human agent…"
5. Click the settings icon in the upper-right corner of the interaction. In the advanced section of **Interaction Settings**, paste in the skill ID for our Human skill that we took note of earlier.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/agent_transfer_settings.png">

5. Click **Save**.

    Once saved, we’ll want to re-test our deployed automation to ensure that human escalation is happening as expected.

### Step 19: Test the escalation

1. In a separate browser tab, navigate back to the messaging demo page, enter your account number, and update.
2. Click into the Messaging call to action, and wake your bot with a ‘hi’ or ‘hello’.
3. From here, type in one of the patterns you used when creating your **Escalation** dialog.
4. If successful, you will see your updated transfer message from our Agent Escalation interaction. You will also hear a phone ring from your Conversational Cloud browser tab. Navigate back to that tab.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/deploy_test_2.png">

5. Note the **Agent Workspace** icon on the left of the page shows a notification badge with the number 1. Click on the **Agent Workspace** icon.
6. In the lower left hand corner, click **Accept**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/accept.png">

7. You are now able to communicate with the demo browser tab using the messaging interface here. Try sending a few messages back and forth to see the conversation in action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/conversation.png">

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/conversation_2.png">

### What's next?

Congratulations on completing this tutorial series! To learn more, check out the [Bot Groups & Other Techniques tutorial series](tutorials-guides-bot-groups-other-techniques-overview.html).