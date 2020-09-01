---
pagename: CMS KBs with LivePerson AI
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: CMS Knowledge Bases
permalink: knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html
indicator: both
---

### What's a CMS knowledge base with LivePerson AI?
A CMS knowledge base with LivePerson AI:

* Integrates with an external content management system (CMS)
* Uses a [Natural Language Understanding (NLU) engine](intent-builder-natural-language-understanding.html) to evaluate the articles in the knowledge base against the consumer’s utterance (the intent) and return the highest scoring article. Using the capabilities of NLU to do this work is recommended for the best consumer experience.

    When a knowledge base uses NLU, some article information is retrieved from the CMS and made visible within the Knowledge Base application. This information isn’t editable; it’s made visible because you need it to be able to associate the articles with the intents in a domain.

### High-level workflow
When adding a CMS knowledge base with LivePerson AI, follow this high-level workflow:

1. In Intent Builder, create the domain and the intents therein.
2. In Knowledge Base:
    1. Add the CMS knowledge base. During this step, you’ll specify the domain that you created in step 1.
    2. In the knowledge base that you added, associate each article with an intent in the domain.
    3. Train the articles to match consumer utterances, and then test with the Debugger tool. The latter simulates a Knowledge Base integration within a bot.
3. In Conversation Builder, add a Knowledge Base integration in a bot and test.

{: .important}
Sync with the CMS after making changes to the content in the CMS. This updates the knowledge base accordingly.

### Add a CMS KB with LivePerson AI
**To add a CMS knowledge base with LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. Select **AI Powered Content Source**.
3. Specify the following:
    * **Content Source Name**: Enter a descriptive name for the knowledge base, e.g., “Technical Support FAQs.”
    * **Domain**: Select the name of the domain that contains the intents that you will associate with the articles.
4. Click **Next**.
5. Set up the configuration needed to map the content’s metadata (article ID, article title, etc.). To do this, specify the following:
    * **Method**: Select the type of HTTP request method. 
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the credential to use for authentication if applicable.
    * **Request Headers**: Add any request headers to include in the request.
    * **Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Post Body**: Enter the payload to send.
6. Click **Content Mapping**, and map the article’s data model to LivePerson’s Knowledge Base data model. For help with this, see farther below on this page.
7. Click **Next**.
8. Set up the configuration needed to query the CMS at run time and return the matched content, which is a single article specified by its article ID. To do this, specify the following:
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the credential to use for authentication if applicable.
    * **Request Headers**: Add any request headers to include in the request.
    * **Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Post Body**: Enter the payload to send.
    * **Cache Article Content**: If you want to temporarily cache the article content that’s returned at run time for improved performance, select the duration in minutes. 
9. Click **Content Mapping**, and map the article’s data model to LivePerson’s Knowledge Base data model. For help with this, see farther below on this page.
10. Click **Save**.

### Map content (popular CMS vendors)
To do - need to meet to discuss

### Map content (other vendors)
To do - need to meet to discuss

### Associate an article with an intent
You associate an article with an intent so that--during a knowledge base search at run time--the knowledge base can use an NLU engine to evaluate the article against the consumer’s utterance to determine if there is a match. The highest scoring article that is found in the search is returned. For more on NLU scoring, see here.

**To associate an article with an intent**

1. Open the knowledge base.
2. Search for and select the article.
3. For **Intent**, select the name of the intent to associate with the article.
    SCREEN
4. Click **Save**.

### Sync with the CMS
Manually syncing with the CMS does the following:

* Updates the existing articles
* Adds new articles if there are any
* Disables all articles that aren’t returned by the CMS

Sync with the CMS after making changes to the content in the CMS, so that the knowledge base is updated accordingly. Once you sync, you can add or update the intents associated with articles as needed.

For details on sync operations, check the knowledge base’s Change History page.

**To sync with the CMS**

1. Open the knowledge base.
2. Click **Settings** in the upper-left corner.
3. Scroll down and expand **More Options**.
4. Scroll down to **Sync Articles** and click [ icon ].
