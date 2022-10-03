---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Outbound Configuration API
permalink: outbound-configuration-api-overview.html
root-link: true
indicator: Proactive Messaging
redirect_from:
 - proactive-messaging-reporting-api.html
---

### Introduction
The Outbound configuration API provides a complete list of API handoffs created in the Proactive Web Tool. This API allows 1) Fetching all handoffs configurations 2) Fetching all handoff configurations filtered by a specific messaging channel (sms, whats app, apple business chat, in-app, google rcs etc)

### API provides outbound configuration for below services
* Proactive Messaging 2.0

### Getting Started

**Who can access this Outbound Configuration API**

All Brands who use Proactive Messaging version 2.0 have access to the Outbound Configuration API service.

**What are the limitations**

Both endpoints are currently read only, i.e it is not possible to make configuration changes using the outbound configuration API.


**Feature Details**

Outbound Reporting API provides the following data fields. This table explains the definition of each field.

| # | Data Field | Definition |
| 1 | id | The outbound configuration profile id |
| 2 | name |  The name of the outbound configuration template |
| 3 | lookbackPeriodDay | A numeric value representing the skill lookback back period in days, example: 30min value: 0 Max value: 30 |
| 4 | lookbackPeriodHour | A numeric value representing the lookback back period in hours, example: 0 min value:0 Max value: 23
| 5 | routeAllWithinLookback | A flag that indicates whether or not to route reopened conversations within the lookback period |
| 6 | updatedAt | Shows last updated time in utc |
| 7 | createdAt | Shows the configuration created time in utc |
| 8 | channels |  An array of channels and their respective configuration.
                  For example:
                  Type: name of the messaging channel:
                   “wa” (whats app)
                  “sms-twilio”: standard text message
                  “apple-twilio”: apple business chat
                  “googlercs” google rich content
                  “inapp” : LivePerson consumer application
                  appName: (in app channel only) the associated sdk data source.
                  outboundnumber: the “From” number of the sent message
                  language: the associated language for the channel
                  namespace: for whats app only indicated the template namespace |
| 9 | messageComponents | * type
                          * sub_type
                          * content
                          * variables
                          * optOut
                          * index
                          * phone_number
                          * height
                          * thumbnailImageAlignment
                          * cardOrientation
                          * serviceAccountNameisSameMessageForNotification
                          * notificationTitlemessageText |
| 10 | type,header,body,button,media (grcs only), footer |
| 11 | sub_type | For example:
                  Type : “header”
                  sub_type: “image” |
| 12 | content | the string (including variables placeholder) For example:
                 “This is a text with a var ${{1}} |
| 13 | variables | if the template contains variables it will be reflected here by numbers, for example a configuration for a template with a single var will look like this: “variables: [“1”, “2”, “3”] |
| 14 | optOut | the opt out text that will be sent to the consumer |
| 15 | Index | for button type only, indicates the order of the button starting from 0, For example 1st out of 2 buttons will be indicated as : index: 0 
               url: the link attached to the button |
| 16 | phone_number | for button type only
                      For example:
                      “phone_number”: “+14xxxxx5674” |
                      
the following attributes are For google rcs only
| 1 | type | media |
| 2 | height | string representing the media height parameters |
| 3 | thumbnailImageAlignment | the Image preview alignment for standalone cards with horizontal layout. |
| 4 | cardOrientation | indicates the content display orientation, for example:
                        “VERTICAL” |
| 5 | serviceAccountName | the provisioned account for grcs |
| 6 | isSameMessageForNotification | will the sent message be displayed in the push notification |
| 7 | notificationTitle | the title of the message notification |
| 8 | messageText | Average of the CSAT rating score |
| 9 | cardOrientation | Average of the CSAT rating score |


*Delivered count for Whatsapp channel — For a status to be read, it must have been delivered. In some scenarios, such as when a user is in the chat screen and a message arrives, the message is delivered and read almost simultaneously. In this or other similar scenarios, the delivered notification will not be sent and only read notificationn will be sent by Whatsapp as it is implied that a message has been delivered if it has been read. Therefore the delivered count can be less than the read count in such scenarios.

**Full Funnel Overview board**

<img class="fancyimage" src="img/outbound_reporting_api_full_funnel_overview.png" alt="">

**What are the limitations**

- First message and override message data fields are not currently available in the Outbound Reporting API.
- Total summary of eligibility, sent, delivered combined for all channels / skills per IVR outbound number is not currently available in the Outbound Reporting API.
- The capability of generating reports of all the consumers who previously opt out from Proactive Messaging to receive any future messages is not available in the Outbound Reporting API.
- The maximum allowed time interval for a transaction reporting API request cannot exceed 24 hours.
- The maximum allowed time interval for a account analytics API request cannot exceed 60 days.
- The data is persisted in the system for a period of 13 months as per the company retention policy period.
- The Reporting API data is up to 20 min delayed from the time the messaging events are generated.

### API Specifications

## OAuth 2.0 Authorization 
* Either Administrator or LPA can get client_id and client_secret by clicking the show secrets on the web UI as shown below.
![Secrets](img/proactive/proactive-show-secrets.png)  
* The client_id and client_secret will than be used to create AppJWT. Click here to learn how to use [AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt).
* The access_token retrieved from above AppJWT response should be used in the Request Header for Authorization.

### Outbound Configuration API

API for account level outbound configurations

**1. Account - Get outbound configuration  for the given account**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/get) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/account/{{id}}/app/{{appName}}/handoffs/list?v=1

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.handoff.liveperson.ne or lo.handoff.liveperson.ne or sy.handoff.liveperson.ne |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | App name | Yes | "prmsg"|
| v | Version | Yes | 1|

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| limit | Max count of outbound configurations to fetch | No | 30 |
| offset | Starting point to fetch from  | No | 0 |

**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success

​​sms-twilio response example:
```json
{
   type: "sms-twilio",
   language: "en",
   outboundnumber: "+14156586515",
   messageComponents: [{
      type: "body",
      content: "Hi ${{1}}",
      variables: ["1"],
      optOut: "To stop receiving messages, reply STOP. For help, reply HELP."
     }
   ]
  }
```

Whats app response example:
```json
​{
   type: "wa",
   language: "en",
   namespace: "b8520e15_f77b_5f76_fb50_9f756d03676b",
   templatename: "newtemplate_button_cta_feb14",
   outboundnumber: "12535277322",
   messageComponents: [
       {
           type: "body",
           content: "Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}",
           variables: [
               "1",
               "2",
               "3",
               "4",
               "5"
           ]
       }
  ]
}
```
Whats app rich content response example
```json
{
   type: "wa",
   language: "en",
   namespace: "b8520e15_f77b_5f76_fb50_9f756d03676b",
   templatename: "newtemplate_button_cta_feb14",
   outboundnumber: "12535277322",
   messageComponents: [
                             {
                                 "type": "body",
                                 "content": "Your ticket for ${{1}}\n\nTime - ${{2}}\nVenue - ${{3}}\nSeats - ${{4}} - ${{5}}",
                                 "variables": [
                                     "1",
                                     "2",
                                     "3",
                                     "4",
                                     "5"
                                 ]
                             },
                             {
                                 "type": "footer",
                                 "content": "Just show this QR code at the cinema"
                             },
  }]
```

The messageComponents fields can reflect the following fields depending on the template

Header image with static url:
```json
       {
           type: "header",
           sub_type: "image",
           content: "https://upload.wikimedia.org/wikipedia/commons/c/ce/1963_Tornadoes.png",
           variables: []
       }
```

Header image with dynamic url that is expected to be passed in the request payload
```json
       {
           type: "header",
           sub_type: "image",
           content: "${{1}}",
           variables: [
               "1"
           ]
       }
```
Header with a static document url
```json
       {
           type: "header",
           sub_type: "document",
           content: "https://cdn.timelab.se/cellite/20180626140206/{{1}}.pdf",
           variables: [
               "1"
           ]
       }
```

Header with a static video url
```json
       {
           type: "header",
           sub_type: "video",
           content: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4",
           variables: []
       }

```

Button with a static call to action  value
```json
{
           type: "button",
           index: 0,
           content: "Call",
           sub_type: "phone_number",
           phone_number: "+12062061111"
       }
```

Button with a dynamic call to action value  that is expected to be passed in the request payload
```json
       {
           type: "button",
           index: 1,
           content: "Link",
           sub_type: "url",
           url: "https://www.google.com/{{1}}",
           variables: [
               "1"
           ]
       }
```
Button with a static value for quick reply
```json
{[{
           type: "button",
           index: 0,
           content: "Yes",
           sub_type: "quick_reply"
       },
       {
           type: "button",
           index: 1,
           content: "No",
           sub_type: "quick_reply"
       }
   ]
}
```

In-app response example:
```json
[
       {
           type: "inapp",
           appNames: [
               "com.liveperson.sdksample"
           ],
           language: "en",
           messageComponents: [
               {
                   type: "text",
                   messageText: "${{3}}",
                   notificationTitle: "we ${{1}}",
                   notificationMessage: "wsdc ${{2}}",
                   isSameMessageForNotification: true,
                   variables: ["1","2","3"]
               },
               {
                   url: "${{4}}",
                   type: "image",
                   isClickable: true,
                   destinationUrl: "https://www.liveperson.com",
                   Variables: ["4"]
               }
           ]
       }
 
   ]
```
Google Rcs response example:
```json
{
   type: "googlercs",
   language: "en",
   messageComponents:
   [
     Quick reply object
       {
           type: "button",
           index: 0,
           content: "I need help",
           sub_type: "quick_reply",
       },
       {
           type: "button",
           index: 1,
           content: "Support FAQ",
           sub_type: "url",
           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Log_Pod_Mangrtom_und_Rombon_10032015_0593.jpg/1920px-Log_Pod_Mangrtom_und_Rombon_10032015_0593.jpg",
 
       },
      static media object
       {
           type: "media",
           height: "medium",
           thumbnailImageAlignment : "right",
           content: "${{3}}",
           variables: ["3"]
       },
       body object
       {
           type: "body",
           title: "Thank you for using Freedom Mobile\"s Rich Messaging Service ${{1}}."
           content: "You can now message us while you are on the go! Let us know how we can help you today and remember not to proactively provide confidential information i.e. credit card or account information. ${{2}}",
           variables: ["1", "2" ]
       }
   ],
   cardOrientation: "VERTICAL",
   serviceAccountName: "c2m-7453907-grcs"
}
 ```
Google Rcs channel object with text suggestions:
```json
{
   type: "googlercs",
   language: "en",
   messageComponents: [
 
       {// text
           type: "body",
           content: "This is example ${{1}}",
           variables: ["1"]
       },
       {//dynamic cta
           type: "button",
           index: 0,
           content: "Call us",
           sub_type: "phone_number",
           phone_number: "+12062061111"
       },
       {
           type: "button",
           index: 1,
           content: "Support FAQ",
           sub_type: "url",
           url: "https://www.freedommobile.ca/",
       },
   ]
   outboundnumber: "c2m-7453907-grcs",
   serviceAccountName: "c2m-7453907-grcs"
}

```
Google RCS channel Object with media:
```json 
{
   type: "googlercs",
   language: "en",
   messageComponents: [
 
       // media static
       {
           type: "media",
           content: "https://upload.wikimedia.org/wikipedia/commons/c/ce/1963_Tornadoes.png",
           variables: []
       },
 
 
       // media dynamic
       {
           type: "media",
           content: "${{1}}"
           variables: ["1"]
       },]
   serviceAccountName: "c2m-7452227-grcs"
}
```



**2. Account - Get outbound configuration by channel**

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/post) to go through API spec to get started.

| Method | URI  |
| :--- | :--- |
| GET | https://{domain}/api/account/:{{id}}/app/:{{appName}}/handoffs/list/channel /:{{channelName}}?v=1

**Path Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| domain   | domain | Yes | va.handoff.liveperson.ne or lo.handoff.liveperson.ne or sy.handoff.liveperson.ne |
| accountId | LivePerson site ID | Yes | 12345678 |
| app | App name | Yes | "prmsg"|
| channel | The messaging channel name | Yes | wa, sms-twilio, apple-twilio, googlercs, inapp
| v | Version | Yes | v=1 |

**Query Parameters**

| Name  | Description | Required | Value/Example |
| :--- | :--- | :--- | :--- |
| limit | Max count of outbound configurations to fetch | No | 30 |
| offset | Starting point to fetch froms | No | 0 |


**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token | |

**Response Example**

200 Success

outbound configuration by response example:
```json
[{
   type: "sms-twilio",
   language: "en",
   outboundnumber: "+13333333333",
   messageComponents: [{
      type: "body",
      content: "Hi this is an outbound message #1",
      variables: ["1"],
      optOut: "To stop receiving messages, reply STOP. For help, reply HELP."
     }
   ]
  },
{
   type: "sms-twilio",
   language: "en",
   outboundnumber: "+142222222222",
   messageComponents: [{
      type: "body",
      content: "Hi this is an outbound message #1",
      variables: ["1", "2"],
      optOut: "To stop receiving messages, reply STOP. For help, reply HELP."
     }
   ]
  },
{
   type: "sms-twilio",
   language: "en",
   outboundnumber: "+1433333333333",
   messageComponents: [{
      type: "body",
      content: "Hi this is an outbound message #3",
      variables: ["1"],
      optOut: "To stop receiving messages, reply STOP. For help, reply HELP."
     }
   ]
  }]
```
