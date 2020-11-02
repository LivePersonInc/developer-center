---
pagename: Overview
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-overview.html
indicator: both
---

{: .important}
Did you know that LivePerson has a Conversational AI forum for builders? Check it out [here](https://talkyard.livepersonai.com/)!

Use the Bots Status application to check the status of all your bots from a single location. 

You can use the application to monitor and manage both custom bots and post-conversation survey (PCS) bots.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botsStatus_dashboard.png">

### Access Bots Status

{: .important}
To access the Bots Status application, you must have the Bot Status Access [permission](bot-accounts-permissions.html).

**To access the Bot Status application**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Bots Status**.

### Statuses

When monitoring bots, there are three types of statuses:

* **Bot Agent Connector**: This indicates the status of the deployed connector that’s connected to the bot and handles conversations using the bot.
* **Conversation Cloud**: This indicates the status of the connection between the bot agent connector and the Conversation Cloud messaging/chat server. This server sends the messages to the consumer via a channel.
* **Bot Server**: This indicates the status of the connection between the bot agent connector and the bot server. This server handles bot conversations.

To view a connector's statuses, scroll to the right in the dashboard.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/bots_status_statuses.png">

#### Bot agent connector statuses

| Status | Description |
| --- | --- |
| Not Connected | The connector is offline. |
| Ready to Start | The connector was added successfully and deployed, but it hasn't been started for the first time. |
| Online | The connector is online. |
| Stopped | The connector isn't running because it was manually stopped. |

#### Conversational Cloud connection statuses

| Status | Description |
| --- | --- |
| Not Connected | *Applies to Messaging.* The connection between the bot agent connector and Conversational Cloud messaging server has been dropped, or the connector has just started and hasn't yet had the chance to update its status after connection. |
| Connected | *Applies to Messaging.* The bot agent connector is connected to the Conversation Cloud messaging server. |
| Online | *Applies to Chat.* The Conversation Cloud chat server is online. |
| Offline | *Applies to Chat.* The Conversation Cloud chat server is offline. |
| Away | Agents are away. |

#### Bot Server connection statuses

| Status | Description |
| --- | --- |
| Not Connected | The bot agent connector is not connected to the bot server. |
| Connected | The bot agent connector is connected to the bot server. |
