---
pagename: Introduction
redirect_from:
  - bot-connectors-google-dialogflow-cx.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Google Dialogflow CX
permalink: third-party-bots-google-dialogflow-cx-introduction.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Google Dialogflow CX**.

### Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide first to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-wizard.png">

Figure 1.1 Dialogflow CX Vendor Step

The following Dialogflow CX information should be provided to LivePerson:

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
    <td>Language code</td>
    <td>Language code for Dialogflow</td>
    <td>en-US</td>
  </tr>
  <tr>
    <td>Project ID</td>
    <td>Dialogflow project id</td>
    <td>bxx-xxxxxxx-xxx-dialogflow-cx</td>
  </tr>
  <tr>
    <td>Agent ID</td>
    <td>Dialogflow CX agent id which can be taken from the URL of Dialogflow CX agent console. 
    Format: projects/&lt;Project ID&gt;/locations/&lt;Location ID&gt;/agents/<b>&lt;Agent ID&gt;</b>
</td>

<td>abcderwe-dc8e-4a83-b2f2-369089753c42</td>

  </tr>
  <tr>
    <td>Environment ID</td>
    <td>Dialogflow CX environment id (optional)</td>
    <td>abc4fff1-380c-4c8a-afbb-0289bc4e1234</td>
  </tr>
  <tr>
    <td>User email address</td>
    <td>Email address of the Google Service account</td>
    <td>dialogflow-xxxxxx@bxx-xxxxxxx-xxx-dialogflow-cx.iam.gserviceaccount.com</td>
  </tr>
   <tr>
    <td>Service location</td>
    <td>Location of the Dialogflow API Backend</td>
    <td>us-dialogflow.googleapis.com</td>
  </tr>
  <tr>
    <td>User private key</td>
    <td>Private key of the IAM Account, please keep the formatting as provided by Google</td>
    <td>-----BEGIN PRIVATE KEY-----
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        BSioVh/nHPX2QX2MKSbue+k=<br /> 
        -----END PRIVATE KEY-----</td>
  </tr>
  </tbody>
</table>

{: .important}
`EnvironmentId` is an optional parameter. When it is not provided, the current Draft Flow will be used.

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

<br />
#### Service Account

Dialogflow CX adheres to Google’s oAuth2. Some degree of familiarity with Google IAM policies and IAM console is necessary for setting up a valid Dialogflow CX client with _Read Only API access_. A _service account_ is a **prerequisite** for setting up the above config. Documentation available [here](https://dialogflow.com/docs/reference/v2-auth-setup).

The expected output of a service account setup is a JSON file, example below:

```json
{
  "type": "service_account",
  "project_id": "[PROJECT-ID]",
  "private_key_id": "[KEY-ID]",
  "private_key": "-----BEGIN PRIVATE KEY-----\n[PRIVATE-KEY]\n-----END PRIVATE KEY-----\n",
  "client_email": "[SERVICE-ACCOUNT-EMAIL]",
  "client_id": "[CLIENT-ID]",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "Client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/[SERVICE-ACCOUNT-EMAIL]"
}
```

Figure 1.2 JSON containing Private key that is generated during the Service Account setup

{: .notice}
The config wizard expects each of the pieces of auth data to be copied from the JSON file, without quotes. For the private_key especially, do not modify the string, do not remove any of the newline characters. Just copy and paste directly.

<br />
#### Environments
The Connector supports [Dialogflow CX environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-environments.png">

Figure 1.3 Environments in the Dialogflow CX Console

The necessary Environment ID is the last part of the environment URI you can copy in the Dialogflow CX console.

{: .important}
projects/test-project/locations/us-central1/agents/a11a1aa1-aa1a-1a11-a1a1-1111111111a11/environments/**_53ad121d-5196-41a3-4682-d9de6df94203_**

<br />
#### Test Connection

For validation of the credentials provided, you can now perform a test connection request to see if everything that you
have provided is working and reachable. You can click on the button "Test Connection" to see if the connection succeed
or fails.
You will be able to save the configuration even if the test fails, but your bot will not be able to start successfully.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-wizard-failed.png">

Figure 1.4 Showing the failure case when testing the connection.

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Google DialogFlow CX bot.

{: .important}
Following guide is going to introduce how to implement functions specifically for **Dialogflow CX** using [Dialogflow console](https://console.cloud.google.com/apis/api/dialogflow.googleapis.com/). Continue if you are familiar and have access to [Dialogflow console](https://console.cloud.google.com/apis/api/dialogflow.googleapis.com/).

### Limitations

#### Query length Limit

<div class="notice">
The Dialogflow CX service has a <a href="https://dialogflow.com/docs/reference/agent/query" target="_blank">limitation</a> on the length of the ‘query’ property. Any query longer than 255 characters will invoke a custom event in Dialogflow.
To handle this gracefully, we recommend building a simple intent that handles a ‘DIALOGFLOW_CHAR_LIMIT’ *event*.
</div>

1. Create an intent with an event using the string: DIALOGFLOW_CHAR_LIMIT

   <img style="width:600px" src="img/dialogflowcx/image_7.png">

   Figure 1.5

2. Do not forget to add a custom response in the **Text response** section.

   <img style="width:700px" src="img/dialogflowcx/image_8.png">

   Figure 1.6
