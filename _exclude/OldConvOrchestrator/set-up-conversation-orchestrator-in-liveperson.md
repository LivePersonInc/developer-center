---
pagename: Set Up Conversation Orchestrator in LivePerson
redirect_from:
  - maven-ai-powered-routing-set-up-maven-in-liveperson.html
  - maven-ai-ai-powered-routing-set-up-maven-in-liveperson.html
  - maven-ai-dynamic-routing-set-up-maven-in-liveperson.html
  - conversation-orchestrator-dynamic-routing-set-up-maven-in-liveperson.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-set-up-conversation-orchestrator-in-liveperson.html
indicator: messaging
---

You can use policies you have created to route conversations by sending conversations to the Conversation Orchestrator Skill in Conversational Cloud. Conversation Orchestrator will evaluate all the policies and then execute those policies (e.g. transferring the conversation to a skill).

This is appropriate if:

- You are only routing based on [Inbox System Attributes](maven-context-warehouse-inbox-system-attributes.html) or Custom Static or Function attributes.
- You don't have a concierge bot.
- You do not need high levels of customizations and therefore programmatic access to Conversation Orchestrator capabilities.

### Create a Conversation Orchestrator Bot User In Conversational Cloud

A bot needs to be created in Conversational Cloud for Conversation Orchestrator to receive conversations and then route them to an appropriate skill or agent. We use Conversation Orchestrator as the name, but it could be any bot name.

1. Login to Conversational Cloud, and go to the Users tab, click Action and select Add

    <img class="fancyimage" width="600" src="img/maven/Maven Bot 1.png" alt="">

2. Select bot type and type in a name (e.g. mavenBot)

    <img class="fancyimage" width="400" src="img/maven/Maven bot 2.png" alt="">

3. Select “Generate API Key”

    <img class="fancyimage" width="400" src="img/maven/Maven bot 3.png" alt="">

4. Copy the API key for later use

    <img class="fancyimage" width="400" src="img/maven/Maven bot 4.png" alt="">

5. Select the Agent role

    <img class="fancyimage" width="400" src="img/maven/Maven bot 5.png" alt="">

6. Set the Max no. of live chats to Unlimited

### Setup Campaign and Skills in Conversational Cloud

To route your conversations to Conversation Orchestrator, you need to create at least one skill

1. Create a new skill called **“Conversation Orchestrator”** and assign the Conversation Orchestrator bot user to this skill. We have used Conversation Orchestrator as the skill name, but any name is acceptable.
2. Assign the Conversation Orchestrator bot user to this skill.
3. In the Engagement Settings under the Routing section, select Specific skill and then set it to maven.

#### Optional

If you want to combine your existing skills with Conversation Orchestrator please setup the following

1. For each skill in your campaign that you want Conversation Orchestrator to handle routing create a new skill with the name **"maven:{skill name}"**. For example if there is a skill called **“Billing”** that has agents handling billing inquiries create a new skill called **“maven:Billing”**
2. Assign the Conversation Orchestrator bot user to this skill.
3. In the Engagement Settings under the Routing section, select Specific skill and then set it to this skill.

This allows Conversation Orchestrator to handle incoming conversations and also keep a track of the original skill that was set by the brand. If no policy is executed, Conversation Orchestrator uses this to transfer the conversation to the original skill, for example “Billing”.

### Provide Bot User Credentials to Conversation Orchestrator

1. On the Left Navigation, select Intent & Context Policies, scroll down, and then click the Bot config button

    <img class="fancyimage" width="400" src="img/maven/maven-bot-config.png" alt="">

2. Fill out the credentials that you saved during the previous step