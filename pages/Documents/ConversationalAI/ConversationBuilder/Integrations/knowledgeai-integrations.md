---
pagename: KnowledgeAI Integrations
redirect_from:
    - conversation-builder-integrations-knowledge-base-integrations.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-knowledgeai-integrations.html
indicator: both
---

### Introduction

{: .attn-note}
KnowledgeAI integrations are a legacy feature. For a simpler, more powerful approach, use a [Knowledge AI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) within the bot; it doesn't require a KnowledgeAI integration.

Use a KnowledgeAI integration when you want to search one of your knowledge bases for articles. You’ll need to [create the knowledge base](knowledgeai-overview.html) first.

One use case for this type of integration is within a fallback dialog, to funnel user utterances into a knowledge base search. If an appropriate search result is found, it can be displayed. If no results are found, you might then display a "sorry" message or [transfer the conversation](conversation-builder-interactions-integrations.html#agent-transfer-interactions) to a human agent.

{: .attn-note}
The [Simple FAQ bot template](conversation-builder-templates-simple-faq.html) provides a bot that answers users' questions by connecting to a knowledge base.

### Add a KnowledgeAI integration

1. Open the bot, and click **Integrations** in the upper-left corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **KnowledgeAI**.
    - **Knowledge Base**: Select the knowledge base to search. You can select from all public knowledge bases that exist under your organization.
    - **Method**: This is always "Phrase Search," which means the search is performed using the phrase that's defined in the request parameter.
    - **Request Parameters**:
        - *mode*: Select from the following [search methods](knowledgeai-search-methods.html): KnowledgeAI (recommended), Intent match only, or AI search only. In Production, we recommend that you use the “KnowledgeAI” offering. The “Intent match only” and “AI search only” options are primarily intended for testing and for diagnosing issues during troubleshooting. This field isn't shown if you've selected an [external knowledge base that doesn't use LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html).
        - *threshold*: Select the [threshold](knowledgeai-search-methods.html#thresholds) (minimum score) that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. This field isn't shown if you've selected an [external knowledge base that doesn't use LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html).
        - *phrase*: Enter the phrase for which to search. The default value is [{$query}](conversation-builder-variables-slots-variables.html#store-the-consumers-response), which represents/stores the last, complete response sent by the consumer.
        - *multipleResults*: Select the number of results to return from the knowledge base, anywhere from one to five. The default value is 1.
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add [the fields](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields) that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields.
3. Click **Save**.

### Best practices

When integrating answers from KnowledgeAI into a bot, carefully consider where in the bot flow it’s best to do this. You want the consumer’s utterance to be answered by the right, topically relevant knowledge base, at the right time. For example, in a bot that can handle billing tasks and questions, plug in a “Billing questions” knowledge base. This kind of contextual approach is more focused, so it generally yields a high answer rate.

In contrast, strategies that are less targeted can yield a lower answer rate. For example, plugging a *general purpose* knowledge base into the Fallback dialog is an option, but it could yield a low answer rate.