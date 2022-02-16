---
pagename: Events
redirect_from:
  - webhooks-events.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 20
indicator: messaging
permalink: connector-api-webhooks-events.html
---

An [application](connector-api-webhooks-configuration.html) can be configured to receive notifications of these event types: `cqm.ExConversationChangeNotification`, `ms.MessagingEventNotification.ChatStateEvent`, `ms.MessagingEventNotification.AccpetStatusEvent`, `ms.MessagingEventNotification.RichContentEvent` and `ms.MessagingEventNotification.ContentEvent`. The state change of a conversation yields an `ExConversationChangeNotification`. It always carries the complete state of the corresponding conversation. For example, when the conversation was closed the notification contains the close reason, all participants and dialogues. A `ChatStateEvent` event is sent when a participant is interacting with a conversation. For example, when an agent writes a message, an event with chat state `COMPOSING` is created. An `AcceptStatusEvent` details about the delivery of a message. For example, if an agent accepted a message but did not read it yet, an event with status `ACCEPT` is created. A `RichContentEvent` contains structured JSON data. For more details, have look [here](getting-started-with-rich-messaging-introduction.html). And a `ContentEvent` can be a plain text message, a hosted file, an external file, a secure form invitation and a secure form submission. For example, a consumer message is an event with content type `text/plain` and a textual message. On the other hand, an event of with content type `hosted/file` has a base64 encoded preview for images, a caption, a file type and a relative path where the file can be downloaded. 

### Example and schemas
Each event is sent within a notification umbrella. For example, a plain text message may look as follows:
```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 39,
        "originatorId": "adba3c0a-c1f5-4ca1-8062-07acde2b5eaf",
        "originatorMetadata": {
          "id": "adba3c0a-c1f5-4ca1-8062-07acde2b5eaf",
          "role": "CONSUMER"
        },
        "serverTimestamp": 1641916856713,
        "event": {
          "type": "ContentEvent",
          "message": "sender: Consumer message: 21\n can i get an unlimited data plan\n[16:00:56] timestamp:1641916856685",
          "contentType": "text/plain"
        },
        "conversationId": "4fe52a76-7316-45fe-acf3-482cfb621d9c",
        "dialogId": "4fe52a76-7316-45fe-acf3-482cfb621d9c",
        "messageAudience": "ALL"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

All notifications have a property `kind` with value `notification`. The type can either be `ms.MessagingEventNotification` or `cqm.ExConversationChangeNotification`. The body contains all the events of this notification within the changes array. Each event has a sequence id. This id is steadily incremented within a conversation between any two following events. The event details which participant created the message using the `originatorId`. In the corresponding `originatorMetdata` we get the information, that this participant has the role of a consumer. The `serverTimestamp` is the point in time when the event was created on the server side. The `event` object contains the actual event type, message and content type of the message. A conversation can have multiple dialogues. This is why, there is a `conversationId` and a `dialogId`. For example, a post conversation survey is conducted in a separate survey dialogue. `messageAudience` indicates who should see this message. For messages between agents and managers only, `messageAudience` will be set to `AGENTS_AND_MANAGERS`. If the message should also be displayed to customers, `messageAudience`is set to `ALL`. 

An archive with more examples and JSON schemas can be found [here](assets/schema/connectorapi/json_schemas.zip). Schema `WsNotificationMsg.json` in directory webhooks describes a notification like in the example above. Directory webhooks_examples contains multiple example notifications. 
