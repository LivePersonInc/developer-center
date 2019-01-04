---
pagename: Entities
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Intent Builder
permalink: conversation-builder-intent-builder-entities.html
indicator: both
---

Entities are keywords that represent a number of synonyms. For instance, the entity `sports` could refer to or represent the following group of items: "walking", "jogging", "running", "football" and so on. Whenever an entity is referred to, the group which it represents is automatically inserted by the bot/automation. So if a user would send the sentence: "I'm interested in running" the bot/automation will invoke the entity `sports`.

Therefore, when you're creating training phrases for an intent, instead of typing in multiple phrases like so: "I'm interested in walking", "I'm interested in jogging", "I'm interested in running", you can just create one training phrase which will look like the following:

"I'm interested in `sports`".

Entities can be used both in the context of intents as well as in a [Knowledge Base](http://localhost:4000/conversation-builder-knowledge-base-overview.html). Just like with training phrases for intents, entities can be used in training phrases for Knowledge Base articles.

Entities are usually one or two words as they represent groups of simple objects.

### Built In entities

The platform automatically detects the entities listed below. Using the Assistant tool, you can assign these default entities to User Interactions and have the bot/automation populate a Slot with the user's input to the question to which the entity was assigned.

* PERSON - Names of people, persons.

* ORGANIZATION - Names of institutions.

* NUMBER - numbers in a sentence (pure number).

* MONEY -  Numbers with currency ($2000).

* DURATION - time periods.

* SET - Group  (example month, week).

* ORDINAL - it is a number used in the context of order. 15th, 10th etc are examples.

* DATE - date related, Today, Tomorrow  or explicit dates such as 03/01/2017.
