---
title: Major Components
level1: Documents
level2: Guides
level3: Authentication

permalink: guides-authentication-majorcomponents.html
order: 2
indicator: both
---

### Consumer Mobile App

The customer mobile app is responsible for user authentication against the brand servers. In order to use LivePerson services, it will use the LivePerson Messaging SDK. Upon opening the communication socket by the SDK, the LivePerson backend detects whether the account requires authentication. If authentication is required, the SDK will ask the mobile app to supply an OAuth 2.0 code or JWT (depending on the specific flow). The specific way that this response is generated is dependent on the brand’s decisions. A common implementation method is to request the customer server to generate such a response based on the user credentials that were already given during the login phase.

### Customer Web App

The customer web app is very similar to the mobile app, except that it runs on a browser. It embeds the LivePerson Web SDK and should act in the same way as described above for the mobile app. The web app can display the embedded window originated by the LivePerson SDK, or open a LiveEngage popup window to interact with the consumer. When the LiveEngage embedded window is set to pop-out mode, the authentication must take place using a page redirect mechanism.

### Customer Token Endpoint (Mandatory for Code Flow)

This endpoint implements the standard OpenID Connect [token endpoint](http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint){:target="_blank"}. This API accepts a valid OAuth 2.0 code along with the clientID and secret information. It should then respond with validation approval that contains some of the user’s basic information, encoded and signed as a [JWT](https://tools.ietf.org/html/rfc7519){:target="_blank"} and access_token for further inquiries.

**Example Request**:

```
POST /oauth2/v3/token HTTP/1.1
Host: www.customer.com
Content-Type: application/x-www-form-urlencoded

code=3shshs92jsls/snxbxismNSsgHSVb&
client_id=8819981768.lp-integration.customer.com&
client_secret=fafadshdjkf943yehsjhed&
redirect_uri=https://liveperson.net/oauth2/code_redirect&
grant_type=authorization_code
```

**Example Response**:

```json
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

{
   "access_token": "SlAV32hkKG",
   "token_type": "Bearer",
   "expires_in": 3600,
   "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazcifQ.ewogImlzc
     yI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5
     NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZ
     fV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5Nz
     AKfQ.ggW8hZ1EuVLuxNuuIJKX_V8a_OMXzR0EHR9R6jgdqrOOF4daGU96Sr_P6q
     Jp6IcmD3HP99Obi1PRs-cwh3LO-p146waJ8IhehcwL7F09JdijmBqkvPeB2T9CJ
     NqeGpe-gccMg4vfKjkM8FcGvnzZUN4_KSP0aAp1tOJ1zZwgjxqGByKHiOtX7Tpd
     QyHE5lcMiKPXfEIQILVq0pc_E2DzL7emopWoaoZTF_m0_N0YzFC6g6EJbOEoRoS
     K5hoDalrcvRYLSrQAZZKflyuVCyixEoV9GfNQC3_osjzw2PAithfubEEBLuVVk4
     XUVrWOLrLl0nx7RkKU8NXNHq-rvKMzqg"
}

```

The id_token in the response is standard JWT and can be translated to the unpacked form. Here is an example of the unpacked id_token:

```json
{
   "iss": "www.customer.com",			# issuer
   "sub": "fdskjfd-user-id-3773hshshs", 	# user id
   "exp": "1353801026",			      # expiration timestamp
   "iat": "1353601026",			      	# token issuing  timestamp
   "email": "user@gmail.com",
   "picture": "http://www.customer.com/pics/fdskjfd-user-id-3773hshshs"
}
```

### LivePerson SDK

This is a LivePerson layer embedded into the customer app (mobile/web). It mediates between the app and the LivePerson Service and provides the interaction conversation UI. This layer calls the mobile app to supply an OAuth 2.0 code whenever the LivePerson Service needs it.

### LivePerson Service

This is the LivePerson Service used for interaction between the customer agent and the consumer. In the authentication flow, this server consumes the OAuth 2.0 code and then exchanges it with the customer token endpoint for access_token and id_token using the token endpoint. The service might also ask the userinfo endpoint for complementary information using the access_token.
