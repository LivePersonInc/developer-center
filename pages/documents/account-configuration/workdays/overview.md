---
title: Overview
keywords:
level1: Documents
level2: Account Configuration
level3: Workdays API

level-order: 1
order: 9
permalink: account-configuration-unified-automatic-messages-overview.html
root-link: true
indicator: both
---
### Introduction

Unified Automatic messages are messages that are triggered automatically during a conversation to inform visitors of the status of the conversation. The messages appear in the selected visitor language to the consumer in the engagement window and to the Agent in their agent workspace.

The Unified Automatic Messages API enables brands to find and modify Unified Automatic Messages, which in turn support and enhance the conversation between Agent and visitor. The API facilitates the  editing of unified automatic messages onto LiveEngage e.g. in the case these messages are translated by an external vendor.

The API is based on the REST architecture style.

The unified automatic messages can be manually updated within LiveEngage. Each message can be translated to all the LE visitor languages and can have different text for different skills.

![AutomaticMessages](img/automaticmessages.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

