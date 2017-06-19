---
title: Overview
Keywords:
level1: Documents
level2: Agent Interactions
level3: Login Service API

order: 9
permalink: login-getting-started.html
root-link: true
level-order: 6

indicator: both
---
### Introduction

This API allows you to Login to LiveEngage, as a *user*, using a username and password _or_ as an *application*, using an API key. Once you login, a session token (Bearer) will be provided and can be used for relevant API calls.

This API provides endpoints for managing the User Session (User Login, Application Login, Logout and Refresh).

**Use Cases**

1. User Login - use this method when you need to provide a programmatic way for _users_ to access and manage a LiveEngage session such as customized agent workspace or hosting a LiveEngage user in an external app. _Note_

    * Using the User Login method, logged in users will be managed under the same restrictions as normal users in LiveEngage, including (for example) password expiration, concurrent conversations limits, skill groups and so on.

    * Using the User Login method, if your account has SSO enabled, this method will not be standalone and you will have to register the relevant user through your hub to provide LiveEngage with an SSO SAML assertion.

{:start="2"}
2. Appplication Login - use this method when you need to provide a programmatic way for _applications_ to access and manage a LiveEngage session such as bots, virtual agents or any other app that needs to act as an agent in the LiveEngage.

  * _Note_: the Application Login method overcomes both issues detailed above with the User Login method, for example password expiration or SSO integration.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* agentVep

    **Request example**:

    [http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0](http://api.liveperson.net/api/account/12345678/service/agentVep/baseURI.json?version=1.0){:target="_blank"}

{:start="2"}
2. Choose your method of login:

    * As a user - use your LiveEngage username and password to [login](/agent-login.html){:target="_blank"}.

    * As an application - [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key. Select the "Agent Interactions" category and check the "User Login" box.

  ![APIKeyCreation](img/APIKeyCreation.png)
