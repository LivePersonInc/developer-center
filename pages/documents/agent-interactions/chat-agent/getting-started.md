---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API

level-order: 4
order: 4
permalink: chat-agent-api-undefined-overview.html
root-link: true
indicator: chat
---
### Introduction

Agents within LiveEngage play the crucial role of interfacing with customers by answering chat conversations and communicating with customers. The Chat Agent API provides the capabilities of programmatically running agent activities without human intervention.

The Chat Agent API is a REST style API with relation links, and provides the main functionality for the Agent Workspace in LiveEngage.

### Getting Started with the Chat Agent API

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

In order to use the Chat Agent API, please follow the steps below:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information. The API's serviceName is agentVep.
2. **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all Chat Agent API requests.
3. **Create an agent session** using the [Start Agent Session method](agent-start-agent-session.html){:target="_blank"}.
4. **Log out** using the [Login Service API](login-getting-started.html){:target="_blank"}.



### Use Cases

There are two primary reasons to utilize the Chat Agent API:

1. Add bots to your chat experience

	* Bot as an agent to answer customer inquiries

	* Bot joins a conversation to assist humans

	* Bot as a listener to a conversation to provide tips for human agents

2. Build your own custom agent workspace

	* Add the ability for agents to take chats from within your CRM

	* Build a mobile app for your agents

	The Chat Agent API provides information on the following:

	- Agent availability (agent status)
	- Number of available agents
	- Visitor info (device, IP, OS, etc.)
	- Pre-chat survey info

	**Notes:**

	- *Other complementary APIs may be required in order to use the full functionality of the Agent Workspace.*
	- *To establish and use an agent session via unsigned requests, you must correctly handle cookies which are set by the server in response to API requests. Cookies are scoped to a specific agent session. When working with multiple agents, make sure to track cookies separately for each agent session. There is no need to use this security cookie when using Signed requests, therefore it will not be set by the server.*

	The LiveEngage Agent workspace example:

	![AgentWorkspaceSDK](img/agentworkspace2.png)

### Samples

Refer to the [Agent Sample App](chat-agent-sample-app.html){:target="_blank"}.
