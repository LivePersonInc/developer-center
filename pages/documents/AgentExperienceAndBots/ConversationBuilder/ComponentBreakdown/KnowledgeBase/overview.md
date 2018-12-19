---
pagename: Knowledge Base Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Intent Builder
subfoldername: Component Breakdown
permalink: conversation-builder-component-breakdown-knowledge-base-Overview.html
indicator: both
---

The Conversation Builder Platform's Knowledge Base tool allows you to export an existing Knowledge Base or create new Knowledge Base articles which will then be processed by our NLU engine. This allows your bot/automation to leverage [intents](placeholder.com) and [entities](placeholder.com) in order to recommend the most accurate Knowledge Base articles to an inquiring user. FAQ automations and Agent Advisor widgets are driven by a Knowledge Base full of these articles, intelligently delivering the right content to the user at the right time.

### Adding a Knowledge Base

The first step to using Knowledge Center tool is to add a knowledge center entity by clicking the **ADD KNOWLEDGE CENTER** panel on the left side of your screen, once you've selected Knowledge Center from the main Conversation Builder Platform page. You will then be prompted to choose a name for the Knowledge Center and to select whether you'd like to import a pre-configured knowledge center from a CSV file or a Google Spreadsheet. **Importing a knowledge center from a file is not mandatory. Simply click "next" without selecting a file if you'd like to start with a blank one**.

### How Does a Knowledge Base Work?

As mentioned earlier, the Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match the articles to the user input. To increase the quality of your content matches, please take a moment to review these Knowledge Base training best practices:

* The key attributes which the NLU uses for matching are the article Title, Intent Qualifiers, Summary, Tags and any Positive or Negative learnings an article may have acquired.

* The Title and the Intent Qualifiers are [intents](placeholder.com) and should be full sentences eg: “How do I reset my password?”

* As a rule you should have at *LEAST* 5 to 8 Intent Qualifiers per article which provide different ways people ask for this article.

* Tags are used to highlight the key noun in the intent. For instance “How do I reset my password?” would have a tag of “password” and perhaps “reset”.

* When you add training intents to an article, they should be relatively generic. If they are too specific the likelihood they will match another user’s utterance is slim. Since users can phrase their questions in many ways, we need to make that our intents are broad, to allow the NLU a chance to match as many possible versions of the sentence as possible.

* The Knowledge Base will return results scored VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS but be sure to test to make sure the quality of the returned results meets your expectations.
