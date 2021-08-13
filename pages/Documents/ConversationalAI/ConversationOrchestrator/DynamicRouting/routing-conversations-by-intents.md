---
pagename: Routing Conversations by Intents
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-routing-conversations-by-intents.html
indicator: messaging
---

{: .important}
This topic assumes that you are familiar with [Intent Manager](intent-manager-overview.html). 

You can create policies to recognize a consumer's intent from their utterance and transfer to the appropriate agent or skill. Routing by intent is very useful when agents or bots are organized by functional departments. 

**Examples**
* When a VIP consumer says, “I want to upgrade my service,” they should be transferred to the Upgrade Service skill that includes all upgrade specialists or bots.
* When a member says, “I have an outage,” they should be escalated to an Outage specialist.

**Please Note:**
The technique is very useful for advanced routing use cases, such as scenarios that involve a combination of intent recognition, contextual information and/or transferring to both humans and bots. 
 
If all your operations are contained within Conversation Builder bots, and you already have different bots for specific intents, please use the direct approach of [bot collaboration](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group).

### Prerequisite steps
* Configure the intents using [Intent Manager](intent-manager-overview.html).
* Configure your [routing bot](conversation-orchestrator-dynamic-routing-getting-started.html).

### Process
There are two ways to accomplish intent-based routing:
* If you have a limited number of intents, use the dialog starter approach.
* If you have many intents and corresponding skills, enable intent routing in the Conversation Orchestrator bot.

{: .important}
Some users might be using older approaches to routing by intents. Typically, this involves writing custom JavaScript to store context variables and call the Next Actions API. However, LivePerson recommends that you use the approaches discussed in this topic; they leverage Conversation Builder's Dynamic Routing interaction, which reduces the need to write custom code. Still, for information to aid in troubleshooting older approaches, you can access an older version of this topic [here](conversation-orchestrator-dynamic-routing-routing-conversations-by-intents-legacy.html).

#### Routing by intent using the dialog starter approach

When an intent triggers a dialog starter, the intent name is automatically saved to the default “orchestrator” namespace in the Context Service in a variable named “intent”. This approach is useful when using a small number of intents (5-10). 

1. Create a new dialog in your Conversation Builder bot. 

2. In the newly created dialog starter, select the **+ Intent** option to add a domain and intent to trigger this dialog. 

3. Set the **Next Action** to the Dynamic Routing interaction.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_next_action.png">
           
4. Create intent-based routing policies. For more on this, see the section at the end of this topic.

#### Enabling intent routing in the Dynamic Routing bot

When working with larger domains, assigning individual dialogs to each intent can be difficult to scale. By using the Conversation Orchestrator bot template, bot developers can manually call the analyze intent API and save the intent name to the default namespace, enabling routing to any intent-based skill in the account.

{: .important}
This approach is powered by an API provided by the [Dynamic Routing Bot template](conversation-builder-bot-templates-conversation-orchestrator.html). This API is not suitable for use with legacy versions of Liveperson’s NLU engine. Please upgrade to the current NLU domain offering if using this approach.

1. In Conversation Builder, create a new bot using the Dynamic Routing Bot template.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drbot1.png">
           
    In **Global Functions**, there are two values that need to be updated for your account (botAppKey & domainId).

2. Retrieve the botAppKey value from a bot user agent. This is found in the **User Management** section of the Conversational Cloud. Copy this value for entry into the **Global Functions** of the bot.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drbot2.png">

3. Retrieve the domain ID for your intent domain. This is found within the **Domain Settings** for your domain in Intent Manager. Copy this value for entry into the **Global Functions** of the bot.
              
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drbot3.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drbot4.png">

4. Enter the botAppKey and domainId values into their associated variables within the **Global Functions** editor of your bot.

5. In the provided **1 Welcome** dialog, delete the COLLECT_PHONE_NUMBER interaction. Enable both the ASK_INTENT and getIntent_API interactions using the interaction settings for each.

6. Create the routing policies. For more on this, see the section that immediately follows.

### Creating intent-based routing policies

1. Use the **Manage routing policies** link in the Dynamic Routing interaction to navigate to Conversation Orchestrator.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_createpolicy1.png">

2. Create a new policy by selecting **Add Policy**. Give the new policy a name. In the conditions editor, select “orchestrator.intent” from the dropdown, and set it equal to the relevant intent name. 

3. In the actions editor, select **Transfer to skill** from the left dropdown and the relevant skill from the right dropdown.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_createpolicy3.png">

4. Once saved, enable the policy by toggling the switch for the policy in the policy list.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_createpolicy4.png">

### Testing

To test both dynamic routing approaches, you need to deploy an agent connector for the Dynamic Routing bot. Additionally, the skills that you will be routing to need to be assigned to a logged-in human agent or to bot users deployed as agent connectors to other bots.

To deploy a bot with an agent connector, follow the information [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html).

1. Once all agents have been assigned the relevant skills, navigate to our [Web Messaging test page](https://developers.liveperson.com/web-messaging/emulator.html), enter your account number, and trigger the engagement for your routing bot.
2. Trigger the routing flow depending on the method you are using to capture the intent:
    * **Dialog starter method**: Enter an utterance that corresponds to one of your dialog starter intents.
    * **Dynamic Routing bot**: Wake the bot by saying “Hi,” “Hello,” etc. Enter your intentful utterance in the following question.
3. Confirm in your bot that you have successfully been routed to the correct agent and skill defined in your routing policies.
