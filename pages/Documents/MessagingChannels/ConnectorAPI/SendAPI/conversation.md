---
pagename: CONVERSATION
redirect_from:
  - sendapi-create.html
  - connector-api-api-reference-conversation.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Send API
order: 11
indicator: messaging
permalink: connector-api-send-api-conversation.html
search: exclude
---

The CONVERSATION method is a batch-endpoint (this means that one payload can contain several payloads). It takes a set of at least two JSON payloads. The order of the array is important, as the example shows, since Conversational Cloud expects to receive these payloads in that order. Returns an array of corresponding JSON payloads in the response. The most important value obtained by this endpoint is the `conversationId` which will be used for the following [SEND](sendapi-send.html) calls to Conversational Cloud.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

### Request URI

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |

**Query Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| v | The API version | numeric/3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) |

**Request Body**

| Description | Content-Type |
| :--- | :--- |
| The JSON Payload | application/json |

**Notes:**

For the JSON payload, please have a look at the [Messaging Window API](consumer-int-overview.html) with its integrated [Request Builder](consumer-int-msg-reqs.html) to get an example of the accepted payloads.

This method expects a set of JSON payloads, each representing a different type of request to the Conversational Cloud messaging service. The order of the payloads is important in order to create a new conversation. First, the payload with the `type` _userprofile.SetUserProfile_ appears, second the payload with the `type` _cm.ConsumerRequestConversation_ appears.

The payload with the `type` _userprofile.SetUserProfile_ is mandatory. Its body can essentially be passed empty or with some engagement attributes in order for the Agent to see the Consumer Info in the Conversational Cloud Agent Workspace.

For the sake of simplicity, the next request body example illustrates the minimal JSON Payload which is mandatory for conversation creation in Conversational Cloud:

```json
[
  {
  "kind": "req",
  "id": "1,",
  "type": "userprofile.SetUserProfile",
  "body": {}
  },
  {
    "kind": "req",
    "id": "2,",
    "type": "cm.ConsumerRequestConversation",
    "body": {
      "brandId": "{accountid}"
    }
  }
]
```

Nevertheless, we strongly recommend not to create conversations as such, as there is no user information passed in the body of the payload with `type` _userprofile.SetUserProfile_ nor there is any information passed in the body of the payload with `type` _cm.ConsumerRequestConversation_ that will enable targeting the conversation to the right skill or engagement in Conversational Cloud.

Passing user information is done under the `authenticatedData` object in the body of the payload with the `type` _userprofile.SetUserProfile_. If the `authenticatedData` object is not passed (left blank or deleted altogether), there will be no consumer information for the Agent to see in Conversational Cloud's Agent Workspace. Under the `authenticatedData` object, you can pass an `lp_sdes` array. This array is used to send [engagement attributes (SDEs)](engagement-attributes-types.html) to Conversational Cloud.

The [SDEs](engagement-attributes-types.html) are used to populate the consumer information for the Agent to see in Conversational Cloud's Agent Workspace. Hence, as a best practice we recommend to always pass SDEs when creating a new conversation.

The SDEs supported for sending are the [Customer Info](engagement-attributes-types.html#customer-info) and [Personal Info](engagement-attributes-types.html#personal-info) SDEs.

The next request body example illustrates how to create a conversation and send SDEs in one request:

```json
[{
  "kind": "req",
  "id": "1,",
  "type": "userprofile.SetUserProfile",
   "body": {
     "authenticatedData": {
       "lp_sdes": [
         {
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
		"kind": "req",
		"id": "2,",
		"type": "cm.ConsumerRequestConversation",
		"body": {
			"brandId": "{accountid}"
		}
	}
]
```

The above request is much better as it also includes the user SDEs which will populate the consumer information in Conversational Cloud's Agent Workspace. These SDEs can also be used for to target/route the conversation to a specific skill as it was configured via internal LivePerson configuration (Houston) - i.e. routing rules. See further information and examples in [here](connector-api-send-api-examples.html#create-a-new-conversation-and-report-sdes){:target="blank"}.

**Note:** Not best practice, please avoid this method if possible.

The best practice to target conversations to skills when using messaging is to set up campaigns.
You can send the **Campaign ID** and **Enagagement ID** to Conversational Cloud in order to route the consumer conversation to the desired skill as designed by the Campaign Builder. This will also allow the Agent to see the name of your connector as the **source** of the conversation in the Consumer info widget:

<img src="img/ConnectorAPI3.png" alt="connectoroverview">

In order to retrieve the campaign properties, you need to use the [Monitoring API](rt-interactions-monitoring-overview.html). This API method, [Engagement](rt-interactions-monitoring-methods-engagement.html), allows you to send Conversational Cloud the user information (`consumerId` OR the `visitorId` and `sessionId`) along with the `installation Id` and in return to get the engagement properties: `campaignId`, `engagementId`, `visitorId`, `sessionId` and more. See the following  [response example](rt-interactions-monitoring-methods-engagement.html#response-entity-examples).

The connector can then use the above properties in the CONVERSATION request body payload with the `type` _cm.ConsumerRequestConversation_. See the following example to see how to do so:

**Example Request Body — JSON Payload**

```json
[{
  "kind": "req",
  "id": "1,",
  "type": "userprofile.SetUserProfile",
   "body": {
     "authenticatedData": {
       "lp_sdes": [
         {
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
    "kind": "req",
    "id": "2,",
    "type": "cm.ConsumerRequestConversation",
    "body": {
      "ttrDefName": "NORMAL",
      "campaignInfo": {
        "campaignId": "99999",
        "engagementId": "888888"
      }, "conversationContext": {
    "visitorId": "A3ZTY3Zjk1MDExZTczYTU4",
    "sessionId": "ys2wSqaSRSOJGki7VhEDKQ",
    "interactionContextId": "2",
    "type": "SharkContext",
    "lang": "en-US"
     },
      "channelType": "MESSAGING",
      "brandId": "{accountid}",
      "skillId": "-1"
    }
  }
]
```

#### userprofile.SetUserProfile Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :-- | :--- | :--- | :--- | :--- | :--- |
| lp_sdes | Array of Personal Info and/or Customer Info SDEs | [ {<br>"ctmrinfo": {…}<br>}<br>, {<br>"personal": {…}<br>} ] | Array of SDEs  | false |
| type | type of SDEs passed to Conversational Cloud | "ctmrinfo" / "personal" | string | true |
| info | A list of Customer Info SDEs | {"socialId": "1234567890", "ctype": "vip"} | strings | false | [Click here to see the full list of Customer Info SDEs](engagement-attributes-types.html#customer-info) |
| socialId | Social Media ID of your choice e.g., FACEBOOK, TWITTER | "John_Facebok1234" | string | false |
| ctype | Customer type/tier (case insensitive) | "Gold" | string | false |
| personal | A list of Personal Info SDEs | {"firstname": "John", "lastname": "Doe", "gender": "MALE"} | strings | false | [Click here to see the full list of Personal Info SDEs](engagement-attributes-types.html#personal-info) |
| firstname | Visitor's first name | "John" | string | false |
| lastname | Visitor's surename | "Doe" | string | false |
| gender |  Visitor's gender | MALE, FEMALE, OTHER | string | false |

#### cm.ConsumerRequestConversation Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ttrDefName | Defines the urgency of the conversation | "NORMAL" / "URGENT" / "PRIORITIZED" / null | string | false |
| conversationContext | Describes the conversation environment, like from where it was created and by whom | {"visitorId": "A3ZTY3Zjk1MDExZTczYTU4", "sessionId": "ys2wSqaSRSOJGki7VhEDKQ"…}| strings | false | conversationContext is of type SharkContext and all the attributes passed in this example are part of this conversationContext. See more details in the next table below |
| campaignInfo | Contains the campaignId and engagementId | {"campaignId": "99999", "engagementId": "888888"} | strings | false | Used in conjunction with [campaigns for messaging](https://www.liveperson.com/services/technical-support/about-campaigns) for conversation routing to the right skill |
| campaignId | The campaignId retrieved by the [Engagement](rt-interactions-monitoring-methods-engagement.html) Monitoring API endpoint  | "99999" | false |
| engagementId | The engagementId retrieved by the [Engagement](rt-interactions-monitoring-methods-engagement.html) Monitoring API endpoint | "88888" | false |
| channelType | Which channel type is used | "MESSAGING" | string | true | Always use "MESSAGING" |
| brandId | {accountid} - LivePerson site ID | "LivePerson" |  string | true |
| skillId | Skill ID you would like to route the conversation to | string | false | Use -1 as default to target all skills available | Avoid routing conversations by passing skills. Instead, implement campaigns and pass the campaignId and engagementId |

#### conversationContext Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| visitorId | visitorId retrieved by the [Engagement](rt-interactions-monitoring-methods-engagement.html) Monitoring API endpoint | "A3ZTY3Zjk1MDExZTczYTU4" | string | false | The LivePerson identifier to the current consumer device — important for monitoring and reporting |
| sessionId | sessionId retrieved by the [Engagement](rt-interactions-monitoring-methods-engagement.html) Monitoring API endpoint | "ys2wSqaSRSOJGki7VhEDKQ" | string | false | The LivePerson identifier to the current monitor session of this consumer device — important for monitoring and reporting |
| interactionContextId | contextId retrieved by the [Engagement](rt-interactions-monitoring-methods-engagement.html) Monitoring API endpoint | "2" | string | false | See [Monitoring API Response Entity Example](rt-interactions-monitoring-methods-engagement.html#response-entity-examples)
| type | Type of conversationContext | "SharkContext" | string | false | Always use "SharkContext" when using Monitoring API properties i.e. when using Campaign For Messaging |
| lang | The conversation language, according to the IETF (ISO-639-1 and ISO-3166) | "en-US" | string | false | Check first if the language used here is configured for the engagement in the LE UI |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Returns a new conversation ID. |
| 400 | The input was invalid, please check. |
| 401 | Unauthorized. Are the headers correct? |
| 429 | Too many requests, please try again later. |

**Response Example**

HTTP Status Code 200
Response Format JSON

{% raw %}
```json
[
    {
        "code": "OK",
        "body": {
            "msg": "OK User Profile set successfully"
        },
        "reqId": "1,"
    },
    {
        "code": "OK",
        "body": {
            "conversationId": "8602832d-dce1-446b-8445-0d51f5926a42"
        },
        "reqId": "2,"
    }
]
```
{% endraw %}

**Elements in the Response**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| conversationId | The conversation ID needed to send messages.  | String |
