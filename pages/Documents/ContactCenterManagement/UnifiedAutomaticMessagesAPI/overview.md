---
pagename: Overview
redirect_from:
  - account-configuration-unified-automatic-messages-overview.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Unified Automatic Messages API

level-order: 1
order: 9
permalink: unified-automatic-messages-api-overview.html
root-link: true
indicator: both
---
### Introduction

Unified Automatic messages are messages that are triggered automatically during a conversation to inform visitors of the status of the conversation. The messages appear in the selected visitor language to the consumer in the engagement window and to the Agent in their agent workspace.

The Unified Automatic Messages API enables brands to find and modify Unified Automatic Messages, which in turn support and enhance the conversation between Agent and visitor. The API facilitates the  editing of unified automatic messages onto Conversational Cloud e.g. in the case these messages are translated by an external vendor.

The API is based on the REST architecture style.

The unified automatic messages can be manually updated within Conversational Cloud. Each message can be translated to all the LE visitor languages and can have different text for different skills.

![AutomaticMessages](img/automaticmessages.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)
