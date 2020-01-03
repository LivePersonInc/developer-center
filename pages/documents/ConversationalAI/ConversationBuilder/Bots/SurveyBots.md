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

A survey bot lets you collect feedback from consumers at the end of a conversation, without using the time of a human agent. The bot can ask specialized questions designed to provide CSAT (Customer Satisfaction), FCR (First Contact Resolution), or NPS (Net Promoter Score) metrics; questions that reflect your brand's key performance indicators; or free-text questions. Use a survey bot to measure agent and skill performance and to identify opportunities to improve on your quality targets.

{: .important}
There isn't a one-to-one correspondence between survey bots and custom bots. Survey bots are more like "manager" bots. You assign a skill or set of skills to a survey bot. When a conversation ends, if its last skill matches one assigned to the survey bot, the survey begins. In this way, a single survey bot is responsible for triggering surveys for many custom bots, all based on skill.

### Survey flow

When a conversation ends, if its last skill matches one assigned to the survey bot, the survey begins, and the bot sends the greeting message. The bot then sends the questions one by one based on the survey bot's dialog flow. Upon each consumer response, the bot sends the next question based on the defined logic. Once the consumer finishes answering the questions or if the survey times out, the survey is closed with a closing message. Any message sent by the consumer after the survey is closed opens a new messaging conversation.

#### Survey triggering

- Once the messaging conversation has ended (either by the consumer or the agent) the survey is automatically triggered; there is no need to transfer.
- A survey is triggered based on the last skill of the conversation.
- Only conversations with a skill assigned to them are capable of triggering a survey. If a conversation is “unassigned,” no survey can be triggered.
- A survey is not triggered upon auto close.

#### Survey skip or timeout

In the survey bot's settings, you can configure:

- Specific phrases that, if typed by the consumer, skip and close the survey.
- The amount of time that the survey will remain active before it is automatically closed.

#### Survey outcomes

A survey can be closed in several ways:

- The survey is completed.
- The survey is skipped.
- The survey times out.

Each outcome is tracked and reported on as part of the Report Builder, so you can fully analyze the results.

You can configure a closing message that is sent to the consumer for each of the above survey scenarios.

### Step 1 - Create the bot

1. Log into Conversation Builder.
2. From the Bots dashboard, click **New Bot** in the upper-right corner.
3. In the Choose a Bot Template dialog, select **Survey Bot**.
4. In the Survey Bot dialog, specify the following:
    * **Name**: Enter a name for the bot that's concise and clear.
    * **Description**: Enter a description that's meaningful to you and others. 
    * **Bot Language**: Select a language. This determines the language-specific model for LivePerson NLU; it also supports the proper rendering of left-to-right and right-to-left languages. The language can't be changed afterward.
    * **Skill**: Select the skill(s) that will trigger this survey bot.
5. Click **Create**.

### Step 2 - Build out the bot

#### Marking questions as optional

For each question the brand can add a ‘skip’ button to make it optional

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

### Step 3 - Configure the survey bot settings

1. Open the bot, and click the ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_horizontal.png"> ) in the upper-right corner.
2. Select **Bot Settings** from the menu that appears.

Survey bot settings include:
- **Skill**: If desired, change the skill(s) that will trigger this survey bot.
- **Skip Survey**: Enter the words or phrases that will allow the consumer to skip the survey. If the consumer enters one of these (the exact phrase, not case sensitive), the closing message will be displayed to the consumer, and the bot will end the survey.
- **Closing message when survey is skipped by user**: Enter the closing message to dislay when the survey is skipped by the user.
- **Survey Timeout**: Specify the amount of time that the survey will remain active before it is closed, and the closing message is displayed. The survey timout is calculated from the moment the survey starts until it reaches the timeout.
- **Closing message when survey timeout reached**: Enter the closing message to display when the survey times out.

### Step 4 - Publish the bot

Publishing a survey bot loads it to your LiveEngage account. You **don't** need to deploy a survey bot like you do a custom bot. The Publish process performs all deployment steps behind the scenes.

**To publish a survey bot**

- Click **Publish** in the upper-right corner.

    Once the status changes to Published, the survey bot is live.


### Step 5 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

-add screen here-

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### Reporting

The messaging performance dashboard in Report Builder has been enhanced to include a dedicated “survey data export” sheet containing an in-depth analysis of the new messaging post conversation survey flows. The flows included in Report Builder are based on the ones configured in the LiveEngage Bot Studio.

The new sheet contains an additional set of metrics and attributes which support the following analysis:

Predefined KPIs at the Agent & Skill level: CSAT, NPS, and FCR (pre-calculated)
Detailed brand-level answer distribution per each configured question and answer
Detailed “agent and skill”-level answer distribution per each question and answer
Survey activity and performance, allowing to monitor the response rates for example
Question level performance, allowing to monitor the avg. time to respond for example
In a single messaging conversation followed by the submission of a survey by the consumer, multiple agents and skills may be assigned. To eliminate double counting, and to prepare for our phase 2 development (which expands the attribution model to not just the last agent assigned), the data model has been prepared accordingly. Please see the post conversation survey messaging dashboards for more information.

### The new PCS vs the old CSAT survey

On channels such as web messaging and In-app messaging there is already an existing survey solution where a single CSAT question can be presented to the consumer when the conversation ends. If a brand chooses to shift from the old CSAT survey to the new post conversation survey, it is possible to keep both types of surveys working simultaneously with the following logic:

- If both PCS and old CSAT are enabled, PCS gets the priority and the old CSAT question won’t be displayed.
- If the conversation ends on a device that doesn’t support PCS (for example an app running SDK v3.2 or lower) then the old CSAT question may appear, assuming it was configured to appear.
- If the conversation ends with a skill on which there is not PCS defined, the old CSAT question may appear, if it was enabled.

### FAQs

Text-only channels - The old survey had an "Enable survey for channels that are not compatible with LiveEngage rich content (e.g. SMS)" setting.
New vs. old
Why use this type?
Anything else from the PCS doc
Anything else?
