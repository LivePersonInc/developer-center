---
pagename: Current Queue State
redirect_from:
  - data-operational-realtime-current-queue-state.html
sitesection: Documents
categoryname: "Reporting"
documentname: Operational Realtime API
subfoldername: Methods
order: 40
permalink: operational-realtime-api-methods-current-queue-state.html
indicator: chat
---

Retrieves the current queue state related metrics at the skill level:

* Current queue size
* Current available slots
* Current max wait time in queue in milliseconds (version 2 and above)

*Note*: These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

### Request

| Method | URL |
| :------- | :----- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountID}/queuestate?skillIds=<skillIDs>&v=<version>` |

**Query Parameters**

You can request queue state data using the following parameters:

| Name | Description | Type/Value | Required |
| :------ | :------------- | :-------------- | :--- |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, the default will be 'skillIds=all', and metrics on the response will be calculated by all skills with queue state data. You can provide one or more skill IDs. <br> Example: skillIds=4,15,3. To retrieve all skills active for the time period use skillIds=all (same as default if not provided). | numeric, comma separated | optional |

### Response

#### JSON example

Request by all skills, when v=1:

```json
  {
    "skills":{
      "1":{
        "currentAvailableSlots":5,
        "currentQueueSize":5
      },
      "2":{
        "currentAvailableSlots":11,
        "currentQueueSize":14
      },
      "3":{
        "currentAvailableSlots":6,
        "currentQueueSize":15
      },
      "4":{
        "currentAvailableSlots":27,
        "currentQueueSize":0
      }
    },
    "totals":{
      "currentAvailableSlots":49,
      "currentQueueSize":34
    }
  }
```

Request by all skills, when v=2:

```json
  {
    "skills":{
      "1":{
        "currentAvailableSlots":5,
        "currentQueueSize":5,
        "currentMaxWaitTimeInQueue": 15253
      },
      "2":{
        "currentAvailableSlots":11,
        "currentQueueSize":14,
        "currentMaxWaitTimeInQueue": 75388
      },
      "3":{
        "currentAvailableSlots":6,
        "currentQueueSize":15,
        "currentMaxWaitTimeInQueue": 15253
      },
      "4":{
        "currentAvailableSlots":27,
        "currentQueueSize":0,
        "currentMaxWaitTimeInQueue": -1
      }
    },
    "totals":{
      "currentAvailableSlots":49,
      "currentQueueSize":34,
      "currentMaxWaitTimeInQueue": 75388
    }
  }
```

Request by skills=1,2 and v=1:

```json
  {
    "skills":{
      "1":{
        "currentAvailableSlots":5,
        "currentQueueSize":5
      },
      "2":{
        "currentAvailableSlots":11,
        "currentQueueSize":14
      }
    },
    "totals":{
      "currentAvailableSlots":16,
      "currentQueueSize":19
    }
  }
```

Request by skills=1,100 and v=2 (skill 100 has no queue state data):

```json
  {
    "skills":{
      "1":{
        "currentAvailableSlots":5,
        "currentQueueSize":5,
        "currentMaxWaitTimeInQueue": 65203

      },
      "100":{
        "currentAvailableSlots":-1,
        "currentQueueSize":-1,
        "currentMaxWaitTimeInQueue": -1
      }
    },
    "totals":{
      "currentAvailableSlots":5,
      "currentQueueSize":5,
      "currentMaxWaitTimeInQueue": 65203
    }
  }
```

#### Elements in the response

| Name | Description | Type/Value |
| :----- | :-------------- | :-------------- |
| skills | An object that represent the current queue state per skills. Each entry represents a skill id and its corresponding current queue size and available slots values. | element |
| totals | An object that represents the total values of all queue sizes and available slots listed under 'skills’. Note that in any case that for a certain skill there is no queue state data (hence a -1 value), it will not be aggregated to totals, meaning only valid (non -1) skill queue state values are summed up. The currentMaxWaitTimeInQueue nested under this element represents the max wait time in queue out of all available skills. | Element |
| currentAvailableSlots | The current queue number of available slots. <br> Note: If the agent concurrency set to 'Unlimited', the number of current available slots for the associated skill will always be 1. | long |
| currentQueueSize | The current queue size | long |
| currentMaxWaitTimeInQueue | The current max wait time in the queue in milliseconds. If no one is waiting in queue returns -1 | long

#### Optional response status codes

| Name | Description |
| :----- | :-------------- |
| 200 OK | Successfully retrieved the data |
| 400 Bad Request | Problem with body or query parameters |
| 401 Unauthorized | 401 Unauthorized Bad Authentication (invalid site or agent) |
| 429 | Request blocked due to rate limiting |