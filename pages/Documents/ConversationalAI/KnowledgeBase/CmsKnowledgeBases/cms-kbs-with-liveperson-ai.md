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

### What's a CMS KB with LivePerson AI?
A CMS knowledge base with LivePerson AI:

* Integrates with an external content management system (CMS)
* Uses a [Natural Language Understanding (NLU) engine](intent-builder-natural-language-understanding.html) to evaluate the articles in the knowledge base against the consumer’s utterance (the intent) and return the highest scoring article. Using the capabilities of NLU to do this work is recommended for the best consumer experience.

    When you add this type of knowledge base, some article information is retrieved from the CMS and made visible within the Knowledge Base application. The information isn’t editable; it’s made visible because you need it to be able to perform some work, namely, to associate the articles with the intents in a domain and to train the knowledge base.

### High-level workflow
When adding a CMS knowledge base with LivePerson AI, follow this high-level workflow:

1. In [Intent Builder](intent-builder-overview.html), create the [domain](intent-builder-domains.html) and the [intents](intent-builder-intents.html) therein.
2. In Knowledge Base:
    1. Add the CMS knowledge base. During this step, you’ll specify the domain that you created in step 1.
    2. In the CMS knowledge base that you added, associate each article with an intent in the domain. 
    3. [Train](knowledge-base-common-common-tasks.html#train-a-knowledge-base) the articles to match consumer utterances.
3. In Conversation Builder, [add a Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot and test. Alternatively, in Conversation Orchestrator, add a Knowledge Base integration as a part of an [Agent Assist](conversation-orchestrator-agent-assist-overview.html) component.

{: .important}
After making any changes to the content in the CMS, sync with the CMS (described below). This updates the knowledge base accordingly.

### Add a CMS KB with LivePerson AI
**To add a CMS knowledge base with LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. Select **CMS - LivePerson AI**.
3. Specify the following:
    * **Content Source Name**: Enter a descriptive name for the knowledge base, e.g., “Technical Support FAQs.”
    * **Domain**: Select the name of the domain that contains the intents that you will associate with the articles.
4. Click **Next**.
5. Define the request to fetch your content's metadata. The request should return a list of articles, and each article must contain a title and unique identifier. You can optionally retrieve tags and a category as well. An article can have multiple tags but exactly one category.
    * **Method**: Select the type of HTTP request method. 
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authorization if applicable.
    * **Add Request Headers**: Add any request headers to include in the request.
    * **Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Add Post Body**: Enter the payload to send if applicable.
    * Click **Map Content Metadata**, and map the returned articles' metadata data model (schema) to the LivePerson Knowledge Base data model. For help with this, see [here](knowledge-base-cms-knowledge-bases-mapping-content-metadata.html).
6. Click **Next**.
7. Define the request for the on-demand retrieval of a single article. Use the {externalArticleId} placeholder that's provided to pass the unique identifier of the article to retrieve.

    The request should return a single article that must contain a title, a unique identifier, and at least one of these content attributes: summary, detail, contentURL, imageURL, videoURL, or audioURL.
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authorization if applicable.
    * **Add Request Headers**: Add any request headers to include in the request.
    * **Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Add Post Body**: Enter the payload to send if applicable.
    * **Cache Article Content**: If you want to temporarily cache the article content that’s returned at run time for improved performance, select the duration in minutes. 
    * Click **Map Content Metadata**, and map the single article’s content data model (schema) to the LivePerson Knowledge Base data model. For help with this, see [here](knowledge-base-cms-knowledge-bases-mapping-content-metadata.html).
9. Click **Save**.

### Associate an article with an intent
You must associate articles with intents so that--during a knowledge base search at run time--the knowledge base can use an NLU engine to evaluate the consumer's utterance against the articles' intents to determine if there is a match. The highest [scoring](knowledge-base-common-common-concepts.html#scoring-and-thresholds) articles that are found in the search are then retrieved from the CMS.

**To associate an article with an intent**

1. Open the knowledge base.
2. Search for and select the article.
3. In the Edit Article dialog box, for **Intent**, select the name of the intent to associate with the article.
    <img style="width:600px" src="img/ConvoBuilder/kb_cms_associate_article.png">
4. Click **Save**.

### Sync with the CMS
Manually syncing with the CMS does the following:

* Updates the existing articles
* Adds new articles if there are any
* Deletes all articles that aren't returned by the CMS but were stored during the previous sync

Sync with the CMS after any making changes to the content in the CMS so that the knowledge base is updated accordingly. Once you sync, you can add or update the intents associated with articles as needed.

For details on sync operations, check the knowledge base’s Change History page.

**To sync with the CMS**

1. Open the knowledge base.
2. Click **Settings** in the upper-left corner.
3. Scroll down and expand **More Options**.
4. Scroll down to **Sync Articles**, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_sync_with_cms.png">.
