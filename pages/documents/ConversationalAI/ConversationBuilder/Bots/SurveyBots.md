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

A survey bot lets you collect feedback from consumers at the end of a conversation, without using the time of a human agent. The bot can ask:

* Specialized questions designed to provide CSAT (Customer Satisfaction), FCR (First Contact Resolution), or NPS (Net Promoter Score) metrics
* Questions that reflect your brand's key performance indicators
* Free-text questions

Use a survey bot to measure agent and skill performance and to identify opportunities to improve on your quality targets.

### Survey bots vs. custom bots

Survey bots are like custom bots in many ways, most notably:

* You create a survey bot in the Conversation Builder application in the same way that you create a custom bot. Create the bot and build out its dialog flow, adding the interactions that meet your survey requirements.
* You can create [versions and releases](conversation-builder-versions-releases.html) of survey bots.

However, there are a few important ways that survey bots differ from custom bots:

* You can only use a subset of the standard interaction types in survey bots; unavailable interactions are disabled to enforce this constraint. Also, survey bots have a few interactions that are unique, namely, the CSAT, FCR, and NPS interactions.
* Survey bots have a few, additional bot settings that are unique.
* You *don't* deploy survey bots by creating agent connectors and starting them. Instead, survey bots use a simpler "Publish" process.

All of these differences are discussed in more detail farther below.

{: .important}
There isn't a one-to-one correspondence between survey bots and custom bots. Survey bots are more like "manager" bots. You assign a skill or set of skills to a survey bot. When a conversation with a custom bot ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatically begins the survey. In this way, a *single* survey bot is responsible for triggering surveys for *many* custom bots, all based on skill.

### Survey flow

When a conversation ends, if the conversation's last skill matches one assigned to the survey bot, the survey bot automatially begins the survey, and the bot sends the greeting message.

The bot then sends the survey questions one by one based on the survey bot's dialog flow. Upon each consumer response, the bot sends the next question based on the defined logic. 

When the consumer finishes answering the questions or if the survey times out, the survey is closed with a closing message. Any message sent by the consumer after the survey is closed opens a new messaging conversation.

#### Survey triggering

- When the messaging conversation has ended (either by the consumer or the agent), the survey is automatically triggered; there is no need to "transfer" to the survey.
- A survey is triggered based on the last skill of the conversation.
- Only conversations with a skill assigned to them are capable of triggering a survey. If a conversation is “unassigned,” it can't trigger a survey.
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
    * **Bot Language**: Select a language.
    * **Skill**: Select the skill(s) that will trigger this survey bot.
5. Click **Create**.

### Step 2 - Build out the dialog flow

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

### Step 3 - Configure the bot settings

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

### Step 4 - Publish the bot

Publishing a survey bot loads it to your LiveEngage account. You *don't* need to deploy a survey bot like you do a custom bot. The Publish process performs all deployment steps behind the scenes.

**To publish a survey bot**

- Click **Publish** in the upper-right corner.

    Once the status changes to Published, the survey bot is live.


### Step 5 - Trigger the bot

In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side. Once the conversation closes the survey will be triggered and the agent workspace will show the caption - “Survey in progress”

-add screen here-

While the survey is active the agent won’t be able to write in the conversation. The survey will end when the consumer finishes entering the survey or when the survey timeout is reached. In cases of an error with the survey flow or the survey bot, LiveEngage will close the survey after 48 hours as part of a conversation cleanup process.

### Reporting

The messaging performance dashboard in Report Builder includes a dedicated “survey data export” sheet containing an in-depth analysis of the messaging post conversation survey flows. The flows included in Report Builder are based on the ones configured in the LiveEngage Bot Studio.

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