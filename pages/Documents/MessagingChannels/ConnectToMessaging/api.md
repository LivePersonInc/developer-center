---
pagename: API
redirect_from:
  - ConnectToMessaging.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connect To Messaging
permalink: connect-to-messaging-api.html
indicator: messaging
---

### Introduction

Connect To Messaging (C2M) is a product offering from LivePerson allowing brands to offer consumers an option to deflect to messaging when they call into their IVR. C2M API serves as an intermediary between the brand’s IVR System and LivePerson Conversational Cloud, ensuring that the consumer is invited to join a conversation with an agent via eligible messaging channels. Once a consumer responds to a message from that channel, C2M ensures that the conversation is routed to an agent of the appropriate skill specified by the brands.


### Getting Started

1. Onboarding to C2M is a mandatory process before running APIs.
2. Brand’s system should integrate with two C2M API endpoints, which are <strong><i>Eligibility</i></strong> and <strong><i>Invite</i></strong>. 
  * <strong><i>Eligibility:</i></strong> Brands call this endpoint to check whether a consumer is reachable via a messaging channel.
  * <strong><i>Invite:</i></strong> Brands call this endpoint to send a messaging invitation to transfer the customer from IVR to one of their supported channels.


### API Specifications
## API Domain

C2M is deployed in three regions. **North America**, **EMEA**(Europe, Middle East and Africa), **APAC**(Asia Pacific). Use the domain api to identify the zone of C2M api which is to be used for an account.

### Eligibility API

Click [**Eligibility**](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m#/default/post_account__accountId__eligibility) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/eligibility?v={version}

**Path/Query Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | Input accountId and search <b>connectToMessagingDomain</b> from [Domain API](https://developers.liveperson.com/api-guidelines-domain-api.html) | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | 12345678 |
| version | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [API key](https://developers.liveperson.com/api-guidelines-create-api-keys.html) or [APP JWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | API key or Bearer «APP_JWT» |

**Request Body Parameters**

| Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- |
| skill | string | yes | Engagement skill |
| consumerPhoneNumber | string | yes | Consumer’s phone number(E.164 format with leading "+") |
| handoffId | string | yes | C2M handoff Id |
| sdes | array | no | Array of ctmrinfo and/or personal SDEs. See details [here](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html) |
| templateVariables | object | no | Key-value pairs of variables for the template. This parameter is only applicable for WA channel. |
| ivrNumber | string | no | The ivrNumber that brands want to use. Some brands have more than 1 ivrNumber and this field clears the ambiguity. |
| consumerId | string | no | The consumerId which is used in the app as a user name field. This parameter is mandatory for only INAPP channel. |

**Request Body Example - JSON Payload**

SMS, WA
```json
{
    "consumerPhoneNumber": "+12061234567",
    "handoffId": "H123456789",
    "templateVariables": {
        "1": "test"
    },
    "skill": "support",
    "ivrNumber": "180000"
}

```

INAPP
```json
{
    "consumerPhoneNumber": "+12061234567",
    "handoffId": "H123456789",    
    "skill": "support",
    "ivrNumber": "180000",
    "consumerId": "james"
}

```

**Response Body Parameters / Success / HTTP Status Code 200**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| availableChannels | array | true | list of channels that business can send messages from, can be empty |
| recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |
| eligible | boolean | true | true if consumer is eligible for messaging, otherwise false |
| callId | string<<uuid v4>> | true | the uuid associated with this call |
| recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |

**Response Body Parameters / Failure / HTTP Status Code 4xx/5xx**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| errorCode | number | false | C2M API specific error code, not same as the HTTP Status Code |
| errorMessage | string | false | Error message description |

**Response Example**

```json
{
    "availableChannels": [
        "sms","wa" 
    ],
    "recommendedChannelName": "sms",
    "eligible": true,
    "callId": "b52403dc-b140-45cc-a9ca-d749a39b1b56"
}

```

### Invite API

Click [**Invite**](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m#/default/post_account__accountId__invite) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/invite?v={version}

**Path/Query Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | Input accountId and search <b>connectToMessagingDomain</b> from [Domain API](https://developers.liveperson.com/api-guidelines-domain-api.html) | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| accountId | LivePerson site ID | 12345678 |
| version | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [API key](https://developers.liveperson.com/api-guidelines-create-api-keys.html) or [APP JWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | API key or Bearer «APP_JWT» |

**Request Body Parameters**

| Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- |
| callId | string<<uuid v4> | yes | Correlates to eligibility response |
| overrideChannel | string | no | Override Channel to send the message through. 'sms' and 'twilio' are interpreted as the same thing. |
| overrideMessage | string | no | Override the message sent through SMS only. The maximum length is set to 1600 as it is the maximum limit set by Twilio. |
| overrideSkill | string | no | Overrides the current skill which will be used in routing the messages. If the new skill is not present in handoff, an error will be sent. |

**Request Body Example - JSON Payload**

```json
{
    "callId":"ec88bd52-3d1e-40a7-a2fc-95565a528258"
}
```

**Response Body Parameters / Success / HTTP Status Code 200**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| callId | string<<uuid v4> | true | the uuid associated with this call |

**Response Body Parameters / Failure / HTTP Status Code 4xx/5xx**

| Name | Datatype | Required | Definition |
| :--- | :--- |:--- | :--- |
| errorCode | number | false | C2M API specific error code, not same as the HTTP Status Code |
| errorMessage | string | false | Error message description |

**Response Example**

```json
{
    "callId":"ec88bd52-3d1e-40a7-a2fc-95565a528258"
}
```

### Common Error Responses

```json
{  
  "errorMessage":"Not Found",
  "errorCode":1004
}
```

| HTTP Status | Error Code | Error Message | 
| :--- | :--- | :--- |
| 400 | 1000 | Invalid request |
| 400 | 1001 | Invalid customerPhoneNumber |
| 400 | 1002 | Invalid version |
| 400 | 1200 | No internal user is available |
| 400 | 1201 | No internal app is available |
| 400 | 1300 | No engagement found for skill <<skill>> |
| 400 | 1400 | Message cannot be sent |
| 400 | 1500 | No handoff is available |
| 400 | 1501 | No handoff channel is available |
| 400 | 1600 | No setting is available |
| 400 | 1900 | Overridden channel is not available |
| 400 | 1901 | No engagement provided for the overridden skill |
| 401 | 1100 | Invalid Bearer token |
| 403 | 1101 | Not enough privilege to perform this operation |
| 404 | 1004 | Not Found |
| 405 | 1005 | Method Not Allowed |
| 415 | 1015 | Unsupported Media Type |
| 429 | 1029 | Rate limit hit |
| 500 | 5000 - 7000 | Internal Server Error |


### Frequently Asked Questions

<strong>1. What is the rate limit for the API?</strong>

The current rate limit is 30 requests per second for all messaging channels per brand.

<strong>2. What is the recommended action from brands for 429 responses?</strong>

We recommend a request be retried (3 attempts with exponential retry with delay of 5 sec) when witnessing 429 status code.

<strong>3. Which channels are supported as of now?</strong>

C2M supports SMS-Twilio, WA, and INAPP channels.

<strong>4. Is there a throughput limitation for the data that gets passed from Twilio to LP?</strong>

C2M does not have any limitations on the message size while sending messages to twilio or other channels. 
 
<strong>5. Does C2M 2.0 API provide a report?</strong>

Yes, it does. See details [here](https://developers.liveperson.com/outbound-reporting-api-overview.html).

<strong>6. What’s the lookback period?</strong>
- Lookback period is how long will LP services maintain context (like campaign info, skill etc) for a reply of a message that is sent to the recipient/consumer.  
- Lookback period can be pre-configured up to 30 days. Current maximum lookback period is 30 days from when messages are sent using C2M API. Example: When a message is sent to consumer using C2M API and if consumer replies within 30 days from when message was sent, the response will be redirected to LE agent according to specified skill. A response after 30 days will not be treated as a conversation. Please note, if a consumer has an existing active conversation with a brand in any channel, the outbound message won’t be delivered.

<strong>7. How do we know which field is optional or required?</strong>

Refer to each API's <strong>Request Body Parameters</strong> or [swagger](https://connect-to-messaging.z1.fs.liveperson.com/api/api-docs/?api=c2m).

<strong>8. What's the restriction on request body parameters?</strong>

| Field Name | Limitation |
| :--- | :--- |
| consumerPhoneNumber | 15 char max length |
| skill | 255 char max length |
| overrideMessage | 1600 char max length |
| handoffId | 16 char max length |
