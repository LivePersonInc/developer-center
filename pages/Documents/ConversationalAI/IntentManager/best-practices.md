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

For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

### Workflow

1. To get up and running quickly with intents, try starting with a prebuilt domain or starter pack (discussed [here](intent-manager-getting-started.html)). There are several, vertical-specific domains available, as well as a cross-vertical domain. Otherwise, add your initial intents and training phrases manually.
2. Understand the existing model - Review the model’s coverage, i.e., the intent names and training phrases. This gives you a good understanding of the intents that already exist in the model. This is important to keep in mind, as you don’t want your future work to overlap with any of the existing intents.
3. Use [intent discovery](intent-manager-discover-intent-discovery.html) (under “Discover”) to find new intents to add to your current taxonomy and to classify consumer messages under those intents.
4. Train the new model.
5. Evaluate and improve the model. As a quick measure, review the results on the Intent Manager [dashboard](intent-manager-dashboard.html). For more thorough testing, use the [Model Tester](intent-manager-build-test-with-the-model-tester.html) (under “Build”).

### Number of intents
Intent Manager requires a minimum of 5 intents and 15 training phrases per intent to start training a model. Anything less adversely affects the model’s performance.

The average number of intents for a taxonomy with good coverage is 20-60.

### Intents
* Keep multiple [intents](intent-manager-key-terms-concepts.html#intents) in mind as you add intents to your current taxonomy and classify consumer messages under those intents. Do likewise when working on your training data directly. Keeping multiple intents in mind as you work helps you to better understand the differences between intents. This makes your work more efficient and produces a model that better differentiates between intents.
* Be careful that the topics or actions associated with an intent are exclusive to that intent, i.e., there is no overlap between intent definitions. So, for example, you don’t want two intents that are both for consumers asking how to pay their bill. Similar training phrases should not be present in different intents.
* [Split intents](intent-manager-discover-intent-discovery.html#split-an-intent) when necessary - Sometimes an intent is too broad and all encompassing. This can cause an intent to be less actionable and have poor accuracy. A simple way to fix this issue is to split the broad intent into smaller intents. An example of this is splitting the intent “ask about credit limit” from the Financial Services industry into three smaller intents: “increase credit limit,” “decrease credit limit,” and “request credit limit information.” The most important thing to remember is that the new, smaller intents should cover the same conversational space as the original broader intent. Don’t give definitions to the new, smaller intents that go beyond the scope of the original broad intent’s definition.
* Use [meta intents](intent-manager-key-terms-concepts.html#meta-intents) if warranted - You might notice as you are working on your taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, LivePerson recommends using meta intents to help group and sort your intents. Please note that all pre-built domains come with meta intents. A meta intent is a wrapper that can contain many other standard intents. This functionality provides a way to funnel a variety of intents into a single category. When a consumer message matches one of the contained intents, both the standard intent and the meta intent are matched.

### Number of training phrases
For optimal performance, LivePerson recommends 60 to 100 training phrases per intent, but not more than 150 due to the potential issue of model overfitting.

{: .important}
Currently, you can only pull a maximum of 500 messages at a time. If you classify five messages as an intent out of that set, you will need to pull five times more data to get enough training utterances for that intent.

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
* Don’t use more than one entity per training phrase.

### Entities
Use a maximum of one [entity](intent-manager-key-terms-concepts.html#entities) per training phrase, as only a single entity is used when the model is trained.

### Model coverage
Intent discovery is the task of finding new intents to add to your current taxonomy. This task is useful to expand the model’s coverage. [Intent discovery](intent-manager-discover-intent-discovery.html) is accomplished under “Discover.”

### Training a new model
[Train](intent-manager-key-terms-concepts.html#training) your model at regular intervals as you add new intents and training phrases. Typically, LivePerson advises [training a new model](intent-manager-build-domains.html#train-a-liveperson-domain) at the end of every session of work. This allows you to see the results of your changes the next time you revisit the model.
