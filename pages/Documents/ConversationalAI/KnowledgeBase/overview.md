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

### Introduction

A knowledge base exposes a repository of articles that support a particular classification in your business. As an example, the following is an illustration of a [LivePerson knowledge base](knowledge-base-liveperson-knowledge-bases-introduction.html) that contains Human Resources FAQs.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_overview.png">

When used in a bot, a knowledge base is a great tool to answer questions about a variety of topics specific to the bot's area of expertise. Typically, in Conversation Builder, you might add a knowledge base integration in a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html) to provide simple answers to topics not covered elsewhere in the bot. Alternatively, you might have an FAQ bot that is driven by a knowledge base full of articles.

In the Knowledge Base application, you add and manage knowledge bases. The knowledge bases either contain articles, or they integrate with an external content source that contains them. In the Conversation Builder application, you [integrate the knowledge bases](conversation-builder-integrations-knowledge-base-integrations.html) with your bots.

### Content sources
You can create knowledge bases using a variety of content sources:

* Content management system (CMS)
* Google sheet
* CSV file

You can also start from scratch and author articles directly in a knowledge base.

#### Content management systems (CMS)
If you have a CMS with well-curated content that you want to leverage in bot conversations, you can [add a CMS knowledge base](knowledge-base-cms-knowledge-bases-introduction.html). This is one where the content is authored and managed entirely within the external CMS application. Integrating with your CMS lets your content creators use familiar tools and workflows to author and manage the content.

#### Google sheets
If your tool of choice is a simple Google sheet, you can [add a LivePerson knowledge base](knowledge-base-liveperson-knowledge-bases-knowledge-bases.html) and link the sheet to it. Once you add the knowledge base using the sheet, you can follow one of two workflows:

* Add and update the articles in the linked Google sheet as needed, and then [sync the knowledge base](knowledge-base-liveperson-knowledge-bases-knowledge-bases.html#sync-with-a-google-sheet) to overwrite the knowledge base with the contents in the sheet.
* [Add](knowledge-base-liveperson-knowledge-bases-articles.html) and update the articles directly in the knowledge base as needed. They are editable within the UI to support this workflow. Sync plays no role in this workflow.

#### CSV files
If your tool of choice is a simple CSV sheet, you can [add a LivePerson knowledge base](knowledge-base-liveperson-knowledge-bases-knowledge-bases.html) and import the contents of the CSV file when you do. The import is a one-time operation when you add the knowledge base. Thereafter, you add and update the articles directly in the knowledge base.

#### Starting from scratch
If you’re starting a knowledge base from scratch, and you prefer to work directly in the Knowledge Base application, you can also do this. Simply [add a LivePerson knowledge base](knowledge-base-liveperson-knowledge-bases-knowledge-bases.html) and start [adding articles](knowledge-base-liveperson-knowledge-bases-articles.html).

### Access Knowledge Base

**To access the Knowledge Base application**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Knowledge Base**.
