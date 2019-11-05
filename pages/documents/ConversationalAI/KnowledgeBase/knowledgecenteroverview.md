---
pagename: Overview
redirect_from:
    - conversation-builder-knowledge-base.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-overview.html
indicator: both
---

A bot is a great way to provide help and information. Consumers can ask questions to your bot conversationally, and the bot can respond with answers and links to relevant content. Information like this is provided to the bot using a knowledge base.

The Knowledge Base application in the Conversation Builder platform allows you to create and manage knowledge bases and articles, which are then processed by our NLU engine. This allows your bot to leverage [intents](conversation-builder-intent-builder-overview.html) and [entities](conversation-builder-intent-builder-entities.html) to recommend the most accurate articles to an inquiring consumer. FAQ bots and Agent Advisor widgets are both driven by a knowledge base full of articles, intelligently delivering the right content to the consumer at the right time.

<img class="fancyimage" style="width:750px" src="img/beaut_kb_2.png">

### How a knowledge base works

The Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match articles to consumer input. Each article has a title and a series of intent qualifiers, against which the NLU engine compares the consumer's input. If it finds a match to a reasonable degree of certainty, it will "serve" the appropriate article to the consumer.

The key article attributes that the NLU uses for matching are:

* Title
* Intent qualifiers
* Summary
* Any positive or negative learnings that the article has acquired

The title and the intent qualifiers are [intents](conversation-builder-intent-builder-overview.html).

Tags are used to highlight the key nouns in the intent and title. For instance “How do I reset my password?” would have a tag of “password” and perhaps “reset”.

The Knowledge Base returns results scored as VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR.

### Adding a knowledge base

1. In the Dashboard, click **Add Knowledge Base** in the upper-right corner.
2. Specify the following:
    * **Data source name**: 
    * **Data source type**: Select "Knowledge Base."
    * **Language**: 
    * **Import articles from**: You can add articles manually, but if you have them in an external file, you can import them when you add the knowledge base. Select either "CSV" or "Google Sheet," and use the controls provided to upload the file's contents.
    * **Intent Association**: Select either "Knowledge Base Intents" or "Domain Intents." If you select "Domain Intents," also select the domain from the list that appears.
3. Click **Add**.
    
    Once you've created a Knowledge Base, select it to enter its search view. In this default view, you can search the title, intent qualifiers and content of your different articles. 

### Settings toolbar

Inside a knowledge base, in the lower-right corner, you'll find a toolbar that provides access to the following panels:

* **Chat**: This panel allows you to select a bot that you've previously created and linked to the knowledge base, and feed it test user input to see if it matches content as you'd expect.

* **Tags**: This panel displays all tags that you've previously used, so you can review all of them in one place and reuse them in any future articles.

* **Categories**: This panel displays all categories that you've previously used, so you can review all of them in one place and reuse them in any future articles.

* **Test User Input**: This panel is similar to the first panel but is divorced from a specific bot. You can use it to feed user input directly into a knowledge base and test your content matching without the context of an actual dialog.

* **Knowledge Base Menu**: This panel provides access to various knowledge base settings and features.

* **Intents Analytics**: This is a data panel that shows you historical information on the intents that were and weren't matched to your knowledge base articles by bots.