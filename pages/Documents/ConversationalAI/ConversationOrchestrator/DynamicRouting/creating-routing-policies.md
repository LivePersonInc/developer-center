---
pagename: Creating Routing Policies
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-creating-routing-policies.html
indicator: messaging
---

### Introduction

Routing policies can be created in the dynamic routing policy management interface inside the Conversation Orchestrator application. Multiple policies with different conditions can be added, and, during the routing step, all policies are evaluated and the matching policy ends up routing the conversation. 
 
Policies contain conditions and actions. Conditions can be configured using attributes, logical operators and values. Some attributes, like conversation attributes and authenticated SDEs, are directly available for routing. Developers can also create custom attributes and can leverage dynamic attributes from the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). 
 
Actions can be configured to transfer to skills or agents, or even to send messages.
 
### Create a policy
 
To start creating policies, launch Conversation Orchestrator either from the Dynamic Routing interaction or from the applications menu in the lower-left corner in Conversation cloud. Then navigate to **Manage Policies**. Here you can see the list of existing policies. By clicking on the policies, you can see the details of conditions and actions.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate1.png">

To create a new policy, click **Add Policy**. Once you do so, you are prompted to enter a name and add conditions and actions. Please ensure the name is descriptive of the functionality so you can easily identify this policy later.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate2.png">

### Try your first routing policy with the Dynamic Routing bot

If you have set up the Dynamic Routing bot, you are just a few steps away from trying out your first routing policy.
 
The Dynamic Routing bot includes a very simple use case where a consumer can be asked for their phone number and can be routed to specific skills or agents based on their response. Perform the following steps to test this flow.
 
#### Step 1: Design the flow in the bot 
For the purpose of this example, this has already been done for you. The bot includes a flow where the end consumer is asked for a phone number. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate3.png">

##### Step 2: Capture user input into the Conversation Context Service
For the purpose of this example, this has already been done for you. Click the interaction “COLLECT_PHONE_NUMBER,” and observe the code under **Process User Response**.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate4.png">

In this example, the user input is captured into the Conversation Context Service in a variable “phoneNumber” in a default namespace called “orchestrator”. To learn about these functions, please first learn about the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) and the [Conversation Context Service scripting functions](conversation-builder-scripting-functions-manage-the-conversation-context-service.html).
 
The default namespace is configured in **Global Functions**, and you are free to change it to whatever name you want. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate5.png">

#### Step 3: Create your policy

In the Dynamic Routing interaction, click **Manage routing policies** to go to the Policy Management interface.

<img class="fancyimage" width="600" src="img/convorchestrator/co_dr_policiescreate6.png">

Then click **Add Policy** to create your first policy.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate7.png">

#### Step 4: Add the condition
Choose your attribute, the operator and values.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate8.png">

Here you type the variable name “orchestrator.phoneNumber”, choose “IN” as the operator, and check to see if it's in a “list” containing values 1111, 2222, 3333 and 4444.
 
{: .important} 
“namespace.variableName” is the way to leverage context variables for creating routing policies. 

#### Step 5: Configure your action to transfer to a skill
Here you pick SeattleEmployeeSkill from the available list of skills. Make sure to have the skill mapped to a human-user and have that user log in to see if routing works. For this example, assume that “SeattleEmployeeSkill” has one single human user “Agent Bob.”

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate9.png">

#### Step 6: Save your policy and enable it

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policiescreate10.png">

#### Step 7: Deploy and test
You can test your setup on the web client emulator. For details, see [here](conversation-orchestrator-dynamic-routing-testing-with-the-web-emulator.html). 

Alternatively, to test, you can deploy the bot, and connect it to a campaign that’s linked to your production/staging channel of your choice. For this setup, please refer to [Getting Started](conversation-orchestrator-dynamic-routing-getting-started.html).

Follow these steps once you have configured your testing setup.

<img class="fancyimage" width="250" src="img/convorchestrator/co_dr_policiescreate11.png">

Start by saying “Hi”. 
 
When prompted by the routing bot, provide the phone number "1111". This is when the Dynamic Routing interaction evaluates all your policies to make the routing decision.
 
The conversation will be routed to the skill SeattleEmployeeSkill. A specific agent within the skill will be picked. For this example, it will be routed to Agent Bob if you have configured Agent Bob to be the only user who maps to SeattleEmployeeSkill.

### More about conditions

While defining conditions, you need to select an attribute and compare it against a value.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_cond1.png">

In this example, the attribute “sde.visitorinfo.customerinfo.role” is being compared to the string “admin”. 

You can add multiple conditions per policy by clicking **+ Add Condition**. Every subsequent condition gets appended as an And.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_cond2.png">

Attributes can come from various sources. Some, like SDEs or conversation attributes, are directly available whereas dynamic data from bots, agents or external systems can also be leveraged by using the Conversation Context Service.

The interface also allows you to create custom attributes for complex conditions like comparing against a list or evaluating a function to retrieve an attribute at run time.

These topics are discussed in more detail below.

#### Using directly available attributes

These include the conversation attributes as shown below and [SDEs](conversation-orchestrator-dynamic-routing-routing-conversations-by-sdes.html):
* conversation.minutesSinceStartConversation
* conversation.minutesSincePreviousMessage
* conversation.previousAgentId
* conversation.currentSkillId
* conversation.previousSkillId
* conversation.conversationId
* conversation.consumerId
* conversation.groupId
 
All the above attributes are directly available, and you just need to configure your routing bot correctly to start routing.
 
The example below shows a policy that transfer to a skill if minutes Since Previous Message > 2.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_attr1.png">

#### Getting dynamic data using the Conversation Context Service

The [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) provides a way to get data from internal and external data sources. The unique namespace > group > key value structure makes it easy for developers to pass in dynamic attributes that can be leveraged for dynamic routing. The Conversation Context Service can be leveraged in multiple ways depending on where we need to get data from.
 
##### Collecting data from bots within Conversational Cloud

When collecting data from routing bots within Conversation Cloud, use the JavaScript wrapper functions.

The example below shows how to set a property “intentThreshold” within a namespace “airlineTicketingBot”. Variables need to be set into the Conversation Context Service prior to the dynamic routing step. This could be in the Pre-process, Post-process, or Process User Response code sections of any interaction within the bot.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_jscode1.png">

The property can be used in any routing policy using the standard naming convention. 

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_dataincc.png">

##### Collecting data from bots or automations outside of Conversational Cloud

In this case, use the Conversation Context Service REST APIs. Depending on your platform, you can use Conversation Context Service [v1](conversation-orchestrator-conversation-context-service-methods-v1.html) or [v2](conversation-orchestrator-conversation-context-service-methods-v2.html). 
 
This method is usually used for setting customer’s preference data from external CRMs. In this case, the “group” or sessionId used in the Conversation Context Service payload would be customerId.
 
Context Service v1: 

```bash
PATCH /v1 /account /le12345678/airlineNameSpace /85d25bb7-977b-462c-925b-b7977b462c9d/properties /Payload
{ "preferences": ["aisle", "vegetarian", "business-class"] }
```

Context Service v2: 

```bash
PATCH  /v2/context/document/create
{
  "accountId": "le12345678",
  "nameSpace": "airlineNameSpace",
  "sessionId": "85d25bb7-977b-462c-925b-b7977b462c9d",
  "ttlSeconds": 3600,
  "payload": { 
    "preferences":["aisle", "vegetarian", "business-class"]
  }
}
```

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_dataoutsidecc.png">

#### Using custom attributes

You can add custom attributes from the Conversation Context Service interface in Conversational Cloud as shown below.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_customattr1.png">

These custom attributes can be static or contain a [Liveperson function](liveperson-functions-overview.html).

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_customattr2.png">

**Static custom attributes**

You can create attributes of type setting, Boolean, list, JSON and number. Below is an example that shows a routing policy that uses a static custom attribute to compare a phone number against a list of phone numbers.
 
**Step 1**: Define the static custom attribute.
The custom attribute here contains a list of phone numbers

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_staticattr1.png">

**Step 2**: Use the static custom attribute in your policy.
Here we are checking if the user input is in the list.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_staticattr2.png">

**Liveperson Functions-based custom attributes**

[LivePerson Functions](liveperson-functions-overview.html) can be used to evaluate custom logic to retrieve dynamic attributes for routing. Below is an example that shows a routing policy that uses a function custom attribute to compare a customer’s VIP status against the data that is retrieved using a Liveperson function.
 
**Step 1**: Define the LivePerson Functions-based custom attribute.
The custom attribute here retrieves the VIP status from a FAAS function that performs some custom logic.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_lpfunction1.png">

**Step 2**: Use the LP Functions-based custom attribute in your policy.

The sample function shown above, getCustomerDataFromCRM, takes consumerId as an argument and contains the logic to call the external API or system to retrieve the data. This is just an example; LivePerson Functions allow developers to write any custom logic.

Please familiarize yourself with [LivePerson Functions](liveperson-functions-overview.html) to use this capability. 
 
Using the LivePerson Functions-based custom attribute in a policy:

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_lpfunction2.png">

Functions can be used to integrate with external data sources, i.e., getting data from external systems or even calling external APIs.
 
{: .important}
Keep in mind that this function is invoked every time the call to Dynamic Routing is made, and that each invocation of a LivePerson Function counts toward the Fair Use Quota provided for your account.
 
### Operators

When adding conditions, there are several conditional operators that can be used for comparisons (<, >, = etc) and inclusions (IN, Contains).

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_operators1.png">

The chosen operator automatically determines the data type of the value. For example, (<) operator expects a number or attribute, Is in expect lists and Contains expects a string.

### More about actions

Policies can trigger the following actions:
* Transferring to a Skill
* Transferring to an Agent
* Sending a Message
 
When choosing to transfer to a skill/agent you can pick from the available list of skills/agents.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_actions1.png">
 
Or, dynamically pass the skill id/agent id. Set the drop down in the middle to “attribute” and pick from the available list of attributes.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_actions2.png">

When intending to send a message, just type the required text in the input box. Alternatively, you can also send attributes. **Note**: At this time, you cannot directly send rich messages from Dynamic Routing. If you want to send rich messages, please transfer to a bot that can do this.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_actions3.png">

This message is sent on behalf of the Routing bot. Once a message is sent, the conversation is transferred to the fallback skill that is configured. 

