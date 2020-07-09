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
For some practice with intents, complete the [Intents tutorial](conversation-builder-tutorials-guides-getting-started.html).

### Add an intent

**To add an intent**

1. In the dashboard that lists your domains, select the domain.
2. Click **Add Intent** in the upper-right corner.
3. Specify the following:

    * **Intent name**: Enter the intent name. A domain can have dozens of intents, so using a standard naming convention is important for being able to easily sort and find intents.
    * **Intent display name**: Enter the display name.
    * **Intent type**: Select either "Intent" or "Meta Intent." For an introduction to meta intents, see [here](intent-builder-meta-intents.html).
    * **Training**: Enter as many training phrases as possible. The NLU engine uses training phrases in order to match a user's utterance with an intent. The more training phrases you include, the more likely it is that the NLU engine will accurately match the user's intent. Generally speaking, the phrases should be complete sentences (not long paragraphs, and not keywords). As an example, assume you have a "Check bill" intent. You might add the following training phrases, among others:
        * I want to check the status of my bill
        * Tell me what my bill is
        * I need to look into what's going with my bill


        For more, see *Best practices* farther below.

4. Click **Save**.
5. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the addition is reflected in a new model version.


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


### Best practices

To increase the quality of your intent matches, follow the best practices below.

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

#### Intents

Technically, there isn’t a limit on the number of intents that a domain can have, but the following are best practices:

* The actual number of intents needed in a domain depends on the use case. However, a good guideline for a limit is a maximum of 50 (recommended) to 100 (if necessary).

* If you need to exceed 50 intents, ensure there’s a strong business justification for doing so, and consider the following questions:
    * Are that many intents necessary? 
    * Can you conceptually categorize the intents and cluster them, i.e., can they be grouped into different intent domains? 
    * What are the use cases, bot structures, etc., that are impacting the decision?

    If you proceed and exceed the guideline, start with a smaller number of intents, and iteratively test as you add more. For example, add 20 intents with training phrases, test them, add 5 more, test again, and repeat the process. This helps to ensure that the intent training yields the results you expect. You might find that at some point (often somewhere between 50 and 100 intents), you will start to see issues with the NLU performance when intent matching.
* Keep in mind the following:
    * Exceeding the aforementioned guideline impacts the *training* of domains using the LivePerson NLU v2 engine or a 3rd-party engine. The larger the intent model, the longer that training takes. Large, complex models can sometimes time out during training.
    * Exceeding the aforementioned guideline impacts *tuning* in all cases. Every intent requires a set of training phrases that you must manually add and adjust so that the intent model performs as you expect. The more intents you have, the larger this effort is. Moreover, exceeding the guideline might introduce problems, e.g., mistakes and/or overlap among training phrases. This can yield results that are hard to manage.

#### Training phrases

The following are best practices when creating training phrases; these help to ensure your intents are well-trained and return the results you expect.

##### One sentence, not multiple (LivePerson NLU v1 only)
If the domain is using the LivePerson NLU v1 engine, use a simple, concise sentence. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

##### 10-25 training phrases
The number of training phrases that you need really depends upon your use case and type of intents. Generally, for intents, it is recommended that you have between 10 - 25 good training phrases. When you have more than that, it's likely that you have overtrained the intent, which might lead to false positives.
