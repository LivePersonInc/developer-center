---
pagename: Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-intents.html
indicator: both
---

### What is an intent?

Instead of looking for specific patterns in user input (for example, the pattern "bill"), the bot will use an NLU engine to look for the intent specified and trigger the interaction you configured to respond to this intent. Intents are great for when you need a looser approach to matching than pattern matching. Since pattern matching looks for an *exact* match for your defined expression, it might "miss" different synonyms, phrasings, formats, and so on.

Intents match an entire sentence against a set of training sentences or KB articles and the results are scored based on level of confidence (VERY GOOD, GOOD, FAIR PLUS, FAIR, POOR). From this sentence, the NLU engine derives an intent to which the bot responds. For example, if you configured your bot to respond to a "billing" intent, the NLU engine doesn't just look for the word "billing"; it analyzes any sentence the user might input and tries to understand if the "billing" intent is present. If the intent is present, the NLU "tells" the bot that it is, and the relevant dialog triggers.

### Adding an intent

The default panel of the Domain View is the Add Intent panel. It will be the panel opened by default when you enter the Domain View. To add an intent, first use the uppermost input area to enter its name.

<div class="important">Using standard naming conventions when creating intents is crucial. A domain can have dozens of intents and being able to easily sort and find intents is the key to making sure your bot runs efficiently and smoothly.</div>

Once you've selected a name for your intent, you should add as many training phrases as possible by using the bottom input area. To add another training phrase after your first one, click the blue **+** sign to the right of the input area.

### Training phrases

The NLU engine uses training phrases in order to match a user input with an intent. The more training phrases you include, the more likely the NLU engine will be to accurately match the user's intent with what they were actually looking for. Generally speaking, the phrases should be complete sentences (rather than keywords like pattern matching or very long paragraphs).

Let's say that I have an intent which I label "check_bill". I could associate it with the following training phrases:

* I want to check the status of my bill

* Tell me what my bill is

* I need to look into what's going with my bill

The NLU engine will take the user input and compare it to your training phrases. If it finds a match to a degree of certainty exceeding "GOOD", it will send the intent configured to the bot. All of these phrases and similar sentences would result in the "check_bill" intent being sent to the bot and the corresponding action (configured by you in the Conversation Builder) to be triggered.

For more best practices, see [Train & Tune NLU](conversation-builder-best-practices-train-tune-nlu.html).
