---
pagename: getEngagement
redirect_from:
  - consumer-experience-javascript-chat-getengagement.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Methods

order: 20
permalink: javascript-chat-sdk-methods-getengagement.html

indicator: chat
---

Executes engagements eligibility and availability check.   
This method exposes the ability to start a visitor session, add SDEs to the session, and reports events that happened on the application on the consumer side.
It should be used only in in an 'unmonitored flow' (non tagged pages).
Getting engagement details from the server might require few attempts until it becomes available so it's recommended to create a retry mechanism as a callback to the [onEngagement](consumer-experience-javascript-chat-onengagement.html){:target="_blank"} (here is an [example](https://github.com/LivePersonInc/chat-js-sdk-sample-app/blob/master/script.js#L76){:target="_blank"}).

### Request

**Request Object Parameters**

| Value |  Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| appType | External system type | string | Optional | Validation error: 400 <br> Supported Values: ​EXTERNAL |
| appDetails | Optional JSON format with the following fields: Type, Platform, Name, Version, Client timestamp | string (JSON structure) | Optional | The main purpose is for troubleshooting and visibility of the consumer SDK / app version that manages the communication with the server side. |
| appDetails.appVersion | The application version, for example in case of mobile it will be the host app version | string | Optional | |
| appDetails.deviceFamily | Example: personal_computer/tablet/mobile_phone | string | Optional | Supported values: DESKTOP,TABLET,MOBILE |
| appDetails.ipAddress | IP address (V4) | string (IP format XXX.XXX.XXX.XXX) | optional | Validation: real IP address (IPv6 or IPv4) |
| appDetails.os | Contains the operating system, including version info | string | Optional | Supported values: WINDOWS, MAC_OSX, LINUX, IOS, ANDROID |
| appDetails.osVersion | The OS version, for example in case of Android it can be 2.4 | string | Optional | |
| consumerSections | List of locations in the external system relevant for the engagement | comma delimited list of strings | Optional | |
| engagementAttributes | Array of engagement attributes (SDEs) | string | Optional | Supported Values: all SDEs except for the type of ImpressionEvent (java version inherited from ImpressionEventBase). |
| ​vid | Visitor ID | string | Optional (Required on second request) | Validation fail error code: 401 |
| sid | Session ID | | Optional (Required on second request) | If session doesn't exist, a new session will be generated and sent by the server <br> Validation fail error code: 401 |

Example:

```json
ChatApi.getEngagement({
    "appType": "EXTERNAL",
    "vid": "123",
    "sid": "456",
    "appDetails": {
        "os": "MAC_OSX",
        "osVersion": "1.2",
        "appVersion": "1.0",
        "deviceFamily": "MOBILE",
        "ipAddress": "192.168.5.2"
    },
    "consumerSections": [
        "Support",
        "English",
        "Other"
    ],
    "engagementAttributes": [
        {
            "type": "personal",
            "personal": {
                "contacts": [{"email": "test.com", "phone": "12345678"}, {"email": "test2.co.il", "phone": "98765430"}],
                "age": {
                    "age": 30.0,
                    "year": 1985,
                    "month": 7,
                    "day": 22
                },
                "firstname": "test",
                "lastname": "test2",
                "gender": "FEMALE",
                "company": "liveperson"
            }
        }
    ]
});
```

### Response

**Response entity example**

Engagement is available:

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
        "skillName": "TestSkill"
    }
}
```
Engagement is not available:

```json
{
    "status" : "NotAvailable",
    "sessionId": "abc",
    "visitorId": "xyz",
    "pageId" : "4743822558"
}
```

Response object gets transferred as parameter to [onEngagement](consumer-experience-javascript-chat-onengagement.html){:target="_blank"} callback.


