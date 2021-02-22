---
pagename: Meaningful Automation Conversation Score
sitesection: Documents
categoryname: Hidden
documentname: Hidden
permalink: hidden-meaningful-automation-conversation-score.html
indicator: both
layout: hidden-layout
---

### Introduction

LivePerson is pleased to announce the *Beta release* of the Meaningful Automation Conversation Score or MACS, which is a new measure of bot performance.

### What is MACS?

A Meaningful Automation Conversation Score or MACS is a measure of the quality of a bot conversation. 

LivePerson has found through research that consumer effort and emotion are key determiners in how the consumer perceives the quality of a conversational experience. Given this, a MACS is calculated by identifying and quantifying this within the conversation. Failure points within the conversation’s structure are detected and used to derive a score, for example: 

* Did the bot understand the consumer’s question? 
* Was the consumer stuck in an endless loop? 
* Did a bad transfer to an agent occur?

Here below is part of a conversation with two types of failure points:

<img style="width:800px" src="img/ConvoBuilder/macs_example_conv.png">

A MACS is calculated for each bot conversation based on failure points like these above. The conversation is classified with a MACS 1, 2 or 3 where:

* MACS 1 = Bad
* MACS 2 = Fair
* MACS 3 = Good

An average score (a floating number) is also calculated for each bot to indicate overall bot performance.

<img style="width:800px" src="img/ConvoBuilder/macs_average_score.png">

Scoring like this makes it fast and easy to understand how efficient and fluid a bot conversation was, and a bot’s performance overall. With this knowledge, you can take action and tune your low-performing bots for improved performance.

#### Constraints and caveats
* MACS scoring is only available for the North America region, and only for Messaging, not for Chat.
* MACS scoring is only available for bots built in Conversation Builder. For a third-party bot, “N/A” for “Not Applicable” is displayed as the MACS score.

### Why use MACS?

Other measures can inform you about the quality of conversations, but they do have some shortcomings when it comes to conversations with bots:

* **Post-conversation surveys (PCS)**, **CSAT** and **NPS**: These measures:
    * Are offered when the conversation is closed, but many bot conversations never reach that point.
    * Have a low response rate, and when people do respond, they are not a representative sample. Typically, they are more extreme in their feelings about the bot.
    * Don’t account for abandoned conversations, which is an important type of bot conversation to consider. 
    * Assess the entire conversation and don’t distinguish whether the agent or the bot caused the consumer’s satisfaction. They also don’t provide any indication of what caused the high or low score.

* **Meaningful Connection Score (MCS)**: Research has revealed that humans don’t converse with bots like they do with humans: The number of words in each message decreases, and the use of emotional language is minimal. This means that LivePerson’s MCS, which uses natural language to measure the consumer’s sentiment as they message with an agent, isn’t a good indicator of the quality of a conversation with a bot.

MACS addresses all these shortcomings because it identifies and quantifies the failure points that are *found in the conversation’s structure* to evaluate the conversation’s efficiency and fluidity. What’s more, MACS is available for all bot conversations while post-conversation surveys are not.

#### Benefits of MACS

MACS scoring makes it fast and easy to tune your bots for improved performance at scale. Using it, you can:

* **Identify failed conversations**: Easily find the ones that required high consumer effort or produced consumer frustration.
* **Review less, not more**: Perform a targeted review of conversation transcripts, not a random review, to locate the bot areas that need improvement.
* **Diagnose and tune quickly**: Move directly from a failure point in a transcript to the interaction in the bot flow, where you can make changes.

### How is MACS calculated?

There are two models responsible for MACS:

* A model that predicts what failure points are present in the conversation
* A model that estimates a conversation quality score

Both of these models were “trained” by having human experts manually annotate thousands of conversations. Using these models, each bot conversation that is closed is classified with a MACS 1, 2 or 3 where:

* MACS 1 = Bad
* MACS 2 = Fair
* MACS 3 = Good

The score is calculated based on the presence of failure points in the conversation, along with a host of other metadata associated with the conversation. The table below describes each failure point that is used to derive the score and provides solutions for fixing them.

| Failure point | Description | Possible fixes |
| --- | --- | --- |
| Around in circles |  The consumer is stuck in an unintentional loop. | Improve the dialog/conversation flow<br><br>Escalate to agent |
| Ignored consumer question | The bot doesn’t acknowledge the consumer's query and instead forces the consumer through a dialog flow. | Add intent detection (NLU)<br><br>Add menu options |
| Frustration | The consumer expresses intense frustration as a reaction to the experience with the bot. | Detect frustration and escalate<br><br>Identify flows that lead to disproportionate frustration; improve the dialog and intent detection |
| Doesn't understand | The bot fails to understand the consumer's intent and is not offering to repair the conversation. | Improve poor performing intents<br><br>Add intents<br><br>Move to a menu-based approach |
| Bad transfer | The bot transfers the consumer to an agent, but this either leaves the consumer hanging or abruptly ends the chat.<br><br>The bot might also fail to tell the consumer early enough in the conversation that there are no agents available at that hour. | Give a warning early in conversation that the agent capacity is near capacity<br><br>Check if agents are available before declaring the conversation will be escalated |

{: .important}
A MACS is only calculated for closed conversations.<br><br>A MACS doesn't detect where an error occurs in a conversation; it detects whether or not it occurred somewhere in the conversation. However, you can aggregate MACS over interactions. This gives you an indication of where your bot is underperforming and, by looking at the errors, of what to do to fix it.

#### Accuracy of MACS

MACS has a correlation of ~.7 with human judgment. While this is quite good, expect the algorithm to make some classification mistakes from time to time. The strength of MACS comes from looking at the scores in aggregate, where one aspect is in common (e.g., the same error is detected, or the conversations included a specific interaction or intent).

### Display or hide MACS data

MACS is a self-service feature that you can display (turn on) or hide (turn off) at any time. 

{: .important}
Before turning on MACS, please consult with your LivePerson account representative.

If you hide MACS data, be aware that this only hides the display of the feature and the data in the user interface. MACS scoring of bot conversations still takes place behind the scenes.

**To display or hide MACS data**

1. From the Conversational AI dashboard of applications, select **Bot Accounts**.
2. On the **Bot Accounts** tab, select your organization name.
3. On the **Account Details** tab, do either of the following:

    * To display MACS data, turn on the **Display Meaningful Automation Conversation Score (MACS)** setting.
    * To hide MACS data, turn off the **Display Meaningful Automation Conversation Score (MACS)** setting.

### Using MACS in Bot Analytics

#### Watch the video
<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/486697904" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### MACS on the main dashboard - Identify low-scoring bots

The main dashboard in Bot Analytics displays each bot’s average MACS (a floating number), for the specified date range. This helps you to understand at a glance which of your bots are high-performing, and which are low-performing and therefore need tuning.

<img style="width:800px" src="img/ConvoBuilder/macs_on_dashboard.png">

When assessing the scores of your bots, keep in mind that MACS primarily is meaningful for bots that accomplish specific business purposes through the use of conversation flows. The score isn’t as meaningful for other types of bots, e.g., routing bots and FAQ bots.

On the main dashboard, click a bot’s MACS to go to the **MACS** page for the bot. Here’s where you can analyze the data.

<img style="width:800px" src="img/ConvoBuilder/macs_page.png">

#### The MACS page - Analyze the data & tune the bot

##### Display the data

On the **MACS** page, use the filters to refine the data that’s displayed based on your criteria:

1. **Detail filters**: Filter the data based on specific criteria, for example, the reason for the MACS score.
2. **Score filters**: Toggle these on and off to show and hide the data for a score.
3. **Date filter**: Specify the date range for the data.

<img style="width:800px" src="img/ConvoBuilder/macs_filters.png">
<img style="width:500px" src="img/ConvoBuilder/macs_filters2.png">

Note the following about the filters:

* Your selections affect the whole page, i.e., both of the MACS charts and the table of conversations underneath.
* Within a filter, an “OR” search is performed. Across the filters, an “AND” search is performed. For example, you can show the data where ((score equals MACS 1 OR MACS 2) AND (MACS reason equals “Around in circles” OR “Bad transfer”)).
* When you filter the data by **MACS Reason**, only sample conversations that exceed a certain “confidence threshold” that the reason exists are displayed. This threshold is internal to the system and ensures that the quality of the displayed data is good. 

In our example image above, we’ve used the score filters to display just the data for conversations with a MACS of 1 (Bad). We’ve also used the MACS Reason detail filter to further refine the data to display just conversations where the bot didn’t understand. Beneath the charts, this gives us a sample list of bot conversations that meet that criteria.

{: .important}
The list of conversations is a sample of up to 100 bot conversations that meet the defined criteria. The conversations are distributed across the selected scores, so, for example, if you select to show conversations with a MACS of 1 and 2, you’ll see some number of conversations with a MACS 1 and some number of conversations with a MACS 2. The distribution might not be even since this depends on the data that’s available.

##### Analyze the data

Once you’ve displayed the conversations that you want to review, select one by its ID to display the transcript.

<img style="width:800px" src="img/ConvoBuilder/macs_select_conv.png">

Then review the transcript to identify the failure point in the conversation.

<img style="width:800px" src="img/ConvoBuilder/macs_find_failure.png">

##### Tune the bot

After you’ve identified the failure point in the conversation, click the link for the interaction that is causing the failure.

<img style="width:800px" src="img/ConvoBuilder/macs_select_interaction.png">

This opens the bot in Conversation Builder and displays that interaction in the dialog editor. You can then tune the bot right at the failure point, for improved performance.

<img style="width:800px" src="img/ConvoBuilder/macs_tune_bot.png">

#### Searching for a conversation 

If you want to search for a specific conversation—any conversation that falls within the specified date range regardless of whether it appears in the sample—enter its full conversation ID in the search box on the MACS page. It will be displayed in the **Sample Conversations** list regardless of how the other filters are set.

<img style="width:800px" src="img/ConvoBuilder/macs_search_conv.png">

When searching for a conversation by its full conversation ID, be aware that conversation IDs are truncated on the MACS page for readability. You can get a conversation's full ID by clicking the truncated ID to open the transcript window. The full ID is displayed at the top.

<img style="width:700px" src="img/ConvoBuilder/macs_conv_id.png">

### FAQs

#### For one of my bots, the Conversations metric doesn’t equal the sum of all conversations that received a MACS 1, 2 and 3. Why is this?

On the bot's Overview page, the Conversations metric represents the total number of closed and open Conversational Cloud conversations in which the bot participated.

On the bot’s MACS page, the counts of conversations receiving a MACS 1, 2 and 3 are for closed conversations.

<img style="width:600px" src="img/ConvoBuilder/macs_closed.png">

Since a MACS isn’t calculated for open conversations, the two metrics can be different at times.

#### In the Sample Conversations, I see conversations that have a MACS score, but the MACS reason is blank. How can a score be assigned to a conversation if there are no reasons?

The MACS reasons point towards issues with the bot’s responses. If there are no issues detected, the conversation typically will have higher quality and will receive a MACS of 3. There will be exceptions to this, as our reasons do not capture all possible issues and do not have perfect accuracy.

#### I set a filter to show sample conversations where the bot didn’t understand (MACS Reason = Doesn’t understand). But in the sample conversations, I see conversations where other MACS reasons are found too. Why is this?

A single conversation can have multiple MACS reasons found within it. So if you filter the results using one MACS reason (or a few), you might see conversations that include those reasons as well as others.

#### One of my conversations has multiple scores assigned to it. Why is this?
A conversation can have multiple “legs,” where a “leg” in a conversation starts with one agent, and it ends when the conversation is transferred to another agent. Multiple legs of a conversation have the same conversation ID. 

A MACS score is calculated for each leg of a conversation, so you might see a single conversation with multiple MACS scores assigned to it.


### Sending feedback

Your feedback about this Beta feature is important to us! You can send it to us in the following ways:

* Email questions or feedback to `macs-feedback-LP@liveperson.com`.
* Send MACS score-related feedback using the **Feedback** widget.
* Send overall feedback via [this survey](https://docs.google.com/forms/d/e/1FAIpQLSeD-lc-4e_HhWqPMzufGd7fhNAWGTITGpCT9XKdK5NmpfLMPw/viewform). The survey captures valuable information about your experience and helps us to identify areas for enhancement.

#### Sending score-related feedback

LivePerson is interested in hearing your feedback regarding MACS scoring. After reviewing a conversation transcript, please let us know whether you agree with the calculated score. And if you didn't agree, please let us know why.

You can quickly and easily provide this feedback using the **Feedback** widget that's available in the lower-right corner of the screen.

<img style="width:800px" src="img/ConvoBuilder/macs_feedback1.png">

The **Feedback** widget lets you rate the experience on a scale of 1 to 5 (Did you agree with the score?), and it provides an area where you can explain your rating (If you didn't agree, why?). So we can trace your feedback back to the actual conversation, copy the full conversation ID and paste it into your message, like we've done below.

<img style="width:400px" src="img/ConvoBuilder/macs_feedback2.png">

The full conversation ID can be found at the top of the transcript window.

<img style="width:700px" src="img/ConvoBuilder/macs_feedback3.png">
