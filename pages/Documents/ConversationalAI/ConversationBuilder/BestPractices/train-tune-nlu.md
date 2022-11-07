---
pagename: Train & Tune NLU
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
redirect_from:
  - conversation-builder-best-practices-training-and-tuning-your-intents-and-faqs.html
  - conversational-ai-platform-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
  - conversational-ai-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
permalink: conversation-builder-best-practices-train-tune-nlu.html
indicator: both
---

### Introduction

Within a bot, you might be using intents and entities to trigger a dialog, or you might be using a knowledge base to return articles. Both of these require the use of Natural Language Understanding (NLU) algorithms.

Below are some best practices to keep in mind while using intents, entities, and knowledge bases, and while troubleshooting any issues that might occur.

### Leverage bot analytics

The Analytics portal can help you understand which of your intents are matching (or not) and give you the information you need to train and tune your intents. For help with leveraging analytics in this way, see [this section](bot-analytics-tuning-opportunities.html).

If you see utterances in the **Unmatched Phrases** that should be matching a particular intent or Knowledge Base article, you can add them to the training phrases for these items. Keep in mind the best practices for creating training phrases for [intents](intent-manager-best-practices.html) and [internal knowledge bases](knowledgeai-best-practices.html).

### Use good training phrases

There are a number of reasons why your intent or knowledge base might be failing to return a result as you would expect. One of the most common causes is a lack of adequate training phrases. Follow best practices when creating training phrases; these help to ensure your intents and knowledge bases are well-trained and return the results you expect.

* [Best practices for intents](intent-manager-best-practices.html)
* [Best practices for internal knowledge bases](knowledgeai-best-practices.html)

### Test, train and tune

Training your intents or knowledge base is generally done by testing utterances, reviewing the results, and adding more training phrases as needed if the responses are returning with lower than desired scores.

* [Training intents](intent-manager-build-test-a-single-utterance.html)
* [Training a knowledge base](knowledgeai-using-intents-with-kbs.html)
