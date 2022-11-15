---
pagename: Key Terms & Concepts
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-key-terms-concepts.html
indicator: both
date_updated: 2022/11/16
---

### Key terms

| Term | Definition |
| --- | --- |
| Intent | A consumer request for action or information from your brand. |
| Statement of intent (SOI) | A consumer message that contains an intent. |
| Domain | A list of intents and entities; these can be matched to consumer training phrases (utterances) with an intent-recognition model. |
| Prebuilt domain | A prebuilt domain is a starting point for you to get going with intents. The intent-recognition model is filled with predefined intents that have been trained and activated for your convenience. The model has been developed using aggregated and anonymized data from several brands. While a prebuilt domain is functional, you’ll need to customize it for your specific needs to get the best performance. |
| Entity | Any word(s) or series of characters that consistently refers to (an attribute of) a single person, place, or thing, or set of same, e.g., SPORT, SIZE, HELP_DESK_TICKET_NUMBER, or CITY. Use entities to fill [slots](conversation-builder-variables-slots-slots.html) in Conversation Builder bots. |
| NLU | [NLU](intent-manager-natural-language-understanding-introduction.html) stands for Natural Language Understanding. In this context, NLU refers to the customized machine-learning algorithms that are trained to understand the intents expressed in your conversations. |
| Training phrases (utterances) | Messages that reflect a distinct aspect of an intent class and can optionally contain relevant entities for that intent.<br><br>Pre-built domains use generic training phrases to get you started. To improve your model, you can replace the generic phrases with examples of real consumer messages from your conversation history. |
| Training | The process by which the model learns to differentiate which examples belong to each intent class. |
| Inference | The process by which a “learned” model attempts to map an incoming message to an intent class. |
| Unclassified/Undefined | Statements of intent that aren't yet included in the defined set of intents. |
| Coverage | The percentage of the messages that the intent recognition model would classify as one of the defined intents against the total number of intentful messages. |
| Overfit | A model is overfitting, when it was trained in such a way to produce highly accurate predictions on its training set, which it has seen during training, but produces much less accurate results on a separate, unseen dataset. |
| Tokens | The pieces of a message after a message is broken down into its smallest elements. |

### Domains

A domain is a collection of related intents and entities, and a domain has a specified NLU provider and language.

In a bot, you can associate one domain with each dialog. This allows you to associate the dialog's interactions with intents and entities from that domain. For example, you might [associate an intent with a Dialog Starter interaction](conversation-builder-assist.html) to use the intent to trigger the dialog's flow.

Intent Manager allows you to build multiple intent domains that can each hold one or many intents and entities. Most brands will find that one domain can handle all their intents, but sometimes breaking them up is necessary or desirable. For example, having a Main intent domain and a Small Talk intent domain is very common. Use multiple domains to keep overlapping intents out of individual intent taxonomies.

### Prebuilt domains

To get you quickly up and running with intents, LivePerson provides a set of prebuilt domains that you can easily add to your Intent Manager environment.

A "prebuilt domain" is a ready-made, pretrained domain that includes a set of well-defined intents. There are two kinds of prebuilt domains available:

* Generic, prebuilt domains for a number of verticals, such as Telecommunications and Financial Services.
* A cross-vertical, prebuilt domain that is appropriate for all verticals. This domain includes intents for things like customer account management, customer order management, e-commerce, billing and payment.

Once you [add a prebuilt domain](intent-manager-build-domains.html#add-a-prebuilt-domain), you can customize the domain as you see fit. If you later decide that you don't want to use your customizations, you can also [overwrite your domain](intent-manager-build-domains.html#overwrite-from-a-prebuilt-domain) to reflect the prebuilt domain that's offered by LivePerson.

Domains added from prebuilt domains use the [LivePerson NLU engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-nlu-engine).

### Primary domain

If you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager, then when you [add or update a domain](intent-manager-build-domains.html), you can set the domain as the primary domain (i.e., enable **Primary Domain**). Only one domain can be primary at a given time. The first domain that you add is considered primary, and this designation can’t be changed if you have only one domain. If you add subsequent domains, you can change which one is primary.

A primary domain has two purposes. First, in applications that make use of a single domain (e.g., Agent Manager Workspace, Performance Optimizer, and Messaging Interaction API), this is the domain that is used.

Second, when intent tracking data is gathered for analysis within Intent Manager, and multiple, good intent matches for an utterance are found, the intent in the primary domain is the one considered to be the best matched intent.

As an example, assume you have three domains A, B and C, and domain B is your primary domain. The consumer says, “I want to disconnect from Acme Telecommunications.” This matches an intent in domain A with a 90% confidence score, an intent in domain B with a 60% confidence score, and an intent in domain C with a 20% confidence score. In this case, the intent in domain B is considered the best matched intent even though it’s confidence score is lower than that for the intent in domain A. This is because domain B is your primary domain, and the scores for the intents in both domains A and B are at least GOOD scores. If the match to the intent in domain B were 59% (FAIR PLUS), then the intent in domain A would be considered the best intent match.

{: .attn-note}
The designation of a domain as primary affects only intent matching as it relates to the intent tracking data that’s gathered for display on the Analyze page within Intent Manager. It does **not** affect intent matching in any other way. For example, it does **not** affect Conversation Builder/third-party bots, KnowledgeAI, Conversation Assist, etc. Respectively, the designation of a primary domain plays no role in intent matching when it comes to determining a dialog to start for the consumer, a knowledge base article to send to the consumer, a knowledge base and/or bot to recommend to an agent, etc.

### Intents

Consumers often request an action or information from a brand. These consumer requests can be grouped under named categories that we call “intents.” Some examples of common intents are:

* Check order status: “What is the status of my lawn mower order?”
* Request product price: “How much does the iPhone 11 cost?”
* Make a payment: “Can I make a payment today for the total amount?”
* Request a refund: “Hey are you able to give me a refund for this flight that was cancelled?”
* Reset password: “I forgot my password and I need to reset it.”

Note that each intent is framed as a request. This is important, as an intent should always be a type of consumer request or question. Specifying the consumer request makes the intent actionable and potentially automatable. Subjects by themselves are not intents. Examples of subjects that consumers might discuss are product names, service plan names, bills, service and product orders, locations and dates.

{: .attn-note}
For some practice with intents, complete the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html).

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

### Intent tracking

If you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager, then when you [add or update a domain](intent-manager-build-domains.html), you can select to enable **Intent Tracking**. This enables “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances.

When intent tracking is enabled, the system records and labels all future conversations with intent metadata (e.g., a consumer utterance of “I want to cancel my flight” is labeled as having the “cancel flight” intent in an “Airlines” domain). The system also records other metrics like CSAT, [Meaningful Conversation Score](https://knowledge.liveperson.com/data-reporting-meaningful-conversation-score-(mcs)-meaningful-conversation-score-(mcs)-overview.html) and more. This intent data is then populated into the **Analyze** page within Intent Manager.

The number of domains for which you can enable intent tracking is configurable. To increase the number, contact your LivePerson account representative. If this field is disabled, you’ve reached the limit. You can either increase the number or disable intent tracking for another domain.

You can enable intent tracking at a later time, but be aware that there is no backfill of historical data. Data begins to be recorded when this setting is enabled.

#### Why enable intent tracking for multiple domains?

Multi-domain support makes it possible to evaluate each consumer message against multiple machine-learning models in real time, unlocking infinite possibilities.

* Development and A/B testing of new domains
* Support for more than one language per account
* Support for multiple lines of business
* Independently tuned models for specific use cases
  * Sales and marketing
  * Churn detection and escalation
  * Social media monitoring
  * Specialized bots and automation

### Meta intents

You might notice as you are working on your intent taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, LivePerson recommends that you use meta intents to help group and sort your intents. All pre-built domains come with meta intents.

A meta intent is a wrapper that can contain many other standard intents. This functionality provides a powerful tool for when you want to funnel a variety of intents from your user into a single dialog. When a user responds with an utterance that matches one of the contained intents, both the standard intent and the meta intent are matched. Once created, the Assist tool inside Conversation Builder can associate a dialog directly with a meta intent, directing all matches for any of the contained intents to that specific dialog.

<img style="width:600px" alt="Illustration of how several intents funnel into a meta intent" src="img/ConvoBuilder/im_meta_intents_diagram.png" alt="">
<img style="width:800px" alt="The details of an example intent" src="img/ConvoBuilder/im_meta_intents_details.png" alt="">

### Entities

Entities are the things, and their attributes, referred to in consumer conversations. More formally, a named entity is a set of elements that is important to understanding raw text, but is not necessarily related to the *intent* of the raw text. In general, entities can be swapped while preserving the general intent of the text.

Often, named entities are the nouns and adjectives in a sentence, but they can be almost any part of speech. LivePerson’s entity definitions are flexible, meaning entities are whatever you want to capture from your customer conversations. Some examples:

<img style="width:600px" alt="Examples of entities in consumer messages" src="img/ConvoBuilder/im_entities_examples.jpg">

In other words, entities enable artificial intelligence to understand text at a deeper level. Without entities, artificial intelligence would know someone wants to buy something, but wouldn’t know *what* they want to buy, or *where* they want it delivered, or *how* they want to pay. That’s why [named entity recognition](https://en.wikipedia.org/wiki/Named-entity_recognition), a natural language processing technique for automatically identifying entities in a sentence and classifying them into pre-defined categories, is so important.

{: .attn-info}
Interested in the performance? Check out the discussion on precision and recall in our [October 2022 blog post](https://www.liveperson.com/blog/improving-named-entity-recognition/).

#### How to use entities?

Use entities to fill [slots](conversation-builder-variables-slots-slots.html) in Conversation Builder bots. A slot is a special &mdash; and powerful &mdash; type of variable that brings dynamic, fluid behavior to storing consumer input. See [these examples](conversation-builder-variables-slots-slots.html) on automatically detecting entities within Question interactions and storing the entity values in slots. The examples demonstrate how this can pre-populate consumer answers to questions and thereby streamline the data collection process significantly.

#### Types of entities

There are three types of entities:

* Value Set
* Regular Expression
* Global (built-in)

##### Value Set entities

As their name suggests, Value Set entities represent a list of entity values to an entity type. For example, a fast food restaurant might have a `SANDWICH` entity represented by a list of three entity values:

* Reuben
* Veggie
* Grilled cheese

<img style="width:600px" alt="An example of a Value Set entity" src="img/ConvoBuilder/im_entities_value_set_ex.png">

The values for Value Set entities are usually one or two words, as they represent groups of simple objects.

Generally, list entities are a good choice when there are a limited number of potential entity values that can be easily enumerated within a list. However, when hundreds or even thousands of values are possible, a Regular Expression entity is a better choice.

##### Regular Expression entities

Unlike a Value Set entity, a Regular Expression entity doesn't have a set of values. Instead, its value is a single regular expression defined using [Regular Expression rules](https://regex101.com/).

Regular Expression entities allow matching patterns, so there is no need to list each possibility, nor is there a limit on the potential list of entity values that can be recognized. For example, if a serial number is always “a,” “b,” or “c” followed by 5 digits and the letter “x,” then the regular expression `[a|b|c]\d{5}x` would match all values of that entity. In our example below, we’ve defined an `ORDER_NO` entity whose regular expression is `^\b\d{6}\b`, which is a 6-digit number.

<img style="width:800px" alt="An example of a Regular Expression entity" src="img/ConvoBuilder/im_entities_regex_ex.png" alt="">

Use a Regular Expression entity in situations where the entity's possible values all conform to a specific pattern, and that list of values is so long that it makes use of a Value Set entity unfeasible. Some use cases include:

* Flight numbers
* Order numbers
* Help Desk ticket numbers

Some important notes: 

* Regular Expression entities are available only in domains using the [LivePerson engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-nlu-engine) for NLU.
* Regex entities can require careful consideration to not over-match. For example, if a hotel room number were a three- or four-digit number, `\d{3,4}` would find all the room numbers, but it would also match the first four digits of a zip code.

##### Global entities

Global entities are machine-learning entities that are recognized using a model that is trained on large amounts of data that has been labeled with the desired entities. Machine learning is most useful for recognizing entities that cannot easily be enumerated or defined by a format. In other words, machine learning can detect entities where Value Set and Regular Expression entities won’t work.

As examples, global entities include keywords like POSTAL_CODE, where enumerating the full list would be difficult, and STREET, where predefining a format would be impossible. Global entities are automatically detected by the system, so you don’t need to add them manually in Intent Manager.

The complete list of global entities includes:

| Entity | Description | Example |
| --- | --- | --- |
| AIRPORT | An airport code | SEATAC<br>LAX<br>DEL |
| CITY | A city | Paris<br>Los Angeles |
| COLOR | A color | blue<br>red |
| COUNTRY | A country | Canada<br>United States |
| DATE | Dates | today<br>tomorrow<br>03/01/2017<br>Saturday<br>next Wednesday |
| DURATION | A time period | 2 weeks<br>2 weeks and 3 days<br>half a day<br>fortnight |
| EMAIL | An email address | jane@myemail.com |
| MONEY | Numbers with currency | $2000<br>23 dollars<br>fifty bucks<br>ten pounds |
| ORG | Names of institutions | Nike factory<br>World Health Organization |
| PERCENT | A percentage | 100%<br>forty percent |
| PERSON_NAME | Names of persons | John<br>Jane |
| PHONE | A phone number | 800-555-1212<br>+66 11-222-3344 |
| POSITION_IN_SERIES | A number used in the context of order | 15th<br>first |
| POSTAL_CODE | United States postal code | 10001 |
| QUANTITY | A quantity | 5<br>ten |
| SET | A group<br>In, "The meeting with Bob is weekly on Tuesdays," PERSON_NAME = Bob, SET = weekly, DATE = Tuesdays | month<br>week<br>every day |
| STATE | United States state | NY<br>New York |
| STREET | United States descriptors for street names | Main St.<br>123 Main St. NE<br>123 East-West Highway Apt. 107 |
| TIME | Time of day | 2 p.m.<br>23:00<br>morning |
| URL | A URL | https://www.google.com/search?&lt;param&gt; |

The detection of global entities is highly dependent on context. As a result, the system is powerful and capable of detecting the following:

* Message: My name is Paris and I live in Paris
* Entities: PERSON_NAME = Paris, CITY = Paris

* Message: Hi Tuesday, can you arrive at 2pm on Tuesday?
* Entities: PERSON_NAME = Tuesday, TIME = 2pm, DATE = Tuesday

What's more, the detection of entities is trained on commercial messages, so depending on context, you might get results that you don’t expect:

* Non-commercial message: Washington cherry trees are beautiful this time of year
* Entities: CITY = Washington

but

* Commercial message: Do you ship this product to Washington?
* Entities: STATE = Washington

As mentioned above, global entities are detected automatically by the system. You can see this at work as you test entities using consumer utterances passed into the **Test User Input** tool. In our example below, we’re using the tool to test one such utterance. In it, the system detects three global entities.

<img style="width:500px" alt="The Test User Input tool detecting three entities in an utterance" src="img/ConvoBuilder/im_entities_global1.png" alt="">

If you have defined custom entities within your domain, you’ll see those detected along with the global entities:

<img style="width:800px" alt="The Test User Input tool detecting a custom Value Set entity" src="img/ConvoBuilder/im_entities_global2.png" alt="">

### Training

Domains that use either the LivePerson engine or a 3rd-party NLU engine must be explicitly trained (via the **Train** button that's available) after you make changes to the training data. This process is wherein the model learns to differentiate which examples belong to each intent class. The resulting model is then used to make predictions on user utterances. With these NLU engines, the trained model is able to classify a user utterance into an intent class.
