---
title: Overview
level1: Documents
level2: Account Configuration
level3: Agent Status Reason API
permalink: account-configuration-agent-status-reason-overview.html
root-link: true
level-order: 7
order: 1
indicator: both
---

### Overview

This document describes and details LiveEngage's Agent Status Reason backend logic. It includes a description of the capabilities and methods of the Agent Status Reason API as well as a description of the standard "Agent Status object" which LiveEngage's backend uses to describe agent status. This object includes the Status Reason and is the object these methods will be querying and manipulating.

The intended purpose of the Agent Status Reason API is to allow the addition of additional away statuses and reasons. Using it, you could add to the pre-configured status reasons that come with LiveEngage, creating your own, querying the status reasons of your agents in bulk and more.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the following service name:

  * Read only: accountConfigReadOnly

  * Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

    * **Log a user into LiveEngage** using the [Login Service API](https://developers.liveperson.com/login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

    * [Follow these instructions](https://developers.liveperson.com/guides-gettingstarted.html), to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### General API Information

This section contains details that are common for every method of this API's resource and action.

#### Formats

JSON

#### Request Headers

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](https://developers.liveperson.com/guides-authentication-introduction.html) for more details. |

#### Query Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|v | api version number|<ul><li> Required </li><li>Type: Double </li><li>Default Value: 1.0</li><li> Validation fail error code: 400</li></ul>|

### Status reason object description

This is the expected and general format for an Agent Status object, appearing in all methods of this API.

```json
{
  "id": 121212,
  "text": "some text252",
  "state": "Away",
  "deleted": false,  
  "enabled": true
}
```

|Attribute | Description | Notes|
|--- | --- | ---|
|id | Account Config object’s unique id. | <ul><li>Type: long number (automatically generated)</li></ul>|
|name | Status reason text | <ul><li>Type: string</li><li>Required</li><li>Unique</li><li>Esapi validation: safeMediumString length 100</li></ul>|
|state | agent state | <ul><li>type: string</li><li>possible values: "Online", "Occupied", "Away"</li></ul></li></ul>|
|deleted | Whether the item is deleted or not  | <ul><li>Type: boolean</li></ul>|
