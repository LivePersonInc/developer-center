---
pagename: Alerts
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-alerts.html
indicator: both
---

You can set up alerts to notify you when a deployed bot's [agent connector status](bots-status-overview.html#statuses) changes to Offline or Online. (A bot's status changes to Stopped when it is stopped manually, so notifications about this are not sent.)

While these alerts do inform you of changes to the status of the bot's agent connector, they don't provide insight into changes to the status of backend services supporting the Bots and Automation platform. For information on the latter, visit the [LivePerson Service Status Dashboard](https://status.liveperson.com/), which is managed by LivePerson [Support](https://knowledge.liveperson.com/security-regulations-liveperson-support-policy.html). You can subscribe to events posted to the dashbord. You can also use the API to create your own dashboard or integrate with your own monitoring system.

{: .important}
To set up alerts, you don't need permissions to access the Bots Status application.

**To set up an alert for a bot**

1. Do one of the following depending on where your account is located:

    * If your environment is LivePerson Cloud (i.e., you access Conversation Builder from within Conversational Cloud, and your browser is pointing to the "liveperson.net" domain), open one of the Conversational AI applications: Conversation Builder, Intent Manager, Bots Status, etc. Then, in the upper-right corner of the menu bar, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_subscriptions.png"> (Subscriptions icon).

    * If your environment is Amazon Web Services or AWS (i.e., you access Conversation Builder directly, and your browser is pointing to the "livepersonai.com" domain), in the top banner, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_profile_person.png">, and then select **Subscriptions**.

2. In the upper-right corner, select the bot to subscribe to, and click **Add Bot**. You can select from all bots to which you have access, regardless of whether they have agent connectors. However, to receive alerts, the bot must have at least one, deployed agent connector.
3. Select how you want to receive alerts: Email and/or Phone (text). The Phone option is only available if your environment is AWS. 
4. For **Bot monitor**, click the slider to enable (turn on) the alert.

    <img class="fancyimage" style="width:850px" src="img/ConvoBuilder/subscriptions_2.png">
