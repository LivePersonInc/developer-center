---
pagename: NLU Engines
redirect_from:
    - conversation-builder-intent-builder-nlu-engines.html
    - conversational-ai-platform-natural-language-understanding-nlu-engines.html
    - conversational-ai-natural-language-understanding-nlu-engines.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
subfoldername: Natural Language Understanding
permalink: intent-builder-natural-language-understanding.html
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

Available with IBM Watson:

* Arabic
* Chinese, Simplified (China)
* Chinese, Traditional (Taiwan)
* Dutch (Netherlands)
* English (non-region-specific, Australia, Canada, Great Britain, India, United States)
* French (non-region-specific, Canada, France)
* German (Germany)
* Italian (Italy)
* Japanese (Japan)
* Korean (Korea)
* Portuguese (Brazil)
* Spanish (non-region-specific, Mexico, Spain)

Available with Google Dialogflow:

* Chinese, Cantonese (Hong Kong)
* Chinese, Simplified (China)
* Chinese, Traditional (Taiwan)
* Danish
* Dutch (Netherlands)
* English (non-region-specific, Australia, Canada, Great Britain, India, United States)
* French (non-region-specific, Canada, France)
* German (Germany)
* Hindi
* Indonesian
* Italian (Italy)
* Japanese (Japan)
* Korean (Korea)
* Norwegian
* Polish
* Portuguese (Brazil, Portugal)
* Russian
* Spanish (non-region-specific, Latin America, Mexico, Spain)
* Swedish
* Thai
* Turkish (Turkey)
* Ukranian

### LivePerson's NLU engine

There are two versions of LivePerson's NLU engine: version 1 (v1) and version 2 (v2).

#### LivePerson NLU v1

Key characteristics include:

* A recommender model based on Word Mover's Distance (WMD) algorithms. 
* Considered an "entry level" NLU engine because it's more specific. In other words, for the v1 algorithm to work well, the sample sentences should be close to the expected user input and have only small differences in wording, for example:

    Expected user input: *I want to buy a brown Michael Kors bag*
    <br>Tailored sample sentence (with entities): *I want to buy COLOR PRODUCT_BRAND bag*

    In contrast, NLU v2 is more generalized; it can handle a general set of user questions and still perform well. 

* From an NLU processing perspective, performs well regardless of the number of intents and training phrases involved. However, if you have more than 5 intents and more than 20 training phrases per intent, there is a degradation of speed at runtime when processing the user inputs.
* Recommended over NLU v2 if a domain has a lot of entities due to better processing of the entities.
* Doesn't require the model to be trained, which can save time.
* Can't be used with Intent Analyzer.
* Supports English and Spanish.

#### LivePerson NLU v2

Key characteristics include:

* A classifier model based on Convolutional Neural Network (CNN) using Fasttext embeddings.
* Its primary feature is the enabling of a separate brand-specific model, built and *trained* for each domain.
* A scalable solution that can handle a greater volume of requests, providing faster response times and accuracy.
* To perform effectively, expects large sets of data (both intents and training phrases).
* When you create a domain with NLU v2 and use it in Intent Analyzer or in Conversation Builder, the following is recommended:
    * At least 5 intents in order to [train](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain).
    * At least 20 training phrases per intent.
* Requires the model to be [trained](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain).
* Can be used with Intent Analyzer.
* Supports English.

### Connect a 3rd-party NLU engine

#### 3rd-party NLU limitations

- The length of the 3rd-party NLU domain name should not exceed 64 characters. (Watson limitation)
- Each domain can only support one language, which is specified on the Domain Settings page.
- LivePerson does not support "pulling" into Intent Builder existing models that have been trained in IBM Watson or Google Dialogflow. Only model "push" is supported; this is accomplished by training the model in Intent Builder.

#### Step 1: Enable 3rd-party NLU support

Contact your LivePerson account administrator to enable your account for 3rd-party NLU support.

Once this is done, you can start creating domains with 3rd-party NLU.

#### Step 2: Sign up and get the API keys

Repeat this step twice to create *two* sets of IBM Watson or Google DialogFlow service credentials. When you [train](intent-builder-domains.html#train-a-3rd-party-nlu-domain) the intents in a domain for the first time in Intent Builder, you'll use the first set of credentials. Those credentials will then be active for the first model version that gets created. *Since only one set of credentials can be active at a time*, you'll need to use the second set of credentials the second time you train. And with each subsequent training, you'll need to alternate back and forth between the credentials.

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

In Intent Builder, add a domain *that uses the 3rd-party NLU engine as its NLU provider*. For help with this step, see [here](intent-builder-domains.html#add-a-domain).

You can import the intents and entities, or manually add them later but before proceeding to step 5.

#### Step 4: Create NLU provider credentials

In Intent Builder, in the domain that you created in the previous step, create NLU provider credentials for the 3rd-party NLU engine. For help with this step, see [here](intent-builder-domains.html#create-a-3rd-party-nlu-provider-credential).

This is when you'll copy and paste in the credentials that you downloaded from IBM Watson or Google Dialog flow (step 2 above).

#### Step 5: Train the domain

In Intent Builder, train the domain. For help with this step, see [here](intent-builder-domains.html#train-a-3rd-party-nlu-domain).

Once training is completed, you can use the intent tester to start testing with the model version.
