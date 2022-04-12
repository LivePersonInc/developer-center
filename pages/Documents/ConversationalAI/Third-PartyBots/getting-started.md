---
pagename: Getting Started
redirect_from:
  - customer-facing-bots-deploying-bots-to-liveengage.html
  - customer-facing-bots-considerations.html
  - customer-facing-bots-deploying-bots-on-live-chat.html
  - customer-facing-bots-deploying-bots-on-messaging.html
  - customer-facing-bots-getting-started.html
  - customer-facing-bots-limitations.html
  - customer-facing-bots-overview.html
  - customer-facing-bots-prerequisites.html
  - bot-connectors-getting-started.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-getting-started.html
indicator: both
---

### Introduction

Third party bot providers can be used and managed through LivePerson's Conversational Cloud just like a normal human agent or a LivePerson bot Using our connectors, you can provision IBM Watson, Google Dialogflow, Amazon Lex, or Microsoft bots. You can also leverage LivePerson Functions to build custom integrations with other third party bot providers.

{: .important}
If you need to connect an external bot that does not have a pre-built connector, see [this document](third-party-bots-custom-integration.html) for instructions.

{: .important}
Some connectors may provide more or less functionality depending on the specifics of the provider.

{: .important}
We will be automatically error escalate any new conversation if the bot has reached the limit of 999 open conversations. To mitigate this issue, please consider setting a lower value for closing inactive conversations for your bot skills and also add more bots.

{: .important}
Please be advised that we recommend to have one bot for 250 open and active conversations, if you want your to handle more load, please add more bots to ensure a smooth and convenient consumer experience. Furthermore we recommend adding at least 2 bots for one bot skill to support a failover and a higher availability in case of any service interruptions and issues.

{: .notice}
Please be advised that you should create fresh bot agents for your bots. Using the same bot agents for ConversationBuilder and ThirdPartyBots will break both bot instances. Conversational Cloud only allows one active user session per agent. Thus, bots created in Conversation Builder and Third-Party Bots with the same bot agent will eventually kick each other out.

### Bot Lifecycle

During run-time, your bot may have different operational states. These states are based on the health status of the services it utilizes, such as LivePerson APIs, AI vendors, etc.

<table>
  <thead>
  <tr>
    <th>Bot State </th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Offline</td>
    <td>The bot is offline and won't accept any conversations.</td>
  </tr>
  <tr>
    <td>Online</td>
    <td>The bot is online and will accept and process new conversations.</td>
  </tr>
  <tr>
    <td>Vendor Interruption</td>
    <td>The bot is online and will accept new conversations, but will directly escalate them to the default transfer skill, because the configured AI Vendor is not reachable/working.</td>
  </tr>
  <tr>
    <td>Service Interruption</td>
    <td>The bot is in the delayed state and will not accept new conversation or process existing conversations. This state is a result of an interruption within LivePerson APIs/servers.In this state the bot will try to restart automatically once every minute until the interruption is resolved.</td>
  </tr>
  </tbody>
</table>

### Limitations

#### Supported customer content events

Currently, the bot connectors only support following events from the customer:

- Plain text input
- [Rich Content](getting-started-with-rich-messaging-introduction.html)
- [File](file-sharing-file-sharing-for-web-messaging.html)

We do not support passing of any other UMS events. If the customer sends an
rich content or a file to the bot, the bot will replace it with a special
identifier so the bot can handle this special use-case with custom code.
Those identifies are as follows:

- Rich Content Identifier: **com.liveperson.bot-connectors.consumer.send-rich-content**
- File Content Identifier: **com.liveperson.bot-connectors.consumer.send-file**

#### Support for different messaging channels and corresponding rich content

The bot Connector system is designed to support [all relevant rich content](getting-started-with-rich-messaging-rich-messaging-channel-capabilities.html) since it only forwards the received structured content and metadata to LivePerson's messaging and chat services, where it is handled. We have verified and tested the support for **Web Messaging**, **Facebook** and **Apple Business Chat**. All other channels are not verified, but should work if you send the right structured content for the channel. If you experience any issues, please contact LivePerson support or your account team.

#### Creating and starting bots

Due to limitations within the Conversational Cloud's permission system, it is not possible for an operator with the Agent or the Agent Manager profiles to create new bots or start bots. However, they are still able to stop, edit and delete existing bots.

If you want to enable creating and starting bots for the Agent and Agent Manager profiles, you need to create a new custom Profile, which will derive its base permissions from the Campaign Manager or Admin profiles. Then, make sure to enable the needed permissions for creating and starting bots only while disabling any other permissions. Afterwards, you will need to assign this new Profile to the Agent/Agent Manager who should be able to start/create bots.

<img style="width:600px" src="img/botconnectordashboard/campaign_manager_bot_permissions.png">

Minimal set of permissions for creating and starting bots for Campaign Manager Profile

<img style="width:600px" src="img/botconnectordashboard/administrator_bot_permissions.png">

Minimal set of permissions for creating and starting bots for Administrator Profile

#### Intent and actions evaluation

Please note that your bot setup should always return an intent or an action as a response. If you return an intent without actions or messages, or return no intent at all, the bot will consider this an error and escalate to the default escalation skill.

### Getting Started

#### Create a Bot User in the Conversational Cloud

1. Add a new user in the Conversational Cloud. Choose "Bot" for “User type”. If bot is not available as a user type, contact your LivePerson account manager to enable the feature.

  <img style="width:600px" src="img/ThirdPartyBots/common-create-bot-user.png">

{:start="2"}

1. Under login method, choose "API key" and generate a new API key for the user

   <img style="width:600px" src="img/ThirdPartyBots/common-create-api-key.png">

{:start="3"}

3. Make sure the user has chat and/or messaging slots (more than 0 for either), based on the channel you'd like the bot to take conversations from.

{:start="4"}

1. Find the API key name you created above the in bot user profile

   <img style="width:400px" src="img/ThirdPartyBots/common-find-api-key.png">

#### Provision a connector

To enable Third-Party bots, contact your Account Manager to enable the feature in the Conversational Cloud for your account.

Upon logging in to Conversational Cloud, you will see the Conversation AI Tab:

<img class="fancyimage" style="width:750px" src="img/botconnectordashboard/conversational_ai_app.png">

Follow the steps below to add a new bot.

1. Click on the "Third-Party Bots" App.

2. Click “+ Add Bot” in the bot table

   <img style="width:800px" src="img/botconnectordashboard/add_new_bot.png">

3. Choose [Bot Type](third-party-bots-bot-types.html): Decide which type of bot you want to add.

4. Assign agent: Create a new bot agent or select the agent you created in the step above

5. Conversation Type & Error Handling: Choose bot type specific configurations follow [Bot Type](third-party-bots-bot-types.html) for a detailed description on the
   configuration of these steps.

6. Connect to A.I.: Choose an AI engine from the list of available configuration. See [Next Steps](third-party-bots-getting-started.html#next-steps).

### Next Steps

Move on to the product guides to learn how to connect and configure your specific bot framework/builder.

- [Watson Assistant V1 & V2](third-party-bots-ibm-watson-assistant-introduction.html)

- [Dialogflow V2/ES](third-party-bots-google-dialogflow-es-introduction.html)

- [Dialogflow CX](third-party-bots-google-dialogflow-cx-introduction.html)

- [Amazon Lex](third-party-bots-amazon-lex-introduction.html)

- [Microsoft Bot Framework](third-party-bots-microsoft-direct-line-introduction.html)

- [LivePerson Functions Bots](third-party-bots-liveperson-functions-introduction.html)

- [Medallia (for Survey Bots)](third-party-bots-medallia-introduction.html)

- [Custom Endpoint](third-party-bots-custom-endpoint-introduction.html)

- [Dialogflow V1 (No longer supported)](third-party-bots-google-dialogflow.html)
