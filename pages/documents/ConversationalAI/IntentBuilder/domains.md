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

1. Click **New domain** in the upper-right corner.
2. On the Add Domain page, specify the following: 
    * **Domain Name**: Enter a name. Use a standard naming convention to make sorting and finding domains easier.
    * **Manual** or **Import**: If you want to manually add intents and entities to the domain, select "Manual." If you want to import a pre-configured list in from a file, select "Import."
    * **CSV** or **Google Sheet**: If you selected to import intents and entities, select the type of import file involved, and then use the controls that appear to upload the files.
    * **NLU Provider**: Select the NLU engine to use. For help in making this selection, see the discussion on NLU engines [here](conversational-ai-natural-language-understanding-nlu-engines.html).
    * **Language**: Select the language.
3. Click **Add Domain**.
    
    If you didn't import them, you can now add intents and entities to the domain.
    
    If the domain's NLU provider is LivePerson's NLU v2 (not v1), you'll also need to [train the model](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain).

### The domain view

Once you've added a domain, you will be automatically navigated to the Domain View. On the left hand side, you can find a list of the intents a domain includes, which will originally be empty, since you haven't created any intents yet. In the lower-right corner, you'll find the domain's Settings Toolbar. It includes four buttons:

* The home icon will navigate you back to the first screen of the Intent Builder, which will allow you to view all your created domains or create a new one.

* The plus icon is the default panel of the Domain View. It is the Add Intent panel, where you can create new intents under the domain.

* The debugger icon allows you to enter sample user input to test against your intents; the NLU engine will take your inputted text and see if it can find matches in your intents. It will list these intents and the degree to which they matched with the input text.

* The last icon is the Settings panel. It will allow you to rename the domain, retrieve its ID (under "More Settings" at the bottom), delete the domain and more.

### Train a LivePerson NLU v2 domain

1. Open the domain.
2. Ensure the domain has *at least* 5 intents. For each intent, ensure it has *at least* 20 training phrases.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/intents_trainingPhrases.png">

3. Click <img style="width:35px" src="img/ConvoBuilder/icon_train.png"> (Train icon) in the lower-right corner to start the training.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/intents_trainingStatus.png">

### Create a 3rd-party NLU provider credential

1. Open the domain.
2. Click <img style="width:35px" src="img/ConvoBuilder/icon_train.png"> (Train icon) in the lower-right corner.
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

1. Open the domain.
2. Click <img style="width:35px" src="img/ConvoBuilder/icon_train.png"> (Train icon) in the lower-right corner to start the training.
3. Select the [NLU provider credential](conversational-ai-natural-language-understanding-nlu-engines.html#step-2-sign-up-and-get-the-api-keys) from the list, and click **Train**.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/NLU_image_4.png">

3. Wait until the training is completed. You can click the Refresh button to see the latest training status for the version.

    Once training is completed, you can start testing with the model version in the intent tester.