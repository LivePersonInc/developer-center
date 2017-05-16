---
title: Response Builder
Keywords:

level2: Agent Interactions
level3: Messaging Agent API
level4: Messages

order: 30
layout: page
permalink: agent-int-msg-resps.html

---

Use the following form to build the API request messages you want to send.
Optional properties can be added to the form using the ``Optionals`` button. After typing in all of the fields, copy the ``JSON Output`` section to your clipboard.

{% include msgtype.html title='Request' type='resp' %}
{% include json.html name = "resp_editor" 
	schemaFile = 'assets/schema/ws/agentResponses.json' 	
	properties = true %}