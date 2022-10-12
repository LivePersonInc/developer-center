---
pagename: Best Practices
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-best-practices.html
indicator: both
---

To increase the quality of your intent matches, follow the best practices below.

Also follow the [best practices for training and tuning NLU](conversation-builder-best-practices-train-tune-nlu.html).

### Number of intents

Intent Manager requires a minimum of 5 intents and 15 training phrases per intent to start training a model. Anything less adversely affects the model’s performance.

The average number of intents for a taxonomy with good coverage is 20-60.

#### Going beyond 60 intents

We have experimented with up to 80 intents in a domain without a significant performance drawback. Going above that, there is an increasing chance of intent overlap, and the number of “Undefined” might go up as a result of the model being undecided and having low confidence scores below the minimum threshold. As your taxonomy grows in size, the intents themselves will likely become more narrow and specific in their definitions. The most important thing to remember is that intents should never overlap each other in definition. This becomes of greater and greater importance as intents become more and more granular.

To avoid overlap in a model with very granular intents, make sure that each message being used as training data only contains a singular topic of discussion. This topic should relate directly to the intent. It is very important that “edge case” messages (i.e., overly long messages or messages that contain multiple topics of discussion) are not used for training data when working on a large, granular taxonomy. Only use strong, clear examples as training data. 

Models that have very granular intents usually require a substantial amount of tuning once the first model is trained. Do this by carefully adding new training data in an iterative cycle. Add some training data and then train a new model; then evaluate and repeat the process if necessary. It is also useful to use the “Test” toolin Intent Managerto test consumer messages to see which intents have a strong confidence score for that message. If you see any intents that have a confidence score greater than ~20% - 30% and do not belong, revisit the training data for those intents and remove any messages that are similar to the message that you used in the “Test”tool. Set a goal to create an intent that at least covers 1% of all the SOIs and a taxonomy with at least 50% coverage, but recognize that it is definitely worthwhile to create an intent with lower coverage if it has special value to you.

### Intents

* Keep multiple [intents](intent-manager-key-terms-concepts.html#intents) in mind as you add intents to your current taxonomy and classify consumer messages under those intents. Do likewise when working on your training data directly. Keeping multiple intents in mind as you work helps you to better understand the differences between intents. This makes your work more efficient and produces a model that better differentiates between intents.
* Be careful that the topics or actions associated with an intent are exclusive to that intent, i.e., there is no overlap between intent definitions. So, for example, you don’t want two intents that are both for consumers asking how to pay their bill. Similar training phrases should not be present in different intents.
* [Split intents](intent-manager-discover-intent-discovery.html#split-an-intent) when necessary: Sometimes an intent is too broad and all encompassing. This can cause an intent to be less actionable and have poor accuracy. A simple way to fix this issue is to split the broad intent into smaller intents. An example of this is splitting the intent “ask about credit limit” from the Financial Services industry into three smaller intents: “increase credit limit,” “decrease credit limit,” and “request credit limit information.” The most important thing to remember is that the new, smaller intents should cover the same conversational space as the original broader intent. Don’t give definitions to the new, smaller intents that go beyond the scope of the original broad intent’s definition.
* Use [meta intents](intent-manager-key-terms-concepts.html#meta-intents) if warranted: You might notice as you are working on your taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, LivePerson recommends using meta intents to help group and sort your intents. Please note that all pre-built domains come with meta intents. A meta intent is a wrapper that can contain many other standard intents. This functionality provides a way to funnel a variety of intents into a single category. When a consumer message matches one of the contained intents, both the standard intent and the meta intent are matched.

### Number of training phrases

For optimal performance, LivePerson recommends 60 to 100 training phrases per intent, but not more than 150 due to the potential issue of model overfitting.

### Training phrases

* Use *real consumer utterances* for training phrases. Do NOT write your own messages that you think might be similar to a consumer message.
* Use *complete utterances* rather than phrases or parts of messages, as consumers usually communicate in full messages, and you want to match the way they state their intent.
* Use *utterance diversity* - Avoid duplicate keywords or duplicating the same pattern across your data. LivePerson NLU models take a variety of things into account in predicting labels; trying to guess what those are can lead to poor results. A better approach is to include diverse utterances created by actual consumers.
    * Diverse utterances with a variety of words and structures:
        * Are there two different passwords for admin and logging in?
        * I keep trying to reset my password but it says it needs to confirm my email with an email.
        * I have forgotten my 5-digit password.
        * Trying to retrieve my username and password.
    * These utterances are very similar and NOT diverse:
        * Reset my password.
        * Please reset my password.
        * Can you reset my password?
* Verify each training phrase is a clear match to its named intent, and remove it if not.

### Entities

Don’t use the names of entities (custom or global) in training phrases. Use only the entity values.

* **Do** - I’m interested in buying an iPhone 14
* **Don't** - I’m interested in buying an PRODUCT

Using the entity name can sometimes result in an underperforming model.

### Model coverage

Intent discovery is the task of finding new intents to add to your current taxonomy. This task is useful to expand the model’s coverage. [Intent discovery](intent-manager-discover-intent-discovery.html) is accomplished under “Discover.”

### Model training

[Train](intent-manager-key-terms-concepts.html#training) your model at regular intervals as you add new intents and training phrases. Typically, LivePerson advises [training a new model](intent-manager-build-domains.html#train-a-liveperson-domain) at the end of every session of work. This allows you to see the results of your changes the next time you revisit the model.

### Model testing

The best way to evaluate different strategies for model development is to create multiple versions of a model and test them against a “golden test set” of annotated data in our [Model Tester](intent-manager-build-test-with-the-model-tester.html) to see which performs the best.