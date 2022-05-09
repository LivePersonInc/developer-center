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

### Import a batch of intents

You can create a domain using an [import file](intent-manager-build-domains.html#create-an-import-file) that contains a set of intents. For info on this, see [here](intent-manager-build-domains.html#add-a-domain-manually-or-using-an-import-file).

### Add an intent

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, click **Add Intent** in the upper-right corner.
5. Specify the following:

    * **Intent name**: Enter the intent name. To name an intent, use a short phrase that describes the intent. Typically, an intent name has both a verb and a noun (e.g., "report login problem"). A domain can have dozens of intents, so using a standard naming convention is important for being able to easily sort and find intents.
    * **Intent display name**: Enter the display name.
    * **Description**: Enter a short phrase describing the intent. While this field is optional, it's often useful. Many intent names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Intent type**: Select either "Intent" or "Meta Intent." For an introduction to meta intents, see [here](intent-manager-key-terms-concepts.html#meta-intents).
    * **Training**: Enter as many training phrases as possible. The NLU engine uses training phrases in order to match a user's utterance with an intent. The more training phrases you include, the more likely it is that the NLU engine will accurately match the user's intent. Generally speaking, the phrases should be complete sentences (not long paragraphs, and not keywords). As an example, assume you have a "Check bill" intent. You might add the following training phrases, among others:
        * I want to check the status of my bill
        * Tell me what my bill is
        * I need to look into what's going with my bill

        For best practices, see [here](intent-manager-best-practices.html#training-phrases).

6. Click **Save**.
7. Train the domain so that the addition is reflected in a new model version.

### Generate training phrases

Adding training phrases to an intent can sometimes be a challenge, so Intent Manager includes a tool to help with this. Within an intent, provide just a single training phrase as the input, and the tool automatically generates additional phrases that are similar in meaning. The suggestions are based on actual utterances by your users.

Generating training phrases is useful when: 

* You’re building out a LivePerson or third-party NLU domain that you’ve created from scratch.
* You’ve [converted a LivePerson (Legacy) NLU domain to the LivePerson engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#convert-a-liveperson-legacy-domain-to-liveperson), and now you need to increase the number of training phrases to meet the minimum requirements.

Note:
* This feature is only available for English-language domains.
* To use this feature, Intent Manager's Intent Analyzer feature must be enabled for your account, and at least one domain (any domain) in Intent Manager must have Intent Tracking enabled ([here](intent-manager-build-domains.html#configure-domain-settings)), as the feature makes use of the data that it captures.
* If you’ve enabled Intent Analyzer recently, expect the tool’s results to improve over time as more data is captured.
* If you're a new customer, expect no results until suggestions can be offered based on utterances by your users. And here again, expect the tool's results to improve over time.

**To generate training phrases**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, select the intent.
5. Beside an existing training phrase (you’ll need to add at least one to the intent), click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_knn.png">.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_knn1.png">

6. Review the generated phrases, and select the ones you want to add to the domain. You might also want to refine the spelling or punctuation. The phrases are based on actual consumer utterances, so they might contain misspellings or poor grammar. (See the FAQ [here](intent-manager-faqs.html) regarding typos and misspellings.)

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_knn2.png">

7. Click **Add**.
8. Back on the Intents page, click **Save** to save the change.
9. Retrain the domain.

### Add or update training phrases in bulk

Use the **Bulk Add** or **Bulk Edit** features, respectively, to add or edit a set of training phrases in bulk.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/im_intents_bulkedit1.png">

When you click the link, all of the training phrases are placed into a single field. This means you can make changes to all or some of them in bulk. For example, you can:
* Insert a number of additional phrases at the top or bottom. This is handy if you have the phrases in a separate file. You can quickly copy them and paste them in.
* Select a number of phrases and delete them all at once. This is faster than doing so one by one.

<img style="width:700px" src="img/ConvoBuilder/im_intents_bulkedit2.png">

{: .important}
To save your changes, click the **Update Intent** button. Once you save the changes, they can’t be reverted. To cancel, navigate away from the page without saving the changes.

Take care when using this feature to avoid making unintended changes:
* To replace what exists, paste over it.
* To add to what exists, paste the additions into (not over) the list.
* Ensure that each phrase is on a different line.

### Using intents

Check out these topics on using intents:

* For a practical walkthrough on using intents, see the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html).
* In a Conversation Builder bot, you can trigger a dialog flow if the consumer's query matches the intent that's associated with the dialog starter. To set this up, you use Conversation Builder's **Assist** tool to associate the dialog starter with the domain and the intent. More on this [here](conversation-builder-assist.html).

### Delete an intent

Deleting an intent is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Ensure the intent isn't being used by any bots or knowledge bases before you delete it.

**To delete an intent**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, select the intent.
5. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon), and select **Delete**.
6. In the confirmation dialog, click **Yes**.
7. Train the domain so that the deletion is reflected in a new model version.
