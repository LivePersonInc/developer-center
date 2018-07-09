---
title: Init Connection
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 210
layout: page

permalink: messaging-window-api-api-reference-init-connection.html
indicator: messaging
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name = "req_editor" 
        schemaFile='assets/schema/ws/consumerRequests.json'
	startval = '{"type": "InitConnection","headers":[{"type":".ams.headers.ClientProperties","deviceFamily":"DESKTOP","os":"WINDOWS"},{"type":".ams.headers.ConsumerAuthentication","jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"}]}'
	properties = true %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" 
	schemaFile='assets/schema/infra/stringResp.json'
	startval='{ "reqId":"A3HC", "code":200 }'
	readonly='root' %}
