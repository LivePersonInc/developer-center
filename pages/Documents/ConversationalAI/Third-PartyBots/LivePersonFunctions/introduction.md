---
pagename: Introduction
redirect_from:
  - custom-third-party-bots.html
  - bot-connectors-custom-third-party-bots.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: LivePerson Functions
permalink: third-party-bots-liveperson-functions-introduction.html
indicator:
---

### Overview

The following documentation outlines the configuration for a bot connector using LivePerson Functions. Instead of a vendor, like IBM Watson for example, LivePerson Functions allows you to write your own custom bot and connect it to Conversational Cloud. In order to achieve this, we will implement a LivePerson Function.

{: .important}
As the LivePerson functions feature uses [LivePerson Functions](https://developers.liveperson.com/liveperson-functions-overview.html), it's required to enable `FaaS Admin` permissions. To be able to implement your own LivePerson Functions, you will also need to enable `FaaS Developer` permissions. Take a look at this [Getting Started Guide](function-as-a-service-getting-started.html) for more information on setting uo LivePerson Functions and its permissions.

### Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps. This guide assumes you have completed this guide.

Once you have completed the guide above, you will be presented with following screen to complete the Vendor Settings in order to add a bot.

<img class="fancyimage" style="width:600px" src="img/faas/vendor.png">

Click on the "Create LivePerson Function" button. This will allow you to implement a LivePerson Function. Once you click on the button, you will be redirected to the LivePerson Functions main page. From here, you will need to develop and then deploy a LivePerson Function which will act as the bot connector.

#### Step-by-Step function creation and deployment guide

##### Step 1 - Create a function

Create a new function using the **Third-Party Bots Custom Integration** event.

##### Step 2 - Edit the Function

Adjust the default code from the function template according to your needs by modifying the function (see below for more information on relevant considerations and code examples). On the right side you can see an example of the payload (in the sidebar, which you might need to open). Please see this document for more information on [developing functions](liveperson-functions-development-overview.html).

##### Step 3 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

<div class="important">Try to deploy functions with a runtime of less than one second. If the runtime is longer, you may get a bad user experience because of race conditions within the server. For example, if you create a function based on the <b> Participants Change</b> event and an agent joins the conversation, the consumer may see the resulting `systemMessage` <b>after the agent already responded to the consumer themselves</b>.</div>

#### Last step in Third-Party Bots

After you successfully implemented and deployed a LivePerson Function, press the refresh button next to the function selection menu and select your function.

{: .important}
You have to agree to Data Disclaimer in order to use the services of the bot connector. To do that, click on the checkbox "I agree to the Data Disclaimer" checkbox.

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail. If it has succeeded, you're done!

The following payload content will be received from the Function during a conversation with the assigned bot.

<table>
  <thead>
  <tr>
    <th>Property </th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>message</td>
    <td>string</td>
    <td>message sent by the customer</td>
  </tr>
  <tr>
    <td>event</td>
    <td>Object</td>
    <td>event triggered by the customer (welcome event)</td>
  </tr>
  </tbody>
</table>
