---
title: Get AppJWT
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Authorization and Authentication
order: 4
indicator: both
permalink: connector-api-authorization-and-authentication-get-appjwt.html
search: include
---

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* sentinel

### Authorization with AppJWT

Before sending any request with the Send API, you must first obtain an **AppJWT** authorization token using the brand’s `Installation id` and `Secret` which you acquired as described on the [Getting Started](connectorapi-getting-started.html){:target="_blank"} chapter.

The **AppJWT** is an access token obtained from **Sentinel**, which is a LivePerson Application Identity Broker. The **AppJWT** allows the client (i.e connector) to access the LiveEngage platform.

**Note:** An **AppJWT** is not sufficient to identify a consumer with LiveEngage. With a valid **AppJWT** you can obtain a **ConsumerJWS** (Java Web Signature). Please see [this page](Create_ConsumerJWS.html) in order to retrieve a **ConsumerJWS**.

An **AppJWT** can be obtained with the following HTTPS request:


| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/sentinel/api/account/{accountid}/app/token?v=1.0&grant_type=client_credentials&client_id={Installation id}&client_secret={Secret} |


**Path Parameters**

| Name  | Description | Type/Value | Mandatory |
| :--- | :--- | :--- | :--- |
| accountid | LivePerson site ID | string | true |
| domain | Sentinel Hostname | string | true |

**Query Parameter**

| Name  | Description | Type/Value | Example | Mandatory |
| :--- | :--- | :--- | :--- | :--- |
| v | The API version | numeric | 1.0 | true |
| grant_type | authorization grant according to OAuth 2.0. Use only client_credentials for connector API | string | client_credentials | true |
| client_id | **Installation id** provided after application registration | string | 75588e18-0213-4e33-8174-883acac7e3c4 |true |
| client_secret | **Secret** provided after application registration | string | kgvbkk7glku72jgtmpi6l4a872 | true |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Content-Type | application/x-www-form-urlencoded |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | access_token is received |


**Response Example**

```json
{
  "access_token": "eyJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM", "token_type": "Bearer"
}
```
