---
pagename: Token Revocation Request
Keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Authorizing Conversational Cloud Applications
subfoldername: Methods
order: 12
permalink: authorizing-conversational-cloud-applications-methods-token-revocation-request.html
indicator: both
redirect_from: 
  - authorizing-liveengage-applications-methods-token-revocation-request.html
---

### Overview

OAuth is often used to manage users' log in to a certain site or application at LivePerson. If a complete logout from **all** LivePerson applications is required, this revocation mechanism should be used during the end-user logout proccess. This revocation request will invalidate the access token.

**Note**: Using this method will invalidate the user's session in all LivePerson applications.

### Request

| Method | URL |
| :--- | :--- |
| POST |  https://{domain}/sentinel/api/account/{accountid}/token/revoke?v1.0 |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | number| Required | Default Value: 1.0 |


**Path Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| domain | Sentinel hostname | String | Required | |
| accountid | LivePerson site ID | String | Required | |


**Headers**

| Header |  Description |
| :--- | :--- |
| Content-Type | application/x-www-form-urlencoded;charset=UTF-8|

**Body**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| token | refresh token that was supplied in the application previous token or refresh request | String| Required |  |
| client_id | Application oAuth2.0 client_id. provided after application registration | String| Required |  |
| client_secret | Application oAuth2.0 secret provided after application registration | String| Required |  |

**Example**:

```sh
client_id=d51186e9-e1a1-421e-8b1d-161ade532012&client_secret=r7ufeqb32ore583r6ljmkm72i9&token=8fb45b320af23091091b9c163a29a73e70bbd03ddbe6bcc832ecb2ffb9829d03a4d9f82c0f548afded21ab42a6965e7107ae5cc23dd2c2d16de1843814046cf341c24a14631c0f74bccf41339d7efae39cb19ffa4bf6886e919e185f8a517fae6982150a06346c7e12e00796aad03bc2f65f28ae7cabc03f2fea1047b41ef3d30f6c99c0f05ad61e8f39e0a805c04fefb3981fce96801d822c0057e7bff68db7544aa067e659b20a7919848aee7c2830a35466556857a3007b23501fdcb00722004dc50d7b22cac50dce564be5784bf4f530fe73b204e7bbb24fdac94c9a20bff95c52208ab64ab1f03a246bd64a9893460ee64e8f21cf88705c51e6f3ae13f870fe4ea10cd2217f808f999c3026931c

```

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK - request succeeded.  |
| 400 | Bad request - Problem with query parameters. |
| 401 | Unauthorized - Bad Authentication (invalid site or application id). |
| 500 | Internal server error. |

