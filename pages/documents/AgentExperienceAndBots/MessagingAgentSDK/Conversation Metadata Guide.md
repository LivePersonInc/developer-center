---
pagename: Conversation Metadata Guide
redirect_from:
  - guides-conversation-metadata-guide.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Messaging Agent SDK
level-order: 10
order: 10
permalink: messaging-agent-sdk-conversation-metadata-guide.html
root-link: true
indicator: messaging
---

### Overview

LiveEngage provides a way for developers and partners that are building a bot using the Messaging Agent SDK to pass or listen for metadata or context information on a conversation. For example, sending metadata with structured content or listening for a metadata response after sending a request (payment, authorization, etc).

_**Note:** currently, sending or listening for metadata is useful over Messaging only. Sending metadata over Chat is supported but we are currently developing the consumption of the metadata on Chat conversations. If you would still like to send metadata over Chat conversations and consume it in the future once that is supported, please see [the following example below](#sending-metadata-over-chat)._

The metadata information can be used to achieve the following:

* Empower messaging agents with relevant information during messaging conversations with consumers.
* Analyze the messaging conversation, the bot and the content that was presented to the consumer.

To get started, refer to the [Messaging Agent SDK](messaging-agent-sdk-overview.html) documentation.

### Available metadata

Below are the types of available metadata:

* Bot response
* Action reason
* Escalation summary
* Structured Content identifier
* Payment response
* Authorization response

#### Bot response

Bot response metadata is context information / the bot analysis of the last consumer message. This information can be used to help Agent Managers monitor a conversation with a bot as well as analyze the bot performance.

**Type**: BotResponse

| Field Name             | Description                                                                                                           | Type                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| externalConversationId | External platform conversation identifier                                                                             | String(maxLength=64)                |
| businessCases          | The topics / business cases of the conversation. In Watson Virtual Agent, this data is stored in the capability field | Array &lt;String(maxLength=256)&gt; |
| intents                | List of intents identified for a consumer message                                                                     | Array<Intent>                       |

**Intent**

<table>
  <thead>
   <tr>
   <th>Name</th>
   <th>Description</th>
   <th>Type/Value</th>
   <th>Required</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>id</td>
     <td>Intent id.</td>
     <td>String (maxLength = 256)</td>
     <td>Yes</td>
   </tr>
   <tr>
     <td>name</td>
     <td>Intent name.</td>
     <td>String (maxLength = 256)</td>
     <td>No</td>
   </tr>
   <tr>
     <td>confidenceScore</td>
     <td>Intent confidence level value as calculated by the integrated platform.</td>
     <td>Number (between 0 and 1)</td>
     <td>Yes</td>
   </tr>
   <tr>
     <td>confidence</td>
     <td>Normalized intent confidence level (low, medium, high).</td>
     <td>String (maxLength = 64)</td>
     <td>No</td>
   </tr>
  </tbody>
</table>


#### Action reason

Action reason metadata describes the reason behind an action that was taken by a bot or a human agent, such as escalation or transfer. This information can be used to both provide information to an agent receiving a conversation that was escalated by a bot as well as analyze the transfer and escalation rate per escalation reason.

**Type**: ActionReason

<table>
  <thead>
   <tr>
     <th>Name</th>
     <th>Description</th>
     <th>Type/Value</th>
     <th>Required</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>reasonId</td>
     <td>The reason id.</td>
     <td>String (maxLength = 64)</td>
     <td>No</td>
   </tr>
   <tr>
     <td>reason</td>
     <td>The reason description.</td>
     <td>String (maxLength = 64) Suggested values<br>'escalated_by_user'<br>'escalated_by_bot'<br>'escalated_by_configuration'<br>'escalated_by_error'</td>
     <td>Yes</td>
   </tr>
  </tbody>
</table>


#### Escalation summary

Escalation summary metadata is a summary of conversation information up to an escalation event, it includes conversation duration, escalation reason and identified businessCases. This information is used in messaging for the Bot escalation widget in the agent workspace.

**Type**: EscalationSummary

<table>
  <thead>
   <tr>
     <th>Name</th>
     <th>Description</th>
     <th>Type/Value</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>escalationCause</td>
     <td>Escalation reason</td>
     <td>String (maxLength = 64) Suggested values:<br>'escalated_by_user'<br>'escalated_by_bot'<br>'escalated_by_configuration'<br>'escalated_by_error'</td>
   </tr>
   <tr>
     <td>businessCases</td>
     <td>The list of topics / business cases identified during the conversation and respective time</td>
     <td>Array &lt;BusinessCase&gt;</td>
   </tr>
   <tr>
     <td>conversationDuration</td>
     <td>The conversation duration</td>
     <td>integer</td>
   </tr>
   <tr>
     <td>escalatedDuringBusinessCase</td>
     <td>The topic / business case that led to the escalation </td>
     <td>String (maxLength = 256)</td>
   </tr>
  </tbody>
</table>


**businessCase**

<table>
  <thead>
   <tr>
     <th>Name</th>
     <th>Description</th>
     <th>Type/Value</th>
     <th>Required</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>id</td>
     <td>BusinessCase name</td>
     <td>String (maxLength = 256)</td>
     <td>No</td>
   </tr>
   <tr>
     <td>time</td>
     <td>The duration in the conversation this businessCase was handled</td>
     <td>integer</td>
     <td>No</td>
   </tr>
  </tbody>
</table>


#### Structured content identifier (ExternalId)

Structured content identifier metadata is used to both identify a specific "Card" (Structured Content) as well as a specific action on a “Card”. This can be used to measure the number of times a specific Card was sent, delivered, viewed and the number of times a specific action was clicked / selected.

**Type**: ExternalId

<table>
  <thead>
   <tr>
     <th>Name</th>
     <th>Description</th>
     <th>Type/Value</th>
     <th>Required</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>id</td>
     <td>The "Card" / “Card” action identifier</td>
     <td>String (maxLength = 64)</td>
     <td>Yes</td>
   </tr>
  </tbody>
</table>

#### Payment Response

**Type**: ConnectorPaymentResponse

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>Status</td>
    <td>Status of the payment response</td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>requestIdentifier</td>
    <td>UUID of the payment response. This information should be used to allow the bot to validate the payment against your payment backend.</td>
    <td>String</td>
  </tr>
  </tbody>
</table>

#### Authorization Response

**Type**: ConnectorAuthenticationResponse

<table>
  <thead>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>Status</td>
    <td>Status of the consumer authentication - can be only true (successful) or false (failed) </td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>token</td>
    <td>Token string - will be available only when authentication was successful </td>
    <td>String</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Type of authentication error as received from channel - will be available only when authentication failed </td>
    <td>Array</td>
  </tr>
  </tbody>
</table>

### Use Cases and Examples

#### Bot escalation to human agent

A bot as an agent manages conversations with consumers, analyzes their intent based on their input, assists them or transfers them to a human agent.

The bot consumer input analysis information can be passed as metadata on the bot response (publishEvent/[Add line](agent-add-lines.html) method). This be used as a useful to analyze the bot performance and help Agent Managers to monitor the conversation flow.

The reason for escalation as well as the last identified intent can be sent as metadata on the transfer action (updateConversationField method), currently supported only in messaging; this information can be useful to analyze the bot performance, help Agent Managers to monitor the conversation flow and provide context to human agents once a conversation was handed off.

**publishEvent example:**

```javascript
const metadata = [
   {
       type: 'ActionReason',
       reason: 'escalated_by_bot', // The reason for escalation, can be other reason
       reasonId: '3'
   },
   {
       type: 'BotResponse', // Bot context information about the last consumer message
       externalConversationId: 'conversation_id',
       businessCases: [
           'Help-Greetings' // identified capability
       ],
       intents: [ // Last consumer message identified intents
           {
               id: 'Help-Greetings',
               confidenceScore: 1,
               confidence: 'high'
           },
           {
               id: 'Payment-Bank_Information',
               confidenceScore: 0.0,
               confidence: 'low'
           }
       ]
   }
];

// Send message
agent.publishEvent({
   dialogId: "THE CONVERSATION ID",
   event: {
       type: 'ContentEvent',
       contentType: 'text/plain',
       message: 'I am looking forward to helping you today.'
   }
}, null, metadata, (err, res) => {
   // Handle callback
});
```

**Bot escalation example:**

```javascript
const metadata = [
   {
       type: 'ActionReason',
       reason: 'escalated_by_bot', // The reason for escalation, can be other reason
       reasonId: '3'
   },
   {
       type: 'EscalationSummary',   // This is used for the escalation widget in the agent workspace
       escalationCause: 'escalated_by_bot', // The reason for escalation, can be other reason
       businessCases: [                      //all identified capabilities during the conversation
           {
               id: 'Help-Greetings',
               time: 9
           },  
           {
               id: 'Payment-Bank_Information',
               time: 13
           }        
       ],
       conversationDuration: 22,   //conversation duration up to the escalation
       escalatedDuringBusinessCase: 'Payment-Bank_Information' //the capability that led to escalation
   },
   {
       type: 'BotResponse',   //bot context information about the last consumer message
       externalConversationId: 'conversation_id',
       businessCases: [
           'Payment-Bank_Information'   //identified capability
       ],
       intents: [   //last consumer message identified intents
           {
               id: 'Payment-Bank_Information',
               confidence: '0.8'
           },
           {
               id: 'Help-Connect_to_Agent',
               confidence: '1'
           }
       ]
   }
];

//Escalate conversation
agent.updateConversationField({
   conversationId: "THE CONVERSATION ID",
   conversationField: [
       {
           field: "ParticipantsChange",
           type: "REMOVE",
           role: "ASSIGNED_AGENT"
       },
       {
           field: "Skill",
           type: "UPDATE",
           skill: "TARGET SKILL ID"
       }
   ]
}, null, metadata, (err, res) => {
});
```

#### Listen for Payment or Authorization response

Upon sending a payment or authorization request to a consumer, it is necessary to listen for a response to confirm the transactions.

**Listen for incoming Apple Authorization response example:**

1. Have your bot listen for the "ms.MessagingEventNotification" messaging event notifications callback
2. Loop through all the incoming changes and look for the correct metadata type
3. If you find a match for the "ConnectorAuthenticationResponse" type then that is a response from the customer's login attempt to the oAuth URL
4. Use token to call Idp endpoint to get user information for the bot

```javascript
var rp = require('request-promise'); // used to make external API calls as a Promise

// partial code example for monitoring the metadata message event notifications inside an existing bot implementation
this.on('ms.MessagingEventNotification', body => {
 body.changes.forEach(change => {
  if (change.metadata) {
   const authResponse = change.metadata.find(metadata => {
    return metadata.type === 'ConnectorAuthenticationResponse'; // or 'ConnectorPaymentResponse' for Apple Pay
   });
   if (authResponse) {
    console.info('authResponse.token :', authResponse.token);
    const authorisationCode = authResponse.token; // make a call to brand IdP endpoint sending authCode to get user info        
    const localBot = this;
    var auth0domain = "your.auth0.com"; // get userInfo        
    var options = {
     uri: `https://${auth0domain}/userinfo`,
     qs: {},
     headers: {
      'Authorization': `Bearer ${authResponse.token}`
     },
     json: true // Automatically parses the JSON string in the response        
    };
    rp(options)
     .then(function(userInfo) {
      // do something with userInfo response object as needed          
     })
   }
  }
 });
})
```

#### Structured content

LiveEngage allows brands to send messages in a variety of ways and formats: (human or bot) agents can send simple text and images, or use structured content templates to build layouts with text, images, maps and buttons, to enhance the conversation with the consumer.  Refer to [Structured content templates](structured-content-templates.html) for more information on how to build and send such structured content messages.

A template `ExternalId` can be sent as metadata on the agent message (publishEvent method) in order to track the number of times a specific template was sent, delivered, or viewed.

An `ExternalId` for each element click action can also be defined in order to track the number of times a specific action was clicked / selected.

**Messaging Structured content example:**

![Structured Content Card](img/sccard.png)

```javascript
const content = {
	"type": "vertical",
	"elements": [{
		"type": "image",
		"url": "http://cdn.bgr.com/2016/08/iphone-8-concept.jpg?quality=98&strip=all",
		"tooltip": "image tooltip"
	}, {
		"type": "text",
		"text": "product name (Title)",
		"tooltip": "text tooltip",
		"style": {
			"bold": true,
			"size": "large"
		}
	}, {
		"type": "text",
		"text": "product name (Title)",
		"tooltip": "text tooltip"
	}, {
		"type": "button",
		"tooltip": "Add to cart",
		"title": "Add to cart",
		"click": {
			"metadata": [{
				"type": "ExternalId", // METADATA ExternalID
				"id": "ADD TO CART ACTION IDENTIFIER"
			}],
			"actions": [{
				"type": "link",
				"name": "Add to cart",
				"uri": "http://www.example.com"
			}]
		}
	}, {
		"type": "horizontal",
		"elements": [{
			"type": "button",
			"title": "Buy",
			"tooltip": "Buy this product",
			"click": {
				"metadata": [{
					"type": "ExternalId", // METADATA ExternalID
					"id": "BUY PRODUCT ACTION IDENTIFIER"
				}],
				"actions": [{
					"type": "link",
					"name": "Buy",
					"uri": "http://www.example.com"
				}]
			}
		}, {
			"type": "button",
			"title": "Find similar",
			"tooltip": "Find similar",
			"click": {
				"metadata": [{
					"type": "ExternalId", // METADATA ExternalID
					"id": "FIND SIMILAR ACTION IDENTIFIER"
				}],
				"actions": [{
					"type": "link",
					"name": "Buy",
					"uri": "http://www.example.com"
				}]
			}
		}]
	}, {
		"type": "map",
		"lo": 64.128597,
		"la": -21.89611,
		"tooltip": "map tooltip"
	}, {
		"type": "button",
		"tooltip": "button tooltip",
		"title": "Navigate",
		"click": {
			"metadata": [{
				"type": "ExternalId", // METADATA ExternalID
				"id": "NAVIGATE ACTION IDENTIFIER"
			}],
			"actions": [{
				"type": "navigate",
				"name": "Navigate to store via image",
				"lo": 23423423,
				"la": 2423423423
			}]
		}
	}]
};
//Send message
agent.publishEvent({
	dialogId: "THE CONVERSATION ID",
	event: {
		type: 'RichContentEvent',
		Content: content // Structured Content Card defined above
	}
}, null, [{
	type: 'ExternalId',
	id: 'CARD IDENTIFIER' // METADATA ExternalID
}]); 
```

#### Sending metadata over Chat

```json
{
"event": {
 "@type": "line",
 "text": "I am looking forward to helping you today.",
 "textType": "plain",
 "metadata": [
     {
         "type": "ActionReason",
         "reason": "escalated_by_bot", // The reason for escalation, can be other reason
         "reasonId": "3"
     },
     {
         "type": "BotResponse", // Bot context information about the last consumer message
         "externalConversationId": "conversation_id",
         "businessCases": [
             "Help-Greetings" // identified capability
         ],
         "intents": [ // Last consumer message identified intents
             {
                 "id": "Help-Greetings",
                 "confidenceScore": 1,
                 "confidence": "high"
             },
             {
                 "id": "Payment-Bank_Information",
                 "confidenceScore": 0.0,
                 "confidence": "low"
             }
         ]
     }
 ]
}
}
```
