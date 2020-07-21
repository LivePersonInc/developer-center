---
pagename: Close Conversation
redirect_from:
  - consumer-int-msg-close-conv.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference

order: 150
layout: page

permalink: messaging-window-api-api-reference-close-conversation.html
indicator: messaging
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name="req_editor" 
    schemaFile='assets/schema/ws/consumerRequests.json'
    startval='{"kind":"req","id":"0","type":"cm.UpdateConversationField","body":{"conversationId":"id","conversationField":[{"field":"ConversationStateField","conversationState":"CLOSE"}]}}' 
    properties=false 
    readonly_oneOf='root' %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" schemaFile='assets/schema/infra/stringResp.json' startval='{ "reqId":"A3HC", "code":200 }' readonly='root' %}
