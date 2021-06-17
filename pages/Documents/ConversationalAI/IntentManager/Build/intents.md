---
pagename: Intents
redirect_from:
    - intent-builder-intents.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-intents.html
indicator: both
---

### What's an intent?

For an explanation of an intent, see [here](intent-manager-key-terms-concepts.html#intents).

{: .important}
For some practice with intents, complete the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-intents.html) tutorial series.

### Add an intent

**To add an intent**

1. In the dashboard that lists your domains, select the domain.
2. Click **Add Intent** in the upper-right corner.
3. Specify the following:

    * **Intent name**: Enter the intent name. To name an intent, use a short phrase that describes the intent. Typically, an intent name has both a verb and a noun (e.g., "report login problem"). A domain can have dozens of intents, so using a standard naming convention is important for being able to easily sort and find intents.
    * **Intent display name**: Enter the display name.
    * **Description**: Enter a short phrase describing the intent. While this field is optional, it's often useful. Many intent names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Intent type**: Select either "Intent" or "Meta Intent." For an introduction to meta intents, see [here](intent-manager-key-terms-concepts.html#meta-intents).
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
* You’ve [converted a LivePerson (Legacy) NLU domain to the LivePerson engine](intent-manager-build-domains.html#convert-a-liveperson-legacy-domain-to-liveperson), and now you need to increase the number of training phrases to meet the minimum requirements.

Note:
* This feature is only available for English-language domains.
* To use this feature, Intent Analyzer must be enabled for your account, and at least one domain (any domain) in Intent Builder must have Intent Analyzer enabled ([here](intent-analyzer-overview.html#enable-intent-analyzer-for-intents)), as the feature makes use of the data that it captures.
* If you’ve enabled Intent Analyzer recently, expect the tool’s results to improve over time as more data is captured.
* If you're a new customer, expect no results until suggestions can be offered based on utterances by your users. And here again, expect the tool's results to improve over time.

**To generate training phrases**

1. Open the domain.
2. Select the intent.
3. Beside an existing training phrase (you’ll need to add at least one to the intent), click <img style="width:25px" src="img/ConvoBuilder/icon_knn.png">.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_knn1.png">

4. Review the generated phrases, and select the ones you want to add to the domain. You might also want to refine the spelling or punctuation. The phrases are based on actual consumer utterances, so they might contain misspellings or poor grammar. (See the *FAQs* farther below regarding typos and misspellings.)

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_knn2.png">

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
