---
pagename: Using Intents with KBs
redirect_from:
    - conversation-builder-knowledge-base.html
    - knowledge-base-using-intents-with-kbs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
permalink: knowledgeai-using-intents-with-kbs.html
indicator: both
---

### Why use intents?

If your knowledge base is an [external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html) or an [internal knowledge base](knowledgeai-internal-knowledge-bases-introduction.html), it can make use of Natural Language Understanding or NLU to find the right answer (article) to use to respond to a consumer's message. What's so great about NLU? It's superior to the alternative, which is text-based search. NLU is much more nuanced and leverages AI to identify various attributes of a message: meaning, intent, sentiment, and more. It makes answer retrieval more accurate.

To take advantage of NLU, you'll need to link the articles in the knowledge base to the intents in a domain. So, in summary, using intents is the way you tap into the power of NLU.

### Getting started

1. In [Intent Manager](intent-manager-overview.html), create a domain with the necessary intents. The domain specifies the [NLU engine](intent-manager-natural-language-understanding-introduction.html) to use.

    {: .important}
    Intent Manager offers a set of [prebuilt domains](intent-manager-key-terms-concepts.html#prebuilt-domains). These are designed to get you up and running quickly with intents.

2. In KnowledgeAI, associate the domain with the knowledge base. Then associate the domain's intents with the knowledge base's articles.

3. Train the knowledge base (and the underlying intents) until you get the performance you expect.

    When NLU is used, the consumer's message is evaluated against the intents that are associated with the articles, and the highest scoring article is returned as the answer.

For more details, see below.

### Associate a domain with a knowledge base

You associate a domain with an external knowledge base when you [add the knowledge base](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai):

<img style="width:700px" src="img/ConvoBuilder/kb_add_ext.png" alt="">

And you can likewise associate a domain with an internal knowledge base when you [add the knowledge base](knowledgeai-internal-knowledge-bases-knowledge-bases.html#add-an-internal-knowledge-base):

<img style="width:700px" src="img/ConvoBuilder/kb_add_int.png" alt="">

Associating the domain gives you access to the domain's intents, so you can associate them with the articles. This is the next step in connecting your content to intents.

### Associate intents with articles

After you've added a knowledge base that is associated to a domain, configure the articles so that each is linked to the appropriate intent.

<img style="width:600px" src="img/ConvoBuilder/kb_associate_article.png" alt="">

You don’t need to link your articles to intents right away, as the **Intent** field is optional. This is deliberate because it allows you to get started with a knowledge base by adding just the articles first. Then, you can create intents for the content you care about the most, and link those to the relevant articles. This means you can focus on specific content areas in your knowledge base, and manage the content overall with varying levels of effort on your part. The approach gives you flexibility as you maintain the knowledge base over time.

### Tune a knowledge base

For information on this, see [here](knowledgeai-optimizing-your-content-tuning-a-knowledge-base.html).

### Scoring and thresholds

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR.

| If the knowledge base is... | Then... |
| --- | --- |
| an external knowledge base with LivePerson AI | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Domain intents | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Knowledge Base intents (intent qualifiers) | the scoring breakdown for LivePerson (Legacy) is used |

For these confidence score breakdowns, see [here](intent-manager-key-terms-concepts.html#confidence-score-and-threshold).

When you implement a knowledge base search within a bot via a [Knowledge AI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions), you specify the minimum score that a result must have in order to be returned. You can select from VERY GOOD, GOOD or FAIR PLUS. The default value is GOOD. If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.
