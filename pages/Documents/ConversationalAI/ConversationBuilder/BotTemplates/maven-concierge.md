---
pagename: Maven Concierge
redirect_from:
  - conversation-builder-templates-maven-concierge.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-maven-concierge.html
indicator: both
---

The Maven Concierge bot template is a bot template in Conversation Builder that comes pre-wired with integration to Conversation Orchestrator's Dynamic Routing and Conversation Context Service, enabling you to set up and build personalized consumer journeys easily. 

The following example flow can happen with this template:

- The conversation starts with a Welcome intent, for example “hi”
- The bot then asks the customer for a phone number
- The phone number is stored in Conversation Orchestrator's Conversation Context Service
- Conversation Orchestrator evaluates policies based on the phone number (whether phone number is in a VIP list or a Regular Customer List)
- Bot transfers the conversation to a skill or agent based on the policy outcome 


### Included Items

#### Dialogs 

- Basic Welcome dialog

- A question that asks basic customer information (e.g., a phone number)

<img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_0.png">

#### Integrations

- Conversation Orchestrator's [Conversation Context Service](maven-ai-context-warehouse-context-session-store.html) integration

- [Recommendation API](maven-ai-askmaven-overview.html) integration that allows a bot to consult Conversation Orchestrator on routing decisions

  <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_1.png">

  - Pre-built code for transfer to skill and transfer to agent: Routing decisions provided by Conversation Orchestrator are then dispatched to an agent, bot, or a skill using these integrations. 

  <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_2.png">

  <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_3.png">

### Configuration Needed

The important environment related variables are stored in the Global Functions, and for most cases this is the only file you will likely edit. 

<img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_4.png">

Open the bot. On the top navigation click **Global Functions** and edit the following fields:

1. `deploymentZone`: Z1-Americas, Z2-EMEA, Z3-APAC

2. `accountId`: Your Conversational Cloud account ID

3. `mavenNamespace`: Please enter the Namespace you have defined in your [Conversation Context Service](https://developers.liveperson.com/maven-ai-context-warehouse-context-session-store.html) for storing and retrieving session variables. 

4. `mavenApiKey`: Copy and paste the Developer Key from Conversation Orchestrator

5. `fallbackSkillName`: Please enter the skill name for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator

6. `fallbackSkillId`: Please enter the skill ID for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator

7. `fallbackMessage`: Please enter a message to send to customer when the fallback route 

8. `CB_API_KEY`: On the top right, click the Key Icon, and then copy and paste the key in "Your API Access Key"

   <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_5.png">

9. Click **Save**

10. Configure Conversational Cloud and deploy the bot. 

### Using the Conversation Context Service

Conversation Orchestrator's [Conversation Context Service](https://developers.liveperson.com/maven-ai-context-warehouse-context-session-store.html) can be used inside Conversation Builder using [scripting functions](https://developers.liveperson.com/conversation-builder-scripting-functions-manage-the-conversation-context-service.html) to store and retrieve session attributes. These attributes can be carried through in a conversation or can then be used in defining routing policy. The template provides an example where a phone number retrieved from the Welcome dialog is stored in the session variable. To view: 

1. Open the dialog in template called - "Start Here - Welcome"

2. Click on the interaction - Recommendation API, and then on the right inside Interaction details, **Code**

   <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_6.png">

3. The following code stores the phoneNumber in the Conversation Context Service. Similarly other attributes for example, NLU intent can also be stored in the Conversation Context Service.  

   <img class="fancyimage" style="width:800px" src="img/maven/mave_bot_template_image_7.png">

4. The phoneNumber can then be used to determine customer attributes for example if the customer is a VIP or not and then route them to a specific skill or agent defined inside Conversation Orchestrator Policy editor. To run an end to end example of such a feature, please refer to the [Dynamic Routing Tutorial](https://developers.liveperson.com/maven-ai-ai-powered-routing-tutorial.html#using-a-policy-with-conversation-builder) 

