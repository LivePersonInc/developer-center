---
pagename: Send Consumer Satisfaction (CSAT)
redirect_from:
  - consumer-int-msg-csat-conv.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Messaging Window API
subfoldername: API Reference

order: 160
layout: page

permalink: messaging-window-api-api-reference-send-consumer-satisfaction-csat.html
indicator: messaging
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
