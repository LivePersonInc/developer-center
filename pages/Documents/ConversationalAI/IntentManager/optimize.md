---
pagename: Optimize
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
permalink: intent-manager-optimize.html
indicator: both
---

If your agents are [leveraging AI Annotator to annotate messages](https://knowledge.liveperson.com/ai-bots-automation-ai-annotator.html) for the purpose of optimizing your intent models and bots, the **Optimize** tab within Intent Manager is where you can review the annotations and add them to intents.

{: .attn-note}
The **Optimize** tab is only available to Administrators and Managers.

### Review an intent annotation
All submitted intent annotations, including the consumer message and the suggested domain and intent, will be available for review in the **Optimize** tab.

You can:
* Filter the intent annotations according to the time in which they were opened
* Navigate to the conversation to which they belong
* Copy an individual message to the clipboard
* Eport the list of intent annotations as a CSV file

<img loading="lazy" class="fancyimage" alt="The Optimize tab in Intent Manager" style="width:800px" src="img/ConvoBuilder/im_optimize1.png">

### Add intent annotations to an intent
Once the consumer message has been copied to the clipboard:

1. Open the domain within Intent Manager.
2. Access the **Build** tab, then the **Intents** subtab.
3. In the Intents panel on the left, select the corresponding intent to which you want to add the copied message as a training phrase. Then paste in the copied message, and save the intent. (You can also [create an import file](intent-manager-build-domains.html#create-an-import-file) and import intents in bulk.)
5. If the domain is using the LivePerson NLU engine, train the model.

    Once the process is complete, similar consumer messages will be correctly identified by the bot.