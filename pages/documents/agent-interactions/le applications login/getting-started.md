---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: LE Applications Login
order: 9
permalink: application-user-login-api-overview.html
root-link: true
level-order: 6
indicator: both
---
### Introduction


This API authorizes users for your application. The application should be installed in the context of your account. 

This API provides standard oauth 2.0 endpoints to receive and refresh access token. Please see the [oauth 2.0 rfc reference](https://tools.ietf.org/html/rfc6749){:target="_blank"} for more information.

The flow goes like this: 

1. Users are redirected to LivePerson Identity Service. 
2. Users are redirected back to the app site.
3. Your app accesses the API with the user's access token

### Getting Started

1. Install a LiveEngage application. Here is a [guide to installing LiveEngage applications](guides-le-applications-installing.html){:target="_blank"}. After finishing the installation, please retrieve the AppInstall ID and secret that you will need to use when calling this API's endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel

**Full request example**:

[http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0](http://api.liveperson.net/api/account/12345678/service/sentinel/baseURI.json?version=1.0){:target="_blank"}
