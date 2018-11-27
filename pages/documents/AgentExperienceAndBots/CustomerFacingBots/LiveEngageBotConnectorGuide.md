---
pagename: Deploying Bots to LiveEngage
redirect_from:
sitesection: Solutions
categoryname: "Agent Experience & Bot"
documentname: Customer Facing Bots
permalink: customer-facing-bots-deploying-bots-to-liveengage.html
indicator: both
---

### Introduction

<div class="important">The intended audience of this document is LivePerson Professional Services and other account stakeholders. It is to be used for consulting 3rd party bot builders in integrating their bots to LivePerson on behalf of our customers.</div>

The LiveEngage platform helps orchestrate the flow of messages back and forth between consumers and Agents. Consumers can be on any end-user channel such as SMS, Web, Facebook Messenger and Apple Business chat, and communicate with both Human and Automated (Bot) agents. A bot is an automated conversational agent that performs a specific goal. LiveEngage has several avenues through which our customers can develop and deploy bots:

* BotCentral Platform (Owned by Liveperson, soon to be deprecated by the Conversation Builder)

* Conversation Builder, a LivePerson product (in Beta), which allows customers to build and deploy bots directly within LiveEngage.

* Enterprise customers can build and deploy bots using different frameworks and products and then enable them through LiveEngage. Some of these products include IBM Watson, Microsoft Bot framework, Google Dialog Flow, Amazon Lex or any other niche bot platforms customers want to use to build bots.

This guide helps you with steps required to deploy bots developed via such third party platforms on the LiveEngage platform. Deploying bots in LiveEngage enables all the messages to go through LiveEngage Hub, routing them to the bots based on the skills assigned to them.

### Use Cases

This document covers the following different scenarios with regards to deploying bots in LiveEngage:

1. IBM Watson (Watson Assistant / Watson Conversation)

2. Google Dialog Flow 1.0 / 2.0 (available mid December 2018)

4. Microsoft Bot Framework (LUIS)

5. Amazon Lex

6. Liveperson Bots & Automation Platform (AKA BotCentral, owned by Liveperson)

7. Any Bot Platform (small, medium platforms)

8. LivePerson Conversation Builder (new in alpha, will be GA in Jan 2019)

### Deploying Bots built on IBM Watson

1. Create a User Account on LiveEngage and set the type as "Bot". (Your account manager or CSM should be able to help with user account creation).

2. Login to the Bot Connector Platform by using one of the following URLs:

    * LivePerson NA - https://bot-console.fs.liveperson.com

    * LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    * LivePerson APAC https://bot-console.apac.fs.liveperson.com

<div class="important">Only registered IPs can login to the BOT-Platform console. Customer’s IT team will provide with the IP address of the location from where users will be accessing this console. These IP addresses must be added into the management console of the bot connector.</div>

{:start="3"}
3. Go to Config Menu Option to add a new Bot.

4. Click the "+ADD NEW BOT" in the Config page.

**Configuration of the bot involves 4 steps:**

1.  Assign agent: you should create a bot user in LiveEngage first and then assign the bot to it.

2.  Choose conversation type: Chat or Messaging.

3.  Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service.

4.  Connect Watson Bot (Username & Password)

    * Select Watson as AI provider

    * Select Username/Password as Authentication Type

    * Configure Watson Workspace URL

    * Configure UserName and password

![image alt text](img/bot-guide-watson0.png)

{:start="5"}
5.  Connect Watson (IAM Authentication)

    1. Select Watson as AI provider

    2. Select IAM as Authentication Type

    3. Set the relevant WORKSPACE_URL

    4. Add WORKSPACE_ID

    5. Optionally change VERSION_DATE

    6. Add API_KEY

    7. Add TOKEN_ENDPOINT_URL

    8. Optionally change DEFAULT_REFRESH_TIME

    9. Optionally change MAX_RETRIES

    10. AUTH_HEADER (**DO NOT CHANGE DEFAULT**)

![image alt text](img/bot-guide-watson1.png)

Complete documentation can be found at [https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY](https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY)

### Deploying Bots built on Google Dialog V1.0 Flow to LiveEngage

1. Create a User Account on LiveEngage and set the type as "Bot".  (Your account manager or CSM should be able to help with user account creation).

2. Login to the Bot Connector Platform by using one of the following URLs:

    * LivePerson NA - https://bot-console.fs.liveperson.com

    * LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    * LivePerson APAC - https://bot-console.apac.fs.liveperson.com

<div class="important">Only registered IPs can login to the BOT-Platform console. Customer’s IT team will provide with the IP address of the location from where users will be accessing this console. These IP addresses must be added into the management console of the bot connector.</div>

{:start="3"}
3. Go to Config Menu Option to add a new Bot.

4. Click the "+ADD NEW BOT" in the Config page.

**Configuration of the bot involves 4 steps:**

1. Assign agent: You should create a bot user in LiveEngage first and assign the bot to it.

2. Choose conversation type: Chat or Messaging.

3.  Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service.

4. Connect Google Dialog Flow Bot

    1. Select Dialog Flow as AI provider

    2. Configure Client Access Tokens

    3. Configure Google Dialog Flow URL

![image alt text](img/bot-guide-dialogflow0.png)

Complete documentation can be found at [https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY](https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY)

### Deploying Bots built on Google Dialog V2.0 Flow to LiveEngage

The Google Dialog Flow v2.0 connector will be available by mid December. Below are the instructions to deploy bots built using it.

1. Create a User Account on LiveEngage and set the type as "Bot".  (Your account manager or CSM should be able to help with user account creation)

2. Login to the Bot Connector Platform by using one of the following URLs

    * LivePerson NA - https://bot-console.fs.liveperson.com

    * LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    * LivePerson APAC - https://bot-console.apac.fs.liveperson.com

<div class="important">Only registered IPs can login to the BOT-Platform console. Customer’s IT team will provide with the IP address of the location from where users will be accessing this console. These IP addresses must be added into the management console of the bot connector.</div>

{:start="3"}
3. Go to Config Menu Option to add a new Bot.

4. Click the "+ADD NEW BOT" in the Config page.

**Configuration of the bot involves 4 steps:**

1. Assign agent: You should create a bot user in LiveEngage first and assign the bot to it.

2. Choose conversation type: Chat or Messaging.

3. Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service.

4. Connect Google Dialog Flow Bot:

    1. Select Dialog Flow as AI provider

    2. Select V2 as Authentication Flow

    3. Configure Google Dialog Flow URL

    4. Configure Client Email

    5. Configure Private Key

    6. Leave API Version unchanged as V2

![image alt text](img/bot-guide-dialogflow1.png)

### Deploying Bots built on Microsoft to LiveEngage

1. Create a User Account on LiveEngage and set the type as "Bot". Copy OAuth Keys for the corresponding user account.

2. Login to the BotCentral Platform:

    * Use [https://platform.botcentralai.com](https://platform.botcentralai.com) for deploying on AWS.

    * Use [https://va.botplatform.liveperson.net](https://va.botplatform.liveperson.net) for deploying on LP Private cloud.

3. Create a new Bot and select type of the bot as Microsoft Bot Connector.

4. In the Message Editor:

    * Expand to Responders, Find Get Message, Post Message and Start Conversation Responders.

    * Update the Authorization header with the Azure Bearer token (API Access Key) for the 3 responders. When you log into Azure, you can enable API Access which provides the Microsoft Azure API access key.

![image alt text](img/bot-guide-microsoft0.png)

{:start="5"}
5. Go to Enterprise Integrations in the Message Editor.

6. Add a LivePerson Integration:

    1. Add a new Agent.

    2. Select Chat or Messaging Channel.

    3. Configure Account Number, Bot User Login created on LiveEngage.

    4. Configure LiveEngage Bot User API Keys (OAuth 1.0).

![image alt text](img/bot-guide-microsoft1.png)

### Deploying Bots built on Lex to LiveEngage

Custom deployment of a pre-built connector.  LivePerson technical services team has a Lex connector implemented which can be used and configured for connecting Lex Bots for any clients. Customers need to provide required connection details for Lex Account and also LiveEngage Account and Bot Users.

1. Create a User Account on LiveEngage and set the type as "Bot". Copy OAuth Keys for the corresponding user account.

2. Connector can be set up and deployed on the LivePerson Private cloud that connects Lex bots with LiveEngage Platform.

3. We need to add some custom configuration / development time when deploying this connector to our customers.

### Deploying Bots built on any other small / medium niche Bot Platforms

1. Login to Liveperson Bots & Automation Platform by using

    * Use [https://platform.botcentralai.com](https://platform.botcentralai.com) for deploying on AWS.

    * Use [https://va.botplatform.liveperson.net](https://va.botplatform.liveperson.net) for deploying on LP Private cloud.

2. Create a new Bot and select the type of the bot as Basic.

3. Go to Enterprise Integrations.

    1. Add LivePerson integratIon

    2. Add a new Agent

    3. Select Chat or Messaging Channel

    4. Configure Account Number, Bot User Login created on LiveEngage

    5. Configure OAuth Keys.

    6. Configure an end point for the bot you want to connect. This URL will be used by the connector to post the data. This is where customer bot implemented using 3rd party bot platform is listening on.

![image alt text](img/bot-guide-niche0.png)

{:start="5"}
  5. Fallback SkillId is optional. You can set it as a backup option; when the connector does not receive any messages due to backend systems failure, it will escalate to this skill.

  6. Configure the following URL `https://external.botcentralapi.com/connector/{{consumerId}}`  on the customer bot implementation side to post bot responses to LiveEngage.

  7. Example of the post body:

### Deploying Bots to LiveEngage using Custom Connectors

Customers can always write their own custom Bot connector using our Messaging Agent SDK and Chat Agent API.  This is mainly for the small, medium niche platforms who want to build connectivity to LiveEngage.

1. Chat Bots

**Features**: create a chat Agent Bot to leverage LivePerson Structured Content capabilities.

  * LivePerson Developer [Documentation](https://developers.liveperson.com/chat-agent-api-overview.html)

  * LivePerson GitHub [Sample App](https://github.com/LivePersonInc/chat-js-sdk-sample-app)

{:start"2"}
2. Messaging Bots    

**Features**: create a Conversational Bot, Routing / Controller Bot or Post Conversation Survey Bots and leverage LivePerson Structured Content & Conversational Metadata capabilities.

  * LivePerson Developer [Documentation](https://developers.liveperson.com/messaging-agent-sdk-overview.html)

  * Live GitHub [Messaging SDK & Sample Apps](https://github.com/LivePersonInc/node-agent-sdk)


### FAQS

**What should we do if our Infrastructure team does not allow Websocket based integrations into LiveEngage?**

Connectors deployed using BotCentral platform are Http Proxy connectors, which can be used in this case.

**How do I get started?**

Contact your client partner and they will initiate the process with the Technical Services team.
