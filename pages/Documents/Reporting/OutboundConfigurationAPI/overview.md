---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Outbound Configuration API
permalink: outbound-configuration-api-overview.html
root-link: true
indicator: Proactive Messaging
date_published: 2022/10/24
redirect_from:
 - proactive-messaging-reporting-api.html
---

### Introduction   

The Outbound configuration API provides a complete list of API handoffs created in the Proactive Web Tool. This API allows 1) Fetching all handoffs configurations 2) Fetching all handoff configurations filtered by a specific messaging channel (SMS, WhatsApp, Apple Business Chat, In-app, Google RCS, etc.)

This API provides outbound configuration for Proactive Messaging 2.0 service.

### Getting started

#### Who can access this Outbound Configuration API

All Brands who use Proactive Messaging version 2.0 have access to the Outbound Configuration API service.

#### What are the limitations

Both endpoints are currently read only, i.e it is not possible to make configuration changes using the outbound configuration API.

#### OAuth 2.0 authorization

* Either Administrator or LPA can get client_id and client_secret by clicking the show secrets on the web UI as shown below.   

  ![Secrets](img/proactive/proactive-show-secrets.png)  
* The client_id and client_secret will than be used to create AppJWT. Click here to learn how to use [AppJWT](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt).
* The access_token retrieved from above AppJWT response should be used in the Request Header for Authorization.


### Outbound configuration API

API for account level outbound configurations

#### 1. Account - Get outbound configuration for the given account

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/get) to go through API spec to get started.

| Method | URI                                                                   |
| :----- | :-------------------------------------------------------------------- |
| GET    | https://{domain}/api/account/{id}/app/{appName}/handoffs/list?v=1 |

##### Path parameters

| Name      | Description        | Required | Value/Example                                                                    |
| :-------- | :----------------- | :------- | :------------------------------------------------------------------------------- |
| domain    | domain             | Yes      | va.handoff.liveperson.ne or lo.handoff.liveperson.ne or sy.handoff.liveperson.ne |
| accountId | LivePerson site ID | Yes      | 12345678                                                                         |
| app       | App name           | Yes      | "prmsg"                                                                          |
| v         | Version            | Yes      | 1                                                                                |

##### Query parameters

| Name   | Description                                   | Required | Value/Example |
| :----- | :-------------------------------------------- | :------- | :------------ |
| limit  | Max count of outbound configurations to fetch | No       | 30            |
| offset | Starting point to fetch from                  | No       | 0             |

##### Request headers

| Header        | Description                                                                                                                                                                                                                                         | Value/Example    |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
| Content-Type  | Used to indicate the media type of the resource                                                                                                                                                                                                     | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token |                  |

##### Response examples

**SMS Twilio:**    

SMS Twilio 200 Success:
```json
{
  "type": "sms-twilio",
  "language": "en",
  "outboundnumber": "+14156586515",
  "messageComponents": [
    {
      "type": "body",
      "content": "Hi ${{1}}",
      "variables": ["1"],
      "optOut": "To stop receiving messages, reply STOP. For help, reply HELP."
    }
   ]
}
```

**WhatsApp:**   

WhatsApp 200 Success:
```json
​{
  "type": "wa",
  "language": "en",
  "namespace": "b8520e15_f77b_5f76_fb50_9f756d03676b",
  "templatename": "newtemplate_button_cta_feb14",
  "outboundnumber": "12535277322",
  "messageComponents": [
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
    }
  ]
}
```

WhatsApp rich content 200 Success:
```json
{
  "type": "wa",
  "language": "en",
  "namespace": "b8520e15_f77b_5f76_fb50_9f756d03676b",
  "templatename": "newtemplate_button_cta_feb14",
  "outboundnumber": "12535277322",
  "messageComponents": [
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
  ]
}
```

The messageComponents fields can reflect the following fields depending on the template

| Header image with static url | {<br> &nbsp;  "type": "header",<br> &nbsp;  "sub_type": "image",<br>&nbsp;   "content": "https://upload.wikimedia.org/commons-1/c/ce/1963_Tornadoes.png",<br> &nbsp;  "variables": []<br>}|
| Header image with dynamic url that is expected to be passed in the request payload | {<br> &nbsp;  "type": "header",<br> &nbsp;  "sub_type": "image",<br> &nbsp;   "content": "${{1}}",<br> &nbsp;  "variables": [ "1" ]<br>} |
| Header with a static document url | {<br> &nbsp;  "type": "header",<br> &nbsp;  "sub_type": "document",<br> &nbsp;  "content": "https://cdn.timelab.se/cellite-1/20180626140206/{{1}}.pdf",<br> &nbsp;  "variables": [ "1" ]<br>} |
| Header with a static video url | {<br> &nbsp;  "type": "header",<br> &nbsp;  "sub_type": "video",<br> &nbsp;  "content": "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4",<br> &nbsp;  "variables": []<br> } |
| Button with a static call to action  value | {<br> &nbsp;  "type": "button",<br> &nbsp;  "index": 0,<br> &nbsp;  "content": "Call",<br> &nbsp;  "sub_type": "phone_number",<br> &nbsp;  "phone_number": "+12062061111"<br> } |
| Button with a dynamic call to action value  that is expected to be passed in the request payload | {<br> &nbsp;  "type": "button",<br> &nbsp;  "index": 1,<br> &nbsp;  "content": "Link",<br> &nbsp;  "sub_type": "url",<br> &nbsp;  "url": "https://www.google.com/{{1}}",<br> &nbsp;  "variables": [ "1" ]<br> } |
| Button with a static value for quick reply | {<br> &nbsp;  [<br>&nbsp;  &nbsp;   {<br> &nbsp;  &nbsp;  &nbsp;  "type": "button",<br> &nbsp;  &nbsp;  &nbsp;  "index": 0,<br> &nbsp;  &nbsp;  &nbsp;  "content": "Yes",<br> &nbsp;  &nbsp;  &nbsp;  "sub_type": "quick_reply"<br> &nbsp;  &nbsp;  },<br> &nbsp;  &nbsp;  {<br> &nbsp;  &nbsp;  &nbsp;  "type": "button",<br> &nbsp;  &nbsp;  &nbsp;  "index": 1,<br> &nbsp;  &nbsp;  &nbsp;  "content": "No",<br> &nbsp;  &nbsp;  &nbsp;  "sub_type": "quick_reply"<br> &nbsp;  &nbsp;  }<br>&nbsp;  ]<br> } |


**In-app:**   

In-app 200 response:
```json
[
  {
    "type": "inapp",
    "appNames": [
      "com.liveperson.sdksample"
    ],
    "language": "en",
    "messageComponents": [
      {
        "type": "text",
        "messageText": "${{3}}",
        "notificationTitle": "we ${{1}}",
        "notificationMessage": "wsdc ${{2}}",
        "isSameMessageForNotification": true,
        "variables": ["1","2","3"]
      },
      {
        "url": "${{4}}",
        "type": "image",
        "isClickable": true,
        "destinationUrl": "https://www.liveperson.com",
        "Variables": ["4"]
      }
    ]
  }
]
```

**Google RCS:**   

Google RCS 200 response:
```json
{
  "type": "googlercs",
  "language": "en",
  "messageComponents": [
    // Quick reply object
    {
      "type": "button",
      "index": 0,
      "content": "I need help",
      "sub_type": "quick_reply"
    },
    {
      "type": "button",
      "index": 1,
      "content": "Support FAQ",
      "sub_type": "url",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Log_Pod_Mangrtom_und_Rombon_10032015_0593.jpg/1920px-Log_Pod_Mangrtom_und_Rombon_10032015_0593.jpg"
    },
    // Static media object
    {
      "type": "media",
      "height": "medium",
      "thumbnailImageAlignment" : "right",
      "content": "${{3}}",
      "variables": ["3"]
    },
    // Body object
    {
      "type": "body",
      "title": "Thank you for using Freedom Mobile\"s Rich Messaging Service ${{1}}.",
      "content": "You can now message us while you are on the go! Let us know how we can help you today and remember not to proactively provide confidential information i.e. credit card or account information. ${{2}}",
      "variables": ["1", "2" ]
    }
  ],
  "cardOrientation": "VERTICAL",
  "serviceAccountName": "c2m-7453907-grcs"
}
 ```

Google RCS channel object with text suggestions:
```json
{
  "type": "googlercs",
  "language": "en",
  "messageComponents": [
    {
    // Text
      "type": "body",
      "content": "This is example ${{1}}",
      "variables": ["1"]
    },
    {
    // Dynamic cta
      "type": "button",
      "index": 0,
      "content": "Call us",
      "sub_type": "phone_number",
      "phone_number": "+12062061111"
    },
    {
      "type": "button",
      "index": 1,
      "content": "Support FAQ",
      "sub_type": "url",
      "url": "https://www.freedommobile.ca/",
    },
  ],
  "outboundnumber": "c2m-7453907-grcs",
  "serviceAccountName": "c2m-7453907-grcs"
}
```

Google RCS channel Object with media:
```json 
{
  "type": "googlercs",
  "language": "en",
  "messageComponents": [
    // Media static
    {
      "type": "media",
      "content": "https://upload.wikimedia.org/wikipedia/commons/c/ce/1963_Tornadoes.png",
      "variables": []
    },
    // Media dynamic
    {
      "type": "media",
      "content": "${{1}}",
      "variables": ["1"]
    }
  ],
  "serviceAccountName": "c2m-7452227-grcs"
}
```

#### 2. Account - Get outbound configuration by channel

Click [**Account**](https://proactive-messaging.z1.fs.liveperson.com/api/api-docs/?api=reporting#/Account/post) to go through API spec to get started.

| Method | URI                                                                                               |
| :----- | :------------------------------------------------------------------------------------------------ |
| GET    | https://{domain}/api/account/{id}/app/{appName}/handoffs/list/channel /{channelName}?v=1 |

##### Path parameters

| Name      | Description                | Required | Value/Example                                                                    |
| :-------- | :------------------------- | :------- | :------------------------------------------------------------------------------- |
| domain    | domain                     | Yes      | va.handoff.liveperson.ne or lo.handoff.liveperson.ne or sy.handoff.liveperson.ne |
| accountId | LivePerson site ID         | Yes      | 12345678                                                                         |
| app       | App name                   | Yes      | "prmsg"                                                                          |
| channel   | The messaging channel name | Yes      | wa, sms-twilio, apple-twilio, googlercs, inapp                                   |
| v         | Version                    | Yes      | v=1                                                                              |

##### Query parameters

| Name   | Description                                   | Required | Value/Example |
| :----- | :-------------------------------------------- | :------- | :------------ |
| limit  | Max count of outbound configurations to fetch | No       | 30            |
| offset | Starting point to fetch froms                 | No       | 0             |


##### Request headers

| Header        | Description                                                                                                                                                                                                                                         | Value/Example    |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
| Content-Type  | Used to indicate the media type of the resource                                                                                                                                                                                                     | application/json |
| Authorization | [OAuth 2.0](https://developers.liveperson.com/connector-api-send-api-authorization-and-authentication.html#get-appjwt) or [OAuth 1.0](https://developers.liveperson.com/retrieve-api-keys-create-a-new-api-key.html) (Section 8) or LE Bearer token |                  |

##### Response example

Outbound configuration 200 response:
```json
[
  {
    "type": "sms-twilio",
    "language": "en",
    "outboundnumber": "+13333333333",
    "messageComponents": [
      {
        "type": "body",
        "content": "Hi this is an outbound message #1",
        "variables": ["1"],
        "optOut": "To stop receiving messages, reply STOP. For help, reply HELP."
      }
    ]
  },
  {
    "type": "sms-twilio",
    "language": "en",
    "outboundnumber": "+142222222222",
    "messageComponents": [
      {
        "type": "body",
        "content": "Hi this is an outbound message #1",
        "variables": ["1", "2"],
        "optOut": "To stop receiving messages, reply STOP. For help, reply HELP."
      }
    ]
  },
  {
    "type": "sms-twilio",
    "language": "en",
    "outboundnumber": "+1433333333333",
    "messageComponents": [
      {
        "type": "body",
        "content": "Hi this is an outbound message #3",
        "variables": ["1"],
        "optOut": "To stop receiving messages, reply STOP. For help, reply HELP."
      }
    ]
  }
]
```

### Data fields definitions

Outbound Reporting API provides the following data fields. This table explains the definition of each field.

| Data field | Definition |
| ------ | -------- |
| `id` | The outbound configuration profile id |
| `name` |  The name of the outbound configuration template |
| `lookbackPeriodDay` | A numeric value representing the skill lookback back period in days, example: 30min value: 0 Max value: 30 |
| `lookbackPeriodHour` | A numeric value representing the lookback back period in hours, example: 0 min value:0 Max value: 23
| `routeAllWithinLookback` | A flag that indicates whether or not to route reopened conversations within the lookback period |
| `updatedAt`| Shows last updated time in utc |
| `createdAt` | Shows the configuration created time in utc |
| `channels` |  An array of channels and their respective configuration.<br> For example:<br> **type** (name of the messaging channel):<br> “wa”: whats app <br> “sms-twilio”: standard text message<br> “apple-twilio”: apple business chat<br> “googlercs” google rich content<br> “inapp” : LivePerson consumer application<br> **appName**: (in app channel only) the associated sdk data source.<br> **outboundnumber**: the “From” number of the sent message<br> **language**: the associated language for the channel<br> **namespace**: for whats app only indicated the template namespace |
| `messageComponents` | * type<br> * sub_type<br> * content<br> * variables<br> * optOut<br> * index<br> * phone_number<br> * height<br> * thumbnailImageAlignment<br> * cardOrientation<br> * serviceAccountNameisSameMessageForNotification<br> * notificationTitlemessageText |
| `type` | header,body,button,media (grcs only), footer |
| `sub_type` | For example:<br> Type : “header”<br> sub_type: “image” |
| `content` | The string (including variables placeholder) <br> For example: “This is a text with a var ${{1}} |
| `variables` | If the template contains variables it will be reflected here by numbers, for example a configuration for a template with a single var will look like this: “variables: [“1”, “2”, “3”] |
| `optOut` | The opt out text that will be sent to the consumer |
| `Index` | For button type only, indicates the order of the button starting from 0, For example 1st out of 2 buttons will be indicated as => index: 0 <br> url: the link attached to the button |
| `phone_number` | For button type only<br> For example: “phone_number”: “+14xxxxx5674” |

The following attributes are for Google RCS only.

| Attribute | Description |
| ------ | -------- |
| `type` | media |
| `height` | String representing the media height parameters |
| `thumbnailImageAlignment` | The Image preview alignment for standalone cards with horizontal layout.|
| `cardOrientation` | Indicates the content display orientation, for example: “VERTICAL” |
| `serviceAccountName` | The provisioned account for grcs |
| `isSameMessageForNotification` | Will the sent message be displayed in the push notification |
| `notificationTitle` | The title of the message notification |
| `messageText` | Average of the CSAT rating score |
| `cardOrientation` | Average of the CSAT rating score |
