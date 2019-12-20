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

**To add an article to a knowledge base**

Q - Summary and detail can include HTML, correct?

1. Open the knowledge base, and click **Add New** in the upper-right corner.
2. Specify the following basic settings:

    * **Title**: Enter a complete sentence or question, e.g., "I can't remember my password." or, "Do we have a company org chart?" See farther below on this page for best practices.
    * **Intent Qualifiers**: Intent qualifiers are alternative ways that people ask for the article. If you're using Knowledge Base intents, enter the intent qualifiers. If you're using Domain intents, skip this field. For an understanding of the two, see [here](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) in the Overview. See farther below on this page for best practices.
    * **Summary**: Enter a brief response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.
    * **Category**: To assign the article to a category, enter the category name. This lets you subsequently filter articles based on category, so you can quickly find what you need.
    * **Tags**: Tags are keywords (*not* sentences) that highlight the key noun(s) or word(s) in the title and intent qualifiers. These tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

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

### Find articles assigned a specific tag

1. In the knowledge base, click <img style="width:30px" src="img/ConvoBuilder/icon_kb_categories.png"> (Categories) in the lower-right corner.
2. In the Tags panel, select the tag to highlight it.
<img style="width:30px" src="img/ConvoBuilder/icon_kb_tags.png">
    The result list is updated to include only the articles with the selected tag.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findWithTag.png">

### Find articles assigned to a specific category

1. In the knowledge base, click <img style="width:30px" src="img/ConvoBuilder/icon_kb_categories.png"> (Categories) in the lower-right corner.
2. In the Categories panel, select the category to highlight it.
    The result list is updated to include only the articles assigned to the selected category.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findInCategory.png">

### Best practices

To increase the quality of your content matches, follow these best practices:

#### Titles and intent qualifiers

* The title and the intent qualifiers should be full sentences, e.g., “How do I reset my password?”

* The title and the intent qualifiers should be one sentence, not multiple sentences. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

* When adding intent qualifiers, add around 10 per article. If you add more than 10-15, it's likely that you have overtrained the intent, which might lead to false positives.

* The intent qualifiers should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

#### Tags

Tags play a very important role in returning accurate results in your knowledge base. As mentioned above, tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

Where the training phrases should be intents (e.g., complete sentences), the tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. Remember, these should be words, not sentences.

If you find yourself needing a large number of tags, you most likely should be using an [entity](intent-builder-entities.html).