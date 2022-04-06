---
pagename: Introduction
redirect_from:
  - bot-connectors-custom-endpoint.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Custom Endpoint
permalink: third-party-bots-custom-endpoint-introduction.html
indicator:
---

### Overview

The following document outlines the configuration of the  **Custom Endpoint** connector.

It enables brands to connect orchestration layers, develop their own adapters for unsupported ai vendors or write
completely custom bot implementations and connect them to the Conversational Cloud.
The custom endpoint feature of Third Party Bots allows brands to build their API that generates
Bot responses for incoming consumer messages, and connect to conversations taking place in the
Conversational Cloud.

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide first to complete the necessary preparations for your account to use Third Party Bots

#### Prerequisite for Vendor Configuration

To complete the Custom Endpoint vendor configuration step, please ensure you have the following measures taken:

- The orchestration layer (a.k.a Custom Endpoint service) must be implemented according to the provided API specification
  defined by Third-Party Bots. A reference implementation of the API specification can be found on the public git
  repository [here](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).
  Third-Party Bots connector will call the defined endpoint with the consumer message as payload.

- The custom endpoint domain must be whitelisted before configuring/starting the bot. If
  whitelisting is not done then the bot will fail to start. Also the "Test Connection" feature will indicate an issue
  successfully. Please contact the Third-Party Bots team or LivePerson account representative to set this up for you.

- Third-Party Bots uses an App Installation for authentication of Custom Endpoint bot. There is a guide available
  [here](conversational-cloud-applications-installing-conversational-cloud-applications.html) on how to install
  an Application in the Conversational Cloud. Please contact the LivePerson account representative to ensure you
  have already installed the app. The example payload for App Installation can be found below
  (Please note the `scope` value as well)

```json
{
  "client_name": "Custom Endpoint bot",
  "display_name": "Custom Endpoint bot",
  "enabled": true,
  "response_types": ["token"],
  "scope": "ihub.tpb.customendpoint",
  "grant_types": ["client_credentials"]
}
```

#### Vendor Configuration

Once you have completed the prerequisite for Vendor configuration you can continue with the wizard.

<img class="fancyimage" style="width:600px" src="img/customendpoint/custom-endpoint-wizard.png">

Figure 1.1 Custom Endpoint Vendor Step

The following Custom Endpoint information should be provided to Third-Party Bots:

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
    <td>Base URL</td>
    <td>Custom Endpoint service endpoint that will be called by Third-Party Bots. Must be 
        whitelisted and respond as per API specification. (No trailing <b>/</b> at the end of URL)
    </td>
    <td>https://examplecustomendpoint.com/api</td>
  </tr>
  <tr>
    <td>Client ID</td>
    <td>ID of the Installed App with the scope <b>ihub.tpb.customendpoint</b></td>
    <td>xxxxxxx-123e-xxxx-xxxx-xxxxxxx0441c</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Client Secret of the Installed App</td>
    <td>1xxx2xxk7xxxx49r4xxxxx2qs</td>
  </tr>
  <tr>
    <td>Bot ID</td>
    <td>Bot Identifier created by the Custom Endpoint service. Preferred is UUID</td>
    <td>1e9bebc6-0403-43a1-9a5e-2e17ca876568</td>
  </tr>
  <tr>
    <td>Environment</td>
    <td>The environment of the bot that should be selected for communication with the Custom 
        Endpoint service. Defaults to draft </td>
    <td>draft</td>
  </tr>
  </tbody>
</table>

{: .important}
You have to agree to the Data Disclaimer to use the services of the Third-Party Bots connector.
For that, you can click on the checkbox "I agree to the Data Disclaimer"

#### Test Connection

For validation of the credentials provided, you can now perform a test connection request
to see if everything that you have provided is working and reachable. You can click on the
button "Test Connection" to see if the connection succeeds or fails.

Common use cases of the Custom Endpoint bot Test Connection failure can be the following:

- Base URL is not responding as per the [API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
- Credentials provided are wrong e.g. wrong Client ID/Secret, Bot ID or Environment e.tc.
- Bot state is not returned as `online` via the [Get Bot State](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
  endpoint (defined in [API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service))

You will be able to save the configuration even if the test fails, but your bot will not be able to start successfully.

<img class="fancyimage" style="width:600px" src="img/customendpoint/test-connection-failed.png">

Figure 1.4 Showing the failure case when testing the connection.

Once you are done providing configuration you can save it by pressing "Done". **_Congratulations!_** You have
completed the configuration of the Custom Endpoint bot.

{: .important}
Following guide is going to introduce how to implement functions for Custom Endpoint using reference of
[API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).
Continue if you are familiar with how to implement a Custom Endpoint service.

### Limitations

- Custom Endpoint support only content events and rich content events (consumer messages).
  We do not support any other UMS events nor do we forward any other events.
