---
pagename: Examples
redirect_from:
  - examples.html
  - connector-api-examples-create-a-new-conversation.html
  - connector-api-examples-create-a-new-conversation-and-report-sdes.html
  - connector-api-examples-send-a-message.html
  - connector-api-examples-close-a-conversation.html
  - connector-api-examples-send-chat-state-events.html
  - connector-api-examples-how-to-enable-a-feature.html
  - connector-api-examples-campaign-for-messaging-routing.html
  - connector-api-examples-file-sharing.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Send API
order: 59
indicator: messaging
permalink: connector-api-send-api-examples.html

---

### Create a new conversation

This example illustrates how to create a new conversation using the CONVERSATION API endpoint.

To get an example of the accepted payloads used in this API's methods, please have a look at the [Messaging Window API](consumer-int-overview.html) with its integrated [Request Builder](consumer-int-msg-reqs.html).

This API endpoint expects a set of JSON payloads, each representing a different type of request to Conversational Cloud messaging service. The order of the payloads is important in order to create a new conversation. First, the payload with the `type` _userprofile.SetUserProfile_ appears, second the payload with the `type` _cm.ConsumerRequestConversation_ appears.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Create a new conversation

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Request Body - JSON payload**

```json
[
   {
      "kind":"req",
      "id":"1,",
      "type":"userprofile.SetUserProfile",
      "body":{
         "authenticatedData":{
            "lp_sdes":[
               {
                  "type":"ctmrinfo",
                  "info":{
                     "socialId":"1234567890",
                     "ctype":"vip"
                  }
               },
               {
                  "type":"personal",
                  "personal":{
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {
      "kind":"req",
      "id":"2,",
      "type":"cm.ConsumerRequestConversation",
      "body":{
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```

Please refer [here](sendapi-create.html) to get details about the payload and its properties.

### Create a new conversation and report SDEs

The Connector API provides the ability to set the user engagement attributes (SDEs) upon the creation of a new conversation. This can be used to:

  * Set the consumer profile for the agent

  * To target/route the conversation to a specific skill as it was configured via internal LivePerson configuration (Houston) - i.e. routing rules.

See below a few examples of how to do so.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

**Note**

* We advise against using this method for conversation targeting/routing. The best practice is to setup a campaign for messaging on your account and send the Campaign Info when creating a conversation. See example [here](#campaign-for-messaging-routing).

* The supported SDEs for sending are the [Customer Info](engagement-attributes-types.html#customer-info) and [Personal Info](engagement-attributes-types.html#personal-info) SDEs.


#### Examples

##### Create new conversation and send companyBranch

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Example Request Body - JSON Payload**

```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "companyBranch":"ACME"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```

##### Create new conversation and send ctype/gender

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Example Request Body - JSON Payload**

```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "ctype":"vip"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```


### Send a message

This is an example of how to send a message to Conversational Cloud to an open conversation using the SEND API endpoint. The `conversation ID` is required to address the conversation and it is passed in the JSON payload.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Send a message

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ContentEvent",
         "contentType":"text/plain",
         "message":"Hi from Send Message only - SendLine"
      }
   }
}
```

### Close a conversation

In order to close a conversation you simply use the same SEND API endpoint you use to send a message. However, the payload type is different i.e. not _ms.PublishEvent_ type but _cm.UpdateConversationField_ type. The conversation ID is passed in the Payload in this method as well.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Close a conversation

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Example Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":1,
   "body":{  
      "conversationId":"{conversationId}",
      "conversationField":{  
         "field":"ConversationStateField",
         "conversationState":"CLOSE"
      }
   },
   "type":"cm.UpdateConversationField"
}
```

### Send Chat State Events

This example illustrates how to send Conversational Cloud the presence/typing events (chat-state), specifically the "Consumer is Typing" chat-state (`COMPOSING`).

In order to send an indication that the consumer is typing, the connector will send a payload of _ms.PublishEvent_ type. The payload body includes an event of _ChatStateEvent_ and we are passing `COMPOSING` as the **chatState** value.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Send Chat State Events - "Consumer is typing"

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Example Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ChatStateEvent",
         "chatState":"COMPOSING"
      }
   }
}
```

**Notes**:

In order to show that the consumer has stopped typing it is not sufficient to send another text message. Instead you need to send another payload as above with the _ChatStateEvent_ value in the "type" key. In addition, you will need to pass any other state which is different than `COMPOSING` (it doesn't matter which value you choose, as long as it is not `COMPOSING`) i.e: `ACTIVE` , `INACTIVE`, `GONE`, `PAUSE`.

### How to enable a feature

The following example illustrates how to enable the auto messages feature upon conversation opening. The JSON payload is the same one used to create a new conversation but pay attention to the additional request header.

**Notes**:

1. Contact your account team to enable this feature on your account.

2. Upon creating a new conversation (via the CONVERSATION endpoint), make sure you also pass the additional **Client-Properties** request header. See [Example](#create-a-new-conversation--enable-the-auto-messages-feature) below.

3. Every following request (via the SEND endpoint) must also include the additional **Client-Properties** request header. See [Example](#send-a-message--enable-the-auto-messages-feature) below.


#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### How to enable AUTO_MESSAGES

##### Create a new conversation & enable the AUTO Messages feature

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |


**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |


**Request Body - JSON Payload**

```json
[  
   {  
      "kind":"req",
      "id":"1,",
      "type":"userprofile.SetUserProfile",
      "body":{  
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "ctype":"vip"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"2,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}",
         "conversationContext": {
         	 "visitorId": "",
         	 "sessionId": "",
         	 "interactionContextId": "2",
         	 "type": "SharkContext",
         	 "lang": "en-US"
         }
      }
   }
]
```

#### Send a message & enable the AUTO messages feature.

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |

**Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ContentEvent",
         "contentType":"text/plain",
         "message":"Hi from Send Message only - Auto Messages feature"
      }
   }
}
```


<div class="important"> In order to receive AUTO MESSAGES, you must make the second request (sending the first message) <b>no later than 10 seconds</b> from the first request (creating the new conversation). In addition, it is required that the account has enabled the Controller Bot permissions in Account Config; contact your Customer Success Manager in order to do this.</div>

### Campaign for messaging Routing

In this example we create a conversation and pass the **Engagement ID** and **Campaign ID** to Conversational Cloud in order to route the consumer conversation to the desired skill as designed by the Campaign Manager.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Create new conversation and send campaign information

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Example Request Body - JSON Payload**

```json
[  
  {
   "kind": "req",
   "id": "1,",
   "type": "userprofile.SetUserProfile",
   "body": {
     "authenticatedData": {
       "lp_sdes": [{
           "type": "ctmrinfo",
           "info": {
             "socialId": "1234567890",
             "ctype": "vip"
           }
         },
         {
           "type": "personal",
           "personal": {
             "firstname": "John",
             "lastname": "Doe",
             "gender": "MALE"
           }
         }
       ]
     }
   }
 },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "campaignInfo":{  
            "campaignId":"2739101812",
            "engagementId":"2739121912"
         },
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```

**Note**:

For more information about campaigns, please [click here](https://www.liveperson.com/services/technical-support/about-campaigns).


### Direct skill routing

In this example we create a conversation and pass the **Skill ID** in the Payload in order to route the consumer conversation to the desired skill in Conversational Cloud.

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Create new conversation with skill routing

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Example Request Body - JSON Payload**

```json
[  
  {
   "kind": "req",
   "id": "1,",
   "type": "userprofile.SetUserProfile",
   "body": {
     "authenticatedData": {
       "lp_sdes": [{
           "type": "ctmrinfo",
           "info": {
             "socialId": "1234567890",
             "ctype": "vip"
           }
         },
         {
           "type": "personal",
           "personal": {
             "firstname": "John",
             "lastname": "Doe",
             "gender": "MALE"
           }
         }
       ]
     }
   }
 },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}",
         "skillId":"2736637412"
      }
   }
]
```
**Properties**

| Property  | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ttrDefName | Defines the urgency of the conversation | "NORMAL" / "URGENT" / "PRIORITIZED" / null | string | false |
| channelType | Which channel type is used | "MESSAGING" | string | false | Always use MESSAGING |
| brandId | {accountid} - LivePerson site ID | "LivePerson" |  string | true |
| skillId | Skill ID you would like to route the conversation | string | false | use -1 as default to target all skills available |


### File Sharing

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Introduction

The Conversational Cloud Connector API includes a file sharing feature. This feature enables consumers to share files with agents, such as images.


A typical flow of setting up the file sharing feature using the Messaging Window API:

1. Enable file sharing capability

2. Create a conversation

3. Request an upload URL

4. Upload the file to storage

5. Publish the file as a message inside the conversation  

6. Request a download URL

7. Download file from storage


Below, we will examine and explain each stage in detail.


#### Step 1 - Enable File Sharing

In order to enable file sharing on your account, you should first enable the feature itself. Run the following commands, inserting the account admin username and admin password instead of the placeholders below:

```sh
LP_USER= ADMIN_USERNAME
LP_PASS= ADMIN_PASSWORD
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.1" | jq -r .bearer`
./set_site_property.sh $LP_BEARER true messaging.file.sharing.enabled
```

#### Step 2 - Create a Conversation

You will need to have an active conversation, along with its converationID, where the files will be shared. Below, creating a conversation is summarized but please follow the [CONVERSATION API](sendapi-create.html) documentation if you need any more information. Make sure you have an active conversation and a conversationId at hand by the end of this step.

####  Step 3 - Request Upload URL

Use the following request to retrieve an upload url, specifying the type and size of the file.


**Note**: The supported file types are `JPG`, `JPEG`, `PNG`, `GIF`. Each file can be up to 3MB and the preview must be under 30KB.

See full documentation for generating temporary upload URL [here](consumer-int-msg-generate-temp-upload-url.html).

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Request Body Example - JSON Payload**

```json
	{
		"kind": "req",
		"id": 3,
		"body": {
		"fileSize": "1000",
		"fileType": "PNG"
		},
		"type": "ms.GenerateURLForUploadFile"
	}
```

**Response Body Example**:

```json
{
  "code": "OK",
  "body": {
      "relativePath": "/v1/AUTH_async-images/64467156/6be59ddb8f54d88845a4fd4987cf5717878eacd2f893b7a7331717f113d2589f_uuid_326931e5-062f-46cb-b981-a383040d2cb8_04-06-2018_04-10-59-845.PNG",
      "queryParams": {
          "temp_url_sig": "dd9e3bdb2bebbc254653f0dd090922b40489ca6e",
          "temp_url_expires": "1528099919"
      }
  },
  "reqId": "3"
}
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use them in the next request, to upload the file.

#### Step 4 - Upload File to Storage

Use the following request and the parameters obtained in step 3 (`relativePath`, `temp_url_sig`, `temp_url_expires`) to upload the file to storage.

**Note**: file expiration is set to 1 minute by default.

**Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* swift

##### Upload request

| Method | URL |
| :--- | :--- |
| PUT | https://{swift}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

Upload the file as binary to swift storage.

##### Upload response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | CREATED |
| 401 | Temp URL invalid |


#### Step 5 Publish Image to Conversation

Once the file is saved in storage, publish the file URL along with an optional caption and thumbnail as a message. See full documentation [here](consumer-int-msg-reqs.html). Event type should be `HostedFile`

**Optional thumbnail**

In order to generate a thumbnail you need to convert your image to base64. The output will populate the parameter `imageData`.


#### Publish the file to the conversation - Example

```json
{
	"kind": "req",
	"id": "3",
	"body": {
		"dialogId": "{conversationId}",
		"event": {
			"type": "ContentEvent",
			"message": {
				"caption": "File logo",
				"relativePath": "{relativePath}",
				"fileType": "JPEG",
				"preview": "data:image/png;base64,{imageData}"
			},
			"contentType": "hosted/file"
		}
	},
	"type": "ms.PublishEvent"
}
```

##### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId | The `conversationId` created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpint](sendapi-create.html#response) |
| type | The messaging event type | ContentEvent | string | true | ContentEvent will be used for sending a text message or a file |
| contentType | Which content is sent | "hosted/file" | string | true | file is hosted on swing server |
| message | Array of properties describing the file | {"caption": "File logo", "relativePath": "{relativePath}", "fileType": "JPEG", "preview": "data:image/png;base64,{imageData}"} | Array of file properties | true | **caption** is an optional string, **relative path** is Mandatory (extracted on step 3), **file type** (JPEG,PNG) is Mandatory and **preview** is the base64 data conversion of the file (optional) |

##### Publish response

**Response Codes**

| Code | Description | Notes |
| :--- | :--- |
| 200 | Ok | File was sent to the Agent |
| 400 | Bad Request | Check your file size and that its is not corrupted |


#### Step 6 Request Download URL

**Request a download url**:

Using the messaging API, request a download url, specifying the relative path of the file. See full documentation [here](consumer-int-msg-generate-temp-download-url.html).


Request Body Example:

```json
{
	"kind": "req",
	"id": "3",
	"body": {
		"relativePath": "{{relativePath}}"
	},
	"type": "ms.GenerateURLForDownloadFile"
}
```

In response, you will get the URL details:

```json
{
    "code": "OK",
    "body": {
        "relativePath": "/v1/AUTH_async-images/64467156/5f3aab9eb95ff60f159cab500e3a83f1aba98a99749c07143fbda2dece70e601_uuid_5c68d4e8-3bde-40ac-86c2-1e5f43089cd4_07-06-2018_09-47-15-947.JPEG",
        "queryParams": {
            "temp_url_sig": "384bcb0b188920909d4a068473824e964ecbffcd",
            "temp_url_expires": "1528379356"
        }
    },
    "reqId": "3"
}
```

Extract `relativePath`, `temp_url_sig`, `temp_url_expires` from the response. We'll use it in the next request, to download the file.


#### Step 7 - Download File From Storage

Use the following request to download the file, using the parameters from the previous step.

| Method | URL |
| :--- | :--- |
| GET | https://{swiftDomain}/{relativePath}?temp_url_sig={temp_url_sig}&temp_url_expires={temp_url_expires} |

**Note**: file expiration is set to 1 minute by default.
