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

### Introduction

A CMS knowledge base without LivePerson AI:

* Integrates with an external content management system (CMS)
* *Doesn’t* use a Natural Language Understanding (NLU) engine to evaluate the articles in the knowledge base against the consumer’s utterance and return the highest scoring article. Instead, the utterance (search query) is simply passed on to the CMS, which uses its own query and answer API to find and return the most appropriate article.

    LivePerson recommends that you take advantage of the capabilities of NLU to perform this work. However, this isn’t required. You can use the CMS’ API instead.

### High-level workflow

When adding a CMS knowledge base without LivePerson AI, follow this high-level workflow:

1. In Knowledge Base: 
    1. Add the CMS knowledge base.
    2. Use the Search tool to test the knowledge base.
2. In Conversation Builder, add a Knowledge Base integration in a bot and test.

### Add a CMS KB without LivePerson AI

**To add a 3rd-party knowledge base without LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. Select **Non-AI-Powered Content Source**.
3. Specify the following:
    * **Content Source Name**: Enter a descriptive name for the knowledge base, e.g., “Technical Support FAQs.”
4. Click **Next**.
5. Set up the configuration needed to query the CMS and fetch the resulting article suggestions. To do this, specify the following:
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the credential to use for authentication if applicable.
    * **Request Headers**: Add any request headers to include in the request.
    * **Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **Post Body**: Enter the payload to send.
6. Click **Content Mapping**, and add the JSON transformation spec needed to transform the article’s data model to LivePerson’s Knowledge Base data model. For help with this, see here.
7. Click **Save**.

### Test the knowledge base
Testing a knowledge base that doesn’t use LivePerson AI involves using the Search tool to enter a consumer’s utterance to see the results that are returned from the CMS.

**To test the knowledge base**

1. Open the knowledge base.
    By default, the Articles tab is displayed. Initially, it doesn’t show any content because, with this type of knowledge base (one without LivePerson AI), only configuration information is stored within Knowledge Base. The content remains in the CMS.
2. On the Articles tab, enter an utterance in the search box at the top, and press Enter.
    This performs a search against the CMS.
3. Evaluate the article results that are displayed.
