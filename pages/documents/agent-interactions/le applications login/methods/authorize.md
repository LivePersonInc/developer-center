---
title: Authorization Request
Keywords:
level1: Documents
level2: Agent Interactions
level3: LE Applications Authorization
level4: Methods
order: 10
permalink: le-applications-authorization-methods-authorization-request.html
indicator: both
---

### Overview

Users that use your application are first redirected to the LivePerson Identity Service in order to receive an authorization grant in the form of code from our Identity Service. The code is appended to the redirect URL as a parameter (see example below). This code is later used in the [token request] (token.html){:target="_blank"} in order to receive an access token that the application can use in order to interact with LE services.

This call should be made when the application does not posses a valid access token or refresh token.

### Request

| Method | URL |
| :--- | :--- |
| GET |  https://{domain}/sentinel/api/account/{accountid}/authorize?v=1.0&response_type=code&redirect_uri={application callback URL}&client_id={app install id}&state={application state} |

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
| client_id | Installation id provided after application registration (see the Overview for more info)  | String| Required |  |
| redirect_uri | The client's redirection endpoint. The redirection's end point is provided by the application during the application registration (see the Overview for more info)| String| Optional |Note that according to OAUTH 2.0 rfc, if only one redirection endpoint is provided in the application registration, this parameter is optional. However if multiple redirection endpoints were configured in the registration, then this field is **required**|
| state | An arbitrary value used by the client to maintain state between the request and callback. You can use this parameter to help your application identify the authorize request and its state when the user returns to the application | String| Optional |  |

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 302 | FOUND - redirect to either: a login page, if the user does not already have a session on the device, back to the application with code, back to the application with error code. See Note below for more info|
| 400 | Bad request - Problem with query parameters. |
| 401 | Unauthorized - Bad Authentication (invalid site or application id). |
| 500 | Internal server error. |

**Note**:

In case the user does not have an active session, they will be redirected to the login page in order to authenticate. After they login successfully, they will then be redirected back to the application's redirect_uri with the code from the LivePerson Identity Service and with the `state` parameter (optional). In case the user is already authenticated, they will be redirected directly back to the application credirect_uri, without passing through the login page.

In case the request encountered an error, if account id, client id and redirection URL are valid, the user will be redirected back to
the application with error and error description parameters.

An example of a successful redirection to application follows below. Note the `code` parameter appended to the URL:

```
HTTP/1.1 302 Found
Location: https://le-app.com/cb?code=SplxlOBeZQQYbYS6WxSbIA&state=xyz
```
