---
title: Introduction
level1: Documents
level2: Account Configuration
level3: Predefined Categories API

permalink: account-configuration-categories-introduction.html
root-link: true
level-order: 3
order: 1
indicator: both
---
This document covers the LiveEngage (LE) Categories backend logic and the capabilities and description of the Predefined Categories API. The purpose of Predefined Categories is to group LE **Predefined Content** elements by category in order to allow personalization of the user’s experience. The API allows you to manipulate this grouping in order to edit, remove or create new Predefined Categories or retrieve information on single/multiple categories more easily.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

    * Read only: accountConfigReadOnly

    * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

    * **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

### Authentication

This API supports both LP OAuth1.0 and LP Access Token authentication patterns. More info about LP APIs authentication can be found [here](https://developers.liveperson.com/guides-gettingstarted.html){:target="_blank"}.
