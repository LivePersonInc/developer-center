---
pagename: Introduction
redirect_from:
  - bot-connectors-ibm-watson-assistant.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: IBM Watson Assistant
permalink: third-party-bots-ibm-watson-assistant-introduction.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **IBM Watson Assistant Version 1 and 2**.

{: .notice}
**IMPORTANT**: In case of inactivity, the Watson Assistant session only last 5 minutes for the Lite/Standard plans and up to 60 minutes for Plus/Premium plans. Because of the asynchronous nature of messaging, it could take longer until the user replies to the bot agent. In case the Watson session expires, the bot connector will create a new conversation session on the Watson side [More Info](https://cloud.ibm.com/docs/services/assistant?topic=assistant-dialog-runtime#dialog-runtime-context).

### Watson Version 1 Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide before using this document to complete pre-requisite steps.

{: .important}
**Please note** that Watson does not support processing newline, tab and carriage-return characters. These symbols will be removed from any query that is sent to Watson via the provided connector.

With watson there are two ways of authentication that currently our system support, these are UserPass and IAM (token based) authentication. You can choose one of them for your bot configuration.

#### UserPass authentication

You will be presented with following screen to complete the Vendor Settings in order to add bot connector using UserPass authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-based-auth.png" alt="">

Figure 1.1 Showing the configuration that needed to be filled using UserPass authentication

Following information needs to be completed for LivePerson:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL</td>
    <td>https://api.eu-de.assistant.watson.cloud.ibm.com</td>
  </tr>
  <tr>
    <td>Workspace ID</td>
    <td>Watson Assistant Workspace ID</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74</td>
  </tr>
  <tr>
    <td>Conversation Username</td>
    <td>Username of the Watson Assistant conversation</td>
    <td>de0a48a5-9f4f-xxxx-xxxx-xxxxx9856751</td>
  </tr>
  <tr>
    <td>Conversation Password</td>
    <td>password for the Watson Assistant conversation which should be used for the bot</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  <tr>
    <td>Version Date</td>
    <td>Version Date of the Watson API</td>
    <td>201X-xx-xx<br><br><br></td>
  </tr>
  </tbody>
</table>

#### IAM authentication

You will be presented with following screen to complete the Vendor Settings in order to add bot connector using IAM authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-based-auth.png" alt="">

Figure 1.2 Showing the configuration that needed to be filled using IAM authentication authentication

Following information needs to be completed for LivePerson:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL</td>
    <td>https://api.eu-de.assistant.watson.cloud.ibm.com</td>
  </tr>
  <tr>
    <td>Workspace ID</td>
    <td>Watson Assistant Workspace ID</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74</td>
  </tr>
  <tr>
    <td>API key</td>
    <td>API key which will be used for the Bot's authentication in Watson</td>
    <td>xxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxZG</td>
  </tr>
  <tr>
    <td>Token endpoint url</td>
    <td>URL for creating/refreshing Watson Assistant tokens</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  <tr>
    <td>Version Date</td>
    <td>Version Date of the Watson API</td>
    <td>201X-xx-xx<br><br><br></td>
  </tr>
  </tbody>
</table>

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer

#### Test Connection

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail. For UserPass authentication see in Figure 1.3 and 1.4. For IAM authentication see in Figure 1.5 and 1.6.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-connection-success.png" alt="">

Figure 1.3 Showing the success case of the valid credentials for UserPass authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-connection-failed.png" alt="">

Figure 1.4 Showing the fail case of the invalid credentials for UserPass authentication
<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-connection-success.png" alt="">

Figure 1.5 Showing the success case of the valid credentials for IAM authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-connection-failed.png" alt="">

Figure 1.6 Showing the fail case of the invalid credentials for IAM authentication

<div class="notice">Please be careful while providing credentials that you have selected the right workspace URL. Selecting the wrong Watson Assistant gateway causes connection failure.</div>

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Watson Assistant bot.

### Watson Assistant Version 2 Configuration

{: .important}
See the [Getting Started](third-party-bots-getting-started.html) guide before using this document to complete pre-requisite steps.

{: .important}
**Please note** that Watson does not support processing newline, tab and carriage-return characters. These symbols will be removed from any query that is sent to Watson via the provided connector.

With Watson V2 there are two methods of authentication that are currently supported. These methods are username/password and IAM (token based) authentication. You can choose either one for your bot configuration but IAM is **highly recommended** (as it is more secure).

#### UserPass authentication

You will be presented with following screen to complete the Vendor Settings in order to add the bot connector using username/password authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/userpass-based-auth.png" alt="">

Figure 1.1 Showing the configuration that needs to be filled out when using username/password authentication

You need to fill in the following information:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL. Note that this workspace URL changes according to your account. In order to figure out which URL is correct for you, check the location of your Assistant in IBM's Cloud console. Then, choose the corresponding URL based on geo-location. For example, if your IBM location is "eu-gb", the London URL is the correct one for you.</td>
    <td>https://api.eu-de.assistant.watson.cloud.ibm.com</td>
  </tr>
  <tr>
    <td>Assistant ID</td>
    <td>Watson Assistant Assistant ID. Retrievable from the settings of your Watson Assistant.</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>Username for the Watson Assistant conversation. Retrievable from the settings of your Watson Assistant.</td>
    <td>de0a48a5-9f4f-xxxx-xxxx-xxxxx9856751</td>
  </tr>
  <tr>
    <td>Password</td>
    <td>password for the Watson Assistant conversation which should be used for the bot</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  </tbody>
</table>

#### IAM authentication

You will be presented with following screen to complete the Vendor Settings in order to add the bot connector using IAM authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/token-based-auth.png" alt="">

Figure 1.2 Showing the configuration that needs to be filled in when using the IAM authentication method.

You need to fill in the following infromation:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL. Note that this workspace URL changes according to your account. In order to figure out which URL is correct for you, check the location of your Assistant in IBM's Cloud console. Then, choose the corresponding URL based on geo-location. For example, if your IBM location is "eu-gb", the London URL is the correct one for you.</td>
    <td>https://api.eu-de.assistant.watson.cloud.ibm.com</td>
  </tr>
  <tr>
    <td>Assistant ID</td>
    <td>Watson Assistant ID</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74. Retrievable from the settings of your Watson Assistant.</td>
  </tr>
  <tr>
    <td>API key</td>
    <td>API key which will be used for the Bot's authentication in Watson. Retrievable from the settings of your Watson Assistant.</td>
    <td>xxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxZG</td>
  </tr>
  <tr>
    <td>Token endpoint url</td>
    <td>URL for creating/refreshing Watson Assistant tokens. Leave as is.</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  </tbody>
</table>

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer

#### Test Connection

To validate the credentials you provided above, you can now perform a test connection request. Click on the "Test Connection" button to do so. For UserPass authentication see in Figure 1.3 and 1.4. For IAM authentication see in Figure 1.5 and 1.6.

<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/userpass-connection-success.png" alt="">

Figure 1.3 Showing the success case of the valid credentials for UserPass authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/userpass-connection-failed.png" alt="">

Figure 1.4 Showing the fail case of the invalid credentials for UserPass authentication
<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/token-connection-success.png" alt="">

Figure 1.5 Showing the success case of the valid credentials for IAM authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistantv2/token-connection-failed.png" alt="">

Figure 1.6 Showing the fail case of the invalid credentials for IAM authentication

<div class="notice">Please be careful while providing credentials that you have selected the right workspace URL. Selecting the wrong Watson Assistant gateway causes connection failure. See the note in the table above for more information on finding the correct workspace URL.</div>

Once you are done with the configuration and the connection test succeded, you can save your configuration by pressing on "Done".

**Congratulations!** You have completed the configuration of the Watson Assistant bot.
