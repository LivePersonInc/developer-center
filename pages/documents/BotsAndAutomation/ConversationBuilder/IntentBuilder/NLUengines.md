---
pagename: NLU Engines
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Intent Builder
permalink: conversation-builder-intent-builder-nlu-engines.html
indicator: both
---

One of the essential tools of the Conversation Builder platform is Natural Language Understanding (NLU). This is what allows Intent Builder to analyze consumer input and assign accurate intents.

While LivePerson provides its own propriety NLU out of the box, the Conversation Builder also allows you to choose your preferred NLU Engine for analyzing text by routing all NLU analysis and training through an API. 

This API layer of abstraction allows you to choose from the following NLU engines:

- LivePerson's native NLU
- Google Dialogflow
- IBM Watson

{: .important}
If you choose LivePerson's native NLU, no changes need to be made in Conversation Builder. This engine is already configured and set up by default.

### Language Support

LivePerson NLU supports intent detection for English and Spanish.

[IBW Watson supports](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-language-support#language-support) Arabic, Chinese, Dutch, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Spanish, and Swedish.

[Google Dialogflow supports](https://cloud.google.com/dialogflow/docs/reference/language) Cantonese, Chinese, Danish, Dutch, English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Russian, Spanish, Swedish, Thai, Turkish, and Ukranian.

### Connecting a 3rd party NLU Engine

#### Step 1: Enable 3rd Party NLU Support

Contact your account administrator to enable your account for 3rd party NLU support.

Once 3rd party NLU support is enabled, you can start creating domains (with 3rd party NLU).

#### Step 2: Sign up and get the API keys

##### IBM Watson

1. Register for or log in to an IBM Cloud account

2. Create or access a Watson Assistant resource

3. Generate Service Credentials with the role of Manager and an Auto Generated Service ID

4. View and copy the newly created credentials

##### Google Dialogflow

1. Log in to the Dialogflow console

2. Create a new Dialogflow agent (which will create a new Google project)

3. Create a new Service Account for the newly created Google project with the role of Dialogflow API Admin

4. Create a JSON formatted private key for the service account by clicking Create key

5. View and copy the created key. This will be used in your dialogflow config data

#### Step 3: Create NLU Provider Credentials in Intent Builder

1. Click on ‘NLU Provider Credentials’ on domain dashboard

<img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_0.png">

2. Create a new NLU provider credential

* Give a name for the credential
* Select the NLU Provider that you want to set the credential for
* Copy the credentials downloaded from Watson / Google Dialog Flow

<img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_1.png">

#### Step 4: Add a domain for your NLU Provider


Import your intents and entities or add them later manually before Step 5.


<img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_2.png">

#### Step 5: Train the domain

1. Click on the train button in the right icon menu

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_3.png">

2. Select the NLU provider credential from the list in the train modal

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_4.png">

3. Wait till the training is completed. Click on the refresh button to see the latest training status for the version.

    <img  class="fancyimage" style="width:750px" src="img/ConvoBuilder/NLU_image_5.png">

4. Once training is completed, you can start testing with the modal version in the intent tester.



### Limitations

#### 3rd Party NLU limitations

- Third Party NLU Domain length should not exceed 64 characters. (Watson limitation)
- Each domain can only support one language and it is available in the settings page.

#### NLU engine API limitations:
- Knowledge Base does not support 3rd party NLU right now
- Conversation Builder does not support pulling existing models from IBM Watson and Google Dialogflow into Intent Builder, only model push is supported.
