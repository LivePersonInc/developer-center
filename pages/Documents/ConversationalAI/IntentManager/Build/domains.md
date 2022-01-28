---
pagename: Domains
redirect_from:
    - intent-builder-domains.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-domains.html
indicator: both
---

### What's a domain?

For an explanation of a domain, see [here](intent-manager-key-terms-concepts.html#domains).

### High-level workflow

Use this high-level workflow when working with a domain using the LivePerson engine or a third-party engine.

<img style="width:600px" src="img/ConvoBuilder/domain_workflow.png">

If the domain is using a third-party NLU engine, you'll need to connect the NLU engine before you train.

### Add a prebuilt domain

Domains added from prebuilt domains use the [LivePerson NLU engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-nlu-engine). For an introduction to prebuilt domains, see [here](intent-manager-key-terms-concepts.html#prebuilt-domains).

**To add a prebuilt domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard, and click **Add a domain** in the upper-right corner.
3. In the Add Domain window, select the **Prebuilt domains** tab.
4. Move your mouse over the desired domain. Then click **Preview** to see a description of the domain and some example intents. This helps you to verify that the domain is one you want.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/im_domains_prebuilt_add.png">

5. If you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager, you can specify the following for the domain:
    * **Intent Tracking**: Select "Enabled" to enable “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances. For more on this, see [here](intent-manager-key-terms-concepts.html#intent-tracking).
    * **Primary Domain**: Select "Enabled" to set the domain as the primary domain. For information on this, see [here](intent-manager-key-terms-concepts.html#primary-domain).
6. For **Language**, select the language of the domain you want to add.
7. Click the **Add** button that's displayed when you move your mouse over the desired domain.

    {: .important}
    After you add the domain, there's no need to train or activate it for the first time. This has been done automatically. However, from this point forward, things work as if you had created the domain manually: You can customize the domain as you see fit. If you subsequently make any changes, you must re-train the domain to create a new model version that reflects the changes. And when ready, you’ll need to activate the new model version.

### Overwrite from a prebuilt domain

If you've added a [prebuilt domain](intent-manager-key-terms-concepts.html#prebuilt-domains) and customized it, but you no longer want to use your customizations, you can overwrite your domain to reflect the prebuilt domain offered by LivePerson. This operation removes all the model versions in your domain, and it creates a single model version--trained and activated--that is based on the prebuilt domain.

{: .important}
You can overwrite your domain with a prebuilt domain if you have not customized your domain's *name*. Once you do this, you break the relationship with the source prebuilt domain.<br><br>Overwriting a domain should only be done during the development phase because it disrupts all the associated resources (bots and knowledge bases) that use the domain.

**To overwrite your domain with a prebuilt domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard, and click **Add a domain** in the upper-right corner.
3. In the Add Domain window, select the **Prebuilt domains** tab.
4. If you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager, you can specify the following for the domain:
    * **Intent Tracking**: If the domain had this enabled, take care to also enable it now, if desired. For more on this setting, see [here](intent-manager-key-terms-concepts.html#intent-tracking).
    * **Primary Domain**: If the domain had this enabled, take care to also enable it now, if desired. For information on this setting, see [here](intent-manager-key-terms-concepts.html#primary-domain).
5. For **Language**, select the same language of the domain you want to overwrite.
6. Move your mouse over the desired domain, and click the **Add** button that's displayed.
7. In the Warning dialog that appears, click **Continue**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_domainPrebuiltOverwrite.png">

### Add a domain manually or using an import file

{: .important}
If you're adding a domain that will use your own Rasa-based engine as the NLU provider, see [here](intent-manager-natural-language-understanding-brand-s-rasa-based-nlu-engine.html#connect-the-nlu-engine) for additional information that you need to provide when you do this.

**To add a domain manually or using an import file**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard, and click **Add a domain** in the upper-right corner.
3. In the Add Domain window, on the **New domain** tab, specify the following: 
    * **Domain name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **NLU Provider**: Select the provider of the NLU engine to use. For help, see the discussion on NLU engines [here](intent-manager-natural-language-understanding-introduction.html).
    * **Language**: Select the language of the domain.
    * **Import method**: If you're going to add intents and entities manually, select "Manual." If you're going to import them from a file, select "Import."
    * **Import intents & entities from**: If you selected "Import" as the import method, now select the type of import file involved: CSV or Google Sheet. Then use the controls that appear to upload the files. You can import intents but not entities if desired; in this case, don't specify an entities file/sheet. **Note:** An import file should only be named with and contain alphanumeric characters.

        **Google sheets**: A Google sheet must be public, i.e., with no file restrictions in place. Moreover, it must contain 100 or fewer columns (intents and entities combined); otherwise, the import fails. If your domain is larger and you have more columns than this, use a CSV file instead.
        
        If you import a Google sheet, be aware that this establishes a link between the domain and the sheet. If you later sync the domain with the sheet, the domain is updated with the current contents in the sheet.
 
    * **Intent Tracking**: This setting is displayed if you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager. Select "Enabled" to enable “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances. For more on this, see [here](intent-manager-key-terms-concepts.html#intent-tracking).
    * **Primary Domain**: This setting is displayed if you've [unlocked](intent-manager-overview.html#enable-intent-discovery-optimization--analysis) the Discover/Analyze features of Intent Manager. Select "Enabled" to set the domain as the primary domain. For information on this, see [here](intent-manager-key-terms-concepts.html#primary-domain).

5. Click **Add**.
    
    If you didn't import the intents and entities, you can now add them to the domain.

### Create an import file

If you want to import a set of intents and/or entities into a domain when you add the domain (or later), you'll need to create the import file.

The easiest way to ensure that the import file is well-formatted is to export a test domain. This provides you with an export file in the proper format. You can then use the export file to create an import file.

The following illustrates a well-formatted intents file:

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/ib_importFile_intents_a.png">

{: .important}
Key phrases are only applicable to the LivePerson (Legacy) engine. You can leave this section blank if you're using another NLU engine. For information on key phrase matching, see *Configure domain settings*, which follows below.

Additionally, having said the above, the following, simplified format also works. It should suit most use cases.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/ib_importFile_intents_b.png">

The following illustrates a well-formatted entities file:

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ib_importFile_entities.png">

If you're creating a Google sheet, add the intents to the first tab in the sheet, and name the tab "Intents." Then add the entities to a second tab named "Entities." The Google sheet must be public, i.e., with no file restrictions in place.


### Configure domain settings

**To configure domain settings**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Move your mouse over the name of the relevant domain, and select **Domain Settings** from the menu that appears.
4. Specify the following basic settings:
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Domain ID**: Read-only. This is a unique identifier that’s generated by the system. In some scenarios (e.g., API calls), you might need to reference the domain ID. Here’s where you can find it.
    * **NLU Provider**: Read-only. The provider of the [NLU engine](intent-manager-natural-language-understanding-introduction.html) can’t be changed after you create the domain.
    * **Language**: The language of the domain.
5. Specify the following import/export settings:
    * **Import method**: **Manual** or **Import**. You can select to add the intents and entities manually or import them via a CSV file or Google sheet. If you import them via a CSV file, the operation is additive, i.e., the intents and entities are appended to the existing ones. You can import intents but not entities if desired; in this case, don't specify an entities file/sheet. **Note:** An import file should only be named with and contain alphanumeric characters.

        **Google sheets**: A Google sheet must be public, i.e., with no file restrictions in place. Moreover, it must contain 100 or fewer columns (intents and entities combined); otherwise, the import fails. If your domain is larger and you have more columns than this, use a CSV file instead.
        
        If you import a Google sheet, be aware that this establishes a link between the domain and the sheet. If you later sync the domain with the sheet, the domain is updated with the current contents in the sheet.
6. Specify the following intent analysis settings:
    * **Intent Tracking**: Select "Enabled" to enable “intent listening” for the domain, which provides you with enhanced intent-related reporting on your consumers’ utterances. For more on this, see [here](intent-manager-key-terms-concepts.html#intent-tracking).
    * **Primary Domain**: Select "Enabled" to set the domain as the primary domain. For information on this, see [here](intent-manager-key-terms-concepts.html#primary-domain).
7. Specify the following advanced settings:
    * **Domain Account**: Select the account under which the domain should exist. This is used to move domains from one account (org) to another.
    * **Enable Key Phrase Match**: Available only if the NLU engine used by the domain is LivePerson (Legacy), which is described [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-legacy-nlu-engine). Select this to enable Key Phrase Matching. Once enabled, select the threshold to use. For more on Key Phrase Matching, see farther below.
4. Click **Update domain**.

#### Key Phrase Matching: LivePerson (Legacy) only

Enable Key Phrase Match is a domain setting that’s only available in domains that use the LivePerson (Legacy) NLU engine. It’s designed to improve the NLU matching by adding another “layer” of matching during intent prediction.

A key phrase is a critical noun or verb. If you enable Key Phrase Matching for the domain, you can specify a collection of key phrases for each intent. During intent prediction, the key phrases are evaluated after the training phrases. If the key phrases are found in the user’s utterance, the NLU score for the intent is boosted to GOOD even if the utterance doesn’t match any of the intent’s training phrases.

Key Phrase Matching uses a threshold that you must specify when you enable the domain setting. As an example, if you set the threshold to 2, then if 2 of the intent’s key phrases are found in the consumer’s utterance, the intent is considered a match.

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch3.png">

Key Phrase Matching can be helpful when you know there are specific words that directly correlate with an intent because it boosts the score when appropriate. For example, with the LivePerson (Legacy) engine, the NLU score is penalized when the consumer’s utterance is too long when compared to the training phrases. Let’s say the consumer says, “The weather is nice, but I forgot my password, and now my whole day is ruined as a result of my forgetfulness. Please help. I don't know what to do.” In your domain, you have a “Forgot password” intent, but it doesn’t yield a match because of the length of the consumer's utterance. Without key phrase matching, there isn’t a match. However, if you know that any time the consumer says something that contains the words “forgot” and “password” that it’s related to the “Forgot password” intent, you can add those words as key phrases and boost the score to GOOD when they are found in the utterance. (Since the intent is matched, this also means it can be in contention for disambiguation if [disambiguation](conversation-builder-dialogs-disambiguation-dialogs.html) used.)

Here's a test example without Key Phrase Matching enabled:

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch1.png">  

And here's a test example with Key Phrase Matching enabled: 

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch2.png">

### Sync with a Google sheet

After you've made changes to the Google sheet that's linked to the domain, sync the domain to update it with the content.

{: .important}
This action overwrites the content in the domain with the content in the Google sheet, so use caution when performing this.

**To sync a domain with a Google sheet**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Move your mouse over the name of the relevant domain, and select **Domain Settings** from the menu that appears.
4. Scroll down to the advanced settings, and beside **Sync Google Sheet**, click <img style="width:25px" src="img/ConvoBuilder/icon_ib_syncGoogleSheet.png"> (Refresh icon).
5. Train the domain so that the changes are reflected in a new model version.

### Train a domain

* LivePerson NLU engine - See [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#train-a-liveperson-domain).
* Google Dialogflow or IBM Watson NLU engine - See [here](intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html#train-a-domain).
* Brand's Rasa-based NLU engine - See [here](intent-manager-natural-language-understanding-brand-s-rasa-based-nlu-engine.html#train-a-domain).

### Activate the latest model version

Activating the latest model version is something that you do if the domain is using the LivePerson engine or a 3rd-party NLU engine.

When you’re testing using the Test tool, you can select the model version to test. This means you can test multiple models, and then activate the latest model version when it performs as desired. Once you activate it, it becomes the model version that’s used everywhere *outside of* Intent Manager, for example, in Conversation Builder, in API calls to the NLU engine, and so on.

{: .important}
Ensure you test before activating the latest model version, as you can’t deactivate it or revert back to a previous version. In this situation, you’ll need to update the domain as needed, retrain to create a new model version, and then activate that latest version.

The first model version that you create via training is activated automatically. Thereafter, you must manually activate the latest version. You can't activate earlier versions, only the latest.

**To activate the latest model version**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Versions** page.
4. Click the **Activate** button beside the latest model version.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_activate.png">   

### Download a domain

You might need to download a domain for a few reasons:

* You want to create a copy of the domain by downloading it and then adding a new domain using the CSV as the import file.
* You want to move or copy the domain to another environment.
* You want an extra measure of back-up, so you plan to archive the CSV file for safekeeping.

Download of a domain creates a ZIP file that contains 2 CSV files, one for the intents and the other the entities.

**To download a domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Domain Settings** from the menu that appears.
4. Scroll down to the import/export settings, and beneath **Download domain data**, click **Export all data**.
5. Follow the browser prompts to access and save the ZIP file to a location of your choice.


### Delete a domain

Deleting a domain is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Before you delete a domain, ensure that it isn't being used by any bots or knowledge bases. Also, consider downloading the domain for backup purposes.

**To delete a domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Domain Settings** from the menu that appears.
4. Scroll down to the advanced settings, and beside **Delete Domain**, click <img style="width:25px" src="img/ConvoBuilder/icon_delete.png"> (Delete domain).
5. In the confirmation dialog, click **Yes**. 