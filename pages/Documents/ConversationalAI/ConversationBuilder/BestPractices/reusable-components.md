---
pagename: Reusable Components
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-reusable-components.html
indicator: both
---

Consider adopting the reuse techniques below to avoid building the same components over and over again.

### Create reusable “yes” and “no” intents

{: .note}
The approach documented in this section is recommended only when using the LivePerson (Legacy) NLU engine. Brands using the LivePerson NLU engine should use Yes/No pattern matching, **not** Yes/No intents. You can easily add these "affirmative" and "negative" patterns using the [pattern library](conversation-builder-interactions-interaction-basics.html#popular-patterns) that's available.

One way to handle the responses to yes/no questions is to use pattern matching in the custom rule:

<img style="width:500px" src="img/ConvoBuilder/reusableYesNo1.png" alt="A Yes rule with a condition that checks for matches to Yes patterns">

While that approach does work, it's error prone and not the most efficient, as it means you’ll need to enter the same patterns over and over again in the rules for all yes/no questions.

A better approach is to create two intents in the relevant domain--one intent for “yes” and the other for “no”--and to reuse the intents across the bot’s dialogs. You might name these as follows:

* **Affirmation**: The training phrases for this intent would include “yes”, “yeah”, “yup”, “ok” and so on.
* **Negative Affirmation**: The training phrases for this intent would include “no”, “nah”, “nope”, “no thanks” and so on.

For example:

<img style="width:350px" src="img/ConvoBuilder/reusableYesNo2.png" alt="An intent named Affirmation with training phrases for ok, yeah, yep, and so on">

Once you create the "yes" and "no" intents, you can create custom rules that evaluate the consumer’s response against them. When specifying the condition, simply select “Response Intent,” and then select the appropriate intent.

<img style="width:800px" src="img/ConvoBuilder/reusableYesNo3.png" alt="A Yes rule with a condition that checks for a Response Intent match type, with a match to the Affirmation intent">

### Create a reusable "resolve and close" dialog

Many dialogs require the following sequence of interactions within their flow:

*Did that resolve your question? Yes or No*

*Where:*

* *"Yes" sends a good-bye message and closes the conversation.*
* *"No" asks the user for input and matches the user's intent.*

To avoid repeatedly having to build this set of interactions within every dialog, you can create a reusable "resolve and close" dialog.

**To create the "resolve and close" dialog**

1. Create a new dialog named something like, "Confirm Resolution and Close".
2. Add the series of interactions shown in the following images. Name the interactions with easily identifiable names. And configure the first question's rules to direct the flow as indicated.

    <img style="width:600px" src="img/ConvoBuilder/reusableResolveAndCloseDialog1a.png" alt="A Confirm Resolve and Close dialog that asks the consumer if there's anything else they need">

    <img style="width:600px" src="img/ConvoBuilder/reusableResolveAndCloseDialog1b.png" alt="The rest of the Confirm Resolve and Close dialog, with a Text statement named Ask question">

    In the case of a "no" answer, the [Close conversation](conversation-builder-dialogs-dialog-basics.html#close-the-conversation) next action causes the bot to close the conversation.

    In the case of a "yes" answer, the "Please enter your question below" text statement elicits a user response that is caught by the NLU.

    To configure the yes/no rules, consider using reusable "yes" and "no" intents. These are discussed farther above in this topic.

3. Go to another dialog in your bot, and, where it reaches its logical end and you want to confirm resolution with the consumer, explicitly set the **Next Action** to be this Confirm Resolution and Close dialog's "Is there anything else?" question.

    The following serves as an example:
    <img style="width:600px" src="img/ConvoBuilder/reusableResolveAndCloseDialog2.png" alt="The flow in another dialog where, at its logical end, the consumer is redirected to the Confirm Resolve and Close dialog">

5. Repeat the preceding step for all other applicable dialogs.
6. Test the dialog affirmatively and negatively.

    Below is an example flow for an affirmative (yes) answer.
    <img style="width:500px" src="img/ConvoBuilder/reusableResolveAndCloseDialog3.png" alt="The example flow for an affirmative answer">

    Below is an example flow for a negative (no) answer.
    <img style="width:500px" src="img/ConvoBuilder/reusableResolveAndCloseDialog4.png" alt="The example flow for a negative answer">
