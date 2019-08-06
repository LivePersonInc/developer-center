---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-overview.html
indicator: both
---

# AI Powered Routing - Intent & Context Policies

1. Overview

Maven’s AI powered routing provides a centralized experience to create dynamic policies to achieve routing to best human agent (direct, skill) or bot, based on intent and/or context attributes such as consumer profile data, operational context (load, predicted wait times, KPIs), and conversation history. Some examples of policies you can create: 

1. **When** brand suffers an exceptional **event** (storm, incident)  **route** to a bot for **intents** related to the outage. For all other intents (e.g. billing) route to human agent pool. 

2. **Route** a group of **intents** (e.g. order enquiry, cancellation, scheduling) to general order skill, **unless** customer is a **VIP**, then send them to their **Dedicated Advisor**

3. **For** lost baggage **intent**, return to **same agent** if customer is **returning within a time period**; for **premium** **elite** customers route to high priority skill 

2. Create a Policy

1. To create a policy **start** with the **consumer journey** you want to achieve. For example you may want to achieve the following outcome. "**Route** a group of **intents** (e.g. order inquiry, cancellation, scheduling) to a general order skill, unless customer is a **VIP**, then send them to their **dedicated advisor**." 

2. Next identify which attributes you may need to build this policy. For example, you may need Intents, whether customer is a VIP, and dedicated advisors. These attributes can be created, accessed, or managed in Maven Context Warehouse. Please see the section on Context Warehouse for details. 

<img class="fancyimage" width="600" src="img/maven/image_42.png">

## Policy Structure

A policy in Maven comprises of a condition, action, and exception block represented as a JSON block. 

### Conditions

Conditions can be applied on each Attribute in Context Warehouse. A condition block may have multiple conditions. They are represented in JSON as follows. 

**Example1**: Use a list to check if an email address is in that list. 

"conditions": [

    {

      "property": "customerinfo.email",

      "type": "IS_IN",

      "value": "{{custom.vipList}}"

    }

 ] 

	**Example 2**: Check if customer is returning within 24 hours. 

		"conditions": [

  {

      "property": "conversation.minutesSinceLastMessage",

      "type": "LESS_THAN_OR_EQUAL",

      "value": "{1440}"

    }

 ]

Maven will support the following conditional operators

* EQUAL 

* NOT_EQUAL

* LESS_THAN

* LESS_THAN_OR_EQUAL

* GREATER_THAN

* GREATER_THAN_OR_EQUAL

* CONTAINS

* IS_IN

### Actions

Actions define what to do next if the conditions are valid. An action block may have multiple actions. They are represented in JSON as follows. 

**Example**: Route a conversation to a specific VIP skill. 

"actions": [

    {

      "type": "TRANSFER_TO_SKILL",

      "payload": {

        "skillId": "{{custom.vipSkill}}"

      }

    }

  ]

The following list of **actions** will be supported for MVP. 

* TRANSFER_TO_SKILL

* TRANSFER_TO_AGENT

* SEND_MESSAGE

### Exceptions

Exceptions define conditions and actions when unusual situation may occur, for example an outage. Exceptions are also provided as **condition-action** blocks. 

Example: Send a VIP customer to a specific skill

"exception": {

conditions": [

    {

      "property": "custom.vipList",

      "type": "EQUAL",

      "value": "True"

    }

  ],

  "actions": [

    {

      "type": "TRANSFER_TO_SKILL",

      "payload": {

        "skillId": "<vipSkill>"

      }

    }

  ]

}

3. Manage Policies

## Create a new policy

1. Login to Maven and navigate to **AI Powered Routing/Intent & Context Policies**

2. Click on the button "New" 

3. Edit the policy in JSON format using the inline text editor in the experience. You may also use your preferred JSON editor and then copy and paste the JSON. 

4. Click Save button to save the new policy configuration

<img class="fancyimage" width="600" src="img/maven/image_43.png">

## Enable or disable a policy

1. Each policy can be enabled or disabled. A policy will not be executed by Maven if it is disabled. 

2. Only policies that are enabled are evaluated by Maven to make a routing decision

3. Use the on/off toggle switch to enable or disable a policy

<img class="fancyimage" width="600" src="img/maven/image_44.png"> 

## Set the policy order

Maven evaluates policies in the order they are created and shown in the user experience. Maven will execute the first policy that satisfies all the conditions. To change the order of a policy

1. Select the policy 

2. And then click the **Up** or **Down** buttons to move the policy in the list 

<img class="fancyimage" width="600" src="img/maven/image_45.png">

4. Ask Maven APIs