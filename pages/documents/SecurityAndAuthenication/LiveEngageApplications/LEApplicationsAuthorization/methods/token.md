---
pagename: Token Request
redirect_from:
  - authorizing-liveengage-applications-methods-token-request.html
Keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Authorizing Conversational Cloud Applications
subfoldername: Methods
permalink: authorizing-conversational-cloud-applications-methods-token-request.html

indicator: both
---

### Overview

Once users are redirected back to the application with the code from LivePerson's Identity Service, the application will need to retrieve a token in order to access Conversational Cloud services. This is a request which enables retrieving that token.

This request should be made after obtaining the code from the [authorize request](/authorizing-liveengage-applications-methods-authorization-request.html) as it is needed to create the access token.

### Request

| Method | URL |
| :--- | :--- |
| POST |  https://[{domain}](/agent-domain-domain-api.html)/sentinel/api/account/{accountId}/token?v=2.0 |

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
| grant_type |  | String| Required | Value MUST be set to "authorization_code" |
| code | the code that was provided to the application in the redirection callback | String| Required |  |
| redirect_uri | the redirect uri that was provided by the application in the authorizaton request | String| Required if the "redirect_uri" parameter was included in the authorization request  |  |
| client_id | installation id provided after application registration| String| Required |  |
| client_secret | secret provided after application registration| String| Required |  |

**Example**:

```sh
client_id=xyz&client_secret=yqr&grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
```

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK - request for access token succeeded.  |
| 400 | Bad request - Problem with body or query parameters. |
| 500 | Internal server error. |

**Response Body**

| Attribute name | Description |
| :--- | :--- |
| access_token | token to use as authorization when interacting with LE services  |
| token_type | Always Bearer |
| refresh_token | token to use when requesting an access token refresh via the [refresh method](le-applications-login-methods-refresh-endpoint.html)  |
| id_token | a JWT asserting the id of the user   |


*Note: The `token_type` is an attribute of the `access_token` and its value is always "Bearer"*

**ID Token structure**

| Attribute name | Description |
| :--- | :--- |
| sub | user ID  |
| aud | ID of the application asking for authorization  |
| iss | Always "Sentinel" |
| iat | JWT creation time. value is seconds since EPOC |
| exp | JWT expiration time. value is seconds since EPOC |
| is_admin| boolean, true if user has admin role |
| is_lpa| boolean, true if user is LPA ||


Example:

```json
    {
      "access_token": "9cf6ee24b6a1031e202f292a0ad20c8f52bfd9f01abc8b9489365995052c6603",
      "token_type": "Bearer",
      "refresh_token": "a3e5c67af5d8f75034cf23aed24bcfb0d397d6896fe25d5043cce0bd5972639e3ad2d198730ab80959ecf7dcc3c54d07cfd4fc22cb4e1f406e673dc814da84133b7f4ff2bfb800128c",
      "id_token": "eyJraWQiOiJpZHRva2VuLTE5LTA4LTE5IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJpc19hZG1pbiI6dHJ1ZSwic3ViIjoiMzU1MjgzMzcxMCIsImF1ZCI6IjVhNTBhNWVhLWM1MjctNDIxYy04YWRhLTg4NDY3ZDMyZjI3ZCIsImlzX2xwYSI6ZmFsc2UsImlzcyI6IlNlbnRpbmVsIiwiZXhwIjoxNTY4MTE2NTY3LCJpYXQiOjE1NjgxMTU5Njd9.F9KBZu6fhyp6lhuGXRpg3LnjCd7PT6GWG_MZu61B7qDZVH2cai8JRGX-j-szEUrm-HTtonUFgxhBi-ZU-Uz-pSRVxtSEuGYIyS4DsPLy1w-Fddd-SHKcywkzTJ4CqDd1dTUSSH4SsMvMNHcc7wtS24Vu5e5OEQYdqN6QGqBEo0s"
    }
```
