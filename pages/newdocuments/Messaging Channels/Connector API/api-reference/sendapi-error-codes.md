---
pagename: Error Responses
redirect_from:
  - sendapi-error-responses.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: API Reference
order: 12
indicator: messaging
permalink: connector-api-api-reference-error-responses.html
search: exclude
---

The API returns an error response whenever authentication or authorization failed. Such an error response contains a JSON payload which details on the reason. For example, if the AppJWT is missing then the Send API will return the following response.

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
| code | The HTTP status code. | *401* | string | Always *401* for Unauthorized. |
| body | JSON body detailing on the error. | See example *body*.| string | See below for more possibilities. |
| body.title | Title of the error response. | *AppJWT is missing* | string | See below for more possibilities. |
| body.details | Details about the error. | *AUTHORIZATION header is not present* | string | See below for more possibilities. |
| body.errorCode | A unique code identifying each possible error response. | *40104* | string | The first three digits represent the HTTP status code and the last two digits are a running number. See below for more possibilities. |
| type | The type of the response. | *.ReqBody$ErrorResp* | string | Always *.ReqBody$ErrorResp* for error response. |


### Response Bodies

Each line in the following table represents one possible response body. This means, there are four different error responses  which can be returned by the API.

| Error Code | Title | Details | 
| :--- | :--- | :--- | 
| 40102 | Invalid AppJWT  | AppJWT has expired or is invalid |
| 40103 | Invalid ConsumerJWS  | ConsumerJWS is invalid  |
| 40104 | ConsumerJWS is missing  | X_ON_BEHALF_HEADER is not present |
| 40105 | AppJWT is missing  | AUTHORIZATION header is not present |