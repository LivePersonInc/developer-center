---
pagename: Provisioning
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
permalink: liveperson-functions-provisioning.html
indicator: both
---

You must perform your first sign-in to the LivePerson Functions platform with a Conversational Cloud Admin account. During your initial agreement to the terms of use, we automatically provision your LivePerson Functions environment. 

<img src="img/functions/functions_ui_terms_of_use.png" alt="Functions: Terms of Use" style="width:100%;"/>

The following provisioning tasks will be performed:

* Activating the LivePerson Functions feature on your account.
* [Installing default secrets](liveperson-functions-foundations-features.html#secret-store) to interact with other LivePerson APIs
* [Allowlisting default domains](liveperson-functions-foundations-features.html#domain-allowlisting) of internal LivePerson APIs

### Provisioning secrets

Interaction between Functions and other LivePerson APIs needs to get authenticated. Therefore, particular key/secret pairs will be added to your account during provisioning. These secrets are as follows:

* **lp-faas-default-app-key**: This secret is required by the LP Client to access LivePerson Apis, which is available in the [Toolbelt](liveperson-functions-foundations-features.html#toolbelt).
* **lp-faas-orchestrator-app-key**: This secret is required and used for the Orchestrator Feature, available in the [Toolbelt](liveperson-functions-foundations-features.html#toolbelt).

{: .notice}
To ease functions development, Toolbelt clients for internal APIs use those secrets. In this way, the developers do not need to implement any authentication method for those APIs.

#### lp-faas-default-app-key privileges

<table class="thinner" style="width: 100%">
  <thead>
    <tr>
      <th  style="text-align: center; vertical-align: middle;">API</th>
      <th  style="text-align: center; vertical-align: middle;">Privileges</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Data Access API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr> 
  <tr>
    <td style="text-align: center; vertical-align: middle;">Engagement History API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Operational Realtime API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Personal Data Deletion API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr> 
  <tr>
    <td style="text-align: center; vertical-align: middle;">Users API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Skills API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Agent Groups API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Profiles API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">LOBs API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Workdays API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Visit Information API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Validate Engagement API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">IVR Engagement API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Predefined Content API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Automatic Messages API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Predefined Categories API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Unified Automatic Messages API </td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Agent Status Reason API</td>
    <td style="text-align: center; vertical-align: middle;">Read</td>
  </tr>
  </tbody>
</table>

#### lp-faas-orchestrator-app-key privileges

<table class="thinner" style="width: 100%">
  <thead>
    <tr>
      <th  style="text-align: center; vertical-align: middle;">API</th>
      <th  style="text-align: center; vertical-align: middle;">Privileges</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td style="text-align: center; vertical-align: middle;">Functions API</td>
    <td style="text-align: center; vertical-align: middle;">Invoke</td>
  </tr> 
  </tbody>
</table>

### Default allowlisted domains

Clients use the domains below to call internal LivePerson APIs from the [Toolbelt](liveperson-functions-foundations-features.html#toolbelt). These API domains are safelisted during provisioning and are accessible from your functions.

<table class="thinner" style="width: 100%">
<thead>
  <tr>
    <th  style="text-align: center; vertical-align: middle;">Domain Name</th>
    <th  style="text-align: center; vertical-align: middle;">API Name</th>
    <th  style="text-align: center; vertical-align: middle;">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>faaSGW</td>
    <td style="text-align: center; vertical-align: middle;">LivePerson Functions Gateway</td>
    <td style="text-align: center; vertical-align: middle;">Required for Orchestrator FN client in order to invoke other functions.</td>
  </tr> 
  <tr>
    <td>msgHist</td>
    <td style="text-align: center; vertical-align: middle;">Consumer Messaging History API</td>
    <td style="text-align: center; vertical-align: middle;">Retrieve a single consumer's messaging data for the last 13 months.</td>
  </tr>
  <tr>
    <td>agentVep</td>
    <td style="text-align: center; vertical-align: middle;">Chat Agent API</td>
    <td style="text-align: center; vertical-align: middle;"> Provides the capabilities of programmatically running agent activities without human intervention.</td>
  </tr>
  <tr>
    <td>accountConfigReadOnly</td>
    <td style="text-align: center; vertical-align: middle;">Agent Groups API, Skills API, Users API, LOBs API, Profiles API, Automatic Messages API, Unified Automatic Messages API, Predefined Content API, Predefined Categories API, Agent Status Reason API, Special Occasions API, Workdays API, Audit Trail API</td>
    <td style="text-align: center; vertical-align: middle;">(Only to retrieve data) Includes a set of different APIs for you LE account management. E.g Predefined Content, Automatic Messages, Workdays... </td>
  </tr> 
  <tr>
    <td>accountConfigReadWrite</td>
    <td style="text-align: center; vertical-align: middle;">Agent Groups API, Skills API, Users API, LOBs API, Profiles API, Automatic Messages API, Unified Automatic Messages API, Predefined Content API, Predefined Categories API, Agent Status Reason API, Special Occasions API, Workdays API, Audit Trail API</td>
    <td style="text-align: center; vertical-align: middle;">(Create/retrieve data) Includes a set of different APIs for you LE account management. E.g Predefined Content, Automatic Messages, Workdays...</td>
  </tr>
  <tr>
    <td>asyncMessaging</td>
    <td style="text-align: center; vertical-align: middle;">Messaging Window API, Connector API and Shift Status API</td>
    <td style="text-align: center; vertical-align: middle;">Build a custom visitor experiences for messaging or a visitor chat experience outside of the web browser environment. Create a session, read agent lines, send your own lines, etc.</td>
  </tr>
  <tr>
    <td>asyncMessagingEnt</td>
    <td style="text-align: center; vertical-align: middle;">Messaging Window API, Connector API and Shift Status API</td>
    <td style="text-align: center; vertical-align: middle;">Usually same as "asyncMessaging" domain, it can be different for certain brands.</td>
  </tr>
  <tr>
    <td>engHistDomain</td>
    <td style="text-align: center; vertical-align: middle;">Engagement History API</td>
    <td style="text-align: center; vertical-align: middle;">Historical download of chat conversations.</td>
  </tr>
  <tr>
    <td>rtbf</td>
    <td style="text-align: center; vertical-align: middle;">Personal Data Deletion API</td>
    <td style="text-align: center; vertical-align: middle;">Keep track of and make requests for data deletion to comply with GDPR.</td>
  </tr>
  <tr>
    <td>smt</td>
    <td style="text-align: center; vertical-align: middle;">IVR Engagement API, Validate Engagement API and Visit Information API</td>
    <td style="text-align: center; vertical-align: middle;">APIs for engagement data and visitors information.</td>
  </tr>
  <tr>
    <td>pusher</td>
    <td style="text-align: center; vertical-align: middle;">Push Notification Service</td>
    <td style="text-align: center; vertical-align: middle;">Work and register to LivePerson's push notification service.</td>
  </tr>
  <tr>
    <td>leDataReporting</td>
    <td style="text-align: center; vertical-align: middle;">Messaging Operations API and Operational Realtime API</td>
    <td style="text-align: center; vertical-align: middle;">Messaging Operations API: Snapshot of current state of messaging operations. Closed conversation, idle, etc.  Operational Realtime API: Soft real-time data about call center efficiency. Returns data by skill, agent, etc.</td>
  </tr>
  <tr>
    <td>msgEwtAPI</td>
    <td style="text-align: center; vertical-align: middle;">Messaging Operations API (Used for Estimated Wait Time method ONLY)</td>
    <td style="text-align: center; vertical-align: middle;">Snapshot of current state of messaging operations. Closed conversation, idle, etc.</td>
  </tr>
  <tr>
    <td>Msdkgw</td>
    <td style="text-align: center; vertical-align: middle;">App Engagement API</td>
    <td style="text-align: center; vertical-align: middle;">Create a visitor session outside of an lpTag flow. Useful for external non-browser based apps.</td>
  </tr>
  <tr>
    <td>swift</td>
    <td style="text-align: center; vertical-align: middle;">Object storage API</td>
    <td style="text-align: center; vertical-align: middle;">Object storage for LP services.
Main swift usages are Photo sharing, lpcdn and data-science Pachyderm.</td>
  </tr>
  </tbody>
</table>
