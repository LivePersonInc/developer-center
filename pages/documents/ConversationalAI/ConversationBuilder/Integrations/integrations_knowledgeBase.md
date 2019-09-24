---
pagename: Knowledge Base integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-knowledge-base-integrations.html
indicator: both
---

Use a Knowledge Base integration when you want to search one of your knowledge bases for articles. You’ll need to create the knowledge base first; for help with that, see [this page](knowledge-base-overview.html).

**To add a Knowledge Base integration**

1. Open the bot, and click **Integrations** in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select **Knowledge Base**.
    - **Knowledge Base**: Select the knowledge base to search. You can select from all public knowledgge bases that exist under your organization.
    - **Methods**:
        - *Phrase Search*: Select this method to search for the phrase defined in the request parameter (see "phrases" below) against only the title and summary fields in the articles.
        - *Special Tag Search*: Articles in a knowledge base can have assigned tags, which highlight key words or phrases in the article. Select this method to search for the phrase defined in the request parameter (see "phrases" below) against only the tags in the articles.
    - **Request Parameters**:
        - *mode*: 
            - *Intents*: 
            - *Intents Only*: 
            - *All*: 
        - *threshold*: The knowledge base uses Natural Language Understanding (NLU) algorithms to match articles to the input phrases, and it assigns a score based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR, and POOR. Use this field to specify the minimum score that a result must have in order to be returned. You can select from VERY GOOD, GOOD, or FAIR PLUS. The default value is GOOD. If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations.
        - *phrases*:   Enter the phrase for which to search. The default value is {$query}, which represents/stores the last, complete response sent by the consumer.
        - *multipleResults*: Select the number of results to return from the knowledge base, anywhere from one to five. The default value is 1 (one).
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).
3. Click Save.