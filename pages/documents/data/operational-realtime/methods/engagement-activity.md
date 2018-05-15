---
title: Engagement Activity
level1: Documents
level2: Data
level3: Operational Realtime API
level4: Methods
order: 20
permalink: data-operational-realtime-engagement-activity.html

indicator: chat
---

Retrieves engagement activity-related metrics at the account, skill, or agent level.

*Note: Engagement Activity is calculated using bucket-based aggregation techniques, where events are collected into 5 minute buckets. For this reason, events may be included that took place outside of the requested time frame.*

*Example: If the time now is 13:29 and time frame is 7 minutes, the API will use 2 buckets: 13:25 and 13:30. In other words, in practice the time of the data is not 13:22-13:29, but 13:20-13:29.*

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Request

| Method | URL |
| :-------- | :----- |
| GET | `https://<domain>/operations/api/account/{accountID}/engactivity?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&agentIds=<agentIDs>&interval=<interval size in minutes>&v=<version>` |

**URL Parameters**

| Name | Description | Type / Value | Required |
| :------ | :------------ | :--------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. <br> Where end time = current time, and start time = end time - timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skill/s' id/s. For each skill, the metrics will be grouped per agent and also in total for all the skills specified. When neither skill id nor agent ID are provided, metrics on the response will be calculated at the account level. <br> If there is no data for the specified skill/s, an object will be returned with an empty value for key: "metricsPerSkill" and "metricsTotal" key, with a map including all metrics valued zero. You can provide one or more skill IDs. <br> Example: skillIds=4,15,3. <br> To retrieve all skills active for the time period, use skillIds=all. | numeric, comma separated | optional |
| agentIds | When provided, metrics on the response will be grouped by the requested agent/s' ID/s. The metrics will also be grouped in total for all specified agent/s' id/s. When neither skill id nor agent ID are provided, metrics on the response will be calculated at the account level. <br> If there is no data for the specified agent/s, an object will be returned with an empty value for key: "metricsPerAgent" and "metricsTotal" key, with a map including all metrics valued zero. You can provide one or more skillIDs. <br> Example: agentIds=4,15,3. <br> To retrieve all skills active for the time period, use agentIds=all. | numeric, comma separated | optional |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame, and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |

### Response

**JSON Example**

Request by skillIds=2 (no interval, the data is for agentID=3).

    {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {  
    "2": {  
    "metricsPerAgent": {  
    "3": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 1,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 5,  
    "connectedEngagements": 2  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 1,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 5,  
    "connectedEngagements": 2  
    }  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 1,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 5,  
    "connectedEngagements": 2  
    }  
    }  
    }  

Request by skillIds=all and agentIds=3 (there is data only for skill=2).

    {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {  
    "2": {  
    "metricsPerAgent": {  
    "3": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    },  
    "agentsMetrics": {  
    "metricsPerAgent": {  
    "3": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  
    }  

Request with no skillId / agentId (there is some data).

    {  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }

Request with skillId and agentId but there is no data for the specified IDs.

    {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    },  
    "agentsMetrics": {  
    "metricsPerAgent": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  

Request with agentId = 2, timeframe=1200 and interval = 600.

    {  
    "metricsByIntervals": [  
    {  
    "timestamp": 1412680800000,  
    "metricsData": {  
    "agentsMetrics": {  
    "metricsPerAgent": {  
    "2": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  
    }  
    },  
    {  
    "timestamp": 1412644800000,  
    "metricsData": {  
    "agentsMetrics": {  
    "metricsPerAgent": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    },  
    {  
    "timestamp": 1412608800000,  
    "metricsData": {  
    "agentsMetrics": {  
    "metricsPerAgent": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    }  
    ],  
    "agentsMetrics": {  
    "metricsPerAgent": {  
    "2": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    },  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  
    }  

Request with skillId (no data), timeframe = 1200 and interval=600.

    {  
    "metricsByIntervals": [  
    {  
    "timestamp": 1412680800000,  
    "metricsData": {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    },  
    {  
    "timestamp": 1412644800000,  
    "metricsData": {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    },  
    {  
    "timestamp": 1412608800000,  
    "metricsData": {  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    }  
    ],  
    "skillsMetricsPerAgent": {  
    "metricsPerSkill": {},  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  

Request with no skill/agent, there is some data: timeframe=1200 and interval=600.

    {  
    "metricsByIntervals": [  
    {  
    "timestamp": 1412680800000,  
    "metricsData": {  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  
    },  
    {  
    "timestamp": 1412644800000,  
    "metricsData": {  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    },  
    {  
    "timestamp": 1412608800000,  
    "metricsData": {  
    "metricsTotals": {  
    "totalInteractiveChats": 0,  
    "totalNonInteractiveChats": 0,  
    "totalHandlingTime": 0,  
    "nonInteractiveTotalHandlingTime": 0,  
    "connectedEngagements": 0  
    }  
    }  
    }  
    ],  
    "metricsTotals": {  
    "totalInteractiveChats": 1,  
    "totalNonInteractiveChats": 2,  
    "totalHandlingTime": 12,  
    "nonInteractiveTotalHandlingTime": 13,  
    "connectedEngagements": 3  
    }  
    }  

**Elements in the Response**

| Name | Description | Type/Value |
| :----- | :------------- | :-------------- |
| skillsMetrics | An object that represent the skills' data. It includes two members: <br> •    metricsPerSkill - A list of skill/s' ID/s that were sent in the request with their metrics data. The skill's data is returned per agent ID and totals for the skill. If there is no data for any skill/s, this member will have an empty object as value. If there is no data for a specific skill, it won't be included in this list. <br> •   metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s, this object will still include all metrics with value zero. When interval size is provided in the request, the response will have the skillsMetrics element in each interval. There will also be a skillsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| agentsMetrics | An object that represent the agents' data. It includes two members: <br> •    metricsPerAgent - A list of agent/s' id/s that were sent in the request with their metrics data. If there is no data for any agent/s, this member will have an empty object as value. If there is no data for a specific agent, it will not be included in this list. <br> • metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s, this object will still include all metrics with value zero. When interval size is provided in the request, the response will have the agentsMetrics element in each interval. There will also be an agentsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| metricsTotals | This member will be returned separately from the skill/agent element only when no skill id or agent id was requested. If any ID was requested, it will be returned as part of the relevant skill/agent metrics element. Note: Totals may not add up due to rounding differences. | element |
| skill id When skill Id value(/s) provided : The skill Id. | long |
| agent id | When agent Id value(/s) provided : The agent Id. | long |
| timestamp | When interval size is provided in the request, the response will be aggregated by intervals. The timestamp is the UTC timestamp in milliseconds representing the end time of the interval. Example: Interval size: 30 min. Interval start and end time: 26/03/2014 07:30:00 - 26/03/2014 08:00:00. Timestamp: 1395820800000. Intervals are rounded up to 5 minutes. Consequently:  <br> • The latest interval timestamp will be rounded up. Example: Now: 08:07. Last interval end time: 8:10. <br> • The earliest interval will include only the remainder of the requested timeframe, and will therefore contain only 5 minutes of data. Example: Now: 8:07. Request parameters: timeframe=20&interval=10 (20 minutes in 10 minutes intervals). Response from and to time: 7:45 - 8:07 --> 22 minutes. <br> Note: See [Queue Health](data-operational-realtime-queue-health.html){:target="_blank"} for further information about time frame rounding. Response intervals: 8:00 - 8:10 (10 minutes. actual 7 minutes because now is 8:07). 7:50 - 8:00 (10 minutes). 7:45 - 7:50 (5 minutes). | long |
| totalInteractiveChats | The number of interactive chats that were closed in the current interval/time frame. | long |
| totalNonInteractiveChats | The number of non-interactive chats were closed in the current interval/time frame (this also includes chats that were abandoned by the visitor). | long |
| totalHandlingTime | The total time in seconds that was spent handing the interactive chats in the current interval/time frame. | long |
| nonInteractiveTotalHandlingTime | The total time in seconds that was spent handing the non-interactive chats in the current interval/time frame. | long |
| connectedEngagements | The number of chats connected to an agent in the current interval/time frame. | long |
