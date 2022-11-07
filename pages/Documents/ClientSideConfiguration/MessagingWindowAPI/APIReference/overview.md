---
pagename: Overview
redirect_from:
  - consumer-int-api-reference.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: API Reference
order: 100
permalink: messaging-window-api-api-reference-overview.html
folder: messaging-apis
docs: https://lpgithub.dev.lprnd.net/pages/Architecture/api-ums/2.0.0.10-SNAPSHOT
icon_style: style="width:16px; height:16px;" height="16" width="16"
wide_icon_style: style="width:32px; height:16px;" height="16" width="32"
indicator: messaging
---

### Connection Establishment
From lp-shell:

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Client properties can be added to the connection URL as query params. The full list of supported client properties can be found [here](consumer-int-client-props.html).

Where LP_JWT is your token.

### Interaction Commands

You can use the ``message builder`` <i class="fa fa-magic" aria-hidden="true"></i> to build and explore the structure of the API messages. The following table summarizes the API messages and provides some examples <i class="fa fa-eye" aria-hidden="true"></i>.

<table>
	<thead>
		<th>Category</th>
		<th>Name</th>
		<th>Request</th>
		<th>Response</th>
		<th>Notifications</th>
	</thead>

	<tr name="mbuilder">
		<td rowspan="1">Message Builder</td>

		<td>

		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-reqs.html"><i class="fa fa-magic" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<a href="consumer-int-msg-resps.html"><i class="fa fa-magic" aria-hidden="true"></i></a>
		</td>

		<!-- notification -->
		<td>
			<a href="consumer-int-msg-notifications.html"><i class="fa fa-magic" aria-hidden="true"></i></a>
		</td>
	</tr>
	<tr>
		<td rowspan="2">Conversations</td>

		<td>
			RequestConversation
		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-req-conv.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			N/A
		</td>
	</tr>
	<tr>
		<td>
			<b>UpdateConversationField</b> <br/>Close, update CSAT, TTR,
		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-close-conv.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
			<a href="consumer-int-msg-csat-conv.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
			<a href="consumer-int-msg-conv-ttr.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			N/A
		</td>
	</tr>

	<tr>
		<td rowspan="2">Conversation Metadata</td>
		<td>
			SubscribeExConversations
		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-sub-conv.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>
	</tr>
	<tr>

		<td>
			UnsubscribeExConversations
		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-unsub-conv.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			N/A
		</td>

	</tr>

	<tr>
		<td rowspan="2">Messages</td>
		<td>
			<b>PublishEvent</b> <br/>Send text, read/accept and presence events.
		</td>
		<!-- request -->
		<td>
			<a href="consumer-int-msg-text-cont.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			N/A
		</td>

	</tr>

	<tr>
		<td>SubscribeMessagingEvents</td>
		<!-- request -->
		<td>
			<a href="consumer-int-msg-sub-events.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

	</tr>

	<tr>
		<td rowspan="1">Browser Connection</td>
		<td>InitConnection</td>
		<!-- request -->
		<td>
			<a href="consumer-int-msg-init-con.html"><i class="fa fa-eye" aria-hidden="true"></i></a>
		</td>

		<!-- response -->
		<td>
			<i class="fa fa-eye" aria-hidden="true"></i>
		</td>

		<!-- notification -->
		<td>
			N/A
		</td>

	</tr>

</table>

### Agent Public Profile

In order to retrieve the Agent's public profile during a conversation (which is useful if you're looking to display specific agent details, like agent name or picture, during the conversation), please see [this method](messaging-window-api-api-reference-get-agent-public-profile.html).

### Rate-Limiting

These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

### Other APIs

* [Consumer Token Creation](common-consumer-token-creation.html)

{% include links.html %}