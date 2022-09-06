---
pagename: Create Session
redirect_from:
  - rt-interactions-create-session.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: App Engagement API
subfoldername: Methods

order: 10
permalink: app-engagement-api-methods-create-session.html

indicator: both
---

Use this method to start a new session and to get an engagement according to the SDEs provided.

### Request

| Method | URL |
| :--- | :--- |
|POST|https://{domain}/api/account/{accountId}/app/engagement/visitors/{visitor-id} |

| Header | Value |
| --- | --- |
|Content-Type | application/json |
| Accept| application/json|

**Body Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| appType | External system type | string | Required | Supported Values: MSDK, EXTERNAL |
| appDetails | Optional JSON format with the following fields: Type, Platform, Name, Version, Client timestamp | string | Optional | JSON structure — The main purpose of this information is for troubleshooting and visibility of the consumer SDK / app version that manages the communication with the server side. |
| appDetails.appVersion | Application version | string | Optional | Example: For mobile it will be the host app version |
| appDetails.deviceFamily | | string | Optional | Example: personal_computer/tablet/mobile_phone <br> Supported values: "DESKTOP", "TABLET", "MOBILE" |
| appDetails.ipAddress | IP address (V4) | string | Optional | (IP format XXX.XXX.XXX.XXX) <br> Validation: Real IP address (IPv6 or IPv4) |
| appDetails.os | Contains the operating system, including version info | string | Optional | Supported values: "WINDOWS", "MAC_OSX", "LINUX", "IOS", "ANDROID" |
| appDetails.osVersion | OS version | string | Optional | Example: For Android it could be 2.4 |
| consumerSections | List of locations in the external system relevant for the engagement | Comma delimited list of strings | Optional | |
| engagementAttributes | Array of engagement attributes (SDEs) | string | Optional | Supported Values: all SDEs excluding the type of ImpressionEvent. See [here](rt-interactions-example.html) for examples.  |

**Path Parameters**

| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | string |  |
| visitorId | Visitor ID | string | Optional (Required on second request) |

**Query parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| sid | Session ID | | Optional (required on second request) | If session doesn't exist, a new session will be generated and sent by the server  |

**POST Body entity example**

https://domainToLiveperson/api/account/{accountId}/app/engagement/visitors/{visitor-id}?v=1.0&sid={session-id}

```json
    {
     "appType": "MSDK",
     "appDetails":{
       "os": "MAC_OSX",
       "osVersion": "1.2",
       "appVersion": "1.0",
       "deviceFamily": "MOBILE",
       "ipAddress": "192.168.5.2"
     },
     "consumerSections":[
       "Support",
       "English",
       "Other"
     ],
     "engagementAttributes": [
       {
         "type": "personal",
         "personal": {
           "contacts": [{"email":"sarahw@gmail.com","phone":"12345678"},{"email":"sarahw@myemail.com","phone":"98765430"}],
           "age": {
             "age":30.0,
             "year":1986,
             "month":7,
             "day":22
           },
           "firstname": "Sarah",
           "lastname": "West",
           "gender": "FEMALE",
           "company": "liveperson"
         }
       }
     ]
    }
```

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
| 400 | Validation error |
| 401 | Unauthorized |
| 404 | Data not found |
| 500 | Internal server error — If using a test account (or any account that has extremely low volume), when making the getEngagement call, you will get a 500 error with the following error: "{"time":1499263964605,"message":"Loading account: {{accountId}}, vid: {{vid}}","internalCode":20}" This is due to the way our accounts are loaded on the server side. It takes a short period of time for an account with low volume to load in and get a 200 response with the correct engagement. |
| 503 | The server is temporarily unavailable |

**Retry Policy Recommendation**

| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problem in code |
| 5xx | Loading Account; Error on server side | Retry 3 times with 5, 10, 15 second pause between retries, setting the 'visitorId' path parameter with the value of the 'vid' if it was provided in the initial response |

**Entity Structure**

| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| status | Availability status | enum (‘Available’, ‘NotAvailable’) | Required |
| engagementDetails | The details of an engagement when it is available | object | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.campaignId | | number | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.engagementId | | number | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.contextId | | string | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.windowId | | string | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.language | | string | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.engagementRevision | | number | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.validForSeconds | The period in seconds that the engagement will be valid | number | Required when the status is ‘Available’, otherwise is not returned |
| engagementDetails.skillId | | number | Optional when the status is ‘Available’ |
| engagementDetails.skillName | | string | Optional when the status is ‘Available’ |
| engagementDetails.connectorId | | number | Optional when the status is ‘Available’ and engagement is being flagged as 'authenticated'|
| pageId | Page identification ID for sending event on the current engagement | string | Required  |
| sessionId | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| visitorId | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

**Response entity example**

Status code: 200 OK (engagement is available)

```json
    {
      "status": "Available",
      "sessionId": "abc",
      "visitorId": "xyz",
      "pageId": "4743822558",
      "engagementDetails": {
        "campaignId": "3346848610",
        "engagementId": "3562981110",
        "contextId": "1",
        "windowId": "3346847910",
        "language": "en-US",
        "engagementRevision": 44,
        "validForSeconds": 900,
        "skillId": 23,
        "skillName":"TestSkill",
        "connectorId":"568046210"
       }
    }
```

Status code: 200 OK (engagement is not available)

```json
    {
        "status": "NotAvailable",
        "sessionId": "abc",
        "visitorId": "xyz",
        "pageId": "4743822558"
    }
```
