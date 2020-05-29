---
pagename: Proactive Messaging
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Proactive Messaging
permalink: ProactiveMessaging.html
indicator: messaging
---

### Introduction

Proactive Messaging allows brands to send an outbound message to a consumer and funnel the responses from consumers into LiveEngage; creating a two way conversation. Proactive Messaging v2.0 API is a big improvement from the older [1.0 API](https://developers.liveperson.com/livedeflect-api-proactive-alert-api-proactive-alert.html) with rate limiting, support for guardrails, high send rate and integrates with LE campaign and engagement for conversation routing. Proactive Messaging v2.0 API is currently available to customers for only WhatApp channel. Proactive messaging is available as [Proactive APP](https://proactive-messaging.z1.fs.liveperson.com) and [Proactive 2.0 API](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound).

### Getting Started

1. For [Proactive APP](https://proactive-messaging.z1.fs.liveperson.com), Fill out this [request](https://forms.gle/tUqhtE7kjAJpmo9L8) to get on-boarded. Onboarding to Proactive App is mandatory before onboarding to [Proactive 2.0 API](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound).

2. To onboard on [Proactive 2.0 API](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound),
- Create 2 new bot users in Conversational Cloud. **Customer Success Managers** can do this on behalf of the brand using elevated LivePerson credentials. Please make sure the bot users have Campaign Manager roles & privileges. 
- Provide LivePerson Proactive team with the bot user api key and secret of the 2 bots created in step #2. 
- LivePerson will provide brands the client ID and secrets which will be used to create an app jwt for authentication. click [here](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) to know how to use APP JWT.

### API Domain and Documentation
* Proactive messaging is deployed in three regions. **North America**, **EMEA**(Europe, Middle East and Africa), **APAC**(Asia Pacific). Use the domain api to identify the zone of proactive api which is to be used for an account.

| Method | URI  |
| :--- | :--- |
| GET | http://api.liveperson.net/api/account/{ACCOUNT_ID}/service/agentVep/baseURI.json?version=1.0|

```json
{
    "service": "agentVep",
    "account": "ACCOUNT_ID",
    "baseURI": "va.agentvep.liveperson.net"
}
```

| If Sentinel **baseURI** then | Proactive Region | Proactive **API domain** | API Documentation |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **va**.agentvep.liveperson.net  | NA | proactive-messaging.**z1**.fs.liveperson.com | Click [here](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound) for API spec
| **lo**.agentvep.liveperson.net  | EMEA | proactive-messaging.**z2**.fs.liveperson.com | Click [here](https://proactive-messaging.z2.fs.liveperson.com/api/api-docs/?api=outbound) for API spec
| **sy**.agentvep.liveperson.net  | APAC | proactive-messaging.**z3**.fs.liveperson.com | Click [here](https://proactive-messaging.z3.fs.liveperson.com/api/api-docs/?api=outbound) for API spec

### Campaign API: Example Request and Response

* Click [**Campaign**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound#/Campaign/campaign) to go through API spec and use example here to get started.

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/v2/account/{ACCOUNT_ID}/campaign|

**Path Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | see [API Domain](#api-domain-and-documentation) | proactive-messaging.**z1**.fs.liveperson.com or proactive-messaging.**z2**.fs.liveperson.com or proactive-messaging.**z3**.fs.liveperson.com |
| ACCOUNT_ID | LivePerson site ID | 34567231 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | Extract the access_token value from the response retrieved by the [Get AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | Bearer ayJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM |

**Request Body Example - JSON Payload**

```json
{
    "campaignName": "TestProactiveAPI",
    "skill": "sales",
    "templateId": "943679028015322",
    "consent": true,
    "outboundNumber": "12025166656",
    "consumers": [
        {
            "consumerCountryCode": "1",
            "consumerPhoneNumber": "1012959736",
            "variables": {
            	"1": "Test outbound api"
            }
        }
    ]
}
```
**Response Example**

```json
{
   "proactiveCampaignId": "08TwCku2h",
   "leCampaignId": "1887624732",
   "leEngagementId": "1966477634",
   "requestTraceId": "705ffabe-14bb-4217-9eb7-8c12ff43a5d6",
   "failedConsumers": [],
   "acceptedConsumers": [
       {
           "id": "tjlaY5FJfv",
           "phoneNumber": "+11012959736"
       }
   ]
}
```

### Conversations API: Example Request and Response

* click [**Conversations**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=outbound#/Campaign/conversations) to go through API spec and use example here to get started.


| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/v2/account/{ACCOUNT_ID}/campaign/{PROACTIVE_CAMPAIGN_ID/conversations|

**Path Parameters**

| Name  | Description | Value/Example |
| :--- | :--- | :--- |
| domain   | see [API Domain](#api-domain-and-documentation)| proactive-messaging.**z1**.fs.liveperson.com or proactive-messaging.**z2**.fs.liveperson.com or proactive-messaging.**z3**.fs.liveperson.com |
| ACCOUNT_ID | LivePerson site ID | 34567231 |
| PROACTIVE_CAMPAIGN_ID | Proactive campaign ID found in campaign response | 08TwCku2h |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | Extract the access_token value from the response retrieved by the [Get AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) | Bearer ayJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM |

**Response Example**

```json
{
    "campaignStatus": "FINISHED",
    "conversations": [
        {
            "id": "tjlaY5FJfv",
            "status": "DELIVERED",
            "conversationId": null,
            "errorMessage": null
        }
    ]
}
```

### Frequently Asked Questions

<strong>What is the rate limit for the API?</strong>
The current rate limit is 10 TPS/second/brand per api.

<strong>What is the daily limit when sending outbound messages?</strong>
It depends on the channel. Messaging Channel providers like WhatsApp have certain limitations on how many messages can be sent per day. Considering these limitations Proactive Messaging will limit to 100K recipients/message/day/channel/account. For example, if account X creates Y campaigns on 04/28/2020 with total recipients R for SMS channel cumulative. If 100K - R is 100 then creating a new campaign on 04/28/2020 for SMS channel with more than 100 recipients will fail.

<strong>Which channels are supported as of now?</strong>
Proactive messaging API supports only WA channel. Soon SMS channel will be supported. 

<strong>Does Proactive Messaging provide a way to adhere to the law of sending sms messages within a certain time window (TCPA compliance)?</strong>
Proactive Messaging ensures that messages are sent based on the recipient receiving windows based on recipient phone number. This helps brands adhere to one of the legal requirements for sending SMS texts i.e. sms can only be sent between 8 am and 9 pm to avoid spamming consumers after business hours. 

<strong>Once a campaign is submitted. How soon will these recipients receive the messages?</strong>
The recipients will start receiving the message as per the schedule submitted in the campaign. The messages are sent at a rate upto 10 messages per second per channel per account. For example, a campaign is created for an SMS channel using the default receiving window for 100 recipients. Some of these recipients have phone numbers from regions belonging to PST, CST, EST time zones. Once a campaign is submitted/published, based on the phone number, a zone is computed (number with +1 - (201) is found to be in EST). Using the specified receiving window, a decision is made to send a message to the phone number if current time in that zone is within the window. If the recipient receiving window is closed then a message will be sent on the next opening of the window.

<strong>How will batching capability work?</strong>
Rate limiting on transactions per second does not necessarily limit to sending messages to no of recipients per second. A single campaign can have more than 1 recipient and not more than 1000 recipients. It is recommended to batch recipients in a campaign.

<strong>What are the error codes for invalid recipients information in the campaign?</strong>
Consider an example Response of campaigns API:
```json
{
    "proactiveCampaignId": "t86nfq57S",
    "leCampaignId": "1156064532",
    "leEngagementId": "1190093132",
    "requestTraceId": "221cc131-056a-4c19-a259-8e6ec8e57101",
    "failedConsumers": [
        {
            "phone": "+11012539745",
            "errorMessage": "<<ERROR_MESSAGE>>",
            "variables": {
                "1": "Testing Outbound Api WA"
            }
        }
    ],
    "acceptedConsumers": []
}
```

| <<ERROR_MESSAGE>> | Description |
|-------------------------------------------|------------------------------------------------------------------------------------|
| 'INVALID_NUMBER'                  		| The associated recipient/consumer country code or phone number or both is invalid. |
| 'DUPLICATE_NUMBER'                		| More than one recipient in a given campaign has the same phone number. |
| 'TOO_MANY_VARIABLES'              		| The template expects less variables for creating the message to the recipient. |
| 'INSUFFICIENT_VARIABLES'              	| The template expects more variables for creating the message to the recipient. |
| 'MISSING_VARIABLE=<<VARIABLE_NAME>>'  	| The recipient has a missing variable identified by VARIABLE_NAME. |
| 'VARIABLE_NOT_STRING=<<VARIABLE_NAME>>'   | The recipient has a variable which is not a string identified by VARIABLE_NAME. |

<strong>Will campaign data change after publish ?</strong>
Campaign data wont change after publish. Campaign state starts from DRAFT to SCHEDULED to QUEUED to IN-PROGRESS to FAILED or FINISHED. Campaign state in FAILED or FINISHED is final state. Campaign data can be changed only if it is in DRAFT State.
 
<strong>Are Conversation API responses cached?</strong>
[Conversations](#conversations-api-example-request-and-response) API responses are cached for 5 min. 

<strong>What kind of security, encryption, parameter, failures?</strong>
The API uses App Jwt Oauth 2.0 authentication. The Proactive Messaging web app will show the clientId and Secret to an administrator.

<strong>Does the new API have status call backs? How do we get the status of the message?</strong>
Proactive M=messaging does not have call backs to inform the status. Proactive Messaging provides status of messages through [conversations](https://proactive-messaging.fs.liveperson.com/api/api-docs/v2/outbound/#/Campaign/conversations) API.

<strong>Does LivePerson return some sort of error response when the user already opted out? For example if we try to send to a number that's blocked?</strong>
- Proactive guarantees opt-out from SMS only. If a consumer opts out from twilio SMS, we also opt out consumer from WA.
- Proactive messaging does not have ability to capture opt-out from WA channel. For messages that are sent to consumer who opted out, the state of recipient will be marked 'SKIPPED' in [conversations](#conversations-api-example-request-and-response) api.

<strong>Is there a throughput limitation for the data that gets passed from Twilio to LP? Meaning, if brand sends 100 Twilio msgs/sec (their max throughput), then can the data flow through to LP at the same rate.</strong>
- Proactive Messaging does not have limitations on data while sending messages to twilio or other channels. However a large message may translate to more than one messages when it ends up being sent to the recipient. 
- Example: A message of more than 140 characters will be divided into two messages and sent to recipients. When messages are sent back to LP, there are no limits on the number of messages or data.
 
<strong>What reporting metrics do I get? What metrics are available now?</strong>
- Proactive Messaging provides the status of messages delivered to recipients through [conversations](#conversations-api-example-request-and-response) api. [conversations](#conversations-api-example-request-and-response) api provides the necessary information to compute the success and failure of messages being sent to connectors. Below are status of recipients that provides the information like

| <<MESSAGE_STATUS>> | Description |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 'DELIVERED'         | Message was delivered successfully to our downstream service. |
| 'DRAFT'             | When recipients are added to a campaign and not yet published. For users of 2.0 API, this can happen 	when recipients are added to the campaign and publishing fails abnormally. |
| 'TOO_MANY_VARIABLES'| Message failed the capability check - usually happens when a phone number is invalid or not eligible or when conversation already exists |
| 'FAILED'            | Not sent state happens when campaign is in published mode and recipients are yet to schedule. |
| 'NOT_SENT'  		  | The recipient has a missing variable identified by VARIABLE_NAME. |
| 'SKIPPED'   		  | Usually happens when the user has Opted Out from receiving any message from the Brand. |
| 'SCHEDULED'   	  | Message that is not delivered and is scheduled to be delivered at a later moment during the next business hour. |

<strong>What is the lifespan of the app JWT? When we do need to get a new JWT, do we have to first make the call to LivePerson Domain API in order to get the sentinel service domain, or is that domain consistent enough that we can hardcode that in?</strong>
- An APP JWT expiration time is 1 hour from the time it is created. To get an app JWT from sentinel API, a call to domain api has to be made to get the sentinel api domain. This domain can be cached for some duration. We expect the domain to change in very rare cases. It’s still recommended that cache duration should not be more than 1 day.

- When using app JWT to call Proactive api, a response below indicates the jwt is expired and new app jwt to be obtained from sentinel api.
	```json
	{
		"code": 0,
		"message": "jwt expired"
	}
	```

<strong>Do we need any other JWT other than APP JWT e.g. Consumer JWT?</strong>
Proactive Messaging service does not create or consume consumer JWT or other JWT except APP JWT. Proactive Messaging api only consumes AppJwt created from provided clientId and Secret for authentication.

<strong>What should the authentication header look like, is the bearer token the only thing required even in production usage? Do we need to include our ConsumerKey/Secret or our AccessToken/Secret that we use in the 1.0 API at all, or any other information?</strong>
App Jwt will be consumed as Bearer Token. No other key, secret or token will be consumed by Proactive Messaging api.

<strong>How does proactive 2.0 api provide status of message e.g. success/failure of delivery ?</strong>
The Proactive 2.0 campaign api is asynchronous meaning that the success and failure of a message to a recipient is noted only when the recipient is picked from the proactive internal queue and a message is sent as per pre configured message rate. The [conversations](#conversations-api-example-request-and-response) api will provide the status of recipients tied to the campaign created.

<strong>Of the error cases described above for 2.0, which of those errors should we consider "retry-able"? For example, a bad request due to a missing field is not retry-able because it will just always fail, but a case where one of the downstream services was temporarily unavailable could warrant a retry. Which error cases that we could get back from the /campaigns endpoint are retryable and how should we handle a retry to avoid sending duplicate messages to a customer?</strong>
Proactive Messaging service has retry mechanism internally on dependent services to reduce failures due to transient errors.

<strong>What’s the lookback period?</strong>
- Lookback period is how long will LP services maintain context (like campaign info, skill etc) for a reply of a message that is sent to the recipient/consumer using a campaign. Current lookback period is 30 days from when messages are sent using Proactive api. 
- Example: When a message is sent to consumer using Proactive Messaging api and if consumer replies within 30 days from when message was sent, the response will be redirected to LE agent according to configured skill. A response after 30 days will be rejected. A new message sent to the same consumer within 30 days is possible if the consumer has no existing conversation with an agent in LiveEngage.
