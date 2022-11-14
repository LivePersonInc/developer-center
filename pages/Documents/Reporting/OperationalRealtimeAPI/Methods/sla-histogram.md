---
pagename: SLA Histogram
redirect_from:
  - data-operational-realtime-sla-histogram.html
sitesection: Documents
categoryname: "Reporting"
documentname: Operational Realtime API
subfoldername: Methods
order: 50
permalink: operational-realtime-api-methods-sla-histogram.html
indicator: chat
---

Retrieves the distribution of visitors’ wait time in the queue, before an agent replies to their chat. The wait time in the histogram is accurate (no more than +/- 5 seconds). Histogram bucket sizes are specified in multiples of 5 seconds.

*Note: SLA is calculated using bucket-based aggregation techniques, in which events are collected into 5 minute buckets. For this reason, events may be included that took place outside of the requested time frame.*

*Example: If the current time is 13:29 and the required time frame is 7 minutes, the API will use 2 buckets: 13:25 and 13:30. The time of the collected data is actually not 13:22-13:29, but 13:20-13:29.*

*Note*: These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

### Request

| Method | URL |
| :-------- | :----- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountID}/sla?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&groupIds=<groupIds>&histogram=<histogram bucket list>&v=<version>`

URL Parameters

| Name | Description | Type / Value |  Required |
| :------ | :------- | :----------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time – timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, SLA will be calculated only for interactions involving agents of the specified skills. You can provide one or more skill IDs. <br> Example: skillIds=4,15,3. <br> To retrieve all skills active for the time period, use skillIds=all. If no skillIds is provided, 'all’ is assumed. | numeric, comma separated, or 'all’ | optional |
| groupIds | When provided, SLA will be calculated only for interactions involving agents of the specified groups. You can provide one or more agent group IDs. <br> Example: groupIds=4,15,3. <br> To retrieve all agent groups active for the time period, use groupIds=all. If no groupIds is provided, 'all’ is assumed. | numeric, comma separated, or 'all’ | optional |
| histogram | Histogram bucket ranges (in seconds). Values in the list must be multiples of 5 seconds. Each value is taken as the lower limit of a bucket. The value '0’ is always assumed to be part of the histogram. The highest value in the histogram will bucket all waiting times that are higher. <br> Example: histogram=0,50,100,200,400,1000 <br> If no histogram is provided, the default histogram is assumed: 0,15,30,45,60,90,120 | numeric, comma separated | optional |

### Response

**JSON Example**

Request by histogram=0,5,10,20,30. Assuming 2 chats waited for 2 seconds, 2 chats waited for 7 seconds and 1 chat waited for 27 seconds.

```json

      {
       "slaDataRange": {
         "0": {
           "accumulated": 0.4,
           "percentageFromTotal": 0.4,
           "chats": 2
         },
         "5": {
           "accumulated": 0.8,
           "percentageFromTotal": 0.4,
           "chats": 2
         },
         "10": {
           "accumulated": 0.8,
           "percentageFromTotal": 0,
           "chats": 0
         },
         "20": {
           "accumulated": 1,
           "percentageFromTotal": 0.2,
           "chats": 1
         },
         "30": {
           "accumulated": 1,
           "percentageFromTotal": 0,
           "chats": 0
         }
       }
    }
```

**Elements in the Response**

| Name | Description | Type / Value |
| :------ | :------------ | :-------------- |
| slaDataRange | Root element of the response. Contains a list of sub elements with numeric names, one for each histogram bucket. The names of the sub elements represent the start of the bucket (in seconds). | element |
| accumulated | The percentage of chats that fall in this bucket or in earlier buckets (buckets for shorter queue wait periods). | long |
| percentageFromTotal | The percentage of chats that fall in this bucket. | long |
| chats | The number of chats with wait time that falls in this bucket. | long |
