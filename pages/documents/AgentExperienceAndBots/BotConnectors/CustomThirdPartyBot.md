---
pagename: Custom Third Party Bots
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-custom-third-party-bots.html
indicator: both
---

This document explains how to connect external bots to LivePerson if there is not already a pre-built and supported Connector.

### Small / Medium niche Bot Platforms

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

{:start="4"}
4. Fallback SkillId is optional. You can set it as a backup option; when the connector does not receive any messages due to backend systems failure, it will escalate to this skill.

5. Configure the following URL `https://external.botcentralapi.com/connector/{{consumerId}}`  on the customer bot implementation side to post bot responses to LiveEngage.

6. Example of the post body:

### Custom Bot Connectors

Customers can always write their own custom Bot connector using our Messaging Agent SDK and Chat Agent API.  This is mainly for the small, medium niche platforms who want to build connectivity to LiveEngage.

1. Chat Bots

**Features**: create a chat Agent Bot to leverage LivePerson Structured Content capabilities.

  * LivePerson Developer [Documentation](chat-agent-api-overview.html)

  * LivePerson GitHub [Sample App](https://github.com/LivePersonInc/chat-js-sdk-sample-app)

{:start="2"}
2. Messaging Bots    

**Features**: create a Conversational Bot, Routing / Controller Bot or Post Conversation Survey Bots and leverage LivePerson Structured Content & Conversational Metadata capabilities.

  * LivePerson Developer [Documentation](messaging-agent-sdk-overview.html)

  * Live GitHub [Messaging SDK & Sample Apps](https://github.com/LivePersonInc/node-agent-sdk)


### FAQS

**What should we do if our Infrastructure team does not allow Websocket based integrations into LiveEngage?**

Connectors deployed using BotCentral platform are Http Proxy connectors, which can be used in this case.

**How do I get started?**

Contact your client partner and they will initiate the process with the Technical Services team.
