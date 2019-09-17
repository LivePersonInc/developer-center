---
pagename: User Says
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-user-says.html
indicator: both
---

User Says interactions are how dialogs are initially triggered, so most dialogs start with a User Says interaction. ([Fallback dialogs](conversation-builder-dialogs.html#dialog-types) work differently.) A dialog can have only one User Says interaction, and it must start the dialog. Because User Says interactions are always positioned at the start of a dialog flow, and because they’re used to trigger dialogs, they are sometimes called “dialog starters.”

It’s the user that starts things off by supplying some user input: a message or a question. In response, the bot tries to match the user input with either a [pattern](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching) or an [intent](conversation-builder-intent-builder-overview.html) in a User Says interaction in one of its dialogs. If a match is found, that dialog is triggered, and its flow begins.

As an example, the Goodbye dialog below is triggered when the bot matches the user’s message to some form (pattern) of “good-bye.”

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/interactions_userSays1.png">

In contrast, the Billing dialog below is triggered when the bot matches the user’s message to a “Billing question” intent.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/interactions_userSays2.png">

What’s an intent? An intent is something a user wants to do. In our example, the intent is to ask a billing question. You create intents in Intent Builder.

<img style="width:600px" src="img/ConvoBuilder/interactions_userSays3.png">

When you add a User Says interaction, you provide an example of a message or question that the user might ask at the start of a conversation. If that were all you did, and if the bot looked for just that phrase, the bot would not recognize many of your users’ inputs. So, in the User Says interaction details, you specify the patterns that the bot should look for (a method called pattern matching), or the intent that the bot should find in order to trigger to the dialog.

When do you use patterns versus intents?

- Use a pattern when the user’s input must fit the pattern exactly. Otherwise, it isn’t considered a match, and the dialog isn’t triggered.
- Use an intent when the match criteria needs to be more flexible, which means the bot can respond to a wider variety of input. Intents are broader and more flexible because the bot makes use of LivePerson’s Natural Language Understanding (NLU) engine when determining if there is a match. Matches are scored based on the confidence level: VERY GOOD, GOOD, FAIR PLUS, and so on.

For information on pattern matching, see [here](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching). For an overview of intents and Intent Builder, see here. And for some practice at all of this, try [tutorial #2](conversation-builder-getting-started-2-intents.html). (You’ll need to complete [tutorial #1](conversation-builder-getting-started-1-dialogs-and-patterns.html) first, as the tutorials build on each other.)