---
pagename: Brand's Rasa-Based NLU Engine
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Natural Language Understanding
permalink: intent-manager-natural-language-understanding-brand-s-rasa-based-nlu-engine.html
indicator: both
---

### Introduction

If you’ve deployed your own NLU engine built on the [Rasa](https://rasa.com/) open source NLU framework, you can use it for Natural Language Understanding intelligence within LivePerson’s Conversational Cloud. Importantly, this lets you keep the investment that you’ve made in your own NLU solution.

When you integrate a Rasa-based NLU engine, training data and other model-related data is completely encapsulated within your solution. For its part, Conversation Cloud uses three of the engine’s exposed endpoints:

* **Training**: [This endpoint](https://rasa.com/docs/rasa/pages/http-api#operation/trainModel) is used to train models.
* **Activation**: [This endpoint](https://rasa.com/docs/rasa/pages/http-api#operation/replaceModel) is used to load the model when you activate a model version.
* **Prediction**: [This endpoint](https://rasa.com/docs/rasa/pages/http-api#operation/parseModelMessage) is used to get the intents and entities in a message, so they can be saved and used elsewhere within Conversational Cloud. For example, this endpoint is used to associate the intents with the dialog starters in bots.

{: .important}
Your Rasa implementation must conform to the schemas at the links above.

### Connect the NLU engine

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Add a domain as described [here](intent-manager-build-domains.html#add-a-domain-manually-or-using-an-import-file). When you do this, you need to provide some information specifically about your Rasa solution:

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/rasa1.png">

    * **NLU Provider**: Select “Brand's Rasa,” to indicate that you’re using a custom solution that you deployed.
    * **Rasa Host URL**: Enter the base URL for your Rasa training and prediction endpoints.
    * **Authorization**: Select the [type of authentication](https://rasa.com/docs/rasa/pages/http-api) to use when making API calls to the Rasa engine, either “TokenAuth” or “JWT.” Then enter the permanent token to use. For security reasons, unauthenticated connections aren’t supported.
    * **Credential**: This is optional. If you’d like to add an extra layer of security when transferring data, select the [Mutual Authentication credential](bot-accounts-credentials.html#add-a-mutual-authentication-credential) to use along with the token. If you have the proper [permissions](bot-accounts-permissions.html), you can create one on the Credentials page in Bot Accounts, and you can also create one on-the-fly here.

    <br>You don't need to define the language of your domain.

    At this point, you can import the intents and entities, or you can add them manually after the domain is created. Do one or the other before proceeding to the next step.

3. Train the domain. This is discussed below.

### Train a domain

You must train the domain after every update to the training data therein if you want the update to be reflected in subsequent testing/debugging and usage. Training creates a new model version that incorporates the changes. Once the domain is trained, you can activate it and then use the testing tools to test. Please see the testing constraints discussed farther below.

Depending on how big the domain is, training typically takes anywhere between 2 to 10 minutes.

**To train a domain**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, click **Train** in the upper-right corner.

    (If you haven't updated the training data in the domain, i.e., made changes to the intents, their training phrases, or the entities, the **Train** button is disabled.)

    To refresh the page and check on progress, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_trainRefresh.png"> (Refresh icon) in the **Training Status** column.

### Testing constraints

#### Testing workflow

A Rasa-based NLU engine can only run predictions on the model that's currently activated, so your testing workflow must be:

1. Make changes to your domain.
2. Train the domain.
3. [Activate the model version](intent-manager-build-domains.html#activate-the-latest-model-version).
4. Test.

The issue with this workflow is that you can't test a model version *before* you activate it. And once you activate it, it's used everywhere: Both within Intent Manager and outside of Intent Manager, e.g., in Conversation Builder, in API calls to the NLU engine, and so on.

Therefore, LivePerson recommends that you incorporate two domains into your workflow:
* **A Development domain** - Use this for development and testing purposes. In this domain, you can safely activate and test model versions without impacting upstream resources.
* **A Production domain** - Use this exclusively to support your Production resources. In this domain, you only activate a model version once it's ready for Production usage.

#### Testing tools

You can test using both the [Test User Input](intent-manager-build-test-a-single-utterance.html) tool and the [Model Tester](intent-manager-build-test-with-the-model-tester.html). However, since a Rasa-based NLU engine can only run predictions on the model that's currently activated, you cannot select a trained model version to use. The activated version is always used.