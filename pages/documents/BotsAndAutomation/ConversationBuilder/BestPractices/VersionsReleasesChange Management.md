---
pagename: Versions, Releases, & Change Management
redirect_from: conversation-builder-getting-started-getting-started-part-4.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-versions-releases-change-management.html
indicator: both
---

Throughout the automation creation lifecycle, it is important to follow good change management practices. Conversation Builder uses two features that enable this. 

**Versions** are ways of saving your progress at crucial moments during development. When you save a new version, it takes a snapshot of your automation at that moment and saves it. You can then recover your automation to the state of a previous version. This is helpful if you ever make mistakes or break something and need to go back.

**Releases** contain the same snapshot ability of versions, but it also allows you to push the snapshot to a different automation.

Use *versions* during the development cycle to take snapshots for different milestones. Use *releases* to push snapshots to different automations, like a Development vs a Production automation.

### Saving Versions

In the lower right corner of the Conversation Builder interface, there are a couple icons that are extremely important. 

Farthest to the right is the Versions icon. Tapping this icon will display a list of your currently saved versions. By tapping the link to "Save Current Version", you will get a dialog that allows you to name a saved version. If you do not provide a name, it will simply use the current date and time.

Any time you might be making large changes to the functionality of your automation, there is the possibility that you may need a way to roll back. It is highly recommended that you save a version at various points in that process to ensure you do not lose any work you’ve done.

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_0.png">

If you ever need to roll back to a previous version, simply hover over the version you’d like and tap the "Restore" button. 

{: .important}
"Restore" will completely overwrite your existing automation with the previous version, so use wisely.

### Creating Releases

Once your automation has been deployed, it is live and available to your customers. Because of this, you would not want to make changes to the live bot code. Rather you should be working in a "Development" or “Sandbox” version of the automation and only push this to a “Production” version when it is finished and tested. 

This can be accomplished by using “Releases” (3rd button from the left, next to "Versions").

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_1.png">

First, go back to the Dashboard and create a New, Basic Automation. You will be pushing your production version to this automation. You may wish to be specific with your naming and add "Production" or “Prod” to the title to differentiate it with your Dev bot.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/vrcm_image_2.png">

Once you’re done creating the new bot, return back to your Dev automation. Click on the "Releases" button on the lower right (3rd button from the left) and select “New Releases”.

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_3.png">

Find and select the newly created bot Production bot in the "Release to Automation" drop down. Insert a Version number and a Description, as seen in the example below. Click on the “Create Release” button once you’re done.

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_4.png">

You will see that a release "snapshot" has been created on the following screen. To complete the push, the new bot must accept the release. Click on the link to new bot, which will direct you to that automation.

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_5.png">

To accept the upgrade, within the Production automation, tap the Releases icon, select "Upgrade" and your transaction is complete.

<img class="fancyimage" width="750" src="img/ConvoBuilder/bestPractices/vrcm_image_6.png">

The functionality of the production automation should be identical to the development’s at the time of the push.

{: .important}
The Bot User Agents attached to the Dev automation are **not** pushed to Production. You will need to create and attach new Bot User Agents to this production automation, if they do not already exist.

If you have certain hard coded values (eg. skills) that may differ from one bot to another, you could use Environment Variables to maintain these values externally. [See here for more](conversation-builder-best-practices-using-environment-variables.html).

