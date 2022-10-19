---
pagename: Best Practices
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
permalink: knowledgeai-best-practices.html
indicator: both
date_updated: 2022/10/18
---

For a flexible architecture and an optimal consumer experience, follow these best practices.

### Common best practices

#### General
* Design a modular approach, where each knowledge base supports a particular classification in your business: Create knowledge bases per category, likewise split the intents into domains based on category, and add multiple knowledge base integrations for use in bots. A modular approach like this makes it easier to use a knowledge base for a specific purpose in a bot. Moreover, it yields a faster response during the conversation.
* Provide broad coverage within the knowledge base. The more diverse the content is, the more likely it is that the consumer’s query will be matched to an article.
* Keep the articles themselves short and focused.
* Evaluate whether long articles can be broken into smaller ones.
* If, during testing, you find there’s an article that isn’t returned by AI Search as the top answer, associate an intent with the article.
* Specify tags for articles: Tags are keywords, not sentences, that highlight the key noun(s) or word(s) in the article’s title, training phrases, or content. An article about health insurance might have the following tags: health, insurance, benefits. To increase the accuracy of search results, add tags.
* Take advantage of categories: You can add a category to an article, so you can find articles based on category. If the knowledge base has many articles, this makes that task easier.

#### Titles and training phrases
* Use full sentences, e.g., “How do I reset my password?”
* Follow the Intent Manager [best practices for creating training phrases](intent-manager-best-practices.html#training-phrases).

#### Summary and details
Keep these as brief as possible. The Summary section should be no longer than 120 words. The Detail section also should be short.

Very long pieces of text will be split into multiple messages (after 320 characters) when sent to the consumer, and in rare cases the messages can be sent in the wrong order.

If you need to use a long piece of text, you can use the [breakWithDelay](conversation-builder-interactions-interaction-basics.html#break-point-within-a-large-block-of-text) tag to force the break at a specific point. Alternatively, you can override the behavior to break the text using the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) scripting function.

### Best practices for external knowledge bases

#### General
* Before you begin, ensure the content in the CMS is appropriate for conversational AI.
* When you add an external knowledge base, configure it to use LivePerson AI whenever possible, and consider caching the fetched content at run time for improved performance.

#### External knowledge bases with AI
* Use the LivePerson engine for NLU, not LivePerson (Legacy). There are [many benefits](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#benefits-of-liveperson-over-liveperson-legacy) to this.
* Remember to manually [sync with the CMS](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html#sync-with-the-cms) after you make changes in the CMS.

### Best practices for internal knowledge bases

#### Limits
To promote best practices, [limits](knowledgeai-limits.html) are enforced for the number of articles, the length of fields, and so on.

#### Number of articles
* A good guideline is 75-100 articles in a knowledge base. Keep in mind that every article requires some level of training if you’re going to use NLU.
* If you have a knowledge base that exceeds 75-100 articles, consider splitting the knowledge base into smaller ones based on category, likewise splitting the intents into domains based on category, and adding multiple knowledge base integrations. Then have the NLU match the consumer’s question to the category-based intent and search the applicable knowledge base. This yields a faster response during the conversation.

#### LivePerson NLU
If your internal knowledge base uses Knowledge Base intents, which is a legacy feature, behind the scenes the LivePerson (Legacy) engine is used for intent matching. For better performance and a more scalable solution, LivePerson recommends that you [convert from Knowledge Base intents to Domain intents](knowledgeai-internal-knowledge-bases-knowledge-bases.html#convert-knowledge-base-intents-to-domain-intents) as soon as possible. This allows you to associate a domain that uses the LivePerson engine (or a third-party engine). There are many [benefits of LivePerson over LivePerson (Legacy)](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#benefits-of-liveperson-over-liveperson-legacy).
