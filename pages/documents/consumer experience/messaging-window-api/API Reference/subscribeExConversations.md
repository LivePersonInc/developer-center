---
title: Subscribe to Conversation Metadata
redirect_from:
  - consumer-int-msg-sub-conv.html
sitesection: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 170
layout: page

permalink: messaging-window-api-api-reference-subscribe-to-conversation-metadata.html
indicator: messaging
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name="req_editor" 
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval='{"type":"cqm.SubscribeExConversations","id":"33","body":{"minLastUpdatedTime":1478089679,"convState":["OPEN"]},"type":"cqm.SubscribeExConversations" }'
        readonly_oneOf = 'root'
	properties=false
	%}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor"
	schemaFile='assets/schema/aam/subscribeExConversationsResp.json'
	startval='{ "reqId":"A3HC", "code":200, "body": { "subscriptionId": "6a06020c-ef69-4bb4-ab72-934d032d106a"} }'
	readonly='root' %}

{% include msgtype.html title='Notification' type='notif' %}
{% include json.html name="notif_editor"
	schemaFile = 'assets/schema/ws/consumerNotifications.json' 	
        readonly_oneOf = 'root'
	startval='{"kind":"notification","type":"aam.ExConversationChangeNotification","body":{"subscriptionId":"64fbd7e2-ad12-4e49-b14b-fb5b44d7609b","changes":[{"type":"UPSERT","result":{"convId":"a9531749-a0c1-4571-8459-9e97c8366832","conversationDetails":{"participants":[{"id":"734d9867-40e3-52b9-a401-07e877676d64","role":"ASSIGNED_AGENT"},{"id":"ea38b6da-2229-450c-b3b1-5ceb5e20bd1d","role":"CONSUMER"}],"state":"OPEN","startTs":1478069636348,"ttr":{"ttrType":"PRIORITIZED","value":600},"endTs":0,"delay":{"type":"NIGHT","tillWhen":0},"csat":{"field":"CSATRate","csatRate":1,"csatResolutionConfirmation":false,"status":"FILLED"},"manualETTR":0},"lastUpdateTime":1478069636348}}]}}'
	properties=true %}
