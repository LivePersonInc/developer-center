---
pagename: Intent Discovery
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Discover
permalink: intent-manager-discover-intent-discovery.html
indicator: both
---

### Step 1: Understand your existing model
When you begin, first take a look at how the existing model is performing. There are a few key things to note: 

* Coverage
* Intent names
* Existing training data

First, to easily gauge the coverage of the current model, visit the Intent Manager dashboard and check the “Top Intents” and “Intent Summary” pie charts:

<img class="fancyimage" style="width:800px" alt="Top Intents and Intents Summary pie charts" src="img/ConvoBuilder/im_intent_discovery1.png">

{: .note}
In the **Intent Summary** pie chart, check both the classified vs. unclassified space at both the “Conversations” and “Messages” levels using the toggle buttons. In the **Top Intents** chart look for how much of the pie chart “Undefined” occupies. If any of these metrics are very low, i.e., one-quarter or less of the pie charts, it is unlikely there will be many intents to discover. Take this into consideration as you proceed. Don’t see undefined in the Top Intents chart? Enable it by clicking the gear option and selecting Display “undefined” intents.

1. Go to the “Build” page and check the intent names and their training data. It is important to read each message of training data that corresponds to each intent and verify whether the message fits the name of the intent. If a message is not a clear match to its corresponding intent, remove it from the training data.
2. Once you’ve finished looking over the existing model’s coverage, intent names, and intent training data, you should have a good understanding of the intents that already exist in your model. This is important to keep in mind going forward, as you do not want your future work to overlap with any of the existing intents.

### Step 2: Discover intents

Intent discovery is the task of finding new intents to add to your current taxonomy. This is useful to expand your model’s coverage. Make sure to consider any existing intents (i.e., a starter pack) as you begin this process since you do not want to create an intent that will overlap with one of the existing intents in name or function.

{: .note}
Sometimes it’s better to use the keyword filter instead of creating an intent, depending on your goal. For instance, if you want to see which intents are being impacted by a devastating event like a wildfire, you could use a list of keywords such as “fire,” “smoke,” “air quality,” “evacuation,” etc., and from there, you can check the graphs to see how often the keywords are occurring per intent as well as other useful metrics like the total number of utterances that contain one of the keywords.

Below is a visual guide for anyone starting the intent discovery process:

1. Start by going to the “Discover” page:

    <img class="fancyimage" alt="Discover page" style="width:800px" src="img/ConvoBuilder/im_intent_discovery2a.png">

2. Make sure the “Only show unclassified messages” toggle is enabled as seen below:

    <img class="fancyimage" style="width:800px" alt="Only show unclassified messages toggle" src="img/ConvoBuilder/im_intent_discovery2b.png">

3. Now, begin looking through each “verb noun cluster”, starting with the largest. You can analyze a cluster by clicking on it, or one of its subclusters. Each cluster is about a general topic that consumers discuss, and it will visually show all of the subclusters contained within it. Subclusters are formed from sets of consumer messages that all used the same verb and noun pairing. These subclusters use the “root” versions of verbs, so all conjugations of the same verb (i.e. -ing, -ed) are grouped within the same subcluster. When you click on a subcluster or the “View Details” next to a subcluster, you can see the consumer messages that compose it.

    <img class="fancyimage" style="width:800px" alt="Cluster Details" src="img/ConvoBuilder/im_intent_discovery2c.png">

4. As you are reviewing each subcluster, consider each as inspiration for an intent in your taxonomy. Before you convert a subcluster to an intent, verify two things:

    * Does the subcluster represent an intent that is not covered in your taxonomy?
    * Does the verb and noun pairing create a logical intent? If you answered yes to both of these questions, then you probably have a good candidate for a new intent to add to your taxonomy. Keep in mind that sometimes multiple subclusters can be duplicates that use synonymous verbs. So, consider this while you analyze the subclusters and feel free to convert multiple subclusters into only one intent.

5. To convert a subcluster to an intent, find the subcluster you want to convert and click the “View Details” button. This will take you to the “Messages” view and show you the consumer messages that composed that cluster.

    <img class="fancyimage" style="width:800px" alt="View Details button within the Cluster Details" src="img/ConvoBuilder/im_intent_discovery2d.png">

6. Now that you can see all of the messages that compose the subcluster, you can use the checkboxes on the left to select the messages you would like to use for the new intent. You can also choose to use the selected messages as training data for an existing intent.

    <img class="fancyimage" style="width:800px" alt="Messages tab, with a list of messages shown and a checkbox beside each one" src="img/ConvoBuilder/im_intent_discovery2e.png">

For an alternative method of finding new intents, try looking through the data manually, following this process:

1. While still in “Intent Discovery” switch to the “Messages” display, and start by trying to find a pattern or theme in the messages by filtering out everything except “Undefined.” First click the “Add Filter” button on the top left.

    <img class="fancyimage" style="width:800px" alt="Add Filter button in the upper-left corner, while on the Messages tab" src="img/ConvoBuilder/im_intent_discovery2f.png">

2. Next, in the pop-up window, select “Intents” as your filter type on the left:

    <img class="fancyimage" style="width:800px" alt="Intents option in the filter" src="img/ConvoBuilder/im_intent_discovery2g.png">

3. And then pick “Undefined” from the dropdown on the right:

    <img class="fancyimage" style="width:800px" alt="Undefined option" src="img/ConvoBuilder/im_intent_discovery2h.png">

4. Try to review at least 30 messages. You may need to switch the number of messages viewable in the window from the default of 20 to 50 or higher if needed. Here is an example. In these messages, you may notice a few recurring patterns such as consumers reporting issues logging into their account. Let’s group those similar messages together to make an intent.

    <img class="fancyimage" style="width:600px" alt="Example messages" src="img/ConvoBuilder/im_intent_discovery2i.png">

5. After identifying a few patterns, see if you can group similar messages under a named label that you create. In the above example case, we can take the three checked utterances and make an intent named “Report login problem.” To name an intent, try to think of a short phrase that could describe the intent. Typically, an intent name has both a verb and a noun.

### Step 3: Find more messages

Now that we have discovered and named a few intents, let’s use our full list of intents to classify some consumer messages. These messages will be used as training data to create a model for the intents you’ve discovered. Determine a few rules for which messages should be classified by each intent and write them down. These rules are what we call intent “definitions” and will help you stay consistent as you classify messages. Make sure that the definitions of each intent do not overlap. Below are some examples of intents and their definitions:

| Intent | Definition |
| --- | --- |
| Request refund | A consumer request to receive a refund. |
| Request account number | Any consumer request to attain, lookup, or find a consumer's account number. |

There are a few methods you can use to find more messages:

First, you can read the unfiltered messages directly from the “Messages” view on the Intent Discovery tab, just make sure not to have a cluster or subcluster selected:

<img class="fancyimage" style="width:800px" alt="Message tab within Intent Discovery" src="img/ConvoBuilder/im_intent_discovery3a.png">

Another method is to use a keyword search to filter your results, as seen below:

<img class="fancyimage" style="width:800px" alt="Keyword search box at the top of the page" src="img/ConvoBuilder/im_intent_discovery3b.png">

Last, you can use the “Discover Similar Messages” feature to find messages similar to a message you select. To start, highlight a message with your mouse and click “discover similar messages,” as seen below:

<img class="fancyimage" style="width:700px" alt="Discover similar messages link for an example message under Messages with Intent" src="img/ConvoBuilder/im_intent_discovery3c.png">

After clicking “discover similar messages”, Intent Manager will load a new set of messages into the “Messages with Intent” window, all of which are similar to the message that you picked at the beginning:

<img class="fancyimage" style="width:700px" alt="List of messages with intent, showing more messages loaded" src="img/ConvoBuilder/im_intent_discovery3d.png">

Alternatively, you can use the clusters and subclusters in Intent Discovery to find additional training data as well. To do this, go to Intent Discovery’s cluster view and click a subcluster that you want to add to an existing intent. Once you’ve done this, click **View Details** and the utterances from that cluster will be brought over to the “Messages” window.

<img class="fancyimage" style="width:800px" alt="View Details button within Cluster Details pane" src="img/ConvoBuilder/im_intent_discovery3e.png">
<img class="fancyimage" style="width:800px" alt="Messages tab" src="img/ConvoBuilder/im_intent_discovery3f.png">

Regardless of which option you choose to find more messages, once you’ve found them, use the dropdowns on the right to classify them, or you can select multiple messages with the checkboxes on the left and reclassify them as a group.

<img class="fancyimage" style="width:800px" alt="Dropdown for classifying a message, assigning it to an intent" src="img/ConvoBuilder/im_intent_discovery3g.png">

{: .note}
You can also export the utterances using the “Export table to CSV” as a spreadsheet to Excel or Google Sheets. Once the data has been exported and downloaded onto your local device, you can upload the file into Google Sheets or Excel and begin classifying messages.

<img class="fancyimage" style="width:800px" alt="Export table to CSV link in the upper-right corner" src="img/ConvoBuilder/im_intent_discovery3h.png">

### Step 4: Train your new model

Now that you have discovered some intents and found the training data for those intents, you’re ready to [train your model](intent-manager-build-domains.html#train-a-liveperson-domain). You should train your model at regular intervals as you add new intents and training data. Typically, we advise training a new model at the end of every session of work. This allows you to see the results of your changes the next time you revisit the model.

### Split an intent

Sometimes an intent is too broad and all encompassing. This can cause an intent to be less actionable and have poor accuracy. A simple way to fix this issue is to split the broad intent into smaller intents. An example of this is splitting the intent "Ask about credit limit" from the Financial Services industry into three smaller intents:

* Increase credit limit
* Decrease credit limit
* Request credit limit information

The most important thing to remember is that the new, smaller intents should cover the same conversational space as the original broader intent. Do not give definitions to the new, smaller intents that go beyond the scope of the original broad intent’s definition. To split an intent into smaller intents, first delete the original, broad intent. Then, gather the messages for the smaller intents just as you typically would for a new intent, and train a new model.