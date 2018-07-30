---
title: User Login
Keywords:
level1: Documents
level2: Agent Interactions
level3: Login Service API
level4: Methods

order: 10
permalink: authorize.html

indicator: both
---

### Request

| Method | URL |
| :--- | :--- |
| POST |  https://{domain}/sentinel/api/account/{accountid}/authorize?v=1.0&response_type=code&redirect_uri={application callback URL}&client_id={app install id}&state={application state}

**Path Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| domain | Sentinel Hostname | String | Required |  |
| accountid | LivePerson site ID | String| Required |  |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | number| Required | Default Value: 1.0 |
| response_type | The grant type desired by the client  | String| Required | value must be set to "code" |
| client_id | Installation id provided after application registration  | String| Required |  |
| redirect_uri | The client's redirection endpoint. The redirection's end point is provided by the application during the application registration| String| Required |Note that 
according to OAUTH 2.0 rfc, if only one redirection endpoint is provided in the application registration, this parameter is optional. However if more than
one redirection endpoint is provided in the registration, then this parameter is required|
| state | An opaque value used by the client to maintain state between the request and callback | String| Optional |  |

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 302 | FOUND - redirect to either: login page, if the user does not already have a session on the device, back to the application with code,
back to the application with error code. See Note|
| 400 | Bad request - Problem query parameters. |
| 401  | Unauthorized - Bad Authentication (invalid site or application id). |
| 500 | Internal server error. |

**Response cookies**

| Cookie | Description |
| :--- | :--- |
| ibs_id | a short lived (10 minutes cookie) cookie for maintaing the authorization state |

*Note: In case the user does not have an active session, he/she will be redirected to the login page in order to authenticate 
and create a session, then they will be redirected back to the application redirection callback with code and with state, if one was provided in the request. In case the user
already has an existing session he/she will be redirected back to the application callback url, without passing through the login
page first.

An example to successful redirection to application:
HTTP/1.1 302 Found
Location: https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA
               &state=xyz

In case the request encountered an error, if account id, client id and redirection URL are valid, the user will be redirected back to
the application with error and error description parameters
*
