---
title: TLS Authentication
Keywords:
level1: Documents
level2: Guides
level3: Push Notification Service (iOS and Android)

order: 20
permalink: push-service-tls.html

indicator: messaging
---

Customers supply a valid client key and certificate for a TLS connection (two-way SSL). The
key and certificate is used in every request to the relevant proxy call. The key is securely
stored in LivePerson’s server.

### Request Details

###  Protocol

Https only.

###  Authorization

TLS

###  Method

Method is **POST**.

###  Payload

Payload differs slightly in iOS and Android:

Shared:

- **backendService** - The originator service that sends the push to the pusher (in most
cases will be "ams").
- **conversationId** - The associated conversation ID.
- **push-service** - The ENUM describing the service type (APNS - 1, GCM - 2).
- **originatorId** - The originator context for the push (AccountID.AgentNumber).
- **brandId** - The account number associated with the push.
- **notificationType** - The type of notification (APN or GCM).
- **device-token** - The device token used for the push.
- **badge** - The number of unread messages to be displayed on the unread messages badge.
- **sequence** - The sequence id of the message which triggered the push.

iOS (APNS) only:

- **aps** - contains the raw iOS push object.

Android (GCM) only:

- **data** - Contains payload and raw message objects.
- **payload** - Contains backendService, conversationId, originatorId, brandID, badge and sequence.
- **message** - Raw message text.

**iOS JSON:**

    {
    "aps":	{
    "alert":	"My	Test:	123\\n",
    "sound":	"default"
    },
    "push-service":	1,
    "device-token":	"01408800000259",
    "backendService":	"ams",
    "conversationId":	"13a1ca79-22eb-4a60-8cad-cd7f9dbdb9f3",
    "originatorId":	"qa90588718.2333061110",
    "brandId":	"qa90588711",
    "badge":1,
    "sequence":8,
    "notificationType":	"apn"
    }

**Android JSON:**

    {
    "data":	{
    "message":	"My	Test:	111\\n",
    "payload":	{
    "backendService":	"ams",
    "conversationId":	"ff816d0d-3572-4430-956f-cab638d18826",
    "originatorId":	"qa90588718.2333061110",
    "brandId":	"qa90588711",
    "badge":4,
    "sequence":6
    }
    },
    "push-service":	2,
    "device-token":	"01408800000259",
    "notificationType":	"gcm"
    }
