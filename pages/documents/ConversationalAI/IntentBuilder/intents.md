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

Intents are meant for when you need a more flexible approach to matching than using patterns. With patterns, there must be an *exact* match between the consumer's utterance and a defined expression. This means that alternative expressions (synonyms, phrasings, and formats) are missed.

Intents use a Natural Language Understanding (NLU) engine to match the user's utterance against a set of training phrases or [Knowledge Base articles](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). The results are scored based on the level of confidence in the match: VERY GOOD, GOOD, FAIR PLUS, FAIR, POOR.

As an example, you might configure a "billing" intent that has a defined set of training phrases like, "I have a question about my bill," "Can you help me with my bill?" and similar, alternative expressions. The consumer's utterance is evaluated against these phrases, and a score is determined. *If there's a match of GOOD or better*, the intent is understood to be present, it is sent to the bot, and the bot triggers the associated dialog starter.

{: .important}
For some practice with intents, try the [Intents tutorial](conversation-builder-tutorials-guides-getting-started.html).

### Add an intent

**To add an intent**

1. In the dashboard that lists your domains, select the domain.
2. Click **Add Intent** in the upper-right corner.
3. Specify the following:

    * **Intent name**: Enter the intent name. Using standard naming conventions when creating intents is crucial. A domain can have dozens of intents and being able to easily sort and find intents is key to making sure your bot runs efficiently and smoothly.
    * **Intent display name**: Enter the display name.
    * **Intent type**: Select either "Intent" or "Meta Intent." For an introduction to meta intents, see [here](intent-builder-meta-intents.html).
    * **Training**: Enter as many training phrases as possible. This is discussed in more detail below.

6. Click **Save**.

### Add training phrases

The NLU engine uses training phrases in order to match a user's utterance with an intent. The more training phrases you include, the more likely it is that the NLU engine will accurately match the user's intent. Generally speaking, the phrases should be complete sentences (not long paragraphs, and not keywords).

As an example, assume you have a "Check bill" intent. You might add the following training phrases, among others:

* I want to check the status of my bill

* Tell me what my bill is

* I need to look into what's going with my bill

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

### Delete an intent

Deleting an intent is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Ensure the intent isn't being used by any bots or knowledge bases before you delete it.

**To delete an intent**

1. Open the domain.
    By default, the Intents page is displayed.
2. In the left panel, select the intent.
3. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon), and select **Delete**.
4. In the confirmation dialog, click **Yes**.
5. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the deletion is reflected in a new model version.