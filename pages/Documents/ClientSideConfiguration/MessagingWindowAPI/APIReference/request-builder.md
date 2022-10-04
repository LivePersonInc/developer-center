---
pagename: Request Builder
redirect_from:
  - consumer-int-msg-reqs.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference

order: 110
layout: page

permalink: messaging-window-api-api-reference-request-builder.html
indicator: messaging
---

Use the following form to build the API request messages you want to send.
Optional properties can be added to the form using the ``Optionals`` button. After typing in all of the fields, copy the ``JSON Output`` section to your clipboard.

{% include msgtype.html title='Request' type='req' %}
{% include json.html name = "req_editor"
	schemaFile = 'assets/schema/ws/consumerRequests.json'
	properties = true %}