---
pagename: Simple FAQ
redirect_from:
    - conversation-builder-templates-simple-faq.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-simple-faq.html
indicator: both
---

The Simple FAQ template provides a bot that answers users' questions by connecting to a knowledge base. This bot assumes you have already created a knowledge base. If you haven’t created one yet, you can [import this CSV template](https://static-assets.fs.liveperson.com/csbs/Retail_FAQ_KB.csv) to get started and then [please review](conversation-builder-knowledge-base.html) this information on using knowledge bases.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/template_faq_simple_image_0.png">

### Included items

#### Dialogs

* Welcome
    * Greets the user and invites them to ask a question.

* FAQ Search
    * Performs the Knowledge Base search and, if a result is found, displays it.
    * If no result is found, it displays the reprompt.

#### Integrations

* FAQs
    * This integration connects to your knowledge base. 

### Configuration needed

#### Welcome dialog

In the Welcome dialog, you can customize your Welcome message to greet the user in your brand voice. You might also want to tell the user the types of questions you might be able to assist with (e.g., "I can help answer your baggage-related questions.").

#### FAQ Search dialog

The FAQ Search dialog handles calling the Knowledge Base integration and displaying the result. If no result is found, it will display the "No Article" interaction. You can customize that message as you like.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/template_faq_simple_image_4.png">

#### FAQ integration

{: .important}
You will need to [create an internal knowledge base](knowledgeai-internal-knowledge-bases-knowledge-bases.html#add-an-internal-knowledge-base) **before** setting up this integration.

In the Integrations area, there will be a pre-configured integration named "FAQs". "Knowledge Base" should be selected as the **Integration Type**.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/template_faq_simple_image_1.png">

Select your particular knowledge base from the drop-down list, and make sure **Methods** is set to Phrase Search.

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/template_faq_simple_image_2.png">

All of the additional parameters are configured for you.

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/template_faq_simple_image_3.png">

{: .important}
For detailed information on adding a KnowledgeAI integration, see [here](conversation-builder-integrations-knowledgeai-integrations.html).

#### Test your bot

Once you’ve got it all setup, try it out by using the Preview to make sure your articles are returning, and, if not, the fail message is displaying properly.

#### Deploy your bot

To connect your bot to Conversational Cloud, follow [these instructions](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html). You can also try the [Deploy the Bot tutorial](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html).

Now you can test your FAQ bot and see how it answers your questions.

[Here](conversation-builder-best-practices-train-tune-nlu.html) are some best practices on training and tuning your knowledge base.
