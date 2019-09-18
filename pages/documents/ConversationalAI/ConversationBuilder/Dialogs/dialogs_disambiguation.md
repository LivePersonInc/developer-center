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

[Standard dialogs](conversation-builder-dialogs-standard-dialogs.html) are triggered when the bot recognizes the consumer's message via an intent match or a pattern match. [Fallback dialogs](conversation-builder-dialogs-fallback-dialogs.html) are triggered when the bot doesn't recognize the consumer's message at all. But what happens when the bot recognizes the consumer's message and can match it to *multiple intents*? This is where disambiguation can be used.

Disambiguation is the process whereby the bot gets clarification from the consumer on what is meant by the consumer's message.


Sometimes two or more intents match closely to the message, so clarification is needed:

<img style="width:325px" src="img/ConvoBuilder/dialogs_disambiguation1.png">

Other times, the user has expressed multiple intents in a single message, so, here again, clarification is needed:

<img style="width:325px" src="img/ConvoBuilder/dialogs_disambiguation2.png">

When a disambiguation dialog is used, the bot presents the best matches to the consumer and lets the consumer choose which is correct. This is shown in the examples above. The result is a better, smoother conversation.

One important use case for disambiguation is clarifying the consumer's intent when the word "lost" is used. It's common for this word to be used in both a lost card and a bereavement scenario, so it could yield multiple, close matches at a potentially sensitive time for the consumer. Using a disambiguation dialog to quickly clarify the intent means you can then efficiently automate the card-closing activity or compassionately pass the bereaved consumer to a live agent with whom to speak.

### When is a disambiguation dialog triggered?

If you create a disambiguation dialog, and if the bot matches the user's message to a single intent with high confidence in the match, then the dialog that's associated with the matched intent is triggered directly. The disambiguation dialog isn't triggered at all.

Disambiguation dialogs are triggered under two circumstances:

- The bot matches the message to a single intent but with a low confidence level (FAIR_PLUS or FAIR) in the match.
- The bot matches the message to multiple intents, and those match scores are close. Several have scores of VERY_GOOD, or several have scores of GOOD.

Once the disambiguation dialog is triggered, it presents the consumer with the best intent matches.

<img style="width:325px" src="img/ConvoBuilder/dialogs_disambiguation4.png">

Once the user selects the correct intent, if that intent is associated with a User Says interaction in one of the bot's dialogs, that dialog's flow begins.

Keep in mind that only intents can be disambiguated, not patterns.

<img style="width:800px" src="img/ConvoBuilder/dialogs_disambiguation5.png">

But in the Disambiguation interaction, you *can* configure response match conditions with pattern matches in order to direct the flow based on the user's selection.

### Create a disambiguation dialog

1. Open the bot, and click **+ DIALOG** in the lower-left corner.
2. In the dialog that appears, specify the following:
    - **Dialog Name**: Enter a descriptive name.
    - **Dialog Type**: Select "Disambiguation Dialog."
    - **Match Threshold**: Select the minimum score that an intent match must have to be included in the list of choices for the consumer. For example, if you select FAIR_PLUS, then all intents that match with a score of FAIR_PLUS and higher are included.
    - **Disambiguate only selected domains**: If you only want the bot to include matches to intents in specific domains, select this check box, and then select those domains.
3. Click **Save**.
4. Open the **Interaction Details** for the disambiguation interaction, click **Settings**, and specify the following:
    - **\# of intents to show**: Select whether to show the top 2 or top 3 choices to the consumer.
    - **None of the above**: TBD
    - **Enter label**: TBD
5. Click **Save**.
6. In the Disambiguation interaction, enter the question text to send to the consumer.
7. Build out the Disambiguation dialog as desired.
    
    You can add any number of interactions to the dialog. For example, you might want to add a LivePerson Agent Escalation integration.
    
    To debug or access disambiguation intent data, use the built-in [disambiguation functions](conversation-builder-conversation-builder-scripting-functions.html#get-disambiguated-intent).

### FAQs about disambiguation

**What happens if I don't use a disambiguation dialog?**

If you don't use a disambiguation dialog, here's how things work:

- If the user's message matches multiple intents with a VERY_GOOD score, the bot picks one at random and processes that dialog.

- If the user's message matches multiple intents with a VERY_GOOD or multiple intents with a GOOD score, the bot picks the one with the highest raw match score. (When the matches are very close like this, this can yield an incorrect selection.)

- The bot considers only intents that evaluate to a VERY_GOOD or GOOD score; intents that evaluate to FAIR_PLUS and FAIR are never considered.

**How many disambiguation dialogs can I create?**

Like fallback dialogs, there can be only one disambiguation dialog in a bot.
