---
pagename: Attributes
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-attributes.html
indicator: messaging
---

Attributes can be used in building routing policies. Please see [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) to learn more on how to create such policies.

### Out-of-the-box attributes

Several system attributes are available out of the box from the LivePerson platform. Currently, these attributes are provided in the “conversation” namespace and the “sde” namespace.

To view the list of available attributes, please login to Conversation Orchestrator using your Conversational Cloud credentials, and then navigate to **Conversation Context Service > Conversation or Structured Data Entities (SDE)**.

These attributes can be used in building routing policies. 

#### Conversation context attributes

Conversation context attributes are those attributes of a conversation, such as time and assigned skill, that can be used in Intent and Context Policies. 

* conversation.minutesSinceStartConversation 
* conversation.minutesSincePreviousMessage 
* conversation.previousAgentId 
* conversation.currentSkillId 
* conversation.previousSkillId 
* conversation.conversationId 
* conversation.consumerId 
* conversation.groupId

<img class="fancyimage" width="800" src="img/convorchestrator/co_ccs_convcontextattributes.png">

#### Structured Data Entities (SDEs)

Structured Data Entities (SDEs) can be used for including business, user, and context data in campaigns and engagements when conversations are initiated.

**Visitor info**

Visitor info are attributes of a visitor, such as name, age and address, and consists of customer info and personal info.

Customer info:

* sde.visitorinfo.customerinfo.ctype 
* sde.visitorinfo.customerinfo.cstatus 
* sde.visitorinfo.customerinfo.balance 
* sde.visitorinfo.customerinfo.customerid 
* sde.visitorinfo.customerinfo.socialid 
* sde.visitorinfo.customerinfo.imei 
* sde.visitorinfo.customerinfo.username 
* sde.visitorinfo.customerinfo.companysize 
* sde.visitorinfo.customerinfo.companybranch 
* sde.visitorinfo.customerinfo.accountname 
* sde.visitorinfo.customerinfo.role 
* sde.visitorinfo.customerinfo.lastpaymentdate 
* sde.visitorinfo.customerinfo.registrationdate 
* sde.visitorinfo.customerinfo.loginstatus

Personal info:

* sde.visitorinfo.personalinfo.age 
* sde.visitorinfo.personalinfo.gender 
* sde.visitorinfo.personalinfo.language 
* sde.visitorinfo.personalinfo.company

<img class="fancyimage" width="800" src="img/convorchestrator/co_ccs_sdes.png">

### Custom attributes

Conversation Orchestrator allows you to create custom static data, or use LivePerson Functions to connect to external data sources.

Static variables are useful for storing constant data or lists that can be used in policies. These are used throughout the lifecycle of the policy and do not change at runtime. The common use case for this would be creating a list, for example a list of VIPs, and then using the condition (CONTAINS or IS_IN) in a policy.

#### Create a static variable

**To create a new static variable**

1. Log in to Conversation Orchestrator using your Conversational Cloud credentials, and navigate to **Conversation Context Service > Custom**.
2. Click the **Add New** button, and select "static."

    <img class="fancyimage" width="400" src="img/convorchestrator/co_ccs_static.png">

3. Enter the name and the value of the new variable in the text input area.
4. Click **Save**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_ccs_staticvar.png">

{: .important}
When creating *custom* attributes in the Context Session Service, ensure that you are following naming conventions that avoid spaces in the name (use camel case, snake case, pascal case, etc.). While having an attribute name that contains spaces will not trigger an error message, you will be unable to properly access these attribute’s values from within the policies you will be creating. 

### Getting attributes through functions

You can create a FaaS function to fetch information from an external source at runtime, for example, retrieving customer information from a Salesforce CRM database.

#### Create a FaaS attribute in Conversation Orchestrator
Once you have created a function, you can now use that as an attribute in the Conversation Context Service to fetch external data at runtime.

**To create a new FaaS attribute**

1. Log in to Conversation Orchestrator using your Conversational Cloud credentials, and navigate to **Conversation Context Service > Custom**.
2. Click the **Add New** button, and select "function."

    <img class="fancyimage" width="400" src="img/convorchestrator/co_ccs_function.png">

3. Select the FaaS function using the user credentials that you created.

    <img class="fancyimage" width="400" src="img/convorchestrator/co_ccs_faasfunction.png">

4. Click **Save**.
