---
pagename: Introduction
redirect_from:
  - bot-connectors-amazon-lex.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Amazon Lex
permalink: third-party-bots-amazon-lex-introduction.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Amazon Lex**.

{: .note}
At this time, Lex response cards and audio messages are not supported.
The Connector uses Lex ApiVersion 2016-11-28. Currently, we only support Amazon Lex V1 and we don't support Amazon Lex V2.

### Configuration

{: .note}
See the [Getting Started](third-party-bots-getting-started.html) guide before using this document to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/lex/vendor.png" alt="">

Figure 1.1 Showing the configuration that needed to be filled

The following Amazon Lex information should be provided to LivePerson:

{: .note}
Lex APIs adhere to [Signature V4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) Signing Process.
Some degree of familiarity with AWS IAM policies and the AWS IAM console is necessary for setting up a valid Lex client with _Read Only API Key access_.
A _service account_ is a **prerequisite** for setting up the above config. Documentation available [here](https://docs.aws.amazon.com/lex/index.html).

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
    <td>AWS Region</td>
    <td>AWS region of the lex bot</td>
    <td>us-east-1</td>
  </tr>
  <tr>
    <td>IAM Access Key</td>
    <td>Access Key ID of the IAM role</td>
    <td>AKIAXXXXXXXXXXXBWN3</td>
  </tr>
  <tr>
    <td>IAM Secret Key</td>
    <td>IAM secret key of the IAM role</td>
    <td>lwRQJUxxxxxxxxxxxxRQFpoxxxxxxxdE6JR</td>
  </tr>
  <tr>
    <td>Bot name</td>
    <td>The bots name in the IAM role</td>
    <td>botConnectors</td>
  </tr>
    <tr>
      <td>Bot alias</td>
      <td>Bots alias of the IAM role</td>
      <td>botConnectors</td>
    </tr>
 </tbody>
</table>

{: .note}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail as shown in Figure 1.2 and 1.3 respectively.

<img class="fancyimage" style="width:600px" src="img/lex/connection-success.png" alt="">

Figure 1.2 Showing the success case of the valid credentials

<img class="fancyimage" style="width:600px" src="img/lex/connection-failed.png" alt="">

Figure 1.3 Showing the fail case of the invalid credentials

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Amazon Lex bot.
