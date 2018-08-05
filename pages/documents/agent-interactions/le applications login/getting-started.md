---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: LE Applications Authorization
order: 9
permalink: le-applications-authorization-overview.html
root-link: true
level-order: 6
indicator: both
---

### Introduction

This API authorizes users for your application. This is needed so that your application can interact with LiveEngage on behalf of your users in a secure and authorized way. The application should be installed in the context of your account.

This API provides standard oauth 2.0 endpoints to receive and refresh access tokens. Please see the [oauth 2.0 rfc reference](https://tools.ietf.org/html/rfc6749){:target="_blank"} for more information.

The flow goes like this:

1. User launches your application. We expect this flow to be the first thing the application does.
2. User is redirected to the LivePerson Identity Service. If they have an existing LiveEngage session, a code will be provided immediately. If they don't have an existing LiveEngage session, they will be redirected to a login page. Once they login, they'll receive the code from the Identity Service.
3. Users are redirected back to the application site with the code provided in Step 1.
4. Your application accesses the API to request a token with the user's code provided in Step 1.
5. Your application receives an access token with which it can access LiveEngage services.

### Getting Started

1. Install a LiveEngage application. Here is a [guide to installing LiveEngage applications](guides-le-applications-installing.html){:target="_blank"}. After finishing the installation, please retrieve the AppInstall ID and secret that you will need to use when calling this API's endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel
