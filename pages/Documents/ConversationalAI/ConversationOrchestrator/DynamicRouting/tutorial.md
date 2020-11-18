---
pagename: Tutorial
redirect_from:
  - maven-ai-powered-routing-tutorial.html
  - maven-ai-ai-powered-routing-tutorial.html
  - maven-ai-dynamic-routing-tutorial.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-tutorial.html
indicator: messaging
---

## Introduction

This document walks through an example to create a policy using Conversation Orchestrator and using it for routing to a skill. 

The examples provided here start with a simple implementation, using static attributes (hard coded values), and then add more complexity such as using the Conversation Context Service, LivePerson functions, and Conversation Builder integration. This tutorial will help you understand the high level concepts and create basic building blocks on which you will be able to create more complex solutions. 



### Example Policy

Let’s start with a policy we want to build. 

“Route a VIP customer to a VIP skill, and a regular customer to a general skill” 

## Using a Policy with Conversation Builder

### Overview

In this tutorial we will use the Conversation Builder template that is prewired with Conversation Orchestrator and the Conversation Context Service.

<img class="fancyimage" width="750" src="img/maven/cb-template.png">

A CB bot will handle the incoming consumer message, and then use Conversation Orchestrator routing policies to route the customer to a VIP agent or Regular Customer Agent. Setting up the CB bot in the beginning will allow you to test the scenarios end to end. 

### Import Conversation Orchestrator CB Bot template and setup

#### Import the CB Bot Template

1. In Conversational Cloud navigate to Conversation Builder and then click New Bot

    <img class="fancyimage" width="750" src="img/maven/cb-page.png">

    <img class="fancyimage" width="750" src="img/maven/cb-buttons.png">

2. Choose the Conversation Orchestrator CB Bot template from the Bot Template Menu

    <img class="fancyimage" width="750" src="img/maven/cb-choose-bot.png">

3. The template is pre-wired with the following integrations

    a. A simple welcome intent
    
    b. A question that asks basic customer information (e.g. a phone number)

    c. Integration to Conversation Context Service

    d. Integration to Dynamic Routing 
    
    e. Based on policy action the bot can then perform the following: transfer to an agent, transfer to a skill, or send a message 

4. Once we have set this up with Conversation Orchestrator and Conversation Context Service, the following happens
  
    a. The conversation starts with a Welcome intent, for example “hi”

    b. The bot then asks the customer for a phone number

    c. The phone number is stored in Conversation Context Service

    d. Conversation Orchestrator evaluates policies based on the phone number (whether phone number is in a VIP list or a Regular Customer List)

    e. Bot transfers the conversation to a skill or agent based on the policy outcome 

#### Setup the bot

1. Open the bot. On the top navigation click on Global Functions and edit the following fields. Use the following values based on which zone your account is hosted:

    <img class="fancyimage" width="750" src="img/maven/cb-global-fns.png">

    a. mavenNamespace: The Conversation Orchestrator namespace is used for organizing a set of attributes you may want to use in a policy. See [Conversation Context Service](maven-ai-context-warehouse-context-session-store.html) for more information on how this works. 

    i. Please enter myNameSpace. You will use this name in a routing policy. 

    ii. Note: Conversation builder is already integrated with the Conversation Context Service. You can manage the Conversation Context Service from inside Conversation builder using [scripting functions](conversation-builder-scripting-functions-manage-the-conversation-context-service.html).

2. [Deploy the bot in Conversational Cloud](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html)

    a. See next step for how to setup a skill in Conversational Cloud to accent the incoming conversations.

3. Setup an optional Fallback Skill by editing these values. This will be the fallback skill the conversation will be routed to incase there is some failure in Dynamic Routing logic.

   a. fallbackSkillName

   b. fallBackSkillId

   c. fallbackMessage


### Setup Conversational Cloud

1. Create a skill for the conversation (e.g. Conversation_Orchestrator_Routing_Bot), and assign the bot user ID to this skill

2. Setup a Conversational Cloud campaign to direct incoming conversations to this skill. All incoming conversation will now be picked up by the bot. 

3. Setup a Vip Agent Skill (e.g. Vip Support) 

    a. Add agents (e.g. VIP Agent) and them assign to both Vip Support

4. Setup a Regular Agent skill (e.g. Regular Support)

    a. Add agents (e.g. Regular Agent) and them assign to Regular Support skill

5. Save the skill and agent ids to be used with policy

6. See [documentation](admin-settings-skills-groups-set-the-agent-group-hierarchy.html) on further details on managing users and skills in Conversational Cloud


## Create a simple policy using Static Context Attributes

When starting to build your first policy, it is often easy to use static attributes at first. This is much like hard coding some logic writing your first Hello World example. Once you have been able to execute this using hard coded values, then we will replace them with programmatically retrieved attributes. 

In this example we will create and use static attributes. To check if a customer is a VIP we will use a list of phone numbers, and see if the customer’s number is in that list. 

### Create Context Attributes

1. Login to Conversation Orchestrator using your LPA or Admin Credentials, and then navigate to Conversation Context Service / Custom. 

    <img class="fancyimage" width="750" src="img/maven/workspace-custom.png">

2. Click on Add New, 

    a. Select the type static
    
    b. Type a new name for the Attribute - vipPhoneNumberList
    
    c. In the Value, select List type and then copy these values +155555501, +155555502, +155555503. Click Save. 


    <img class="fancyimage" width="750" src="img/maven/workspace-custom-values.png">

3. Click on Add New

    a. Select the type static
    
    b. Type a new name for the Attribute - regularCustomerList
    
    c. In the Value, select List type and then copy these values +155555505, +155555506, +155555507. Click Save. 

4. Add another static attribute

    a. Edit the name to be vipCustomer

    b. And add the value +155555501

    c. Click save

5. Add another static attribute

    a. Edit the name to be regularCustomer

    b. And add the value +155555506

    c. Click save

### Create Routing Policy

“If customer phone number is in the allow list, send them to vipSkill in Conversational Cloud”.  

1. Navigate to Intent and Context Policies and then click Add Policy. 
 
    <img class="fancyimage" width="750" src="img/maven/workspace-viprule-static.png"/>

    a. Edit the name to VipRule_Static
  
    b. In Conditions select custom.vipCustomer from the drop down
    
    c. Select the Is In operator
    
    d. Then select attribute and custom.vipPhoneNumberList from the drop-down
    
    e. In the Actions block in the first drop-down box select Transfer to a skill, and then select the Vip Support skill from the drop-down (Skills must be created in Conversational Cloud prior to this step). 
    
        i. Please note not to select the skill used for the Conversation Orchestrator Bot since this would create a circular loop with the policy. 
    
    f. Click Save to save the policy

2. Navigate to Intent and Context Policies and then click Add Policy. 
    
    <img class="fancyimage" width="750" src="img/maven/workspace-regular-custom-rule-static.png"/>

    a. Edit the name to RegularCustomerRule_Static
    
    b. In Conditions select custom.regularCustomer from the drop down
    
    c. Select the Is In operator
    
    d. Then select attribute and custom.regularCustomerList from the drop down
    
    e. In the Actions block in the first drop-down select Transfer to a skill, and then select the Regular Support skill from the drop down (Skills must be created in Conversational Cloud prior to this step)
    
    f. Click Save to save the policy


As you may have noticed, we have created two policies, one for VIP customer, and one for a regular customer. In this example we evaluate both using static variables. In later sections we will retrieve the customer phone number from a session.  


### Test the policies

We will use a standard web entry point to initiate a conversation with the CB bot we created, which will use the Conversation Orchestrator policies to route to the desired skill. 

#### Test VIP policy

In the policy list in Conversation Orchestrator, click on the toggle switch and enable the VipRule_Static policy. 

1. Start a new web messaging conversation using the account ID 

2. Log in to Conversational Cloud using a VIP agent account

3. Type “Hi” in the messaging window to engage the bot

4. When asked for a phone number please type  +155555501. Please note that at this stage, the policy is using Static variables, so you can actually type anything because the policy is not going to be using your input. 

5. This should trigger the VIP policy and the conversation should be transferred to a VIP skill

6. If you are logged in to Conversational Cloud as a VIP Agent, you will now get a ring 

#### Test Regular Customer Policy

1. In the policy list in Conversation Orchestrator, click on the toggle switch and disable the VipRule_Static policy. Enable RegularCustomerRule_Static

2. Logout of Conversational Cloud, and then log in back using a Regular Agent account

3. Close the previous conversation, and then start a new one

4. This time when asked for the phone number type +155555506. Note, that the policy uses static attributes, and at this stage is not going to use the phone number you have input. 

5. This should now trigger the Regular Customer policy and the conversation should be transferred to a Regular skill

6. If you are logged into Conversational Cloud as a Regular Agent, you will now get a ring

## Create a simple policy using Conversation Context Service Attribute

In the previous example we used Static attributes for everything. While this is a great way to test, in the real world, you will need to use attributes that are dynamically retrieved. In this example we will pass the phone number using the context service, and then check if the phone number is in a static list.

### Create Context Attributes

We will be using the Conversation Context Service to store a phone number, and then use it in a policy. The CB template bot you setup earlier already sets up a new namespace, and stores the phone number in the Conversation Context Service. To learn more about the Conversation Context Service please see developer [documentation](maven-ai-context-warehouse-context-session-store.html).

### Create Policies

1. Disable all policies you have previously created by switching off the toggle switch in Conversation Orchestrator. 

2. Create a new policy by clicking Add Policy 
  
    a. This policy is similar to the one we created using static variables, but instead of getting the phone number from a static attribute, we are retrieving this value from a session attribute (myNameSpace.phoneNumber), that we created earlier. 


    <img class="fancyimage" width="750" src="img/maven/workspace-viprule-session.png"/>

3. Create a new regular customer policy by clicking add policy 

    a. This policy is similar to the one we created using static variables, but instead of getting the phone number from a static attribute, we are retrieving this value from a session attribute (myNameSpace.phoneNumber), that we created earlier.

    <img class="fancyimage" width="750" src="img/maven/workspace-regular-customer-rule-session.png"/>

4. Enable both policies by clicking on the toggle switches. 

#### Test the policies

1. In the policy list in Conversation Orchestrator, disable the RegularCustomerRule_Static and Vip_Static policies. 

2. And enable the VipRule_Session and RegularCustomerRule_Static policy. 

3. Start a new web messaging conversation using the account ID 

4. Log in to Conversational Cloud using a VIP agent account

5. Type “Hi” in the messaging window to engage the bot

6. When asked for a phone number please type  +155555501. This time the policies will use the phone number to check the Vip List and route accordingly 

7. This should trigger the VIP policy and the conversation should be transferred to a VIP skill

8. If you are logged in to Conversational Cloud as a VIP Agent, you will now get a ring 

9. Logout of Conversational Cloud, and then log in back using a Regular Agent account

10. Close the previous conversation, and then start a new one

11. This time when asked for the phone number type +155555506. 

12. This should now trigger the Regular policy and the conversation should be transferred to a Regular skill

13. If you are logged into Conversational Cloud as a Regular Agent, you will now get a ring

## Using a LivePerson Function to check VIP Status

In the previous example we checked for the phone number in a static list. Maintaining such a list is obviously cumbersome. We could also use FaaS to check for VIP status - for example a function that calls a CRM backend to check the phone number at run time. 

1. Create and deploy a new [LivePerson function](liveperson-functions-overview.html) that takes a phone number as an input, and then returns true or false for whether the phone number is of a VIP customer 

    <img class="fancyimage" width="750" src="img/maven/workspace-isvip-saleseforce.png"/>

    a. The Function may internally call a CRM backend to check this status. 
    
    b. Add parameters to this function by selecting Attribute and then typing myNameSpace.phoneNumber.
    
        i. Please note that myNameSpace is the name you used in the Conversation Builder template setup step in the beginning. 
    
    c. Note: creating and deploying a FaaS function is beyond the scope of this document and hence not covered.



#### Create Policy to use the FaaS Function

1. Create the VIP policy using the FaaS attribute we created in the previous step as shown below, and click save

    <img class="fancyimage" width="750" src="img/maven/workspace-viprule-session-faas.png"/>

2. Create the regular customer policy as shown below and click save

    <img class="fancyimage" width="750" src="img/maven/workspace-regular-customer-rule-session-faas.png"/>

3. Disable previous policies, and enable the ones you just created

4. You can now test the policies similar to how you tested previously. 

#### Adding more Context Attributes from a bot

The bot template we used has one basic integration - It asks for a phone number and then stores it in the Conversation Context Service. You can add more context from the bot to use in policies - for example additional information such as customer name, email, or the NLU intent. 

Please see [Manage the Conversation Context Service](conversation-builder-scripting-functions-manage-the-conversation-context-service.html) learn about scripting functions inside Conversation Builder. 

To add additional context:

1. Select the Recommendation API Interaction, and then on the right hand side in the Interaction details, Code

    <img class="fancyimage" width="750" src="img/maven/cb-interaction-details.png"/>

2. Edit the code to add more contextual information. The following shows how the phone number is added

    ```javascript
    var phoneNumber = getVar("phoneNumber");

    botContext.setContextDataForConversation(mavenNamespace, "phoneNumber", phoneNumber);
    ```

    a. Similarly you can add other attribute for example an intent


    ```javascript
    botContext.setContextDataForConversation(mavenNamespace, "intent", intent);
    ```

3. You can now use this in a policy by using a condition on <mavenNamespace>.intent. In the following example the namespace is “myNameSpace”

    <img class="fancyimage" width="750" src="img/maven/workspace-conditions.png"/>


<!-- To learn more about policies and how to create/manage them, see [Intent & Context Policies](maven-ai-powered-routing-intent-context-policies.html). -->
