---
pagename: Entities
redirect_from:
    - conversation-builder-intent-builder-entities.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-entities.html
indicator: both
---

Entities are keywords that represent a number of synonyms. For instance, the entity `sports` could refer to or represent the following group of items: "walking", "jogging", "running", "football" and so on. Whenever an entity is referred to, the group which it represents is automatically inserted by the bot. So if a user sends the sentence, "I'm interested in running," the bot invokes the entity `sports`.

Therefore, when you're creating training phrases for an intent, instead of typing in multiple phrases like so: "I'm interested in walking", "I'm interested in jogging", "I'm interested in running", you can just create one training phrase which will look like the following:

"I'm interested in `sports`".

Entities can be used both in the context of intents as well as in a [Knowledge Base](conversation-builder-knowledge-base.html). Just like with training phrases for intents, entities can be used in training phrases for Knowledge Base articles.

Entities are usually one or two words as they represent groups of simple objects.

### Built In entities

The platform automatically detects the entities listed below. Using the [NLU Assist](conversation-builder-nlu-assist.html) tool, you can assign these default entities to user interactions and have the bot populate a [slot](conversation-builder-conversation-builder-variables-slots.html#slots) with the user's input to the question to which the entity was assigned.

* PERSON - Names of people, persons.

* ORGANIZATION - Names of institutions.

* NUMBER - Numbers in a sentence (pure number).

* MONEY -  Numbers with currency ($2000).

* DURATION - Time periods.

* SET - Group (example month, week).

* ORDINAL - A number used in the context of order. 15th, 10th etc are examples.

* DATE - Date related, Today, Tomorrow or explicit dates such as 03/01/2017.
