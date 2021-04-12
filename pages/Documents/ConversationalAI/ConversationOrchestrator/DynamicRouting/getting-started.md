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

