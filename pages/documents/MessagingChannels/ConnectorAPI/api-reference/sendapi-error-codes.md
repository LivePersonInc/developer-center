---
pagename: Authorization Error Responses
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Authorization and Authentication
indicator: messaging
permalink: connector-api-authorization-and-authentication-authorization-error-responses.html
---
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
| body.errorCode | A unique code identifying each possible error response. | *40104* | integer | The first three digits represent the HTTP status code and the last two digits are a changing number. See below for the full list of possible values. |
| type | The type of the response. | *.ReqBody$ErrorResp* | string | Always *.ReqBody$ErrorResp* for error response. |


### Response Bodies

Each line in the following table represents one possible response body, including its title, details and errorCode. This means that there are five different error responses in total which can be returned by the API.

| Error Code | Title | Details | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 40001 | Missing parameter | Brand Id is missing | **Note:** Title and details are misleading. This response will also be generated when mandatory claims in the AppJwt are missing. For example, when claim `iss` is not present or does not have the value `Sentinel`. In the future, title and details will change to reflect missing claims. Your code is saved when it relies on the error code and does not parse the title and/or details. | 
| 40102 | Invalid AppJWT  | AppJWT has expired or is invalid | |
| 40103 | Invalid ConsumerJWS  | ConsumerJWS is invalid  | |
| 40104 | ConsumerJWS is missing  | X_ON_BEHALF_HEADER is not present |
| 40105 | AppJWT is missing  | AUTHORIZATION header is not present |
