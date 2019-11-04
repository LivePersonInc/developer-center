---
pagename: Best Practices
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-best-practices.html
indicator: both
---

To increase the quality of your content matches, follow these best practices:

* The title and the intent qualifiers are [intents](conversation-builder-intent-builder-overview.html) and should be full sentences, e.g., “How do I reset my password?”

* As a rule, per article, you should have *AT LEAST* 5 to 8 intent qualifiers that provide different ways people ask for the article.

* When you add training intents to an article, they should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance is slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

* As mentioned earlier, the Knowledge Base returns results scored as VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally, we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS, but be sure to test to make sure the quality of the returned results meets your expectations.