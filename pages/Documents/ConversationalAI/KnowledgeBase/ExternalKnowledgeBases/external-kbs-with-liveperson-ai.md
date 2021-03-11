---
pagename: External KBs with LivePerson AI
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: External Knowledge Bases
permalink: knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html
indicator: both
---

### What's an external KB with LivePerson AI?
An external knowledge base with LivePerson AI:

* Integrates with an external content management system (CMS)
* Uses a [Natural Language Understanding (NLU) engine](intent-builder-natural-language-understanding.html) to evaluate the articles in the knowledge base against the consumer’s utterance (the intent) and return the highest scoring article. Using the capabilities of NLU to do this work is recommended for the best consumer experience.

    When you add this type of knowledge base, some article information (e.g., title and article ID) is retrieved from the CMS and made visible within the Knowledge Base application. The information isn’t editable, but it’s made visible because you need it to be able to perform some work, namely, to associate the articles with the intents in a domain and to train the knowledge base.

### High-level workflow
When adding an external knowledge base with LivePerson AI, follow this high-level workflow:

1. In [Intent Builder](intent-builder-overview.html), create the [domain](intent-builder-domains.html) and the [intents](intent-builder-intents.html) therein.
2. In Knowledge Base:
    1. Add the external knowledge base. During this step, you’ll specify the domain that you created in step 1.
    2. In the external knowledge base that you added, associate each article with an intent in the domain. 
    3. [Train](knowledge-base-using-intents-with-kbs.html) the articles to match consumer utterances.
3. Expose the articles to consumers by:
    * (Conversation Builder) [Adding a Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot
    * (Conversation Orchestrator) Adding a Knowledge Base integration as a part of an [Agent Assist](conversation-orchestrator-agent-assist-overview.html) component

{: .important}
After making any changes to the content in the CMS, sync with the CMS (described below). This updates the knowledge base accordingly.

### Add an external KB with LivePerson AI
**To add an external knowledge base with LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. On the **AI Enabled** tab of the window that appears, select **External Knowledge Base**.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_add_w_ai_3.png">

3. Specify the following:
    * **Knowledge Base Name**: Enter a descriptive name, e.g., “Technical Support FAQs.”
    * **Content Provider**: Select the name of the content provider. If the provider isn't listed, select "Other," and enter the name.
    * **Domain**: Select the name of the domain that contains the intents that you will associate with the articles. Take care when selecting the domain; you can't change the domain after adding the knowledge base.
4. Click **Next**.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_add_w_ai_1.png">

5. Define the request to fetch your content's metadata. The request should return a list of articles, and each article must contain a title and unique identifier. You can optionally retrieve tags and a category as well. An article can have multiple tags but exactly one category.
    * **Method**: Select the type of HTTP request method. 
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authorization if applicable.
    * **+ Add Request Headers**: Add any request headers to include in the request.
    * **+ Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **+ Add Post Body**: Enter the payload to send if applicable.
    * **Transformation Spec**: If you were able to select your **Content Provider** in Step 3 above, a default spec is provided here. You can use it if you haven't customized the CMS' data model. If you weren't able to select your content provider, a default spec isn't provided.
    
        Here, provide a Jolt transformation spec that can be used to "transform" the response into the LivePerson Knowledge Base article schema. In other words, given the request, map the returned articles' metadata data model (schema) to the LivePerson Knowledge Base data model. For more on this, see [here](knowledge-base-external-knowledge-bases-mapping-content-metadata.html).

    **Note**: Configure the connector payload to target only the content that you want to use as a part of this knowledge base. If you add the knowledge base with clear domain scoping -- limiting the content as needed -- the knowledge base will perform better and be easier to tune.

6. Click **Next**.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_add_w_ai_2.png">

7. Define the request for the on-demand retrieval of a single article. To pass the unique identifier of the article to retrieve, you must use the {externalArticleId} placeholder that's provided as per your CMS' API contract: in the URL, in the request parameters, or in the post body.

    The request should return a single article that must contain a title, a unique identifier, and at least one of these content attributes: summary, detail, contentURL, imageURL, videoURL, or audioURL.
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authorization if applicable.
    * **Add Request Headers**: Add any request headers to include in the request.
    * **Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Add Post Body**: Enter the payload to send if applicable.
    * **Cache Article Content**: If you want to temporarily cache the article content that’s returned at run time for improved performance, select the duration in minutes. 
    * **Transformation Spec**: Here again, if you were able to select your **Content Provider** in Step 3 above, a default spec is provided. You can use it if you haven't customized the CMS' data model. If you weren't able to select your content provider, a default spec isn't provided.
    
        Here, provide a Jolt transformation spec that can be used to "transform" the response into the LivePerson Knowledge Base article schema. In other words, given the request, map the single article’s content data model (schema) to the LivePerson Knowledge Base data model. For more on this, see [here](knowledge-base-external-knowledge-bases-mapping-content-metadata.html).
9. Click **Save**.

### Associate an article with an intent
You must associate articles with intents so that--during a knowledge base search at run time--the knowledge base can use an NLU engine to evaluate the consumer's utterance against the articles' intents to determine if there is a match. The highest [scoring](knowledge-base-using-intents-with-kbs.html#scoring-and-thresholds) articles that are found in the search are then retrieved from the CMS.

{: .important}
An intent can't be used more than once, i.e., in more than one article.

**To associate an article with an intent**

1. Open the knowledge base, and use the **Articles** page to search for the article.
2. On the search results page, use the **Intent** dropdown to select the name of the intent to associate with the article. From this dropdown, you can also create the intent on-the-fly if needed.

    <img style="width:800px" src="img/ConvoBuilder/kb_cms_associate_article.png">
    
### Sync with the CMS
Manually syncing with the CMS does the following:

* Updates the existing articles
* Adds new articles if there are any
* Deletes all articles that aren't returned by the CMS but were stored during the previous sync

Sync with the CMS after making any changes to the content in the CMS so that the knowledge base is updated accordingly. Once you sync, you can add or update the intents associated with articles as needed.

For details on sync operations, check the knowledge base’s Change History page.

**To sync with the CMS**

1. Open the knowledge base.
2. Click **Settings** in the upper-left corner.
3. Scroll down and expand **More Options**.
4. Scroll down to **Sync Articles**, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_sync_with_cms.png">.
