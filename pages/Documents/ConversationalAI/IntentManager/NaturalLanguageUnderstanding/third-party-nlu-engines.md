---
pagename: Third-Party NLU Engines
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Natural Language Understanding
permalink: intent-manager-natural-language-understanding-third-party-nlu-engines.html
indicator: both
---

### Bug fix for third-party NLU engines

LivePerson has resolved an issue impacting intent domains that integrate with third-party NLU engines (i.e., Google Dialogflow or IBM Watson). This fix was deployed on **July 28 and 29, 2021**, and **your action is required** to properly adopt the fix.

If, in Intent Manager, you have one or more domains that uses a third-party NLU engine, please do the following:

1. In Google Dialogflow or IBM Watson, delete the model versions.
2. In Bot Accounts, disable (turn off) the **WatsonAssistant** or **Google DialogFlow** setting on the **Account** Details page. Wait a few seconds, and then re-enable the setting.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/3rdpartyNLU_bugFix.png">

3. In Intent Manager, train the domains to create new model versions.

### Third-party NLU limitations

- Doesn't support [prebuilt domains](intent-manager-key-terms-concepts.html#prebuilt-domains) or [Regular Expression entities](intent-manager-key-terms-concepts.html#entities).
- The length of the domain name should not exceed 64 characters. (Watson limitation)
- A domain can only support one language, which is specified on the Domain Settings page.
- LivePerson does not support "pulling" into Intent Manager existing models that have been trained in IBM Watson or Google Dialogflow. Only model "push" is supported; this is accomplished by training the model in Intent Manager.

### Connect a third-party NLU engine

#### Step 1: Enable 3rd-party NLU support

Contact your LivePerson account administrator to enable your account for 3rd-party NLU support.

#### Step 2: Sign up and get the API keys

Repeat this step twice to create *two* sets of IBM Watson or Google DialogFlow service credentials. When you [train](intent-manager-build-domains.html#train-a-3rd-party-nlu-domain) the intents in a domain for the first time in Intent Manager, you'll use the first set of credentials. Those credentials will then be active for the first model version that gets created. *Since only one set of credentials can be active at a time*, you'll need to use the second set of credentials the second time you train. And with each subsequent training, you'll need to alternate back and forth between the credentials.

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

#### Step 4: Create the NLU provider credentials

In Intent Manager, in the domain that you created in the previous step, [create the NLU provider credentials](intent-manager-build-domains.html#create-a-3rd-party-nlu-provider-credential) for the 3rd-party NLU engine. This is when you'll copy and paste in the credentials that you downloaded from IBM Watson or Google Dialog flow (step 2 above).

#### Step 5: Train the domain

In Intent Manager, [train the domain](intent-manager-build-domains.html#train-a-3rd-party-nlu-domain). Once training is completed (which creates the model version), you can start to [test](intent-manager-build-test-a-single-utterance.html).
