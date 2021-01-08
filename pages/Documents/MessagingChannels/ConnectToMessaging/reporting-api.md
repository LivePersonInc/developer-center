---
pagename: Reporting API
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connect To Messaging
permalink: connect-to-messaging-reporting-api.html
indicator: messaging
---

### Introduction

Reporting feature presents a complete journey of conversation from beginning to end. The reporting 2.0 API endpoints provide full funnel metrics such as number of deflections sent, how many actually got delivered by the messaging channel, how many were read and responded back by the consumers. The goal of this feature is to stitch pre and post conversation events of every transaction and provide 360° analytical data and raw transactional data to API subscribers.

### Getting Started

**Who can access this Reporting 2.0 API**

All Brands who use Proactive Messaging version 2.0 and Connect To Messaging version 2.0 have access to the Reporting 2.0 API service.
 
**Why we need this feature**

As of today we don't have the capability to view end-end flow for a given transaction. As of today no other LivePerson service captures asynchronous events before conversation is created. Reporting 2.0 feature will fill this gap.
What Message channels are supported in this API:
SMS - Twilio Messaging Gateway
WhatsApp
  
**Feature Details**

Reporting 2.0 API provides the following data fields. This table explains the definition of each field.

| # | Data Field | Definition |
| 1 | Attempted | Total Outbound Messages sent by the Proactive Messaging system. Total IVR Deflections sent by the Connect To Messaging system. |
| 2 | Eligibile | From total attempted messages how many messages are eligible to be delivered to the consumers. |
| 3 | In-Eligible | From the total attempted outbound messages planned to be delivered skip all the consumers who previously opted out from receiving messages. |
| 4 | Invite Sent | Total eligible messages sent to the messaging gateway from the Conversation cloud platform. |
| 5 | Delivered | Messages delivered by the messaging gateway |
| 6 | Read | Messages successfully read by consumers |
| 7 | Responded / Conversations Created | Messages successfully responded by consumers and conversations created. |
| 8 | Conversations Closed | Conversations closed by the brand agent. |
| 9 | Errors | Failure occurred in delivering the messages. Provides error codes and error definitions. |
| 10 | Opt out | Consumers who declined not to receive any future messages from the brand. |
| 11 | Skipped | Consumers who declined previously not to receive any messages from the brand. |
| 12 | CSAT | Consumer satisfaction survey rating score |

**What are the limitations**

- Proactive campaign id data field is not currently available in the Reporting 2.0 API. 
- Handoff Id, Handoff name data fields are not currently available in the Reporting 2.0 API. 
- First message and override message data fields are not currently available in the Reporting 2.0 API. 
- TotaI summary of eligibility, sent, delivered combined for all channels / skills per IVR outbound number is not currently available in the Reporting 2.0 API.
- TotaI summary of eligibility, sent, delivered combined for all channels / skills per account is not currently available in the Reporting 2.0 API.
- Generate reports of all the consumers who previously opt out from Proactive messaging to receive any future messages. This capability is not available in the Reporting 2.0 API.
- The new Analytics UI dashboard for the Reporting 2.0 is currently not available in GA.
- The user can fetch data for a given 24 hours interval based on the filter criteria. 
- The data is persisted in the system for a period of 13 months as per the company retention policy period. 
- In-App message channel events are currently not available in the Reporting 2.0 API.


### API Specifications

### Account API

API for analytics across account

**1. Account - Get analytics for the given account**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/get) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/account/{accountId}/app/{app}/analytics/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | see API Domain | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | app | Yes | |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | OAuth 2.0 or OAuth 1.0 or LE Bearer token | |

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

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/post) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/account/{accountId}/app/{app}/analytics/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | see API Domain | Yes | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | app | Yes | |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | |

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
| Authorization | OAuth 2.0 or OAuth 1.0 or LE Bearer token | |

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

API for analytics for the campaign

**1. Campaign - analytics API for the campaign**

Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignReport) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/account/{accountId}/app/prmsg/campaigns/{proactiveCampaignId}/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | see API Domain | Yes | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| proactiveCampaignId | | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | OAuth 2.0 or OAuth 1.0 or LE Bearer token | |

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

Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Campaign/campaignAnalytics) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}​/account​/{accountId}​/app​/prmsg​/campaigns​/{proactiveCampaignId}​/analytics​/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | see API Domain | Yes | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| proactiveCampaignId | | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | OAuth 2.0 or OAuth 1.0 or LE Bearer token | |

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

API for transactions across account

**1. Get details for transactions**

Click [**Transaction**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Transaction/transactions) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/account/{accountId}/app/{app}/transactions/

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | see API Domain | Yes | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | Yes | 12345678 |
| proactiveCampaignId | | Yes | |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| attemptedStartTime | Starting time (epoch milliseconds) of attempted events | Yes | |
| attemptedEndTime | Ending time (epoch milliseconds) of attempted events | Yes | |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | OAuth 2.0 or OAuth 1.0 or LE Bearer token | |

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


