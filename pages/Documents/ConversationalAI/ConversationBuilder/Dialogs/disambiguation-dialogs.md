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

[Standard dialogs](conversation-builder-dialogs-standard-dialogs.html) are triggered when the bot recognizes the consumer's message via an intent match or a pattern match. [Fallback dialogs](conversation-builder-dialogs-fallback-dialogs.html) are triggered when the bot doesn't recognize the consumer's message at all. But what happens when the bot recognizes the consumer's message and matches it to **multiple intents**? This is where disambiguation sometimes can be used.

Disambiguation is the process whereby the bot gets clarification from the consumer on what is meant by the consumer's message.

Sometimes two or more intents match closely to the message, so clarification is needed:

<img style="width:400px" src="img/ConvoBuilder/dialogs_disambiguation1.png" alt="">

Other times, the consumer has expressed multiple intents in a single message, so, here again, clarification is needed:

<img style="width:400px" src="img/ConvoBuilder/dialogs_disambiguation2.png" alt="">

When a disambiguation dialog is used, the bot presents the best matches to the consumer and lets the consumer choose which is correct. This is shown in the examples above. The result is a better, smoother conversation.

#### An example use case

As an example, suppose the consumer enters "I lost my" and presses enter by mistake. The intent in this case isn't clear and might yield multiple, close matches. For example, it might mean a lost card or even a bereavement situation. Using a disambiguation dialog to clarify the consumer's intent means you can quickly address the correct issue.

#### Limitations

You can use a disambiguation dialog to disambiguate intents if you’re using the [LivePerson NLU engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html). It doesn’t work with third-party NLU engines because they always return a single intent match, not multiple intent matches.

### How a bot triggers a disambiguation dialog

A disambiguation dialog is triggered when the bot matches the consumer's message to **multiple intents with a Fair Plus score**. Once the disambiguation dialog is triggered, it presents the consumer with the best intent matches.

<img style="width:400px" src="img/ConvoBuilder/dialogs_disambiguation4.png" alt="">

Once the consumer selects the correct intent, if that intent is associated with a Dialog Starter interaction in one of the bot's dialogs, that dialog's flow begins. Or, in the Disambiguation interaction, you can configure response match conditions to direct the flow as desired.

In contrast, when the bot matches the consumer's message to one or more intents with a high confidence level (Very Good or Good), then the dialog that's associated with the matched intent with the highest raw match score is triggered directly. The disambiguation dialog isn't triggered.

Also, the disambiguation dialog isn't triggered if the consumer's message matches a pattern. Only intents can be disambiguated.

### Create a disambiguation dialog

1. Open the bot, and click **Add Dialog** in the lower-left corner.
2. In the window that appears, specify the following:
    - **Dialog Name**: Enter a descriptive name.
    - **Dialog Type**: Select "Disambiguation Dialog."
    - **Match Threshold**: Always select "Fair Plus."
    - **Disambiguate only selected domains**: If you only want the bot to include matches to intents in specific domains, select this check box, and then select those domains. You can select from all domains associated with dialogs in the bot.
3. Click **Save**.
4. In the Disambiguation interaction, click the **Settings** icon, click the **Advanced** tab, and specify the following:
    - **\# of intents to show**: Select whether to show 2 or 3 intent choices to the consumer.
    - **Additional option to show** (checkbox): Select this if you want to add a "none of the above" type of choice to the clarification question. By default, in the conversation, this option returns a reply of, *"That's not what I was expecting, Please select from one of these options."* However, you can add a response condition to the disambiguation interaction and use pattern matching to direct the conversation flow in a different way.
    - **Additional option to show** (label): This is the label for the "Additional option to show" choice. Enter a value, for example, "None of the above."
5. Click **Save**.
6. Customize the question text to send to the consumer. As you construct this message, keep in mind that the disambiguation dialog is displayed only when the NLU engine isn’t certain which intent the consumer is expressing, so it’s natural for this to be stressful for the consumer. Try to make this message warm and sympathetic.
    <img style="width:600px" src="img/ConvoBuilder/dialogs_disambiguation5.png" alt="">

    The intents will be dynamically populated, and their labels will be drawn from their intent display names as configured in [Intent Manager](intent-manager-overview.html). Again, this situation can be stressful for the consumer; try to make the display names as clear as possible.

    <img style="width:600px" src="img/ConvoBuilder/dialogs_disambiguation6.png" alt="">

7. Build out the disambiguation dialog as desired.

    You can add any number of interactions to the dialog. For example, you might want to add an [Agent Transfer](conversation-builder-interactions-integrations.html#agent-transfer-interactions).

    To debug or access disambiguation intent data, use the built-in [disambiguation functions](conversation-builder-scripting-functions-get-set-session-data.html#get-disambiguated-intent).

### Customization points

<!--
Not supported (yet):
#### Showing the matches in the best rank or in consecutive ranks

Not all intents will be matched with a status in the same rank. For example, two intents might match with a status of Fair Plus and Fair, and you might or might not want to show both for disambiguation. Use the [environment variable](conversation-builder-environment-variables.html) below to control this.

| Environment variable name | Description | Type | Example |
| ---- | ---- | ---- | ---- |
| system_groupConsecutiveIntentRanksInDisambiguation | If true, the best matches across consecutive ranks (VERY GOOD, GOOD, etc.) are shown to the user. If false, only the best matches in the same, highest rank are shown. The default value is true. | Boolean | true |

**Example 1** - Assume you set things to show 2 intents for disambiguation. The system then matches 3 intents, 2 in Fair Plus status and 1 in Fair status. If this variable is *true*, 1 Fair Plus and 1 Fair intent (which are consecutively ranked) are shown to the consumer. If this variable is *false*, the 2 Fair Plus intents (which are in the same rank) are shown.

**Example 2** - Assume you set things to show 2 intents for disambiguation. The system then matches 3 intents, one each in VERY GOOD, GOOD, and FAIR PLUS status. If this variable is *true*, the VERY GOOD and GOOD intents are shown to the user. If this variable is *false*, only the VERY GOOD intent would be considered for disambiguation. But since disambiguation only occurs when *multiple* intents must be clarified by the user, the user is simply directed to the associated dialog.
-->

#### Including/excluding intents that don't have dialog starters

In your bot, you might have some dialogs that start with dialog starters and others that don't. During disambiguation, when a consumer clarifies their intent and selects an intent that's used in a dialog starter, matching occurs, and the consumer is taken to the dialog. But when the consumer selects an intent that isn't used in a dialog starter, no matching occurs, so the fallback message is displayed. This is because there is no [context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) during disambiguation. You can solve this and avoid the fallback message by adding a Response Match condition inside the disambiguation dialog -- to handle the consumer's selection and direct the flow as you need. Or, you can configure things so that intents that aren't used in dialog starters aren't considered for disambiguation. Use the [environment variable](conversation-builder-environment-variables.html) below to control this.

| Environment variable name | Description | Type | Example |
| ---- | ---- | ---- | ---- |
| system_useIntentsOnlyWithDialogStartersInDisambiguation | If true, only intents that are used in dialog starters are considered for disambiguation. If false, all intents in the domain linked to the bot are considered for disambiguation. The default value is false. | Boolean | true |

**Example 1** - Assume you set things to show 2 intents for disambiguation, and you set this variable to *true*. The system then matches 2 intents; 1 has a dialog starter, but the other doesn't. In this case, disambiguation does not occur. The consumer is directed to the only dialog that has a dialog starter. This is because disambiguation only occurs when *multiple* intents must be clarified by the user.

**Example 2** - Assume you set things to show 3 intents for disambiguation, and you set this variable to *true*. The system then matches 2 intents that have dialog starters but 1 that doesn't. In this case, disambiguation occurs because multiple intents (2) still must be clarified by the consumer. But if 2 of the 3 matched intents didn't have dialog starters, disambiguation would not occur. The consumer would be directed to the only dialog that has a dialog starter.

**Notes** - This variable is set to false by default to provide you with a full view into all the intents that are being evaluated, matched, and shown to the user. Decide whether to keep or change the default value: If you keep this set to false, as mentioned earlier, you should handle an intent without a dialog starter by adding a Response Match condition inside the disambiguation dialog. Otherwise, set this variable to true to exclude intents without dialog starters.

### FAQs

#### What happens if I don't use a disambiguation dialog?

If you don't use a disambiguation dialog, here's how things work:

- If the consumer's message matches multiple intents that have the same, high rank (several matches are Very Good, or several are Good), the bot picks the one with the highest raw match score, and then it processes the associated dialog.

- If there's no intent that matches with a Very Good or Good score, the [fallback dialog](conversation-builder-dialogs-fallback-dialogs.html) is triggered if one exists. Otherwise, the default fallback message is sent to the consumer. Intents that evaluate to Fair Plus or Fair are not considered.

#### What happens if I use a disambiguation dialog, but no intents at or above the specified threshold are matched?

When this happens, the [fallback dialog](conversation-builder-dialogs-fallback-dialogs.html) is triggered if one exists. Otherwise, the default fallback message is sent to the consumer.

#### How many disambiguation dialogs can I create?

There can be only one disambiguation dialog in a bot.

#### If I must set the dialog's Match Threshold to Fair Plus, what are the other options for?

The other options for the **Match Threshold** dialog setting are for users still using the legacy version of our LivePerson NLU engine. Still on LivePerson (Legacy)? See [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#benefits-of-liveperson-over-liveperson-legacy) for the many benefits of switching to the LivePerson engine.
