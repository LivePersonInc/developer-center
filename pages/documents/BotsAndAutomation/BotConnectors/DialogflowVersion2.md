---
pagename: Google Dialogflow Version 2
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-google-dialogflow-version-2.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Google Dialogflow Version 2**.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/dialogflowversion2/vendor.png">

Figure 1.1 Showing the configuration that needed to be filled

The following Dialogflow V2 information should be provided to LivePerson:

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
    <td>bxx-xxxxxxx-xxx-dialogflow-v2</td>
  </tr>
  <tr>
    <td>User email address</td>
    <td>Email address of the Google Service account</td>
    <td>dialogflow-xxxxxx@bxx-xxxxxxx-xxx-dialogflow-v2.iam.gserviceaccount.com</td>
  </tr>
  <tr>
    <td>User private key</td>
    <td>Private key of the IAM Account, please keep the formatting as provided by Google</td>
    <td>-----BEGIN PRIVATE KEY-----
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        WQpmxLe3h4XeslUI7Eowz2sypu72Q9+j1xOEtc9asl37wLac/zo0xy7wNxnDau+x
        rOOTX/VAniuByeZ98mIRZQBxz6qInJ4el8PFT7eJbC0+IMfiljqrMDqy/N4CR2gE
        qqCVtY4kEWGr6a5IA/IBFENFPlADbY/TRBbInvakA1iqWj5yCOslGo7SmwleuJ6U
        kUbjdmBI937k0AFWrbKAjNXLuF174Qx7B7NQm9G6iud+nGu0XwH2g2FPEQkvA8YL
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        VZ10hvsFAgMBAAECggEAOEnJpSNijvHCbV1GIBInxpqNiMCENf+ZDMeQqs9Tbdmh
        CxQrS/pls2bkn6s/VNBNfY7GU9Sn7qgEzUycvu3SpID95vfQ+T4hrk5hLpKijQr9
        Wv8aM8eqy0/I1ECn6Lb98WUaUfQVj7YctawoNdTjhxij0xCxY1hmVVQ4CdTf0av6
        irukA5ySYPR3pahSMYwfnCgnRMLtLFX2NqvMFbUvwDpYJGE6h9k+Pv74Uyw3heEN
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        K3ASHyQ9v77+F1KaqR/wog3LUzSJtD0qLRVt0pmyKQKBgQDkvS8a29/dJvlQL+AY
        NekZpgZ+zNXTPqiXRXyfvDBBJO4eFd4XQlZPCT/Iw5gT9mWzOL9WKxs0ImRrRojZ
        asOn+BlXfeVZWEpmpvfXYnKwgpm2+sqOjyRhGEovC8yLA8PaDWKgtwPpb+MCzAF3
        zTMT8UdCE4IFmusDxGIypQjG1wKBgQC4EQMru2806Jadd037TLFY7FoUB5JJPVA1
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        ZSnKi8tBU1u8+JY/sWniyyahFNDMDiKkmEd6M/DsM2N/RQZeqXi5R9HSC3INn175
        bDP7tpg9gwKBgHtby9ugWMrcCfjE2QY1jNDYSQh5T5ftYt6yCtPameuIDyMKiAvj
        KsjVJCER2yJo79AH+qht9u3W3nE8SPF4MqyTkJcuvlHA298gjOkLnu6ygFO+TR80
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        lStr0CKK42MErzQxFzO8VMg982DG/mW+TpaaMRP7yxXVLxUh3/d9aoq+fbzVnudr
        Y13nJnR6+RPj8Qv2zP39ClwCfGx8rkw9SOMl8pL11kD4Zc1VHzzkDytFmOge2cDO
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        IFRnWV9jafiw2t92CY9mRzqF5puk8iRtMiCRjy3u4L+RHdvYkZPqO9CZUPvq9t0q
        q+J780stgv56BE7TAuIjRPkN+GPcqnm69qQvJdzSPc5dw5ZmM8b5TtIvlipzjU89
        BSioVh/nHPX2QX2MKSbue+k=
        -----END PRIVATE KEY-----</td>
  </tr>
  <tr>
    <td>Google Cloud scopes</td>
    <td>Authentication scopes of the used IAM role</td>
    <td>https://www.googleapis.com/auth/cloud-platform</td>
  </tr>
  </tbody>
</table>

**NOTE**: Dialogflow V2 adheres to Google’s oAuth2 unlike the V1 implementation. Some degree of familiarity with Google IAM policies and IAM console is necessary for setting up a valid Dialogflow V2 client with _Read Only API access_. A _service account_ is a **prerequisite** for setting up the above config. Documentation available [here](https://dialogflow.com/docs/reference/v2-auth-setup).

The expected output of a service account setup is a JSON file, example below:

**Format of JSON file containing credentials**

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

Figure 1.2

**NOTE**: The config wizard expects each of the pieces of auth data to be copied from the JSON file, without quotes. For the private_key especially, do not modify the string, do not remove any of the newline characters. Just copy and paste directly.

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail as shown in Figure 1.4 and 1.5 respectively.

<img class="fancyimage" style="width:600px" src="img/dialogflowversion2/connection-success.png">

Figure 1.4 Showing the success case of the valid credentials

<img class="fancyimage" style="width:600px" src="img/dialogflowversion2/connection-failed.png">

Figure 1.5 Showing the fail case of the invalid credentials

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Google DialogFlow V2 bot.

{: .important}
Following guide is going to introduce how to implement functions specifically for **Dialogflow V2** using [Dialogflow console](https://console.dialogflow.com/api-client/). Continue if you are familiar and have access to [Dialogflow console](https://console.dialogflow.com/api-client/).

### Limitations

#### Dialogflow V2 Query length Limit

<div class="notice">
The Dialogflow V2 service has a <a href="https://dialogflow.com/docs/reference/agent/query" target="_blank">limitation</a> on the length of the ‘query’ property. Any query longer than 255 characters will invoke a custom event in Dialogflow.
To handle this gracefully, we recommend building a simple intent that handles a ‘DIALOGFLOW_CHAR_LIMIT’ *event*.
</div>

1. Create an intent with an event using the string: DIALOGFLOW_CHAR_LIMIT

   <img style="width:600px" src="img/dialogflowversion2/image_7.png">

   Figure 2.1

2. Do not forget to add a custom response in the **Text response** section.

   <img style="width:700px" src="img/dialogflowversion2/image_8.png">

   Figure 2.2

### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Dialogflow V2 and an intent determined.

The below documents cover where to configure the initial message on a given platform.

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Docs</th>
      <th>Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iOS</td>
      <td>https://developers.liveperson.com/consumer-experience-ios-sdk-localizationkeys.html</td>
      <td>hiMessage</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>https://developers.liveperson.com/android-modifying-string.html#resultOverlayRecordTemplate</td>
      <td>lp_first_message</td>
    </tr>
    <tr>
      <td>Web</td>
      <td>N/A</td>
      <td>Default LP Message</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response.
In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME’ event.

<img class="fancyimage" style="width:550px" src="img/dialogflowversion2/image_6.png">

Figure 3.1

### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 4 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”
“CUSTOM”

Only the “CUSTOM” can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace.

<img class="fancyimage" style="width:600px" src="img/dialogflowversion2/image_9.png">

Figure 3.2

### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using the built in "Actions and Parameters" section of the Dialogflow console.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
   Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the _action_ item in the response object.

Action: **TRANSFER (Case sensitive)**

Parameters: ‘skill’ **(Case sensitive)** with ‘value’ of skill name (case sensitive) in LiveEngage.

<img class="fancyimage" style="width:600px" src="img/dialogflowversion2/image_10.png">

Figure 4.1

### Send Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send structured content via Dialogflow V2, send a _custom payload_ option via an intent.

<img class="fancyimage" style="width:800px" src="img/dialogflowversion2/image_11.png">

Figure 5.1

This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Dialogflow console.

**NOTE:** Caution when creating a custom payload. Delete the existing text response before saving the intent. If not LiveEngage will receive a blank text response followed by rich content payload.

Example Metadata

```json
{
  "metadata": [
    {
      //Mandatory
      "type": "ExternalId", //Mandatory
      "id": "ABCD1234" //Mandatory
    }
  ],
  "structuredContent": {
    //Mandatory
    "type": "vertical",
    "elements": [
      {
        "type": "image",
        "url": "https://i.ytimg.com/vi/zmeByDJ02mQ/hqdefault.jpg",
        "tooltip": "image tooltip"
      },
      {
        "type": "text",
        "text": "product name (Title)",
        "tooltip": "product name (Title)"
      },
      {
        "type": "text",
        "text": "product category (type)",
        "tooltip": "product category (type)"
      },
      {
        "type": "text",
        "text": "$155.99",
        "tooltip": "$155.99"
      }
    ]
  }
}
```

Figure 5.2 Dialogflow Example Custom Payload

### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Dialogflow console.

The action field needs to be set to **CLOSE_CONVERSATION** to instruct the connector to to close the conversation.

<img class="fancyimage" style="width:800px" src="img/dialogflowversion2/image_12.png">

Figure 6.1
