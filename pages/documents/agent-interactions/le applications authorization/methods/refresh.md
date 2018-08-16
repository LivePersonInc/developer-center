---
title: Refresh Request
Keywords:
level1:
level2: Agent Interactions
level3: LE Applications Authorization
level4: Methods
order: 11
permalink: le-applications-login-methods-refresh-request.html
indicator: both
---

### Overview

In order to refresh an existing access token, the application should use a refresh request in the following structure. We recommend the refresh request be made every 30 minutes to make sure that the access token doesn't expire.

### Request

| Method | URL |
| :--- | :--- |
| POST |  https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/token?v=2.0 |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | number| Required | Default Value: 2.0 |

**Headers**

| Header |  Description |
| :--- | :--- |
| Content-Type | application/x-www-form-urlencoded;charset=UTF-8|

**Body**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| grant_type |  | String| Required | Value MUST be set to "refresh_token" |
| refresh_token | refresh token that was supplied in the application previous token or refresh request | String| Required |  |
| client_id | installation id provided after application registration| String| Required |  |
| client_secret | secret provided after application registration| String| Required |  |

Example:

```
client_id=xyz&client_secret=yqr&grant_type=refresh_token&refresh_token=SplxlOBeZQQYbYS6WxSbIA
```

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK - request succeeded.  |
| 400 | Bad request - Problem with body or query parameters. |
| 500 | Internal server error. |

**Response Body**

| Attribute name | Description |
| :--- | :--- |
| access_token | token to use as authorization when interacting with LE services  |
| token_type | Always Bearer |
| refresh_token | token to use when requesting access token refresh  |


*Note: The Bearer is the access_token attribute*

Example:

```json
    {
      "access_token": "9cf6ee24b6a1031e202f292a0ad20c8f52bfd9f01abc8b9489365995052c6603",
      "token_type": "Bearer",
      "refresh_token": "a3e5c67af5d8f75034cf23aed24bcfb0d397d6896fe25d5043cce0bd5972639e3ad2d198730ab80959ecf7dcc3c54d07cfd4fc22cb4e1f406e673dc814da84133b7f4ff2bfb800128c"
    }
```

*Note: Response contains refresh token to be used when making a refresh request.*


*The current LP Identity service implementation will extend the SSO session as long as the app keeps calling the refresh endpoint. every configured period of time*
