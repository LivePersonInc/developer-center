---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: Application User Login API
order: 9
permalink: application-user-login-api-overview.html
root-link: true
level-order: 6
indicator: both
---
### Introduction

This API allows a user to login to LiveEngage through an application. Once a user logs in, a session token (Bearer) will be provided and can be used for relevant API calls. This API allows a user to login to multiple applications on the same device, and to supply the user credentials only once.

This API provides standard oauth 2.0 endpoints to receive and refresh session token. Please see the [oauth 2.0 rfc reference](https://tools.ietf.org/html/rfc6749){:target="_blank"} for more information on how these work and their parameters.

When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

**Use Cases**


### Getting Started

1. Install a LiveEngage application. Here is a [guide to installing LiveEngage applications](guides-le-applications-installing.html){:target="_blank"}. After finishing the installation, please retrieve the AppInstall ID and secret that you will need to use when calling this API's endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel

**Full request example**:

[http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0](http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0){:target="_blank"}
