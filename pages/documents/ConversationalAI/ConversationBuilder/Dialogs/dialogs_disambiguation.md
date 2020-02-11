---
pagename: Disambiguation Dialogs
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-disambiguation-dialogs.html
indicator: both
---

### What's disambiguation?

[Standard dialogs](conversation-builder-dialogs-standard-dialogs.html) are triggered when the bot recognizes the consumer's message via an intent match or a pattern match. [Fallback dialogs](conversation-builder-dialogs-fallback-dialogs.html) are triggered when the bot doesn't recognize the consumer's message at all. But what happens when the bot recognizes the consumer's message and matches it to *multiple intents*? This is where disambiguation can be used.

Disambiguation is the process whereby the bot gets clarification from the consumer on what is meant by the consumer's message.


Sometimes two or more intents match closely to the message, so clarification is needed:

<img style="width:325px" src="img/ConvoBuilder/dialogs_disambiguation1.png">

Other times, the user has expressed multiple intents in a single message, so, here again, clarification is needed:

<img style="width:325px" src="img/ConvoBuilder/dialogs_disambiguation2.png">

When a disambiguation dialog is used, the bot presents the best matches to the consumer and lets the consumer choose which is correct. This is shown in the examples above. The result is a better, smoother conversation.

#### An example use case

As an example, suppose the consumer enters "I lost my" and presses enter by mistake. The intent in this case isn't clear and might yield multiple, close matches. For example, it might mean a lost card or even a bereavement situation. Using a disambiguation dialog to clarify the consumer's intent means you can quickly address the correct issue.

### How a bot triggers a disambiguation dialog

If you create a disambiguation dialog, and if the bot matches the user's message to a single intent with a high confidence level (VERY_GOOD or GOOD), then the dialog that's associated with the matched intent is triggered directly. The disambiguation dialog isn't triggered. Also, the disambiguation dialog isn't triggered if the user's message matches a pattern. Only intents can be disambiguated.

A disambiguation dialog is triggered when the bot matches the message to *multiple intents*. Once the disambiguation dialog is triggered, it presents the consumer with the best intent matches.

<img style="width:350px" src="img/ConvoBuilder/dialogs_disambiguation4.png">

Once the user selects the correct intent, if that intent is associated with a User Says interaction in one of the bot's dialogs, that dialog's flow begins. Or, in the Disambiguation interaction, you can configure response match conditions to direct the flow as desired.

### Create a disambiguation dialog

1. Open the bot, and click **+ DIALOG** in the lower-left corner.
2. In the dialog that appears, specify the following:
    - **Dialog Name**: Enter a descriptive name.
    - **Dialog Type**: Select "Disambiguation Dialog."
    - **Match Threshold**: Select the minimum ranking that an intent match must have to be considered for disambiguation. For example, if you select FAIR_PLUS, then all intents that match with a rank of FAIR_PLUS and higher are considered for disambiguation.
    - **Disambiguate only selected domains**: If you only want the bot to include matches to intents in specific domains, select this check box, and then select those domains. You can select from all domains associated with dialogs in the bot.
3. Click **Save**.
4. Open the **Interaction Details** for the disambiguation interaction, click **Settings**, and specify the following:
    - **\# of intents to show**: Select whether to show 2 or 3 intent choices to the consumer.
    - **Additional option to show* (checkbox): Select this if you want to add a "none of the above" type of choice to the clarification question. By default, in the conversation, this option returns a reply of, *"That's not what I was expecting, Please select from one of these options."* However, you can add a response condition to the disambiguation interaction and use pattern matching to direct the conversation flow in a different way.
    - **Additional option to show** (label): This is the label for the "Additional option to show" choice. Enter a value, for example, "None of the above."
5. Click **Save**.
6. In the Disambiguation interaction, enter the question text to send to the consumer.
    <img style="width:800px" src="img/ConvoBuilder/dialogs_disambiguation5.png">

    The intents will be dynamically populated, and their labels will be drawn from their intent display names as configured in [Intent Builder](intent-builder-overview.html).

    <img style="width:600px" src="img/ConvoBuilder/dialogs_disambiguation6.png">

7. Build out the Disambiguation dialog as desired.
    
    You can add any number of interactions to the dialog. For example, you might want to add a LivePerson Agent Escalation integration.
    
    To debug or access disambiguation intent data, use the built-in [disambiguation functions](conversation-builder-scripting-functions-get-set-contextual-data.html#get-disambiguated-intent).

### Customization points

#### Showing the matches in the best rank or in consecutive ranks

Not all intents will be matched with a status in the same rank. For example, two intents might match with a status of VERY GOOD and GOOD, and you might or might not want to show both for disambiguation. Use the [environment variable](conversation-builder-environment-variables.html) below to control this.

| Environment variable name | Description | Type | Example |
| ---- | ---- | ---- | ---- |
| system_groupConsecutiveIntentRanksInDisambiguation | If true, the best matches across consecutive ranks (VERY GOOD, GOOD, etc.) are shown to the user. If false, only the best matches in the same, highest rank are shown. The default value is true. | Boolean | true |

**Example 1** - Assume you set things to show 2 intents for disambiguation. The system then matches 3 intents, 2 in VERY GOOD status and 1 in GOOD status. If this variable is *true*, 1 VERY GOOD and 1 GOOD intent (which are consecutively ranked) are shown to the user. If this variable is *false*, the 2 VERY GOOD intents (which are in the same rank) are shown.

**Example 2** - Assume you set things to show 2 intents for disambiguation. The system then matches 3 intents, one each in VERY GOOD, GOOD, and FAIR PLUS status. If this variable is *true*, the VERY GOOD and GOOD intents are shown to the user. If this variable is *false*, only the VERY GOOD intent would be considered for disambiguation. But since disambiguation only occurs when *multiple* intents must be clarified by the user, the user is simply directed to the associated dialog.

#### Including/excluding intents that don't have dialog starters

In your bot, you might have some dialogs that start with dialog starters (User Says interactions) and others that don't. During disambiguation, when a user clarifies their intent and selects an intent with a dialog starter, matching occurs, and the user is taken to the dialog. But when the user selects an intent *without* a dialog starter, no matching occurs, so the fallback message is displayed. This is because there is no [context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) during disambiguation. You can solve this and avoid the fallback message by adding a Response Match condition inside the Disambiguation dialog--to handle the user's selection and direct the flow as you need. Or, you can configure things so that intents without dialog starters aren't considered for disambiguation. Use the [environment variable](conversation-builder-environment-variables.html) below to control this.

| Environment variable name | Description | Type | Example |
| ---- | ---- | ---- | ---- |
| system_useIntentsOnlyWithDialogStartersInDisambiguation | If true, only intents linked to dialog starters (User Says interactions) are considered for disambiguation. If false, intents that aren't linked to dialog starters are also considered. The default value is false. | Boolean | true |

**Example 1** - Assume you set things to show 2 intents for disambiguation, and you set this variable to *true*. The system then matches 2 intents; 1 has a dialog starter, but the other doesn't. In this case, disambiguation does not occur. The user is directed to the only dialog that has a dialog starter. This is because disambiguation only occurs when *multiple* intents must be clarified by the user.

**Example 2** - Assume you set things to show 3 intents for disambigution, and you set this variable to *true*. The system then matches 2 intents that have dialog starters but 1 that doesn't. In this case, disambiguation occurs because multiple intents (2) still must be clarified by the user. But if 2 of the 3 matched intents didn't have dialog starters, disambiguation would not occur. The user would be directed to the only dialog that has a dialog starter.

**Notes** - This variable is set to false by default to provide you with a full view into all the intents that are being evaluated, matched, and shown to the user. Decide whether to keep or change the default value: If you keep this set to false, as mentioned earlier, you should handle an intent without a dialog starter by adding a Response Match condition inside the Disambiguation dialog. Otherwise, set this variable to true to exclude intents without dialog starters.

### FAQs about disambiguation

**What happens if I don't use a disambiguation dialog?**

If you don't use a disambiguation dialog, here's how things work:

- If the user's message matches multiple intents that have the same rank (several matches are VERY GOOD, or several are GOOD), the bot picks the one with the highest raw match score, and then it processes the associated dialog.

- During matching, the bot considers only intents that evaluate to a VERY_GOOD or GOOD rank; intents that evaluate to FAIR_PLUS and FAIR are not considered.

**What happens if I use a disambiguation dialog, but no intents at or above the specified threshold are matched?**

When this happens, the fallback dialog is triggered if one exists. Otherwise, the default fallback message is sent to the consumer. For more on fallback, see [here](conversation-builder-dialogs-fallback-dialogs.html).

**How many disambiguation dialogs can I create?**

Like fallback dialogs, there can be only one disambiguation dialog in a bot.
