---
pagename: Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-intents.html
indicator: both
---

### What's an intent?

An intent is a consumer request for an action or information from a brand. These consumer requests can be grouped under named categories that we call intents. Some examples of common intents are: 

* check my order status - “What is the status of my lawn mower order?” 
* request product price - “How much does the iPhone 11 cost?”
* make a payment - “Can I make a payment today for the total amount?”
* request a refund - “Hey are you able to give me a refund for this flight that  was cancelled?” 
* reset my password - “I forgot my password and I need to reset it.” 

Note that each intent is framed as a request. This is important, as an intent should always be a type of consumer request or question. Specifying the consumer request makes the intent actionable and potentially automatable. Subjects by themselves are not intents. Examples of subjects that consumers may discuss are product names, service plan names, bills, service and product orders, locations and dates.

#### Intent versus non-intent example

Instead of creating an intent named “my order,” consider instead looking for the  most common consumer request associated with the subject “my order,” i.e., “check my order status.” This intent could include any consumer request asking to  track their order or see whether their order has been processed.

#### Why use intents?

Intents are meant for when you need a more flexible approach to matching than using patterns. With patterns, there must be an *exact* match between the consumer's utterance and a defined expression. This means that alternative expressions (synonyms, phrasings, and formats) are missed.

In contrast, intents use a Natural Language Understanding (NLU) engine to match the user's utterance against a set of training phrases or [Knowledge Base](knowledge-base-overview.html) articles. The results are scored based on the level of confidence in the match: VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR.

As an example, you might configure a "billing" intent that has a defined set of training phrases like, "I have a question about my bill," "Can you help me with my bill?" and similar, alternative expressions. The consumer's utterance is evaluated against these phrases, and a score is determined. *If there's a match of GOOD or better*, the intent is understood to be present, it is sent to the bot, and the bot triggers the associated dialog starter.

{: .important}
For some practice with intents, complete the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html).

#### What is the intent score/threshold?

The confidence score approximates how likely an intent is present in the consumer's message.

To return the best response to consumers, the NLU has a threshold of GOOD. This means that an intent that scores below the threshold is not sent to the consumer. 

The scoring breakdown, which indicates the NLU’s level of confidence in the match, is as follows:

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

You can't change the threshold when using intents (although you can do [this](knowledge-base-using-intents-with-kbs.html#scoring-and-thresholds) with knowledge bases).

### Add an intent

**To add an intent**

1. In the dashboard that lists your domains, select the domain.
2. Click **Add Intent** in the upper-right corner.
3. Specify the following:

    * **Intent name**: Enter the intent name. To name an intent, use a short phrase that describes the intent. Typically, an intent name has both a verb and a noun (e.g., "report login problem"). A domain can have dozens of intents, so using a standard naming convention is important for being able to easily sort and find intents.
    * **Intent display name**: Enter the display name.
    * **Description**: Enter a short phrase describing the intent. While this field is optional, it's often useful. Many intent names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Intent type**: Select either "Intent" or "Meta Intent." For an introduction to meta intents, see [here](intent-builder-meta-intents.html).
    * **Training**: Enter as many training phrases as possible. The NLU engine uses training phrases in order to match a user's utterance with an intent. The more training phrases you include, the more likely it is that the NLU engine will accurately match the user's intent. Generally speaking, the phrases should be complete sentences (not long paragraphs, and not keywords). As an example, assume you have a "Check bill" intent. You might add the following training phrases, among others:
        * I want to check the status of my bill
        * Tell me what my bill is
        * I need to look into what's going with my bill


        For more, see *Best practices* farther below.

4. Click **Save**.
5. Train the domain so that the addition is reflected in a new model version.

### Generate training phrases

Adding training phrases to an intent can sometimes be a challenge, so Intent Builder includes a tool to help with this. Within an intent, provide just a single training phrase as the input, and the tool automatically generates additional phrases that are similar in meaning. The suggestions are based on actual utterances by your users.

Generating training phrases is useful when: 

* You’re building out a LivePerson or third-party NLU domain that you’ve created from scratch.
* You’ve [converted a LivePerson (Legacy) NLU domain to the LivePerson engine](intent-builder-domains.html#convert-a-liveperson-legacy-domain-to-liveperson), and now you need to increase the number of training phrases to meet the minimum requirements.

Note:
* To have access to this new tool, Intent Analyzer must be [enabled for a domain](intent-analyzer-overview.html#enable-intent-analyzer-for-intents) (any domain) in your account, as the tool makes use of the data that it captures.
* If you’ve enabled Intent Analyzer recently, expect the tool’s results to improve over time as more data is captured.
* If you're a new customer, expect no results until suggestions can be offered based on utterances by your users. And here again, expect the tool's results to improve over time.

**To generate training phrases**

1. Open the domain.
2. Select the intent.
3. Beside an existing training phrase (you’ll need to add at least one), click <img style="width:25px" src="img/ConvoBuilder/icon_knn.png">.



4. Review the generated phrases, and select the ones you want to add to the domain. You might also want to refine the spelling or punctuation. The phrases are based on actual consumer utterances, so they might contain misspellings or poor grammar.



5. Click **Add**.
6. Back on the Intents page, click **Save** to save the change.
7. Retrain the domain.

### Delete an intent

Deleting an intent is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Ensure the intent isn't being used by any bots or knowledge bases before you delete it.

**To delete an intent**

1. Open the domain.

    By default, the Intents page is displayed.

2. In the left panel, select the intent.
3. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon), and select **Delete**.
4. In the confirmation dialog, click **Yes**.
5. Train the domain so that the deletion is reflected in a new model version.


### Best practices

To increase the quality of your intent matches, follow the best practices below.

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

#### Workflow

1. To get up and running quickly with intents, try starting with a [pre-built domain](intent-builder-overview.html#prebuilt-domains). There are several, vertical-specific domains available, as well as a cross-vertical domain. Otherwise, add your initial intents and training phrases manually.
2. Understand the existing model - Review the model’s coverage, i.e., the intent names and training phrases. This gives you a good understanding of the intents that already exist in the model. This is important to keep in mind, as you don’t want your future work to overlap with any of the existing intents.
3. Use [Intent Analyzer](intent-analyzer-overview.html)’s [Intent Discovery](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-intent-discovery.html) to “discover” new intents to add to your current taxonomy and to classify consumer messages under those intents.
4. Train the new model.
5. Evaluate and optimize the model. As a quick measure, review the results on the Intent Manager [dashboard](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-dashboard.html). For more thorough testing, use Intent Builder’s [Model Tester](intent-builder-testing-advanced-model-testing.html).

#### Number of intents

Intent Builder requires a minimum of 5 intents and 20 training phrases per intent to start training a model. Anything less adversely affects the model’s performance.

The average number of intents for a taxonomy with good coverage is 20-60.

#### Intents

* Work on all of your intents simultaneously, including those in existing [pre-built domains](intent-builder-overview.html#prebuilt-domains). This way, you classify more utterances more efficiently without having to go back. In turn, this helps the model to differentiate between intents. You can better understand the differences if you read utterances with multiple intents in mind.
* Be careful that the topics or actions associated with an intent are exclusive to that intent, i.e., there is no overlap between intent definitions. So, for example, you don’t want two intents that are both for consumers asking how to pay their bill. Similar training phrases should not be present in different intents.
* Split intents when necessary - Sometimes an intent is too broad and all encompassing. This can cause an intent  to be less actionable and have poor accuracy. A simple way to fix this issue is to split the broad intent into smaller intents. An example of this is splitting the intent “ask about credit limit” from the Financial Services industry into three smaller  intents: “increase credit limit,” “decrease credit limit,” and “request credit limit information.” The most important thing to remember is that the new, smaller intents should cover the same conversational space as the original broader intent. Don’t give definitions to the new, smaller intents that go beyond the scope of the original broad intent’s definition.
* Use [meta intents](intent-builder-meta-intents.html) if warranted - You might notice as you are working on your taxonomy that the number of intents can become difficult to manage if the taxonomy grows too large. In this case, LivePerson recommends using meta intents to help group and sort your intents. Please note that all pre-built domains come with meta intents. A meta intent is a wrapper that can contain many other standard intents. This functionality provides a way to funnel a variety of intents into a single category. When a consumer message matches one of the contained intents, both the standard intent and the meta intent are matched.

#### Number of training phrases

For optimal performance, LivePerson recommends 60 to 100 training phrases per intent, but not more than 150 due to the potential issue of model overfitting.

#### Training phrases

* Use *real consumer utterances* for training phrases. Do NOT write your own messages that you think might be similar to a consumer message. 
* Use *complete utterances* rather than phrases or parts of messages, as consumers  usually communicate in full messages, and you want to match the way they state  their intent. 
* Use *utterance diversity* - Avoid duplicate keywords or duplicating the same pattern across your data. Include diverse utterances created by actual  consumers.
    * Diverse utterances with a variety of words and structures:
        * Are there two different passwords for admin and logging in? 
        * I keep trying to reset my password but it says it needs to confirm my  email with an email. 
        * I have forgotten my 5-digit password. 
        * Trying to retrieve my username and password. 
    * These utterances are very similar and NOT diverse:
        * Reset my password. 
        * Please reset my password. 
        * Can you reset my password? 
* Verify each training phrase is a clear match to its named intent, and remove it if not.
* Don’t use more than one entity per training phrase.

#### Model coverage

Intent discovery is the task of finding new intents to add to your current taxonomy. This task is useful to expand the model’s coverage. [Intent discovery](https://knowledge.liveperson.com/ai-bots-automation-liveperson-intent-manager-intent-discovery.html) is accomplished with Intent Analyzer.

#### Training a new model

Train your model at regular  intervals as you add new intents and training phrases. Typically, LivePerson advises training a new model at the end of every session of work on Intent Builder or Intent Analyzer. This allows you to see the results of your changes the next time you revisit the model.

### FAQs

#### What if I want more than 60 intents?
LivePerson has experimented with up to 80 intents without a significant performance drawback. Going above that, there is an increasing chance of intent overlap. As your taxonomy grows in size, the intents themselves will likely become more narrow and specific in their definitions. The most important thing to remember is that intents should never overlap each other in definition. This becomes of greater and greater importance as intents become more and more granular. To avoid overlap in a model with very granular intents, make sure that each message being used as training data only contains a singular topic of discussion. This topic should relate directly to the intent. It is very important that “edge case” messages  (i.e., overly long messages or messages that contain multiple topics of discussion) are not used for training data when working on a large, granular taxonomy. Only use strong, clear examples as training data.

Models that have very granular intents usually require a substantial amount of tuning once the first model is trained. Do this by carefully adding new training data in an iterative cycle. Add some training data and then train a new model, then evaluate and repeat the process if necessary.

It is also useful to use the “Test” feature in Intent Builder to test consumer messages to see which intents have a strong confidence score for that message. If you see any intents that have a confidence score greater than ~20% - 30% and do not belong, revisit the training data for those intents and remove any messages that are similar to the message that you used in the “Test” feature.

#### What is the impact of small messages versus large messages on intent recognition? 
In general, shorter messages tend to increase the likelihood of the model homing in on a few signals, such as action verbs like “cancel,” due to the sparsity  of signals overall. We recommend having a balance of shorter and longer messages during training.  

#### Does punctuation affect training utterances and intent recognition? 
Punctuation doesn’t affect the training and intent recognition. During preprocessing steps, only alphanumeric characters, apostrophes, and quotes are considered.

#### How does NLU handle typos and misspellings? 
Typos and misspellings do have a small impact on the model. You might hurt the model’s prediction accuracy if you deliberately introduce random typos at inference time. However, when both the training and the test data contain common typos and misspellings that we run into in natural online conversations, auto spelling correction at inference time does not seem to improve the model’s  performance. Therefore, LivePerson recommends that you do not deliberately correct *common* typos and misspellings in the training set, to keep it consistent with the natural data the model will see at inference time. That said, too many typos can cause the model to be biased toward unknown words and yield unexpected results.

#### How does capitalization affect intent recognition? 
Capitalization or the lack thereof doesn’t affect intent recognition in the current version of the model, as every string is transformed to its lowercase form before it is run through the NLU pipeline. There is not much to be gained in correcting capitalization errors. LivePerson recommends that you do not correct capitalization errors in consumer utterances, as future versions of the model might consider these. 

#### Should I create intents to capture common ways that customers state affirmative (yes, yes please, sure, I would like that...) and negative (no, no thank you, not at this time, I don’t think so...)? 
It is rarely advised to create an affirmative/negative intent for a conversation, as the intent is but an affirmation or negation of the intent contained in the preceding agent question. Hence, the affirmatives/negatives could envelope  a variety of intents. Our model currently does not process the preceding context  when rendering a prediction on a particular consumer message.  

Instead, consider simpler and safer ways to capture affirmation and negation by, for example, using pattern matching or button selection. In a controlled situation, like an anticipated consumer response to a bot yes/no question, this should be quite effective. 

#### How do I revert to a previous model? 
Before you train your new model, go to Intent Builder, select your domain, and then go to **Domain Settings**. From there you can export a CSV of your intents and their training data. Later, you can use this CSV as training data to revert to the older model if necessary.
