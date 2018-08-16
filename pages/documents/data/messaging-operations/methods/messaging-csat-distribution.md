---
title: Messaging CSAT Distribution
redirect_from:
  - data-messaging-operations-messaging-csat-distribution.html
level1: Documents
level2: Data
level3: Messaging Operations API
level4: Methods
order: 50
permalink: messaging-operations-api-methods-messaging-csat-distribution.html

indicator: messaging
---

Retrieves messaging CSAT (Customer Satisfaction) distribution related metrics at the site, skill or agent level.

Messaging CSAT Distribution is calculated using bucket aggregation techniques where events are collected into 5 minute buckets, therefore the API might include events which were not in the requested time frame.

**Example**: If the time is now 13:29 and time frame is 7 minutes the API will use 2 buckets: 13:25 and 13:30. In other words in practice the time of the data is not 13:22-13:29 but 13:20-13:29.

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Retrieving Messaging CSAT Distribution API by Account and Skills

| Method | URL |
| :-------- | :----- |
| GET |  https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/operations/api/account/{accountID}/msgcsatdistribution?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&agentIds=<agentIDs>&v=<version>`

**URL Parameters**

| Name | Description | Type / Value | Required |
| :------ | :------------ | :-------------- | :--- |
| timeframe | The time range (in minutes) by which the data can be filtered. Where: end time is the current time and the start time is the end time - timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | Version of API e.g. v=1 | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skill/s' id/s. For each skill the metrics will be grouped per agent and also in total for all the skills specified. When neither skill nor agent ID are provided, metrics on the response will be calculated at the account level. If there is no data for the specified skill/s an object will be returned with an empty value for key: "metricsPerSkill" and "metricsTotal" key with a map including all metrics valued zero. You can provide one or more skill IDs. Example: skillIds=4,15,3. To retrieve all skills active for the time period use skillIds=all | numeric, separated by commas | optional |
| agentIds | When provided, metrics on the response will be grouped by the requested agent/s' ID/s. The metrics will also be grouped in total for all specified agent/s' id/s. When neither skill nor agent ID are provided, metrics on the response will be calculated at the account level. If there is no data for the specified agent/s an object will be returned with an empty value for key: "metricsPerAgent" and "metricsTotal" key with a map including all metrics valued at zero. You can provide one or more skill IDs. Example: agentIds=4,15,3. To retrieve all skills active for the time period use agentIds=all | numeric, separated by commas | optional |

**Elements in the Response**

| Name | Description | Type / Value |
| :------ | :------------ | :-------------- |
| skillsMetrics | An object that represent the skills' data. It includes two elements: <br> •   metricsPerSkill - A list of skill/s' ID/s that were sent in the request with their metrics data. The skill's data is returned per agent ID and totals for the skill. If there is no data for any of the skill/s then this member will have an empty object as value. If there is no data for a specific skill then it won't be included in this list. <br> •   metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s this object will still include all metrics with value of zero. When interval size is provided in the request, the response will have the skillsMetrics element in each interval and in addition there will also be a skillsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| agentsMetrics | An object that represent the agents' data. It includes two elements: <br> •   metricsPerAgent - A list of agent/s' id/s that were sent in the request with their metrics data. If there is no data for any of the agent/s then this member will have an empty object as value. If there is no data for a specific agent then it won't be included in this list. <br> •   metricsTotals - An object containing the metrics' names and values for the whole skill/s specified in the request. If there is no data for the any of the skill/s this object will still include all metrics with value of zero. <br> When interval size is provided in the request, the response will have the agentsMetrics element in each interval and in addition there will also be an agentsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| metricsTotals | This member will be returned in separate of skill/agent element only when no skill nor agent id was requested. If any ID was requested then it would be returned as part of the relevant skill/agent metrics element. <br> Note: Totals may not add up due to rounding differences. | element |
| skill id | When skill Ids value(/s) provided: The skill Id. | long |
| agent id | When agent Ids value(/s) provided: The agent Id. | long |
| csat_score1_answers | The number of times CSAT answer 1 was submitted in the current time frame. | long |
| csat_score2_answers | The number of times CSAT answer 2 was submitted in the current time frame. | long |
| csat_score3_answers | The number of times CSAT answer 3 was submitted in the current time frame. | long |
| csat_score4_answers | The number of times CSAT answer 4 was submitted in the current time frame. | long |
| csat_score5_answers | The number of times CSAT answer 5 was submitted in the current time frame. | long |
| total_answers | The total number of answers which were submitted in the current time frame. | long |
| positive_answers | The total number of CSAT 4 and 5 answers which were submitted in the current time frame. | long |
| csat_score | The percentage of the total answers which were positive (scores 4 and 5) which were submitted in the current time frame. | float |

**Potential Response Codes**

| Code | Response |
| :----- | :--------- |
| 200 | OK - Successfully retrieved the data. |
| 400 | Bad request - Problem with body or query parameters. |
| 401 | Unauthorized - Bad Authentication (invalid site or agent). |
| 429 | Request blocked due to rate limiting |
