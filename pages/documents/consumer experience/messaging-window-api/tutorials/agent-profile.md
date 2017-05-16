---
title: Agent Profile
level1: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 50


permalink: consumer-int-agent-profile.html
keywords: picture name
---
When you want to present the name or picture of an agent to a consumer, you will need to pull this information using the agent public ID.

###  Prerequisites
See [Prerequisites](consumer-int-get-msg.html#prerequisites){:target="_blank"}.

###  Step 1 - Find the Agent Public ID

The agent public ID can be found in the conversation details sent to you by the conversation list subscription.

Follow the instructions of the [Conversation List Tutorial](consumer-int-conversation-md.html){:target="_blank"} to subscribe yourself.

Inside the notification, you will see a section with content similar to the below:

```json
{
	"participantsPId": {
			"ASSIGNED_AGENT": ["3b5b7ec6-2b0f-53af-9afd-11d4072c85a7"],
			"CONSUMER": [	"19f98cd2-63b9-42e4-bc0d-9222b86574e1"]
	}
}
```

Copy the value of the ``ASSIGNED_AGENT`` property and put it into a variable named ``LP_AGENT_PID``. For example:

```sh
LP_AGENT_PID=3b5b7ec6-2b0f-53af-9afd-11d4072c85a7
```

###  Step 2 - Pull the Agent Profile

You will now be able to run the following request:

```sh
curl https://$LP_ACCDNDOMAIN/api/account/$LP_ACCOUNT/configuration/le-users/users/$LP_AGENT_PID
```

In response, you will get the public profile of the agent, for example:

```json
{
	"pictureUrl": "https://s-media-cache-ak0.pinimg.com/236x/03/f1/e4/03f1e4f711680ce53a051e5913775139.jpg",
	"employeeId": "Dont-Have-One",
	"nickname": "NirL",
	"fullName": "Nir L."
}
```


{% include links.html %}
