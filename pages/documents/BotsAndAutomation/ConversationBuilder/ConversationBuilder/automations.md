---
pagename: Automations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-automations.html
indicator: both
---

### Create an automation
! LivePerson recommends that—before you create an automation—you set up the domains, intents, and entities that the automation will need. This makes creation of the automation much faster and easier because the Assist tool can use that information along the way to suggest suitable intents and entities to use.

**To create an automation**
1. If you logged into Conversation Builder directly (that is, _not_ from LiveEngage) and you have access to multiple organizations within your LiveEngage account, verify in the upper-right corner that the organization under which the automation should exist is displayed. If the correct organization isn’t displayed, select it from the **Org Name** dropdown list.

2. In the Dashboard, click **new automation**.

3. Select the template on which to base the automation.

    The Basic template (which is the default) uses English and includes just a Welcome dialog, so it’s ideal if you want to start from scratch. In this case, you’ll be prompted to enter a name and configure a few other settings before the automation is created. For help, see Configure automation settings below. 

    There are also many, industry-specific, English-language templates available. If you select one of these, all settings are configured for you. We recommend that you change the automation’s name (removing the date and time stamp at a minimum) and review the other settings. For help, see Configure automation settings below.

4. Build out the automation, completing and adding the necessary dialogs and interactions. As you work, test the automation using the Preview tool.

5. Save versions of the automation at critical points in its development. This allows you to restore a version if you need.

6. Train and tune things as you do more testing.

7. Save a version of the final “Development” automation.

    At this point, you could deploy the Development automation, but LivePerson recommends that you create a release copy of the automation that you deploy instead. This allows you to take live the release copy (the Production copy). Later, you can make fine-tuning changes to the Development copy as needed, without affecting the Production copy. You can then “upgrade” the Production copy accordingly.

### Import an automation
You can add an automation by importing an automation JSON file that was previously exported. This is useful when you need to make a copy of an automation (just export and then import back into the same environment), or you need to copy or move an automation from one environment to another.

{: .important} Before you import an automation from a different environment (that is, from one region or hosting platform to another), check whether the automation uses domains for intents and entities. If it does, you’ll need to export those domains too and import them into the target environment before importing the automation, keeping the domain names identical. If you don’t import the domains first, the associations inside the automation to the intents and entities will break during the automation import. If that happens, you’ll need to reassociate the intents and entities manually.

**To import an automation**
1. If you logged into Conversation Builder directly (i.e., _not_ from LiveEngage) and you have access to multiple organizations within your LiveEngage account, verify in the upper-right corner that the organization under which the automation should exist is displayed. If it isn’t displayed, select it from the **Org** Name dropdown list.

2. In the Dashboard, click **import automation**.

3. In the dialog box that appears, navigate to and select the JSON file, and click **Open**.

    The automation is imported and given a name that includes a date and time stamp.

4. Change the name of the automation and any other configuration as needed. For help, see Configure automation settings below.

### Configure automation settings
**To configure automation settings**

1. Open the automation, and click the gear icon that’s displayed in the upper-left corner (beside the automation name).
2. Select **Automation Settings** from the menu that appears.
3. Click **More Settings** to display all the settings.
4. Configure the settings as needed, and click **Save**.

Automation settings include:
- **Name**: Enter a name that’s concise and clear. Make sure abbreviations can be understood, and consider adding a prefix or suffix to indicate the environment (Dev, Prod, etc.) or language (En, Sp, Fr, etc.) if applicable. When you import an automation, by default, a date and time stamp is appended to the automation name; consider removing this because dates quickly become obsolete. 

- **Description**: Enter a description that’s meaningful to you and others. Consider including language that identifies the automation’s goal and key behaviors.

- **Automation Type**: Read-only. This is either Consumer Facing Automation or Agent Advisor. A Consumer Facing automation is one that engages with the consumer in the front end. An Agent Advisor automation is one that engages with the contact center agent in LiveEngage in the back end. You specify the automation type when you create the automation, and it can’t be changed afterward.

- **Automation Language**: Read-only. This setting only has an impact when you select Hebrew as the value. In this case, characters are displayed right-to-left, not left-to-right, to support right-to-left reading. You specify the automation language when you create the automation, and it can’t be changed afterward.

- **Automation Template**: Read-only. To facilitate the rapid creation of automations, all automations are based on templates. The default template is Basic, which uses English and includes just a Welcome dialog. You select the template when you create the automation, and it can’t be changed afterward.

- **Automation ID**: Read-only. This is a unique identifier that’s generated by the system. In some scenarios (for example, when using some APIs), you need to reference the automation ID. Here’s where you can find it.

- **Conversation Builder Platform Version**: Read-only. This identifies the platform version of the automation. Typically, you don’t need this information, but here’s where you can find it if asked for it (for example, in a support scenario).

- **Entity**: You can use this option to associate _a domain_ with the automation. However, the Assist tool provides you with help in associating domains with dialogs, so typically you don’t need to specify a domain here.

- **Automation Account**: If your user account has access to multiple LiveEngage accounts, you can use this setting to change the account under which this automation exists.

- **Public**: When you want other users in your LiveEngage account to be able to view and edit the automation, click the slider to On. The default value is Off. 

- **Automation Environment**: If desired, select the set of environment variables that you want to associate with the automation. Environment variables allow you to manage certain values and constants outside of the automation. For more information, see Using environment variables.

- **Session Length**: Select the length of the automation session, that is, how long the context of a conversation is maintained after the conversation becomes idle. If this is unset, the default of one hour is used. Be aware that there also exists a LivePerson conversation session; it is this setting, not the LivePerson setting, that determines the session length.

- **Log Transcripts**: If you don’t want to log transcripts of conversations held via the automation, click the slider to Off. The default value is On. Transcripts can provide insights for a variety purposes. For example, they can inform the automation flow and help with tuning. However, some cases might prohibit transcript logging for privacy or other reasons. If you turn this off, metadata on the conversation is still logged, but the content of the conversation isn’t.

- **Enable Automation**: Typically, you don’t need to set this since you start an automation in LiveEngage after you deploy it.

### Export an automation
Export of an automation creates a JSON file.

You might need to export an automation for a variety of reasons:

- You want to create a variation of the automation, so you plan to copy the automation by exporting it and then importing it back into the same environment.

- You want to move or copy an automation to another environment, so you plan to export it and import it into a different environment.

- You want an extra measure of back-up—above and beyond saving versions of automations that you can restore—so you plan to archive the JSON file for safekeeping.

{: .important} In case 2 above—moving or copying an automation to a different environment (that is, from one region or hosting platform to another)—check whether the automation uses domains for intents and entities. If it does, you’ll need to export those domains too and import them into the target environment before importing the automation, keeping the domain names identical. If you don’t import the domains first, the associations inside the automation to the intents and entities will break during the automation import. If that happens, you’ll need to reassociate the intents and entities manually.

**To export an automation**
1. Open the automation, and click the gear icon that’s displayed in the upper-left corner.

2. Select **Automation Settings** from the menu that appears.

3. Click **More Settings**, and then click the **Export Automation** (download) icon.

4. Follow the browser prompts to access and save the JSON file to a location of your choice.

### Delete an automation
Deleting an automation is a non-recoverable action, so be certain about doing so before taking this action.

{: .important} If you want to delete an automation that is deployed, first stop the automation, un-deploy it, and remove any enterprise integrations that are running. This helps to ensure there are no adverse effects.

**To delete an automation**

1. Open the automation, and click the gear icon that’s displayed in the upper-left corner.
2. Select **Automation Settings** from the menu that appears.
3. Click **More Settings**, and then click the **Delete Automation** (trash can) icon.
4. In the confirmation dialog:
    1. If you want to delete all the logs and analytics data for the automation, select the checkbox.
    2. Click **Proceed**.