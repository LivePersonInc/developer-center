---
pagename: Publishing Text Content
redirect_from:
  - consumer-int-msg-text-cont.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference
order: 190
layout: page
permalink: messaging-window-api-api-reference-publishing-text-content.html
indicator: messaging
---

Using this request, the consumer can ask to publish text content to an existing conversation.

{% include msgtype.html title='Request' type='req' %}
{% include json.html name = "req_editor"
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval = '{"type":"ms.PublishEvent","id":"A3FA","body":{"dialogId":"__YOUR_CONVERSATION_ID__","event":{"type":"ContentEvent","contentType":"text/plain","message":"hi there"}}}'
	readonly_oneOf = 'root root.body.event' %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor"
	schemaFile='assets/schema/ms/PublishEventSuccess.json'
	startval='{"reqId":"A3FA","code":200,"body":{"sequence":3}}'
	readonly='root' %}