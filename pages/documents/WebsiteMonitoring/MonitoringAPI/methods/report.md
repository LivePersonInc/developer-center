---
pagename: Report
redirect_from:
  - rt-interactions-monitoring-methods-report.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Monitoring API
subfoldername: Methods
order: 30
permalink: monitoring-api-methods-report.html
indicator: messaging
---

**Note**: Please make sure the read the [overview](rt-interactions-monitor-api-overview.html) before getting started with this method.

### Description

Use this method to access the LivePerson monitoring system in order to report information regarding consumer activity within the brand's account. Such information can include engagement attributes or entry points.
As engagement attributes are considered unauthenticated, it should not be used for business transactions that requires stronger authentication or information reliability.

### Use cases

* Report on consumer engagement-attributes from any entry point within the App.

### Request

| Method | URL |
| :--- | :--- |
|PUT|https://{liveperson-monitor-domain}/api/account/{account-id}/app/{app-installation-id}/report?v={api-version}&vid={visitor-id}&sid={session-id} |

### Path Parameters

| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| account-id | LP site ID | string |  |
| app-installation-id | App installation id | string | String, Required. This is received after installing the application, [as explained here](rt-interactions-monitoring-app-install.html) |

### Query parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| vid | Visitor Id | String | Optional on first request, otherwise required | If session doesn't exist, a new session will be generated and sent by the server |
| sid | Session Id | String | Optional on first request, otherwise required |  Will be provided by the server-side in a 201(CREATED) response for this specific consumer and device and should be set by the client-side on all the subsequent requests to the server |

### Body Parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| consumerId | Consumer Id (deprecated) | string | Optional, deprecated - use identities instead <sup>[1]</sup>|  |
| identities | List of identities | string (JSON) | Optional |  |
| identities.iss | URL for domain issuer | string | Optional | For unauth this is the csds-domain/account-id, for authenticated the brand should supply the URL |
| identities.acr | ACR - account config read | string | Required for each identity | supported value: loa1 |
| identities.sub | The subject for identification | string | Required | |
| engagementAttributes | Array of engagement attributes | string | Required | Supports all engagement-attributes including the impression events (inherited from ImpressionEventBase), see limitations item below |
| pageId | Page identification for sending events on the current engagement | String | Optional | If not provided a random  pageId will be generated
| entryPoints | List of entry points in the external system relevant for the engagement | Comma delimited list of strings | Optional | Example: ["http://one.url","tel://972672626"] <br><br> At least one form of identification is required (ConsumerID or VisitorID).

<sup>[1]</sup> At least one form of identification is required (`consumerId` / an `identities.sub` or `vid`).

### Security considerations

* To avoid security problems and increase reliability, the `consumerId` or the `sub` key of the `identities` array (depending on which one you use) described in the table above must meet the following requirements:

   * **Unguessable** - using consumerID or a `sub` value which is based on any of the consumer's public information, such as name, email address, phone number, etc. can be guessed easily and is not recommended.

   * **Innumerable** - the consumerID cannot be comprised of serial numbers and must be a set of characters that have no structure, form, or scheme.

   * **Unique per user** - the consumerID cannot be recycled from one user to another. Do not reuse the same consumerID for more than one user, even if this user is not active anymore.

* A good consumerID would be:

   * UUID assigned specifically and uniquely for consumer  

   * a hashed/salted email address

* For authenticated messaging flows: In order to support continuity and reporting, the consumerID must match the 'sub' claim reported inside the JWT. See [Authentication -> Detailed API](/guides-authentication-detailedapi.html) for additional information on authentication.

### POST Request & body entity example

**Example call URL**

https://{liveperson-monitor-domain}/api/account/{account-id}/app/123/report?v=1.0&vid=myVisiorId&sid=mySessionId

**Example Body Entity**

```json
{
 "consumerId":"myConsumerId",
 "identities": [
   {
        "iss": "LivePerson",
        "acr": "0",    
        "sub": "identifierForNoAuth"
    },
    {
        "iss": "TMO",
        "acr": "loa1",
        "sub": "identifierForAuth"
    }
 ],
 "pageId" : "4743822558",
 "entryPoints":[
   "tel://972737004000",
   "http://www.brand.com",
   "sec://Sport",
   "lang://English"
 ],
 "engagementAttributes": [
   {
       "type": "purchase",
       "total": 11.7,
       "orderId": "DRV1534XC"
	},
	{
       "type": "lead",
           "lead": {
           "topic": "luxury car test drive 2015",
           "value": 22.22,
           "leadId": "xyz123"
       }
   }
 ]
}
```

#### Examples for engagement attributes to report impression events:

ImpressionAcceptEvent:

**Note**: This impression is counted under the ACCEPTED OFFERS metric in LivePerson's Report Builder. For more information on the Report Builder and its metrics, please refer to [this document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Report+Builder/Report+Builder+Overview.pdf).

```json
{
  "type": "impAccept",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537,
  "eContext": [
    {
      "type": "engagementContext",
      "id": "1"
    }
  ]
}
```

ImpressionDisplayEvent:

**Note**: This impression is counted under the EXPOSURES, EXPOSED and ENGAGEMENT VIEWS metric in LivePerson's Report Builder. For more information on the Report Builder and its metrics, please refer to [this document](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Report+Builder/Report+Builder+Overview.pdf).

```json
{
  "type": "impDisplay",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537,
  "eContext": [
    {
      "type": "engagementContext",
      "id": "1"
    }
  ]
}
```  

ImpressionExpandedEvent:

```json
{
  "type": "impExpanded",
  "expanded": null,
  "userInit": null,
  "actionableItems": null,
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

ImpressionTimeoutEvent:

```json
{
  "type": "impTimeout",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

ImpressionCloseEvent:

```json
{
  "type": "impClose",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

### Response

#### Response entity examples

Status code: 200 OK - Operation performed successfully:

```json
{
  "sessionId": "abc",
  "visitorId": "xyz",
  "pageId": "4743822558"
}
```
Status code: 400 Bad request - Operation failed:

```json
{
  "time":1513095142268,
  "message":"consumerId",
  "internalCode":5
}
```
Status code: 500 Server Error - Loading account:

```json
{
    "time":1501074704502,
    "message":"Loading account: ta3hWd4IgG, vid: myVisitorId",
    "internalCode":20
}
```

#### Response Format

| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| sid | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| vid | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

#### Response Codes

|Code|Description|
|:----|:-----|
|200 | OK|
|201 |Created|
|400 |Validation error|
|404 |Data not found|
|500 |Internal server error|
|503 |The server is temporarily unavailable|

#### Retry Policy Recommendation

| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problems in code |
| 5xx | There was an error on server side | Retry 4 times with 3, 10, 30, 90 seconds pause interval between retries |

<div class="important">Specifically in the case of a "500 - Loading account" response (as shown in the response entity examples above), it is important to retrieve the value of the <code>vid</code> from the response body and append it as the value of the <code>vid</code> query param for the retry request (to be issued following an pause interval of a few seconds).</div>

### Limitations

| Area | Description |
| :--- | :--- |
| Impression Events | All impression events could be reported only within same session where engagement has been created. That is, session must have engagement-context-id for corresponding engagement. The impression events cannot be reported to newly created session without invocation of /engagement API |
