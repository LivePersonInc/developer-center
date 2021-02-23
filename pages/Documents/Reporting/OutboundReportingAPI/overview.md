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

Outbound Reporting product provides a complete message journey of the conversation from start to finish. The Outbound Reporting API provides a full funnel metrics number of messages/deflections sent, how many actually got delivered by the messaging channel, how many were read and responded back by the consumers. The goal of this feature is to stitch pre and post conversation events of every message/deflections and provide 360° analytical data to API clients.

### API provides reporting for below services
* Proactive Messaging 2.0
* Connect To Messaging 2.0

### Getting Started

**Who can access this Outbound Reporting API**

All Brands who use Proactive Messaging version 2.0 and Connect To Messaging version 2.0 have access to the Outbound Reporting API service.

**Why we need this feature**

As of today we don't have the capability to view full-funnel flow for a given transaction. The Outbound Reporting API feature will fill this gap.
What Message channels are supported in this API:
SMS - Twilio Messaging Gateway
WhatsApp

**Feature Details**

Outbound Reporting API provides the following data fields. This table explains the definition of each field.

| # | Data Field | Definition |
| 1 | Attempted | Total Outbound Messages/Total IVR Deflections sent to the Proactive Messaging/Connect To Messaging system |
| 2 | Eligible | From total attempted messages how many consumers are eligible to receive  messages. |
| 3 | In-Eligible | From total attempted messages how many consumers are not eligible to receive messages. |
| 4 | Invite Sent | Total eligible messages sent to the messaging gateway |
| 5 | Delivered | Total messages delivered to the consumer as reported by the messaging gateway |
| 6 | Read | Total messages successfully read by consumers |
| 7 | Responded / Conversations Created | Total messages successfully responded by consumers and conversations created. |
| 8 | Conversations Closed | Total closed conversations. |
| 9 | Errors | Total failures occurred in delivering the messages. |
| 10 | Opt out | Total consumers who opted out to receive any future messages from the brand. |
| 11 | Skipped | Total consumers were not sent messages/deflection by the system since they opted out to receive any messages from the brand. |
| 12 | CSAT | Average consumer satisfaction survey rating score |

**Full Funnel Overview board**


<img class="fancyimage" src="img/outbound_reporting_api_full_funnel_overview.png">


**What are the limitations**

- Proactive campaign id data field is not currently available in transaction API responses as of now. It will be added soon.
- Handoff Id, Handoff name data fields are not currently available in the Outbound Reporting API.
- First message and override message data fields are not currently available in the Outbound Reporting API.
- TotaI summary of eligibility, sent, delivered combined for all channels / skills per IVR outbound number is not currently available in the Outbound Reporting API.
- TotaI summary of eligibility, sent, delivered combined for all channels / skills per account is not currently available in the Outbound Reporting API.
- The capability of generating reports of all the consumers who previously opt out from Proactive Messaging to receive any future messages is not available in the Outbound Reporting API.
- Maximum time duration for a reporting api request cannot exceed 24 hours.
- The data is persisted in the system for a period of 13 months as per the company retention policy period.
- In-App message channel events are currently not available in the Outbound Reporting API.


### API Specifications

### Account API

API for account level analytics

**1. Account - Get analytics for the given account**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/get) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/account/{accountId}/app/{app}/analytics/

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
   "accountId": "string",
   "app": "string",
   "attemptedStartTime": 0,
   "attemptedEndTime": 0,
   "filters": {
     "channels": [
       "SMS"
     ],
     "skills": [
       "billing"
     ]
   }
 },
 "analytics": [
   {
     "date": "string",
     "channel": "string",
     "skill": "string",
     "attempted": 0,
     "eligible": 0,
     "skipped": 0,
     "optOuts": 0,
     "sent": 0,
     "failed": 0,
     "delivered": 0,
     "read": 0,
     "optIns": 0,
     "conversationsCreated": 0,
     "conversationsClosed": 0,
     "csat": 0
   }
 ]
}
```

**2. Account - Get analytics for the account with given filters**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/post) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/account/{accountId}/app/{app}/analytics/

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
     "SMS"
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
    "accountId": "string",
    "app": "string",
    "attemptedStartTime": 0,
    "attemptedEndTime": 0,
    "filters": {
      "channels": [
        "SMS"
      ],
      "skills": [
        "billing"
      ]
    }
  },
  "analytics": [
    {
      "date": "string",
      "channel": "string",
      "skill": "string",
      "attempted": 0,
      "eligible": 0,
      "skipped": 0,
      "optOuts": 0,
      "sent": 0,
      "failed": 0,
      "delivered": 0,
      "read": 0,
      "optIns": 0,
      "conversationsCreated": 0,
      "conversationsClosed": 0,
      "csat": 0
    }
  ]
}
```

### Campaign API

API for campaign level analytics

**1. Campaign - analytics API for the campaign**


Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignReport) to go through API spec and to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/account/{accountId}/app/prmsg/campaigns/{proactiveCampaignId}/

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
   "accountId": "string",
   "app": "string",
   "proactiveCampaignId": 0
 },
 "page": {
   "count": 100,
   "previousOffset": 100,
   "currentOffset": 200,
   "nextOffset": 300
 },
 "consumersReport": [
   {
     "id": "string",
     "status": "DELIVERED",
     "errorSource": "PRMSG",
     "errorCode": "string",
     "errorMessage": "string",
     "conversationId": "string"
   }
 ]
}
```

**2. Campaign - Get analytics for the given account**

Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignAnalytics) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}​/account​/{accountId}​/app​/prmsg​/campaigns​/{proactiveCampaignId}​/analytics​/

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
   "accountId": "string",
   "app": "string",
   "attemptedStartTime": 0,
   "attemptedEndTime": 0,
   "filters": {
     "channels": [
       "SMS"
     ],
     "skills": [
       "billing"
     ]
   }
 },
 "analytics": [
   {
     "date": "string",
     "channel": "string",
     "skill": "string",
     "attempted": 0,
     "eligible": 0,
     "skipped": 0,
     "optOuts": 0,
     "sent": 0,
     "failed": 0,
     "delivered": 0,
     "read": 0,
     "optIns": 0,
     "conversationsCreated": 0,
     "conversationsClosed": 0,
     "csat": 0
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
| GET | https://{domain}/account/{accountId}/app/{app}/transactions/

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
   "SMS"
 ],
 "skills": [
   "billing"
 ]
}
```

**Response Example**

200 Success
```json
{
 "requestMetadata": {
   "accountId": "string",
   "app": "string",
   "attemptedStartTime": 0,
   "attemptedEndTime": 0
 },
 "page": {
   "count": 100,
   "previousOffset": 100,
   "currentOffset": 200,
   "nextOffset": 300
 },
 "transactions": [
   {
     "transactionId": "124-23213-123123123",
     "channel": "SMS",
     "skill": "billing",
     "attemptedTime": "2020-08-26T21:08:12.198Z",
     "cancelledTime": "2020-08-26T21:08:12.198Z",
     "conversationId": "21312-132131-31312-31-321",
     "conversationsClosedTime": "2020-08-26T21:08:12.198Z",
     "conversationsCreatedTime": "2020-08-26T21:08:12.198Z",
     "csat": 0,
     "deliveredTime": "2020-08-26T21:08:12.198Z",
     "eligibleTime": "2020-08-26T21:08:12.198Z",
     "errorCode": "001",
     "errorMessage": "Device is out of coverage",
     "errorSource": "TWILIO",
     "failedTime": "2020-08-26T21:08:12.198Z",
     "inviteTime": "2020-08-26T21:08:12.198Z",
     "optInsTime": "2020-08-26T21:08:12.198Z",
     "optOutsTime": "2020-08-26T21:08:12.198Z",
     "readTime": "2020-08-26T21:08:12.198Z",
     "sentTime": "2020-08-26T21:08:12.198Z"
   }
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

All Brands who use Proactive Messaging version 2.0 and Connect To Messaging version 2.0 have access to the Outbound Reporting API service. Reach out to the respective team to enable this feature.

<strong>3. What is the rate limit for the API’s?</strong>

- Transaction API,  rate: 10 TPS
- Analytics API, rate: 10 TPS
- Proactive Campaign API, rate: 10 TPS
- Proactive Campaign Analytics API, rate: 10 TPS

<strong>4. How can a brand find out which version of the Proactive Messaging or Connect To Messaging it used ?</strong>

For Proactive Messaging:
- Sign in to [this url](https://proactive-messaging.fs.liveperson.com) or click on the quick launch icon from Conversation Cloud for proactive messaging.
- Click on the user icon at top right corner and see the version.

For Connect To Messaging:
- Sign in to [this url](https://connect-to-messaging.fs.liveperson.com) or click on the quick launch icon from Conversation Cloud for Connect To Messaging.
- Click on the user icon at top right corner and see the version.

<strong>5. How to access the Outbound Reporting API?</strong>

Step 1: Reach out to the Proactive Messaging or Connect To Messaging team to enable this feature for the account.
Step 2: Authentication keys will be provided if not already.

<strong>6. What is a LP data retention policy? And how long data is persisted for Outbound Reporting API?</strong>

Retention policy period is 13 months.
 
<strong>7. Is Outbound Reporting API GDPR Compliant?</strong>

Yes

<strong>8. What date range is supported by Outbound Reporting API to pull raw transactional data?</strong>

The users can pull the data for a given 24 hour time interval date range from today or any previous day back up to 13 months. Data will be available in reporting API from the day this feature is enabled for the account.

<strong>9. What date range is supported by Outbound Reporting API to pull analytical data?</strong>

The users can pull the data for a given 24 hour time interval date range from today or any any previous day back up to 13 months.

<strong>10. Does the Outbound Reporting API support Pagination when providing the data?<strong> What is the max number of records users can retrieve in one attempt?</strong>
- For Transaction API,  Pagination is supported. Page length is dynamic and varies from 1 to 9999.
- For Analytics API, Pagination is not needed.
- For Proactive Campaign API, Pagination is not supported yet.
- For Proactive Campaign Analytics API, Pagination is not needed.
