---
pagename: Survey Bots
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-survey-bots.html
indicator: both
---

### What's a survey bot?

A survey bot lets you collect feedback from consumers at the end of a conversation with a custom bot or human agent. The survey bot can ask:

* Specialized questions designed to provide First Call Resolution (FCR), Customer Satisfaction (CSAT), and Net Promoter Score (NPS) survey metrics
* Questions that reflect your brand's key performance indicators
* Free-text questions

Use a survey bot to measure bot/agent and skill performance and to identify opportunities to improve on your quality targets.

<img style="width:400px" src="img/ConvoBuilder/surveyBot_example.png">

{: .important}
To use survey bots created in Conversation Builder, you must be on the LivePerson platform where you log into Conversation Builder via single sign-on through LiveEngage. This feature isn't supported on the AWS platform, i.e., if you're logging into Conversation Builder directly.

### Survey bots vs. custom bots

When creating a survey bot, you work in Conversation Builder in the same, general way that you do with a custom bot. Create the bot and define its dialog flow, adding the interactions that meet your survey requirements.

The following are key similarities and differences between survey bots and custom bots.

| | Custom bots | Survey bots |
| --- | --- | --- |
| Export and import the bot | Yes | Yes, except the bot's assigned skills are not exported. |
| Create versions and releases | Yes | Yes |
| Preview | Yes |  Yes |
| Deploy the bot | Yes, you manually deploy an agent connector. | No, deployment happens behind the scenes. The bot can receive conversations as soon as you assign it a skill. |
| Log transcripts | Yes | Yes |

{: .important}
There isn't a one-to-one correspondence between survey bots and custom bots. Survey bots are more like "manager" bots. You assign a skill or set of skills to a survey bot. When a conversation ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey. In this way, a *single* survey bot is responsible for triggering surveys for *many* custom bots, all based on skill.

### The survey flow

#### Survey triggering
When a conversation is ended (either by the consumer or the agent), if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey.

The above also means that:

* There is no need to "transfer" to the survey. This happens automatically.
* A conversation that doesn't have an assigned skill can't trigger a survey.

If a conversation is closed automatically because it's been idle for a time, a survey **isn't** triggered.

#### Survey skip 

The consumer can skip a survey in two ways:

* Click the "Skip" button.
* Enter the word "skip."

#### Survey timeout

A survey times out (expire) after XXXX. You can configure a "Session Expired" message to send to the consumer if they try to enter text after the session has expired.

#### Survey outcomes

A survey can be closed in the following ways:

* The survey is completed.
* The survey is skipped.
* The survey times out.

Each outcome is tracked and reported on as part of the Report Builder, so you can fully analyze the results.

### Step 1 - Prequisite steps

Before you can dive into creating survey bots in Conversation Builder, there are a few, prerequisite setup steps that must be performed.

#### Step 1A - Disable Bot Studio

If you're an existing Bot Studio user, you'll need to disable Bot Studio before beginning with survey bots in Conversation Builder. The two *cannot* be run side by side, which also means you'll need to recreate your existing Bot Studio survey bots in Conversation Builder.

**To disable Bot Studio**

1. a
2. b
3. c

#### Step 1B - Enable survey bots in Conversation Builder

Please contact your LivePerson account representative to enable survey bots in Conversation Builder. This is done by LivePerson enabling the following AC feature flags:

* Common.API_User_Login
* Common.Async_Messaging
* Common.Messaging_Survey
* Common.RichContent

### Step 2 - Create the survey bot

1. Log into Conversation Builder.
2. From the Bots dashboard, click **New Bot** in the upper-right corner.
3. In the Choose a Bot Template dialog, select **Survey Bot**.
4. In the Survey Bot dialog, specify the following:
    * **Name**: Enter a name for the bot that's concise and clear.
    * **Description**: Enter a description that's meaningful to you and others. 
    * **Bot Language**: Select a language.
    * **Skill**: Select the skill(s) that will trigger this survey bot. A skill can't be assigned to more than one survey bot.
5. Click **Create Bot**.

    This creates a survey bot that includes a single dialog of type "Survey." Define the survey in this dialog.

### Step 3 - Build out the survey bot

#### Adding survey interactions

There are a few, predefined interactions that are available only to survey bots, namely, the FCR, CSAT, and NPS interactions. They're predefined in the sense that you can't edit their structure, i.e., add or remove answer choices. However, you can change the question and answer text.

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

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_skip.png">

{: .important}
In an NPS interaction, don't enable Skip if your targeted channel is Facebook. Facebook doesn't support structured content that has more than 11 quick replies. The NPS question and skip is 12 quick replies. Using Skip will cause the conversation to end abruptly.

#### Adding standard interactions

You can use only a subset of the standard interaction types in the Survey dialog; unavailable interactions are hidden from view on the toolbar.

Use the standard interactions to ask questions that reflect your brand's custom key performance indicators (KPIs) and/or other free-text questions. For example, you might want to obtain the consumer's age.

#### Making display decisions

Use the **Display choices as** setting on the **Settings** tab in the **Interaction Details** of a survey interaction to select whether to display the response choices as quick replies (the default) or buttons.

#### Handling free text answers

Free text answers work in a survey bot just like they do in a custom bot. For example, when presented with the the CSAT yes/no question, if the consumer types "yes" or "Yes" instead of selecting "Yes," the response is understood. If the consumer enters anything else, the fallback response is sent. You can use conditions to catch other patterns if desired.

#### Handling unrecognizable responses

Fallback works in a survey bot just like it does in a custom bot; the only difference is that, in a survey bot, a Fallback dialog isn't created for you automatically.

If you'd like to override the default, built-in fallback response, create a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html) and customize the response.

#### Closing the conversation

As a best practice, end the dialog flow with an interaction whose next step is "Close conversation." This closes the conversation promptly.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_closeConvo.png">

You don't need to include a Text interaction that thanks the consumer for their participation; you can define the Thank You message in the survey bot's settings (discusssed below).

### Step 4 - Configure the bot settings

1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.
3. Configure the survey bot settings as needed; these are described below.
4. Configured other bot settings as needed; these are described [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).
5. Click **Save**.

Survey bot settings include:
- **Enable Bot**: If you need to temporarily remove a survey bot from your customer traffic flow, you can disable the bot using this setting.
- **Skill**: If desired, change the skill(s) that will trigger this survey bot.
- **Thank You Message**: Enable this to send a Thank You message before the survey conversation is closed. Then enter the message to send.
- **Session Expired Message**: Enable this to send a Session Expired message when the user enters text after the session has expired. Then enter the message to send.



- **Skip Survey**: Enter the words or phrases that will allow the consumer to skip the survey. If the consumer enters one of these (the exact phrase, not case sensitive), the closing message will be displayed to the consumer, and the bot will end the survey.
- **Closing message when survey is skipped by user**: Enter the closing message to dislay when the survey is skipped by the user.
- **Survey Timeout**: Specify the amount of time that the survey will remain active before it is closed, and the closing message is displayed. The survey timout is calculated from the moment the survey starts until it reaches the timeout.
- **Closing message when survey timeout reached**: Enter the closing message to display when the survey times out.

### Step 5 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

-add screen here-

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### The agent experience

Once a conversation ends and a survey begins, the conversation no longer appears in the Open Connections list in LiveEngage. Instead, it appears in the All Connections list with a status that indicates the survey is in progress:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_agent1.png">

If an agent has permissions to view survey results, the agent can see the survey transcript.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/surveyBot_agent2.png">

### The manager experience

In the **Conversations panel** of the **Manager Workspace**, managers can view the survey scores for all conversations shown.

<img class="fancyimage" style="width:950px" src="img/ConvoBuilder/surveyBot_manager1.png">

Notet that the Meaningful Connection Score (MCS) represents the First Contact Resolution (FCR) score.

### Reporting

#### Report Builder
Metrics from the FCR, CSAT, and NPS questions in surveys are captured in LiveEngage and exposed via the Report Builder application. You'll find this information in the survey dashboards for messaging and live chat.

#### Bot Analytics
In the Bot Analytics application, you'll see survey bots reported in the same way as custom bots. There is no differentiation.

### FAQs

#### How do I deploy a survey bot?

You don't manually deploy a survey bot. When LivePerson enables this feature for your brand, this deploys the underlying system connector that is used. Therefore, **as soon as you create the survey bot and assign it a skill, the bot is active and can receive conversations.**

Typically, brands don't develop in their Production environments, but if you do, for this reason, it's recommended that you assign to the survey bot a "test" skill that isn't used in a production campaign and use that to validate the bot before assigning a production skill.

#### How do I disable a survey bot?

If you need to temporarily remove a survey bot from your customer traffic flow, you can disable the bot. To do this, set the **Enable Bot** slider to Off in the bot's [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings).

#### Are survey bots supported in text-only channels?

Yes, this works just like for a custom bot. The survey questions are displayed as plain text.