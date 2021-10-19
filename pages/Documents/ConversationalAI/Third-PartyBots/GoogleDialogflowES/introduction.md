---
pagename: Introduction
redirect_from:
  - third-party-bots-google-dialogflow-es.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Google Dialogflow ES
permalink: third-party-bots-google-dialogflow-es-introduction.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for
`Google Dialogflow ES`, also known as `Google Dialogflow Essentials`

### Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings if you select Dialogflow ES.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-es-configuration-step.png">

Figure 1.1 Dialogflow ES Vendor Step

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
    <td>Language code</td>
    <td>Language code for Dialogflow</td>
    <td>en-US</td>
  </tr>
  <tr>
    <td>Project ID</td>
    <td>Dialogflow project id</td>
    <td>bxx-xxxxxxx-xxx-dialogflow-es</td>
  </tr>
  <tr>
    <td>User email address</td>
    <td>Email address of the Google Service account</td>
    <td>dialogflow-xxxxxx@bxx-xxxxxxx-xxx-dialogflow-v2.iam.gserviceaccount.com</td>
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
ABabcLe3h4XeslUI7Eowz2sypu72Q9+j1xOEtc9asl37wLac/zo0xy7wNxnDau+x
    
...
        
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

{: .important}
Dialogflow ES adheres to Google’s oAuth2. Some degree of familiarity with Google IAM policies and IAM console is 
necessary for setting up a valid Dialogflow ES client with _Read Only API access_.
Follow the Dialogflow ES documentation available [here](https://cloud.google.com/dialogflow/es/docs/quick/setup#sa-create) 
in order to set up the necessary **Service Account**

While creating the service account a JSON file can be retrieved, containing most of the necessary parameters.

```json
{
  "type": "service_account",
  "project_id": "[PROJECT-ID]",
  "private_key_id": "[KEY-ID]",
  "private_key": "[PRIVATE-KEY]",
  "client_email": "[SERVICE-ACCOUNT-EMAIL]",
  "client_id": "[CLIENT-ID]",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "Client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/[SERVICE-ACCOUNT-EMAIL]"
}
```

Figure 1.2 Private key JSON generated during the Service Account setup

{: .notice}
The config wizard expects each of the pieces of auth data to be copied from the JSON file, without quotes.
For the private_key especially, do not modify the string, do not remove any of the newline characters.

{: .important}
You have to acknowledge the Data Disclaimer in order to use Third-Party Bots.


To validate the credentials provided, you can now perform a connection test to see if the configuration you have provided
is working and the bot is reachable. You will be able to proceed in any case, but only if **Test Connection** will result in
**Connection Successful** the bot is expected to later start successfully.

### Limitations

{: .important}
Dialogflow ES has a [limitation on the length of the text it can process](https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/QueryInput#TextInput).
Any query longer than 256 characters will cause Third-Party Bots to invoke a custom event in Dialogflow.
To handle this gracefully, we recommend building a simple intent that handles a **DIALOGFLOW_CHAR_LIMIT** event.

<img style="width:600px" src="img/ThirdPartyBots/dialogflow-es-char-limit-event.png">

Figure 1.3 Create an intent with an event using the string: DIALOGFLOW_CHAR_LIMIT


<img style="width:700px" src="img/ThirdPartyBots/dialogflow-es-char-limit-response.png">

Figure 1.4 Add a custom response in the **Text response** section.