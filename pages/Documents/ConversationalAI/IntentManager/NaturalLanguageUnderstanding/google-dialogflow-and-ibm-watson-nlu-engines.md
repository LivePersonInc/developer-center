---
pagename: Google Dialogflow and IBM Watson NLU Engines
redirect_from:
    - intent-manager-natural-language-understanding-third-party-nlu-engines.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Natural Language Understanding
permalink: intent-manager-natural-language-understanding-google-dialogflow-and-ibm-watson-nlu-engines.html
indicator: both
---

### Bug fix

LivePerson has resolved an issue impacting intent domains that integrate with Google Dialogflow or IBM Watson. This fix was deployed on **July 28 and 29, 2021**, and **your action is required** to properly adopt the fix.

If, in Intent Manager, you have one or more domains that use a Google Dialogflow or IBM Watson NLU engine, please do the following:

1. In Google Dialogflow or IBM Watson, delete the model versions.
2. In Bot Accounts, disable (turn off) the **WatsonAssistant** or **Google DialogFlow** setting on the **Account** Details page. Wait a few seconds, and then re-enable the setting.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/3rdpartyNLU_bugFix.png">

3. In Intent Manager, train the domains to create new model versions.

### Connect the NLU engine

#### Step 1: Enable 3rd-party NLU support

Contact your LivePerson account administrator to enable your account for 3rd-party NLU support.

#### Step 2: Sign up and get the API keys

Repeat this step twice to create *two* sets of IBM Watson or Google DialogFlow service credentials. When you train (described below) the intents in a domain for the first time in Intent Manager, you'll use the first set of credentials. Those credentials will then be active for the first model version that gets created. *Since only one set of credentials can be active at a time*, you'll need to use the second set of credentials the second time you train. And with each subsequent training, you'll need to alternate back and forth between the credentials.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/3rdpartyNLU_serviceCreds.png">

##### IBM Watson

1. Register for or log in to an IBM Cloud account.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_login_ibmcloud.png">

2. Create or access a Watson Assistant resource.
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_resource_list.png">

3. Generate Service Credentials with the role of Manager and an Auto Generated Service ID.
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_create_resource.png">

4. View and copy the newly created credentials.
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/3rdPartyNLU/watson_api_keys.png">

##### Google Dialogflow

1. Log in to the Dialogflow console.

2. Create a new Dialogflow agent (which will create a new Google project).

3. Create a new Service Account for the newly created Google project with the role of Dialogflow API Admin.

4. Create a JSON-formatted private key for the service account by clicking the Create key.

5. View and copy the created key. This will be used in your Dialogflow config data.

#### Step 3: Add a domain for the 3rd-party NLU provider

In Intent Manager, [add a domain](intent-manager-build-domains.html) that uses the 3rd-party NLU engine as its NLU provider. You can import the intents and entities at that time or add them later but before proceeding to step 5.

{: .important}
The length of the domain name should not exceed 64 characters. (Watson limitation)

#### Step 4: Create the NLU provider credentials

In Intent Manager, in the domain that you created in the previous step, create the NLU provider credentials for the 3rd-party NLU engine. This is the discussed in the following section. This is when you'll copy and paste in the credentials that you downloaded from IBM Watson or Google Dialogflow (step 2 above).

#### Step 5: Train the domain

In Intent Manager, train the domain to create a model version. This is discussed farther below. Once training is completed, you can start to [test](intent-manager-build-test-a-single-utterance.html).

### Create a 3rd-party NLU provider credential

You must create a 3rd-party NLU provider credential, as the system requires and uses the credentials when training the domain.

**To create a 3rd-party NLU provider credential**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, click **Train** in the upper-right corner.
5. In the Train dialog, click the "Select NLU Provider Credential" option.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_third_party_cred1.png">

    This changes the option, so you can create a credential instead.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_third_party_cred2.png">

6. Click "Create a new NLU Provider Credential."
7. In the Add NLU Provider Credential dialog box, specify the following:
    * **Credential Name**: Enter a name for the credential.
    * **NLU Provider**: Select the 3rd-party NLU engine.
    * **Credentials**: Paste here the credentials that you downloaded when you set up your IBM Watson or Google Dialogflow account (discussed earlier on this page).

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/ib_third_party_cred3.png">

8. Click **Save Credentials**.

    During training, you'll need to alternate between 2 sets of service credentials, as described below.

### Train a domain

You must train the 3rd-party NLU domain after every update to the domain if you want the update to be reflected in subsequent testing/debugging and usage. Training creates a new model version that incorporates the changes. Once the domain is trained, you can use the Test tool to test.

Depending on how big the domain is, training typically takes anywhere between 2 to 10 minutes.

**To train a domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, click **Train** in the upper-right corner.

    (If you haven't updated the training data in the domain, i.e., made changes to the intents, their training phrases, or the entities, the **Train** button is disabled.)

5. Select the NLU provider credential from the list, and click **Train**.

    <img  class="fancyimage" style="width:400px" src="img/ConvoBuilder/NLU_image_4.png">

    Note that you'll need to alternate between using your two sets of credentials, as discussed farther below.

6. Wait until the training is completed.

    To refresh the page and check on progress, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_trainRefresh.png"> (Refresh icon) in the **Training Status** column.

    Once training is completed, you can start testing with the model version in the Test tool.

#### Alternating service credentials

When you created your 3rd-party service credentials, you created two sets, as discussed above. This is so you can alternate between them. When you train the intents in a domain for the first time in Intent Manager, you'll use the first set of credentials. Those credentials will then be active for the first model version that gets created. *Since only one set of credentials can be active at a time*, you'll need to use the second set of credentials the second time you train. And with each subsequent training, you'll need to alternate back and forth between the credentials.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/3rdpartyNLU_serviceCreds.png">
