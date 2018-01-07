---
title: Domain API
Keywords:
level1: Documents
level2: Guides
level3: Retrieve API Domains

level-order: 2
order: 10
permalink: agent-domain-domain-api.html
root-link: true
indicator:
---

### Overview

This is a read-only API that returns the base domain of LivePerson that should be used in the APIs outlined in this document.

**Note**: The different service names can be found in the relevant documentation for the API you're looking to use. They can be found in each document's Overview page. Service names are _case sensitive_. Please make sure to input serviceName as it is provided in each document's overview.

###  Request

| Method | URL |
| :--- | :--- |
| GET | ```http://api.liveperson.net/api/account/{accountId}/service/{serviceName}/baseURI.json?version=1.0``` |

**URL Parameters**

| Name | Description | Type / Value | Required |
| :--- | :--- | :--- | :--- |
| account | LivePerson account ID | string | Required |
| service | Service name according to the relevant API | string | Required |

###  Response

JSON Example:

```json
{
 "service": "agentVep",
 "account": "1234",
 "baseURI": "exampleDomain.liveperson.net"
}
```

**Elements in the Response**

| Name | Description  | Type / Value |
| :--- | :--- | :--- |
| service | AgentVep | string |
| account | LivePerson Account ID | string |
| baseURI | LivePerson domain to be used in the APIs outlined in this document | string |

**Optional Response Status Codes**

| Status | Description |
| :--- | :--- |
| 200 OK | Successfully retrieved the data. |
| 400 Bad Request | Problem with body or query parameters. |
| 401 Unauthorized | Bad Authentication (invalid site or agent). |
