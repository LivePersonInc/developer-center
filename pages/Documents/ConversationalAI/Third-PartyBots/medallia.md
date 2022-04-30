---
pagename: Medallia
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-medallia.html
indicator:
---


### Overview

This document outlines the configuration and functionality of bots using **Medallia** as a vendor.
This vendor is only available for the Survey Bot type.

In order to use Medallia as a survey source an additional adapter must be configured.
Please contact your LivePerson account representative to set this up.

### Bot Configuration

#### Authentication
Third-Party Bots uses an App Installation for authentication.
This app installation will be generated in the initial configuration step for Medallia mentioned above.
Ask your LivePerson account representative for the ID and secret of the
App Installation needed to authenticate against the LP Medallia Adapter.

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
    <td>Client ID</td>
    <td>ID of the Application Installation with the scope ihub.medallia.bot</td>
    <td>c11a6ba2-7a75-412b-b71a-03a8786fe407</td>
  </tr>
  <tr>
    <td>Client Secret</td>
    <td>Secret of the Application Installation with the scope ihub.medallia.bot</td>
    <td>1ujn2stk7qtudu49r4daahv2qs</td>
  </tr>
  <tr>
    <td>Survey App ID</td>
    <td>ID of the Application Installation that triggers a PCS survey</td>
    <td>a22a6ba2-7a75-412b-b71a-03a8786fe407</td>
  </tr>
  <tr>
    <td>Skills</td>
    <td>List of skills that have the Survey App ID assigned should be handled by this bot</td>
    <td>survey_test</td>
  </tr>
  </tbody>
</table>


### Limitations
{: .important}
Not all messages are currently forwarded by the LP Medallia adapter. The Bot will only
send the messages forwarded so far. This does e.g. not include Welcome and Goodbye messages.
The bot sends its own static messages on the beginning and end of a conversation for now.