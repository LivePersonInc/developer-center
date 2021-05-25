---
pagename: Introduction
redirect_from:
  - bot-connectors-microsoft-bot-framework.html
  - third-party-bots-microsoft-bot-framework.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Microsoft Direct Line
permalink: third-party-bots-microsoft-direct-line-introduction.html
indicator:
---

### Overview
The following documentation outlines the details of the Connector for Microsoft Direct Line.
It describes how the connector is implemented and what limitations this imposes on bots that are added via this connector.
It shows how activities need to be composed to successfully send messages and actions to the **Conversational Cloud**.

It does not go into details on implementation details of such a bot.
Microsoft provides different ways to implement chat bots like the 
[Bot Framework SDK](https://github.com/microsoft/botframework-sdk#bot-framework-sdk-v4).
A good starting point is the documentation on 
[Azure Bot Services](https://docs.microsoft.com/en-us/azure/bot-service/).

### Limitations

{: .important}
Third-Party Bots only supports the Direct Line API version 3.0.

{: .important}
Third-Party Bots only supports authorization with the Direct Line secret. Authorization with a Bot ID and Tenant ID is 
not supported.

{: .important}
Third-Party Bots uses the replyToId of a bot activity to match it against the consumer message.
Bot activities that are not an explicit response to a consumer message won't be processed.

{: .important}
The connector respects the error codes sent by the Direct Line API. For example, the API sends the HTTP Status Code 
`502` if a bot does not handle a message within 15 seconds.
This means that our connector won't process activities that are sent by the bot in this case. Instead, it resends 
the message up to 2 times on server errors.
For details how a bot can acknowledge the request within 15 seconds, see Microsoft's documentation on 
[how bots work](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0&tabs=csharp).

### Configuration

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/microsoft-configuration-step.png">
Figure 1.1 The vendor configuration step for Microsoft Direct Line bots
<br>
<br>

{: .important}
**Test Connection** requires the bot to acknowledge the test message that will be sent.
The bot does not necessarily need to send any response activities for this message.

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
    <td>Direct Line Secret</td>
    <td>The first key provided in the direct line channel configuration </td>
    <td>x3XkXXoadX0.xknotlXk8VbU6vXXXX4kwdsGW-N3m-4XjTHPTde4XXX</td>
  </tr>
  <tr>
    <td>Direct Line Endpoint</td>
    <td>
        The endpoint the connector should use to reach the bot. Apart from the default you can also choose an endpoint 
        that is close to the region that your account is configured for
    </td>
    <td>https://directline.botframework.com/v3/directline</td>
  </tr>
  <tr>
    <td>Multiple Activities (Optional)</td>
    <td>
        The connector by default only polls for activities until he finds some on the channel. 
        If you intent to send multiple activities independently from each other especially after the bot has acknowledged the request you should 
        activate this feature.
        The value describes the time the connector will wait [in milliseconds] and then check again for further 
        responses. The connector will continue checking in this interval as long as he finds more responses. 
        If no additional responses can be found after this interval all responses found until this point will be returned.
    </td>
    <td>1000</td>
  </tr>
  <tr>
    <td>Power Virtual Agents Bot</td>
    <td>
        This enables certain features for best compatibility with Power Virtual Agents. Enabled this if your bot was created on that platform.
        See the PVA subsection for more details.
    </td>
    <td></td>
  </tr>
  </tbody>
</table>

Figure 1.2 Detailed parameter description
<br>
<br>

The Direct Line Secret can be found in the Azure Portal if you select the corresponding Web App Bot and edit the 
Configuration of the Direct Line Channel.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/microsoft-secret-azure.png">
Figure 1.3 Location of the Direct Line secret in Azure
<br>
<br>

### Implementation Details

If a message is routed to the bot the connector implements the following steps to retrieve the responses from the 
Direct Line API:
* It will get a client either from the cache or by getting the information from the Direct Line API.
* In case of a new conversation, a request to start a new conversation is also send to the Direct Line API.

<img class="fancyimage" src="img/ThirdPartyBots/microsoft-flow-init-conversation.png">
Figure 1.4 Flow for starting/resuming a conversation
<br>
<br>

After a conversation client has been retrieved in this way, the customer message is send to the Direct Line API.
The connector does retries on error responses and will poll for the responses after the message has been successfully 
send. 

<img class="fancyimage" src="img/ThirdPartyBots/microsoft-flow-send-activity.png">
Figure 1.5 Flow for getting bot responses to a customer message

