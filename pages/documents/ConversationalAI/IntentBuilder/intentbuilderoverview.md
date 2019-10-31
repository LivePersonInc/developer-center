---
pagename: Overview
redirect_from:
    - conversation-builder-intent-builder-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-overview.html
indicator: both
---
<img  class="fancyimage" style="width:750px" src="img/beaut_ib_2.png">

The Conversation Builder Platform's Intent Builder allows you to build multiple intent domains that can each hold one or many user intents. Thus, you can define specific groups of intents for different use cases. Once you build at least one intent domain, you will be able to use the [Conversation Builder](conversation-builder-getting-started-bot-workspace-overview.html) to associate one domain to each dialog.

An example might be a "shipping" domain that contains intents for "delivery status", "update address", etc. This "shipping" intent domain could be linked to automation dialogs that do various shipping tasks.

This directs your automation to be more flexible and respond to a wider variety of user input; instead of looking for specific patterns in user input (for example, the pattern "bill"), the automation will use an NLU engine to look for the intent specified and trigger the interaction you configured to respond to this intent. Therefore, once you configure your intents with robust **Training Phrases**, expressions like "I have a question about billing", "Looking to check my account" or "What's my billing status?" yield the same intent and, thus, the same response from the automation.

{: .important}
See [NLU Engines](conversation-builder-intent-builder-nlu-engines.html) to learn more about the different NLU options that are compatible with Conversation Builder.

### Adding a Domain

**To add a domain**

1. Click **New domain** in the upper-right corner.
2. On the Add Domain page, specify the following: 
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Manual** or **Import**: If you want to manually add intents and entities to the domain, select "Manual." If you want to import a pre-configured list in from a file, select "Import."
    * **CSV** or **Google Sheet**: If you selected to import intents and entities, select the type of import file involved, and then use the controls that appear to upload the files.
    * **NLU Provider**: Select the NLU engine to use. For help in making this selection, see the discussion on NLU engines [here](conversational-ai-natural-language-understanding-nlu-engines.html).
    * **Language**: Select the language.
3. Click **Add Domain**.
    
    You can now add intents and entities to the domain. If the domain's NLU provider is LivePerson's NLU v2 (not v1), you'll also need to [train the model](intent-builder-overview.html#train-an-nlu-v2-based-model).

### The Domain View

Once you've added a domain, you will be automatically navigated to the Domain View. On the left hand side, you can find a list of the intents a domain includes, which will originally be empty, since you haven't created any intents yet. On the right hand side you'll find the domain's Settings Toolbar. It includes four buttons:

* The home icon will navigate you back to the first screen of the Intent Builder, which will allow you to view all your created domains or create a new one.

* The plus icon is the default panel of the Domain View. It is the Add Intent panel, where you can create new intents under the domain.

* The debugger icon allows you to enter sample user input to test against your intents; the NLU engine will take your inputted text and see if it can find matches in your intents. It will list these intents and the degree to which they matched with the input text.

* The last icon is the Settings panel. It will allow you to rename the domain, retrieve its ID (under "More Settings" at the bottom), delete the domain and more.

### What is an Intent?

Instead of looking for specific patterns in user input (for example, the pattern "bill"), the automation will use an NLU engine to look for the intent specified and trigger the interaction you configured to respond to this intent. Intents are great for when you need a looser approach to matching than pattern matching. Since pattern matching looks for an *exact* match for your defined expression, it might "miss" different synonyms, phrasings, formats, and so on.

Intents match an entire sentence against a set of training sentences or KB articles and the results are scored based on level of confidence (VERY GOOD, GOOD, FAIR PLUS, FAIR, POOR). From this sentence, the NLU engine derives an intent to which the automation responds. For example, if you configured your automation to respond to a "billing" intent, the NLU engine doesn't just look for the word "billing"; it analyzes any sentence the user might input and tries to understand if the "billing" intent is present. If the intent is present, the NLU "tells" the automation that it is and the relevant dialog triggers.

### Adding an Intent

The default panel of the Domain View is the Add Intent panel. It will be the panel opened by default when you enter the Domain View. To add an intent, first use the topmost input area to enter its name.

<div class="important">Using standard naming conventions when creating intents is crucial. A domain can have dozens of intents and being able to easily sort and find intents is the key to making sure your automation runs efficiently and smoothly.</div>

Once you've selected a name for your Intent, you should add as many training phrases as possible by using the bottom input area. To add another training phrase after your first one, click on the blue **+** sign to the right of the input area.

### LiveIntent

When you enter Intent Builder, you will notice a column that tells you if a domain "Has LiveIntent" or not.

{: .important}
It is a best practice to only have one domain enabled for LiveIntent at a time. This is to minimize intent overlap.

<img class="fancyimage" style="width:750px" src="img/liveintent-domains1.png">

Click on a domain of your choice. On the left side of the screen, you will see your list of intents. If an intent is enabled for LiveIntent, it will have a green dot to its left.

Under the Intents left-side dropdown, select "Enable LiveIntent" and select the intents in bulk.

{: .important}
It is a best practice to enable all intents within a domain for the best analysis.

<img class="fancyimage" style="width:750px" src="img/liveintent-domains3.png">

You can view the enabled intents in the [LiveIntent dashboard](liveintent-dashboard.html).

### Training Phrases

The NLU engine uses training phrases in order to match a user input with an intent. The more training phrases you include, the more likely the NLU engine will be to accurately match the user's intent with what they were actually looking for. Generally speaking, the phrases should be complete sentences (rather than keywords like pattern matching or very long paragraphs).

Let's say that I have an intent which I label "check_bill". I could associate it with the following training phrases:

* I want to check the status of my bill

* Tell me what my bill is

* I need to look into what's going with my bill

The NLU engine will take the user input and compare it to your training phrases. If it finds a match to a degree of certainty exceeding "GOOD", it will send the intent configured to the automation. All of these phrases and similar sentences would result in the "check_bill" intent being sent to the automation and the corresponding action (configured by you in the Conversation Builder) to be triggered.

For more best practices, see [Training and Tuning your Intents and FAQs](conversational-ai-platform-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html).

### Train an NLU v2-based model

1. Add *at least* 10 intents. For each intent, add *at least* 20 training phrases.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/intents_trainingPhrases.png">

2. Click <img style="width:35px" src="img/ConvoBuilder/icon_train.png"> (Train icon) in the lower-right corner.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/intents_trainingPhrases.png">