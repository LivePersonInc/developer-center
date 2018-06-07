---
title: Get ConsumerJWS
level1:
level2: Consumer Experience
level3: Connector API
level4: Authorization and Authentication
order: 5
indicator: both
permalink: Create_ConsumerJWS.html
search: include
---

### Retrieve your domain

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* idp

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Authentication with ConsumerJWS

An **AppJWT** is not sufficient to identify a consumer with LiveEngage. With a valid **AppJWT** you can obtain a **ConsumerJWS** (Java Web Signature):

The **ConsumerJWS** is the unique identifier of the user (consumer) and used by the the connector in conjunction with the **AppJWT** to access LiveEngage on behalf of the consumer. Both the **ConsumerJWS** and the **AppJWT** will be passed in the headers of both the [CONVERSATION](sendapi-create.html){:target="_blank"} and [SEND](sendapi-send.html){:target="_blank"} requests to LiveEngage in order to authenticate the request.

A **ConsumerJWS** can be obtained with the following HTTPS request URI:


| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/consumer?v=1.0|


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
| Authorization | {AppJWT} | "access_token": "ayJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsZTgxODIzMTE4IiwiYXpwIjoiNzU1ODhlMTgtMDIxMy00ZTMzLTgxNzQtODgzYWNhYzdlM2M0Iiwic2NvcGUiOiJtc2cuY29uc3VtZXIiLCJpc3MiOiJTZW50aW5lbCIsImV4cCI6MTUyNDY0NjI3MCwiaWF0IjoxNTI0NjQyNjcwfQ.aC1EbVQDIKJkrMgfoqhDqo5KZVMILTGP5UnK_4lUJQIfpFcrymvQKU9E6zt_WDhWmM2SOOcr1sz4u5xVZ9rMWZciDW_9KofEM2NDgVw1EVBxAIgGYeO0sbE9o--HKjk9DHZvukJkQFhYaHMDnj6ay4BNUqTJpDn6y3XQY7eh7rM", "token_type": "Bearer" |


### Response

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
