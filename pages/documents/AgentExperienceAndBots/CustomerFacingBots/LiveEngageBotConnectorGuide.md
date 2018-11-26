---
pagename: Bot Connector Guide 
redirect_from:

sitesection: Solutions
categoryname: "Agent Experience & Bot"
documentname: Customer Facing Bots

permalink: customer-facing-bots-bot-connector-guide.html

indicator:
---

### Introduction

The LiveEngage platform helps orchestrate the flow of messages back and forth between consumers and Agents. Consumers can be on any end-user channel such as SMS, Web, Facebook Messenger and Apple Business chat, to communicate with both Human and

Automated (Bot) agents. This guide helps you with steps required to enable bots in the LiveEngage platform.  

A bot is an automated conversational agent that performs a specific goal. Enterprise customers can build and deploy bots using different frameworks and products and then enable them through LiveEngage.

* Customers can also use external Bot frameworks and Bot builders to build bots.  Some of these products include IBM Watson, Microsoft Bot framework, Google Dialog Flow, Amazon Lex or any other niche bot platforms customers want to use to build bots.

* BotCentral Platform (Owned by Liveperson)

* Conversation Builder, a LivePerson product (in Beta) , allows customers to build and deploy bots directly within LiveEngage.

This document is for internal users to educate bot builders working on behalf of the customers who want to deploy bots in LiveEngage. Deploying bots in LiveEngage enables all the messages to go through LiveEngage Hub and will be routed to the bots based on the skills assigned to the bots.

This document covers the following different scenarios with regards to deploying bots in LiveEngage. Customers have built bot using one of the following platforms / frameworks

1. IBM Watson

    1. Watson Assistant

    2. Watson Conversation

2. Google Dialog Flow 1.0

3. Google Dialog Flow 2.0 (available mid december 2018)

4. Microsoft Bot Framework (LUIS)

5. Amazon Lex

6. Liveperson Bots & Automation Platform (aka BotCentral owned by Liveperson)

7. Any Bot Platform (small, medium)

8. LivePerson Conversation Builder (new in alpha, will be GA in Jan 2019)

### Deploying Bots built on IBM Watson

1. Create a User Account on LiveEngage and set the type as "Bot".  (Your account manager or CSM should be able to help with user account creation)

2. Login to the Bot Connector Platform by using one of the following URLs

    1. LivePerson NA - https://bot-console.fs.liveperson.com

    2. LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    3. LivePerson APAC https://bot-console.apac.fs.liveperson.com

3. Only registered IPs can login to the BOT-Platform console. Customer’s  IT team will provide with the IP address of the location from where users will be accessing this console.  These IP addresses must be added into the management console of the bot connector.

4. Go to Config Menu Option for adding new Bot

5. Click the "+ADD NEW BOT" in the Config page.

Configuration involves 4 steps.

1.  Assign agent: You should create a bot user in LiveEngage first.

2.  Choose conversation type: Chat or Messaging

3.  Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service

4.  Connect Watson Bot (Username & Password)

    * Select Watson as AI provider

    * Select Username/Password as Authentication Type

    * Configure Watson Workspace URL

    * Configure UserName and password

![image alt text](img/bot-guide-watson0.png)

5.  Connect Watson (IAM Authentication)

    * Select Watson as AI provider

    * Select IAM as Authentication Type

    * Set the relevant WORKSPACE_URL

    * Add WORKSPACE_ID

    * Optionally change VERSION_DATE

    * Add API_KEY

    * Add TOKEN_ENDPOINT_URL

    * Optionally change DEFAULT_REFRESH_TIME

    * Optionally change MAX_RETRIES

    * AUTH_HEADER (DO NOT CHANGE DEFAULT)

![image alt text](img/bot-guide-watson1.png)

Complete documentation is at [https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY](https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY)

### Deploying Bots built on Google Dialog V1.0 Flow to LiveEngage

1. Create a User Account on LiveEngage and set the type as "Bot".  (Your account manager or CSM should be able to help with user account creation)

2. Login to the Bot Connector Platform by using one of the following URLs

    1. LivePerson NA - https://bot-console.fs.liveperson.com

    2. LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    3. LivePerson APAC [https://bot-console.apac.fs.liveperson.com](https://bot-console.apac.fs.liveperson.com)

3. Only registered IPs can login to the BOT-Platform console. LivePerson support team will add your IP address at first.

4. Go to Config Menu Option for adding new Bot

5. Click the "+ADD NEW BOT" in the Config page.

Configuration involves 4 steps.

1. Assign agent: You should create a bot user in LiveEngage first.

2. Choose conversation type: Chat or Messaging

3.  Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service

4. Connect Google Dialog Flow Bot

    * Select Dialog Flow as AI provider

    * Configure Client Access Tokens

    * Configure Google Dialog Flow URL

![image alt text](img/bot-guide-dialogflow0.png)

Complete documentation is at [https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY](https://drive.google.com/drive/folders/1x6uRyTJ4jW72dAQ--0vjXI51S6zlqMiY)

### Deploying Bots built on Google Dialog V2.0 Flow to LiveEngage

* Google Dialog Flow v2.0 connector will be available by mid December. Below are the instructions

* Create a User Account on LiveEngage and set the type as "Bot".  (Your account manager or CSM should be able to help with user account creation)

* Login to the Bot Connector Platform by using one of the following URLs

    * LivePerson NA - https://bot-console.fs.liveperson.com

    * LivePerson EMEA - https://bot-console.emea.fs.liveperson.com

    * LivePerson APAC - https://bot-console.apac.fs.liveperson.com

* Only registered IPs can login to the BOT-Platform console. LivePerson support team will add your IP address at first.

* Go to Config Menu Option for adding new Bot

* Click the "+ADD NEW BOT" in the Config page.

Configuration involves 4 steps.

1. Assign agent: You should create a bot user in LiveEngage first.

2. Choose conversation type: Chat or Messaging

3. Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service

4. Connect Google Dialog Flow Bot

    1. Select Dialog Flow as AI provider

    2. Select V2 as Authentication Flow

    3. Configure Google Dialog Flow URL

    4. Configure Client Email

    5. Configure Private Key

    6. Leave API Version unchanged as V2

![image alt text](img/bot-guide-dialogflow1.png)

### Deploying Bots built on Microsoft to LiveEngage

1. Create a User Account on LiveEngage and set the type as "Bot". Copy OAuth Keys for the corresponding user account.
2. Login to BotCentral Platform
    4. Use [https://platform.botcentralai.com](https://platform.botcentralai.com) for deploying on AWS. Use [https://va.botplatform.liveperson.net](https://va.botplatform.liveperson.net) for deploying on LP Private cloud.
    5. Create a new Bot and select type of the bot as Microsoft Bot Connector
    6. In Message Editor
        1. Expand to Responders, Find Get Message, Post Message and Start Conversation Responders.
        2. Update the Authorization header with the Azure Bearer token (api Access Key) for 3 responders.   When you log into Azure you can enable API Access which provides the Microsoft Azure API access key.

![image alt text](img/bot-guide-microsoft0.png)

    7. Go to Enterprise Integrations in the Message Editor.
    8. Add LivePerson integratIon
        3. Add a new Agent
        4. Select Chat or Messaging Channel
        5. Configure Account Number, Bot User Login created on LiveEngage
        6. Configure LiveEngage Bot User API Keys (OAuth 1.0).

![image alt text](img/bot-guide-microsoft1.png)

### Deploying Bots built on Lex to LiveEngage

* Custom deployment of a pre-built connector.  LivePerson technical services team has Lex connector implemented which can be used and configured for connecting Lex Bots for any clients.
* Customers need to provide required connection details for Lex Account and also LiveEnage Account and Bot Users
* Create a User Account on LiveEngage and set the type as "Bot". Copy OAuth Keys for the corresponding user account.
* Connector can be set up and deployed on the LivePerson Private cloud that connects Lex bots with LiveEngage Platform.
* We need to add some custom configuration / development time when deploying this connector to our customers.

### Deploying Bots built on any other small / Medium niche Bot Platforms

Login to Liveperson Bots & Automation Platform by using

    1. Use [https://platform.botcentralai.com](https://platform.botcentralai.com) for deploying on AWS. Use [https://va.botplatform.liveperson.net](https://va.botplatform.liveperson.net) for deploying on LP Private cloud.
    2. Create a new Bot and select type of the bot as Basic
    3. Go to Enterprise Integrations.
        1. Add LivePerson integratIon
        2. Add a new Agent
        3. Select Chat or Messaging Channel
        4. Configure Account Number, Bot User Login created on LiveEngage
        5. Configure OAuth Keys.
        6. Configure an end point for the bot you want to connect. This URL will be used by the connector to post the data. This is where customer bot implemented using 3rd party bot platform is listening on.

![image alt text](img/bot-guide-niche0.png)

    4. Fallback SkillId is optional. You can set it, as a backup option, when the connector does not receive any messages due to backend systems failure, it will escalate to this skill.
    5. Configure the following URL `https://external.botcentralapi.com/connector/{{consumerId}}`  on the customer bot implementation side to post bot responses to LiveEngage.
        7. Example of the post body :

## Deploying Bots to LiveEngage using Custom Connectors

Customers can always write their own custom Bot connector using our Messaging Agent SDK and Chat Agent API.  This is mainly for the small, medium niche platforms who want to build connectivity to LiveEngage.

1. Chat Bots
    1. LivePerson Developer [Documentation](https://developers.liveperson.com/chat-agent-api-overview.html)
    2. LivePerson GitHub [Sample App](https://github.com/LivePersonInc/chat-js-sdk-sample-app)
    3. Features
        1. Chat Agent Bot
        2. Leverage LivePerson Structured Content
2. Messaging Bots
    4. LivePerson Developer [Documentation](https://developers.liveperson.com/messaging-agent-sdk-overview.html)
    5. Live GitHub [Messaging SDK & Sample Apps](https://github.com/LivePersonInc/node-agent-sdk)
    6. Features
        3. Conversational Bot
        4. Routing / Controller Bot
        5. Post Conversation Survey Bots
        6. Leverage LivePerson Structured Content & Conversational Metadata

## FAQS

**What should we do if our Infrastructure team does not allow Websocket based integration into LiveEngage?**

Connectors deployed using BotCentral platform are Http Proxy connectors, which can be used in this case.

**How do I get started?**

Contact your client partner and they will initiate the process with the Technical Services team.
