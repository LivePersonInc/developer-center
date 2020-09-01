---
pagename: Introduction
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: LivePerson Knowledge Bases
permalink: knowledge-base-liveperson-knowledge-bases-introduction.html
indicator: both
---

### What's a LivePerson knowledge base?

A LivePerson knowledge base is one whose content you can create and manage directly within the Knowledge Base application. You can:

* Start from scratch, and add articles directly within the application.
* Do a one-time import of articles from a CSV file, and maintain the articles thereafter within the Knowledge Base application.
* Link the knowledge base to a Google sheet. You can maintain the Google sheet and sync the knowledge base to overwrite the knowledge base with the sheet’s contents. Or, you can add the knowledge base using the Google sheet and work thereafter entirely within the Knowledge Base application.

A LivePerson knowledge base always makes use of a Natural Language Understanding (NLU) engine to evaluate the articles in the knowledge base against the consumer’s utterance (the intent). The articles, which have associated intents, are matched and scored by the engine, and the most accurate article is sent to the inquiring consumer. For more on NLU scoring, see here.

### High-Level Workflow

When adding a LivePerson knowledge base, follow this workflow:

1. In Knowledge Base:
    1. Add the LivePerson knowledge base. In this step you can import articles from a CSV file or link to a Google sheet that contains them.
    2. Add the articles if necessary.
    3. Train the articles to match consumer utterances, and then test with the Debugger tool. The latter simulates a Knowledge Base integration within a bot.
2. In Conversation Builder, add a Knowledge Base integration in a bot and test.

