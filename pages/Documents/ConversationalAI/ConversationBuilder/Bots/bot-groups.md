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

{: .important}
While you can include a [post-conversation survey bot](conversation-builder-bots-post-conversation-survey-bots.html) in a bot group for grouping purposes, a survey bot doesn’t participate in [automatic, bot-to-bot transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group).

It's common to organize bots into groups based on business function. You could then further organize them based on environment. In the image below, bots are grouped based on business function (Checking and Savings).

Note the following about the bots dashboard when bot groups exist:

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botGroups_dashboard.png">

1. The bot group name. **Tip**: Double-click this bar to collapse/hide the bot list.
2. The list of bots within the bot group. Click any bot name to open the bot in the Dialog Editor.
3. The **Collaboration** icon lets you know that collaboration ([automatic transfers](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group)) is enabled for the group.
4. No icon is displayed when collaboration is disabled for the group.
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
    * **Transfer message**: Enter the message to send to the consumer prior to the transfer, something like, "Hold on while I transfer you to a chatbot that can assist you..." If you need to insert a new line, use an escape character like so: \\\n. You can use bot context variables in the message. You can also leave this field blank if desired.
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

### Best practices

For bot groups that are intended only for grouping purposes:
* Make sure to disable the Collaboration setting.

For bot groups that are collaborative (the Collaboration setting is enabled):
* If the group will include multiple bots, LivePerson recommends the use of the [LivePerson NLU v2 engine](intent-builder-natural-language-understanding.html#liveperson-nlu-v2).
* The group should not contain more than 15 bots.
* Make sure there is no overlap in the intents and patterns used by the bots.

### FAQs

#### If I use bot groups, must I assign all bots to a bot group?

No, this isn't required. Bots that aren't assigned to a bot group are listed below the bot groups.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botGroups_unassigned.png">

#### Can I test bot groups using Preview?

No, [Preview](conversation-builder-testing-deployment-previewing.html) can't be used; you must test bot groups using deployed bots. For some practice at this, complete the [Bot Groups & Other Techniques](tutorials-guides-bot-groups-other-techniques-overview.html) tutorial series.