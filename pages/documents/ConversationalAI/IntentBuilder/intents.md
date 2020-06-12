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

### What's an intent?

Intents are great for when you need a looser approach to matching than pattern matching. Since pattern matching looks for an *exact* match for your defined expression, it might "miss" different synonyms, phrasings, formats, and so on. With intents, instead of looking for specific patterns in the user input (for example, the pattern "bill"), the bot uses a Natural Language Understanding (NLU) engine to look for the intent specified and trigger the interaction configured to respond to the intent. 

Intents match an entire sentence against a set of training sentences or Knowledge Base articles, and the results are scored based on level of confidence: VERY GOOD, GOOD, FAIR PLUS, FAIR, POOR. From the input sentence, the NLU engine derives an intent to which the bot responds. For example, if you configured your bot to respond to a "billing" intent, the NLU engine doesn't just look for the word "billing"; it analyzes any sentence the user might input and tries to understand if the "billing" intent is present. If the intent is present, the NLU "tells" the bot that it is, and the relevant dialog triggers.

### Add an intent

**To add an intent**

1. In the dashboard that lists your domains, select the domain.
2. Click **Add Intent** in the upper-right corner.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/ib_addIntent.png">

3. Specify the following:

    * **Intent name**: Enter the intent name. Using standard naming conventions when creating intents is crucial. A domain can have dozens of intents and being able to easily sort and find intents is the key to making sure your bot runs efficiently and smoothly.
    * **Intent display name**: Enter the display name.
    * **Intent type**: Select either "Intent" or "Meta Intent."
    * **Training**: Enter as many trainining phrases as possible. This is discussed in more detail below.

6. Click **Add Intent**.

### Add training phrases

The NLU engine uses training phrases in order to match a user input with an intent. The more training phrases you include, the more likely the NLU engine will be to accurately match the user's intent with what they were actually looking for. Generally speaking, the phrases should be complete sentences (rather than keywords like pattern matching or very long paragraphs).

Let's say that I have an intent which I label "check_bill". I could associate it with the following training phrases:

* I want to check the status of my bill

* Tell me what my bill is

* I need to look into what's going with my bill

The NLU engine will take the user input and compare it to your training phrases. If it finds a match to a degree of certainty exceeding "GOOD", it will send the intent configured to the bot. All of these phrases and similar sentences would result in the "check_bill" intent being sent to the bot and the corresponding action (configured by you in the Conversation Builder) to be triggered.

#### Best practices

The following are best practices when creating training phrases; these help to ensure your intents are well-trained and return the results you expect.

##### One sentence, not multiple.
Use a simple, concise sentence. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

##### 10-25 training phrases
The number of training phrases that you need really depends upon your use case and type of intents. Generally, for intents, it is recommended that you have between 10 - 25 good training phrases. When you have more than that, it's likely that you have overtrained the intent, which might lead to false positives.

{: .important}
For more best practices, see [Train & Tune NLU](conversation-builder-best-practices-train-tune-nlu.html).

### Train intents

See [Test a domain](intent-builder-domains.html#test-a-domain).