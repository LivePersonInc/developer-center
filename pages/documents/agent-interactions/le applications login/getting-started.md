
---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: Application User Login API

order: 9
permalink: login-getting-started.html
root-link: true
level-order: 6

indicator: both
---
### Introduction

This API allows a user to login to LiveEngage though an application. Once you login, a session token (Bearer) will be provided and can be used for relevant API calls.

This API allows a user to login to multiple applications on the same device, and to supply the user crendetials only once.

This API provides standard oauth 2.0 endpoints to recieve and refresh session token

[oauth 2.0 rfc reference](https://tools.ietf.org/html/rfc6749){:target="_blank"}.

When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

**Use Cases**


### Getting Started
1. Install a LiveEnage Application. Here is a [LiveEngage Applications installation guide](guides-retry-policy.html){:target="_blank"}. After finishing the installation please retrieve the AppInstall ID and secret that you will need to use when calling this API endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel

    **Request example**:

    [http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0](http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0){:target="_blank"}
