---
pagename: NLU Engines
redirect_from:
    - conversation-builder-intent-builder-nlu-engines.html
    - conversational-ai-platform-natural-language-understanding-nlu-engines.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversational AI
subfoldername: Natural Language Understanding
permalink: conversational-ai-natural-language-understanding-nlu-engines.html
indicator: both
---

One of the essential tools of Conversational AI is Natural Language Understanding (NLU). This is what allows Intent Builder to analyze consumer input and assign accurate intents.

While LivePerson provides its own propriety NLU out of the box, Intent Builder also allows you to choose your preferred NLU Engine for analyzing text by routing all NLU analysis and training through an API. 

This API layer of abstraction allows you to choose from the following NLU engines:

- LivePerson's native NLU
- Google Dialogflow
- IBM Watson

{: .important}
If you choose LivePerson's native NLU, no changes need to be made. This engine is already configured and set up by default.

### Language support

LivePerson NLU supports intent detection for English and Spanish.

[IBM Watson supports](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-language-support#language-support) Arabic, Chinese, Dutch, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Spanish, and Swedish.

[Google Dialogflow supports](https://cloud.google.com/dialogflow/docs/reference/language) Chinese, English, French, German, Italian, Japanese, Korean, Portuguese and Spanish.

### LivePerson's NLU engine

There are two versions of LivePerson's NLU engine: version 1 (v1) and version 2 (v2).

#### LivePerson NLU v1

This version is a recommender model based on Word Mover's Distance (WMD) algorithms. It's intended to be used if you have fewer than 10 intents and fewer than 20 training phrases per intent. Additionally, performance is enhanced when you have a lot of custom entities.

NLU v1 supports English and Spanish.

{: .important}
NLU v1 doesn't require the model to be trained.

#### LivePerson NLU v2

This version is a classifier model based on Convolutional Neural Network (CNN) using Fasttext embeddings. The primary feature of NLU v2 is enabling a separate brand-specific model, built and *trained* for each domain. NLU v2 is a scalable solution that can handle a greater volume of requests, providing faster response times and accuracy.

To perform effectively, NLU v2 expects large sets of data (both intents and training phrases) but not a lot of entities. When you create a domain with NLU v2 and use it in LiveIntent or in Conversation Builder, the following is recommended:

* At least 10 intents in order to [train](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain)
* At least 20 training phrases per intent

NLU v2 supports only English.

{: .important}
NLU v2 requires the model to be [trained](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain).

### 3rd-party NLU limitations

- Length of the 3rd-party NLU domain name should not exceed 64 characters. (Watson limitation)
- Each domain can only support one language, which is specified on the Domain Settings page.
- LivePerson does not support pulling existing models from IBM Watson and Google Dialogflow into Intent Builder; only model push is supported.

### Connect a 3rd-party NLU engine

#### Step 1: Enable 3rd-party NLU support

Contact your account administrator to enable your account for 3rd-party NLU support.

Once 3rd-party NLU support is enabled, you can start creating domains (with 3rd-party NLU).

#### Step 2: Sign up and get the API keys

In order to train IBM Watson or Google DialogFlow from within Conversation Builder, you need to create two sets of service credentials. When you train the intents in a domain, you'll use one credential. When it's done, you'll then activate and use the second, alternating back and forth between them (because only one credential can be active at a given time).

##### IBM Watson

1. Register for or log in to an IBM Cloud account.

2. Create or access a Watson Assistant resource.

3. Generate Service Credentials with the role of Manager and an Auto Generated Service ID.

4. View and copy the newly created credentials.

##### Google Dialogflow

1. Log in to the Dialogflow console.

2. Create a new Dialogflow agent (which will create a new Google project).

3. Create a new Service Account for the newly created Google project with the role of Dialogflow API Admin.

4. Create a JSON-formatted private key for the service account by clicking Create key.

5. View and copy the created key. This will be used in your dialogflow config data.

#### Step 3: Add a domain for the 3rd-party NLU provider

In Intent Builder, add a domain *that uses the 3rd-party NLU engine as its NLU provider*. For help with this step, see [here](intent-builder-domains.html#add-a-domain). You can import the intents and entities, or manually add them later but before proceeding to step 5.

#### Step 4: Create NLU provider credentials

In Intent Builder, in the domain that you created in the previous step, create NLU provider credentials for the 3rd-party NLU engine. For help with this step, see [here](intent-builder-domains.html#create-a-3rd-party-nlu-provider-credential). This is when you'll copy and paste in the credentials that you downloaded from IBM Watson or Google Dialog flow (step 2 above).

#### Step 5: Train the domain

In Intent Builder, train the domain. For help with this step, see [here](intent-builder-domains.html#train-a-3rd-party-nlu-domain).

Once training is completed, you can use the intent tester to start testing with the model version.
