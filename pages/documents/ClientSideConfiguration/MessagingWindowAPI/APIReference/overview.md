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
			<a href="consumer-int-msg-reqs.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>		
		</td>

		<!-- response -->
		<td>
			<a href="consumer-int-msg-resps.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>		
		</td>

		<!-- notification -->
		<td>
			<a href="consumer-int-msg-notifications.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>		
		</td>
	</tr>
	<tr>
		<td rowspan="2">Conversations</td>

		<td>
			RequestConversation
		</td>

		<!-- request -->
		<td>
			<a href="consumer-int-msg-req-conv.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
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
			<a href="consumer-int-msg-close-conv.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>
			<a href="consumer-int-msg-csat-conv.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
			<a href="consumer-int-msg-conv-ttr.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
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
			<a href="consumer-int-msg-sub-conv.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
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
			<a href="consumer-int-msg-unsub-conv.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>
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
			<a href="consumer-int-msg-text-cont.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>
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
			<a href="consumer-int-msg-sub-events.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
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
			<a href="consumer-int-msg-init-con.html" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a>		
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

### Other APIs

* [Consumer Token Creation](common-consumer-token-creation.html)


{% include links.html %}
