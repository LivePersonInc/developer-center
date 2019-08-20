---
pagename: Simple FAQ
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-templates-simple-faq.html
indicator: both
---

The Simple FAQ template provides an automation that answers user questions by connecting to a Knowledge Base. This bot assumes you have already created a Knowledge Base. If you haven’t created a KB yet, you can [import this CSV template](https://static-assets.fs.liveperson.com/csbs/Retail_FAQ_KB.csv) to get started and then [please review](conversation-builder-knowledge-base.html) this information on using Knowledge Bases.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_faq_simple_image_0.png">

### Included Items

#### **Dialogs**

* Welcome
    * Greets the user and invites them to ask a question.

* FAQ Search
    * Performs the Knowledge Base search and, if a result is found, displays it.
    * If no result is found, it displays the reprompt.

#### **Integrations**

* FAQs
    * This integration connects to your Knowledge Base. 

### Configuration Needed

#### Welcome dialog

In the Welcome dialog, you can customize your Welcome message to greet the user in your brand voice. You may also wish to tell the user the types of questions you might be able to assist with (eg: "I can help answer your baggage related questions.").

#### FAQ Search dialog

The FAQ Search dialog handles calling the Knowledge Base integration and displaying the result. If no result is found, it will display the "No Article" interaction. You can customize that message as you like.

<img class="fancyimage" style="width:650px" src="img/ConvoBuilder/template_faq_simple_image_4.png">

#### FAQ Integration

{: .important}
You will need to [create a Knowledge Base](conversation-builder-knowledge-base.html#adding-a-knowledge-base) **prior** to setting up this integration.

In the Integrations area, there will be a pre-configured integration named "FAQs". "Knowledge Base" should be selected in the Integration Type menu.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/template_faq_simple_image_1.png">

Select your particular Knowledge Base from the drop down and make sure the Method is set to Phrase Search.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_faq_simple_image_2.png">

All of the additional parameters are configured for you.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/template_faq_simple_image_3.png">

#### Test Your Bot

Once you’ve got it all setup, try it out by using the Preview to make sure your articles are returning and if not, the fail message is displaying properly.

#### Deploy Your Bot

[Follow these instructions](conversation-builder-getting-started-4-connect-to-liveengage.html) for connecting your bot to LiveEnage.

Now you can test your FAQ bot and see how it answers your questions.

Here are some best practices on [training and tuning your Knowledge Base](conversation-builder-best-practices-training-and-tuning-your-intents-and-faqs.html).

