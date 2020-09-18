---
pagename: Best Practices
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: Internal Knowledge Bases
permalink: knowledge-base-internal-knowledge-bases-best-practices.html
indicator: both
---

To increase the quality of your content matches, follow the best practices below.

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

### Number of articles

Starting on September 28, 2020, the number of articles that can be added to an internal knowledge base is limited to 250 or fewer. Internal knowledge bases created before this time are exempt from this limit. However, for an optimal consumer experience, brands are encouraged to design solutions that follow the best practices outlined here below.

- A good guideline is 75-100 articles in a knowledge base. Keep in mind that every article requires some level of training if you’re going to use NLU (and not the text-to-text search mode).

- If you have a knowledge base that exceeds 75-100 articles, consider splitting the knowledge base into smaller ones based on category, likewise splitting the intents into domains based on category, and adding multiple knowledge base integrations. Then have the NLU match the consumer’s question to the category-based intent and search the applicable knowledge base. This yields a faster response during the conversation.

    If you have a knowledge base that exceeds 75-100 articles, also consider using domain intents, and, for the domain, use LivePerson NLU v2, which has better performance with large sets of data.

### Titles, intent qualifiers, and training phrases

* Use full sentences, e.g., “How do I reset my password?”

* Use a simple, concise sentence, not multiple sentences. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

* When adding intent qualifiers or training phrases, add 10 - 15 per article. Exceeding this likely means that you have overtrained, which might lead to false positives.

* The intent qualifiers or training phrases should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

{: .important}
If you're using [domain intents](knowledge-base-internal-knowledge-bases-introduction.html#knowlege-base-intents-versus-domain-intents) (not knowledge base intents), the same guidelines apply.

### Summary and details

Technically, there aren’t any limits here, but keep these as brief as possible. Very long pieces of text will be split into multiple messages (after 320 characters) when sent to the consumer, and in rare cases the messages can be sent in the wrong order.

If you need to use a long piece of text, you can use the [breakWithDelay](conversation-builder-interactions-interaction-basics.html#break-point-within-a-large-block-of-text) tag to force the break at a specific point. Alternatively, you can override the behavior to break the text using the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) scripting function.

### Positive and negative learnings

Positive and negative learnings play a role in intent detection regardless of whether you're using knowledge base intents or domain intents. When using knowledge base intents or when using domain intents with LivePerson NLU v1, positive and negative learnings are applied during processing of user inputs. When using domain intents with LivePerson NLU v2 or a 3rd-party NLU engine, the positive learnings are applied (added) to the training phrases when the model is trained, and the negative learnings are applied during processing of user inputs.

As a general rule, don’t specify more than 20 positive learnings and 20 negative learnings. Too many positive and negative learnings can lead to learnings that “overlap” one another in terms of grammar. This results in an unpredictable user experience.