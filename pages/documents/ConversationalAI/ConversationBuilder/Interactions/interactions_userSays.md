---
pagename: Dialog Starter
redirect_from:
    - conversation-builder-interactions-user-says.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-dialog-starter.html
indicator: both
---

Dialog Starter interactions are how dialogs are initially triggered, so most dialogs start with a Dialog Starter interaction. ([Fallback dialogs](conversation-builder-dialogs-fallback-dialogs.html) work differently.) A dialog can have only one Dialog Starter interaction, and it must start the dialog.

It’s the user that starts things off by supplying some user input: a message or a question. In response, the bot tries to match the user input with either a [pattern](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching) or an [intent](intent-builder-intents.html) in a Dialog Starter interaction in one of its dialogs. If a match is found, that dialog is triggered, and its flow begins.

As an example, the Goodbye dialog below is triggered when the bot matches the user’s message to some form (pattern) of “good-bye.”

<img style="width:700px" src="img/ConvoBuilder/interactions_userSays1.png">

In contrast, the Billing dialog below is triggered when the bot matches the user’s message to a “Billing question” intent.

<img style="width:700px" src="img/ConvoBuilder/interactions_userSays2.png">

What’s an intent? An intent is something a user wants to do. In our example, the intent is to ask a billing question. You create intents in Intent Builder.

<img style="width:600px" src="img/ConvoBuilder/interactions_userSays3.png">

When you add a Dialog Starter interaction, you provide an example of a message or question that the user might ask at the start of a conversation. If that were all you did, and if the bot looked for just that phrase, the bot would not recognize many of your users’ inputs. So, in the Dialog Starter interaction details, you specify the patterns that the bot should look for (a method called pattern matching), or the intent that the bot should find in order to trigger to the dialog.

When do you use patterns versus intents?

- Use a pattern when the user’s input must fit the pattern exactly. Otherwise, it isn’t considered a match, and the dialog isn’t triggered.
- Use an intent when the match criteria needs to be more flexible, which means the bot can respond to a wider variety of input. Intents are broader and more flexible because the bot makes use of LivePerson’s Natural Language Understanding (NLU) engine when determining if there is a match. Matches are scored based on the confidence level: VERY GOOD, GOOD, FAIR PLUS, and so on.

For information on pattern matching, see [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions). For an overview of Intent Builder and intents, begin [here](intent-builder-overview.html). For some practice at all of this, try the [Getting Started tutorial](conversation-builder-tutorials-guides-getting-started.html).