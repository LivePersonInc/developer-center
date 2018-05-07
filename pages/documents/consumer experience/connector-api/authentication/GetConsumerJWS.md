---
title: Get ConsumerJWS
level1:
level2: Consumer Experience
level3: Connector API
level4: Authentication
order: 5
indicator: both
permalink: Create_ConsumerJWS.html
search: include
---

### Retrieve your domain

1. **Retrieve your domain**. Use the[LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* idp

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Authentication with AppJWT

An **AppJWT** is not sufficient to identify a consumer with the Messaging service. With a valid AppJWT you can obtain a consumer token (Java Web Signature, JWS):

The ConsumerJWS is the unique identifier of the user and used by the the connector in conjunction with the AppJWT to access LiveEngage on Behalf of the consumer.

A ConsumerJWS can be obtained with the following HTTPS request:


| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/consumer?v=1.0|


**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |
| domain | IDP Hostname | string |

**Json payload**

{% raw %}
```json
{
	"ext_consumer_id":"{ConsumerID, e.g. random_id0.80668702615}"
}
```
{% endraw %}



**Query Parameter**

| Name  | Description | Type/Value | Example |
| :--- | :--- | :--- | --- |
| v | The API version | numeric | 1.0 |


**Request Headers**

| Header | Description |
| :--- | :--- |
| Content-Type | application/x-www-form-urlencoded |
| Authorization | {AppJWT} |


### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | Created |


**Response Example**

{% raw %}
```json
{
    "token": "eyJraWQiOiJhcHBqd3QtMTMtMDUtMTciLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhY2NvdW50X2lkIjoibGUzMTQ1Nzc4MCIsImV4dF9jb25zdW1lcl9pZCI6InJhbmRvbV9pZDAuMTczMDc3OTY4NzUiLCJscF9jb25zdW1lcl9pZCI6IjI5Y2FmMGMxMTQ4Njk5NmQ5Mzg3ZTNhNDRlYzM0MjI5ZDEyNzMwNGRiNDk2NmQ3NzUyNzE2YmNlYjUzOGZhMjQifQ.TAJgP31rmpHvGKqb_yLP9yzVi_7tu7YoRfoqQ3RfuXGwR_AOV7DWL5Njy1m2YpC5kd9L_oRmytjFwfckwyuFJewwPGYxeZAY1q1jR5tPdb0nsvRyrMdKzO1_AFWUJtD013H9fjyjxHvxwV_Q2xe6Xp00J0T_-I6d6BkUpUFSPww"
}
```
{% endraw %}
