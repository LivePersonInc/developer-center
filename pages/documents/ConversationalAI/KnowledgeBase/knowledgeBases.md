---
pagename: Knowledge Bases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-knowledge-bases.html
indicator: both
---

### How a knowledge base works

The Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match articles to consumer input. Each article has a title and a series of intent qualifiers, against which the NLU engine compares the consumer's input. If it finds a match to a reasonable degree of certainty, it will "serve" the appropriate article to the consumer.

The key article attributes that the NLU uses for matching are:

* Title
* Intent qualifiers
* Summary
* Any positive or negative learnings that the article has acquired

The title and the intent qualifiers are [intents](intent-builder-intents.html).

Tags are used to highlight the key nouns in the intent and title. For instance “How do I reset my password?” would have a tag of “password” and perhaps “reset”.

The Knowledge Base returns results scored as VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR.

### Best practices

To increase the quality of your content matches, follow these best practices:

* The Knowledge Base returns results scored as VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally, we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS, but be sure to test to make sure the quality of the returned results meets your expectations.

### Add a knowledge base

1. In the Dashboard, click **Add Knowledge Base** in the upper-right corner.
2. Specify the following:
    * **Data source name**: Enter a name for the knowledge base.
    * **Data source type**: Select "Knowledge Base."
    * **Language**: Select the language of the content in the knowledge base.
    * **Import articles from**: You can add articles manually, but if you have them in an external file, you can import them when you add the knowledge base. Select either "CSV" or "Google Sheet," and use the controls provided to upload the file's contents.
    * **Intent Association**: Select either "Knowledge Base Intents" or "Domain Intents." If you select "Domain Intents," also select the domain from the list that appears.
3. Click **Add**.

    Once you've created a Knowledge Base, select it to enter its search view. In this default view, you can search the title, intent qualifiers and content of your different articles.

### Prepare an import file

If you want to import a set of articles into a knowledge base, you can do that by preparing an import file, either a CSV file or a Google sheet.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_importFile.png">

**To download a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, scroll down to the **Download Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_download.png"> (Download icon).
4. Follow the browser prompts to access and save the CSV file to a location of your choice.
