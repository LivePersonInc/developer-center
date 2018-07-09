---
title: Current Queue State
level1: Documents
level2: Data
level3: Operational Realtime API
level4: Methods
order: 40
permalink: operational-realtime-api-methods-current-queue-state.html

indicator: chat
---

Retrieves the current queue state related metrics at the skill level:
•   Current queue size
•   Current available slots

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Request

| Method | URL |
| :------- | :----- |
| GET | `https://<domain>/operations/api/account/{accountID}/queuestate?skillIds=<skillIDs>&v=<version>` |

**Query Parameters**

You can request queue state data using the following parameters:

| Name | Description | Type / Value | Required |
| :------ | :------------- | :-------------- | :--- |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, the default will be 'skillIds=all’, and metrics on the response will be calculated by all skills with queue state data. You can provide one or more skill IDs. <br> Example: skillIds=4,15,3 . To retrieve all skills active for the time period use skillIds=all (same as default if not provided). | numeric, comma separated | optional |

### Response

**JSON Example**

Request by all skills

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
                "currentQueueSize":20
            }
        },
        "totals":{  
            "currentAvailableSlots":49,
            "currentQueueSize":54
        }
    }

Request by skills=1,2

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

    Request by skills=1,100 (skill 100 has no queue state data)
    {  
        "skills":{  
            "1":{  
                "currentAvailableSlots":5,
                "currentQueueSize":5
            },
            "100":{  
                "currentAvailableSlots":-1,
                "currentQueueSize":-1
            }
        },
        "totals":{  
            "currentAvailableSlots":5,
            "currentQueueSize":5
        }
    }

**Elements in the Response**

| Name | Description | Type / Value |
| :----- | :-------------- | :-------------- |
| skills | An object that represent the current queue state per skills. Each entry represents a skill id and its corresponding current queue size and available slots values. | element |
| totals | An object that represents the total values of all queue sizes and available slots listed under 'skills’. Note that in any case that for a certain skill there is no queue state data (hence a -1 value), it will not be aggregated to totals, meaning only valid (non -1) skill queue state values are summed up. | Element |
| currentAvailableSlots | The current queue number of available slots. <br> Note: If the agent concurrency set to 'Unlimited', the number of current available slots for the associated skill will always be 1. | long |
| currentQueueSize | The current queue size | long |

Optional Response Status Codes

| Name | Description |
| :----- | :-------------- |
| 200 OK | Successfully retrieved the data |
| 400 Bad Request | Problem with body or query parameters |
| 401 Unauthorized | 401 Unauthorized Bad Authentication (invalid site or agent) |
| 429 | Request blocked due to rate limiting |
