---
pagename: Response Builder
redirect_from:
  - consumer-int-msg-resps.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference
order: 120
layout: page
permalink: messaging-window-api-api-reference-response-builder.html
indicator: messaging
---

Use the following form to build the API request messages you want to send.
Optional properties can be added to the form using the ``Optionals`` button. After typing in all of the fields, copy the ``JSON Output`` section to your clipboard.

{% include msgtype.html title='Request' type='resp' %}
{% include json.html name = "resp_editor"
	schemaFile = 'assets/schema/ws/consumerResponses.json'
	properties = true %}