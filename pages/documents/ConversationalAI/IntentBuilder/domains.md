---
pagename: Domains
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-domains.html
indicator: both
---

### Add a domain

1. Access the Intent Builder application as described [here](intent-builder-overview.html#access-intent-builder).
2. In the dashboard that lists your domains, click **New domain** in the upper-right corner.
3. On the Add Domain page, specify the following: 
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Manual** or **Import**: If you want to manually add intents and entities to the domain, select "Manual." If you want to import a pre-configured list in from a file, select "Import."
    * **CSV** or **Google Sheet**: If you selected to import intents and entities, select the type of import file involved, and then use the controls that appear to upload the files. **Note:** The import file should only be named with and contain alphanumeric characters.
    * **NLU Provider**: Select the NLU engine to use. For help in making this selection, see the discussion on NLU engines [here](intent-builder-natural-language-understanding.html).
    * **Language**: Select the language.
4. Click **Add Domain**.
    
    If you didn't import them, you can now add intents and entities to the domain.
    
    If the domain's NLU provider is LivePerson's NLU v2 (not v1), you'll also need to [train the model](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain).

### Train a LivePerson NLU v2 domain

You must train the LivePerson NLU v2 domain after every update to the domain if you want the update to be reflected in subsequent testing/debugging and usage. Training creates a new model version that incorporates the changes. Once the domain is trained, you can use the Test tool to test.

Depending on how big the domain is, training typically takes anywhere between 2 to 10 minutes.

**To train a LivePerson NLU v2 domain**

1. Open the domain.
2. Ensure the domain has *at least* 5 intents. For each intent, ensure it has *at least* 20 training phrases.

    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/intents_trainingPhrases.png">

3. Click **Train** in the upper-right corner to start the training.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/intents_trainingStatus.png">

    To refresh the page and check on progress, click <img style="width:25px" src="img/ConvoBuilder/icon_trainRefresh.png"> (Refresh icon) in the **Training Status** column.

### Create a 3rd-party NLU provider credential

1. Open the domain.
2. Click **Train** in the upper-right corner.
3. In the Train dialog, click the "Select NLU Provider Credential" option.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_third_party_cred1.png">

    This changes the option, so you can create a credential instead.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_third_party_cred2.png">

4. Click "Create a new NLU Provider Credential."
5. In the Add NLU Provider Credential dialog box, specify the following:
    * **Credential Name**: Enter a name for the credential.
    * **NLU Provider**: Select the 3rd-party NLU engine.
    * **Credentials**: Paste here the credentials that you download when you set up your IBM Watson  or Google Dialogflow account.

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/ib_third_party_cred3.png">

6. Click **Save Credentials**.

### Train a 3rd-party NLU domain

You must train the 3rd-party NLU domain after every update to the domain if you want the update to be reflected in subsequent testing/debugging and usage. Training creates a new model version that incorporates the changes. Once the domain is trained, you can use the Test tool to test.

Depending on how big the domain is, training typically takes anywhere between 2 to 10 minutes.

**To train a 3rd-party NLU domain**

1. Open the domain.
2. Click **Train** in the upper-right corner to start the training.
3. Select the [NLU provider credential](intent-builder-natural-language-understanding.html#step-2-sign-up-and-get-the-api-keys) from the list, and click **Train**.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/NLU_image_4.png">

    Note that you'll need to alternate between using your two sets of credentials, as discussed farther below.

4. Wait until the training is completed.

    To refresh the page and check on progress, click <img style="width:25px" src="img/ConvoBuilder/icon_trainRefresh.png"> (Refresh icon) in the **Training Status** column.

    Once training is completed, you can start testing with the model version in the Debugger.

#### Alternating service credentials

When you created your 3rd-party service credentials, you created two sets, as discussed [here](intent-builder-natural-language-understanding.html#step-2-sign-up-and-get-the-api-keys). This is so you can alternate between them. When you train the intents in a domain for the first time in Intent Builder, you'll use the first set of credentials. Those credentials will then be active for the first model version that gets created. *Since only one set of credentials can be active at a time*, you'll need to use the second set of credentials the second time you train. And with each subsequent training, you'll need to alternate back and forth between the credentials.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/3rdpartyNLU_serviceCreds.png">

### Test a domain

You can test the intents (and entities) in a domain against sample user utterances using the **Test** tool. The NLU engine takes the sample utterance and sees if it can find matches in the intents. The results list the intents and the degree to which they matched the utterance.

The purpose of testing is to determine whether the domain is performing as expected. As an example, assume you have a domain with 10 intents that each have 10 training phrases. During testing, you might use a test bank of 20-30 utterances that aren’t a part of the domain to see the results for those utterances. The accuracy would help to define the benchmark for the domain. After evaluating the utterances that didn’t work, you could fine tune the domain, re-train (required depending on the NLU engine), and then re-test for verification.

{: .important}
If the domain uses the LivePerson NLU v2 engine or a 3rd-party engine, you'll need to train the domain before testing it. However, you **don't** need to activate the resulting model version before testing it. (You can’t deactivate a version once you’ve activated it.) Use the Test tool to 1) test the **latest trained** model version and 2) compare it with results from testing the **activated** model version. When you have the latest trained model version performing as desired, you can then activate it.

**Tip**: After testing but before making any fine-tuning changes, consider exporting the intents and entities in the domain and archiving the export file. This gives you the ability to go back and compare the versions of the domain.

**To test a domain**

1. In the dashboard that lists your domains, select the domain.
2. Click **Test** in the upper-right corner. 
3. In the Test User Input panel, specify the following:
    
    **User text**: Enter the user utterance to test.
    
    **Search in domain**: If you disable this, the test will be run against the currently displayed intent. If you enable this, the test will be run against all intents in the domain. In most cases, you'll want to enable this setting. If you do, you can then select whether to test against [intents](intent-builder-intents.html), [meta intents](intent-builder-meta-intents.html), or all.
    
    **Model version**: This setting is only displayed and relevant if the domain uses the LivePerson NLU v2 engine or a 3rd-party NLU engine. Select the trained model version test. You can select from all existing versions.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug1.png">

3. Click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug2.png">

    If you searched in the domain, you can select a result to see a more detailed breakdown.

    After reviewing the results, if the score isn't where you’d like it, you can add more training phrases. In addition, using [entities](conversation-builder-intent-builder-entities.html) helps to increase the accuracy of intents and give their score a boost.

#### What is the intent score/threshold?

Because we want to return the best response to users, the NLU has a threshold for which anything below this threshold will not be shown to the user. For intents, this threshold is set to GOOD. This is based on the NLU’s level of confidence in the match. The confidence score breakdown looks like this:

* VERY GOOD: 85-100% match

* GOOD: 70-85% match

* FAIR PLUS: 65-70% match

* FAIR: 50-65% match

You can't change the threshold when using intents (although you can do [this](knowledge-base-overview.html#thresholds) with knowledge bases).

### Activate the latest model version

Activating the latest model version is something that you do if the domain is using the LivePerson NLU v2 engine or a 3rd-party NLU engine.

When you’re testing using the Test tool, you can select the model version to test. This means you can test multiple models, and then activate the *latest* model version when it performs as desired. Once you activate it, it becomes the model version that’s used everywhere *outside of* Intent Builder, for example, in Conversation Builder, in API calls to the NLU engine, in Intent Analyzer, and so on.

{: .important}
Ensure you test before activating the latest model version, as you can’t deactivate it or revert back to a previous version. In this situation, you’ll need to update the domain as needed, retrain to create a new model version, and then activate that latest version.

The first model version that you create via training is activated automatically. Thereafter, you must manually activate the latest version. You can't activate earlier versions, only the latest.

**To activate the latest model version**

1. Open the domain, and click **Versions** in the upper-left corner.
2. Click the **Activate** button beside the latest model version.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_activate.png">    