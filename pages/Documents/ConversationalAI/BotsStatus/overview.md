---
pagename: Overview
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-overview.html
indicator: both
---

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

To view a connector's statuses, scroll to the right in the dashboard.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/bots_status_statuses.png">

#### Bot agent connector statuses

An agent connector can have one of the following statuses:

| Status | Description |
| --- | --- |
| Ready to Start | The connector was added successfully, but it hasn't been started for the first time. |
| Not Connected | The connection to Conversational Cloud has been dropped, or the connector has just started and hasn't yet had the chance to update its status after connection. |
| Online | The connector is running, and all end-to-end connections are working well. |
| Offline | At least one underlying component isn't working, causing end-to-end connections not to function. The connector is in an error state and isn't running. |
| Stopped | The connector isn't running because it was manually stopped. |

#### Conversational Cloud connection statuses

#### Bot Server connection statuses

