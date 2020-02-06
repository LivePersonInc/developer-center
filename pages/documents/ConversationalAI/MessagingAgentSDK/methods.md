---
pagename: Methods
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Messaging Agent SDK
permalink: messaging-agent-sdk-methods.html
indicator: messaging
---

All requests has the same method signature:

```javascript
agent.someRequest(body, headers, metadata, encodedMetadata, callback);
```

Where all except body are optional and callback can be placed instead off `headers`, `metadata` and `encodedMetadata`.

### subscribeExConversations

This method is used to create a subscription for conversation updates. You can subscribe to all events, or to only those events pertaining to a specific agent or agents.

```javascript
agent.subscribeExConversations({
    'convState': ['OPEN']
    ,'agentIds': [agent.agentId] // remove this line to subscribe to all conversations instead of just the bot's conversations
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`{"subScriptionId":"aaaabbbb-cccc-1234-56d7-a1b2c3d4e5f6"}`

### subscribeAgentsState

This method is used to create a subscription for Agent State updates. An event will be received whenever the bot user's state is updated.

```javascript
agent.subscribeAgentsState({}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`{"subScriptionId":"aaaabbbb-cccc-1234-56d7-a1b2c3d4e5f6"}`

### subscribeRoutingTasks

This method is used to create a subscription for Routing Tasks. An event will be received whenever new conversation(s) are routed to the agent. In response your bot can 'accept' the new conversation, as described below in the updateRingState method.

```javascript
agent.subscribeRoutingTasks({}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`{"subScriptionId":"aaaabbbb-cccc-1234-56d7-a1b2c3d4e5f6"}`

### subscribeMessagingEvents

This method is used to create a subscription for all of the Messaging Events in a particular conversation. This includes messages sent by any participant in the conversation, as well as "agent is typing" or "visitor is typing" notifications and notifications when a message has been read by a participant.

```javascript
agent.subscribeMessagingEvents({dialogId: 'some conversation id'}, (e) => {if (e) console.error(e)});
```

This method returns no data when the subscription is successful.

### setAgentState

This method is used to set your agent's state to one of: `'ONLINE'` (can receive routing tasks for incoming conversations), `'OCCUPIED'` (can receive routing tasks for incoming transfers only), or `'AWAY'` (cannot receive routing tasks)

```javascript
agent.setAgentState({
    'availability': 'ONLINE'
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`"Agent state updated successfully"`

### getClock

This method is used to synchronize your client clock with the messaging server's clock. It can also be used as a periodic keep-alive request, to ensure that your bot's connection is maintained even in periods of low activity.

```javascript
agent.getClock({}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`{"currentTime":1513813587308}`

### getUserProfile

This method is used to get a consumer's profile data

```javascript
agent.getUserProfile(consumerId, (e, profile) => {
    if (e) { console.error(e) }
    console.log(profile)
});
```

The consumerId parameter can be retrieved from the array of participants that accompanies a cqm.ExConversationChangeNotification event as follows:

```javascript
agent.on('cqm.ExConversationChangeNotification', body => {
    body.changes.forEach(change => {
        agent.getUserProfile(change.result.conversationDetails.participants.find(p => p.role === 'CONSUMER').id, callback)
    })
})
```

Success response:

`[{"type":"personal","personal":{"firstname":"Michael","lastname":"Bolton"}}]`

### updateRingState

This method is used to update the ring state of an incoming conversation--In other words, to accept the conversation

```javascript
agent.updateRingState({
    "ringId": "someRingId",  // Ring ID received from the routing.routingTaskNotification event
    "ringState": "ACCEPTED"
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`"Ring state updated successfully"`

### updateConversationField

This method is used to update some field of a conversation object, such as when joining a conversation as a 'MANAGER' or during a transfer when the `SKILL` is changed and the `ASSIGNED_AGENT` is removed

```javascript
agent.updateConversationField({
    'conversationId': 'conversationId/dialogId',
    'conversationField': [{
        'field': '',
        'type': '',
        '' : ''
    }]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

#### Example: Join conversation as manager

```javascript
agent.updateConversationField({
    'conversationId': 'conversationId/dialogId',
    'conversationField': [{
         'field': 'ParticipantsChange',
         'type': 'ADD',
         'role': 'MANAGER'
     }]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`"OK Agent added successfully"`

#### Example: Close a conversation

This will immediately close the conversation and any associated dialogs.
>Note: If the account is configured for post-conversation survey (PCS), the survey dialog will not be triggered. To allow PCS without closing the conversation, the conversation's main dialog should be closed instead (see the "Close Dialog" example).

```javascript
agent.updateConversationField({
    conversationId: conversationId/dialogId,
    conversationField: [{
        field: 'ConversationStateField',
        conversationState: 'CLOSE'
    }]
});
```

#### Example: Close dialog

Closes the specified dialog. Depending on the account's dialog flow configuration, the next dialog will be triggered (e.g. post-conversation survey dialog).
>Note: The main dialog carries the same ID as the conversation. Other dialogs will have unique dialog IDs. When the last dialog of the defined flow is closed, the conversation will automatically be closed as well.

```javascript
agent.updateConversationField({
    conversationId: conversationId/dialogId,
    conversationField: [{
        field: 'DialogChange',
        type: 'UPDATE',
        dialog: {
            dialogId: conversationId/dialogId,
            state: 'CLOSE'
        }
    }]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

#### Example: Transfer conversation to a new skill

This request will attempt to transfer the conversation to a new skill.
>Note: In order to transfer the conversation, the caller must be a participant of the conversation.
```javascript
agent.updateConversationField({
'conversationId': 'conversationId/dialogId',
    'conversationField': [
        {
            'field': 'Skill',
            'type': 'UPDATE',
            'skill': targetSkillId
        }
    ]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

If the conversation has an assigned agent which needs to be removed, this can be done as a part of the same request.

Note: Attempting to remove the assigned agent when there is none will cause the request to fail.

```javascript
agent.updateConversationField({
'conversationId': 'conversationId/dialogId',
    'conversationField': [
        {
            'field': 'ParticipantsChange',
            'type': 'REMOVE',
            'role': 'ASSIGNED_AGENT'
        },
        {
            'field': 'Skill',
            'type': 'UPDATE',
            'skill': targetSkillId
        }
    ]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

#### Example: Transfer conversation to a new agent

```javascript
agent.updateConversationField({
'conversationId': 'conversationId/dialogId',
    'conversationField': [
        {
            'field': 'ParticipantsChange',
            'type': 'REMOVE',
            'role': 'ASSIGNED_AGENT'
        },{
            'field': 'ParticipantsChange',
            'type': 'SUGGEST',
            'userId': '<suggested agent id>'
            'role': 'ASSIGNED_AGENT'
        },{
            'field': 'Skill',
            'type': 'UPDATE',
            'skill': targetSkillId
        }
    ]
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

Success response:

`"OK Agent removed successfully"`

### generateURLForDownloadFile

In order the generate url for download the file was published by one of the participants, use the following:
```javascript
agent.generateURLForDownloadFile({
    relativePath:'<path>'
}, (e, res) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

### generateURLForUploadFile

In order the generate url for upload a file for sharing with other participants, use the following:
```javascript
agent.generateURLForUploadFile({
    fileSize: 5020,
    fileType: 'JPEG'
}, (e, resp) => {
    if (e) { console.error(e) }
    console.log(resp)
});
```

### publishEvent

This method is used to publish an event to a conversation. 
For different types of events see the following examples: 

#### Example: Sending Text

```javascript
agent.publishEvent({
	dialogId: 'MY_DIALOG_ID',
	event: {
		type: 'ContentEvent',
		contentType: 'text/plain',
		message: 'hello world!'
	}
});
```

Success response:
`{"sequence":17}`

#### Example: Set Agent Typing Notification

```javascript
agent.publishEvent({
    dialogId: 'MY_DIALOG_ID',
    event: {
        type: 'ChatStateEvent',
        chatState: 'COMPOSING'
    }
})
```

#### Example: Clear Agent Typing Notification

```javascript
agent.publishEvent({
    dialogId: 'MY_DIALOG_ID',
    event: {
        type: 'ChatStateEvent',
        chatState: 'ACTIVE'
    }
})
```

#### Example: Share An Uploaded File

```javascript
agent.publishEvent({
    dialogId: '<the id of the dialog>',
    event: {
        type: 'ContentEvent',
        contentType: 'hosted/file',
        message: {
            caption: '<some test here>',
            relativePath: '<relative path got from the generateUrlForUploadFile>',
            fileType: '<the file type>'
        }
    }
}, (e, r)=>{
    if (e) console.log ('e: ' + e);
    if (r) console.log ('msg sequence: ' + r.sequence);
});
```

#### Example: Sending Text with Quick Replies

For more examples see [Quick Replies Documentation](https://developers.liveperson.com/mobile-sdk-and-web-templates-quick-replies-template.html)

```javascript
agent.publishEvent({
    dialogId: 'MY_DIALOG_ID',
    event: {
        type: 'ContentEvent',
        contentType: 'text/plain',
        message: 'hello world!',
        quickReplies: {
            "type": "quickReplies",
            "itemsPerRow": 8,
            "replies": [
                {
                    "type": "button",
                    "tooltip": "Yes!",
                    "title": "Yes",
                    "click": {
                        "actions": [
                            {
                                "type": "publishText",
                                "text": "yep"
                            }
                        ],
                        "metadata": [
                            {
                                "type": "ExternalId",
                                "id": "Yes-1234"
                            }
                        ]
                    }
                },
                {
                    "type": "button",
                    "tooltip": "No!",
                    "title": "No!",
                    "click": {
                        "actions": [
                            {
                                "type": "publishText",
                                "text": "No!"
                            }
                        ],
                        "metadata": [
                            {
                                "type": "ExternalId",
                                "id": "No-4321"
                            }
                        ]
                    }
                }
            ]
        }
    }
});
```

Success response:
`{"sequence":21}`

#### Example: Sending Rich Content (Structured Content)

*Note that if your structured content card contains images (like the one below) the image must be on an https domain and that domain must be whitelisted on your account. Ask your LivePerson representative to help you with that.*

For more examples see [Structured Content Templates](https://developers.liveperson.com/mobile-sdk-and-web-templates-introduction.html)
```javascript
agent.publishEvent({
	dialogId: 'MY_DIALOG_ID',
	event: {
		type: 'RichContentEvent',
		content: {
			"type": "vertical",
			"elements": [
				{
				 "type": "image",
					"url": "http://cdn.mos.cms.futurecdn.net/vkrEdZXgwP2vFa6AEQLF7f-480-80.jpg?quality=98&strip=all",
					"tooltip": "image tooltip",
					"click": {
						"actions": [
							{
								"type": "navigate",
								"name": "Navigate to store via image",
								"lo": -73.99852590,
								"la": 40.7562724
							}
						]
					}
				},
				{
					"type": "text",
					"text": "Product Name",
					"tooltip": "text tooltip",
					"style": {
						"bold": true,
						"size": "large"
					}
				},
				{
					"type": "text",
					"text": "Product description",
					"tooltip": "text tooltip"
				},
				{
					"type": "button",
					"tooltip": "button tooltip",
					"title": "Add to cart",
					"click": {
						"actions": [
							{
									"type": "link",
									"name": "Add to cart",
									"uri": "http://www.google.com"
							}
						]
					}
				}
			]
		}
	}
}, null, [{type: 'ExternalId', id: 'MY_CARD_ID'}]);  // ExternalId is how this card will be referred to in reports
```

Success response:
`{"sequence":29}`

#### Example: Sending Rich Content (Structured Content) with Quick Replies

*Note that if your structured content card contains images (like the one below) the image must be on an https domain and that domain must be whitelisted on your account. Ask your LivePerson representative to help you with that.*

For more examples using Structured Content see [Structured Content Templates](https://developers.liveperson.com/mobile-sdk-and-web-templates-introduction.html)

```javascript
agent.publishEvent({
    dialogId: 'MY_DIALOG_ID',
    event: {
        type: 'RichContentEvent',
        content: {
            "type": "vertical",
            "elements": [
                {
                    "type": "image",
                    "url": "http://cdn.mos.cms.futurecdn.net/vkrEdZXgwP2vFa6AEQLF7f-480-80.jpg?quality=98&strip=all",
                    "tooltip": "image tooltip",
                    "click": {
                        "actions": [
                            {
                                "type": "navigate",
                                "name": "Navigate to store via image",
                                "lo": -73.99852590,
                                "la": 40.7562724
                            }
                        ]
                    }
                },
                {
                    "type": "text",
                    "text": "Product Name",
                    "tooltip": "text tooltip",
                    "style": {
                        "bold": true,
                        "size": "large"
                    }
                },
                {
                    "type": "text",
                    "text": "Product description",
                    "tooltip": "text tooltip"
                },
                {
                    "type": "button",
                    "tooltip": "button tooltip",
                    "title": "Add to cart",
                    "click": {
                        "actions": [
                            {
                                "type": "link",
                                "name": "Add to cart",
                                "uri": "http://www.google.com"
                            }
                        ]
                    }
                }
            ]
        },
        quickReplies: {
            "type": "quickReplies",
            "itemsPerRow": 8,
            "replies": [
                {
                    "type": "button",
                    "tooltip": "Yes!",
                    "title": "Yes",
                    "click": {
                        "actions": [
                            {
                                "type": "publishText",
                                "text": "yep"
                            }
                        ],
                        "metadata": [
                            {
                                "type": "ExternalId",
                                "id": "Yes-1234"
                            }
                        ]
                    }
                },
                {
                    "type": "button",
                    "tooltip": "No!",
                    "title": "No!",
                    "click": {
                        "actions": [
                            {
                                "type": "publishText",
                                "text": "No!"
                            }
                        ],
                        "metadata": [
                            {
                                "type": "ExternalId",
                                "id": "No-4321"
                            }
                        ]
                    }
                }
            ]
        }
    }
}, null, [{type: 'ExternalId', id: 'MY_CARD_ID'}]);  // ExternalId is how this card will be referred to in reports
```

Success response:
`{"sequence":32}`

### reconnect(skipTokenGeneration)

**Make sure that you implement reconnect logic according to [liveperson's retry policy guidelines](https://developers.liveperson.com/common-resources-retry-policy-recommendations.html)**

Will reconnect the socket with the same configurations - will also regenerate token by default.  Use if socket closes unexpectedly or on token revocation.

Use `skipTokenGeneration = true` if you want to skip the generation of a new token.

Call `reconnect` on `error` with code `401`.

**Note**: When the `reconnect` method fails to re-establish a connection with LiveEngage, a `closed` and `error` events will fire. Unless these events are handled, multiple instances of a reconnection mechanism will be triggered. See our [retry policy](https://developers.liveperson.com/common-resources-retry-policy-recommendations.html) for more information on how we recommend you handle a retry mechanism.

### dispose()

Will dispose of the connection and unregister internal events.

Use it in order to clean the agent from memory.
