---
pagename: Overview
redirect_from:
    - conversation-builder-templates-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot templates
permalink: conversation-builder-bot-templates-overview.html
indicator: both
---

To help you get started, every Conversation Builder bot that you create is based on a bot template. There are two general types of bot templates:

* Custom
* Industry-specific

### Custom bot templates

Use a Custom bot template when you want to create a bot from scratch.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/template_custom_types.png" alt="The Choose a Bot Template window, which shows the two custom types: custom and survey">

There are two templates available:

* **Custom Bot**: Use this template to [create a bot from scratch](conversation-builder-bots-custom-bots.html) that accomplishes a business function, such as fetching a consumer’s order status or creating an account for the consumer. When you create a bot based on this template, the bot is configured minimally. For example, it includes just a Welcome dialog and a Fallback dialog.
* **Survey Bot**: Use this template to [create a post-conversation survey bot](conversation-builder-bots-post-conversation-survey-bots.html) from scratch. Here again, the bot is configured minimally. These bots include special interactions and functionality designed to support a *post-conversation* survey experience. For example, you can include predefined interactions for capturing standard survey metrics like Customer Satisfication (CSAT) and Net Promoter Score (NPS).

### Industry-specific bot templates

To support common use cases, Conversation Builder offers a set of predefined, industry-specific bot templates, and bot templates for general use cases like routing or FAQs. These enable rapid adoption of automation. Each template can contain:

* The intents associated with the use case
* The conversational dialogs with appropriate interactions for the respective channels or end points (Web, Apple Messages for Business, SMS, etc.)
* The API integrations with industry-leading services (e.g., Shopify in Retail) and brand-specific services

#### Create a bot from an industry-specific template
1. From the dashboard that lists your bots, click **New Bot** in the upper-right corner.
2. Select the bot template.
3. Review the template’s description, and click **Create Bot**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/template_industry_specific.png" alt="The Choose a Bot Template window, which shows the list of industry-specific templates, one with the Create Bot button displayed">

4. Configure the parts that need to be customized: API integration details, brand voice in dialog interactions, etc.
