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

The following documentation outlines the configuration for the connector specifically for **Custom Endpoint**.

Custom Endpoint enable brands to plug in orchestration layers between their bot and Conversational Cloud.
The custom endpoint feature of Third Party Bots allows brands to build their own API that generates
Bot responses for incoming consumer messages, and connect to conversations taking place in the
Conversational Cloud.

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide first to complete bot configuration pre-requisite steps.

#### Prerequisite for Vendor Configuration

To complete the Custom Endpoint vendor configuration step, please ensure you have following measures taken:

- The orchestration layers (a.k.a Custom Endpoint service) is expected to respond as per API specification
  defined by Third-Party Bots. An example of such API specification Reference can be find on public git
  repository [here](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).
  Third-Party Bots connector will call APIs with the consumer message as a payload.

- Custom Endpoint service endpoint/URL must be whitelisted before configuring/starting the bot. If
  whitelisting is not done then bot will not start neither will be able to perform test connection
  successfully. Please contact Third-Party Bots team or LivePerson account representative to set this up for you.

- Third-Party Bots uses an App Installation for authentication of Custom Endpoint bot. There is guide available
  [here](conversational-cloud-applications-installing-conversational-cloud-applications.html) on how to install
  an Application in Conversational Cloud. Please contact the LivePerson account representative to ensure you
  have already installed app. The example payload for App Installation can be find below
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
        whitelisted and respond as per API specification. (No trailing <b>/</b> in the end of URL)
    </td>
    <td>https://examplecustomendpoint.com/api</td>
  </tr>
  <tr>
    <td>Client ID</td>
    <td>ID of the Application Installation with the scope <b>ihub.tpb.customendpoint</b></td>
    <td>xxxxxxx-123e-xxxx-xxxx-xxxxxxx0441c</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Client Secret of the Installed App</td>
    <td>1xxx2xxk7xxxx49r4xxxxx2qs</td>
  </tr>
  <tr>
    <td>Bot ID</td>
    <td>Bot Identifier set recognized the Custom Endpoint service. Preferred is UUID</td>
    <td>1e9bebc6-0403-43a1-9a5e-2e17ca876568</td>
  </tr>
  <tr>
    <td>Environment</td>
    <td>Environment of the bot which should be selected for communication with service. Defaults to draft </td>
    <td>draft</td>
  </tr>
  </tbody>
</table>

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector.
For that you can click on the checkbox "I agree to the Data Disclaimer"

#### Test Connection

For validation of the credentials provided, you can now perform a test connection request to see if everything that you
have provided is working and reachable. You can click on the button "Test Connection" to see if the connection succeed
or fails.

Common use cases of the Custom Endpoint bot Test Connection failure can be follows:

- Base URL is not responding as per the [API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
- Credentials provided are wrong e.g. wrong Client ID/Secret, Bot ID or Environment e.tc.
- Bot state is not returned as `online` via the Get Bot State endpoint (defined in [API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service))

You will be able to save the configuration even if the test fails, but your bot will not be able to start successfully.

<img class="fancyimage" style="width:600px" src="img/customendpoint/test-connection-failed.png">

Figure 1.4 Showing the failure case when testing the connection.

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have
completed the configuration of the Custom Endpoint bot.

{: .important}
Following guide is going to introduce how to implement functions for Custom Endpoint using reference of
[API Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).
Continue if you are familiar with how to implement a Custom Endpoint service.

### Limitations

- Custom Endpoint support only content events content events and rich content events (consumer messages). We do not support any other UMS events nor we forward any other events.
