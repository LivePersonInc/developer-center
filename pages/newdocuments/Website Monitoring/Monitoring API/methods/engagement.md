---
pagename: Engagement
redirect_from:
  - rt-interactions-monitoring-methods-engagement.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Monitoring API
subfoldername: Methods
order: 20
permalink: monitoring-api-methods-engagement.html
indicator: messaging
---

**Note**: Please make sure the read the [overview](rt-interactions-monitoring-overview.html) before getting started with this method.

### Description

Use this method to access the LivePerson monitoring system in order to retrieve an engagement with an updated state of availability for a consumer. The eligibility of an engagement is based on campaign definitions and possibly also on information regarding consumer activity within the brand's account, such as engagement attributes.

### Use cases

1. Obtain an engagement. An engagement will be provided if both the following apply:
  * there is no active conversation for this consumer
  * the consumer is eligible for an engagement

{:start="2"}
2. Obtain the identifiers of an active conversation for this consumer, if one exists.

### Request

| Method | URL |
| :--- | :--- |
|POST|https://{liveperson-monitor-domain}/api/account/{account-id}/app/{app-installation-id}/engagement?v={api-version}&vid={visitor-id}&sid={session-id} |

### Path Parameters

| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| account-id | LP site ID | string | |
| app-installation-id | App installation id | string | String, Required. This is received after installing the application, [as explained here](rt-interactions-monitoring-app-install.html) |

### Query parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| vid | Visitor Id | String | Optional | Must be saved in order to reuse for future requests in the same visit |
| sid | Session Id | String | Optional on first request, otherwise required | Will be provided by the server-side in a 201 (CREATED) response for this specific consumer and device and should be set by the client-side on all the subsequent requests to the server |

### Body Parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| consumerId | Consumer Id (deprecated) | string | Optional, deprecated - use identities instead |  |
| identities | List of identities | string (JSON) | Optional |  |
| identities.iss | URL for domain issuer | string | Optional | For unauth this is the csds-domain/account-id, for authenticated the brand should supply the URL |
| identities.acr | ACR - account config read | string | Required for each identity | supported value: loa1  |
| identities.sub | The subject for identification | string | Required | |
| clientProperties | Optional JSON format with the following fields: Type, Platform, Name, Version, Client timestamp | string | Optional | JSON structure - The main purpose of this information is for troubleshooting and visibility of the consumer SDK / app version that manages the communication with the server side. |
| clientProperties.appVersion | Application version | string | Optional | Example: For mobile it will be the host app version |
| clientProperties.deviceFamily | | string | Optional | Example: personal_computer/tablet/mobile_phone <br> Supported values: "DESKTOP", "TABLET", "MOBILE" |
| clientProperties.ipAddress | IP address (V4) | string | Optional | (IP format XXX.XXX.XXX.XXX) <br> Validation: Real IP address (IPv4) |
| clientProperties.os | Contains the operating system, including version info | string | Optional | Supported values: "WINDOWS", "MAC_OSX", "LINUX", "IOS", "ANDROID" |
| clientProperties.osVersion | OS version | string | Optional | Example: For Android it could be 2.4 |
| entryPoints | List of entry points in the external system relevant for the engagement | Comma delimited list of strings | Optional | Example: ["http://one.url","tel://972672626"] |
| engagementAttributes | Array of engagement attributes | string | Optional | Supported Values: all engagement-attributes excluding the type of ImpressionEvent (Java version inherited from ImpressionEventBase).  |

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

https://{liveperson-monitor-domain}/api/account/{account-id}/app/123/engagement?v=1.0&vid=myNewVisiorId&sid=myNewSessionId

**Example Body Entity**

```json
{
 "clientProperties":{
   "osName": "MAC_OSX",
   "osVersion": "1.2",
   "appVersion": "1.0",
   "deviceFamily": "MOBILE",
   "ipAddress": "192.168.5.2"
 },
 "consumerId":"uniqueIdInBrand",
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
 "entryPoints":[
   "tel://972737004000",
   "http://www.liveperson.com",
   "sec://Sport",
   "lang://English"
 ],
 "engagementAttributes": [
   {
     "type": "personal",
     "personal": {
       "contacts": [{"email":"user123@gmail.com","phone":"12345678"},{"email":"aaa@domain.co.il","phone":"98765430"}],
       "age": {
         "age":30.0,
         "year":1985,
         "month":7,
         "day":22
       },
       "firstname": "test",
       "lastname": "test2",
       "gender": "FEMALE",
       "company": "liveperson"
     }
   }
 ]
}
```

### Response

#### Response entity examples

Status code: 201 Created - Engagement is available, created new session:

```json
{
  "sessionId": "abc",
  "visitorId": "xyz",
  "pageId": "595933432",
  "engagementDetails": [
    {
      "campaignId": 880524023,
      "engagementId": 880524123,
      "engagementRevision": 21,
      "contextId": "1",
      "connectorId": 2642324112,
      "status": "expose"
    }
  ]
}
```

Status code: 200 OK - Resume conversation same session:

```json
{
  "sessionId": "abc",
  "visitorId": "xyz",
  "pageId": "2095636278",
  "engagementDetails": [
    {
      "campaignId": 880524423,
      "engagementId": 880524523,
      "engagementRevision": 23,
      "conversationId": "fdasfdas",
      "connectorId": 2642324112,
      "status": "conversation"
    }
  ]
}

```
Status code: 200/201 OK - Engagement is unavailable. **Note**: because the engagement is unavailable, the `engagementDetails` object does not return:

```json
{
     "sessionId": "abc",
     "visitorId": "xyz",
     "pageId" : "4743822558"
}
```

Status code: 500 Server Error - Loading account:

```json
{
    "time":1501074704502,
    "message":"Loading account: ta3hWd4IgG, vid: ahiel",
    "internalCode":20
}
```

#### Response format

| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| engagementDetails | The details of an engagement when it is available | object | Required if there is an engagement  |
| engagementDetails.campaignId | | number | Required if there is an engagement  |
| engagementDetails.engagementId | | number | Required if there is an engagement  |
| engagementDetails.conversationId | | string | Required if there is an engagement |
| engagementDetails.windowId | | string | Required if there is an engagement  |
| engagementDetails.connectorId | | string | Required if there is an engagement  |
| engagementDetails.language | | string | Required if there is an engagement  |
| engagementDetails.engagementRevision | | number | Required if there is an engagement  |
| engagementDetails.status | | string | Required if there is an engagement, values expose or interaction  |
| pageId | Page identification ID for sending event on the current engagement | string | Required  |
| sessionId | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| visitorId | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

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
| 5xx | There was an error on server side | Retry 3 times with 10, 30, 90 Seconds pause between retries |
