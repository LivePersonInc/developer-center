---
pagename: Post-Conversation Survey Bots
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-post-conversation-survey-bots.html
indicator: messaging
---

### What's a post-conversation survey bot?

A post-conversation survey bot lets you collect feedback from consumers at the end of a conversation with a custom bot or human agent. The survey bot can ask:

* Specialized questions designed to provide First Call Resolution (FCR), Customer Satisfaction (CSAT), and Net Promoter Score (NPS) survey metrics
* Questions that reflect your brand's key performance indicators
* Free-text questions

Use a post-conversation survey bot to measure bot/agent and skill performance and to identify opportunities to improve on your quality targets.

<img style="width:400px" src="img/ConvoBuilder/surveyBot_example.png">

{: .important}
To use survey bots created in Conversation Builder, you must be on the LivePerson platform, i.e., you log into Conversation Builder via single sign-on through LiveEngage. This feature isn't supported on the AWS platform where you log into Conversation Builder directly.<br><br>
Survey bots are supported only in Messaging, not in Live Chat.

### Survey bots vs. custom bots

When creating a post-conversation survey bot, you work in Conversation Builder in the same, general way that you do with a custom bot. Create the bot and define its dialog flow, adding the interactions that meet your survey requirements.

The following are key similarities and differences between building survey bots and custom bots in Conversation Builder.

| Can I...? | Custom bots | Survey bots |
| --- | --- | --- |
| Export and import the bot | Yes | Yes, except the bot's assigned skills are not exported. |
| Create versions and releases | Yes | Yes |
| Preview | Yes |  Yes |
| Deploy the bot | Yes, you manually deploy an agent connector. | No, deployment happens behind the scenes. The bot can receive conversations as soon as you assign it a skill. |
| Log transcripts | Yes | Yes |

{: .important}
There isn't a one-to-one correspondence between survey bots and custom bots. Survey bots are more like "manager" bots. You assign a skill or set of skills to a survey bot. When a conversation ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey. In this way, a *single* survey bot can be responsible for triggering surveys for *multiple* custom bots, all based on skill.

### The survey flow

#### Survey triggering
When a conversation is ended (either by the consumer or the agent), if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey.

The above also means that:

* There is no need to "transfer" to the survey. This happens automatically.
* A conversation that doesn't have an assigned skill can't trigger a survey.

If a conversation is closed automatically because it's been idle for a time, a survey **isn't** triggered.

#### Survey timeout

By default, a survey times out (expires) after one hour, but you can change this time period if desired. You can also configure a "Session Expired" message to send to the consumer if they try to enter text after the session has expired. Both of these settings are found in Bot Settings, discussed farther below.

#### Survey outcomes

A survey can be closed in the following ways:

* The survey is completed.
* The survey times out.

Both outcomes are tracked and reported on as part of the Report Builder, so you can fully analyze the results.

### Prerequisite steps

If you're new to working with survey bots, before you can begin building them, the feature must be enabled in Conversation Builder by LivePerson. Please contact your LivePerson account representative to enable this feature.

Conversely, if you've been using Bot Studio to create and manage survey bots, please see the FAQ section for information on how to change to doing so in Conversation Builder.

### Step 1 - Create the survey bot

1. Log into Conversation Builder.
2. From the Bots dashboard, click **New Bot** in the upper-right corner.
3. In the Choose a Bot Template dialog, select **Survey Bot**.
4. In the Survey Bot dialog, specify the following:
    * **Name**: Enter a name for the bot that's concise and clear.
    * **Description**: Enter a description that's meaningful to you and others. 
    * **Bot Language**: Select a language.
    * **Skill**: Select the skill(s) that will trigger this survey bot. A skill can be assigned to only one survey bot.
5. Click **Create Bot**.

    This creates a survey bot that includes a single dialog of type "Survey" (that's also named "survey" by default). Define the survey in this dialog.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_newSurvey.png">

    For easy visibility, in the dashboard that lists your bots, the skill(s) assigned to a survey bot are listed beneath the bot name.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_dashboard.png">

### Step 2 - Build out the survey bot

#### Adding survey interactions

In the dialog that's of type "Survey," define the survey. There are three types of survey interactions:

* First Call Resolution (FCR)
* Customer Satisfaction (CSAT)
* Net Promoter Score (NPS)

The survey interactions are predefined in the sense that you can't edit their structure, i.e., add or remove answer choices. However, you can change the question and answer text.

{: .important}
In a single survey bot, you can include only one of each survey interaction type.

##### FCR interaction

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_fcr.png">

##### CSAT interaction

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_csat.png">

##### NPS interaction

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_nps.png">

{: .important}
If you change the answer choices for a survey question, remember to update the defined conditions accordingly in the interaction's details.

#### Marking survey questions as optional

To add a Skip option and thereby make a survey question optional, click the **+Skip** response and turn it from Off (blue) to On (white).

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/surveyBot_skip.png">

Clicking **Skip** automatically adds a custom rule for the "skip" response, so you can build out the survey logic as you require.

{: .important}
In an NPS interaction, don't enable Skip if your targeted channel is Facebook. Facebook doesn't support structured content that has more than 11 quick replies. The NPS question plus the Skip option is 12 quick replies. Using Skip will cause the conversation to end abruptly.

#### Adding standard interactions

You can use only a subset of the standard interaction types in the Survey dialog; unavailable interactions are hidden from view on the toolbar.

Use the standard interactions to ask questions that reflect your brand's custom key performance indicators (KPIs) and/or other free-text questions. For example, you might want to obtain the consumer's age.

#### Handling free text answers

The handling of free text answers works in a survey bot just like it does in a custom bot. For example, when presented with the the CSAT yes/no question, if the consumer types "yes" or "Yes" instead of selecting "Yes," the response is understood. If the consumer enters anything else, the fallback response is sent. You can use conditions to catch other patterns if desired.

#### Handling unrecognizable responses

In the survey interactions in a survey bot, the fallback response is required, and there's a default value provided.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_fallback.png">

You can customize the default fallback responses in the survey interactions.

You cannot create a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html).

#### Closing the conversation

As a best practice, end the dialog flow with an interaction whose next action is "Close conversation." This closes the conversation promptly.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_closeConvo.png">

You don't need to include a Text interaction that thanks the consumer for their participation; you can define the Thank You message in the survey bot's settings (discussed below).

### Step 3 - Configure the bot settings

1. Open the survey bot, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) in the upper-left corner, just to the right of the menu bar.
2. Select **Bot Settings**.
3. Configure the survey bot settings as needed; these are described below.
4. Configured other bot settings as needed; these are described [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).
5. Click **Save**.

Survey bot settings include:

- **Enable Bot**: Use this to turn a survey bot on and off. When the bot is online, it responds to user messages. When it is offline, it doesn't. Taking a survey bot offline can be useful if you need to temporarily remove it from your customer traffic flow. The default value is Online.
- **Skill**: If desired, change the skill(s) that will trigger this survey bot.
- **Thank You Message**: Enable this to send a Thank You message before the survey conversation is closed. Then enter the message to send.
- **Session Expired Message**: Enable this to send a Session Expired message when the user enters text after the session has timed out. Then enter the message to send. (For information on the Session Length setting, a related setting that's displayed for all bots, see [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).)

### Step 4 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption, “Survey in progress.”

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/surveyBot_triggerSurvey.png">

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey (if you've specified "Close Conversation" as the next step) or when the survey times out. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### The agent experience

Once a conversation ends and a survey begins, the conversation no longer appears in the Open Connections list in LiveEngage. Instead, it appears in the All Connections list with a status that indicates the survey is in progress:

<img class="fancyimage" style="width:850px" src="img/ConvoBuilder/surveyBot_agent1.png">

If an agent has permissions to view survey results, the agent can see the survey transcript.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/surveyBot_agent2.png">

### The manager experience

In the **Conversations panel** of the **Manager Workspace**, managers can view the survey scores (CSAT and NPS only) for all conversations shown.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_manager1.png">

### Reporting

#### Report Builder
Metrics from the FCR, CSAT, and NPS questions in surveys are captured in LiveEngage and exposed via the [Report Builder](https://knowledge.liveperson.com/data-reporting-report-builder-report-builder-overview.html) application. You'll find this information in the predefined [Survey Dashboard for Messaging](https://knowledge.liveperson.com/data-reporting-messaging-messaging-dashboards-survey-dashboard-for-messaging.html), which you can use out-of-the-box or manipulate to create customized reports.

#### Bot Analytics
In the [Bot Analytics](https://developers.liveperson.com/bot-analytics-overview.html) application, you'll see survey bots reported in the same way as custom bots. There is no difference between the two.

### FAQs

#### How do I deploy a survey bot?

You don't manually deploy a survey bot. When LivePerson enables this feature for your brand, this deploys the underlying system connector that is used. Therefore, **as soon as you create the survey bot and assign it a skill, the bot is active and can receive conversations.**

Typically, brands don't develop in their Production environments, but if you do, for this reason, it's recommended that you assign to the survey bot a "test" skill that isn't used in a production campaign and use that to validate the bot before assigning it a production skill.

#### How do I disable a survey bot?

If you need to temporarily remove a survey bot from your customer traffic flow, you can disable the bot. To do this, set the **Enable Bot** slider to Off in the bot's **Bot Settings**.

#### Are survey bots supported in text-only channels?

Yes, this works just like for a custom bot. The survey questions are displayed as plain text.

#### Can a consumer skip a survey entirely?

There's no way for the consumer to indicate they want to skip the survey entirely (e.g., no Skip button). However, the consumer can close the window to leave the survey.

#### The dialogs in my custom bots end with Close Conversation (LP_CLOSECONVERSATION). Do I need to change this?

Yes, you'll need to update the custom bots to use Close Dialog (LP_CLOSEDIALOG) instead. [Close Dialog](conversation-builder-dialogs-dialog-basics.html#close-the-dialog) triggers a post-conversation survey, but [Close Conversation](conversation-builder-dialogs-dialog-basics.html#close-the-conversation) does not.

#### I'm an existing Bot Studio user. How do I migrate to using Conversation Builder to create and manage survey bots?

If you're an existing Bot Studio user with post-conversation survey bots built in Bot Studio, the Post-Conversation Survey Bots feature is enabled in Conversation Builder by default.

Be aware that bots in Bot Studio and Conversation Builder cannot run side by side. You'll need to manually recreate your existing Bot Studio survey bots in Conversation Builder. 

LivePerson recommends the following workflow:

1. In Conversation Builder, manually recreate your survey bots. (If you're developing in your Production environment, which is not common and not recommended, assign the survey bots to "test" skills that aren't used in a production campaign, so you can test them before assigning production skills to them.) 
2. Test the survey bots.
3. Release the new survey bots to your Production environment.
4. Request that LivePerson switch your brand from triggering surveys from Bot Studio to triggering surveys from Conversation Builder in actual conversations.

{: .important}
While you're completing steps 1 - 3, you can continue to use Bot Studio. Once you complete step 4, you can no longer use Bot Studio. Step 4 is irreversible. Once you are switched over to triggering surveys from Conversation Builder in actual conversations, this cannot be reversed.