---
pagename: Get Agent Public Profile
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference
layout: page
permalink: messaging-window-api-api-reference-get-agent-public-profile.html
indicator: messaging
---

In order to retrieve the Agent's public profile during a conversation (which is useful if you're looking to display specific agent details, like agent name or picture, during the conversation), use the below method.

```sh
curl https://$LP_ACCDNDOMAIN/api/account/$LP_ACCOUNT/configuration/le-users/users/$LP_AGENT_PID
```
