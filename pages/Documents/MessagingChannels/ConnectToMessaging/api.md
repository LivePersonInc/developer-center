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

1. Onboarding to C2M is mandatory before it.  
2. Brand’s system should integrate with two C2M API endpoints, which are <strong><i>Eligibility</i></strong> and <strong><i>Invite</i></strong>. 
  * <strong><i>Eligibility:</i></strong> Brands call this endpoint to check whether a consumer is reachable via a messaging channel.
  * <strong><i>Invite:</i></strong> Brands call this endpoint to send a messaging invitation to transfer the customer from IVR to one of their supported channels.


### API Specifications
## API Domain

C2M is deployed in three regions. **North America**, **EMEA**(Europe, Middle East and Africa), **APAC**(Asia Pacific). Use the domain api to identify the zone of C2M api which is to be used for an account.

### Eligibility API

Click [**Eligibility**](https://app.swaggerhub.com/apis-docs/nsavla/Connect_To_Messaging/1.0.0#/default/post_account__accountId__eligibility) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{ACCOUNT_ID}/eligibility?v={VERSION}

**Path Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | see API Domain | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| ACCOUNT_ID | LivePerson site ID | 34567231 |
| VERSION | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | Use OAuth 1.0 credentials or get [AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | OAuth 1.0 or Bearer «APP_JWT» |

**Request Body Parameters**

| Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- |
| skill | string | yes | Engagement skill |
| consumerPhoneNumber | string | yes | Consumer’s phone number(E.164 format with leading "+") |
| handoffId | string | yes | C2M handoff Id |
| sde | array | no | Array of ctmrinfo and/or personal SDEs |
| sdes.* | object | no | SDEs: ctmrinfo and/or personal. See from [here](https://developers.liveperson.com/engagement-attributes-types-of-engagement-attributes.html) |
| templateVariables | object | no | Key-value pairs of variables for the template |
| ivrNumber | string | no | The ivrNumber that brands want to use. Some brands have more than 1 ivrNumber and this field clears the ambiguity. |

**Request Body Example - JSON Payload**

```json
{
    "consumerPhoneNumber": "+12061234567",
    "handoffId": "H111111111111111",
    "templateVariables": {
        "1": "test"
    },
    "skill": "support"
}

```

**Response Body Parameters**

| HTTP Status | Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- | :--- |
| 200 | availableChannels | array | true | list of channels that business can send messages from, can be empty |
|  | recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |
|  | eligible | boolean | true | true if consumer is eligible for messaging, otherwise false |
|  | callId | string<<uuid v4>> | true | the uuid associated with this call |
|  | recommendedChannelName | string | true | recommended channel for sending a message based on channel priorities, can be empty |
| 4xx/5xx | errorCode | number | true | C2M API specific error code, not same as the HTTP status code |
|  | errorMessage | string | true | Error message description |

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

Click [**Invite**](https://app.swaggerhub.com/apis-docs/nsavla/Connect_To_Messaging/1.0.0#/default/post_account__accountId__invite) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{ACCOUNT_ID}/invite?v={VERSION}

**Path Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | see API Domain | va.connect-to-messaging.liveperson.net or lo.connect-to-messaging.liveperson.net or sy.connect-to-messaging.liveperson.net |
| ACCOUNT_ID | LivePerson site ID | 34567231 |
| VERSION | API Version | 2.0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | Use OAuth 1.0 credentials or get [AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | OAuth 1.0 or Bearer «APP_JWT» |

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

**Response Body Parameters**

| HTTP Status | Name | Datatype | Required | Definition |
| :--- | :--- | :--- |:--- | :--- |
| 200 | callId | string | true | the uuid associated with this call |
| 4xx/5xx | errorCode | number | true | C2M API specific error code, not same as the HTTP status code |
|  | errorMessage | string | true | Error message description |

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
  "errorCode":99
}
```

| HTTP Status | Error Code | Error Message | Description/Resolution |
| :--- | :--- | :--- |:--- |
| 400 | 11 | Bad request | Onboarding is not completed |
| 400 | 34 | | Onboarding is not completed |
| 400 | 42 | No engagement found for skill {{SKILL}} | The skill is not active in Self Service Portal |
| 400 | 71 | Bad request | A conversation exists between the brand and consumer |
| 400 | 81 | Bad request | The overridden channel is not eligible for the consumer’s phone number |
| 400 | 82 | No engagement provided for the override skill | The overridden skill is not active in Self Service Portal |
| 400 | 91 | Bad request | Payload is invalid |
| 400 | 92 | Bad request | Invalid API version |
| 400 | 111 | Bad request | The handoffId is invalid or not active in Self Service Portal |
| 400 | 112 | Bad request | The handoff channel is not active in Self Service Portal |
| 400 | 131 | Bad request | No account setting is found in Self Service Portal |
| 401 |  |  | Invalid OAuth key or AppJWT token |
| 403 | 95 | Not enough privilege to perform this operation | Not enough privilege with OAuth key or AppJWT token |
| 404 | 99 | Not Found | Invalid URL |
| 405 | 99 | Method Not Allowed | Invalid HTTP method |
| 415 | 99 | Unsupported Media Type | Invalid Media type |
| 429 |  |  | Rate limit exceeded |
| 500 | 12 | Internal Server Error | Error retrieving LE user |
| 500 | 33 | Cannot get C2M app installation due to an internal error | Error fetching App Installation |
| 500 | 41 | cannot get le campaigns | Error fetching the campaign |
| 500 | 69 | Internal Server Error | Error fetching the connector capability API |
| 500 | 72 | Internal Server Error | Error fetching the connector send API |
| 500 | 73 | Internal Server Error | Surpassed max retry in connector send API |
| 500 | 75 | Internal Server Error | Error fetching the url from domain service |
| 500 | 93 | Internal Server Error | Error fetching the connector capability API |
| 500 | 99 | Internal Server Error | Default error code |
| 500 | 100 | Internal Server Error | Database connection error |
| 500 | 101 | Internal Server Error | Database query error |
| 500 | 110 | Internal Server Error | Error fetching the handoff |
| 500 | 130 | Internal Server Error | Error fetching the account setting |


### Frequently Asked Questions

<strong>What is the rate limit for the API?</strong>
The current rate limit is 30 TPS/second/brand per API.

<strong>Which channels are supported as of now?</strong>
C2M supports SMS-Twilio and WA channels.

<strong>Is there a throughput limitation for the data that gets passed from Twilio to LP? For example, if brand sends 100 Twilio msgs/sec (their max throughput), then can the data flow through to LP at the same rate?</strong>
- C2M does not have any limitations on the message size while sending messages to twilio or other channels. However a large message may translate to more than one message when the recipient receives it.
- Example: A message of more than 140 characters will be divided into two messages and sent to recipients.
 
<strong>What is the lifespan of the app JWT? When we do need to get a new JWT, do we have to first make the call to LivePerson Domain API in order to get the sentinel service domain, or is that domain consistent enough that we can hard code that in?</strong>
- An APP JWT expiration time is 1 hour from the time it is created. To get an app JWT from sentinel API, a call to domain api has to be made to get the sentinel api domain. This domain can be cached for some duration. We expect the domain to change in very rare cases. It’s still recommended that cache duration should not be more than 1 day.

- When using app JWT to call C2M API, a response below indicates the jwt is expired and new app jwt to be obtained from sentinel api.
	```json
	{
		"code": 0,
		"message": "jwt expired"
	}
	```

<strong>Do we need any other JWT other than APP JWT e.g. Consumer JWT?</strong>
C2M service does not create or consume consumer JWT or other JWT except APP JWT. C2M API consumes AppJWT created from provided clientId and Secret for authentication.

<strong>What should the authentication header look like, is the bearer token the only thing required even in production usage? Do we need to include our ConsumerKey/Secret or our AccessToken/Secret that we use in the 1.0 API at all, or any other information?</strong>
App Jwt will be consumed as Bearer Token. No other key, secret or token will be consumed by C2M Messaging api.

<strong>How does C2M 2.0 api provide status of message e.g. success/failure of delivery ?</strong>
The C2M 2.0 campaign api is asynchronous meaning that the success and failure of a message to a recipient is noted only when the recipient is picked from the C2M internal queue and a message is sent as per pre configured message rate. The [conversations](#conversations-api-example-request-and-response) api will provide the status of recipients tied to the campaign created.

<strong>Of the error cases described above, which of those errors should we consider "retry-able"? For example, a bad request due to a missing field is not retry-able because it will just always fail, but a case where one of the downstream services was temporarily unavailable could warrant a retry. Which error cases that we could get back from the /campaigns endpoint are retryable and how should we handle a retry to avoid sending duplicate messages to a customer?</strong>
C2M Messaging service has retry mechanism internally on dependent services to reduce failures due to transient errors.

<strong>What’s the lookback period?</strong>
- Lookback period is how long will LP services maintain context (like campaign info, skill etc) for a reply of a message that is sent to the recipient/consumer.  
- Lookback period can be pre-configured up to 30 days. Current maximum lookback period is 30 days from when messages are sent using C2M API. Example: When a message is sent to consumer using C2M API and if consumer replies within 30 days from when message was sent, the response will be redirected to LE agent according to specified skill. A response after 30 days will not be treated as a conversation. Please note, if a consumer has an existing active conversation with a brand in any channel, the outbound message won’t be delivered.

<strong>How do we know which field is optional or required?</strong>
Refer to this document and [swagger](https://app.swaggerhub.com/apis-docs/nsavla/Connect_To_Messaging/1.0.0#/).


| Field Name | Limitation |
| :--- | :--- |
| consumerPhoneNumber | 15 char max length |
| skill | 255 char max length |
| overrideMessage | 1600 char max length |
| handoffId | 16 char max length |

