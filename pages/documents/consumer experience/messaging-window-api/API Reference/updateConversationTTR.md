---
pagename: Close ConversationTTR
redirect_from:
  - consumer-int-msg-conv-ttr.html

categoryname: Consumer Experience
documentname: Messaging Window API
subfoldername: API Reference

order: 121
layout: page

permalink: messaging-window-api-api-reference-close-conversationttr.html
indicator: messaging
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name="req_editor" 
    schemaFile='assets/schema/ws/consumerRequests.json'
    startval='{"id":"0","type":"cm.UpdateConversationField","body":{"conversationId":"hello","conversationField":[{"field":"TTRField","ttrType":"URGENT","value":300}]}}' 
    properties=false 
    readonly_oneOf='root' %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" schemaFile='assets/schema/infra/stringResp.json' startval='{ "reqId":"A3HC", "code":200 }' readonly='root' %}
