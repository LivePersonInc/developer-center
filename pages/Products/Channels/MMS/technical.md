---
title: Technical Description
level1: Solutions
level2: Channels
level3: LiveEngage MMS Viewer
permalink: liveengage-mms-viewer-technical-description.html
order: 10
indicator:
---

The MMS Viewer consists of three parts: the front-end interface that uses the LiveEngage Agent Workspace SDK, the backend which is a Node.js service that receives MMS information and emits it to the front-end, and a Twilio function that speaks to the Node.js service. The high-level flow is as follows:

1. The consumer sends a MMS message to the LiveEngage Agent

2. The MMS is picked up by the custom Twilio Function

3. The Twilio Function emits the MMS information to the endpoint specified in your Node.js application

4. The Node.js application receives the request body and emits the MMS information to the LiveEngage front-end (using socket.io)

5. The Agent front-end establishes a socket.io connection with the Node application, and listens for MMS events from the socket. When a MMS is received, and it matches the cell number of the consumer, the MMS attachment(s) are displayed.
