---
title: Unsubscribe Conversation Metadata
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 180
layout: page

permalink: consumer-int-msg-unsub-conv.html
indicator:
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name = "req_editor" 
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval = '{"id":"0","type":"cqm.UnsubscribeExConversations","body":{"subscriptionId":"id"}}'
        readonly_oneOf = 'root'
	properties = false %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" 
	schemaFile='assets/schema/infra/stringResp.json'
	startval='{ "reqId":"A3HC", "code":200 }'
	readonly='root' %}
