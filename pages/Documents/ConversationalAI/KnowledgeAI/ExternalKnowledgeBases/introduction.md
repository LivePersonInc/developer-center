---
pagename: Introduction
redirect_from:
    - knowledge-base-external-knowledge-bases-introduction.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: External Knowledge Bases
permalink: knowledgeai-external-knowledge-bases-introduction.html
indicator: both
---

### What's an external knowledge base?

If you have a CMS that you want to leverage in bot conversations or through Conversation Assist, you can add an external knowledge base without needing to migrate your content.

An external knowledge base is one where the content is authored and managed entirely within the external CMS application. Integrating with your CMS lets your content creators use familiar tools and workflows. You can integrate with any CMS that has the capability, i.e., an API connector. Notable examples include:

* Salesforce
* Zendesk
* Contentful (Check out their [blog post](https://www.contentful.com/blog/2021/10/20/integrating-contentful-liveperson-knowledgebase/) on integrating!)

Within the KnowledgeAI application, an external knowledge base serves as a connector to the CMS. You can configure the knowledge base so that the content is selected and served:

* [Using LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html). (**Recommended**) Use LivePerson’s AI to select the articles to respond to customer utterances.
* [Without using LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html). Use the CMS' query and answer API for article suggestions/answers. (Every CMS can have a different name for this API.)

### Why use LivePerson's AI?

By using an AI-enabled knowledge base, you can offer your consumers a more helpful experience. AI-enabled knowledge bases use [Natural Language Understanding](intent-manager-natural-language-understanding-introduction.html) (NLU) technology to understand and intelligently match what consumers are asking for to articles in your knowledge base.

### Assessing your content for Messaging

Before getting started with an external knowledge base, it’s a good idea to take stock of the content in your CMS in order to assess its readiness for messaging.

In general, messages are short. Sending content that’s too long or complex can create poor consumer experiences. For the best consumer experience, consider the following:

* Make sure that all required information (e.g., title, summary, and content) is as brief as possible.
* If you require more than a brief answer, use a content URL, so the consumer can be directed to an external location for more information.
* Use rich content, such as images. For information on supported LivePerson attributes, see [here](knowledgeai-external-knowledge-bases-mapping-content-metadata.html#supported-liveperson-attributes).
* Consider the channels you are serving when preparing your content. For example, SMS can only support very simple textual content.

Keep in mind that, while knowledge bases do support URLs for video and audio, Video and Audio [statements](conversation-builder-interactions-statements.html) currently aren’t supported by Conversational Cloud. For this reason, they can’t be added to dialogs in Conversation Builder. As an alternative for video, you can use a Text statement that includes a video URL as a link.

### Getting started: Saving an incomplete knowledge base

Adding an external knowledge base can take some time, so the KnowledgeAI application gives you the option to save a knowledge base in an incomplete state. This lets you step away from the configuration work and come back to it at a later time.

Once you start the process of adding the knowledge base -- i.e., you provide a name for the knowledge base -- if you then click **Cancel**, you are prompted to choose whether to save your work:

<img style="width:350px" src="img/ConvoBuilder/kb_ext_save_draft_1.png">

Click **Yes** to save the knowledge base.

You can find your incomplete external knowledge bases listed along with your other knowledge bases on the dashboard. They're given an "Incomplete" status to indicate the the configuration is incomplete.

<img style="width:500px" src="img/ConvoBuilder/kb_ext_save_draft_2.png">

A knowledge base is considered no longer "Incomplete" once all required fields are completed for the first time.

{: .important}
Keep in mind that completing the initial setup of a knowledge base, thereby moving out of "Incomplete" status, doesn't indicate a proper configuration. You must test the knowledge base to verify this. Additionally, be aware that a knowledge base never returns to "Incomplete" status if you subsequently remove or alter required information.

To delete an incomplete knowledge base, click the knowledge base's 3-dot icon (on the right), and select **Delete**.

<img style="width:500px" src="img/ConvoBuilder/kb_ext_save_draft_3.png">