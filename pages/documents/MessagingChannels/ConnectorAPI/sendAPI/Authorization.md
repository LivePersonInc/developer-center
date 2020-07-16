---
pagename: Authorization and Authentication
redirect_from:
  - Authorization.html
  - connector-api-authorization-and-authentication-get-appjwt.html
  - connector-api-authorization-and-authentication-get-consumerjws.html
  - connector-api-authorization-and-authentication-authorization-error-responses.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Send API
order: 14
indicator: messaging
permalink: connector-api-send-api-authorization-and-authentication.html
search: include
---

### Get AppJWT

LivePerson uses OAuth 2.0 grant type [Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) in order to allow apps to access the Send API. Sentinel, the responsible authorization server, generates access tokens for any rightfully authorized client. The access token is a [Json Web Token (JWT)](https://tools.ietf.org/html/rfc7519) encoding information about the granted access and must be attached to any follow-up request to the Send API. However, the AppJWT alone is not sufficient to identify a consumer to Conversational Cloud. This means, one has to obtain a ConsumerJWS, too. The following HTTPS request exemplifies how to get an AppJWT:

```http
POST /sentinel/api/account/{accId}/app/token?v=1.0&grant_type=client_credentials HTTP/1.1
Host: {sentinel_service_domain}
Content-Type: application/x-www-form-urlencoded

client_id={client_id}&client_secret={client_secret}
```

The `sentinel_service_domain` can be retrieved using the [LivePerson Domain API](agent-domain-domain-api.html) and searching for `sentinel`. The `accId` is your LivePerson site id. `client_id` and `client_secret` are given to you after [application registration](connectorapi-getting-started.html). The content type is always `application/x-www-form-urlencoded`. Sentinel will answer in accordance with [OAuth 2.0](https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/). For example, a successful response looks as follows:  

```http
HTTP/1.1 200 OK
Date: Mon, 04 Nov 2019 16:00:47 GMT
Content-Type: application/json;charset=utf-8

{ "access_token": "eyJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM", "token_type": "Bearer" }
```

Decoding the `access_token`, using the [Auth0 Debugger](https://jwt.io/), reveals the following header and payload:

```json
{
  "kid": "appjwt-13-05-17",
  "typ": "JWT",
  "alg": "RS256"
}
```

The `kid` (key id) is composed of `appjwt` and the date when it was issued. `typ` defines the type of the token. The type describes the content that is being signed or encrypted. The `alg` property defines the algorithm used to sign or encrypt the content. Here, the content is of type JWT which enforces the content to be structured according to the [JWT standard](https://tools.ietf.org/html/rfc7519). RS256 is a signing algorithm which ensures the data is not tampered. The payload looks as follows:

```json
{
  "aud": "le81823118",
  "azp": "75588e18-0213-4e33-8174-883acac7e3c4",
  "scope": "msg.consumer",
  "iss": "Sentinel",
  "exp": 1524646270,
  "iat": 1524642670
}
```
Property `aud` defines the audience for whom the token is intended or the service for which it is intended. `azp` is the authorized party to which the AppJWT was issued. `scope` defines the part of application the authorized party has access to. `iss` defines the issuer of the token. `exp` is the expiration date and `iat` is the date when the token was issued. `aud` is always the account id, `azp` contains the app install id, `scope` is restricted to consumer, `iss` is Sentinel and `exp` and `iat` contain the corresponding dates. An AppJWT is valid for one hour. For more information about JWTs, please also see this [blog post](https://auth0.com/blog/json-web-token-signing-algorithms-overview/). 

### Get ConsumerJWT

#### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* idp

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

#### Authentication with ConsumerJWS

An **AppJWT** is not sufficient to identify a consumer with Conversational Cloud. With a valid **AppJWT** you can obtain a **ConsumerJWS** (JSON Web Signature):

The **ConsumerJWS** is the unique identifier of the user (consumer) and used by the the connector in conjunction with the **AppJWT** to access Conversational Cloud on behalf of the consumer. Both the **ConsumerJWS** and the **AppJWT** will be passed in the headers of both the [CONVERSATION](sendapi-create.html) and [SEND](sendapi-send.html) requests to Conversational Cloud in order to authenticate the request.

A **ConsumerJWS** can be obtained with the following HTTPS request URI:


| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/consumer?v=1.0|


**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |
| domain | IDP Hostname | string |

**Request Body Example - JSON Payload**

```json
{
	"ext_consumer_id":"John_Doe_facebook12345"
}
```

**Query Parameter**

| Name  | Description | Type/Value | Example |
| :--- | :--- | :--- | --- |
| v | The API version | numeric | 1.0 |


**Request Headers**

| Header | Description | Value/Example |
| :--- | :--- | :--- |
| Content-Type | Used to indicate the media type of the resource | application/json |
| Authorization | Extract the access_token value from the response retrieved by the [Get AppJWT](#get-appjwt) | ayJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM |


#### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | Created |


**Response Example**

```json
{
    "token": "eyJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhY2NvdW50X2lkIjoibGUzMTQ1Nzc4MCIsImV4dF9jb25zdW1lcl9pZCI6InJhbmRvbV9pZDAuMTczMDc3OTY4NzUiLCJscF9jb25zdW1lcl9pZCI6IjI5Y2FmMGMxMTQ4Njk5NmQ5Mzg3ZTNhNDRlYzM0MjI5ZDEyNzMwNGRiNDk2NmQ3NzUyNzE2YmNlYjUzOGZhMjQifQ.TAJgP31rmpHvGKqb_yLP9yzVi_7tu7YoRfoqQ3RfuXGwR_AOV7DWL5Njy1m2YpC5kd9L_oRmytjFwfckwyuFJewwPGYxeZAY1q1jR5tPdb0nsvRyrMdKzO1_AFWUJtD013H9fjyjxHvxwV_Q2xe6Xp00J0T_-I6d6BkUpUFSPww"
}
```

### Error Responses

The SEND API returns an error response for every authorization or authentication failure. Such an error response contains a JSON payload which details the error, error title, details about the error and both an HTTP error code (401) and a specific code for the type of error encountered. For example, if the AppJWT is missing, then the Send API will return the following response:

```json
{
  "kind": "resp",
  "code": 401,
  "body": {
    "title": "AppJWT is missing",
    "details": "AUTHORIZATION header is not present",
    "errorCode": 40104
  },
  "type": ".ReqBody$ErrorResp"
}
```

| Property | Description | Value/Example | Type | Notes |
| :--- | :--- | :--- | :--- | :--- |
| kind | The messaging event kind. | *resp* | string | Always *resp* for response. |
| code | The HTTP status code. | *401* | integer | Always *401* for Unauthorized. |
| body | JSON body detailing the error. | See example *body* above.| Object | See below for the full list of possible values. |
| body.title | Title of the error response. | *AppJWT is missing* | string | See below for the full list of possible values. |
| body.details | Details about the error. | *AUTHORIZATION header is not present* | string | See below for the full list of possible values. |
| body.errorCode | A unique code identifying each possible error response. | *40104* | integer | The first three digits represent the HTTP status code and the last two digits are a changing number. When writing code for error detection and/or recovery, it should rely on the error code as it won't change over time. See below for the full list of possible values. |
| type | The type of the response. | *.ReqBody$ErrorResp* | string | Always *.ReqBody$ErrorResp* for error response. |


#### Response Bodies

Each line in the following table represents one possible response body, including its title, details and errorCode. This means that there are five different error responses in total which can be returned by the API.

| Error Code | Title | Details | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 40001 | Missing parameter | Brand Id is missing | **Note:** This response will also be generated when mandatory claims in the AppJwt are missing. For example, when claim `iss` is not present or does not have the value `Sentinel`. Title and details will be adapted in a future release to reflect missing claims. The error code won't change. | 
| 40102 | Invalid AppJWT  | AppJWT has expired or is invalid | |
| 40103 | Invalid ConsumerJWS  | ConsumerJWS is invalid  | |
| 40104 | ConsumerJWS is missing  | X_ON_BEHALF_HEADER is not present |
| 40105 | AppJWT is missing  | AUTHORIZATION header is not present |

