#### Get Engagement  
#### version 1.0

### Description
Use this API to get an engagement for a visitor in an appInstallationId context. 
The possible eligibility of an engagement is based on several parameters, such a the list of engagement attributes provided in the client-side request. 

### Use cases
* Get an engagement if (A) there is no active conversation for this consumer, and (B) the consumer is eligible for an engagement
* Obtain the identifiers of the active conversation, if one exists

### Request

| Method | URL |
| :--- | :--- |
|POST|`https://{liveperson-monitor-domain}/api/account/{account-id}/app/{app-installation-id}/engagement?v={api-version}&vid={visitor-id}&sid={session-id}` |

### Path Parameters
| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | string | ^[a-zA-Z0-9_]{1,20}$ | 
| appInstallationId | App installation id | string | String, Required |

### Query parameters
| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| vid | Visitor Id | String | Optional | Must be saved in order to reuse for future requests in the same visit |
| sid | Session Id | String | Optional on first request, otherwise required | Will be provided by the server-side in a 201.CREATED response for this specific consumer and device and should be set by the client-side on all the subsequent requests to the server |

### Body Parameters
| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| consumerId | Consumer Id | String | Optional | |
| lpConsumerId | LPConsumer Id | String | Optional | |
| clientProperties | Optional JSON format with the following fields: Type, Platform, Name, Version, Client timestamp | string | Optional | JSON structure - The main purpose of this information is for troubleshooting and visibility of the consumer SDK / app version that manages the communication with the server side. |
| clientProperties.appVersion | Application version | string | Optional | Example: For mobile it will be the host app version |
| clientProperties.deviceFamily | | string | Optional | Example: personal_computer/tablet/mobile_phone <br> Supported values: "DESKTOP", "TABLET", "MOBILE" |
| clientProperties.ipAddress | IP address (V4) | string | Optional | (IP format XXX.XXX.XXX.XXX) <br> Validation: Real IP address (IPv4) |
| clientProperties.os | Contains the operating system, including version info | string | Optional | Supported values: "WINDOWS", "MAC_OSX", "LINUX", "IOS", "ANDROID" |
| clientProperties.osVersion | OS version | string | Optional | Example: For Android it could be 2.4 |
| entryPoints | List of entry points in the external system relevant for the engagement | Comma delimited list of strings | Optional | Example: ["http://one.url","tel://972672626"] |
| engagementAttributes | Array of engagement attributes | string | Optional | Supported Values: all engagement-attributes excluding the type of ImpressionEvent (Java version inherited from ImpressionEventBase).  |

### POST Request & body entity example
https://{liveperson-monitor-domain}/api/account/{account-id}/app/123/engagement?v=1.0&vid=myNewVisiorId&sid=myNewSessionId

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
       "contacts": [{"email":"bbb@test.com","phone":"12345678"},{"email":"aaa@test2.co.il","phone":"98765430"}],
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
#### Response Codes
* 200 OK
* 201 Created
* 400 Validation error
* 404 Data not found
* 500 Internal server error
* 503 The server is temporarily unavailable

#### Retry Policy Recommendation
| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problems in code |
| 5xx | There was an error on server side | Retry 3 times with 10, 30, 90 Seconds pause between retries |

### Response format
| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| engagementDetails | The details of an engagement when it is available | object | Required if there is an engagement  |
| engagementDetails.campaignId | | number | Required if there is an engagement  |
| engagementDetails.engagementId | | number | Required if there is an engagement  |
| engagementDetails.conversationId | | string | Required if there is an engagement |
| engagementDetails.windowId | | string | Required if there is an engagement  |
| engagementDetails.language | | string | Required if there is an engagement  |
| engagementDetails.engagementRevision | | number | Required if there is an engagement  |
| engagementDetails.status | | string | Required if there is an engagement, values expose or interaction  |
| pageId | Page identification ID for sending event on the current engagement | string | Required  |
| sessionId | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| visitorId | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

### POST Response entity examples
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
      "status": "conversation"
    }
  ]
}

```
Status code: 200 OK - Engagement is unavailable:
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

***