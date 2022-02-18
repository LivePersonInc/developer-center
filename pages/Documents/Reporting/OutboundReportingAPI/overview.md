---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Outbound Reporting API
permalink: outbound-reporting-api-overview.html
root-link: true
indicator: Connect To Messaging
redirect_from:
 - connect-to-messaging-reporting-api.html
 - proactive-messaging-reporting-api.html
---

### Introduction

The Outbound Reporting API provides a complete message journey of the conversation from start to finish. It provides a full end to end summary of messages/deflections sent, including how many actually got delivered by the messaging channel, how many were read and responded back by the consumers. This service stitches pre and post conversation events of every message/deflections and provide full analytical data to API clients.

### API provides reporting for below services
* Proactive Messaging 2.0
* Connect To Messaging 2.0

### Getting Started

**Who can access this Outbound Reporting API**

All Brands who use Proactive Messaging version 2.0 and Connect To Messaging version 2.0 have access to the Outbound Reporting API service.

**Why we need this feature**

LivePerson clients who use Proactive Messaging and Connect To Messaging need to have a complete picture of their campaigns and deflections.
What Message channels are supported in this API:
SMS - Twilio Messaging Gateway
INAPP - LivePerson Mobile SDK
WhatsApp

**Feature Details**

Outbound Reporting API provides the following data fields. This table explains the definition of each field.

| # | Data Field | Definition |
| 1 | Attempted | Total Outbound Messages/Total IVR Deflections sent to the Proactive Messaging / Connect To Messaging systems |
| 2 | Eligible | From total attempted messages how many consumers are eligible to receive messages. For example, trying to send a SMS message to a landline will not count as eligible |
| 4 | Invite Sent | Total eligible messages sent to the messaging gateway |
| 5 | Delivered | Total messages delivered to the consumer as reported by the messaging gateway |
| 6 | Read | Total messages successfully read by consumers |
| 7 | Responded / Conversations Created | Total messages successfully responded by consumers and conversations created. |
| 8 | Conversations Closed | Total closed conversations. |
| 9 | Errors | Total failures occurred in delivering the messages. This includes recipients not eligible to receive a message through the chosen channel |
| 11 | Skipped | Total consumers were not sent messages/deflection by the system since they opted out to receive any messages from the brand. |
| 12 | CSAT | Average consumer satisfaction survey rating score |

**Full Funnel Overview board**


<img class="fancyimage" src="img/outbound_reporting_api_full_funnel_overview.png">


**What are the limitations**

- First message and override message data fields are not currently available in the Outbound Reporting API.
- Total summary of eligibility, sent, delivered combined for all channels / skills per IVR outbound number is not currently available in the Outbound Reporting API.
- The capability of generating reports of all the consumers who previously opt out from Proactive Messaging to receive any future messages is not available in the Outbound Reporting API.
- The maximum allowed time interval for a transaction reporting api request cannot exceed 24 hours.
- The maximum allowed time interval for a account analytics api request cannot exceed 60 days.
- The data is persisted in the system for a period of 13 months as per the company retention policy period.
- The Reporting API data is up to 20 min delayed from the time the messaging events are generated.


### API Specifications

## OAuth 2.0 Authorization 
* Either Administrator or LPA can get client_id and client_secret by clicking the show secrets on the web UI as shown below.
![Secrets](img/proactive/proactive-show-secrets.png)  
* The client_id and client_secret will than be used to create APP JWT. Click here to learn how to use [APP JWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt).
* The access_token retrieved from above APP JWT response should be used in the Request Header for Authorization.

### Account Analytics API

API for account level analytics

**1. Account - Get analytics for the given account**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/get) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/app/{app}/analytics/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.cx-reporting.liveperson.net or lo.cx-reporting.liveperson.net or sy.cx-reporting.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | App name | Yes | "prmsg" or "c2m" |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | 1602007811000 |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | 1602008344000 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success
```json
{
 "requestMetadata": {
   "accountId": "123456",
   "app": "prmsg",
   "attemptedStartTime": 1633305600000,
   "attemptedEndTime": 1635977318000
 },
 "analytics": [
   {
      "channel": "wa",
      "skill": "sales",
      "transactionday": "12-11-2021",
      "attempted": 500,
      "eligible": 475,
      "skipped": 10,
      "sent": 450,
      "failed": 50,
      "delivered": 440,
      "read": 400,
      "conversationscreated": 200,
      "conversationsclosed": 185,
      "csat": "2.5"
   }
 ]
}
```

**2. Account - Get analytics for the account with given filters**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/post) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/app/{app}/analytics/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.cx-reporting.liveperson.net or lo.cx-reporting.liveperson.net or sy.cx-reporting.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | App name | Yes | "prmsg" or "c2m" |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | 1602007811000 |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | 1602008344000 |

**Body Example**

```json
{
 "filters": {
   "channels": [
     "sms"
   ],
   "skills": [
     "billing"
   ]
 }
}
```

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success
```json
{
  "requestMetadata": {
    "accountId": "123456",
    "app": "c2m",
    "attemptedStartTime": 1633305600000,
    "attemptedEndTime": 1635977318000,
    "filters": {
      "channels": [
        "sms"
      ],
      "skills": [
        "billing"
      ]
    }
  },
  "analytics": [
   {
      "channel": "wa",
      "skill": "sales",
      "transactionday": "12-11-2021",
      "attempted": 500,
      "eligible": 475,
      "skipped": 10,
      "sent": 450,
      "failed": 50,
      "delivered": 440,
      "read": 400,
      "conversationscreated": 200,
      "conversationsclosed": 185,
      "csat": "2.5"
   }
  ]
}
```

### Campaign API

API for campaign level details. Returns statuses for each transaction (message) along with error codes and error messages if applicable. 

**1. Campaign - analytics API for the campaign**


Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignReport) to go through API spec and to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/app/prmsg/campaigns/{proactiveCampaignId}/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.cx-reporting.liveperson.net or lo.cx-reporting.liveperson.net or sy.cx-reporting.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| proactiveCampaignId | | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success
```json
{
 "requestMetadata": {
   "accountId": "123456",
   "app": "prmsg",
   "proactiveCampaignId": "campaign123"
 },
 "page": {
   "count": 1,
   "previousOffset": -1,
   "currentOffset": 0,
   "nextOffset": -1
 },
 "consumersReport": [
   {
     "id": "70cf3fc5-75c5-1129-3275-4665ce2s5c32",
     "consumerId": "123456789",
     "status": "DELIVERED",
     "errorSource": null,
     "errorCode": null,
     "errorMessage": null,
   },
   {
     "id": "x02f3scr-7wc5-1429-2575-6635sd2d5f32",
     "consumerId": "987654321",
     "status": "FAILED",
     "errorSource": "400",
     "errorCode": "prmsg",
     "errorMessage": "Message failed to send",
   }
 ]
}
```

**2. Campaign - Get analytics for the given campaign **

Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignAnalytics) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}​/api/account​/{accountId}​/app​/prmsg​/campaigns​/{proactiveCampaignId}​/analytics​/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.cx-reporting.liveperson.net or lo.cx-reporting.liveperson.net or sy.cx-reporting.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| proactiveCampaignId | | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success
```json
{
 "requestMetadata": {
   "accountId": "123456",
   "app": "prmsg",
   "attemptedStartTime": 1634675790000,
   "attemptedEndTime": 1634848590000,
 },
 "analytics": [
   {
    "skill": "billing",
    "channel": "inapp",
    "transactionday": "10-25-2021",
    "attempted": 10,
    "eligible": 9,
    "sent": 9,
    "delivered": 8,
    "read": 7,
    "skipped": 0,
    "failed": 1,
    "conversationscreated": 5,
    "conversationsclosed": 4,
    "csat": 0,
   }
 ]
}
```

### Transaction API

API for account level transactions 

**1. Get details for transactions**

Click [**Transaction**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Transaction/transactions) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/app/{app}/transactions/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.cx-reporting.liveperson.net or lo.cx-reporting.liveperson.net or sy.cx-reporting.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | App name | Yes | "prmsg" or "c2m" |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | 1602007811000 |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | 1602008344000 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Request Body**

```json
{
 "channels": [
   "sms", "inapp"
 ],
 "skills": [
   "billing", "sales"
 ]
}
```

**Response Example**

200 Success
```json
{
 "requestMetadata": {
   "accountId": "123456",
   "app": "prmsg",
   "attemptedStartTime": 1602007811000,
   "attemptedEndTime": 1602008344000
 },
 "page": {
   "count": 100,
   "previousOffset": 100,
   "currentOffset": 200,
   "nextOffset": 300
 },
 "transactions": [
        {
            "channel": "sms",
            "skill": "billing",
            "transactionId": "2f88x19d-a5df-6d22-d967-a9cd19108318",
            "attemptedTime": "2021-02-17T22:57:13.214Z",
            "cancelledTime": null,
            "conversationId": null,
            "conversationsClosedTime": null,
            "conversationsCreatedTime": null,
            "consumerId": null,
            "deliveredTime": "2021-02-17T23:00:18.533Z",
            "eligibleTime": null,
            "errorCode": null,
            "errorMessage": null,
            "errorSource": null,
            "failedTime": null,
            "inviteTime": "2021-02-17T22:57:13.480Z",
            "optInsTime": null,
            "optOutsTime": null,
            "proactiveCampaignId": "camapign125",
            "readTime": null,
            "sentTime": "2021-02-17T22:57:13.586Z",
            "initialSkill": "prmsgoutbound",
            "initialChannel": "sms",
            "handOffId": "H000000000000000",
            "skippedTime": null
        },
        {
            "channel": "inapp",
            "skill": "sales",
            "transactionId": "515340ec-0d3c-75d7-0cdb-cbe783fa156c",
            "attemptedTime": "2021-02-17T22:55:14.228Z",
            "cancelledTime": null,
            "conversationId": null,
            "conversationsClosedTime": null,
            "conversationsCreatedTime": null,
            "consumerId": null,
            "deliveredTime": "2021-02-17T23:00:18.533Z",
            "eligibleTime": null,
            "errorCode": "400",
            "errorMessage": "Message failed to send",
            "errorSource": "prmsg",
            "failedTime": "2021-02-17T22:55:14.543Z",
            "inviteTime": "2021-02-17T22:55:14.543Z",
            "optInsTime": null,
            "optOutsTime": null,
            "proactiveCampaignId": "camapign124",
            "readTime": null,
            "sentTime": "2021-02-17T22:55:14.716Z",
            "initialSkill": "billing",
            "initialChannel": "sms",
            "handOffId": "H000000000000000",
            "skippedTime": null
        },
        {
            "channel": "sms",
            "skill": "billing",
            "transactionId": "b19f2x4b-d533-7a2e-dbe0-3efds8f5e5b9",
            "attemptedTime": "2021-02-17T22:57:13.235Z",
            "cancelledTime": null,
            "conversationId": null,
            "conversationsClosedTime": null,
            "conversationsCreatedTime": null,
            "consumerId": null,
            "deliveredTime": "2021-02-17T23:00:18.533Z",
            "eligibleTime": null,
            "errorCode": null,
            "errorMessage": null,
            "errorSource": null,
            "failedTime": null,
            "inviteTime": "2021-02-17T22:57:13.503Z",
            "optInsTime": null,
            "optOutsTime": null,
            "proactiveCampaignId": "camapign123",
            "readTime": null,
            "sentTime": "2021-02-17T22:57:13.613Z",
            "initialSkill": "prmsgoutbound",
            "initialChannel": "sms",
            "ivrNumber": "",
            "skippedTime": null
        },
 ]
}
```

### Common Error Responses

400 Bad Request
```json
{
 "code": 0,
 "requestTraceId": "5102ce1f-35bd-4e5e-9bd3-bacdfd28dd3a",
 "message": "<<error Message>>"
}
```

401 Unauthorized
```json
{
 "code": 0,
 "requestTraceId": "5102ce1f-35bd-4e5e-9bd3-bacdfd28dd3a",
 "message": "<<error Message>>"
}
```

429 Rate Limit Exceeded
```json
{
 "code": 0,
 "requestTraceId": "5102ce1f-35bd-4e5e-9bd3-bacdfd28dd3a",
 "message": "<<error Message>>"
}
```

500 Internal server error
```json
{
 "code": 0,
 "requestTraceId": "5102ce1f-35bd-4e5e-9bd3-bacdfd28dd3a",
 "message": "<<error Message>>"
}
```

### Frequently Asked Questions

<strong>1. What authorizations are supported by reporting API?</strong>

Following authentication and authorization are supported by reporting API

Oauth2.0 (Recommended)
Oauth1.0
LE Bearer Token

- For OAuth 2.0, refer to [this document](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt)
- For OAuth 1.0, refer to [this document Step 8](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html), Keys will be provided separately

<strong>2. Who can access the Outbound Reporting API?</strong>

All Brands who use Proactive Messaging version 2.0 and Connect To Messaging version 2.0 have access to the Outbound Reporting API service.

<strong>3. What is the rate limit for the API’s?</strong>

- Transaction API, rate: 10 TPS
- Analytics API, rate: 10 TPS
- Proactive Campaign API, rate: 10 TPS
- Proactive Campaign Analytics API, rate: 10 TPS

<strong>4. How can a brand find out which version of the Proactive Messaging or Connect To Messaging it uses ?</strong>

For Proactive Messaging:
- Sign in to [this url](https://proactive-messaging.fs.liveperson.com) or click on the quick launch icon from Conversation Cloud for Proactive Messaging.
- Click on the user icon at top right corner and see the version.

For Connect To Messaging:
- Sign in to [this url](https://connect-to-messaging.fs.liveperson.com) or click on the quick launch icon from Conversation Cloud for Connect To Messaging.
- Click on the user icon at top right corner and see the version.


<strong>6. What is a LP data retention policy? And how long data is persisted for Outbound Reporting API?</strong>

Retention policy period is 13 months.
 
<strong>7. Is Outbound Reporting API GDPR Compliant?</strong>

Yes

<strong>8. What date range is supported by the Outbound Reporting API to pull raw transactional data?</strong>

The caller can pull the data for a given 24 hour time interval from today or any previous day up to 13 months ago.

<strong>9. What date range is supported by the Outbound Reporting API to pull analytical data?</strong>

The caller can pull the data for a given 60 day time interval from today or any previous day up to 13 months ago.

<strong>10. Does the Outbound Reporting API support pagination when providing the data?<strong> What is the max number of records users can retrieve in one request?</strong>
- For Transaction API, pagination is supported. Page length is dynamic and varies from 1 to 9999.
- For Analytics API, pagination is not needed.
- For Proactive Campaign API, pagination is not supported yet.
- For Proactive Campaign Analytics API, pagination is not needed.

<strong>11. Is Outbound Reporting API real time? What is the delay in reporting data from the time Proactive Messaging campaigns or C2M deflections are created ?</strong>
- Data in outbound reporting api can be delayed by up to 20 min. e.g. Proactive campaign created now will take upto 20 min to be reflected in reporting api. Similarly other messaging data like message delivered, opted out, conversation created etc will also take up to 20 min from the time the event occured.
