---
title: Messaging Estimated Wait Time
level1:
level2: Data
level3: Messaging Operations API
level4: Methods
order: 40
permalink: data-messaging-operations-messaging-estimated-wait-time.html

indicator: messaging
---

Retrieves messaging estimated wait time at the skill level. The estimated wait time is the estimated time that will elapse before a conversation entering the queue will first be answered by an agent.

Messaging estimated wait time is calculated every 10 seconds, therefore new data will only be available every 10 seconds.

### Retrieving Messaging Estimated Wait Time Data by Account and Skills

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/lp-messaging-ewt-app/api/account/{accountID}/ewt?skills=<skillIDs>&v=<version> |

 - Note: Data for at most 300 skills will be returned.

**URL Parameters**

| Name | Description | Type / Value | Required |
| :----- | :-------------- | :-------------- | :--- |
| v | version of API e.g. v=1 | numeric | default: 1 |
| skills | When provided, the response will contain estimated wait time data for the requested skill Id/s. When not provided, the response will contain estimated wait time data for all skills of the account. If there is no data for the specified skill/s an object will be returned with value -1 for key: "ewt". You can provide one or more skill Ids. If you provide several skill IDs, they must be comma separated. Example: skills=4,15,3. | numeric, separated by commas | optional |

**Response Body**

This is an example request which contains information for two skills, skills=2,3 where there is data only for skill "3".

    {
        "ewtResponses": [
            {
                "skillId": 2,
                "ewt": -1,
                "timestamp": 1526466893703
            },
            {
                "skillId": 3,
                "ewt": 10,
                "timestamp": 1526466893703
            }
        ]
    }

 - Note: ewtResponses list will contain at most 300 elements.

**Elements in the Response**

| Name | Description | Type / Value |
| :----- | :------------- | :-------------- |
| ewtResponses | A list that contains elements which represent skills' data. | element |
| skillId | The skill Id. | long |
| ewt | The estimated wait time in seconds. | long |
| timestamp | The time of the response in UTC time stamp in milliseconds. | long |

**Possible Response Codes**

| Code | Response |
| :----- | :--------- |
| 200 | OK - Successfully retrieved the data. |
| 400 | Bad request - Problem with body or query parameters. |
| 401 | Unauthorized - Bad Authentication (invalid site or agent). |
| 403 | Forbidden - Bad Authorization (invalid permissions). |
| 500 | Internal Server Error - Please try again after the time specified in the response has passed. |
