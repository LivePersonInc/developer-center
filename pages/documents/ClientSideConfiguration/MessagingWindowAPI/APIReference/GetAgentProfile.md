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

In order to retrieve the Agent's public profile during a conversation (which is useful if you're looking to display specific agent details, like agent name or picture, during the conversation), we'll need to make a call to the [Users API](https://developers.liveperson.com/users-api-methods-get-user-by-id.html).

```sh
curl https://$domain/api/account/$accountId/configuration/le-users/users/$userId
```

Please see the Users API for more information on the response this call will receive.
