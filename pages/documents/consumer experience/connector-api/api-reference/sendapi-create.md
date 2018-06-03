---
title: CONVERSATION
level1:
level2: Consumer Experience
level3: Connector API
level4: API Reference
order: 11
indicator: both
permalink: sendapi-create.html
search: exclude
---

The CONVERSATION method is a batch-endpoint (this means that one payload can contain several payloads). It takes a set of at least two JSON payloads. The order of the array is important, as the example shows since LiveEngage expects to receive these payloads in that order. Returns an array of corresponding JSON payloads in the response.

### Request URI

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |

**Query Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| v | The API version | numeric |  

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Request Body**

| Description | Content-Type |
| :--- | :--- |
| The JSON Payload | application/json |

**Notes**:

For the JSON payload, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html) to get an example of the accepted payloads.

This method expects a set of JSON payloads, each representing a different type of request to LiveEngage messaging service. The order of the payloads is important in order to create a new conversation. First, the payload with the `type` _userprofile.SetUserProfile_ appears, second the payload with the `type` _cm.ConsumerRequestConversation_ appears.

The payload with the `type` _userprofile.SetUserProfile_ is mandatory. Its body can essentially be passed empty or with some (engagement) attributes in order for the Agent to see the Consumer Info on LiveEngage side.

An **authenticated** conversation creation will consist the 'authenticatedData' object in the body of the payload with the `type` _userprofile.SetUserProfile_. If the 'authenticatedData' part is not passed there will be no consumer information on the Agent side. This part in the JSON is used to pass 'lp_sdes' which is used to pass [engagement attributes (SDEs)](https://developers.liveperson.com/engagment-attributes-types.html){:target="_blank"}.

The [SDEs](https://developers.liveperson.com/engagment-attributes-types.html){:target="_blank"} are used to populate the consumer information for the Agent in LiveEngage. Hence, as a best practice we recommend to always pass SDEs when creating a new conversation.

The SDEs supported for sending are the [Customer Info](https://developers.liveperson.com/engagment-attributes-types.html#customer-info){:target="_blank"} and [Personal Info](https://developers.liveperson.com/engagment-attributes-types.html#personal-info){:target="_blank"} SDEs.


**Example Request Body - JSON Payload**

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
      "ttrDefName": "CUSTOM",
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
      "skillId": "2736637412"
    }
  }
]
```

#### userprofile.SetUserProfile Properties

| Proerty | Description | Value/Example | Type | Mandatory | Notes |
| :-- | :--- | :--- | :--- | :--- | :--- |
| lp_sdes | Array of Personal Info and/or Customer Info SDEs | [ {<br>"ctmrinfo": {...}<br>}<br>, {<br>"personal": {...}<br>} ] | Array of SDEs  | false |
| type | type of SDEs passed to LiveEngage | "ctmrinfo" / "personal" | string | true |
| info | A list of Customer Info SDEs | {"socialId": "1234567890", "ctype": "vip"} | strings | false | [Click here to see the full list of Customer Info SDEs](https://developers.liveperson.com/engagment-attributes-types.html#customer-info){:target="_blank"} |
| socialId | Social ID of your choice e.g.: FACEBOOK, TWITTER | "John_Facebok1234" | string | false |
| ctype | Customer type/tier (case insensitive) | "Gold" | string | false |
| personal | A list of Personal Info SDEs | {"firstname": "John", "lastname": "Doe", "gender": "MALE"} | strings | false | [Click here to see the full list of Personal Info SDEs](https://developers.liveperson.com/engagment-attributes-types.html#personal-info){:target="_blank"} |
| firstname | Visitor's first name | "John" | string | false |
| lastname | Visitor's surename | "Doe" | string | false |
| gender |  Visitor's gender | MALE, FEMALE, OTHER | string | false |

#### cm.ConsumerRequestConversation Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ttrDefName | Defines the urgency of the conversation | "NORMAL" / "URGENT" / "PRIORITIZED" / "CUSTOM" / null | string | false |
| conversationContext | Describes the conversation environment, like where from it was created and by whom | {"visitorId": "A3ZTY3Zjk1MDExZTczYTU4", "sessionId": "ys2wSqaSRSOJGki7VhEDKQ"...}| strings | false | 'conversationContext' is of type 'SharkContext' and all the properties passed in this example are part of this conversationContext. See the details in the next table below |
| campaignInfo | Contains the campaignId and engagementId | {"campaignId": "99999", "engagementId": "888888"} | strings | false | used in conjunction with [campaign for messaging](https://www.liveperson.com/services/technical-support/about-campaigns){:target="_blank"} |
| campaignId | The campaign ID you wish to target the conversation | "99999" | false |  
| channelType | Which channel type is used | "MESSAGING" | string | false | Always use MESSAGING |
| brandId | {accountid} - LivePerson site ID | "LivePerson" |  string | true |
| skillId | Skill ID you would like to route the conversation | string | false | use -1 as default to target all skills available |

**conversationContext Properties**

| Property | Description | Value/Example | Type | Mandatory | **ConversationsContext type** | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| visitorId | Visitor ID set by the Monitoring API | "A3ZTY3Zjk1MDExZTczYTU4" | string | false | SharkContext |
| sessionId | Session ID set by the Monitoring API | "ys2wSqaSRSOJGki7VhEDKQ" | string | false | SharkContext |
| interactionContextId" | Interaction Context ID set by the Monitoring API | "2" | string | false | SharkContext |
| type | Type of conversationContext | "SharkContext" | string | false | SharkContext/SMSContext |
| lang | The conversation language, according the IETF (ISO-639-1 and ISO-3166) | "en-US" | false | SharkContext/SMSContext | The client using this should check first if the language exists on the engagement |

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
| conversationId | The conversationId needed for send messages.  | String |
