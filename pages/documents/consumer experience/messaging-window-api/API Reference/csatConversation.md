---
title: Send Consumer Satisfaction (CSAT)
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 160
layout: page

permalink: consumer-int-msg-csat-conv.html
---


{% include msgtype.html title='Request' type='req' %}
{% include json.html name = "req_editor" 
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval = '{"id":"0","type":"cm.UpdateConversationField","body":{"conversationId":"id","conversationField":[{"field":"CSATRate","csatRate":1,"csatResolutionConfirmation":false,"status":"FILLED"}]}}'
	properties = false
	readonly_oneOf = 'root' %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" 
	schemaFile='assets/schema/infra/stringResp.json'
	startval='{ "reqId":"A3HC", "code":200 }'
	readonly='root' %}
