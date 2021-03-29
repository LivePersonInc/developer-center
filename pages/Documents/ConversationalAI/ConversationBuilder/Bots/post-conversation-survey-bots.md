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

For a more in-depth introduction to surveys and survey metrics, see [here](https://knowledge.liveperson.com/ai-bots-automation-post-conversation-surveys-post-conversation-survey-bot.html) in the Knowledge Center.

{: .important}
To use survey bots created in Conversation Builder, you must be on the LivePerson platform, i.e., you log into Conversation Builder via single sign-on through Conversational Cloud. This feature isn't supported on the AWS platform where you log into Conversation Builder directly.<br><br>Survey bots are supported only in Messaging, not in Live Chat.<br><br>Only English-language survey bots are supported.

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

Both outcomes are tracked and reported on as part of the Analytics Builder, so you can fully analyze the results.

### Prerequisite steps

Before you can begin building survey bots, the feature must be enabled in Conversation Builder by LivePerson. Please contact your LivePerson account representative to enable this feature.

### Creating the survey bot

1. Log into Conversation Builder.
2. From the Bots dashboard, click **New Bot** in the upper-right corner.
3. In the Choose a Bot Template dialog, select **Survey Bot**.
4. In the Survey Bot dialog, specify the following:
    * **Name**: Enter a name for the bot that's concise and clear.
    * **Description**: Enter a description that's meaningful to you and others.
    * **Bot Language**: Select a language.
    * **Skill**: Select the skill(s) that will trigger this survey bot. A skill can be assigned to only one survey bot. You can add skills in Conversational Cloud.
5. Click **Create Bot**.

    This creates a survey bot that includes a single dialog of type "Survey" (that's also named "survey" by default). Define the survey in this dialog.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_newSurvey.png">

    For easy visibility, in the dashboard that lists your bots, the skill(s) assigned to a survey bot are listed beneath the bot name.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_dashboard.png">

### Building out the survey bot

In the dialog that's of type "Survey," define the survey. There are several types of survey questions:

**First Call Resolution (FCR)**

This question is used to measure operational efficiency in resolving consumer issues. This interaction asks a standard FCR question: *Were you able to resolve your inquiry today?* Feedback on this helps you to measure and improve agent/bot and skill performance.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_fcr.png">

**Customer Satisfaction (CSAT)**

Customer Satisfaction (CSAT) metrics are used to measure the frequency at which your brand meets or exceeds consumer expectations. This interaction asks a standard CSAT question: *How would you rate your overall satisfaction with the service you received?*

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_csat.png">

**Net Promoter Score (NPS)**

Net Promoter Score (NPS) metrics are commonly used to measure the loyalty of a consumer to a brand. This interaction asks a standard NPS question: *Based on your experience today, how likely are you to recommend us to a friend or colleague?*

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_nps.png">

**Closed-ended, custom**

A closed-ended question is a multiple choice question that has a custom, predefined list of answer choices. Use this interaction when you need quantifiable data and want to categorize your consumers.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_closed.png">

{: .important}
When adding a closed-ended, custom question, remember to update the conditions in each, corresponding rule that is added automatically.

**Open-ended, custom**

An open-ended question allows the consumer to provide an answer in their own words, instead of being constrained by a predefined list of answer choices. Use this interaction when you want to offer the opportunity for this type of free-form feedback.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_open.png">

FCR, CSAT and NPS questions:
* These are predefined in the sense that you can't edit their structure, i.e., add or remove answer choices. However, you can change the question and answer text.
* In a survey bot, you can include only one of each of these.
* You can add a skip option to each of these.

Closed-ended and open-ended, custom questions:
* In a survey bot, you can include as many of these as required.
* You can add a skip option to closed-ended questions but not to open-ended questions. 

{: .important}
When the target channel is Apple Business Chat, applicable survey questions are automatically sent to the consumer as List Picker interactions.

#### Customizing interaction text (FCR, CSAT and NPS)

You can customize the question text and the answer choice text for the FCR, CSAT and NPS interactions. To do so, simply replace the text with your own. For example, you might want to change the language that’s used.

When working with the answer choices, if you move your mouse over an answer, you can see both the answer text (text value) and the actual, underlying value that’s reported to [Analytics Builder](https://knowledge.liveperson.com/data-reporting-report-builder-report-builder-overview.html).

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_actualvalue1.png">

The actual value never changes, not even when you change the answer text (text value).

{: .important}
Take care when changing the answer text; remember to update the conditions in the rules accordingly.

#### Reordering answer choices (FCR, CSAT and NPS)

Reordering an answer choice has no impact on its text value or actual value. You must manually change the answer text (text value) if desired. The actual value never changes.

To reorder an answer choice, select it so that it’s in focus, and click the < (Previous) or > (Next) button.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/surveyBot_reorderanswers.png">

Alternatively, you can use the hotkeys:

* Previous = Shift + Ctrl
* Next = Shift + Alt

#### Making survey questions optional

To add a Skip option to an FCR, CSAT or NPS question and thereby make the question optional, click the **+Skip** response and turn it from Off (blue) to On (white).

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/surveyBot_skip.png">

Clicking **Skip** automatically adds a custom rule for the "skip" response, so you can build out the survey logic as you require.

To add a Skip option to a closed-ended, custom question, manually add "Skip" as one of the answer choices. This too adds a custom rule for the "skip" response, so you can build out the survey logic as you require.

You cannot add a Skip opton to an open-ended, custom question.

{: .important}
In an NPS interaction, don't enable Skip if your targeted channel is Facebook. Facebook doesn't support structured content that has more than 11 quick replies. The NPS question plus the Skip option is 12 quick replies. Using Skip will cause the conversation to end abruptly.

#### Configuring the display format

In the **Advanced Settings** of many of the survey interactions, you can configure two display settings:

* Display Choices As
* Text Only Fallback > List Style for Choices

Use the **Display Choices As** setting to specify whether and how to send the answer choices to the consumer. You can select:

* **Quick Reply**: Select this to send the answer choices as quick replies in channels that support them. In text-based channels, the format specified in **List Style for Choices** will be used.
* **Button**: Select this to send the answer choices as buttons in channels that support them. In text-based channels, the format specified in **List Style for Choices** will be used.
* **Do not display**: Select this to hide the answer choices in *all* channels. Only the survey question will be sent to the consumer. If you select this, the **List Style for Choices** setting plays no role.

<img style="width:500px" src="img/ConvoBuilder/surveyBot_displayChoices.png">

When you deploy your survey bot to a channel that doesn't support rich content formatting (for example, SMS), the survey questions are automatically sent as plain text. Use the **List Style for Choices** setting to control how the choices are presented in a text-only fallback scenario. You can select:

* **1. 2. 3. 4.** or **a. b. c. d.**: Select either of these to send the answer choices using the indicated format.
* **no list**: Select this to hide the answer choices. Only the survey question will be sent to the consumer.

#### Handling free text answers

The handling of free text answers works in a survey bot just like it does in a custom bot. For example, when presented with the the CSAT yes/no question, if the consumer types "yes" or "Yes" instead of selecting "Yes," the response is understood. If the consumer enters anything else, the fallback response is sent. You can use conditions to catch other patterns if desired.

#### Handling unrecognizable responses

In the survey interactions in a survey bot, the fallback response is required, and there's a default value provided.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_fallback.png">

You can customize the default fallback responses in the survey interactions.

You cannot create a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html).

#### Adding standard interactions

You can use only a subset of the standard interaction types in the Survey dialog; unavailable interactions are hidden from view on the toolbar.

#### Closing the survey conversation

Close a survey conversation in one of two ways:

* Use [Close Dialog](conversation-builder-dialogs-dialog-basics.html#close-the-dialog).
* If you're adding support for email of the survey transcript to the consumer, use "Next Interaction." (Adding this support is discussed farther below.)

You don't need to include a Text interaction that thanks the consumer for their participation; you can define the Thank You message in the survey bot's settings (discussed below).

{: .important}
Make sure that a custom bot *that triggers a survey bot* uses Close Dialog. [Close Dialog](conversation-builder-dialogs-dialog-basics.html#close-the-dialog) allows a post-conversation survey to be triggered, but [Close Conversation](conversation-builder-dialogs-dialog-basics.html#close-the-conversation) does not.

### Configuring the survey bot's settings

1. Open the survey bot, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) in the upper-left corner, just to the right of the menu bar.
2. Select **Bot Settings**.
3. Configure the survey bot settings as needed; these are described below.
4. Configured other bot settings as needed; these are described [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).
5. Click **Save**.

Survey bot settings include:

- **Skill**: If desired, change the skill(s) that will trigger this survey bot.
- **Email Transcript**: Enable this to offer an emailed transcript of the survey to the consumer. For more on this, see the next section.
- **Thank You Message**: Enable this to send a Thank You message before the survey conversation is closed. Then enter the message to send.
- **Session Expired Message**: Enable this to send a Session Expired message when the user enters text after the session has timed out. Then enter the message to send. (For information on the **Session Length** setting, a related setting that's displayed for all bots, see [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).)

### Adding support for emailed transcripts

If desired, you can add support for emailing a transcript of the main conversation to the consumer, and grant the consumer the option to accept or decline this at the end of the survey.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/surveyBot_offerTranscript.png">

There are a few steps involved in the setup.

First, in the Survey dialog, set the last interaction’s Next Action to “Next Interaction.”

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_nextAction.png">

This must be done so that, as a last step, the conversation flow can be directed to a hidden, final interaction that offers the emailed transcript.

Second, configure the bot’s **Bot Settings** to add support:

1. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) in the upper-left corner, just to the right of the menu bar.
2. Select **Bot Settings**.
3. Click **More Settings** to display all the settings.
4. Scroll down to **Email Transcript**, and enable the toggle.
5. Configure the settings that appear:
    * **Email Transcript Message**: Enter the message to send to the consumer to offer an emailed transcript, for example, “To receive a transcript of this survey, enter your email address. Or, select Decline.”
    * **Sender Name**: Enter the name of the sender of the email.
    * **Sender Email**: Enter the email address of the sender of the email.
    * **Interaction Delay**: Set the time delay in milliseconds before sending the message to offer an emailed transcript. Often, a delay is added to present a more human-like experience. You can specify a maximum value of 10000 milliseconds (10 seconds).
    * **Fallback Response**: Enter the message to send to the consumer when the consumer’s response isn’t understood by the bot, i.e., when the consumer doesn’t enter a valid email address or select to skip the survey. For example, “Please enter a valid email address, or select Decline.”
    * **Display Choices As**: Select whether and how to display the option to skip the survey. You can display the option as a button or a quick reply.
    * **Skip Button Text**: Enter the text to display on the button/quick reply for skipping the survey, for example, “Decline” or “Skip.”
6. Click **Save**.

### Deploying the survey bot

You don't manually deploy a survey bot. When LivePerson enables this feature for your brand, this deploys the underlying agent connector that's shared by all survey bots. Therefore, **as soon as you create a survey bot and assign it a skill, the bot is active and can receive conversations.** Typically, brands don't develop in their Production environments, but if you do, for this reason, it's recommended that you assign to the survey bot a "test" skill that isn't used in a production campaign and use that to validate the bot before assigning it a production skill.

### Triggering the survey bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes, the survey will be triggered, and the agent workspace will show the caption, “Survey in progress.”

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/surveyBot_triggerSurvey.png">

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey (if you've specified "Close Conversation" as the next action) or when the survey times out. In cases of an error with the survey flow or the survey bot, Conversational Cloud will close the survey after 48 hours as part of a conversation cleanup process.

### The agent experience

Once a conversation ends and a survey begins, the conversation no longer appears in the **Open Conversations** list in Conversational Cloud. Instead, it appears in the **All Conversations** list with a status that indicates the survey is in progress:

<img class="fancyimage" style="width:850px" src="img/ConvoBuilder/surveyBot_agent1.png">

If an agent has permissions to view survey results, the agent can see the survey transcript.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/surveyBot_agent2.png">

### The manager experience

In the **Conversations panel** of the **Manager Workspace**, managers can view the survey scores (CSAT and NPS only) for all conversations shown.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_manager1.png">

### Reporting

#### Analytics Builder
Metrics from survey questions are captured in Conversational Cloud and exposed via the [Analytics Builder](https://knowledge.liveperson.com/data-reporting-report-builder-report-builder-overview.html) application. You'll find this information in the predefined [Survey Dashboard for Messaging](https://knowledge.liveperson.com/data-reporting-messaging-messaging-dashboards-survey-dashboard-for-messaging.html), which you can use out-of-the-box or manipulate to create customized reports.

#### Bot Analytics
In the [Bot Analytics](bot-analytics-overview.html) application, you'll see survey bots reported in the same way as custom bots. There is no difference between the two.

### Monitoring survey bots

If you have Bot Status Access [permissions](bot-accounts-permissions.html), you can use the Bots Status application that's intended for monitoring agent connectors to [monitor your survey bots](bots-status-managing-post-conversation-survey-bots.html). In Bots Status, you can redeploy the connector as a troubleshooting technique.

### FAQs

#### I currently use Bot Studio to create survey bots. How do I migrate to using Conversation Builder?

See [this topic](https://knowledge.liveperson.com/ai-bots-automation-post-conversation-surveys-migrating-from-bot-studio-to-conversation-builder.html) in the Knowledge Center for information on how to make the switch.

#### How do I disable a survey bot?

If you need to temporarily remove a survey bot from your customer traffic flow (i.e., prevent it from triggering), access the bot's **Skill** setting in **Bot Settings**, and remove the assigned skill(s).

#### Are survey bots supported in text-only channels?

Yes, this works just like for a custom bot. The survey questions are displayed as plain text.

#### Can a consumer skip a survey entirely?

There's no way for the consumer to indicate they want to skip the survey entirely (e.g., no Skip button). However, the consumer can close the window to leave the survey.