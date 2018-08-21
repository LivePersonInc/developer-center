---
pagename: getLiveDeflectData
sitesection: Documents
categoryname: Messaging Channels
documentname: LiveDeflect API
permalink: livedeflect-api-getlivedeflectdata.html
indicator: both
---

Outlined below is a sample reporting API call that is used to retrieve transactional deflection information pertaining to the LiveDeflect middleware into LiveEngage. The getLiveDeflectData API endpoint should be passed a start and end timestamp in epoch milliseconds. Any deflection transactions for the Account ID provided between the start & end timestamp will be returned with their current status.

### Request

| Method  |URL |
| :-------- | :-----|
| GET | https://[{domain}](/agent-domain-domain-api.html).ivrdeflect.liveperson.net/api/getLiveDeflectData/v2  |

#### Request Headers

|Key|Value|
| :-------- | :-----|
|Authorization| See the [RFC](https://tools.ietf.org/html/rfc5849#section-3.5.1) for more information|
|Content-Type|application/json|
|Accept|application/json|

#### Request Payload

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

#### Example Request Payload

```json
{
  "siteid": "25508804",
  "startTime": "1428934391000",
  "endTime":  "1428934401000"
}
```

### Response

#### Example Response Success

The following information should be provided to LivePerson.

HTTP Response Code - 200 OK

```json
{
  "success" :  "true",
  "data" :  {
    "473513" : [
      {
        "callId" :  "473513",
        "siteId" :  "25508804",
        "externalCallId" :  "1231",
        "beginTimeStamp" :  "1528932953300",
        "skill" :  "sales",
        "callerEnteredDigits" :  "9999",
        "callerInfo" :  "{\"userdefinedvar\":50,\"newtestvariable\":\"variablevalue1\",\"tshirtsize\":\"Large\"}",
        "conversationId" :  null,
        "customerCountryCode" :  "61",
        "customerPhoneNumber" :  "0400111222",
        "dialedCountryCode" :  "1",
        "dialedPhoneNumber" :  "4049903068",
        "eventType" :  "callstart",
        "eventInfo" :  "Y",
        "eventTime" :  "1528932953300",
        "externalConsumerId" :  "123-456789112"
      }
    ]
  }
}
```

#### Response Payload Definition

<table>
<thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>LOVs</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>callId</td>
    <td>Response from contextAndInvite</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>siteId</td>
    <td>LiveEngage Account ID EG: 38856538</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>externalCallId</td>
    <td>Caller identifier of Brands system. EG: 1231</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>beginTimeStamp</td>
    <td>Epoch time in milliseconds</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>skill</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>callerEnteredDigits</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>callerInfo</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>conversationId</td>
    <td>LiveEngage Messaging Conversation ID</td>
    <td>null OR UUID</td>
  </tr>
  <tr>
    <td>customerCountryCode</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>customerPhoneNumber</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>dialedPhoneNumber</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>dialedCountryCode</td>
    <td>From contextAndInvite Request</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>eventType</td>
    <td>Internal LiveDeflect event type</td>
    <td>skillchoice, callstart, ovrchan, deflresponse, sendtext, conversationid</td>
  </tr>
  <tr>
    <td>eventInfo</td>
    <td>Internal LiveDeflect event information</td>
    <td>service, Y, sms, &lt;welcomeMessage&gt;,&lt;conversationId&gt;</td>
  </tr>
  <tr>
    <td>eventTime</td>
    <td>Epoch time in milliseconds</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>externalCustomerId</td>
    <td>From contextAndInvite Request</td>
    <td>N/A </td>
  </tr>
</tbody>
</table>
