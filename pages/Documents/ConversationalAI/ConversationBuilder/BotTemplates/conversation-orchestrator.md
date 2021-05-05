---
pagename: Conversation Orchestrator
redirect_from:
  - conversation-builder-templates-maven-concierge.html
  - conversation-builder-bot-templates-maven-concierge.html
Keywords:
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

### Included items

#### Dialogs 

* **1 Welcome**: The Welcome dialog greets the user and collects their phone number for use in dynamic routing policies. 
* **2 Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **3 Transfer**: Contains integration tiles to transfer to a different skill or agent based on the result of dynamic routing policies.

<img style="width:800px" src="img/ConvoBuilder/template_conv_orch_1.png">

#### Integrations

* **TRANSFER_TO_AGENT**: Performs a transfer to a Conversational Cloud agent and skill. Agent ID, Skill Name, and Skill ID will be provided by a call to the [Recommendation API](conversation-orchestrator-recommendation-api-overview.html) based on dynamic routing policies.
* **TRANSFER_TO_SKILL**: Performs a transfer to a Conversational Cloud skill. Skill Name and Skill ID will be provided by a call to the [Recommendation API](conversation-orchestrator-recommendation-api-overview.html) based on dynamic routing policies.

<img style="width:800px" src="img/ConvoBuilder/template_conv_orch_2.png">

### Configuration needed

The important environment related variables are stored in the **Global Functions**, and for most cases this is the only area you will edit.

<img style="width:800px" src="img/ConvoBuilder/template_conv_orch_3.png">

Open the bot. On the top navigation click **Global Functions** and edit the following fields:

* `mavenNamespace`: Please enter the Namespace you have defined in your [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) for storing and retrieving session variables.
* `fallbackSkillName`: Please enter the skill name for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator.
* `fallbackSkillId`: Please enter the skill ID for the fall back skill. This skill is used by the bot if no policies are executed by Conversation Orchestrator.
* `fallbackMessage`: Please enter a message to send to customer when the fallback route.

Click **Save**.

Configure Conversational Cloud and deploy the bot. 

### Pre/post-process code

The *text_question_3* interaction contains the following **Process User Response** code to use botContext methods to store the phone number in the Conversation Context Service.

```javascript
var mavenNamespace = getVar("mavenNamespace");
var success = botContext.registerContextNamespace(mavenNamespace);
botContext.printDebugMessage("Maven registerContextNamespace:: " + success);
 
// NEED TO ADD COMMENTS TO EXPLAIN
var phoneNumber = getVar("phoneNumber");
botContext.setContextDataForConversation(mavenNamespace, "phoneNumber", phoneNumber);
 
var convId = botContext.getConversationId();
setSessionVar("conversationId", convId, true, false);
 
botContext.logCustomEvent(botContext.getCurrentUserMessage(), "Maven Session Store","Maven Session Store was called for namespace labelled '"+ getVar("mavenNamespace") + "' for account '" + getVar("accountId") + "' ("+ convId + ")");
```

The *text_4* interaction contains the following **Pre-Process Code** which uses botContext methods to call the Recommendations API and retrieve the matched routing policy. This policy is then used in the setTransferParameters function to prepare the escalation integration.

```javascript
var convId = getVar("conversationId");
var customerInfo = botContext.getLPCustomerInfo();
 
if(customerInfo){
   var customerId = customerInfo.customerId;
   botContext.setBotVariable("customerId",customerId,true,false);
}
 
var mavenRecommendations = botContext.askMaven(convId,customerId,"");
var data = JSON.parse(mavenRecommendations);
botContext.printDebugMessage("Maven Recommentdations:: " + mavenRecommendations);
 
botContext.logCustomEvent(botContext.getCurrentUserMessage(), "Ask Maven","Ask Maven was called for namespace '"+ getVar("mavenNamespace") + "' for account '" + getVar("accountId") + "' ("+ convId + ")");
 
var actions = data.rule.actions;
 
var agentId = null;
var skillId = null;
var skillName = null;
var transferType = null;
 
for (var action in actions) {
 
 var type = actions[action].type;
 
 switch (type) {
   case "SEND_MESSAGE":
     sendMessage(actions[action].payload.message);
     break;
   case "TRANSFER_TO_AGENT":
     agentId = botContext.getLPAccountId()+'.'+ actions[action].payload.userId;
     skillId = actions[action].payload.skillId || "-1";
     transferType = "TRANSFER_TO_AGENT";
     break;
   case "TRANSFER_TO_SKILL":
     skillId = actions[action].payload.skillId;
     transferType = "TRANSFER_TO_SKILL";
     break;
 }
}
setTransferParameters(agentId, skillId, skillName, transferType);
```

The *text_4* interaction contains the following **Post-Process Code** which takes the transferType variable and routes to the appropriate agent or skill escalation interaction.

```javascript
var transferType = getVar("transferType");
 
if (transferType) {
 switch (transferType) {
   case "TRANSFER_TO_AGENT":
     botContext.setTriggerNextMessage("TRANSFER_TO_AGENT");
     break;
   case "TRANSFER_TO_SKILL":
     botContext.setTriggerNextMessage("TRANSFER_TO_SKILL");
     break;
   default:
     log("Policy had a transfer-type other than skill or agent.");
     break;
 }
}
```

### Using the Conversation Context Service & Dynamic Routing

This bot template is designed for use within the [Getting Started](conversation-orchestrator-dynamic-routing-getting-started.html#using-the-conversation-orchestrator-bot-template) guide of our Conversation Orchestrator Dynamic Routing documentation. For details on configuring Conversation Orchestrator to work with this bot template, please follow along with that guide.
