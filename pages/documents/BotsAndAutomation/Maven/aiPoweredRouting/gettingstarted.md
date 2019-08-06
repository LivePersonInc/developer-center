---
pagename: Getting Started
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-getting-started.html
indicator: both
---

## Onboarding to Maven AI Powered Routing

Now that you have created some Intent and Context based policies, you want to use them in your conversation pipelines. There are primarily two ways of onboarding and using the policies. 

### Add "Maven" Skill to your campaigns

In this case, you will be sending your conversations to a Maven. Maven will evaluate all the policies and then execute those policies (e.g. transferring the conversation to a skill). This is appropriate if:

1. You are only routing based on Inbox and Custom (FaaS or Static) attributes

2. You don't have a concierge bot

3. You do not need high levels of customizations and therefore programmatic access to Maven capabilities

#### Setup Live Engage

#### Provide Bot User Credentials to Maven 

#### Samples

### Use AskMaven APIs from a concierge bot or app

Alternatively you may also use the AskMaven APIs from a concierge bot or LOB app to ask Maven about the next best action for a set of conditions. This is appropriate if:

1. You already have a concierge bot that handles branded greetings, intents, and dialogs

2. You want to route by Intents, entities, and other attributes from a concierge bot

3. You have deeper customization needs to use Maven capabilities at runtime. 

This method is usually used alongside Context Session Store APIs to send intent and 

**Example**:

The following example shows how to use AskMaven and Context session store APIs from a concierge bot. Here:

1. A concierge bot handles branded greetings and intents. 

2. It uses the Context Session Store APIs to store the value of the intent in the store

3. The bot then calls AskMaven APIs to get a routing decision. Because the intent has been set, Maven can now use this information to evaluate a routing policy. 

<img class="fancyimage" width="600" src="img/maven/image_48.png">

#### AskMaven from Conversation Builder

Ask Maven APIs can be used in a Conversation Builder bot using Integrations. For more information on how to use Conversation Builder please refer to documentation.

1. **Add API Integration to Conversation Builder**

<img class="fancyimage" width="600" src="img/maven/image_49.png">

2. **Edit Integration Settings for AskMaven APIs**

* **Maven API key** is retrieved from Maven workspace. Please see <documentation> on how to get your key

* **AccountID**: use your LiveEngage account ID. If you are not sure please contact support or your customer representative to get the account ID

* **Conversation ID**: This allows Maven routing policy to retrieve conversation attributes to evaluate the policy. 

<img class="fancyimage" width="600" src="img/maven/image_50.png">

3. Use response from AskMaven API to execute a transfer to Skill task

<Content TBD>

#### AskMaven from Google DialogFlow

#### AskMaven from Watson
