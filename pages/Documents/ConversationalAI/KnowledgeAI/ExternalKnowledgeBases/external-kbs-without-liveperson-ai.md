---
pagename: External KBs without LivePerson AI
redirect_from:
    - knowledge-base-external-knowledge-bases-external-kbs-without-liveperson-ai.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: External Knowledge Bases
permalink: knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html
indicator: both
---

### What's an external KB without LivePerson AI?

An external knowledge base without LivePerson AI:

* Integrates with an external content management system (CMS)
* *Doesn’t* use a [Natural Language Understanding (NLU) engine](intent-manager-natural-language-understanding-introduction.html) to evaluate the articles in the knowledge base against the consumer’s utterance and return the highest scoring article. Instead, the utterance (input phrase) is simply passed on to the CMS, which uses its own query and answer API to find and return the most appropriate articles. (Every CMS can have a different name for this API.)

### High-level workflow

When adding an external knowledge base without LivePerson AI, follow this high-level workflow:

1. In KnowledgeAI: 
    1. Add the external knowledge base.
    2. Use the Search tool to test the integration.
2. Expose the articles to consumers by:
    * (Conversation Builder) [Adding a KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) in a bot
    * (Conversation Orchestrator) Adding a KnowledgeAI integration as a part of an [Conversation Assist](conversation-assist-overview.html) component

### Add an external KB without LivePerson AI

**To add an external knowledge base without LivePerson AI**

1. Click **Add Knowledge Base** in the upper-right corner.
2. In the window that appears, select the **Other Connection** tab, and then select **External Knowledge Base without LivePerson AI**.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_add_wo_ai_2.png">

3. Specify the following:
    * **Knowledge Base Name**: Enter a descriptive name, e.g., “Technical Support FAQs.”
    * **Content Provider**: Select the name of the content provider. If the provider isn't listed, select "Other," and enter the name.
    * **Language**: Select the language of the content. This setting is informational only and doesn't affect the behavior of the knowledge base.
4. Click **Next**.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_add_wo_ai_1.png">

5. Define the request for the on-demand content retrieval using your CMS' query and answer API. To pass the input phrase to use when performing the search in the CMS, you must use the {inputPhrase} placeholder that's provided as per your CMS' API contract: in the URL, in the request parameters, or in the post body.

    The request should return the best article matches. Each article must contain a title and at least one of these content attributes: summary, detail, contentURL, imageURL, videoURL, or audioURL.
    * **Method**: Select the type of HTTP request method.
    * **URL**: Enter the request target, the URL.
    * **Credential**: Select the [credential](bot-accounts-credentials.html) to use for authorization if applicable.
    * **+ Add Request Headers**: Add any request headers to include in the request.
    * **+ Add Request Parameters**: Add any request parameters to pass in the URL’s query string.
    * **+ Add Post Body**: Enter the payload to send if applicable.
    * **Transformation Spec**: If you were able to select your **Content Provider** in Step 3 above, a default spec is provided here. You can use it if you haven't customized the CMS' data model. If you weren't able to select your content provider, a default spec isn't provided.
    
        Here, provide a Jolt transformation spec that can be used to "transform" the response into the LivePerson KnowledgeAI article schema. In other words, given the request, map the article suggestions/answers data model (schema) to the LivePerson KnowledgeAI data model. For more on this, see [here](knowledgeai-external-knowledge-bases-mapping-content-metadata.html).
7. Click **Save**.

### Test the CMS integration

After you've add an external knowledge base that doesn't use AI, you can test the integration with the Search tool. This involves entering a consumer utterance to see and evaluate the results that are retrieved from the CMS.

**To test the CMS integration**

1. Open the knowledge base.
2. Click **Articles** in the menu in the upper-left corner.

    Initially, the **Articles** page doesn’t show any metadata or content because, with this type of external knowledge base (one without LivePerson AI), only configuration information is stored within KnowledgeAI. The content remains in the CMS.

    <img style="width:750px" src="img/ConvoBuilder/kb_cms_no_ai_test_1.png">

2. Enter an utterance in the **Answer Tester** on the right, and click **Get answers**.

    This performs a search against the CMS.
    
3. Evaluate the article results that are displayed. If they aren't what you expect, you might need to adjust the knowledge base's configuration.

    <img style="width:800px" src="img/ConvoBuilder/kb_cms_no_ai_test_2.png">

    {: .important}
    Answers are evaluated by your external CMS. When they're returned, they're always assumed to be a match.
