---
pagename: Versions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-versions.html
indicator: both
---

{: .important}
This topic applies if your domain is using the LivePerson engine or a third-party NLU engine. The LivePerson (Legacy) engine doesn't require training, nor does it support versions.

### Train a domain

Training a domain creates a new model version with the results. The process and related info vary depending on which NLU engine the domain uses:

* LivePerson NLU engine: See [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#train-a-liveperson-domain).
* Google Dialogflow or IBM Watson NLU engine: See [here](intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html#train-a-domain).
* Your Rasa-based NLU engine: See [here](intent-manager-natural-language-understanding-brand-s-rasa-based-nlu-engine.html#train-a-domain).

A new model version created from training isn't activated automatically. See below for info on this.

### Activate a model version

When you activate a model version, it becomes the model version that’s used whenever the domain is referenced: in Conversation Builder, in API calls to the NLU engine, and in analytics.

The first model version that you create via training is activated automatically. After that, training the domain doesn't automatically activate the resulting model version. This becomes a manual step you must do.

Each model version starts as a copy of the version before it regardless of whether it has been activated or not. You can (and should!) create and test multiple model versions before choosing to activate one of them. You can activate any model version that was created after the one that is currently activated. Typically, you'll test as you go, so you'll be activating the latest model version.

{: .important}
Ensure you test before activating a model version. Once you activate a version, all earlier versions are no longer available, so you can’t deactivate it or revert back to a previous version. To update, you’ll need to activate an even more recent model version. You might already have one if you didn’t activate the most recent version. Or, if you don’t have one, you’ll have to update the domain as needed, retrain to create a new model version, and then activate that version. If you think you might want to revert after an update, you can export the training phrases and entities before updating them. You can then use the export files to create a new model version at any time.

**Example 1:** Assume you're using model version 3, and you create model versions 4, 5, 6 and 7 also. After testing, you activate version 7. Once you do so, versions 3 through 6 are no longer available. From this point, you can train a new version 8, which builds upon version 7.

**Example 2:** Assume you're using model version 3, and you create model versions 4, 5, 6, and 7. After testing, you activate version 6. Once you do so, versions 3 through 5 are no longer available. From this point, you can activate version 7 if you choose. Or, you can train a new version 8, which builds upon version 7. Note that you can’t train a new version 8 that builds upon version 6 that you activated. This is because each model version starts as a copy of the one immediately before it, so version 8 will build upon version 7. For this reason, typically, you’ll be activating the latest model version once it performs as you desire.

**Example 3:** Assume you're using model version 3. Before updating it, you export the intents and training phrases. You then create model version 4. You test version 4 and activate it. Once you do so, version 3 is no longer available. You can create a new version 5, which builds upon version 4. If you decide to, you can import the intents and/or entities you exported from version 3, overwriting the existing ones. Either way, you can then train version 5 and activate it.

**To activate a model version**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Versions** page.
4. Click the **Activate** button beside the latest model version.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_activate.png">   