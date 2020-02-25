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

{: .important}
This feature isn't supported on the AWS platform, i.e., if you're logging into Conversation Builder directly. This feature is only supported on the LivePerson platform where you log into Conversation Builder via single sign-on through LiveEngage.

### Survey bots vs. custom bots

When creating a survey bot, you work in Conversation Builder in the same, general way that you do with a custom bot. Create the bot and define its dialog flow, adding the interactions that meet your survey requirements.

The following are key similarities and differences between survey bots and custom bots.

| | Custom bots | Survey bots |
| --- | --- | --- |
| Export and import bot | Yes | Yes, except the bot's assigned skills are not exported. |
| Create versions and releases | Yes | Yes |
| Preview | Yes |  Yes |
| Deploy bot | Yes, you manually deploy an agent connector. | No, deployment happens behind the scenes. The bot can receive conversations as soon as you assign it a skill. |
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

Some setup of your LiveEngage environment is required before using this feature. Please contact your LivePerson account representative to enable this feature; this is done by LivePerson enabling the following AC feature flags:

* Common.Async_Messaging
* Common.Messaging_Survey
* Common.RichContent
* Common.API_User_Login

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

#### Marking questions as optional

To add a Skip option and thereby make a survey question optional, click the **+Skip** response and turn it from Off (blue) to On (white).

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_skip.png">

{: .important}
In an NPS interaction, don't enable Skip if your targeted channel is Facebook. Facebook doesn't support structured content that has more than 11 quick replies. The NPS question and skip is 12 quick replies. Using Skip will cause the conversation to end abruptly.

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

#### Closing the conversation

End the dialog flow with a text statement that contains the special string [LP_CLOSECONVERSATION](conversation-builder-dialogs-dialog-basics.html#lp_closeconversation). This is necessary to close the conversation.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/surveyBot_closeConvo.png">

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

### Step 5 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

-add screen here-

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### The agent experience

Once a conversation ends and a survey begins, the conversation no longer appears in the Open Connections list in LiveEngage. Instead, it appears in the All Connections list with a status that indicates the survey is in progress:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_agent1.png">

If an agent has permissions to view survey results, the agent can see the survey transcript.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/surveyBot_agent2.png">

### Reporting

#### Report Builder
Metrics from the FCR, CSAT, and NPS questions in surveys are captured in LiveEngage and exposed via the Report Builder application. You'll find this information in the survey dashboards for messaging and live chat.

#### Bot Analytics
In the Bot Analytics application, you'll see survey bots reported in the same way as custom bots. There is no differentiation.

### FAQs

#### Q: How do I deploy a survey bot?

You don't need to manually deploy a survey bot. When LivePerson enables this feature for your brand, this enables the underlying agent connector that is used. **As soon as you create the survey bot and assign it a skill, it is active and can receive conversations.**

Typically, brands don't develop in their Production environments, but if you do, for this reason, it's recommended that you assign to the survey bot a "test" skill that isn't used in a production campaign and use that to validate the bot before assigning to it a production skill.

#### Q: How do I disable a survey bot?

If you need to temporarily remove a survey bot from your customer traffic flow, you can disable the bot. To do this, set the **Enable Bot** slider to Off in the bot's [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings).

#### Q: I'm using the older Post Conversation Survey created in Bot Studio, but I want to migrate to using survey bots created in Conversation Builder. What do I need to do?

If you want to move completely to using Conversation Builder to create survey bots, ask your LivePerson account representative to 1) enable this feature as described earlier in this topic and 2) disable Bot Studio. That's all that's required. You can then use Conversation Builder to create the survey bots that you require and assign them to the skills that will trigger them.

You can also run the older Post Conversation Survey alongside survey bots created in Conversation Builder. In this case, you'll still need to enable this feature, but Bot Studio should be kept enabled. This means that you'll have some skills that trigger the old Post Conversation Survey and other skills that trigger the survey bots you've created in Conversation Builder.