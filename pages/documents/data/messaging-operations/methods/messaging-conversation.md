---
title: Messaging Conversation
level1: Documents
level2: Data
level3: Messaging Operations API
level4: Methods
order: 10
permalink: data-messaging-operations-messaging-conversation.html

indicator: messaging
---

Retrieves messaging conversation related metrics at the site, skill or agent level.

Messaging Conversation is calculated using bucket aggregation techniques where events are collected into 5 minute buckets, therefore the API might include events which were not in the requested time frame.

**Example**: If the time is now 13:29 and time frame is 7 minutes the API will use 2 buckets: 13:25 and 13:30. In other words in practice the time of the data is not 13:22-13:29 but 13:20-13:29.

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Retrieving Messaging Conversation Data by Account and Skills

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/operations/api/account/{accountID}/msgconversation?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&agentIds=<agentIDs>&interval=<interval size in minutes>&v=<version> |

 - Use POST request to pass a long list of agentIds

| Method | URL | BODY (Json) |
| :------ | :---- | :---- |
| POST | `https://<domain>/operations/api/account/{accountID}/msgconversation` | `{"timeframe":"<timeframe in minutes>" , "skillIds":"<skillIds>", "agentIds":"<comma seperated agent ids list>", "interval":"<interval size in minutes>" , "v":"<version>" }` |

 - Example: `{"timeframe":"1440","v":"1","agentIds":"2152260212,2152260212","interval":"1440","skillIds":"1,2"}`

**URL Parameters**

| Name | Description | Type / Value | Required |
| :----- | :-------------- | :-------------- | :--- |
| timeframe | The time range (in minutes) by which the data can be filtered. Where: end time is the current time and the start time = end time - timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | version of API e.g. v=1 | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skill/s' id/s. For each skill the metrics will be grouped per agent and also in total for all the skills specified. When neither skill nor agent ID are provided, metrics on the response will be calculated at the account level. If there is no data for the specified skill/s an object will be returned with an empty value for key: "metricsPerSkill" and "metricsTotal" key with a map including all metrics valued zero. You can provide one or more skill IDs. Example: skillIds=4,15,3. To retrieve all skills active for the time period use skillIds=all | numeric, separated by commas | optional |
| agentIds | When provided, metrics on the response will be grouped by the requested agent/s' ID/s. The metrics will also be grouped in total for all specified agent/s' id/s. When neither skill nor agent ID are provided, metrics on the response will be calculated at the account level. If there is no data for the specified agent/s an object will be returned with an empty value for key: "metricsPerAgent" and "metricsTotal" key with a map including all metrics valued at zero. You can provide one or more skill IDs. Example: agentIds=4,15,3. To retrieve all skills active for the time period use agentIds=all | numeric, separated by commas | optional |
| interval | Interval size in minutes. When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame and also a divisor of the time frame. Example: timeframe=60&interval=30 (correct), timeframe=60&interval=61 (bad request), timeframe=60&interval=31 (bad request) | numeric | optional |

**Response Body**

Request by skillIds=all & agent id=2 (there is data only for skill=3)

```json
{
"skillsMetricsPerAgent": {
  "metricsPerSkill": {
    "3": {
      "metricsPerAgent": {
        "2": {
          "resolvedConversations_byCCP": 21,
          "resolvedConversations_byConsumer": 41,
          "resolvedConversations_bySystem": 11,
          "totalResolvedConversations": 103,
          "totalHandlingTime_resolvedConversations_byCCP": 426,
          "totalHandlingTime_resolvedConversations_byConsumer": 1411,
          "totalHandlingTime_resolvedConversations_bySystem": 215,
          "totalHandlingTime_resolvedConversations": 3248,
          "avgTime_resolvedConversations_byCCP": 20.285715,
          "avgTime_resolvedConversations_byConsumer": 34.414635,
          "avgTime_resolvedConversations_bySystem": 19.545454,
          "avgTime_resolvedConversations": 31.533981
        },
        "6": {
          "resolvedConversations_byCCP": 0,
          "resolvedConversations_byConsumer": 0,
          "resolvedConversations_bySystem": 215,
          "totalResolvedConversations": 0,
          "totalHandlingTime_resolvedConversations_byCCP": 0,
          "totalHandlingTime_resolvedConversations_byConsumer": 0,
          "totalHandlingTime_resolvedConversations_bySystem": 0,
          "totalHandlingTime_resolvedConversations": 0,
          "avgTime_resolvedConversations_byCCP": 0,
          "avgTime_resolvedConversations_byConsumer": 0,
          "avgTime_resolvedConversations_bySystem": 0,
          "avgTime_resolvedConversations": 0
        }
      },
      "metricsTotals": {
        "resolvedConversations_byCCP": 21,
        "resolvedConversations_byConsumer": 41,
        "resolvedConversations_bySystem": 226,
        "totalResolvedConversations": 103,
        "totalHandlingTime_resolvedConversations_byCCP": 426,
        "totalHandlingTime_resolvedConversations_byConsumer": 1411,
        "totalHandlingTime_resolvedConversations_bySystem": 215,
        "totalHandlingTime_resolvedConversations": 3248,
        "avgTime_resolvedConversations_byCCP": 20.285715,
        "avgTime_resolvedConversations_byConsumer": 34.414635,
        "avgTime_resolvedConversations_bySystem": 0.95132744,
        "avgTime_resolvedConversations": 31.533981
      }
    }
  },
  "metricsTotals": {
    "resolvedConversations_byCCP": 21,
    "resolvedConversations_byConsumer": 41,
    "resolvedConversations_bySystem": 226,
    "totalResolvedConversations": 103,
    "totalHandlingTime_resolvedConversations_byCCP": 426,
    "totalHandlingTime_resolvedConversations_byConsumer": 1411,
    "totalHandlingTime_resolvedConversations_bySystem": 215,
    "totalHandlingTime_resolvedConversations": 3248,
    "avgTime_resolvedConversations_byCCP": 20.285715,
    "avgTime_resolvedConversations_byConsumer": 34.414635,
    "avgTime_resolvedConversations_bySystem": 0.95132744,
    "avgTime_resolvedConversations": 31.533981
  }
},
"agentsMetrics": {
  "metricsPerAgent": {
    "2": {
      "resolvedConversations_byCCP": 21,
      "resolvedConversations_byConsumer": 41,
      "resolvedConversations_bySystem": 11,
      "totalResolvedConversations": 103,
      "totalHandlingTime_resolvedConversations_byCCP": 426,
      "totalHandlingTime_resolvedConversations_byConsumer": 1411,
      "totalHandlingTime_resolvedConversations_bySystem": 215,
      "totalHandlingTime_resolvedConversations": 3248,
      "avgTime_resolvedConversations_byCCP": 20.285715,
      "avgTime_resolvedConversations_byConsumer": 34.414635,
      "avgTime_resolvedConversations_bySystem": 19.545454,
      "avgTime_resolvedConversations": 31.533981
    }
  },
  "metricsTotals": {
    "resolvedConversations_byCCP": 21,
    "resolvedConversations_byConsumer": 41,
    "resolvedConversations_bySystem": 11,
    "totalResolvedConversations": 103,
    "totalHandlingTime_resolvedConversations_byCCP": 426,
    "totalHandlingTime_resolvedConversations_byConsumer": 1411,
    "totalHandlingTime_resolvedConversations_bySystem": 215,
    "totalHandlingTime_resolvedConversations": 3248,
    "avgTime_resolvedConversations_byCCP": 20.285715,
    "avgTime_resolvedConversations_byConsumer": 34.414635,
    "avgTime_resolvedConversations_bySystem": 19.545454,
    "avgTime_resolvedConversations": 31.533981
  }
}
}
```

**Elements in the Response**

| Name | Description | Type / Value |
| :----- | :------------- | :-------------- |
| skillsMetrics | An object that represent the skills' data. It includes two elements: <br> •   metricsPerSkill - A list of skill/s' ID/s that were sent in the request with their metrics data. The skill's data is returned per agent ID and totals for the skill. If there is no data for any of the skill/s then this member will have an empty object as value. If there is no data for a specific skill then it won't be included in this list. <br> •   metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s this object will still include all metrics with value of zero. When interval size is provided in the request, the response will have the skillsMetrics element in each interval and in addition there will also be a skillsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| agentsMetrics | An object that represent the agents' data. It includes two elements: <br> •   metricsPerAgent - A list of agent/s' id/s that were sent in the request with their metrics data. If there is no data for any of the agent/s then this member will have an empty object as value. If there is no data for a specific agent then it won't be included in this list. <br> •   metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s this object will still include all metrics with value of zero. When interval size is provided in the request, the response will have the agentsMetrics element in each interval and in addition there will also be an agentsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| metricsTotals | This member will be returned in separate of skill/agent element only when no skill nor agent id was requested. If any ID was requested then it would be returned as part of the relevant skill/agent metrics element. Note: Totals may not add up due to rounding differences. | element |
| skill id | When skill Ids value(/s) provided: The skill Id. | long |
| agent id | When agent Ids value(/s) provided: The agent Id. | long |
| timestamp | When interval size is provided in the request, the response will be aggregated by intervals. The time stamp is the UTC time stamp in milliseconds representing the end time of the interval. Example: Interval size: 30 min. Interval start and end time: 26/03/2014 07:30:00 - 26/03/2014 08:00:00. Timestamp: 1395820800000. Note that intervals are rounded up to 5 minutes. Because of this: <br> 1. The latest interval timestamp will be rounded up. Example: Now: 08:07. Last interval end time: 8:10 <br> 2.  The earliest interval will include only the reminder on the requested timeframe and will have only 5 minutes data.  Example: Now: 8:07. <br> Request parameters: timeframe=20&interval=10 (20 minutes in 10 minutes intervals) Response from and to time: 7:45 - 8:07 --> 22 minutes * See note in the API description section about timeframe rounding. Response intervals: 8:00 - 8:10 (10 minutes. actual 7 minutes because now is 8:07) 7:50 - 8:00 (10 minutes) 7:45 - 7:50 (5 minutes) | long |
| resolvedConversations_byCCP | The number of conversations that were marked as resolved by the CCP in the current interval/time frame. | long |
| resolvedConversations_byConsumer | The number of conversations that were marked as resolved by the consumer in the current interval/time frame. | long |
| resolvedConversations_bySystem | The number of conversations that were marked as resolved by the system (ie: by timeout) in the current interval/timeframe. | long |
| totalResolvedConversations | The total number of conversations that were marked as resolved in the current interval/timeframe. | long |
| totalHandlingTime_resolvedConversationsThetotalbyCCP | Handling time of conversations that were marked as resolved by the CCP in the current interval/time frame. | long |
| totalHandlingTime_resolvedConversationsThetotalbyConsumer | Handling time of conversations that were marked as resolved by the consumer in the current interval/time frame. | long |
| totalHandlingTime_resolvedConversationsThetotalbySystem | Handling time of conversations that were marked as resolved by the system (ie: by timeout) in the current interval/time frame. | long |
| totalHandlingTime_resolvedConversations | The total handling time of conversations that were marked as resolved in the current interval/time frame. | long |
| avgTime_resolvedConversations_byCCP | The average handling time of conversations that were marked as resolved by the CCP in the current interval/time frame. | float |
| avgTime_resolvedConversations_byConsumer | The average handling time of conversations that were marked as resolved by the consumer in the current interval/time frame. | float |
| avgTime_resolvedConversations_bySystem | The average handling time of conversations that were marked as resolved by the system (ie: by timeout) in the current interval/time frame. | float |
| avgTime_resolvedConversations | The average handling time of conversations that were marked as resolved in the current interval/time frame. | float |

**Possible Response Codes**

| Code | Response |
| :----- | :--------- |
| 200 | OK - Successfully retrieved the data. |
| 400 | Bad request - Problem with body or query parameters. |
| 401 | Unauthorized - Bad Authentication (invalid site or agent). |
| 429 | Request blocked due to rate limiting |
