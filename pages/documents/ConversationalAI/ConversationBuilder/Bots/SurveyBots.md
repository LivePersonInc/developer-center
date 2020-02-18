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

* Specialized questions designed to provide First Contact Resolution (FCR), Customer Satisfaction (CSAT), and Net Promoter Score (NPS) survey metrics
* Questions that reflect your brand's key performance indicators
* Free-text questions

Use a survey bot to measure bot/agent and skill performance and to identify opportunities to improve on your quality targets.

<img style="width:400px" src="img/ConvoBuilder/surveyBot_example.png">

### Survey bots vs. custom bots

When creating a survey bot, you work in Conversation Builder in the same, general way that you do with a custom bot. Create the bot and define its dialog flow, adding the interactions that meet your survey requirements.

The following are key similarities and differences between survey bots and custom bots.

| | Survey bots | Custom bots |
| --- | --- | --- |
| Import and export bot | | Yes |
| Create versions and releases | | Yes |
| Preview | Yes | Yes |
| Deploy bot | Yes, via a Publish mechanism | Yes, via deployment of an agent connector |
| Log transcripts | Yes | Yes |

{: .important}
There isn't a one-to-one correspondence between survey bots and custom bots. Survey bots are more like "manager" bots. You assign a skill or set of skills to a survey bot. When a conversation ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey. In this way, a *single* survey bot is responsible for triggering surveys for *many* custom bots, all based on skill.

### The survey flow

#### Survey triggering
When a conversation ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey, and the bot sends the greeting message. The bot then sends the survey questions one by one based on the survey bot's dialog flow.

The above also means that:

* There is no need to "transfer" to the survey. This happens automatically.
* A conversation that doesn't have an assigned skill can't trigger a survey.

Additionally, if a conversation is closed automatically because it's been idle for a time, a survey isn't triggered.

#### Survey skip or timeout

In the survey bot's settings, you can configure:

- Specific phrases that, if typed by the consumer, skip and close the survey.
- The amount of time that the survey will remain active before it is closed automatically.

#### Survey outcomes

A survey can be closed in several ways:

- The survey is completed.
- The survey is skipped.
- The survey times out.

Each outcome is tracked and reported on as part of the Report Builder, so you can fully analyze the results.

You can provide a closing message that is sent to the consumer for each of the above survey scenarios.

### Step 1 - Prequisite steps

Some setup of your LiveEngage environment is required before using this feature. Please contact your LivePerson account representative to enable this feature. 

### Step 2 - Create the bot

1. Log into Conversation Builder.
2. From the Bots dashboard, click **New Bot** in the upper-right corner.
3. In the Choose a Bot Template dialog, select **Survey Bot**.
4. In the Survey Bot dialog, specify the following:
    * **Name**: Enter a name for the bot that's concise and clear.
    * **Description**: Enter a description that's meaningful to you and others. 
    * **Bot Language**: Select a language.
    * **Skill**: Select the skill(s) that will trigger this survey bot. A skill can't be assigned to more than one survey bot.
5. Click **Create Bot**.

### Step 3 - Build out the dialog flow

In this step, you build out the dialog flow using the available interactions to define the survey and its logic.

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
In an NPS interaction, don't enable Skip if your targeted channel is Facebook. Facebook doesn't support structured content that has more than 11 quick replies. The NPS question and skip is 12 quick replies. Using Skip will cause the conversation to end abruptly.

#### Marking questions as optional

To add a Skip option and thereby make a survey question optional, click the **+Skip** response and turn it from Off (blue) to On (white).

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_skip.png">

#### Making display decisions

Use the **Display choices as** setting on the **Settings** tab in the **Interaction Details** of a survey interaction to select whether to display the response choices as quick replies (the default) or buttons.

#### Adding standard interactions

You can use only a subset of the standard interaction types in survey bots; unavailable interactions are hidden from view on the toolbar.

Use the standard interactions to ask questions that reflect your brand's custom key performance indicators (KPIs) and/or other free-text questions. For example, you might want to obtain the consumer's age.

#### Handling free text answers

Another use for free text is to enter an answer for a question. In order to add a free text phrase that the bot would recognize for a button or quick reply, go to the brick you want to set a free text phrase for. Under the Setting Action page, click on the “Set additional free text answers” for the button you want and enter the phrases using a comma to separate the answers. For example, the user can type in ‘yeah’ or ‘Ya’ and the bot will recognize this as a valid response.

The user will need to enter the exact phrase in order for it to match, however, it is not case sensitive.

For questions that are not ‘free text’ questions, the consumer will be asked to choose from a list of answers (either shown in quick replies or in the card buttons).

For each button or quick reply, the brand can also configure phrases which if typed by the consumer would be recognized by the bot as a valid answer.

#### Handling unrecognizable responses

When the bot does not recognize user text, a warning message will appear prompting the user to select one of the quick replies or buttons presented. After a configurable amount of time, the bot will automatically end the survey. The response to unrecognized user text as well as the number of unrecognizable errors allowed can be configured in the survey settings.

In case the consumer types in free text that is not recognized as a valid answer, the bot will send an error message and resend the last question again

After X times which the user received an error, the bot will automatically close the dialog.

#### Supporting textual channels

When the setting is enabled, every brick within the survey receives a “Text Fallback” field that is sent instead of the structured content whenever the survey is served on a skill associated with a textual channel or a channel that is not compatible with the LivePerson rich content framework.

Once enabled, make sure to fill in the desired text in the Text Fallback Tab. This tab will appear next to the Action and Design tabs of the Settings window once enabled.

#### Adding a closing message for survey completion

Remember to add a closing message at the end of the flow to thank the consumer for completing the survey.

(In the bot's settings, you'll define the closing messages for when the survey is skipped or times out.)

### Step 4 - Configure the bot settings

1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.
3. Configure the survey bot settings as needed; these are described below.
4. Configured other bot settings as needed; these are described [here](conversation-builder-bots-bot-basics.html#configure-bot-settings).
5. Click **Save**.

Survey bot settings include:
- **Skill**: If desired, change the skill(s) that will trigger this survey bot.
- **Skip Survey**: Enter the words or phrases that will allow the consumer to skip the survey. If the consumer enters one of these (the exact phrase, not case sensitive), the closing message will be displayed to the consumer, and the bot will end the survey.
- **Closing message when survey is skipped by user**: Enter the closing message to dislay when the survey is skipped by the user.
- **Survey Timeout**: Specify the amount of time that the survey will remain active before it is closed, and the closing message is displayed. The survey timout is calculated from the moment the survey starts until it reaches the timeout.
- **Closing message when survey timeout reached**: Enter the closing message to display when the survey times out.

### Step 5 - Publish the bot

Publishing a survey bot loads it to your LiveEngage account. You *don't* need to deploy a survey bot like you do a custom bot. The Publish process performs all deployment steps behind the scenes.

**To publish a survey bot**

- Click **Publish** in the upper-right corner.

    Once the status changes to Published, the survey bot is live.


### Step 6 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

-add screen here-

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### The agent experience

Once a conversation ends and a survey begins, the conversation no longer appears in the Open Connections list in LiveEngage. Instead, it appears in the All Connections list with a status that indicates the survey is in progress:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_agent1.png">

If an agent has permissions to view survey results, the agent can see the survey transcript.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/surveyBot_agent2.png">

### Reporting

The messaging performance dashboard in Report Builder includes a dedicated “survey data export” sheet containing an in-depth analysis of messaging "post conversation survey" flows. The flows included in Report Builder are based on the ones configured in Conversation Builder.

The sheet contains an additional set of metrics and attributes that support the following analysis:

* Predefined key performance indicators (KPIs) at the agent and skill level: CSAT, NPS, and FCR (pre-calculated)
* Detailed, brand-level answer distribution per each configured question and answer
* Detailed, agent-level and skill-level answer distribution per each question and answer
* Survey activity and performance, so you can do things like monitor the response rates
* Question-level performance, so you can do things like monitor the average time to respond

In a single messaging conversation followed by the submission of a survey by the consumer, multiple agents and skills might be assigned. To eliminate double counting, and to prepare for our phase 2 development (which expands the attribution model to not just the last agent assigned), the data model has been prepared accordingly. Please see the post conversation survey messaging dashboards for more information.

### FAQs

#### Q: Does this survey work with the older Post Conversation Survey (PCS) created in Bot Studio and/or the even older CSAT survey?

On channels such as Web Messaging and In-app Messaging, there is already an existing survey solution where a single CSAT question can be presented to the consumer when the conversation ends. If you choose to shift from the old CSAT survey to the new post conversation survey, it is possible to keep both types of surveys working simultaneously with the following logic:

- If both the PCS and old CSAT survey are enabled, the PCS gets the priority, and the old CSAT question won’t be displayed.
- If the conversation ends on a device that doesn’t support the PCS (for example, an app running SDK v3.2 or lower), then the old CSAT question might appear, assuming it was configured to appear.
- If the conversation ends with a skill on which there isn't a PCS defined, the old CSAT question might appear, if it was enabled.

#### Q: I configured and published a survey bot, but, when the conversation ends, I get the old CSAT question survey? Why?

Make sure that the conversation ends with a skill that is mapped to the survey bot you’ve created. The skill mapping is done when you create the survey bot, and you can change it in the survey bot's Bot Settings.

#### Q: When I end a messaging conversation and begin my survey, I don't see my latest changes. Why?

For the changes you make in Conversation Builder to take effect, you need to publish them. Click the "Publish" button in the upper-right corner, and then start a new messaging conversation.

#### Q: I created a bot that was assigned with the “Survey bot” profile using the LiveEngage user creation UI. Why can’t I add it in Conversation Builder?

The survey bot user is added automatically by Conversation Builder when you press “Add survey bot” in the Conversation Builder UI. This means that the Admin doesn’t need to create a bot user before going to Conversation Builder.

To resolve the issue, delete any bot user that was assigned with the “Survey bot” profile, and try to add the bot again using Conversation Builder.

#### Q: I added a survey bot using Conversation Builder, but I can’t see its user in the LiveEngage UI. Why?

When Conversation Builder creates the survey bot user, it is created as a system user. This means that the survey bot user doesn’t appear as an agent in LiveEngage.

#### Q: On Facebook, when I send out an NPS question with the skip button, the conversation ends abruptly. Why?

Unfortunately, Facebook doesn’t support sending structured content that has more than 11 quick replies. The NPS question and skip is 12 quick replies.

#### Q: Something has changed in my survey, and I’m not sure who made the change. How can I find this out?

Like for all bots, changes to a survey bot are tracked in the bot's change history. You can access this by clicking the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner and then selecting **Bot Change History** from the menu that appears.