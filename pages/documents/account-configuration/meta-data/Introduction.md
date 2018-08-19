---
title: Introduction
redirect_from:
  - account-configuration-meta-data-introduction.html
sitesection: Documents

level3: Meta Data API
permalink: meta-data-api-introduction.html
root-link: true
level-order: 6
order: 1
indicator: both
---

This document covers the LiveEngage (LE) Meta Data backend logic and the capabilities and description of its various APIs. The purpose of meta data is to allow actions across multiple types of engagements or actions which are not specific to single type.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

    * Read only: accountConfigReadOnly

    * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

    * **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow these instructions](guides-gettingstarted.html), to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Authentication

This API supports both LP OAuth1.0 and LP Access Token authentication patterns. More info about LP APIs authentication can be found [here](guides-gettingstarted.html).
