---
pagename: Introduction
redirect_from:
  - bot-connectors-ebot7.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: e-bot7
permalink: third-party-bots-e-bot7-introduction.html
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
To use this integration you need to make sure to have set up an account with e-bot7, have an existing bot, and created an application to be able to connect with third-party systems. You can read more about applications in the [documentation of e-bot7](https://docs.e-bot7.com/docs/applications/how_apps_work).

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide before using this document to complete pre-requisite steps.

You will be presented with the following screen to complete the Vendor Settings in order to add bot connector.

<figure>
 <img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/e-bot7-configuration.png" alt="vendor configuration step for e-bot7">
 <figcaption>Figure 1.1: Third-Party Bots vendor configuration step for e-bot7</figcaption>
</figure>

The parameters are as follows:

| Item               | Description                                                                                                                                                                                                                                                                                                                                              |          Example           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------: |
| App Key            | To connect to bots within e-bot7 an app key is necessary. The app key must start with `xapp`. It is shown only a single time once the application in e-bot7 is created.                                                                                                                                                                                  |     `xapp-xxxxxxxxxx`      |
| Bot ID             | The identifier of the bot in e-bot7 to connect with                                                                                                                                                                                                                                                                                                      | `s6j68d6ej3w21mnj01c03e0a` |
| Bot Response Delay | The bot response delay time is used once the computation of an answer from the vendor bot takes longer to respond to a message. This may happen whenever an asynchronous call (HTTP request) is used to generate a response. Please configure a time in seconds that indicates the maximum of such a delay. If no delay is expected, it can be set to 1. |            `1`             |

### Limitations

{: .important}
The technical interface of e-bot7 does not allow us to take analytic insights into the answer generation of a bot. For this reason, there is unfortunately no statistical data that is collected in connection with the evaluation of intent or that can be evaluated in the Conversation Cloud.
