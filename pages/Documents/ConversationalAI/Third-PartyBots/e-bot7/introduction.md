---
pagename: Introduction
redirect_from:
  - bot-connectors-ebot7.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: e-bot7
permalink: third-party-bots-ebot7-introduction.html
indicator:
---

### Overview

{: .notice}
Please note the e-bot7 connector is only accessible for early adopters. Enabling the use requires a whitelisting done by
LivePerson. Contact your LivePerson account representative for assistance.

The following document outlines the configuration of the **e-bot7** connector.

The e-bot7 feature of Third Party Bots allows brands to connect to their existing bots in the ecosystem of e-bot7
as a service of bot responses inside the Conversational Cloud.

{: .important}
In order to use this integration you need to make sure to have set-up an account with e-bot7, have an existing bot and created an application to be able to connect with third-party systems. You can read more about applications in the [documentation of e-bot7](https://docs.e-bot7.com/docs/applications/how_apps_work)

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide before using this document to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/e-bot7-configuration.png">

Figure 1.1 e-bot7 Vendor Step

The parameters are as follows:

<table>
  <thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>App Key</td>
    <td>In order to connect to bots within e-bot7 an app key is necessary. The app key must start with 'xapp'. It is shown only a single time once the application in e-bot7 is created.</td>
    <td>xapp-xxxxxxxxxx</td>
  </tr>
  <tr>
    <td>Bot ID</td>
    <td>The identifier of the bot in e-bot7 to connect with</td>
    <td>s6j68d6ej3w21mnj01c03e0a</td>
  </tr>
  <tr>
    <td>Bot Response Delay</td>
    <td>The bot response delay time is used once the computation of an answer from the vendor bot takes longer to respond to a message. This may happen whenever an asynchronous call (HTTP request) is used to generate a response. Please configure a time in seconds which indicates the maximum of such a delay. If no delay is expected, it can be set to 1.</td>
    <td>1</td>
  </tr>
  </tbody>
</table>

### Limitations

{: .important}
The technical interface of e-bot7 does not allow us to take analytic insights into the answer generation of a bot. For this reason, there is unfortunately no statistical data that is collected in connection with the evaluation of an intent or that can be evaluated in the Conversation Cloud.
