---
pagename: Bot Groups
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-bot-groups.html
indicator: both
---

### Introduction

You can create bot groups and add bots to them for two purposes:

* You want to group together bots to make them easier to access and work with on the bots dashboard. In other words, you simply need the grouping mechanism.

* You want to enable [automatic, bot-to-bot transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group) for the bots within a given bot group.

It's common to organize bots into groups based on business function, e.g., Checking group/Savings group, Home Loan group/Auto Loan group, and so on. Alternatively, you could organize all your Development bots into one group, your Staging bots into another, and your Production bots into still another.

Note the following about the bots dashboard when bot groups exist:

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botGroups_dashboard.png">

1. The bot group name. **Tip**: Double-click this bar to collapse/hide the bot list.
2. The list of bots within the bot group. Click any bot name to open the bot in the Message Editor.
3. The green dot and **Collaboration** indicator let you know that collaboration ([automatic transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group)) is enabled for the group.
4. No indicator is displayed when collaboration is disabled for the group.
5. Click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> icon to access the group menu, which provides options for editing and deleting the group.

### Create a bot group only to group bots

You can create a bot group solely for the purpose of making it easier to access and work with your bots on the bots dashboard.

**To create a bot group only to group bots**
1. From the bots dashboard that lists your bots, click **Create Group** in the upper-right corner.
2. In the Create Bot Group dialog, specify the following:

    * **Bot group name**: Enter a group name that's concise and clear.
    * **Collaboration**: This setting lets you enable/disable automatic transfers on a group-by-group basis. Keep this set to Off (Disabled), which is the default value.
    * **Add Bots**: Select each bot to add it to the group. A bot can be a member of only one group. You can select from the bots that are not yet assigned to a group.

4. Click **Create**.

### Create a bot group that supports collaboration (automatic transfers)

[Automatic transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group) rely on bot groups to determine which bots can talk to one another and transfer conversations automatically. When you [create a custom bot](conversation-builder-bots-custom-bots.html), you have the option of assigning a bot group to it.

**To create a bot group that supports collaboration (automatic transfers)**
1. From the bots dashboard that lists your bots, click **Create Group** in the upper-right corner.
2. In the Create Bot Group dialog, specify the following:

    * **Bot group name**: Enter a group name that's concise and clear.
    * **Collaboration**: This setting lets you enable/disable automatic transfers on a group-by-group basis. Set this to On (Enabled).
    * **Transfer message**: Enter the message to send to the consumer prior to the transfer, something like, "Hold on while I transfer you to a chatbot that can assist you..." You can use bot context variables in the message. You can also leave this field blank if desired.
    * **Add Bots**: Select each bot to add it to the group. A bot can be a member of only one group. You can select from the bots that are not yet assigned to a group.

4. Click **Create**.

### Enable or disable collaboration for a bot group

You can enable or disable collaboration for a bot group, respectively, to enable or disable [automatic transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group) within the group.

**To enable or disable collaboration for a bot group**

1. From the bots dashboard that lists your bots, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> icon that corresponds to the bot group name.
2. Select **Edit Group** from the menu that appears.
3. In the Edit Bot Group dialog, click the **Collaboration** slider to turn it on (Enabled) or off (Disabled).
4. Click **Update**.

### Delete a bot group

You can delete a bot group at any time; this *doesn't* delete the bots therein. If you delete a bot group that contains bots, the bots simply no longer have an assigned bot group.

**To delete a bot group**

1. From the bots dashboard that lists your bots, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> icon that corresponds to the bot group name.
2. Select **Delete Group** from the menu that appears.
3. Click **Yes** to confirm the action.

### FAQs

#### I created a bot group, but I don't see it listed on the bots dashboard. What happened?

The bots dashboard only displays the bot groups that contain bots (as well as all unassigned bots); a bot group with no bots within it isn't displayed there.

If you created a new bot group within a bot's **Bot Settings** when you were assigning the bot to a group...

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/botGroups_createGroup.png">

...but you didn't end up assigning the new bot group to the bot at that time, the new bot group won't be displayed on the bots dashboard because it doesn't have any bots within it. To resolve this, go into a bot's **Bot Settings** and assign the bot group to the bot. You'll see the bot group displayed in the pick list of available bot groups (shown above).