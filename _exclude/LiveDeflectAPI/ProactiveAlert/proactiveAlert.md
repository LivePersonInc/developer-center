---
pagename: proactiveAlert
sitesection: Documents
categoryname: "Messaging Channels"
documentname: LiveDeflect API
subfoldername: Proactive Alert API
permalink: livedeflect-api-proactive-alert-api-proactive-alert.html
indicator: both
---

Outlined below is a sample API call that is used to execute a *SINGLE STEP* outbound proactive alert using the LiveDeflect middleware solution. This will trigger an outbound message to a user and will also pass through any contextual information about the user into LiveEngage, which will be viewable by messaging agents.

### Request Endpoint

| Method  |URL |
| :-------- | :-----|
| POST | https://[{domain}](/agent-domain-domain-api.html).ivrdeflect.liveperson.net/api/proactiveAlert  |

### Request Headers

|Key|Value|
| :-------- | :-----|
|Authorization| See the [RFC](https://tools.ietf.org/html/rfc5849#section-3.5.1) for more information|
|Content-Type|application/json|
|Accept|application/json|


### Request Payload

The following information should be provided to LivePerson.

<table>
<thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Required</th>
</thead>
<tbody>
  </tr>
  <tr>
    <td>siteId</td>
    <td>LiveEngage Account ID <b>e.g.</b> 25508804</td>
    <td>True</td>
  </tr>
  <tr>
    <td>skill</td>
    <td>Skill name in LiveEngage <b>e.g.</b> sales</td>
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
    <td>externalCustomerId</td>
    <td>Brands Customer ID (String) <b>NOTE</b>: Must be passed with externalCustomerIdDescriptor</td>
    <td>False</td>
  </tr>
  <tr>
    <td>externalCustomerIdDescriptor</td>
    <td>Description of Brands Customer ID (String) <b>NOTE</b>: Must be passed with externalCustomerId</td>
    <td>False</td>
  </tr>
  <tr>
    <td>externalAlertId</td>
    <td>Brand’s identifier for outbound alert</td>
    <td>False</td>
  </tr>
  <tr>
    <td>alertInfo</td>
    <td>JSON dictionary of user-defined key/value Pairs</td>
    <td>False</td>
  </tr>
  <tr>
    <td>firstName</td>
    <td></td>
    <td>False</td>
  </tr>
  <tr>
    <td>lastName</td>
    <td></td>
    <td>False</td>
  </tr>
  <tr>
    <td>proactiveChannel</td>
    <td>Used if the brand wants to force a specific messaging channel for their outbound alert <b>e.g.</b> "wa"</td>
    <td>False</td>
  </tr>
  <tr>
    <td>proactiveLanguage</td>
    <td>Language of alert <b>e.g.</b> “english”</td>
    <td>True</td>
  </tr>
  <tr>
    <td>proactiveTemplate</td>
    <td>Template name defined in LiveDeflect configuration (contact your LivePerson Solution Engineer to add/edit templates)</td>
    <td>True</td>
  </tr>
  <tr>
    <td>proactiveVariables</td>
    <td>JSON object used to pass variables used in proactiveTemplate</td>
    <td>True</td>
  </tr>
  <tr>
    <td>proactiveTemplateVersion</td>
    <td>Meta tag field used to classify templates for easier management <b>e.g.</b> “1”</td>
    <td>False</td>
  </tr>
</tbody>
</table>


### Example Request Payload

```json
{
  "siteId":"25508804",  
  "skill": "service",
  "customerCountryCode":"1",
  "customerPhoneNumber":"7703101414",
  "externalCustomerId":"123",
  "externalCustomerIdDescriptor":"VIP",
  "externalAlertId":"1265168451",
  "alertInfo":{"Sky Miles":1234567890,"T-Shirt Size":"Large"},
  "firstName":"Matt",
  "lastName":"Fanning",
  "proactiveChannel":"",
  "proactiveLanguage":"english",
  "proactiveTemplate":"flightdelay",
  "proactiveVariables":{"@Time":"7:35 pm","@City":"Kansas City","@Gate":"C35"},
  "proactiveTemplateVersion":"1"
}
```


### Example Response Success

The following information will be returned upon a successful call to LivePerson.

HTTP Response Code - 200 OK

```json

{
"success": true,
"response": {
    "name": "phones/+17703101414/agentMessages/1534532110",
    "sendTime": "2018-08-17T18:55:10.100Z",
    "contentMessage": {
        "richCard": {
            "standaloneCard": {
                "cardOrientation": "VERTICAL",
                "thumbnailImageAlignment": "RIGHT",
                "cardContent": {
                    "title": "Tap to Select Desired Action",
                    "media": {
                        "fileName": "files/jkl7y5btiioJTIjSNahX0heD",
                        "height": "TALL"
                    },
                    "suggestions": [
                        {
                            "reply": {
                                "text": "See Menu of Functions",
                                "postbackData": "postback_data_Menu"
                            }
                        },
                        {
                            "reply": {
                                "text": "Learn More",
                                "postbackData": "postback_data_LearnMore"
                            }
                        }
                    ]
                }
            }
        }
    }
  }
}
```


### Example Request Failure

The following information will be returned upon a failed call to LivePerson.


HTTP Response Code - 200 OK

```json
{
  "success" : "false",
  "message" : "{}",
}
```

### Example Request Failure

The following information will be returned upon a failed call to LivePerson.

HTTP Response Code - 400 Bad Request

```json
{
    "success": false,
    "error": "Failed Compatibility Check"
}
```

### Example Authentication Failure

The following information will be returned upon a failed call to LivePerson when no API keys are passed:


HTTP Response Code - 401 Unauthorized

```json
{
  "error" : "No Authorization Header"
}
```

### Example Authentication Failure

The following information will be returned upon a failed call to LivePerson when a previously used *OAuth1* header keys is passed:


HTTP Response Code - 401 Unauthorized

```json
{
  "error" : “Invalid Nonce - Nonce has been previously used”
}
```
