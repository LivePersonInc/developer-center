---
pagename: contextAndInvite
sitesection: Documents
categoryname: "Messaging Channels"
documentname: LiveDeflect API
permalink: livedeflect-api-contextandinvite.html
indicator: both
---

Outlined below is a sample deflection API call that is used to execute a **single step** deflection flow using the LiveDeflect middleware solution. This will trigger an outbound message to a user and will also pass through any contextual information about the user into LiveEngage, which will be viewable by messaging agents.

### Request

| Method  |URL |
| :-------- | :-----|
| POST | https://[{domain}](/agent-domain-domain-api.html).ivrdeflect.liveperson.net/api/contextAndInvite  |

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
    <td>LiveEngage Account ID <b>e.g.</b> 38856538</td>
    <td>True</td>
  </tr>
  <tr>
    <td>skill</td>
    <td>IVR Skill configured in LiveEngage <b>e.g.</b> sales</td>
    <td>True</td>
  </tr>
  <tr>
    <td>customerCountryCode</td>
    <td>https://countrycode.org/ <b>e.g.</b> 1 (USA)</td>
    <td>True</td>
  </tr>
  <tr>
    <td>customerPhoneNumber</td>
    <td><b>e.g.</b> 4043438646</td>
    <td>True</td>
  </tr>
  <tr>
    <td>isMobile</td>
    <td>Is the customerPhoneNumber a mobile device?<b>e.g.</b> true/false, <b>ALWAYS true</b></td>
    <td>True</td>
  </tr>
  <tr>
    <td>deflectionAcceptTime</td>
    <td>Epoch time in seconds</td>
    <td>True</td>
  </tr>
  <tr>
    <td>callBeginTime</td>
    <td>Epoch time in seconds</td>
    <td>True</td>
  </tr>
  <tr>
    <td>externalCallId</td>
    <td>Brand’s identifier for caller <b>e.g.</b> 54651564</td>
    <td>True</td>
  </tr>
  <tr>
    <td>dialedCountryCode</td>
    <td>Country code consumer dialed</td>
    <td>True</td>
  </tr>
  <tr>
    <td>dialedPhoneNumber</td>
    <td>Phone number consumer dialed</td>
    <td>True</td>
  </tr>
  <tr>
    <td>deflectionChannel</td>
    <td>ALWAYS sms</td>
    <td>True</td>
  </tr>
  <tr>
    <td>deflectionText</td>
    <td>Text to send to the consumer. If not supplied will default to LiveDeflect standard welcome message.</td>
    <td>False</td>
  </tr>
  <tr>
    <td>deflectionHandle</td>
    <td>Callers phone number including country code</td>
    <td>True</td>
  </tr>
  <tr>
    <td>callerInfo</td>
    <td>JSON dictionary of Key/Value Pairs</td>
    <td>False</td>
  </tr>
  <tr>
    <td>callerEnteredDigits</td>
    <td>DTMF Digits entered in Brands IVR</td>
    <td>False</td>
  </tr>
  <tr>
    <td>firstName</td>
    <td>String</td>
    <td>False</td>
  </tr>
  <tr>
    <td>lastName</td>
    <td>String</td>
    <td>False</td>
  </tr>
  <tr>
    <td>deflectionTextTag</td>
    <td>N/A</td>
    <td>False</td>
  </tr>
  <tr>
    <td>externalCustomerIdDescriptor</td>
    <td>Description of Brands Customer ID (String). <b>NOTE</b>: Must be passed with externalCustomerId</td>
    <td>False</td>
  </tr>
  <tr>
    <td>externalCustomerId</td>
    <td>Brands Customer ID (String). <b>NOTE</b>: Must be passed with externalCustomerIdDescriptor</td>
    <td>False</td>
  </tr>
</tbody>
</table>

#### Example Payload

```json
{
  "siteId": "38856538",
  "skill": "sales",
  "customerCountryCode": "1",
  "customerPhoneNumber": "4043438646",
  "isMobile": "true",
  "deflectionAcceptTime": "1528932953300",
  "callBeginTime": "1528932953100",
  "externalCallId": "1231",
  "dialedCountryCode": "1",
  "dialedPhoneNumber": "4029742345",
  "deflectionChannel": "sms",
  "deflectionText": "Welcome to our IVR Deflection solution",
  "deflectionHandle": "14043438646",
  "callerInfo": {"userdefinedvar":50,"newtestvariable":"variablevalue1","tshirtsize":"Large"},
  "callerEnteredDigits": "1234",
  "firstName": "John",
  "lastName": "Doe",
  "deflectionTagText": "template-1",
  "externalCustomerIdDescriptor": "CustomerId",
  "externalCustomerId": "123456"
}
```

### Response

#### Example Response on Success

The following information will be returned upon a successful call to LivePerson.

HTTP Response Code - 200 OK

```json
{
  "callId" : "473513",
  "success" : "true"
}
```

#### Example Authentication Failure - No Header

The following information will be returned upon a failed call to LivePerson when no API keys are passed:


HTTP Response Code - 401 Unauthorized

```json
{
  "error" : "No Authorization Header"
}
```

#### Example Authentication Failure - Invalid Nonce

```json
{
  "error" : "Invalid Nonce - Nonce has been previously used"
}
