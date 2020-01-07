---
pagename: Articles
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-articles.html
indicator: both
---

### Add an article

An article is a focused piece of content (a message) on a single topic that you want to serve to your consumers.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_articles.png">

**To add an article to a knowledge base**

1. Open the knowledge base, and click **Add New** in the upper-right corner.
2. Specify the following basic settings:
    * **Title**: Enter a complete sentence or question, e.g., "I can't remember my password." or, "Do we have a company org chart?" See farther below on this page for best practices.
    * **Intent Qualifiers**: This field is only shown if you're using [Knowledge Base intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See farther below on this page for best practices.
    * **Intent**: This field is only shown if the knowledge base is using [Domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). Select the intent to associate with the article. See farther below on this page for best practices. If needed, you can use the **Create intent** option in the drop-down list to create the intent in Intent Builder from this location. Similarly, there's an **Update training phrases** link for updating the training phrases in Intent Builder from here.
    * **Summary**: Enter a brief response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.
    * **Category**: To assign the article to a category, enter the category name. This lets you subsequently filter and find articles based on category.
    * **Tags**: Tags are keywords (*not* sentences) that highlight the key noun(s) or word(s) in the title and intent qualifiers. Tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

3. If desired, click **Advanced Settings**, and specify the following:

    * **Input Context**: Deprecated.
    * **Context Intents**: Deprecated.
    * **Output Context**: Deprecated.
    * **Followup Question**: Deprecated.
    * **Content link**:
    * **Audio link**: 
    * **Image link**:
    * **Video link**:

4. Click **Save**.

### Find articles with a specific tag

1. In the knowledge base, click <img style="width:30px" src="img/ConvoBuilder/icon_kb_tags.png"> (Tags) in the lower-right corner.
2. In the Tags panel, select the tag to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple tags.
    
    The result list is updated to include only the articles with the selected tags.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findWithTag.png">

### Find articles assigned to a specific category

1. In the knowledge base, click <img style="width:30px" src="img/ConvoBuilder/icon_kb_categories.png"> (Categories) in the lower-right corner.
2. In the Categories panel, select the category to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple categories.
    
    The result list is updated to include only the articles assigned to the selected categories.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findInCategory.png">

### Best practices

To increase the quality of your content matches, follow the best practices below.

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

#### Titles, intent qualifiers, and training phrases

* Use full sentences, e.g., “How do I reset my password?”

* Use one sentence, not multiple sentences. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

* When adding intent qualifiers or training phrases, add 10 - 15 per article. Exceeding this likely means that you have overtrained, which might lead to false positives.

* The intent qualifiers or training phrases should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

#### Tags

Tags play an important role in returning accurate results in your knowledge base. As mentioned farther above, tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

Tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences.

If you find yourself needing a large number of tags, you most likely should be using an [entity](intent-builder-entities.html).