---
pagename: Key Terms & Concepts
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-key-terms-concepts.html
indicator: both
---

### Key terms

| Term | Definition |
| --- | --- |
| Intent | A consumer request for action or information from your brand. |
| Statement of intent (SOI) | A consumer message that contains an intent. |
| Domain | A list of intents and entities; these can be matched to consumer training phrases (utterances) with an intent-recognition model. |
| Prebuilt domain | A prebuilt domain is a starting point for you to get going with intents. The intent-recognition model is filled with predefined intents that have been trained and activated for your convenience. The model has been developed using aggregated and anonymized data from several brands. While a prebuilt domain is functional, you’ll need to customize it for your specific needs to get the best performance. |
| NLU | NLU stands for Natural Language Understanding. In this context, NLU refers to the customized machine-learning algorithms that are trained to understand the intents expressed in your conversations. For more, see [here](intent-manager-natural-language-understanding.html). |
| Training phrases (utterances) | Messages that reflect a distinct aspect of an intent class and can optionally contain relevant entities for that intent. For best practices, see [here](intent-manager-best-practices.html#training-phrases).<br><br>Pre-built domains use generic training phrases to get you started. To improve your model, you can replace the generic phrases with examples of real consumer messages from your conversation history. |
| Training | The process by which the model learns to differentiate which examples belong to each intent class. |
| Inference | The process by which a “learned” model attempts to map an incoming message to an intent class. |
| Unclassified/Undefined | The messages that do belong to an intent class that is defined in the NLU domain. |
| Coverage | The percentage of the messages that the intent recognition model would classify as one of the defined intents against the total number of intentful messages. |
| Overfit | A model is overfitting, when it was trained in such a way to produce highly accurate predictions on its training set, which it has seen during training, but produces much less accurate results on a separate, unseen dataset. |
| Tokens | The pieces of a message after a message is broken down into its smallest elements. |

### Domains

The following are key characteristics of a domain:

* A domain is a collection of related intents and entities.
* A domain has a specified NLU provider and language.
* In a bot, you can associate one domain with each dialog. This allows you to associate the dialog's interactions with intents and entities from that domain. For example, you might [associate an intent with a Dialog Starter interaction](conversation-builder-assist.html) to use the intent to trigger the dialog's flow.

Intent Manager allows you to build multiple intent domains that can each hold one or many intents and entities. Most brands will find that one domain can handle all their intents, but sometimes breaking them up is necessary or desirable. For example, having a Main intent domain and a Small Talk intent domain is very common. Use multiple domains to keep overlapping intents out of individual intent taxonomies.

### Prebuilt domains

To get you quickly up and running with intents, LivePerson provides a set of prebuilt domains that you can easily add to your Intent Manager environment.

A "prebuilt domain" is a ready-made, pretrained domain that includes a set of well-defined intents. There are two kinds of prebuilt domains available:

* Generic, prebuilt domains for a number of verticals, such as Telecommunications and Financial Services.
* A cross-vertical, prebuilt domain that is appropriate for all verticals. This domain includes intents for things like customer account management, customer order management, e-commerce, billing and payment.

Once you [add a prebuilt domain](intent-manager-build-domains.html#add-a-prebuilt-domain), you can customize the domain as you see fit. If you later decide that you don't want to use your customizations, you can also [overwrite your domain](intent-manager-build-domains.html#overwrite-from-a-prebuilt-domain) to reflect the prebuilt domain that's offered by LivePerson.

Domains added from prebuilt domains use the [LivePerson NLU engine](intent-manager-natural-language-understanding.html#livepersons-nlu-engine).

### Intents

Consumers often request an action or information from a brand. These consumer requests can be grouped under named categories that we call “intents.” Some examples of common intents are:

* Check order status - “What is the status of my lawn mower order?”
* Request product price - “How much does the iPhone 11 cost?”
* Make a payment - “Can I make a payment today for the total amount?”
* Request a refund - “Hey are you able to give me a refund for this flight that was cancelled?”
* Reset password - “I forgot my password and I need to reset it.”

Note that each intent is framed as a request. This is important, as an intent should always be a type of consumer request or question. Specifying the consumer request makes the intent actionable and potentially automatable. Subjects by themselves are not intents. Examples of subjects that consumers might discuss are product names, service plan names, bills, service and product orders, locations and dates.

{: .important}
For some practice with intents, complete the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html).<br><br>For best practices, see [here](intent-manager-best-practices.html#intents).

#### Intent versus non-intent example

Instead of creating an intent named “my order,” consider instead looking for the most common consumer request associated with the subject “my order,” i.e., “check my order status.” This intent could include any consumer request asking to track their order or see whether their order has been processed.

#### Why use intents?

Intents are meant for when you need a more flexible approach to utterance matching than using patterns. With patterns, there must be an *exact match* between the consumer's utterance and the defined pattern. This means that alternative expressions (synonyms, phrasings, and formats) are missed.

In contrast, intents direct a bot to be more flexible and respond to a wider variety of user input. Instead of looking for specific patterns in the input (for example, the pattern "bill"), the bot uses a Natural Language Understanding (NLU) engine to look for a defined intent. Then the bot triggers the dialog that's configured to respond to the intent. Therefore, once you configure your intents with robust *training phrases*, expressions like, "I have a question about billing", "Looking to check my account," or "What's my billing status?" yield the same intent and, thus, the same response from the bot.

### Confidence score and threshold

Intents use a Natural Language Understanding (NLU) engine to match the consumer’s utterance against a set of training phrases or Knowledge Base articles. The results are scored based on the level of confidence in the match: VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR. This confidence score approximates how likely the intent is present in the consumer's message.

To return the best response to consumers, the NLU has a threshold of GOOD. This means that an intent that scores below the threshold is not sent to the bot. As an example, you might configure a "billing" intent that has a defined set of training phrases like, "I have a question about my bill," "Can you help me with my bill?" and similar, alternative expressions. The consumer's utterance is evaluated against these phrases, and a score is determined. *If there's a match of GOOD or better*, the intent is understood to be present, it is sent to the bot, and the bot triggers the associated dialog starter.

The scoring breakdown that indicates the NLU’s level of confidence in the match is as follows:

**LivePerson engine**
* VERY GOOD: 75-100% match
* GOOD: 60-75% match
* FAIR PLUS: 45-60% match
* FAIR: 30-45% match
* POOR: 0-30% match

**LivePerson (Legacy) engine or 3rd-party engine**
* VERY GOOD: 85-100% match
* GOOD: 70-85% match
* FAIR PLUS: 65-70% match
* FAIR: 50-65% match
* POOR: 0-50% match

You can't change the threshold when using intents, although you can do this with knowledge bases.

### Meta intents

You might notice as you are working on your intent taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, LivePerson recommends that you use meta intents to help group and sort your intents. All pre-built domains come with meta intents.

A meta intent is a wrapper that can contain many other standard intents. This functionality provides a powerful tool for when you want to funnel a variety of intents from your user into a single dialog. When a user responds with an utterance that matches one of the contained intents, both the standard intent and the meta intent are matched. Once created, the Assist tool inside Conversation Builder can associate a dialog directly with a meta intent, directing all matches for any of the contained intents to that specific dialog.

<img style="width:600px" src="img/ConvoBuilder/im_meta_intents_diagram.png">
<img style="width:800px" src="img/ConvoBuilder/im_meta_intents_details.png">

### Entities

Entities are keywords or expressions that represent groups of items. For example, an entity named `SIZE` might represent the following values: small, medium, and large.

Entities facilitate the creation and curation of training phrases. Using entities helps you to extend your training phrases like a "template" and prevents your model from focusing too much on certain words during training.

You can use entities in two places:
* Training phrases for intents defined in Intent Manager
* Intent qualifiers for articles defined in [Knowledge Base](knowledge-base-overview.html)

{: .important}
Use a maximum of one entity per training phrase, as only a single entity is used when the model is trained.

There are three types of entities:
* Value Set entities
* Regular Expression entities
* Built-in entities

#### Value Set entities

As their name suggests, Value Set entities are those that have a defined set of values. For example, the entity `SPORTS` might have the following values in its value set:
* football
* running
* walking

<img style="width:400px" src="img/ConvoBuilder/im_entities_value_set_ex.png">

The LivePerson NLU engine trains the model with as many as 100 Value Set entity combinations, e.g, “I’m interested in SPORTS” yields “I’m interested in football,” “I’m interested in running,” and “I’m interested in walking.” As mentioned earlier, a maximum of one entity per training phrase is used during model training. Unlike Regular Expression entities, Value Set entities aren’t considered at intent prediction time.

The values for Value Set entities are usually one or two words, as they represent groups of simple objects.

#### Regular Expression entities

Unlike a Value Set entity, a Regular Expression entity doesn't have a set of values. Instead, its value is a single regular expression defined using [Regular Expression rules](https://regex101.com/). As an example, you might have an `ORDER_NO` entity whose regular expression is `^\b\d{6}\b`, which is a 6-digit number.

<img style="width:800px" src="img/ConvoBuilder/im_entities_regex_ex.png">

Whenever the consumer's utterance contains an expression that conforms to the entity's regular expression, e.g., "I want to check on my order 757575," the bot detects this and substitutes the ORDER_NO entity into the utterance before predicting the consumer's intent. In general though, Regular Expression entities work much like Value Set entities with this single exception: With Regular Expression entities, the matched string is replaced by the entity just before prediction.

Use a Regular Expression entity in situations where the entity's possible values all conform to a specific pattern, and that list of values is so long that it makes use of a Value Set entity unfeasible. Some use cases include:
* Flight numbers
* Order numbers
* Help Desk ticket numbers

Continuing our `ORDER_NO` example, you might use the entity in the training phrases for an "order status" intent, like so:
* "I want to check on my order ORDER_NO"
* "What's the status of order ORDER_NO"

Regular Expression entities are available only in domains using the [LivePerson engine](intent-manager-natural-language-understanding.html#livepersons-nlu-engine) for NLU.

#### Built-in entities

The platform automatically detects the entities listed below:
* PERSON - Names of people, persons
* ORGANIZATION - Names of institutions
* NUMBER - Numbers in a sentence (pure number)
* MONEY - Numbers with currency ($2000)
* DURATION - Time periods
* SET - Group (example month, week)
* ORDINAL - A number used in the context of order. 15th, 10th, etc., are examples.
* DATE - Date-related. Today, Tomorrow or explicit dates such as 03/01/2017

Using the [Assist tool](conversation-builder-assist.html), you can assign these built-in entities to user interactions and have the bot populate a [slot](conversation-builder-variables-slots.html) with the user's input to the question to which the entity was assigned.

### Training

Domains that use either the LivePerson engine or a 3rd-party NLU engine must be explicitly trained (via the **Train** button that's available) after you make changes to the training data. This process is wherein the model learns to differentiate which examples belong to each intent class. The resulting model is then used to make predictions on user utterances. With these NLU engines, the trained model is able to classify a user utterance into an intent class.