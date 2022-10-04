---
pagename: Introduction
redirect_from:
  - account-configuration-categories-introduction.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Categories API

permalink: predefined-categories-api-introduction.html
root-link: true
level-order: 3
order: 1
indicator: both
---
This document covers the Conversational Cloud Categories backend logic and the capabilities and description of the Predefined Categories API. The purpose of Predefined Categories is to group LE **Predefined Content** elements by category in order to allow personalization of the user’s experience. The API allows you to manipulate this grouping in order to edit, remove or create new Predefined Categories or retrieve information on single/multiple categories more easily.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

    * Read only: accountConfigReadOnly

    * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

    * **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html).

### Authentication

This API supports both LP OAuth 1.0 and LP Access Token authentication patterns. More info about LP APIs authentication can be found [here](guides-gettingstarted.html).
