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

1. Open the knowledge base, and click **Add New** in the upper-right corner.
2. Specify the following basic settings:

    * **Title**: Enter a complete sentence, e.g., "I can't remember my password."
    * **Intent Qualifiers**:
    * **Summary**: Enter a brief message to be sent to the user. You can include web links in the summary, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.
    * **Category**:
    * **Tags**: Tags are keywords (*not* sentences) that highlight the key noun(s) or word(s) in the title and intent qualifiers. These tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

3. If desired, click **Advanced Settings**, and specify the following:

    * **Input Context**:
    * **Context Intents**:
    * **Output Context**:
    * **Followup Question**:
    * **Content link**:
    * **Audio link**: 
    * **Image link**:
    * **Video link**:

4. Click **Save**.

### Best practices

To increase the quality of your content matches, follow these best practices:

* The title and the intent qualifiers should be full sentences, e.g., “How do I reset my password?”

* Per article, add *at least* 5 to 8 intent qualifiers that provide different ways people ask for the article.

* The intent qualifiers should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.