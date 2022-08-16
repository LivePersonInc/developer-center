---
pagename: FAQs
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-faqs.html
indicator: both
---

### Model performance

#### What is a confidence score?
The confidence score approximates how likely an intent is present in the message. For every message, the model assigns a score to every defined intent in the range of zero to 1. These scores add up to 1. A confidence score close to 1.0 means the system is strongly confident that a message contains an intent. A score close to zero suggests that a particular intent is likely not present in a message.

#### What is a good confidence score?
The system is designed to be conservative in how it assigns scores. It cannot assign every message a confidence score of 1.0, and it only assigns an intent to a message if the confidence score reaches a certain threshold. The current threshold is set at 0.6. Anything below 0.6 is assigned the intent of “Undefined.” A score of 0.65, for example, would mean that the message is assigned an intent with less than strong confidence, whereas a score around 0.9 would represent a high likelihood that the message has a particular intent.

#### How should I use a model’s confidence scores to improve it?
You should not use confidence scores to determine the model’s performance. The confidence scores are not a reflection of the accuracy of the model but an approximation of the likelihood of the intents associated with the scores. Instead, model accuracy, precision, and recall are the metrics we usually rely on to assess the performance of the model.

#### What exactly is the similarity score in intent discovery? Does it represent syntactic similarity or lexical or both?
The similarity score is calculated using cosine similarity, measuring the angle between two vector representations of sentences. The larger the score, the smaller the angle and hence, the more similar the two sentences are. Our embeddings enable us to compare sentences on both the syntactic and the semantic levels.

#### How should I improve my NLU model?
The performance of a model depends on both the quantitative and qualitative nature of the trainingphrases. We require a minimum of five intents with 15 training phrases per intent to activate training for a model. Anything less adversely affects model performance.

For optimal performance, we recommend 60 to 100 training phrases per class (intent), but not more than 150 phrases due to the potential issue of model overfitting. 

Be careful that the topics or actions associated with an intent are exclusive to that intent. So, for example, you don’t want two intents that are both for consumers asking how to pay their bill. Furthermore, you can improve model performance by correcting model predictions  using the “Analyze” tools, adding these messages to your training set, and retraining your model.

#### I see a lot of messages that were misclassified as an intent, what should I do to fix this? (low precision)
In the domain, go through the training phrases for the intent in question and check whether there are overlaps between the training and the misclassified messages. If so, please remove your training examples that are similar to the misclassified messages. Additionally, make sure there is no overlap between intent definitions. Use training phrases that clearly differentiate between intents. Similar training samples should not be present in different intents. Also, see the general recommendation for “How should I improve my NLU model?” above.

#### I see a lot of “unclassified” messages that should have been classified as an intent, what should I do to fix this? (low recall)
Try to fix the misclassified labels in the “Discover” view, add them to the training phrases, and retrain your model. You may also create a new intent and assign the “Undefined” messages to it if it doesn’t already exist.

### Small messages vs. large messages

#### What is the impact of small messages vs. large messages on intent recognition?
In general, shorter messages tend to increase the likelihood of the model homing in on a few signals, such as action verbs like “cancel,” due to the sparsity of signals overall. We recommend having a balance of shorter and longer messages during training.

#### Why do so many small messages get identified as intentful?
Overall, short consumer messages (less than or equal to five tokens) make up roughly 50% of all consumer messages. During inference time, especially in the case of the statement of intent (SOI) classifier or USIC, we have observed a tendency of the current model to misclassify short messages with certain features, such as the presence of a question mark or a function word like “please,” as intentful. These, however, represent only some 3-4% of the total number of SOIs we detect with the USIC model. The bulk (~84%) of these misclassified SOIs will be identified as “Undefined” in the downstream intent recognition model and will not have a significant impact on the results and analysis shown on thedashboard. Furthermore, if we remove short messages entirely, we will be missing out on messages with the above-mentioned features that are definitely intentful, for example, “please cancel,” “yes, please enroll me,” etc.

### Large taxonomies

#### How many intents should I have in my taxonomy?
To start training a model, a minimum of 5 intents and 15 training phrases (utterances) per intent are required. The average number of intents for a taxonomy with good coverage is 20-60.

#### What if I want more than 60 intents?
LivePerson has experimented with up to 80 intents without a significant performance drawback. Going above that, there is an increasing chance of intent overlap and the number of “Undefined” might go up as a result of the model being undecided and having low confidence scores below the minimum threshold. As your taxonomy grows in size, the intents themselves will likely become more narrow and specific in their definitions. The most important thing to remember is that intents should never overlap each other in definition. This becomes of greater and greater importance as intents become more and more granular. To avoid overlap in a model with very granular intents, make sure that each message being used as training data only contains a singular topic of discussion. This topic should relate directly to the intent. It is very important that “edge case” messages (i.e. overly long messages or messages that contain multiple topics of discussion) are not used for training data when working on a large, granular taxonomy. Only use strong, clear examples as training data. 

Models that have very granular intents usually require a substantial amount of tuning once the first model is trained. Do this by carefully adding new training data in an iterative cycle. Add some training data and then train a new model, then evaluate and repeat the process if necessary. 

It is also useful to use the “Test” feature (under “Build”) to test consumer messages to see which intents have a strong confidence score for that message. If you see any intents that have a confidence score greater than ~20% - 30% and do not belong, revisit the training data for those intents and remove any messages that are similar to the message that you used in the “Test” feature. Although it is our goal internally to create an intent that at least covers 1% of all the SOIs and a taxonomy with at least 50% coverage, it is definitely worthwhile to create an intent with lower coverage if it has special value to a customer.

### Punctuation

#### Does punctuation affect training utterances and intent recognition?
Punctuation doesn’t affect the training and intent recognition. During preprocessing steps only alphanumeric characters, apostrophes, and quotes are considered. *Technical note*: This step is done before tokenization, hence the advice.

### Typos and misspellings

#### How does NLU handle typos and misspellings?
Typos and misspellings do have a small impact on the model. You might hurt the model’s prediction accuracy if you deliberately introduce random typos at inference time. However, when both the training and the test data contain common typos and misspellings we run into in natural online conversations, auto spelling correction at inference time does not seem to improve the model’s performance. Therefore, we recommend that we do not deliberately correct common typos and misspellings in the training set, to keep it consistent with the natural data the model will see at inference time. That said, too many typos can cause the model to be biased toward unknown words and yield unexpected results.

### Case sensitivity

#### How does capitalization affect intent recognition?
Capitalization or the lack thereof doesn’t affect intent recognition in the current version of the model, as every string is transformed to its lowercase form before it is run through the NLU pipeline. There is not much to be gained in correcting capitalization errors. LivePerson recommends that you do not correct capitalization errors in consumer utterances, as future versions of the model might consider these.

### Miscellaneous

#### What level of coverage and performance should businesses expect or aim for when Intent Manager is first turned on?
The Starter Packs are supposed to be the start rather than the end of a customer’s journey into intent discovery, analytics, and automation. The Starter Packs contain predefined intents and a training set sampled from a customer’s historical data. Depending on the domain and the brand, the coverage and accuracy may vary greatly. On average, a business can expect 56.3% coverage with 50.1% accuracy on starter pack data. But it varies across different verticals.

| Vertical | Coverage on test set | Precision on defined intents |
| --- | --- | --- |
| Airlines | 75% | 69% |
| Cross vertical / retail | 48% | 73% |
| Financial services | 59% | 64% |
| Telecommunications | 46% | 64% |
| Insurance | 78% | 68% |

#### Should I create intents to capture common ways that customers state affirmative (yes, yes please, sure, I would like that…) and negative (no, no thank you, not at this time, I don’t think so…)?
It is rarely advised to create an affirmative/negative intent for a conversation, as the intent is but an affirmation or negation of the intent contained in the preceding agent question. Hence, the affirmatives/negatives could envelope a variety of intents. Our model currently does not process the preceding context when rendering a prediction on a particular consumer message. 

Instead, consider simpler and safer ways to capture affirmation and negation by, for example, using pattern matching or button selection. In a controlled situation, like an anticipated consumer response to a bot yes/no question, this should be quite effective.

#### What does classifying a message to "undefined" in Intent Manager do? Does it train the model to classify similar messages as “undefined”?
It marks the message and all subsequent incoming messages that are its duplicates as “Undefined,” but it will not retrain the model unless you tell it to. Sometimes you might be curious as to why a message was labeled with an intent but should have been unclassified. It is advised not to classify the message to “undefined”, but instead revisit your training data in Intent Builder for the intent that was incorrectly applied. You might find similar training messages that you could remove to prevent another false positive in the future.

#### How do I revert to a previous model?
You can’t revert to a previous model, but you can export a CSV of your intents and their training data. (You do this in the domain’s settings.) If necessary, you can use this CSV as the training data for a new domain.
