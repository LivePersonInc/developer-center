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

### Add a prebuilt domain

Domains added from prebuilt domains use the [LP NLU v2 engine](intent-builder-natural-language-understanding.html#livepersons-nlu-engine). For an introduction to prebuilt domains, see [here](intent-builder-overview.html#prebuilt-domains).

**To add a prebuilt domain**

1. In the dashboard that lists your domains, click **Add Domain** in the upper-right corner.
2. In the Add Domain window, click the **Prebuilt Domains** tab.
3. Move your mouse over the desired domain. Then click **Preview** to see a description of the domain and some example intents. This helps you to verify that the domain is one you want.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/ib_domainPrebuilt.png">

4. Click **Add**.

    {: .important}
    After you add the domain, there's no need to train or activate it for the first time. This has been done automatically. However, from this point forward, things work as if you had created the domain manually: You can customize the domain as you see fit. If you subsequently make any changes, you must re-train the domain to create a new model version that reflects the changes. And when ready, you’ll need to activate the new model version.


### Overwrite from a prebuilt domain

If you've added a [prebuilt domain](intent-builder-overview.html#prebuilt-domains) and customized it, but you no longer want to use your customizations, you can overwrite your domain to reflect the prebuilt domain offered by LivePerson. This operation removes all the model versions in your domain, and it creates a single model version--trained and activated--that is based on the prebuilt domain.

{: .important}
You can overwrite your domain with a prebuilt domain if you have not customized your domain's *name*. Once you do this, you break the relationship with the source prebuilt domain.

**To overwrite your domain with a prebuilt domain**

1. In the dashboard that lists your domains, click **Add Domain** in the upper-right corner.
2. In the Add Domain window, click the **Prebuilt Domains** tab.
3. Move your mouse over the prebuilt domain you want to use to overwrite your domain. Click **Add**.
4. In the Warning dialog that appears, click **Continue**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_domainPrebuiltOverwrite.png">


### Add a domain manually or using an import file

**To add a domain manually or using an import file**

1. In the dashboard that lists your domains, click **Add domain** in the upper-right corner.
2. In the Add Domain window, click the **New Domain** tab.
3. Specify the following: 
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Manual** or **Import**: If you want to manually add intents and entities to the domain, select "Manual." If you want to import them from a file, select "Import."
    * **CSV** or **Google Sheet**: If you selected to import intents and entities, select the type of import file involved, and then use the controls that appear to upload the files. You can import intents but not entities if desired; in this case, don't specify an entities file/sheet. **Note:** An import file should only be named with and contain alphanumeric characters.

        A Google sheet must be public, i.e., with no file restrictions in place. If you import a Google sheet, be aware that this establishes a link between the domain and the sheet. If you later sync the domain with the sheet, the domain is updated with the current contents in the sheet.

    * **NLU Provider**: Select the provider of the NLU engine to use. For help, see the discussion on NLU engines [here](intent-builder-natural-language-understanding.html).
    * **Language**: Select the language of the domain.
4. Click **Add**.
    
    If you didn't import them, you can now add intents and entities to the domain.

### Create an import file

If you want to import a set of intents and/or entities into a domain when you add the domain (or later), you'll need to create the import file.

The easiest way to ensure that the import file is well-formatted is to export a test domain. This provides you with an export file in the proper format. You can then use the export file to create an import file.

The following illustrates a well-formatted intents file:

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/ib_importFile_intents_a.png">

{: .important}
Key phrases are only applicable to the LivePerson NLU v1 engine. You can leave this section blank if you're using another NLU engine. For information on key phrase matching, see *Configure domain settings*, which follows below.

Additionally, having said the above, the following, simplified format also works. It should suit most use cases.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/ib_importFile_intents_b.png">

The following illustrates a well-formatted entities file:

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ib_importFile_entities.png">

If you're creating a Google sheet, add the intents to the first tab in the sheet, and name the tab "Intents." Then add the entities to a second tab named "Entities." The Google sheet must be public, i.e., with no file restrictions in place.


### Configure domain settings

**To configure domain settings**

1. Open the domain.
2. Click **Domain Settings** in the upper-left corner.
3. Specify the following:
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Add Intents and Entities**: You can select to add these manually or import them via a CSV file or Google sheet. If you import them via a CSV file, the operation is additive, i.e., the intents and entities are appended to the existing ones. You can import intents but not entities if desired; in this case, don't specify an entities file/sheet. **Note:** An import file should only be named with and contain alphanumeric characters.

        A Google sheet must be public, i.e., with no file restrictions in place. If you import a Google sheet, be aware that this establishes a link between the domain and the sheet. If you later sync the domain with the sheet, the domain is updated with the current contents in the sheet.

    * **NLU Provider**: Read-only. The provider of the NLU engine can’t be changed after you create the domain.
    * **Language**: The language of the domain.
    * **Domain ID**: Read-only. This is a unique identifier that’s generated by the system. In some scenarios (e.g., API calls), you might need to reference the domain ID. Here’s where you can find it.
    * **Has Intent Analyzer**: Read-only. Indicates whether [Intent Analyzer](intent-analyzer-overview.html) has been enabled for intents.
    * **Domain Account**: Select the account under which the domain should exist. This is used to move domains from one account (org) to another.
    * **Enable Key Phrase Match**: Available only if the NLU engine used by the domain is [LivePerson NLU v1](intent-builder-natural-language-understanding.html#livepersons-nlu-engine). Select this to enable Key Phrase Matching. Once enabled, select the threshold to use. For more on Key Phrase Matching, see farther below.
4. Click **Update Domain**.

#### Key Phrase Matching (LivePerson NLU v1 only)

Enable Key Phrase Match is a domain setting that’s only available in domains that use the LivePerson NLU v1 engine. It’s designed to improve the NLU matching by adding another “layer” of matching during intent prediction.

A key phrase is a critical noun or verb. If you enable Key Phrase Matching for the domain, you can specify a collection of key phrases for each intent. During intent prediction, the key phrases are evaluated after the training phrases. If the key phrases are found in the user’s utterance, the NLU score for the intent is boosted to GOOD even if the utterance doesn’t match any of the intent’s training phrases.

Key Phrase Matching uses a threshold that you must specify when you enable the domain setting. As an example, if you set the threshold to 2, then if 2 of the intent’s key phrases are found in the consumer’s utterance, the intent is considered a match.

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch3.png">

Key Phrase Matching can be helpful when you know there are specific words that directly correlate with an intent because it boosts the score when appropriate. For example, with the LivePerson NLU v1 engine, the NLU score is penalized when the consumer’s utterance is too long when compared to the training phrases. Let’s say the consumer says, “The weather is nice, but I forgot my password, and now my whole day is ruined as a result of my forgetfulness. Please help. I don't know what to do.” In your domain, you have a “Forgot password” intent, but it doesn’t yield a match because of the length of the consumer's utterance. Without key phrase matching, there isn’t a match. However, if you know that any time the consumer says something that contains the words “forgot” and “password” that it’s related to the “Forgot password” intent, you can add those words as key phrases and boost the score to GOOD when they are found in the utterance. (Since the intent is matched, this also means it can be in contention for disambiguation if [disambiguation](conversation-builder-dialogs-disambiguation-dialogs.html) used.)

Here's a test example without Key Phrase Matching enabled:

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch1.png">  

And here's a test example with Key Phrase Matching enabled: 

<img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_keyPhraseMatch2.png">


### Sync with a Google sheet

After you've made changes to the Google sheet that's linked to the domain, sync the domain to update it with the content.

{: .important}
This action overwrites the content in the domain with the content in the Google sheet, so use caution when performing this.

**To sync a domain with a Google sheet**

1. Open the domain.
2. In the upper-left corner, click **Domain Settings**.
3. Click **More Settings**, scroll down to the **Sync Google Sheet** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_ib_syncGoogleSheet.png"> (Refresh icon).
4. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the changes are reflected in a new model version.


### Train a LivePerson NLU v2 domain

You must train the LivePerson NLU v2 domain after every update to the domain if you want the update to be reflected in subsequent testing/debugging and usage. Training creates a new model version that incorporates the changes. Once the domain is trained, you can use the Test tool to test.

Depending on how big the domain is, training typically takes anywhere between 2 to 10 minutes.

{: .important}
Before you train, ensure the domain has at least 5 intents. For each intent, ensure it has at least 20 training phrases.

**To train a LivePerson NLU v2 domain**

1. Open the domain.

    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/intents_trainingPhrases.png">

3. Click **Train** in the upper-right corner to start the training.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/intents_trainingStatus.png">

    To refresh the page and check on progress, click <img style="width:25px" src="img/ConvoBuilder/icon_trainRefresh.png"> (Refresh icon) in the **Training Status** column.

### Create a 3rd-party NLU provider credential

You must create a 3rd-party NLU provider credential, as the system requires and uses the credentials when training the domain to create a model version.

**To create a 3rd-party NLU provider credential**

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
    * **Credentials**: Paste here the credentials that you downloaded when you [set up your IBM Watson  or Google Dialogflow account](intent-builder-natural-language-understanding.html#connect-a-3rd-party-nlu-engine).

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/ib_third_party_cred3.png">

6. Click **Save Credentials**.

    During training, you'll need to alternate between 2 sets of service credentials, as described below.

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

### Activate the latest model version

Activating the latest model version is something that you do if the domain is using the LivePerson NLU v2 engine or a 3rd-party NLU engine.

When you’re testing using the Test tool, you can select the model version to test. This means you can test multiple models, and then activate the latest model version when it performs as desired. Once you activate it, it becomes the model version that’s used everywhere *outside of* Intent Builder, for example, in Conversation Builder, in API calls to the NLU engine, in Intent Analyzer, and so on.

{: .important}
Ensure you test before activating the latest model version, as you can’t deactivate it or revert back to a previous version. In this situation, you’ll need to update the domain as needed, retrain to create a new model version, and then activate that latest version.

The first model version that you create via training is activated automatically. Thereafter, you must manually activate the latest version. You can't activate earlier versions, only the latest.

**To activate the latest model version**

1. Open the domain, and click **Versions** in the upper-left corner.
2. Click the **Activate** button beside the latest model version.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/ib_activate.png">   

### Download a domain

You might need to download a domain for a few reasons:

* You want to create a copy of the domain by downloading it and then adding a new domain using the CSV as the import file.
* You want to move or copy the domain to another environment.
* You want an extra measure of back-up, so you plan to archive the CSV file for safekeeping.

Download of a domain creates a ZIP file that contains 2 CSV files, one for the intents and the other the entities.

**To download a domain**

1. Open the domain.
2. In the upper-left corner, click **Domain Settings**.
3. Click **More Settings**, scroll down to the **Export Intents and Entities** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_ib_download.png"> (Download icon).
4. Follow the browser prompts to access and save the ZIP file to a location of your choice.


### Delete a domain

Deleting a domain is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Before you delete a domain, ensure that it isn't being used by any bots or knowledge bases. Also, consider downloading the domain for backup purposes.

**To delete a domain**

1. Open the domain.
2. In the upper-left corner, click **Domain Settings**.
3. Click **More Settings**, scroll down to the **Delete Domain** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_delete.png"> (Delete icon).
4. In the confirmation dialog, click **Yes**. 