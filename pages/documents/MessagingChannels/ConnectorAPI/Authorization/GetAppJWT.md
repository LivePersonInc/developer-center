---
pagename: Get AppJWT
redirect_from:
  - Create_AppJWT.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Authorization and Authentication
order: 14
indicator: messaging
permalink: connector-api

-authorization-and-authentication-get-appjwt.html
search: include
---
LivePerson uses OAuth 2.0 grant type [Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) in order to allow apps to access the Send API. Sentinel, the responsible authorization server, generates access tokens for any rightfully authorized client. The access token is a [Json Web Token (JWT)](https://tools.ietf.org/html/rfc7519) encoding information about the granted access and must be attached to any follow-up request to the Send API. However, the AppJWT alone is not sufficient to identify a consumer to LiveEngage. This means, one has to obtain a [ConsumerJWS](Create_ConsumerJWS.html), too. The following HTTPS request exemplifies how to get an AppJWT:

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
