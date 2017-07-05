---
title: Subscribe to Messaging Events
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 200
layout: page

permalink: consumer-int-msg-sub-events.html
indicator: messaging
---
{% include msgtype.html title='Request' type='req' %}
{% include json.html name="req_editor" 
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval='{"type":"ms.SubscribeMessagingEvents","id":"2SA2","body":{"fromSeq":0,"dialogId":"__YOUR_CONVERSATION_ID__"}}'
        readonly_oneOf = 'root'
	properties=true
	%}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor"
	schemaFile='assets/schema/types/genericSubscribeResp.json'
	startval='{ "reqId":"A3HC", "code":200 }'
	readonly='root' %}

{% include msgtype.html title='Notification' type='notif' %}
{% include json.html name="notif_editor"
	schemaFile = 'assets/schema/ws/consumerNotifications.json' 	
        readonly_oneOf = 'root'
	startval='{"type":"ms.MessagingEventNotification","kind":"notification","body":{"changes":[{"sequence":0,"originatorId":"734d9867-40e3-52b9-a401-07e877676d64","serverTimestamp":1477840831162,"event":{"type":"ContentEvent","message":"message from the agent","contentType":"text/plain"},"dialogId":"__YOUR_CONVERSATION_ID__"}]}}' %}
