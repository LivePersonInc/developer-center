---
pagename: Creating and Managing Policies
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-creating-and-managing-policies.html
indicator: messaging
---

### Introduction

The Policy management interface provides the UI to create your Dynamic Routing policies. Policies contain conditions and actions. Conditions can be configured using attributes, logical operators and values. Some attributes, like conversation attributes and authenticated SDEs, are directly available for routing. Developers are required to use the Conversation Context Service to leverage other attributes or custom data for routing. Actions can be configured to transfer to skills or agents, or even to send messages. The interface allows users to enable/disable and prioritize policies. 

To start creating policies, navigate to **Intent & Context Policies** under the **Dynamic Routing** section of Conversation Orchestrator. Here, you can view an **Intent & Context Policy Usage** dashboard highlighting which policies have been used for a given timeframe and see which are the most used policies for your account. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policyusage.png">

Underneath the **Policy Usage** section is the **Manage policies** section, where you can create and manage the policies for the account. Each policy is made up of two different elements:

* *Conditions*, where you define the rules for when you want the policy to be triggered
* *Actions*, the definition for what is sent back to the bot via the Recommendation API

In the next sections, we’ll dive deeper into how to configure each element to enable dynamic routing. Additionally, we’ll discuss how you can manage and prioritize your policies.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_managepolicies2.png">

### Conditions

Selecting the **Add Policy** button enables you to create a new policy. Every policy should have a descriptive name, typically tied to the attribute that you are basing your routing decision off of (e.g., an intent or SDE name).

#### How to configure conditions

Each condition is built using four form fields to configure when the policy is triggered. The four fields are:

* The *Attribute* the policy is looking at
* The *Logical Operator* used to compare the attribute and its value
* The *Data Type* of the expected value of the attribute
* The *Value* that the attribute returns

Taken together, these four fields are a logical statement. If the statement returns true, the policy will be triggered and return an action to the service that has called the Recommendation API. To add more complex logic, multiple conditions can be added to any policy. However, all conditions must be satisfied for a policy to trigger its action.

#### Attributes

Attributes for policies can come from several different sources:
 
* Conversational attributes
* Custom attributes, which are either set to static values or dynamically updated using * LivePerson Functions
* Conversational Context Service attributes (including intents)
* Structured Data Entities (SDEs)

##### List of attributes directly available

Conversational attributes are automatically provided as options in the attribute selector when creating your conditions. These attributes allow you to create policies based on common conversation values, such as skill or agent IDs. The list of all conversation context attributes is as follows:

* conversation.minutesSinceStartConversation
* conversation.minutesSincePreviousMessage
* conversation.previousAgentId
* conversation.currentSkillId
* conversation.previousSkillId
* conversation.conversationId
* conversation.consumerId
* conversation.groupId

Each of these attributes are populated in the “Choose an attribute” dropdown for easy selection.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_attributes1.png">

Similarly, supported SDEs are provided in the same “Choose an attribute” dropdown. For a full listing of supported SDEs and how to use them, see [here](conversation-orchestrator-dynamic-routing-routing-conversations-by-sdes.html).

##### Adding attributes to the CCS from Dynamic Routing

Custom static attributes for routing policies can be manually added to the Conversation Context Service (CCS) using the **Custom** section of the **Conversation Context Service**. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_attributes2.png">

These custom attributes can be a variety of data types, whether string, number, list, or even JSON, enabling you to define and use your own data (e.g., a list of names or emails).

Once created, the custom attributes are available from within your policy in the “Choose an attribute” dropdown as “custom.attributeName”. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_attributes3.png">

Additionally, conversation-scoped context variables set using Conversation Builder functions or the REST API can be used by manually entering the namespace and property name (e.g., myNamespace.property). Please see [here](conversation-orchestrator-dynamic-routing-routing-conversations-by-intents.html) for more information on how to set and use these properties in your policies.

##### Using LivePerson Functions to get dynamic attributes

LivePerson Functions can be used to create more dynamic attributes to base policies off of. When adding a new custom attribute, click the dropdown under **Type** to change from the default **static** to **function**. Doing so generates a new section that allows you to pick from a list of your deployed functions on an account. Additionally, provide a payload to the function to pass other custom attributes, SDEs, other context session store variables, or any static data into your function for a truly dynamic result.  

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_usefxn1.png">

Add custom functions as attributes in your conditions in the same way that you add static custom attributes, discussed above. The return value of the function will be used to compare against the value of the condition. If there is a match, the action will be triggered.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_usefxn2.png">

Functions can be used to integrate with external data sources, i.e., getting data from external systems or even calling external APIs. For more details, see [here](conversation-orchestrator-conversation-context-service-attributes.html#getting-attributes-through-functions). 

{: .important}
Keep in mind that this function will be invoked every time the [Recommendations API](conversation-orchestrator-recommendation-api-overview.html) is called, and that each invocation of a LivePerson Function counts toward the Fair Use Quota provided for your account. 

#### Operators

When constructing your conditional statements, there are several operators available for you to make your comparisons. These are shown below.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_operators.png">

The operator that you choose can determine the data type of the value that you will be comparing to your initial attribute. For example, if you choose a less than (<) operator, the data types available in the dropdown are limited to **number** or **attribute**. The **Is in** and **Contains** operators are similarly designed to only work with specific data types. **Is in** expects the comparison value to be an array or list; it checks if the initial attribute in the condition is contained within that collection. **Contains** expects the comparison value to be a string, matching if the initial attribute is within the string provided.

### Actions

When a policy is triggered and the conditions within are evaluated to true, an *Action* is returned as a response. An action is a stringified JavaScript object that, when received by Conversation Builder, can be parsed and acted upon to direct the next action taken by the bot, whether that be to send a message or to transfer to a specific agent or skill.

#### How to add actions

Actions are created directly underneath the conditions editor when creating a new policy. Similarly to conditions, there are multiple parts required when creating a new action:

* The *Action Type* (Send message / Transfer to skill / Transfer to agent)
* The *Value Type* (depending on the action type, either a string, attribute, skill, or agent)
* The *Value* (The message, skill, or agent information sent back to the bot)

Once all sections of both the Condition and the Action are completed, the policy can be saved and added to the list of policies for the account.

#### Different types of actions

##### Transferring to skills

Selecting the **Transfer to skill** action type generates a dropdown list of all the skills on the account in the **Value** section of the Actions form. This simplifies the process, by allowing you to simply select the skill from the list as opposed to manually entering in the Skill ID.

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_actiontypes1.png">

Alternatively, you can choose to send an attribute value as well using the **Transfer to skill** action type. 

When received by the bot, the action is a JSON object in the following format. This object can then be parsed, passing the returned skill ID to a transfer interaction.

```
{
   "rule":{
      "id":"2b277517-c00f-43d4-ab70-5d62b72f9c74",
      "name":"testFunc",
      "actions":[
         {
            "type":"TRANSFER_TO_SKILL",
            "payload":{
               "skillId":"2438093730"
            }
         }
      ]
   }
}
```

##### Transferring to agents

Selecting the **Transfer to agent** action type generates a dropdown list of all the agents on the account in the **Value** section of the Actions form. This simplifies the process by allowing you to simply select the agent from the list, as opposed to manually entering the agent ID.

Additionally, when using the **Transfer to agent** action type, you have an option to include a fallback skill. This fallback skill is used in the event that the agent is unavailable to receive the transfer. Selecting the fallback skill is an optional feature, and doing so mirrors the dropdown experience in the Transferring to skills section above.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_actiontypes2.png">

When received by the bot, the action is a JSON object in the following format. This object can then be parsed, passing the returned agent or skill ID to a transfer interaction.

```
{
   "rule":{
      "id":"2b277517-c00f-43d4-ab70-5d62b72f9c74",
      "name":"testFunc",
      "actions":[
         {
            "type":"TRANSFER_TO_AGENT",
            "payload":{
               "userId":2737100930,
               "skillId":"2737078830"
            }
         }
      ]
   }
}
```

##### Sending messages

Selecting the **Send message** action type is the most flexible, allowing the developer to manually input their own string to be sent back to the bot and processed. Alternatively, a custom attribute, SDE, or other conversation context variable can be sent by selecting from the provided dropdown. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_actiontypes3.png">

When received by the bot, the action is a JSON object in the following format. This object can then be parsed, passing the message to an interaction or acting on the results within the bot JavaScript.

```
{
   "rule":{
      "id":"2b277517-c00f-43d4-ab70-5d62b72f9c74",
      "name":"testFunc",
      "actions":[
         {
            "type":"SEND_MESSAGE",
            "payload":{
               "message":"testFunc policy returned true"
            }
         }
      ]
   }
}
```

As with Conditions, multiple actions can be sent with a single policy. The “actions” property of the rule is an array, and additional actions will be added to it and can be iterated through to provide flexibility in the actions taken by your bot.

### Managing policies

When creating a new policy, that policy is added to the bottom of the list in a **disabled** status. Each policy from within the list can be selected to show more details to the right. Additionally, selecting a policy allows you to either edit or delete that policy. 

#### Enabling or disabling policies

Each policy in the list will include the name and a toggle to signify if it is enabled or not. Policies with a disabled status will not be evaluated when the [Recommendations API](conversation-orchestrator-recommendation-api-overview.html) is called. To enable or disable policies, simply select the toggle button to switch its status.

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_enabledisable.png">

#### Prioritizing policies

Policies are prioritized using a top-down approach, meaning that the first policy in the list that evaluates to true will be the only policy which has its actions sent to the bot. This means that the order in which they are listed is extremely important and that policies farther down the list that might have its conditions met will not be triggered if policies above it are triggered first. To prioritize the list of policies, select a policy and use the up or down arrows to move it up or down the list.

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_prioritize.png">
