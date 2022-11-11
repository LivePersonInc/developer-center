---
pagename: Conversation Orchestrator
redirect_from:
  - conversation-builder-templates-maven-concierge.html
  - conversation-builder-bot-templates-maven-concierge.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-conversation-orchestrator.html
indicator: both
---

The Conversation Orchestrator bot template in Conversation Builder comes pre-wired with integration to Conversation Orchestrator's [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html), enabling you to set up and build personalized consumer journeys easily.

The following example flow can happen with this template:

1. The conversation starts with a Welcome intent, for example “hi.”
2. The bot then asks the customer for a phone number.
3. The phone number is stored in Conversation Orchestrator's [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html).
4. Conversation Orchestrator evaluates policies based on the phone number (whether phone number is in a VIP list or a Regular Customer List).
5. Bot transfers the conversation to a skill or agent based on the policy outcome.

{: .attn-note}
This bot template contains global functions brought over from the [Global Helper Functions bot template](conversation-builder-bot-templates-global-helper-functions.html).

### Included items

#### Dialogs

* **1 Welcome**: The Welcome dialog greets the user and collects their phone number for use in dynamic routing policies.
* **2 Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **3 Transfer**: Contains integration tiles to transfer to a different skill or agent based on the result of dynamic routing policies.

<img loading="lazy" style="width:800px" src="img/ConvoBuilder/template_conv_orch_1.png" alt="The Welcome dialog in a bot created from the Conversation Orchestrator bot template">

#### Integrations

* **TRANSFER_TO_AGENT**: Performs a transfer to a Conversational Cloud agent and skill. Agent ID, Skill Name, and Skill ID will be provided by a call to the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html) based on dynamic routing policies.
* **TRANSFER_TO_SKILL**: Performs a transfer to a Conversational Cloud skill. Skill Name and Skill ID will be provided by a call to the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html) based on dynamic routing policies.

<img loading="lazy" style="width:800px" src="img/ConvoBuilder/template_conv_orch_2.png" alt="The Integration Settings page for the Transfer to Agent configuration">

### Configuration needed

The important environment related variables are stored in the **Global Functions**, and for most cases this is the only area you will edit.

<img loading="lazy" style="width:800px" src="img/ConvoBuilder/template_conv_orch_3.png" alt="The initConversation function on the Global Functions page in the bot">

Open the bot. On the top navigation click **Global Functions** and edit the following fields:

* `contextNamespace`: Please enter the namespace you have defined in your [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) for storing and retrieving session variables.
* `fallbackSkillName`: Please enter the skill name for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator.
* `fallbackSkillId`: Please enter the skill ID for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator.
* `fallbackMessage`: Please enter a message to send to customer when the fallback route.

Click **Save**.

Configure Conversational Cloud and deploy the bot.

### Pre/post-process code

The *COLLECT_PHONE_NUMBER* interaction contains the following **Process User Response** code to use botContext methods to store the phone number in the Conversation Context Service.

```javascript
// Retrieve namespace bot variable and register context namespace
var contextNamespace = getBotVar("contextNamespace");
var success = botContext.registerContextNamespace(contextNamespace);
debugMsg("Conversation Orchestrator registerContextNamespace:: " + success);

// Pull in the phoneNumber variable captured in the conditions and set to the Conversation scoping in the Conversation Context Service
var phoneNumber = getBotVar("phoneNumber");
setContextConv("phoneNumber", phoneNumber);

// Custom Event Logging for setting Context Session Store
logEventAdv(getUserMessage(), "Conversation Orchestrator Session Store","Maven Session Store was called for namespace labelled '"+ getBotVar("contextNamespace") + "' for account '" + getBotVar("accountId") + "' ("+ getBotVar('conversationId') + ")");
```

The *PROCESS_ASKMAVEN* interaction contains the following **Pre-Process Code** which uses botContext methods to call the Next Actions API and retrieve the matched routing policy. This policy is then used in the setTransferParameters function to prepare the escalation integration.

```javascript
// Call Conversation Orchestrator Next Actions API
var orchestratorRecommendations = botContext.askMaven();
var data = JSON.parse(orchestratorRecommendations);
debugMsg("Maven Recommendations:: " + orchestratorRecommendations);

// Custom Event Log for askMaven response
logEventAdv(getUserMessage(), "Ask Maven","Ask Maven was called for namespace '"+ getBotVar("contextNamespace") + "' for account '" + getBotVar("accountId") + "' ("+ getBotVar('conversationId') + ")");

// Set transfer param variables
var agentId = null;
var skillId = null;
var skillName = null;
var transferType = null;

// If a policy is matched, process the policy. If not, transfer via fallback
if (data.rule) {
 var actions = data.rule.actions;

 for (var action in actions) {
   var type = actions[action].type;

   switch (type) {
     case "SEND_MESSAGE":
       sendMsg(actions[action].payload.message);
       break;
     case "TRANSFER_TO_AGENT":
       agentId = getBotVar('accountId')+'.'+ actions[action].payload.userId;
       skillId = actions[action].payload.skillId || "-1";
       transferType = "TRANSFER_TO_AGENT";
       setTransferParameters(agentId, skillId, skillName, transferType);
       break;
     case "TRANSFER_TO_SKILL":
       skillId = actions[action].payload.skillId;
       transferType = "TRANSFER_TO_SKILL";
       setTransferParameters(agentId, skillId, skillName, transferType);
       break;
   }
 }
} else {
 sendMsg('No policy matched, routing to fallback skill');
 setTransferParameters(agentId, skillId, skillName, transferType);
}
```

The *PROCESS_ASKMAVEN* interaction contains the following **Post-Process Code** which takes the transferType variable and routes to the appropriate agent or skill escalation interaction.

```javascript
// setTriggerNextMessage to appropriate transfer type
var transferType = getBotVar("transferType");

if (transferType) {
 switch (transferType) {
   case "TRANSFER_TO_AGENT":
     goNext("TRANSFER_TO_AGENT");
     break;
   case "TRANSFER_TO_SKILL":
     goNext("TRANSFER_TO_SKILL");
     break;
   default:
     debugMsg("Policy had a transfer-type other than skill or agent.");
     break;
 }
}
```

### Using the Conversation Context Service and Dynamic Routing

This bot template is designed for use within the [Getting Started](conversation-orchestrator-dynamic-routing-getting-started.html#using-the-conversation-orchestrator-bot-template) guide of our Conversation Orchestrator Dynamic Routing documentation. For details on configuring Conversation Orchestrator to work with this bot template, please follow along with that guide.