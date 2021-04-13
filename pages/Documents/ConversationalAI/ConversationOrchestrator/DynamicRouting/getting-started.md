---
pagename: Getting Started
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-getting-started.html
indicator: messaging
---

### Introduction

To get started, you need to direct traffic to a routing bot. Your setup is different depending on how you are planning to use the Conversation Orchestrator. There are three options:

* Use the Conversation Orchestrator bot template if you are setting up routing for the first time or if you don’t mind setting up a new routing or concierge bot. This template comes pre-wired with hooks to [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). This is the easiest way to get started.

* If you already have a functional routing bot in the Conversational Cloud and you don’t want to move that logic to a new bot, you’ll need to manually hook the bot to [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). This approach requires a little more code modification.

* You can use [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) even if all your automation is configured on an external platform like Google DialogFlow. In this case, you can create routing policies in Dynamic Routing, but you need to use the [Recommendations API](conversation-orchestrator-recommendation-api-overview.html) from the external system to perform routing.

Each of these options is further discussed in this topic.

### Turn on the Conversation Context Service

**To turn on the Conversation Context Service**

1. Navigate to **Bot Accounts** within Conversational Cloud.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_botaccounts.png">

2. Select your organization.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_selectorg.png">

3. Toggle to **Enable Context API**, and ensure you select to **Use Conversational Cloud Site ID**, entering your organization’s account number.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_enablecontextapi.png">

### Enable the Recommendations API

To enable the Recommendation APIs you will need to create and use a Developer API key. To get your unique key:

1. Open **Conversation Orchestrator** within your Conversational Cloud account, and navigate to **Developer Key**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_apikey.png">

2. Copy and paste the key you see in the experience, and use it in your API headers.

    To generate a new key, click the **Regenerate Key** button. This will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs; therefore, you will need to use the new key wherever the APIs are being called.
 
### Choose your routing bot

* Use the Conversation Orchestrator bot template if you are setting up routing for the first time or if you don’t mind setting up a new routing or concierge bot. This template comes pre-wired with hooks to [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). This is the easiest way to get started.

* If you already have a functional routing bot in the Conversational Cloud and you don’t want to move that logic to a new bot, you’ll need to manually hook the bot to [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). This approach requires a little more code modification.

* You can use Dynamic Routing even if all your automation is configured on an external platform like Google DialogFlow. In this case, you can create routing policies in [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html), but you need to use the [Recommendations API](conversation-orchestrator-recommendation-api-overview.html) from the external system to perform routing.

Each of the above options is discussed below.

### Using the Conversation Orchestrator bot template

Let’s walk through an example tutorial of creating a policy using Conversation Orchestrator and using it for routing to a skill.

This example starts with a simple implementation, using static attributes (hard-coded values), and then adds more complexity, such as using the Conversation Context Service, LivePerson Functions, and a Conversation Builder integration. This tutorial will help you to understand the high-level concepts and to create the basic building blocks on which you will be able to create more complex solutions.

**Let’s start with the policy we want to build:**<br>
*Route a VIP customer to a VIP skill, and route a regular customer to a general skill.*

#### Use a policy with Conversation Builder

In this tutorial, we’ll use the Conversation Builder template that is pre-wired with Conversation Orchestrator and the Conversation Context Service.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_usepolicywithcb.png">

A Conversation Builder bot will handle the incoming consumer message, and then use Conversation Orchestrator routing policies to route the customer to a VIP agent or regular customer agent. Setting up the Conversation Builder bot in the beginning will allow you to test the scenarios end-to-end.

#### Import the Conversation Orchestrator bot template

In Conversational Cloud, navigate to **Conversation Builder**, and click **New Bot** in the upper-right corner.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_importtemplate1.png">
<img class="fancyimage" width="300" src="img/convorchestrator/co_dr_importtemplate2.png">

Choose the **Conversation Orchestrator** bot template from the bot template menu.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_importtemplate3.png">

The template is pre-wired with the following:
1. A simple welcome intent
2. A question that asks basic customer information (e.g., a phone number)
3. Integration to Conversation Context Service
4. Integration to Dynamic Routing
5. Based on a policy action, the bot can then perform the following: transfer to an agent, transfer to a skill, or send a message

Once we have set this up with Conversation Orchestrator and Conversation Context Service, the following happens:
1. The conversation starts with a Welcome intent, for example “hi”.
2. The bot then asks the customer for a phone number.
3. The phone number is stored in Conversation Context Service.
4. Conversation Orchestrator evaluates policies based on the phone number (whether phone number is in a VIP list or a Regular Customer List).
5. The bot transfers the conversation to a skill or agent based on the policy outcome.

#### Set up the Conversation Orchestrator bot

Open the bot. 

On the top navigation, click **Global Functions**, and edit the following fields:

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_setupbot.png">

* **mavenNamespace**: The Conversation Orchestrator namespace is used for organizing a set of attributes you might want to use in a policy. See [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) for more information on how this works. Please enter “myNamespace” here. You will use this name in a routing policy. 
* **fallbackSkillName**, **fallbackSkillId**, and **fallbackMessage**: Set up an optional fallback skill by editing these values. This will be the fallback skill the conversation will be routed to in case there is some failure in Dynamic Routing logic.

{: .important}
Conversation Builder is already integrated with the Conversation Context Service. You can manage the Conversation Context Service from inside Conversation builder using [scripting functions](conversation-builder-scripting-functions-manage-the-conversation-context-service.html). Make sure you have enabled the Context API in the Bot Accounts application, using your Conversational Cloud Site Id. This is discussed farther above.

[Deploy the bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) in Conversational Cloud. See the next step (“Set up Conversational Cloud”) for information on how to set up a skill in Conversational Cloud to accept the incoming conversations.

#### Set up Conversational Cloud

1. Create a skill for the conversation (e.g., Conversation_Orchestrator_Routing_Bot), and assign the bot user ID to this skill.
2. Set up a Conversational Cloud campaign to direct incoming conversations to this skill. All incoming conversation will now be picked up by the bot.
3. Set up a VIP agent skill (e.g., Vip Support). Add agents (e.g., VIP Agent), and then assign them to the Vip Support skill.
4. Set up a regular agent skill (e.g., Regular Support). Add agents (e.g., Regular Agent) and assign them to the Regular Support skill.
5. Save the skill and agent ids to be used with policy.

{: .important}
For some practice at creating skills, users, and campaigns, see [here](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html). 

#### Create a simple policy using static context attributes

When starting to build your first policy, it is often easy to use static attributes at first. This is much like hard coding some logic writing your first “Hello World” example. Once you have been able to execute this using hard-coded values, we will replace them with programmatically retrieved attributes.

In this example, you will create and use static attributes. To check if a customer is a VIP, you will use a list of phone numbers, and see if the customer’s number is in that list.

##### Create the context attributes

1. Open **Conversation Orchestrator** in the Conversational Cloud applications menu, and navigate to **Conversation Context Service > Custom**.

    <img class="fancyimage" width="400" src="img/convorchestrator/co_dr_comenuitem.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_ccscustom.png">

2. Click **Add New**.
    1. Select the type “static.”
    2. Enter a name for the attribute: vipPhoneNumberList.
    3. For **Value**, select the list type, and then copy these values: +155555501, +155555502 and +155555503. 
    4. Click **Save**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_vipno1.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_vipno2.png">

3. Click **Add New**.
    1. Select the type “static.”
    2. Enter a new name for the attribute: regularCustomerList.
    3. For **Value**, select the list type, and then copy these values: +155555505, +155555506 and +155555507. 
    4. Click **Save**.

4. Add another static attribute:
    1. Edit the name to be "vipCustomer."
    2. Leave the **Value** type as string, and add the value +155555501.
    3. Click **Save**.

5. Add another static attribute:
    1. Edit the name to be "regularCustomer."
    2. Leave the **Value** type as string, and add the value +155555506.
    3. Click **Save**.

##### Create the routing policy

*“If the customer phone number is in the allow list, send them to vipSkill in Conversational Cloud.”*

1. Navigate to **Dynamic Routing > Intent and Context Policies** using the side navigation panel, and click **Add Policy**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_viprule.png">

2. Edit the name to "VipRule_Static."
3. In **Conditions**, select "custom.vipCustomer" from the dropdown.
4. Select the “Is In” operator.
5. Select “attribute”, and select “custom.vipPhoneNumberList” from the drop-down.
6. In the **Actions** block, in the first dropdown box select “Transfer to a skill”, and then select the “Vip Support” skill from the dropdown (Skills must be created in Conversational Cloud prior to this step).

    {: .important}
    Don’t select the skill used for the Conversation Orchestrator Bot since this would create a circular loop with the policy.
 
7. Click **Save** to save the policy.
8. Add a second policy for routing regular customers by clicking **Add Policy**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_regrule.png">

9. Edit the name to "RegularCustomerRule_Static."
10. In **Conditions**, select “custom.regularCustomer” from the dropdown.
11. Select the “Is In” operator.
12. Select “attribute”, and select “custom.regularCustomerList” from the dropdown.
13. In the **Actions** block, in the first dropdown select “Transfer to a skill”, and then select the “Regular Support” skill from the dropdown. (Skills must be created in Conversational Cloud prior to this step.)
14. Click **Save** to save the policy.

You have created two policies: One for a VIP customer and the other for a regular customer. In this example, you evaluate both using static variables. In later sections, you will retrieve the customer phone number from a session.

##### Test the policies

You will use a standard web entry point to initiate a conversation with the Conversation Builder bot you created, which will use the Conversation Orchestrator policies to route to the desired skill.

**Test the VIP policy**

1. In the policy list in Conversation Orchestrator, click the toggle switch to enable the VipRule_Static policy.

    <img class="fancyimage" width="400" src="img/convorchestrator/co_dr_vipenabled.png">

2. Start a new web messaging conversation using the account ID.
3. Log in to Conversational Cloud using a VIP agent account.
4. Type “Hi” in the messaging window to engage the bot.
5. When asked for a phone number please type +155555501. Please note that at this stage, the policy is using Static variables, so you can actually type anything because the policy is not going to be using your input.

    This should trigger the VIP policy and the conversation should be transferred to a VIP skill.If you are logged in to Conversational Cloud as a VIP Agent, you will now get a ring.

    <img class="fancyimage" width="350" src="img/convorchestrator/co_dr_vipsupport.png">

**Test the regular customer policy**

1. In the policy list in Conversation Orchestrator, click on the toggle switch and **disable** the VipRule_Static policy. **Enable** RegularCustomerRule_Static.

    <img class="fancyimage" width="400" src="img/convorchestrator/co_dr_regenabled.png">

2. Log out of Conversational Cloud, and then log in back using a Regular Agent account.
3. Close the previous conversation, and start a new one.
4. This time, when asked for the phone number, type +155555506. Note that the policy uses static attributes, and at this stage it is not going to use the phone number you have input.

    This should now trigger the Regular Customer policy and the conversation should be transferred to a Regular skill. If you are logged into Conversational Cloud as a Regular Agent, you will now get a ring.

    <img class="fancyimage" width="350" src="img/convorchestrator/co_dr_regsupport.png">

#### Create a simple policy using Conversation Context Service attributes

In the previous example we used Static attributes for everything. While this is a great way to test, in the real world, you will need to use attributes that are dynamically retrieved. In this example, you will pass the phone number using the Conversation Context Service, and then check if the phone number is in a static list.

##### Create the context attributes

You will be using the Conversation Context Service to store a phone number, and then use it in a policy. The Conversation Builder bot template you set up earlier already sets up a new namespace, and stores the phone number in the Conversation Context Service. To learn more about the Conversation Context Service, see [here](conversation-orchestrator-conversation-context-service-overview.html).

##### Create the policies

1. Disable all policies you have previously created by switching off the toggle switches in Conversation Orchestrator.
2. Create a new VIP customer policy by clicking **Add Policy** and entering the following details. Note some must be entered manually since they will not populate on the dropdown menus.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_viprulesession.png">

    This policy is similar to the one we created using static variables, but instead of getting the phone number from a static attribute, you are retrieving this value from the namespace session attribute (myNamespace.phoneNumber). You created the namespace in the Global Functions during “Set Up the Orchestrator Bot.”

    The phoneNumber variable is captured on the question_phonenumber node in RULE_1.

    <img class="fancyimage" width="600" src="img/convorchestrator/co_dr_phonenum1.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_phonenum2.png">

    The phoneNumber variable is then saved to the Namespace in the pre-process code on api_integration_4 (lines 5 and 6).

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_phonenum3.png">

3. Create a new regular customer policy by clicking **Add Policy**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_regrulesession.png">    

4. Enable both policies by clicking on the toggle switches.

##### Test the policies

1. In the policy list in Conversation Orchestrator, disable the RegularCustomerRule_Static and Vip_Static policies.
2. Enable the VipRule_Session and RegularCustomerRule_Session policies.
3. Start a new web messaging conversation using the account ID.
4. Log in to Conversational Cloud using a VIP agent account.
5. Type “Hi” in the messaging window to engage the bot.
6. When asked for a phone number, please type +155555501. This time the policies will use the phone number to check the Vip List and route accordingly.

    This should trigger the VIP policy, and the conversation should be transferred to a VIP skill. If you are logged in to Conversational Cloud as a VIP Agent, you will now get a ring.

7. Log out of Conversational Cloud, and then log in back using a Regular Agent account.
8. Close the previous conversation, and then start a new one.
9. This time, when asked for the phone number, type +155555506.

    This should now trigger the Regular policy, and the conversation should be transferred to a Regular skill. If you are logged into Conversational Cloud as a Regular Agent, you will now get a ring.

#### Using a LivePerson Functions to check VIP status

In the previous example, you checked for the phone number in a static list. Maintaining such a list is cumbersome. You could also use LivePersion Functions to check for VIP status, for example, use a function that calls a CRM backend to check the phone number at run time.

Create and deploy a new [LivePerson function](liveperson-functions-overview.html) that takes a phone number as an input, and then returns true or false based on whether the phone number is for a VIP customer. The function can internally call a CRM backend to check this status.

{: .important}
Creating and deploying a LivePerson function (FaaS function) is beyond the scope of this topic and hence not covered in this topic. For information on this, see [here](liveperson-functions-overview.html).

With the function created and deployed, now add a custom attribute of type “function” in Conversation Orchestrator.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_fxnattr.png">

Add parameters to this function by selecting “attribute”, and then typing myNamespace.phoneNumber. Note that “myNamespace” is the name you used in the Conversation Builder template setup step in the beginning.

##### Create a policy to use the LivePerson function (FaaS function)

1. Create the VIP policy using the FaaS attribute you created in the previous step as shown below, and click **Save**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_vipfaas.png">

2. Create the regular customer policy as shown below, and click **Save**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_regfaas.png">

3. **Disable** the previous policies, and **enable** the ones you just created.
4. You can now test the policies in the same way that you tested previously.

##### Add more context attributes from a bot

The bot template that you used has one basic integration: It asks for a phone number and then stores it in the Conversation Context Service. You can add more context from the bot to use in policies, for example, additional information such as customer name, email, or the NLU intent.

Please see [here](conversation-builder-scripting-functions-manage-the-conversation-context-service.html) to learn about scripting functions inside Conversation Builder.

**To add additional context**

Select the **Custom Code** option on the Phone Number Question, and navigate to **Process User Response**.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_addattr1.png">
<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_addattr2.png">

Edit the code to add more contextual information. The following shows how the phone number is added.

```javascript
var phoneNumber = getVar("phoneNumber");

 botContext.setContextDataForConversation(mavenNamespace, "phoneNumber", phoneNumber);
```

Similarly you can add other attributes, for example, an intent:

```javascript
botContext.setContextDataForConversation(mavenNamespace, "intent", intent);
```

You can now use this in a policy by adding a condition that uses the intent, as shown below. In the following example, the namespace is “myNamespace”.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_addattr3.png">

### Using your own routing bot

Using your own routing bot with Conversation Orchestrator:

1. Create the dynamic agent / skill escalation integrations.
2. Define a namespace and fallback / default skill in Global Functions initialization.
3. Define a function to set your transfer parameters in Global Functions.
4. Set your routing variable.
5. Create your dynamic agent escalation dialog.
6. Create the Ask Maven API call and transfer to the relevant escalation.
7. Create your agent / skill escalation nodes.
8. Create your sample routing policy.
9. Test the Dynamic Routing solution.

#### Create the dynamic agent & skill escalation integrations

Navigate to the **Integrations** tab within your bot.

##### Skill Escalation

Add a new integration, and enter the following information:

* **Integration Name**: TRANSFER_TO_SKILL
* **Integration Type**: LivePerson Agent Escalation
* **Agent Skill Name**: {$botContext.skillName}
* **Agent Skill Id**:	{$botContext.skillId}
* **Message To User**: {$botContext.transferMessage}

Save the integration.
<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_transf_skill.png">

##### Agent Escalation

Add a new integration, and enter the following information:

* **Integration Name**: TRANSFER_TO_AGENT
* **Integration Type**:	LivePerson Agent Escalation
* **Agent Skill Name**:	{$botContext.skillName}
* **Agent Skill Id**: {$botContext.skillId}
* **Agent Id**:	{$botContext.agentId}
* **Message To User**: {$botContext.transferMessage}

Save the integration.
<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_transf_agent.png">

#### Define a namespace and fallback / default skill in Global Functions initialization

Inside your current routing bot, navigate to the **Global Functions**, and add the following code.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_gf_init1.png">

Code:

```javascript
function __initConversation() {
  // Define the Namespace you will access from Orchestrator
  var mavenNamespace = "myNamespace";
  
  // Define the Fallback/Default skill
  // This will be the skill name, SkillId and transfer message used by the bot if no policies are returned by Conversation Orchestrator
  var fallbackSkillName = "**Your_Fallback_Skill_Name***";
  var fallbackSkillId = "***Your_Fallback_Skill_ID***";
  var fallbackMessage = "BLANK_MESSAGE";
  
  // Set our variables to the botContext so we can access them later
  botContext.setBotVariable("accountId", botContext.getLPAccountId(), true, false);
  botContext.setBotVariable("mavenNamespace", mavenNamespace, true, false);
  botContext.setBotVariable("fallbackSkillName", fallbackSkillName, true, false);
  botContext.setBotVariable("fallbackSkillId", fallbackSkillId, true, false);
  botContext.setBotVariable("fallbackMessage", fallbackMessage, true, false);
}
```

#### Define a function to set your transfer parameters in Global Functions

Below the initialization function, add a new function to set your transfer parameters.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_gf_transf_params.png">

Code:

```javascript
function setTransferParameters(agentId, skillId, skillName, transferType) {
  // This function recieves our Transfer Parameters and sets them if available.
  // If they are not available the Transfer Parameters will be set to 
  // the Fallback/Default Skill Defined in __initConversation()
  var fallbackSkillId = botContext.getBotVariable("fallbackSkillId");
  var fallbackSkillName = botContext.getBotVariable("fallbackSkillName");
  var setAgentId = agentId ? agentId : null;
  var setSkillId = skillId ? skillId : fallbackSkillId;
  var setSkillName = skillName ? skillName : fallbackSkillName;
  var setTransferMessage = transferType ? 'BLANK_MESSAGE' : botContext.getBotVariable("fallbackMessage");
  var setTransferType = transferType ? transferType : 'TRANSFER_TO_SKILL';

  // Set our variables to the botContext
  botContext.setBotVariable('agentId', setAgentId, true, false);
  botContext.setBotVariable('skillId', setSkillId, true, false);
  botContext.setBotVariable('skillName', setSkillName, true, false);
  botContext.setBotVariable('transferMessage', setTransferMessage, true, false);
  botContext.setBotVariable('transferType', setTransferType, true, false);

  // Debug Log Messages
  botContext.printDebugMessage("agentId:: " + setAgentId);
  botContext.printDebugMessage("skillId:: " + setSkillId);
  botContext.printDebugMessage("skillName:: " + setSkillName);
  botContext.printDebugMessage("transferType:: " + setTransferType);
  var userId = botContext.getUserPlatformId();
  botContext.printDebugMessage('The userPlatformId = ' + userId);
  var personalInfo = botContext.getLPUserPersonalInfo();
  botContext.printDebugMessage('PERSONAL INFO:'+personalInfo);
  var customerInfo = botContext.getLPCustomerInfo();
  botContext.printDebugMessage('CUSTOMER INFO:'+customerInfo);
}
```

We will be using some quick get and set functions for botContext Variables, so also add this to Global Functions:

```javascript
// Quick Get and Set Functions for Variables
function getVar(key) {
  return botContext.getBotVariable(key);
}
function setVar(variableName, variableValue){
  botContext.setBotVariable(variableName, variableValue, true, false);
}
```

#### Create your dynamic agent escalation dialog

The dynamic escalation dialog will consist of:

* A dialog starter
* A node with the Ask Maven Api call (populating the transfer parameters)
* A node to escalate to the skill
* A node to escalate to the agent

For testing, we will trigger the dialog starter with the pattern “agent”.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_agent_esc_dialog1.png">
<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_agent_esc_dialog2.png">

#### Create the Ask Maven API call and transfer to the relevant escalation

{: .important}
As this interaction makes the dynamic routing decision, all the dialog endpoints that will escalate to an agent need to be directed here.

Create a text interaction, and set the text to BLANK_MESSAGE.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_askmavencall.png">

In the Pre-Process Code, add the following code:

```javascript
// Get the ConversationId and the CustomerId for the askMaven API call
var convId = getVar("conversationId");
var customerInfo = botContext.getLPCustomerInfo();
if(customerInfo){
    var customerId = customerInfo.customerId;
    botContext.setBotVariable("customerId",customerId,true,false);
}

// Make the askMaven Request and save the response as a Json
var mavenRecommendations = botContext.askMaven(convId,customerId,"");
var data = JSON.parse(mavenRecommendations);
botContext.printDebugMessage("Maven Recommentdations:: " + mavenRecommendations);

// Create a Custom Event log for bot analytics
botContext.logCustomEvent(botContext.getCurrentUserMessage(), "Ask Maven","Ask Maven was called for namespace '"+ getVar("mavenNamespace") + "' for account '" + getVar("accountId") + "' ("+ convId + ")");

// Set all the transfer parameters to null
var agentId = null;
var skillId = null;
var skillName = null;
var transferType = null;

// Check if the askMaven Call returned a match
if(!data.noMatchReason) {
  // Get the actions recommended by Orchestrator
  var actions = data.rule.actions;
  for (var action in actions) {
    // Determine the action type
    var type = actions[action].type;
    // Use the action type to assign the local transfer parameters
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
}
// Set the Transfer Parameters using the Global Function
setTransferParameters(agentId, skillId, skillName, transferType);
```

In the Post-Process Code, add the following code:

```javascript
// Get the Transfer Type variable
var transferType = getVar("transferType");

// Use the Transfer Type Variable to progress to the correct escalation
if (transferType) {
  switch (transferType) {
    case "TRANSFER_TO_AGENT":
      botContext.setTriggerNextMessage("TRANSFER_TO_AGENT");
      break;
    case "TRANSFER_TO_SKILL":
      botContext.setTriggerNextMessage("TRANSFER_TO_SKILL");
      break;
    default:
      log("Policy had a transfer-type other than skill or agent defaulting to Skill.");
      break;
  }
}
```

#### Create the agent / skill escalation nodes

Create an integration interaction, and assign it to the TRANSFER_TO_SKILL integration that you created. Ensure you rename the node to TRANSFER_TO_SKILL.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_node_skill.png">

Create an integration interaction, and assign it to the TRANSFER_TO_AGENT integration that you created. Ensure you rename the node to TRANSFER_TO_AGENT.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_node_agent.png">

#### Set your routing variable
Next, capture a variable in the Conversation Context Service, so you can leverage it later for routing.

Navigate to where you would like to set the variable that you will use to route to the complaints team. In this case, you will trigger the dialog using the pattern “complaint”.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_complaint_ds.png">

You will be setting a variable called “agentSkillRequired” in the Namespace, so you can route these conversations to a dedicated Complaints skill.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_complaint_var_assign.png">

In the Pre-Process Code, add the following code:

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_complaint_code.png">

Code:

```javascript
// Get your Namespace variable and then Check the Namespace is registered
var mavenNamespace = getVar("mavenNamespace");
var success = botContext.registerContextNamespace(mavenNamespace);
botContext.printDebugMessage("Maven registerContextNamespace:: " + success);

// Get the Variable you would like to save to the Namespace
var agentSkillRequired = 'Complaints';
// Set the Variable in the Namespace
botContext.setContextDataForConversation(mavenNamespace, "agentSkillRequired", agentSkillRequired);

// Set the conversationID to botContext
var convId = botContext.getConversationId();
setVar("conversationId", convId);

// Log a custom event for your bot analytics
botContext.logCustomEvent(botContext.getCurrentUserMessage(), "Maven Session Store","Maven Session Store was called for namespace labelled '"+ getVar("mavenNamespace") + "' for account '" + getVar("accountId") + "' ("+ convId + ")");
```

#### Create your routing policy
Now you can create a routing policy to check if the variable: myNamespace.agentSkillRequired is Complaints, and if so, route to the Human_Complaint Skill. Anything else will go to your fallback/default skill Human.

Navigate to **Conversation Orchestrator > Dynamic Routing > Intent & Context Policies**.

<img class="fancyimage" width="300" src="img/convorchestrator/co_dr_comenu.png">

Add a policy called “Complaints Routing”.

In the **Conditions** section:

* Set the **Attribute** to: myNamespace.agentSkillRequired
* Keep the check as:	=
* Keep the **Value Type** as:	String
* Set the **Value** to: Complaints

In the **Actions** section:

* Set the **Action** to: Transfer to skill
* Set the **Skill** to:	*Your Complaints Skill*

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_crpolicy.png">

Finally, enable the policy using the toggle.

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_crpolicy_enable.png">

#### Test the policy
You will use a standard web entry point to initiate a conversation with the Conversation Builder bot that you created, which will use the Conversation Orchestrator policies to route to the desired skill.

##### Test the Complaints policy
In the policy list in Conversation Orchestrator, ensure the Complaints Policy is enabled.

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_testpolicy1.png">

1. Start a new web messaging conversation using the account ID.
2. Log in to Conversational Cloud using a Complaints agent account.
3. Type “complaint” in the messaging window to engage the bot down our chosen dialog.

    This should trigger the Complaints policy, and the conversation should be transferred to the Complaints skill. If you are logged in to Conversational Cloud as a Complaints Agent, you will now get a ring.

    <img class="fancyimage" width="300" src="img/convorchestrator/co_dr_testpolicy2.png">

##### Test the Standard Fallback routing
Now test a conversation that doesn’t trigger the complaint routing.

1. Start a new web messaging conversation using the account ID.
2. Log in to Conversational Cloud using a Standard agent account.
3. Type “agent” in the messaging window to engage the bot directly to the dynamic routing dialog.

    This should not trigger a policy and the conversation should be transferred to the Fallback skill. If you are logged in to Conversational Cloud as a Standard Agent, you will now get a ring.

    <img class="fancyimage" width="300" src="img/convorchestrator/co_dr_testpolicy3.png">

### Using Conversation Orchestrator outside of Conversational Cloud
This section of the documentation assumes that you are already familiar with linking third-party bots to Conversation Cloud. If not we strongly suggest that you read the documentation that's [here](third-party-bots-getting-started.html). 

Once your third-party bot is ready, you can [set up routing policies](conversation-orchestrator-dynamic-routing-creating-and-managing-policies.html) on Dynamic Routing and leverage the [Recommendations API](conversation-orchestrator-recommendation-api-overview.html) to receive routing recommendations. You need to handle transfers appropriately within your third-party bot in the appropriate channel. Third-party bots can use the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) to read or write contextual information that can be leveraged for dynamic routing or even bot-to-bot communication.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_co_outside_cc.png">

{: .important}
Before you start, please make sure you have enabled the Conversation Context Service.
and the Recommendations API. Information on how to do this is provided earlier on in this topic.

#### Example using Recommendation API from Google DialogFlow

##### Get the conversation ID

The conversation ID is required for using the Recommendation APIs. This ID is used by the policy to retrieve conversation and Conversation Context Service parameters.

Inside Dialogflow Fulfillment, modify the sample code for the event handler for each request.

Inside the request event handler function (i.e., the `functions.https.onRequest`), you can get the conversationId as the last part of the `request.body.session` string after the last /.

In the following `request.body.session` example string, ea15cd3f-561d-4acf-90ae-5eb14145d38d is the conversationId.

`projects/appointmentscheduler-69117/agent/sessions/ea15cd3f-561d-4acf-90ae-5eb14145d38d`

You can get the Conversational Cloud conversationId with this line of JavaScript code:

```javascript
request.body.session.substring(request.body.session.lastIndexOf("/") + 1);
```

For debugging, you can see the logs by clicking the link **View execution logs in the Firebase console** inside the Dialogflow Fulfillment page.

##### Call the Conversation Context Service APIs

Click `package.json` to include your favorite Node.js HTTP library. In the example, we include the axios HTTP library.

The Conversation Context Service is useful for storing any context information gathered in a bot that you might want to use in a routing policy. For instance, you might want to set the intent detected by a bot and then use it for any routing policy.

```javascript
const contextUrl = 'https://z1.context.liveperson.net/v1/account/55884191/namespace1/' + conversationId + '/properties';
 
var data = {
   'key1': 'val1',
   'key2': 'val2',
   'time': Date.now()
};

axios.patch(
   contextUrl, 
   data, 
   { headers: { 'Content-Type': 'application/json', 'maven-api-key': <MAVEN_API_KEY> } }
);
```

##### Call the Recommendation API

Now that you have the conversation id, use it to call the Recommendation API as follows:

```javascript
const askMavenUrl = 'https://z1.askmaven.liveperson.net/v1/account/55884191/next-actions';
 
axios.get(
   askMavenUrl, 
   { headers: { 'Content-Type': 'application/json', 'maven-api-key': <MAVEN_API_KEY> } }
).then(function(response){
   const rule = response.rule;
   if (rule && rule.actions) {
      // You can inspect the actions and do something according to the actions
      //   e.g. transfer to an agent or skill, or send back a message.  
      //        Here we just log the actions to the console.
      console.log(rule.actions); 
   }
});
```

For more information on using the Recommendations API, see [here](conversation-orchestrator-recommendation-api-overview.html).