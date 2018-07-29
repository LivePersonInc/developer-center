---
title: Notification Builder
redirect_from:
  - consumer-int-msg-notifications.html
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: API Reference

order: 130
layout: page

permalink: messaging-window-api-api-reference-notification-builder.html
indicator: messaging
---

Use the following form to build the API request messages you want to send.
Optional properties can be added to the form using the ``Optionals`` button. After typing in all of the fields, copy the ``JSON Output`` section to your clipboard.

{% include msgtype.html title='Request' type='notif' %}
{% include json.html name = "notif_editor" 
	schemaFile = 'assets/schema/ws/consumerNotifications.json' 	
	properties = true %}