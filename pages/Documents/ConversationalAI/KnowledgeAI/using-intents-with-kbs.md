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

If your knowledge base is an [external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html) or an [internal knowledge base](knowledgeai-internal-knowledge-bases-introduction.html), it can use Natural Language Understanding or NLU to find the right answer (article) to use to respond to a consumer's message. However, using NLU isn’t always necessary. KnowledgeAI offers a powerful, alternative search method called AI Search. And unlike when using NLU, AI Search requires no setup work on your part. There are benefits to both [search methods](knowledgeai-search-methods.html).

To take advantage of NLU, you'll need to link the articles in the knowledge base to the intents in a domain.


### Getting started

1. In [Intent Manager](intent-manager-overview.html), create a domain with the necessary intents. The domain specifies the [NLU engine](intent-manager-natural-language-understanding-introduction.html) to use.

    {: .attn-note}
    Intent Manager offers a set of [prebuilt domains](intent-manager-key-terms-concepts.html#prebuilt-domains). These are designed to get you up and running quickly with intents.

2. In KnowledgeAI, associate the domain with the knowledge base. Then associate the domain's intents with the knowledge base's articles.

3. Train the knowledge base (and the underlying intents) until you get the performance you expect.

    When NLU is used, the consumer's message is evaluated against the intents that are associated with the articles, and the highest scoring articles are returned as answers.

For more details, see below.

### Associate a domain with a knowledge base

You associate a domain with an external knowledge base when you [add the knowledge base](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai):

<img style="width:700px" src="img/ConvoBuilder/kb_add_ext.png" alt="Associating a domain with an external knowledge base">

And you can likewise associate a domain with an internal knowledge base when you [add the knowledge base](knowledgeai-internal-knowledge-bases-knowledge-bases.html#add-an-internal-knowledge-base):

<img style="width:700px" src="img/ConvoBuilder/kb_add_int.png" alt="Associating a domain with an internal knowledge base">

Associating the domain gives you access to the domain's intents, so you can associate them with the articles. This is the next step in connecting your content to intents.

### Associate intents with articles

After you've associated a domain with the knowledge base, you can configure the articles so that each is linked to the appropriate intent.

<img style="width:600px" src="img/ConvoBuilder/kb_associate_article.png" alt="Associating an intent with an article">

You don’t need to link your articles to intents right away, as the **Intent** field is optional. This is deliberate because it allows you to get started with a knowledge base by adding just the articles first. Then, you can create intents for the content that can benefit from them. Any articles that don’t have associated intents can be matched to consumer queries using KnowledgeAI’s [AI Search](knowledgeai-search-methods.html). The approach gives you flexibility as you maintain the knowledge base over time.

### Tune a knowledge base

[Tuning a knowledge base](knowledgeai-optimizing-your-content-tuning-a-knowledge-base.html) is necessary for optimal performance.
