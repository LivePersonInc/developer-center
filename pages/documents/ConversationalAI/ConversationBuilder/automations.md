---
pagename: Bots
redirect_from:
    - conversation-builder-conversation-builder-automations.html
    - conversation-builder-automations.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-bots.html
indicator: both
---

### Create a bot

{: .important}
LivePerson recommends that —before you create a bot— you set up the [domains](intent-builder-domains.html), [intents](intent-builder-intents.html), and [entities](intent-builder-entities.html) that the bot will need. This makes creation of the bot much faster and easier because the [NLU Assist tool](conversation-builder-nlu-assist.html) can use that information along the way to suggest suitable intents and entities to use.


**To create a bot**
1. If you logged into Conversation Builder directly (that is, _not_ via single sign-on from LiveEngage) and you have access to multiple organizations within your LiveEngage account, verify in the upper-right corner that the organization under which the bot should exist is displayed. If the correct organization isn’t displayed, select it from the **Org Name** dropdown list.

    <img class="fancyimage" style="width:200px" src="img/ConvoBuilder/org_selection.png">

2. In the Dashboard, click **New Bot** in the upper-right corner.
3. In the dialog box that appears, select the [template](conversation-builder-templates-overview.html) on which to base the bot.
    
    The Custom Bot template uses English and includes just a Welcome dialog and a Fallback dialog (see [Dialog Types](conversation-builder-dialogs-dialog-basics.html#dialog-types)), so it’s ideal if you want to start from scratch. In this case, you’ll be prompted to enter a name and configure a few other settings before the bot is created. For help, see [Configure bot settings](conversation-builder-bots.html#configure-bot-settings) below. 

    There are also many, industry-specific, English-language templates available. If you select one of these, all settings are configured for you. We recommend that you change the bot’s name (removing the date and time stamp at a minimum) and review the other settings. For help, see [Configure bot settings](conversation-builder-bots.html#configure-bot-settings) below.

4. Build out the bot, completing and adding the necessary [dialogs](conversation-builder-dialogs-dialog-basics.html) and [interactions](conversation-builder-interactions-interaction-basics.html). As you work, test the bot using the Preview tool.
5. [Save versions](conversation-builder-versions-releases.html#save-a-version) of the bot at important points in its development. This allows you to restore a version if you need.
6. [Train and tune](conversation-builder-best-practices-train-tune-nlu.html) things as you do more testing.
7. [Save a version](conversation-builder-versions-releases.html#save-a-version) of the final “Development” bot.

    At this point, you could deploy the Development bot, but LivePerson recommends that you [create a release](conversation-builder-versions-releases.html#create-a-release) copy of the bot that you deploy instead. This allows you to take live the release copy (the Production copy). Later, you can make fine-tuning changes to the Development copy as needed, without affecting the Production copy. You can then “upgrade” the Production copy accordingly.

### Import a bot
You can add an bot by importing a bot JSON file that was previously exported. This is useful when you need to make a copy of a bot (just export and then import back into the same environment), or you need to copy or move a bot from one environment to another.

{: .important}
Before you import a bot from a different environment (that is, from one region or hosting platform to another), check whether the bot uses domains for intents and entities. If it does, you’ll need to export those domains too and import them into the target environment _before_ importing the bot, keeping the domain names identical. If you don’t import the domains _first_, the associations inside the bot to the intents and entities will break during the bot import. If that happens, you’ll need to reassociate the intents and entities manually.

**To import a bot**
1. If you logged into Conversation Builder directly (i.e., _not_ via single sign-on from LiveEngage) and you have access to multiple organizations within your LiveEngage account, verify in the upper-right corner that the organization under which the bot should exist is displayed. If it isn’t displayed, select it from the **Org** Name dropdown list.

    <img class="fancyimage" style="width:200px" src="img/ConvoBuilder/org_selection.png">

2. In the Dashboard, click **Import Bot** in the upper-right corner.
3. In the dialog box that appears, navigate to and select the JSON file, and click **Open**.
    The bot is imported and given a name that includes a date and time stamp.
4. Change the name of the bot and any other configuration as needed. For help, see [Configure bot settings](conversation-builder-bots.html#configure-bot-settings) below.

### Configure bot settings
**To configure bot settings**
1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.
3. Click **More Settings** to display all the settings.
4. Configure the settings as needed, and click **Save**.

Bot settings include:
- **Name**: Enter a name that’s concise and clear. Make sure abbreviations can be understood, and consider adding a prefix or suffix to indicate the environment (Dev, Prod, etc.) or language (En, Sp, Fr, etc.) if applicable. When you import a bot, by default, a date and time stamp is appended to the bot name; consider removing this because dates quickly become obsolete. 

- **Description**: Enter a description that’s meaningful to you and others. Consider including language that identifies the bot's goal and key behaviors.

- **Bot Type**: Read-only. This is either Consumer Facing Bot or Agent Advisor. A Consumer Facing bot is one that engages with the consumer in the front end. An Agent Advisor bot is one that engages with the contact center agent in LiveEngage in the back end. You specify the bot type when you create the bot, and it can’t be changed afterward.

- **Bot Language**: Read-only. This setting determines the language-specific model for LivePerson NLU; it also supports the proper rendering of left-to-right and right-to-left languages. You specify the bot language when you create the bot, and it can’t be changed afterward.

- **Bot Template**: Read-only. To facilitate the rapid creation of bots, all bots are based on [templates](conversation-builder-templates-overview.html). The default template is Basic, which uses English and includes just a Welcome dialog. You select the template when you create the bot, and it can’t be changed afterward.

- **Bot ID**: Read-only. This is a unique identifier that’s generated by the system. In some scenarios (for example, when using some APIs), you need to reference the bot ID. Here’s where you can find it.

- **Conversation Builder Platform Version**: Read-only. This identifies the platform version of the bot. Typically, you don’t need this information, but here’s where you can find it if asked for it (for example, in a support scenario).

- **Entity**: You can use this option to associate _a domain_ with the bot. However, the [NLU Assist](conversation-builder-nlu-assist.html) tool provides you with help in associating domains with dialogs, so typically you don’t need to specify a domain here.

- **Bot Account**: If you logged into Conversation Builder directly (i.e., _not_ via single sign-on from LiveEngage) and you have access to multiple organizations within your LiveEngage account, you can use this setting to change the organization under which this bot exists. If you logged into Conversation Builder via single sign-on from LiveEngage, the organization you were using in LiveEngage is active and can't be changed, and nothing appears in this list.

- **Public**: When you want other users in your LiveEngage account to be able to view and edit the bot, click the slider to On. The default value is Off. 

- **Bot Environment**: If desired, select the set of [environment variables](conversation-builder-environment-variables.html) that you want to associate with the bot. Environment variables allow you to manage certain values and constants outside of the bot, and use of them when appropriate is considered a best practice.

- **Session Length**: Select the length of the bot session, that is, how long the context of a conversation is maintained after the conversation becomes idle. If this is unset, the default of one hour is used. Be aware that there also exists a LivePerson conversation session; it is this setting, not the LivePerson setting, that determines the session length.

- **Log Transcripts**: If you don’t want to log transcripts of conversations held via the bot, click the slider to Off. The default value is On. Transcripts can provide insights for a variety purposes. For example, they can inform the bot flow and help with tuning. However, some cases might prohibit transcript logging for privacy or other reasons. If you turn this off, metadata on the conversation is still logged, but the content of the conversation isn’t.

- **Default User-Friendly Response**: When the bot encounters errors or throws exceptions, many times a default, English-language message of, *"Not able to understand your question. Can you please re-phrase it?"* is sent to the user. This is also the built-in, default Fallback response, which might confuse the user.

    Use this field to replace the default error/exception message with a user-friendly, meaningful one that satisfies your requirements in terms of substance and language (e.g., you might want to send a response that communicates that an error has occurred and perhaps do so in Spanish). To specify a response, click the slider to activate it, enter the text in the field that appears, and save. There is no character limit.

    Note that this message doesn't replace or affect the Fallback message or a Fallback dialog, as they serve different purposes. Fallback handles when the user's utterance doesn't match a pattern or intent. In contrast, this "default user-friendly response" is sent when the bot encounters an error or throws an exception.

    Finally, also be aware that, during a LivePerson agent escalation, if the escalation fails 4 times, the escalation then stops, and this "default user-friendly response" is sent to the user. For more information on escalation failures, see [here](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#handle-transfer-failures).

### Export a bot
Export of an bot creates a JSON file.

You might need to export a bot for a few reasons:

- You want to create a variation of the bot, so you plan to copy the bot by exporting it and then importing it back into the same environment.
- You want to move or copy a bot to another environment, so you plan to export it and import it into a different environment.
- You want an extra measure of back-up—above and beyond [saving versions](conversation-builder-versions-releases.html#save-a-version) of bots that you can restore—so you plan to archive the JSON file for safekeeping.

{: .important}
In case 2 above—-moving or copying a bot to a different environment (that is, from one region or hosting platform to another)—-check whether the bot uses domains for intents and entities. If it does, you’ll need to export those domains too and import them into the target environment _before_ importing the bot, keeping the domain names identical. If you don’t import the domains _first_, the associations inside the bot to the intents and entities will break during the bot import. If that happens, you’ll need to reassociate the intents and entities manually.

**To export a bot**
1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.
3. Click **More Settings**, and then click the **Export Bot** icon <img style="width:25px" src="img/ConvoBuilder/icon_export.png">.
4. Follow the browser prompts to access and save the JSON file to a location of your choice.

### Delete a bot
Deleting a bot is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
If you want to delete a bot that is deployed, first stop the bot, un-deploy it, and remove any enterprise integrations that are running. This helps to ensure there are no adverse effects.

**To delete a bot**
1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.
3. Click **More Settings**, and then click the **Delete Bot** icon <img style="width:25px" src="img/ConvoBuilder/icon_delete.png">.
4. In the confirmation dialog:
    1. If you want to delete all the logs and analytics data for the bot, select the checkbox.
    2. Click **Proceed**.