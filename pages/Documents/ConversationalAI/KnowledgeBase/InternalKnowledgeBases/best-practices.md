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

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

### Limits

To promote best practices, limits are enforced for number of articles, the length of fields, and so on. For information on all limits, see [here](knowledge-base-limits.html).

### LivePerson NLU

If your internal knowledge base uses Knowledge Base intents, which is a legacy feature, behind the scenes the LivePerson (Legacy) engine is used for intent matching.

For better performance and a more scalable solution, LivePerson recommends that you [convert from Knowledge Base intents to Domain intents](knowledge-base-internal-knowledge-bases-knowledge-bases.html#convert-knowledge-base-intents-to-domain-intents) as soon as possible. This allows you to associate a domain that uses the LivePerson engine (or a third-party engine).

See [here](intent-manager-natural-language-understanding.html#benefits-of-liveperson-over-liveperson-legacy) for information on the benefits of LivePerson over LivePerson (Legacy).

### Number of articles

For an optimal consumer experience, design solutions that follow the best practices outlined below:

- A good guideline is 75-100 articles in a knowledge base. Keep in mind that every article requires some level of training if you’re going to use NLU (and not the text-to-text search mode).

- If you have a knowledge base that exceeds 75-100 articles, consider splitting the knowledge base into smaller ones based on category, likewise splitting the intents into domains based on category, and adding multiple knowledge base integrations. Then have the NLU match the consumer’s question to the category-based intent and search the applicable knowledge base. This yields a faster response during the conversation.

    If you have a knowledge base that exceeds 75-100 articles, also consider using Domain intents, and, for the domain, use the LivePerson engine. It has better performance with large sets of data.

### Titles and training phrases

* Use full sentences, e.g., “How do I reset my password?”

* Use a simple, concise sentence, not multiple sentences. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

* The training phrases should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

### Summary and details

Keep these as brief as possible. Very long pieces of text will be split into multiple messages (after 320 characters) when sent to the consumer, and in rare cases the messages can be sent in the wrong order.

If you need to use a long piece of text, you can use the [breakWithDelay](conversation-builder-interactions-interaction-basics.html#break-point-within-a-large-block-of-text) tag to force the break at a specific point. Alternatively, you can override the behavior to break the text using the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) scripting function.
