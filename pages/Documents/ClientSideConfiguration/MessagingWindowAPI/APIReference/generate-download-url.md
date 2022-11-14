---
pagename: Generate Download URL
redirect_from:
  - consumer-int-msg-generate-temp-download-url.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference
order: 310
layout: page
permalink: messaging-window-api-api-reference-generate-download-url.html
indicator: messaging
---

{% include msgtype.html title='Request' type='req' %}
{% include json.html name="req_editor"
    schemaFile='assets/schema/ws/consumerRequests.json'
    startval='{"kind":"req","id":"0","type":"ms.GenerateURLForDownloadFile","body":{"relativePath":"/v1/AUTH_async-images/12345678/8ccc728c-2cac-4a81-878a-ab482d3f37b7_uuid_4d91eedb-2eda-433c-b469-06244fd1c3fa_17-04-2018_09-37-15-082.JPG"}}'
    properties=false
    readonly_oneOf='root' %}

{% include msgtype.html title='Response' type='resp' %}
{% include json.html name="resp_editor" schemaFile='assets/schema/ms/GenerateURLResp.json' startval='{ "type": "ms.GenerateURLResponse", "reqId":"A3HC", "code":200, "body": {"relativePath": "/v1/AUTH_async-images/12345678/8ccc728c-2cac-4a81-878a-ab482d3f37b7_uuid_4d91eedb-2eda-433c-b469-06244fd1c3fa_17-04-2018_09-37-15-082.JPG", "queryParams": {"temp_url_sig": "0cff08d2d5618d100bc1353f32872c002180711f", "temp_url_expires": "1523947094"}} }'
readonly='root' %}
