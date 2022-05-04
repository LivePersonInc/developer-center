---
pagename: Versions & Releases
redirect_from: 
    - conversation-builder-getting-started-getting-started-part-4.html
    - conversation-builder-best-practices-versions-releases-change-management.html
    - conversation-builder-best-practices-versions-releases.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-versions-releases.html
indicator: both
---

Throughout the bot creation lifecycle, it's important to follow good change management practices. Conversation Builder has two features that support this: 

* **Versions** let you save your progress at crucial moments during bot development. When you save a new version, the system takes a snapshot of the bot at that moment and saves it. You can then recover the bot to the state of a previous version. This is helpful if you ever make mistakes or break something and need to go back.

* **Releases** are similar to versions in that they also involve creation of a snapshot of the bot. However, releases are used to push the snapshot to a different bot, updating it with the new bot code.

{: .important}
Use *versions* during the development cycle to take snapshots at different milestones. Use *releases* to push snapshots to different bots, e.g., to push a snapshot from a Development bot to a Production bot.<br><br>Conversation Builder stores only the last 10 versions.

### Save a version

Any time you might be making large changes to the functionality of a bot, there is the possibility that you might need a way to roll back those changes. It is highly recommended that you save a version at periodic and significant points in the development process to ensure you don't lose any work.

**To save a version**

1. In the upper-left corner, just to the right of the menu bar, click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Versions**.

    This displays the list of versions of the bot, if any.
    <img class="fancyimage" width="700" src="img/ConvoBuilder/bestPractices/versions1.png">

2. In the Versions window, click **Save Current Version**.
3. In the dialog that appears, enter a version name if desired, and click **Save**. If you don't enter a name, the current date and time is used.

### Restore a previous version 

{: .important}
A "restore" completely overwrites your existing bot with the selected, previous version, so use caution when restoring versions.

**To restore a previous version**

1. Move your mouse over the version you want to restore, and click the **Restore** button that appears.
2. In the Restore Version dialog box, enable the provided controls to verify the name and version of the bot you want to restore, and then click **Proceed**.

### Create a release

Once your bot has been deployed, it is live and available to your customers. Because of this, you would not want to make changes to the live bot code. Rather, you should be working in a "Development" or “Sandbox” version of the bot and only push this to a “Production” version when it is finished and tested. You do this by creating a release. The procedure that follows describes the process.

**To create a release**

1. From the Conversation Builder dashboard that lists your bots, click **New Bot** and create a new bot based on the *Custom Bot* template. You will be pushing your production version to this bot. You might want to be specific with the naming and append "Production" or "PROD" to the bot name to differentiate it from your Development/Sandbox bot.

    <img class="fancyimage" width="350" src="img/ConvoBuilder/bestPractices/releases1.png">

    You only need to create the Production bot; you don't need to build out its dialogs and interactions.

2. Return to your Development bot.
3. In the upper-left corner, just to the right of the menu bar, click <img style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Releases**.
4. In the upper-right corner, click **New Release**.
5. In the New Releases dialog box, specify the following:

    * **Release to Bot**: Select your newly created Production bot.
    * **Version**: Enter a version number. When you upgrade the Production bot, this automatically creates a version in that bot, so you need to specif a version number here.
    * **Description**: Enter a meaningful description of any changes from the previous version.

6. Click **Create Release**.

    This creates a release "snapshot." To complete the push, the new bot must accept the release.

7. Click the link to the new bot that's provided. 

    <img class="fancyimage" width="700" src="img/ConvoBuilder/bestPractices/releases2.png">

    This opens the new bot.

8. In the new Production bot, click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> in the upper-left corner, and select **Releases**.

    Note the **Upgrade** button. If this button isn't enabled, your account needs a configuration change made by LivePerson; contact your administrator for assistance.

    <img class="fancyimage" width="700" src="img/ConvoBuilder/bestPractices/releases3.png">

9. Click **Upgrade**.

    At this point, the functionality of the Production bot should be identical to the Development bot’s at the time of the push. Additionally, a new version of the Production bot has been created.

{: .important}
The bot user agents attached to the Development bot are **not** pushed to Production. You will need to create new bot user agents and attach them to the Production bot, if they do not already exist.

**Tip**: If you have certain hard-coded values (e.g., skills) that might differ from one bot to another, you could use [environment variables](conversation-builder-environment-variables.html) to maintain the values externally.
