---
pagename: Getting Started
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-getting-started.html
indicator:
---

### Introduction

External Bot frameworks and Bot builders can be enabled and managed through LiveEngage just like a normal human agent.

Using the Bot Connector dashboard, you can provision a bot connector for IBM Watson, Google Dialog Flow, and more.

{: .important}
If you need to connect a external bot that does not have a pre-built connector, see [this document](bot-connectors-custom-third-party-bots.html) for instructions.

Each connector provides the functionality to

* send/receive text messages

* send [structured content](getting-started-with-rich-messaging-introduction.html)

* transfer the conversation to other skills

* change Time To Response for a messaging conversation

* close a conversation

Some connectors may provide more or less functionality depending on the specifics of the product to which it is connecting.

There are two steps to setting up a new bot connector.

1. Create Bot user in LiveEngage

2. Provision connector in the Bot Connector dashboard

### Create Bot User in LiveEngage

1. Add a new user in LiveEngage, choose "Bot" for “User type”. If “User type” is not available, contact your LivePerson account manager to enable the feature.

    <img style="width:600px" src="img/dialogflowversion2/image_0.png">

2. Add login method as "API key" and generate new API key for the new user

    <img style="width:600px" src="img/dialogflowversion2/image_1.png">

3. Make sure the user has chat and/or messaging slot > 0 based on the target channel of the bot.

4. Set Max No of Live Chats

    * If Chat in the drop down select  - Value > 1.

    * If Messaging Max No of Live Chats -> **No Chats and Max No of Messaging Converversations to Custom Setting and enter a value greater than 0**

5. Find api key name in bot user profile

    <img style="width:400px" src="img/dialogflowversion2/image_2.png">

---

**Below is Messaging ONLY**

Go to API management page (Campaigns tab > Data Sources > APIs) and add the following APIs to the bot’s API key:

* Engagement History API

* Operational API

    <img style="width:600px" src="img/dialogflowversion2/image_3.png">

### Provision connector in the Bot Connector dashboard

To access the Bot Connector dashboard, contact your Account Manager to enable the Automation Area in LiveEngage for your account.

Upon logging in to LiveEngage, you will see the Automation Tab:

<img class="fancyimage" style="width:750px" src="img/botconnectordashboard/automation_tab.png">

Follow the steps below to add a new bot connector.

1. Navigate to the Automation Area Dashboard and click "Connect Bots" on the side menu.

1. Navigate to the Config page and click “+ADD NEW BOT”

    <img style="width:800px" src="img/botconnectordashboard/addnew.png">

2. Assign agent:  Assign the bot agent that you just created

3. Choose conversation type:  Chat or Messaging

    Settings for Chat:
    <img style="width:900px" src="img/botconnectordashboard/chat.png">

    Settings for Messaging:
    <img style="width:900px" src="img/botconnectordashboard/messaging.png">

4. Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service

    <img style="width:900px" src="img/botconnectordashboard/escalation.png">

5. Connect to A.I.: Choose an AI engine from a list. Add the configuration of AI. See [Next Steps](#next-steps).

### Next Steps

Move on to the product guides to learn how to connect and configure your specific bot framework/builder.
* [Watson Assistant](bot-connectors-ibm-watson-assistant.html)
* [Dialogflow V1](bot-connectors-google-dialog-flow.html)
* [Dialogflow V2](bot-connectors-google-dialog-flow-version-2.html)
* [Custom Third Party Bots](bot-connectors-custom-third-party-bots.html)
