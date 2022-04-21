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

{: .notice}
Please note Custom Endpoint is only accessible for early adapters. Contact
Third-Party Bots team to enable the Custom Endpoint for your brand.

The following document outlines the configuration of the **Custom Endpoint** connector.

The Custom Endpoint feature of Third Party Bots allows brands to provide their REST API
as a service of bot responses inside the Conversational Cloud. This is complementary to
the LivePerson Functions integration and suited for solutions that are: too complex to be
comfortably implemented in a LivePerson function, or need to be implemented in a different
programming language or they are necessary to be fully controlled by the brand.
Possible user-cases that can help brands leverage the custom endpoint feature are as follows:

- Brands can provide a REST API service as an orchestration layer between the Conversational Cloud
  and the AI vendors of their choice that fulfills tasks like context enrichment, data
  sanitization, or routing.
- Brands can connect their instance of the Conversational Cloud to AI vendors that are not
  supported out-of-the-box by LivePerson. AI vendors can provide a REST API service to
  get out-of-the-box support between the Conversational Cloud and their platform.

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide first to complete the necessary preparations for your account to use Third Party Bots

#### Prerequisite for Vendor Configuration

To complete the Custom Endpoint vendor configuration step, please ensure you have the following measures taken:

- The Custom Endpoint service must be implemented according to the provided API specification
  defined by Third-Party Bots. A reference implementation of the API specification can be found on the public git
  repository [here](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).
  Third-Party Bots connector will call the defined endpoint with the consumer message as payload.

- The Custom Endpoint service domain must be whitelisted before it can be used in Third-Party Bots. If
  whitelisting is not done, then the bot will not start nor will it be able to perform a test connection.
  Please contact the Third-Party Bots team or LivePerson account representative to set this up for you.

- Third-Party Bots uses an App Installation for authentication of Custom Endpoint bot. There is a guide available
  [here](conversational-cloud-applications-installing-conversational-cloud-applications.html) on how to install
  an Application in the Conversational Cloud. Please contact the LivePerson account representative to ensure you
  have already installed the app. The example payload for App Installation can be found below
  (Please note, the `scope` value as well. Currently Third-Party Bots itself does not enforce any specific scope.
  This is expected to change in a future release)

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
    <td>ID of the Installed App</td>
    <td>xxxxxxx-123e-xxxx-xxxx-xxxxxxx0441c</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Client Secret of the Installed App</td>
    <td>1xxx2xxk7xxxx49r4xxxxx2qs</td>
  </tr>
  <tr>
    <td>Bot ID</td>
    <td>Alphanumeric bot Identifier for the bot on the Custom Endpoint service. We recommend using UUIDs</td>
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
