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

Therefore, when you're creating training phrase for an intent, instead of typing in multiple phrases like so: "I'm interested in walking", "I'm interested in jogging", "I'm interested in running", you can just create one training phrase which will look like the following:

"I'm interested in `sports`".

Entities can be used both in the context of intents as well as in the Knowledge Base. Just like with training phrases for intents, entities can be used in training phrases for Knowledge Base articles.

Entities are usually one or two words as they represent groups of simple objects.
