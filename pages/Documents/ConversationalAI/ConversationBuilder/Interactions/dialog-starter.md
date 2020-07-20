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

<img style="width:500px" src="img/ConvoBuilder/interactions_dialogStarter1.png">

In contrast, the Billing dialog below is triggered when the bot matches the user’s message to a “Billing question” intent.

<img style="width:700px" src="img/ConvoBuilder/interactions_dialogStarter2.png">

What’s an intent? An intent is something a user wants to do. In our example, the intent is to ask a billing question. You create intents in [Intent Builder](intent-builder-overview.html).

<img style="width:600px" src="img/ConvoBuilder/interactions_userSays3.png">

#### When do you use patterns versus intents?

- Use a pattern when the user’s input must match the pattern exactly. Otherwise, it isn’t considered a match, and the dialog isn’t triggered.
- Use an intent when the match criteria needs to be more flexible, which means the bot can respond to a wider variety of input. Intents are broader and more flexible because the bot makes use of a Natural Language Understanding (NLU) engine when determining if there is a match. Matches are scored based on the confidence level: VERY GOOD, GOOD, FAIR PLUS, and so on.

### Adding patterns or an intent

In the Dialog Starter interaction, you specify the patterns or the intent that the bot should find in order to trigger the dialog. To start, click the button that's on the tile. 

<img style="width:500px" src="img/ConvoBuilder/interactions_dialogStarter3.png">

This opens up the **Patterns & Intent** tab of the **Interaction Settings** dialog box, where you perform the work.

<img style="width:600px" src="img/ConvoBuilder/interactions_dialogStarter4.png">

For some practice with this, try the [Getting Started tutorial](conversation-builder-tutorials-guides-getting-started.html).

### Interaction settings

* **Patterns**: Patterns (text strings) can be matched against the user input to trigger the dialog. Enter the patterns against which to match the input. See [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) for information on pattern matching.
* **Exclude Keywords**: An "exclude keyword" is a text string that is matched against user input in order to *not* trigger the dialog.
* **Intent**: An [intent]((intent-builder-overview.html)) can be matched against the user input to trigger the dialog. Select the intent against which to match the input.