---
title: Avoid Websocket Headers
redirect_from:
  - consumer-int-no-headers.html
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 80
permalink: messaging-window-api-tutorials-avoid-websocket-headers.html

indicator: messaging
---

In the previous tutorials we used websocket headers to pass authentication token and ``ClientProperties``. While native apps can use this method, browsers do not have standard API to control the websocket headers. Thus the api has another mechanism to pass this information.

The websocket initation request will be sent without any headers:

```sh
wscat -k 60 -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

After the websocket is opened you will have a few seconds to send the ``InitConnection`` request, including your JWT (copy it from the output of ``echo $LP_JWT`` command).

```json
{"kind":"req","id":"0","type":"InitConnection","headers":[{"type":".ams.headers.ClientProperties","deviceFamily":"MOBILE","os":"ANDROID"},{"type":".ams.headers.ConsumerAuthentication","jwt":"__YOUR_JWT__"}]}
```
**Note**: you can use the message builder (<a href="consumer-int-msg-init-con.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>) to build the above message. 

From that point the protocol can continue in the same way.

{% include links.html %}
