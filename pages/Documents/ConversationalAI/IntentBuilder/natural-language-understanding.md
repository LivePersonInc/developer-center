---
pagename: Natural Language Understanding
redirect_from:
    - conversation-builder-intent-builder-nlu-engines.html
    - conversational-ai-platform-natural-language-understanding-nlu-engines.html
    - conversational-ai-natural-language-understanding-nlu-engines.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-natural-language-understanding.html
indicator: both
---

One of the essential tools of Conversational AI is Natural Language Understanding (NLU). This is what allows Intent Builder to analyze consumer input and assign accurate intents.

While LivePerson provides its own proprietary NLU out of the box, Intent Builder also allows you to choose your preferred NLU engine for analyzing text by routing all NLU analysis and training through an API. This API layer of abstraction means you can choose from the following NLU engines:

- LivePerson's native NLU
- Google Dialogflow
- IBM Watson

{: .important}
If you choose LivePerson's native NLU, no setup work needs to be done to connect the NLU engine to your domain in Intent Builder. Third-party providers require an additional setup process that's outlined farther below on this page.

### Language support

The LivePerson engine supports English.<br>
The LivePerson (Legacy) engine supports English and Spanish. 

Available with IBM Watson:
* Arabic
* Chinese, Simplified (China)
* Chinese, Traditional (Taiwan)
* Dutch (Netherlands)
* English (non-region-specific, Australia, Canada, Great Britain, India, United States)
* French (Canada, France)
* German (Germany)
* Italian (Italy)
* Japanese (Japan)
* Korean (Korea)
* Portuguese (Brazil)
* Spanish (Mexico, Spain)

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

There are two versions of LivePerson's NLU engine: 
* **LivePerson**: Formerly known as LivePerson NLU v2
* **LivePerson (Legacy)**: Formerly known as LivePerson NLU v1

#### LivePerson

This is LivePerson's high-performing NLU engine. Key characteristics include:

* A classifier model based on Convolutional Neural Network (CNN) using FastText embeddings.
* Its primary feature is the enabling of a separate, brand-specific model, built and *trained* for each domain.
* A scalable solution that's capable of handling a large volume of requests.
* Provides fast response times and accuracy.
* To perform effectively, expects large sets of data (both intents and training phrases).
* When you create a LivePerson domain and use it in Intent Analyzer or in Conversation Builder, the following is required:
    * At least 20 training phrases per intent
    * At least 5 intents in order to train  
* Requires the model to be [trained](intent-builder-domains.html#train-a-liveperson-domain).

{: .important}
As communicated in the release notes, on February 17, 2021 LivePerson enhanced the LivePerson engine to further improve its NLU performance. If you retrained your domain after this date, you’re all set: The domain has picked up the enhancement. If you haven’t done so, please retrain your domain as soon as possible, so it benefits from the change. No additional tuning is required; simply retrain the domain as is.

#### Benefits of LivePerson over LivePerson (Legacy)

There are significant benefits to using the LivePerson engine instead of the LivePerson (Legacy) engine for NLU. The LivePerson engine:

* Benefits from continuing investments. Check the roadmap for upcoming features, for example, support for additional languages.
* Performs faster and scales better. The LivePerson engine's average response time is approximately 200 milliseconds per prediction, and performance is good and consistent regardless of the number of intents involved. In contrast, the LivePerson (Legacy) engine's average response time is typically above 1 second, and the response time increases linearly with the number of intents involved. With many intents and many training phrases, a response time of 4-5 seconds is common.
* Provides better accuracy and yields no ambiguity in predictions. A properly trained domain using the LivePerson engine doesn't emit ambiguous results. In contrast, with a domain using LivePerson (Legacy), multiple intents in a domain can have a good match, so ambiguity must be handled in the bot.
* Supports [prebuilt domains](intent-builder-overview.html#prebuilt-domains) to get you up and running quickly, and [Regular Expression entities](intent-builder-entities.html#regular-expression-entities).
* Makes available an advanced [Model Tester](intent-builder-testing-advanced-model-testing.html) for improving domain quality over time.
* Is widely used with [Intent Analyzer](intent-analyzer-overview.html). In fact, Intent Analyzer itself uses the LivePerson engine. Therefore, domains using the LivePerson engine can be tuned easily using the data gleaned from Intent Analyzer. You cannot use Intent Analyzer with domains using the LivePerson (Legacy) engine.

#### LivePerson (Legacy)

This is LivePerson's legacy NLU engine. 

{: .important}
As of March 5, 2021, you can't create new domains using the LivePerson (Legacy) engine. Brands with existing domains using this engine are encouraged to [migrate to the LivePerson engine](intent-builder-domains.html#convert-a-liveperson-legacy-domain-to-liveperson) as soon as possible. LivePerson will deprecate the LivePerson (Legacy) engine at the end of July 2021. See above for the many benefits of the LivePerson engine over LivePerson (Legacy).

Key characteristics include:

* A recommender model based on Word Mover's Distance (WMD) algorithms. 
* Considered an "entry level" NLU engine because it's more specific. In other words, for the algorithm to work well, the sample sentences should be close to the expected user input and have only small differences in wording, for example:

    Expected user input: *I want to buy a brown Michael Kors bag*
    <br>Tailored sample sentence (with entities): *I want to buy COLOR PRODUCT_BRAND bag*

    In contrast, the LivePerson engine is more generalized; it can handle a general set of user questions and still perform well. 

* If you have more than 5 intents and more than 20 training phrases per intent, there is a degradation of speed at runtime when processing the user inputs.
* For performance reasons:
    * Supports a maximum of 40 training phrases per intent. If you add more than 40, only the first 40 are used.
    * Supports a maximum of 20 positive learnings per Knowledge Base article. If you add more than 20, only the first 20 are used. There is no limit on the number of negative learnings; however, see the best practices discussed [here](knowledge-base-internal-knowledge-bases-best-practices.html).
* Doesn't require the model to be trained.

### Variances in matched intents with LivePerson NLU

When using LivePerson tools ([Model Tester](intent-builder-testing-advanced-model-testing.html), [Single Utterance Tester](intent-builder-testing-single-utterance-testing.html)) to improve intent classification results, on occasion you might notice a small number of changes in the matched intents for the test set/test phrase after retraining with no additional training samples. There are a number of contributing factors for this observed variance. Some factors are the by-product of the training algorithm, while others can be tackled by changes to the taxonomy of intents or to the training phrases.

#### Randomness in deep learning 
LivePerson's NLU utilizes the latest, deep learning technology to achieve the best intent classification performance. Randomness is baked into the training of deep learning models to facilitate the exploration of optimal solutions. The cost of such explorations is that no two models trained on the same dataset yield perfectly identical results. Our repeated tests have shown that despite the potential variance in the matched intents, the overall performance of our models stays stable. In other words, after retraining with the same dataset, what you might lose in one intent is usually recovered by some improvement in others.

#### Intent overlaps or multiple intents
The variance in matched intents might also indicate that:

* There's a potential intent overlap in the taxonomy, or there's a test sample that contains multiple intents.
* The training samples for different intents lack diversity or distinction.

When working with multiple developers to create an intent domain with a large taxonomy of intents, it is highly likely that duplicate intents will be created over time, or an overlap between intents will develop. For example, “refund - general” and “refund - defective product” overlap, as the former subsumes the latter. 

Similarly, it is also likely that a message such as “I’d like to return my phone and get a refund” might be matched with the “refund” intent or the “return product” intent depending on the training, as we currently only return the top scoring matched intent for each prediction, and both are valid matches for the message. 

A model might also become confused with a fine-grained taxonomy of intents if the training examples are not carefully curated. The intent “refund - defective product” and “refund - no longer needed” might become problematic if the training samples for both intents are limited and if both share similar patterns starting with “I want to get a refund.” 

All these factors directly influence the intent matching after retraining. Therefore, it's important to ensure that:

* The taxonomy of intents is carefully reviewed for overlaps.
* The test samples contain clear, single intents.
* The training samples are diverse within an intent and distinguishable from other intents.

### Connect a 3rd-party NLU engine

#### 3rd-party NLU limitations

- Doesn't support [prebuilt domains](intent-builder-overview.html#prebuilt-domains) or [Regular Expression entities](intent-builder-entities.html#regular-expression-entities).
- The length of the domain name should not exceed 64 characters. (Watson limitation)
- A domain can only support one language, which is specified on the Domain Settings page.
- LivePerson does not support "pulling" into Intent Builder existing models that have been trained in IBM Watson or Google Dialogflow. Only model "push" is supported; this is accomplished by training the model in Intent Builder.

#### Step 1: Enable 3rd-party NLU support

Contact your LivePerson account administrator to enable your account for 3rd-party NLU support.

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

In Intent Builder, [add a domain](intent-builder-domains.html) that uses the 3rd-party NLU engine as its NLU provider. You can import the intents and entities at that time or add them later but before proceeding to step 5.

#### Step 4: Create the NLU provider credentials

In Intent Builder, in the domain that you created in the previous step, [create the NLU provider credentials](intent-builder-domains.html#create-a-3rd-party-nlu-provider-credential) for the 3rd-party NLU engine. This is when you'll copy and paste in the credentials that you downloaded from IBM Watson or Google Dialog flow (step 2 above).

#### Step 5: Train the domain

In Intent Builder, [train the domain](intent-builder-domains.html#train-a-3rd-party-nlu-domain). Once training is completed (which creates the model version), you can start to [test](intent-builder-testing-single-utterance-testing.html).
