---
pagename: CMS KBs without LivePerson AI
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: CMS Knowledge Bases
permalink: knowledge-base-cms-knowledge-bases-cms-kbs-without-liveperson-ai.html
indicator: both
---

### What's a CMS KB without LivePerson AI?

A CMS knowledge base without LivePerson AI:

* Integrates with an external content management system (CMS)
* *Doesn’t* use a [Natural Language Understanding (NLU) engine](intent-builder-natural-language-understanding.html) to evaluate the articles in the knowledge base against the consumer’s utterance and return the highest scoring article. Instead, the utterance (search query) is simply passed on to the CMS, which uses its own query and answer API to find and return the most appropriate article.

    LivePerson recommends that you [take advantage of the capabilities of NLU](knowledge-base-cms-knowledge-bases-cms-kbs-with-liveperson-ai.html) to perform this work. However, this isn’t required. You can use the CMS’ API instead.

### High-level workflow

When adding a CMS knowledge base without LivePerson AI, follow this high-level workflow:

1. In Knowledge Base: 
    1. Add the CMS knowledge base.
    2. Use the Search tool to test the integration.
    3. [Test](knowledge-base-common-common-tasks.html#test-user-input) with the Debugger tool. This simulates a Knowledge Base integration within a bot.
2. In Conversation Builder, [add a Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot and test.

### Add a CMS KB without LivePerson AI

**To add a 3rd-party knowledge base without LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. Select **CMS - No LivePerson AI**.
3. Specify the following:
    * **Content Source Name**: Enter a descriptive name for the knowledge base, e.g., “Technical Support FAQs.”
4. Click **Next**.
5. Set up the on-demand content retrieval using your CMS' query and answer API. The request should pass a string to the external CMS and return the best article matches.
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authentication if applicable.
    * **Add Request Headers**: Add any request headers to include in the request.
    * **Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Add Post Body**: Enter the payload to send.
    * Click **Map Content Metadata**, and map the article’s data model to LivePerson Knowledge Base. For help with this, see [here](knowledge-base-cms-knowledge-bases-mapping-content-metadata.html).
7. Click **Save**.

### Test the CMS integration

After you've add a CMS knowledge base that doesn't use AI, you can test the integration with the Search tool. This involves entering a consumer utterance to see and evaluate the results that are retrieved from the CMS.

**To test the CMS integration**

1. Open the knowledge base.
    By default, the Articles tab is displayed. Initially, it doesn’t show any content because, with this type of knowledge base (one without LivePerson AI), only configuration information is stored within Knowledge Base. The content remains in the CMS.
2. On the Articles tab, enter an utterance in the search box at the top, and press Enter.
    This performs a search against the CMS.
3. Evaluate the article results that are displayed. If they aren't what you expect, you might need to adjust the knowledge base's configuration.
