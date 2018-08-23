---
pagename: Overview
sitesection: Documents
categoryname: Messaging Channels
documentname: LiveDeflect API
subfoldername: Proactive Alert API
permalink: livedeflect-api-proactive-alert-api-overview.html
indicator: both
---

### Overview

The following documentation outlines the RESTful API endpoint specifications to use the LiveDeflect proactive outbound messaging service for LiveEngage. This can be used to send outbound alerts.

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* SERVICE NAME HERE

2. This API requires using an API key methodology to authenticate. Your LivePerson account team will provision and share the necessary API keys required to use this API.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}.




## Service Information - proactiveReporting (WIP)

Outlined below is a sample reporting API call that is used to retrieve transactional proactive alert information pertaining to the LiveDeflect middleware solution..

The proactiveReporting API endpoint should be passed a start and end timestamp in epoch milliseconds. Any proactive alert transactions for the Account ID provided between the start & end timestamp will be returned with their current status.

### Request Endpoint

[https://<serviceEndpoint>.liveperson.net/api/proactiveReporting](https://va-a.ivrdeflect.liveperson.net/api/proactiveReporting)

**Note**: see [service discovery](#heading=h.yrrevcxiuejh) to retrieve the service endpoint relevant to your Account ID.

### Request Method

HTTP - GET

### Request Headers

<table>
  <tr>
    <td>Key</td>
    <td>Value</td>
  </tr>
  <tr>
    <td>Authorization</td>
    <td>Oauth {{Credentials}}</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
  <tr>
    <td>Accept</td>
    <td>application/json</td>
  </tr>
</table>


### Request Payload

The following information should be provided to LivePerson.



<table>
  <tr>
    <td>Item</td>
    <td>Description</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>siteId</td>
    <td>LiveEngage Account ID</td>
    <td>True</td>
  </tr>
  <tr>
    <td>startTime</td>
    <td>Epoch time in milliseconds</td>
    <td>True</td>
  </tr>
  <tr>
    <td>endTime</td>
    <td>Epoch time in milliseconds</td>
    <td>True</td>
  </tr>
</table>


### Example Request Payload

<table>
  <tr>
    <td>{
  "siteId" :  “25508804”,
  “startTime” :  “1428934391000”,
  “endTime” :  “1428934401000”
}</td>
  </tr>
  <tr>
    <td>Figure 2.0 LiveDeflect proactiveReporting JSON request for retrieving reporting data</td>
  </tr>
</table>


### Example Response Success

The following information should be provided to LivePerson.

HTTP Response Code - 200 OK

<table>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td>Figure 2.1 LiveDeflect proactiveReporting JSON response for retrieving reporting data</td>
  </tr>
</table>
