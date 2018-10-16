---
pagename: proactiveReporting
sitesection: Documents
categoryname: "Messaging Channels"
documentname: LiveDeflect API
subfoldername: Proactive Alert API
permalink: livedeflect-api-proactive-alert-api-proactive-alert.html
indicator: both
---
Outlined below is a sample reporting API call that is used to retrieve transactional proactive alert information pertaining to the LiveDeflect middleware solution.

The proactiveReporting API endpoint should be passed a start and end timestamp in epoch milliseconds. Any proactive alert transactions for the Account ID provided between the start & end timestamp will be returned with their current status.

### Request Endpoint


| Method  |URL |
| :-------- | :-----|
| GET | https://[{domain}](/agent-domain-domain-api.html).ivrdeflect.liveperson.net/api/proactiveReporting  |



### Request Headers

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
</thead>
<tbody>
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
</tbody>
</table>


### Request Payload

The following information should be provided to LivePerson.

<table>
<thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Required</th>
  </tr>
  </thead>
  <tbody>
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
</tbody>
</table>


### Example Request Payload

```json
{
  "siteId" :  "25508804",
  "startTime" :  "1428934391000",
  "endTime" :  "1428934401000"
}
```


### Example Response Success

The following information should be provided to LivePerson.

HTTP Response Code - 200 OK
