---
pagename: Custom Third Party Bots
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname:
permalink: custom-third-party-bots.html
indicator: both
redirect_from:
  - bot-connectors-custom-third-party-bots.html
---

<div class="important">This document explains how to connect external bots to LivePerson if there is not an already pre-built and supported Connector. However, several configurations will need to be enabled on your account before you can use the below solutions. Please check with your LivePerson account team before using this document.</div>

### Small / Medium niche Bot Platforms

1. Login to the LivePerson Conversation Builder by using

    * Use [https://platform.botcentralai.com](https://platform.botcentralai.com) for deploying on AWS.

    * Use [https://va.botplatform.liveperson.net](https://va.botplatform.liveperson.net) for deploying on LP Private cloud.

2. Create a new Bot and select the type of the bot as Basic.

3. Go to Enterprise Integrations.

    1. Add an integration of type "LivePerson"

    2. Add a new Agent

    3. Select Chat or Messaging Channel

    4. Fill in your account number, and the bot user login details created in LiveEngage

    5. Configure OAuth Keys (also retrieved from LiveEngage user creation)

    6. Configure an end point for the bot you want to connect. This URL will be used by the connector to post the data. This is where your 3rd Party Bot should also be listening to, to receive information from LiveEngage.

![image alt text](img/bot-guide-niche0.png)

{:start="4"}
4. Fallback SkillId is optional. You can set it as a backup option; when the connector does not receive any messages due to backend systems failure, it will escalate to this skill.

5. Configure the following URL `https://external.botcentralapi.com/connector/{{consumerId}}`  on the customer bot implementation side to post bot responses to LiveEngage.

### Custom Bot Connectors

Customers can always write their own custom Bot connector using our Messaging Agent SDK and Chat Agent API.  This is mainly for the small, medium niche platforms who want to build connectivity to LiveEngage.

#### Integrating Custom Bots via Chat

There are two options available to you if you're looking to integrate bots into chat. The first is to use the Chat Agent API directly. Its [documentation can be found here](chat-agent-api-overview.html). You can also utilize the JavaScript SDK which LivePerson wrote on top of that API. Starting with the [Sample App](https://github.com/LivePersonInc/agent-sample-app) is a good idea, to get a handle on how it works.

In both cases, generally speaking, you will need to use JavaScript from your bot to [post lines to LiveEngage](chat-agent-api-methods-send-lines-and-structured-content.html) and to [listen to new events](chat-agent-api-methods-retrieve-chat-events.html) in the chat (such as consumer text) and react accordingly.


#### Integrating Custom Bots via Messaging  

There is one option available to you if you're looking to integrate bots with messaging conversations and that is the [Messaging Agent SDK](messaging-agent-sdk-overview.html). This allows you to create a Conversational Bot, a Routing / Controller Bot or Post Conversation Survey Bots and leverage LivePerson Structured Content & Conversational Metadata capabilities.
