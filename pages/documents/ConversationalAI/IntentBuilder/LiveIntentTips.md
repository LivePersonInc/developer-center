---
pagename: LiveIntent Tips
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-liveintent-tips.html
indicator: both
---

Below are instructions for adding and improving intents and training utterances for [Intent Analyzer](https://knowledge.liveperson.com/ai-bots-automation-liveintent-overview.html) via the Intent Builder interface. Intents and training utterances for Starter Packs and Custom Intent Modeling are produced via processes outside Intent Builder but are ultimately input into Intent Builder via the same interface.

**Main points:**

Use **real customer utterances** for training utterances. Do **not** write your own messages that you think might be similar to a customer message.

Use **complete utterances** rather than phrases or parts of messages, as customers usually communicate in full messages and you want to match the way they state their intents.

**Work on multiple intents** simultaneously, so you classify more utterances, more efficiently, without having to go back.  It also helps the model to differentiate between intents, and you can better understand the differences if you read utterances with multiple intents in mind.

### Step 1: Getting started 

#### Identify a pattern or theme in the messages

Go to the [Intent Analyzer dashboard](https://knowledge.liveperson.com/ai-bots-automation-liveintent-dashboard.html) and filter by undefined. Try to look at at least 30 messages.

Here are some example messages:

* What is the ***pricing*** for liveperson per month

* What is the ***pricing*** for whatsapp

* I want to **_know more about_** LivePerson and your **_products_**

* *Yes please*

* *if it works then I would like to become a partner*

* *if it is a good fit then I would like to try it on a client starting today for 10 days as a test*

Some patterns we noticed are recurring words such as "pricing," “know more” and “about” in the same sentence as “products.” 

#### Name the intent

After identifying a few patterns, see if you can group messages under a label. In this case, we worked on an intent that could be named "Request Product Info."

#### Classify a set of messages with your intent

There are two ways to classify messages: 

* Option 1: Read the messages directly from the [Conversation Details dashboard](https://knowledge.liveperson.com/ai-bots-automation-liveintent-dashboard.html#conversation-details) on Intent Analyzer. You may want to take notes to record your patterns.
 
    <img  class="fancyimage" style="width:750px" src="img/liveintent_tips_image_0.png">

* Option 2: Export them as a spreadsheet and create a dropdown menu in the intent column to manually label the messages. 

    The export button is circled in red in the upper right corner of the Conversation Details.   

    <img  class="fancyimage" style="width:750px" src="img/liveintent_tips_image_1.png">


Here’s a sample spreadsheet of the messages extracted from the Intent Analyzer dashboard. They are all initially labeled as "undefined." Manually go through each message and change the label to the name of your intent. 

<img  class="fancyimage" style="width:750px" src="img/liveintent_tips_image_2.png">

#### Guidelines for classifying your messages with your intent

We recommend starting with 4 or 5 intents. However, Intent Builder currently requires 10 intents in order to train a model. 

**Use intent definitions** 

Definitions help you figure out what message to include and/or exclude in your training utterances. 

When you begin, you will need to create an initial definition based on one pattern you see. As you continue to look through your data, feel free to modify your definition to include more utterances. 

**Check for overlap**

Make sure the definition does not overlap with the definitions of other intents. If they overlap, you might specify what to exclude in your definition. 

*Intent*: Request technical support

*Overlaps with*: Request for tutorial

*New definition*: Any request for troubleshooting a product issue. **Exclude** any request for instructions. 


#### Best Practices for Selecting Training Utterances

**Optimal number of utterances**

For the best results, you will need *20-100 training utterances per intent* for the model to more accurately recognize diverse utterances. 

Currently, you can only pull 500 messages at a time. If you classify 5 messages as an intent out of that set, you will need to pull 4x more data to get enough training utterances for that intent. 

**Utterance diversity**

Avoid keyword or pattern matching. LP-NLU models take a variety of things into account in predicting labels; trying to guess what those would be will lead to poor results. A better approach is to include diverse utterances *created by actual customers*.

Diverse utterance: *Is there two different passwords for admin and logging in*

This canned utterance is NOT diverse: *Reset my password *

### Step 2. Evaluate your model

After creating your intents and adding in training utterances on IntentBuilder, you would want to confirm that the model can categorize incoming messages correctly. 

This is how your data will look if you export it to evaluate your model. 

<img  class="fancyimage" style="width:750px" src="img/liveintent_tips_image_3.png">

Here are some steps you can take to evaluate how well your model is doing. 

1. Check that labeled messages are correct. Any mislabeled message can be added as a training utterance to the correct intent. 

1. Identify the undefined messages that should’ve been classified as your intent. If you find any that have been missed by the model, you can add them to the training utterances. 

2. If you see a large number of patterns in unlabeled data, consider creating more intents.  

### Step 3. Improve the model (Optional)

You may want to fine tune your model to increase the accuracy of message classifications. There are several ways you can do so: 

1. Add more training utterances and re-train the NLU model. 

2. To get better coverage, create a new intent from undefined messages. We encourage you to create no more than 40 intents. 

3. Consider splitting up an existing intent to add precision. You can break down an intent by the action required or focus on a product.

