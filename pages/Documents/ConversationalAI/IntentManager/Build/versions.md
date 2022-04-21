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

### Train a domain

Training a domain is something that you do if the domain uses the LivePerson engine or a 3rd-party NLU engine, not the LivePerson (Legacy) engine.

Training a domain creates a new model version; for more, see the relevant section for the NLU engine that you're using:

* LivePerson NLU engine - See [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#train-a-liveperson-domain).
* Google Dialogflow or IBM Watson NLU engine - See [here](intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html#train-a-domain).
* Your Rasa-based NLU engine - See [here](intent-manager-natural-language-understanding-brand-s-rasa-based-nlu-engine.html#train-a-domain).

### Activate a model version

Activating a model version is something that you do if the domain uses the LivePerson engine or a 3rd-party NLU engine, not the LivePerson (Legacy) engine.

When you activate a model version, it becomes the model version that’s used everywhere outside of Intent Manager, for example, in Conversation Builder, in API calls to the NLU engine, and so on.

{: .important}
Ensure you test before activating a model version, as you can’t deactivate it or revert back to a previous version. You can test multiple model versions, and then activate one when it performs as desired. Once you activate a version, all earlier versions are no longer available. So, to revert back, you’ll instead need to update the domain as needed, retrain to create a new model version, and then activate that version.

The first model version that you create via training is activated automatically. Thereafter, you must manually activate a version. You can activate any model version that was created after the one that is currently activated. Typically, you'll test as you go, so you'll be activating the latest model version.

Keep in mind that model versions are cumulative: The next version builds upon the last version that was created.

**Example 1:** Assume you're using model version 3, and model versions 4, 5, 6 and 7 also exist. You choose to activate version 7. Once you do so, versions 3 through 6 are no longer available. From this point, you can train a new version 8, which builds upon version 7.

**Example 2:** Assume you're using model version 3, and model versions 4, 5, 6, and 7 also exist. You choose to activate version 6. Once you do so, versions 3 through 5 are no longer available. From this point, you can activate version 7 if you choose. Or, you can train a new version 8, which builds upon version 7.

**To activate a model version**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Versions** page.
4. Click the **Activate** button beside the latest model version.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_activate.png">   