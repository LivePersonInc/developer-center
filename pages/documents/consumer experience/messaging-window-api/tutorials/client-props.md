---
title: Client Properties
redirect_from:
  - consumer-int-client-props.html
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 70
permalink: messaging-window-api-tutorials-client-properties.html

indicator: messaging
---

The client can send information about its type, for example, mobile, desktop, browser type, OS version, etc. In this tutorial, we will see how to attach this information to client requests, and where to read the equivalent information about the agent.

In order to send client properties, repeat the [Getting Started](consumer-int-getting-started.html){:target="_blank"} tutorial. In Step 3, you are asked to open a new connection. Instead of the shell command written there, use the following command:

```sh
LP_PROPS='{"type":".ClientProperties","deviceFamily":"MOBILE","os":"ANDROID"}'
wscat -k 60 -H "Authorization:jwt $LP_JWT" -H "Client-Properties:$LP_PROPS" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

After sending a text message in Step 5, the device type and OS will be displayed in the Agent Workspace under the ``Consumer Info`` table:

![consumer-msg](img/consumer_client_properties.png){:target="_blank"}

Other ``ClientProperties`` that can be sent can be found in the [API Reference](consumer-int-api-reference.html#conection-establishment){:target="_blank"}.

This object can be used as part of the websocket headers, or as part of the ``InitConnection`` request.
{% include json.html name = "req_editor" 
	schemaFile = 'assets/schema/infra/clientPropertiesHeader.json' 
	startval = '{"deviceFamily":"DESKTOP","os":"WINDOWS","browser":"","appId":"","appVersion":"","deviceModel":"","deviceManufacture":"","timeZone":"","browserVersion":"","integrationVersion":"","integration":"WEB_SDK","osName":"","osVersion":""}'
	properties = true %}


{% include links.html %}
