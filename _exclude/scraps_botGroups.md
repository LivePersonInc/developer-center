#### Test a bot group

Once you've created a bot group and assigned bots to the group, you can test the collaboration. Use the **Bot group test** tool to feed to the group a single user message and see which bot would be selected to handle the request.

**To test a bot group**

1. From the bots dashboard that lists your bots, click **Bot Groups** in the upper-right corner.
2. In the left panel, select the group.
3. In the lower-right corner, click <img style="width:25px" src="img/ConvoBuilder/bots_collab_debugIcon.png">.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bots_collab7.png">

4. In the **Bot group test** tool, specify the following:

    * **User text**: Enter the user message to use to search against the bots in the group.
    * **Only search bots with live connector**: If you want to search against only bots with active agent connectors, select this. This option lets you simulate a runtime experience by excluding bots in the bot group that aren't deployed.

5. Click **Test**.

   <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bots_collab8.png">

    If a bot is matched to the user text, the results indicate whether it was a pattern match or an intent match, and they identify the details: the strength of the match, the name of the bot, the name of the dialog, and the name of the interaction.