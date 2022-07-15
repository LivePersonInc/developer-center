---
pagename: Using Intents & Entities
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-using-intents-entities.html
indicator: both
---

### Using intents

Not familiar with intents? See [here](intent-manager-key-terms-concepts.html#intents) for an introduction.

#### Use intents to trigger bot flows

In a Conversation Builder bot, you can trigger a dialog flow if the consumer's query matches the intent that's associated with the dialog starter. To set this up, you use Conversation Builder's **Assist** tool to associate the dialog starter with the domain and the intent. More on this [here](conversation-builder-assist.html).

Looking for a tutorial? See the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html).

#### Use intents to return answers from knowledge bases

If you have a Conversation Builder bot that integrates with KnowledgeAI to return answers from knowledge bases in responses to consumer queries, you can make use of Natural Language Understanding (NLU) and intents to find the right answers to return. More on this [here](knowledgeai-using-intents-with-kbs.html).

Looking for a tutorial? See the [Meta Intents & Knowledge Bases tutorial](tutorials-guides-bot-groups-other-techniques-meta-intents-knowledge-bases.html).

### Using entities

Not familiar with entities? See [here](intent-manager-key-terms-concepts.html#entities) for an introduction.

#### Capture entities using Conversation Builder's Assist

Use Conversation Builder's **Assist** tool to associate a question with an entity, so you can capture the consumer's response as the value of that entity. This is illustrated [here](conversation-builder-assist.html#associate-a-question-with-an-entity).

When you use Assist to associate a question with a custom entity, Assist automatically creates a slot to store the consumer's response. A slot is a special -- and powerful -- type of variable that brings dynamic, fluid behavior to storing consumer input. You can find more on slots, including several examples, [here](conversation-builder-variables-slots-slots.html).

Using Assist is the easiest way to capture an entity, and it should suit most use cases. For more advanced use cases, such as those that involve modifying or cleaning entities, you can use the [getNamedEntities](conversation-builder-scripting-functions-get-set-session-data.html#get-named-entities) scripting function.

#### Detect entities using JavaScript

Use the [getNamedEntities](conversation-builder-scripting-functions-get-set-session-data.html#get-named-entities) scripting function.