---
pagename: Messaging Queue Health
redirect_from:
  - data-messaging-operations-messaging-queue-health.html
sitesection: Documents
categoryname: "Reporting"
documentname: Messaging Operations API
subfoldername: Methods
order: 20
permalink: messaging-operations-api-methods-messaging-queue-health.html

indicator: messaging
---

Retrieves information about the state of the queue (with all related metrics) for up to the last 24 hours at the account or skill level.

**Notes:**

1. The messaging queue data is currently not available by default, in order to enable the data flow please contact your account manager.

2. These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

3. **Limitation**: in order for the queue data to appear, there must be at least one agent logged in to LE.

### Request

| Method | URL |
| :------- | :------ |
| GET | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountID}/msgqueuehealth?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&interval=<interval size in minutes>&v=<version> |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time – timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, metrics on the response will be calculated for all skills. You can provide one or more skillIDs. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all, or do not specify this parameter at all. | numeric, comma separated | optional |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |

### Response

**JSON Example**

Request by skillIds=12,13 (no interval), timeframe=180

```json
    {
        "skillsMetrics": {
            "12": {
                "unassignedConversations": 34,
                "actionableConversations": 10,
                "notActionableConversations": 14,
                "actionableAndManualSla": 7,
                "actionableAndDuringTransfer": 6,
                "actionableAndConsumerLastMessage": 3,
                "notActionableDuringTransfer": 0,
                "notActionableAndManualSla": 0,
                "unassignedConversationsAndFirstTimeConsumer": 4,
                "avgWaitTimeForAgentAssignment_NewConversation": 159,
                "avgWaitTimeForAgentAssignment_AfterTransfer": 171,
                "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 130,
                "maxWaitTimeForAgentAssignment": 274,
                "waitTimeForAgentAssignment_50thPercentile": 160,
                "waitTimeForAgentAssignment_90thPercentile": 150

            },
            "13": {
                "unassignedConversations": 2,
                "actionableConversations": 2,
                "notActionableConversations": 0,
                "actionableAndManualSla": 2,
                "actionableAndDuringTransfer": 2,
                "actionableAndConsumerLastMessage": 0,
                "notActionableDuringTransfer": 0,
                "notActionableAndManualSla": 0,
                "unassignedConversationsAndFirstTimeConsumer": 0,
                "avgWaitTimeForAgentAssignment_NewConversation": 300,
                "avgWaitTimeForAgentAssignment_AfterTransfer": 245,
                "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 170,
                "maxWaitTimeForAgentAssignment": 370,
                "waitTimeForAgentAssignment_50thPercentile": 220,
                "waitTimeForAgentAssignment_90thPercentile": 240

            }
        },
        "metricsTotal": {
            "unassignedConversations": 36,
            "actionableConversations": 12,
            "notActionableConversations": 14,
            "actionableAndManualSla": 9,
            "actionableAndDuringTransfer": 2,
            "actionableAndConsumerLastMessage": 3,
            "notActionableDuringTransfer": 0,
            "notActionableAndManualSla": 0,
            "unassignedConversationsAndFirstTimeConsumer": 4,
            "avgWaitTimeForAgentAssignment_NewConversation":272,
            "avgWaitTimeForAgentAssignment_AfterTransfer": 233,
            "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 200,
            "maxWaitTimeForAgentAssignment": 370,
            "waitTimeForAgentAssignment_50thPercentile":  170,
            "waitTimeForAgentAssignment_90thPercentile": 224

        }
    }
```

Request by skillIds=12,13 interval=60, timeframe=180

```json
    {
        "metricsByIntervals": [
            {
                "timestamp": 1516261915679,

                       "skillsMetrics": {
                           "12": {
                               "unassignedConversations": 50,
                               "actionableConversations": 25,
                               "notActionableConversations": 25,
                               "actionableAndManualSla": 22,
                               "actionableAndDuringTransfer": 23,
                               "actionableAndConsumerLastMessage": 7,
                               "notActionableDuringTransfer": 0,
                               "notActionableAndManualSla": 0,
                               "unassignedConversationsAndFirstTimeConsumer": 30,
                               "avgWaitTimeForAgentAssignment_NewConversation": 33,
                               "avgWaitTimeForAgentAssignment_AfterTransfer": 483,
                               "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 354,
                               "maxWaitTimeForAgentAssignment": 999,
                               "waitTimeForAgentAssignment_50thPercentile": 340,
                               "waitTimeForAgentAssignment_90thPercentile": 420
                           },
                           "13": {
                               "unassignedConversations": 4,
                               "actionableConversations": 4,
                               "notActionableConversations": 0,
                               "actionableAndManualSla": 4,
                               "actionableAndDuringTransfer": 2,
                               "actionableAndConsumerLastMessage": 0,
                               "notActionableDuringTransfer": 0,
                               "notActionableAndManualSla": 0,
                               "unassignedConversationsAndFirstTimeConsumer": 4,
                               "avgWaitTimeForAgentAssignment_NewConversation": 234,
                               "avgWaitTimeForAgentAssignment_AfterTransfer": 765,
                               "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 138,
                               "maxWaitTimeForAgentAssignment": 1011,
                               "waitTimeForAgentAssignment_50thPercentile": 520,
                               "waitTimeForAgentAssignment_90thPercentile": 670
                           }
                       },
                       "metricsTotal": {
                           "unassignedConversations": 54,
                           "actionableConversations": 29,
                           "notActionableConversations": 25,
                           "actionableAndManualSla": 26,
                           "actionableAndDuringTransfer": 25,
                           "actionableAndConsumerLastMessage": 7,
                           "notActionableDuringTransfer": 0,
                           "notActionableAndManualSla": 0,
                           "unassignedConversationsAndFirstTimeConsumer": 34,
                           "avgWaitTimeForAgentAssignment_NewConversation": 62,
                           "avgWaitTimeForAgentAssignment_AfterTransfer": 320,
                           "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 247,
                           "maxWaitTimeForAgentAssignment": 1011,
                           "waitTimeForAgentAssignment_50thPercentile": 420,
                           "waitTimeForAgentAssignment_90thPercentile": 550
                       }
                },
            {
                "timestamp": 1516258315679,
                       "skillsMetrics": {
                           "12": {
                               "unassignedConversations": 0,
                               "actionableConversations": 0,
                               "notActionableConversations": 0,
                               "actionableAndManualSla": 0,
                               "actionableAndDuringTransfer": 0,
                               "actionableAndConsumerLastMessage": 0,
                               "notActionableDuringTransfer": 0,
                               "notActionableAndManualSla": 0,
                               "unassignedConversationsAndFirstTimeConsumer": 0,
                               "avgWaitTimeForAgentAssignment_NewConversation":123,
                               "avgWaitTimeForAgentAssignment_AfterTransfer": 344,
                               "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 115,
                               "maxWaitTimeForAgentAssignment": 555,
                               "waitTimeForAgentAssignment_50thPercentile":  160,
                               "waitTimeForAgentAssignment_90thPercentile": 220

                           },
                           "13": {
                               "unassignedConversations": 12,
                               "actionableConversations": 2,
                               "notActionableConversations": 10,
                               "actionableAndManualSla": 2,
                               "actionableAndDuringTransfer": 2,
                               "actionableAndConsumerLastMessage": 0,
                               "notActionableDuringTransfer": 0,
                               "notActionableAndManualSla": 0,
                               "unassignedConversationsAndFirstTimeConsumer": 0,
                               "avgWaitTimeForAgentAssignment_NewConversation":12,
                               "avgWaitTimeForAgentAssignment_AfterTransfer": 34,
                               "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 12,
                               "maxWaitTimeForAgentAssignment": 55,
                               "waitTimeForAgentAssignment_50thPercentile":  16,
                               "waitTimeForAgentAssignment_90thPercentile": 22
                           }
                       },
                       "metricsTotal": {
                           "unassignedConversations": 12,
                           "actionableConversations": 2,
                           "notActionableConversations": 10,
                           "actionableAndManualSla": 2,
                           "actionableAndDuringTransfer": 2,
                           "actionableAndConsumerLastMessage": 0,
                           "notActionableDuringTransfer": 0,
                           "notActionableAndManualSla": 0,
                           "unassignedConversationsAndFirstTimeConsumer": 0,
                           "avgWaitTimeForAgentAssignment_NewConversation":70,
                           "avgWaitTimeForAgentAssignment_AfterTransfer": 160,
                           "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 62,
                           "maxWaitTimeForAgentAssignment": 555,
                           "waitTimeForAgentAssignment_50thPercentile":  99,
                           "waitTimeForAgentAssignment_90thPercentile": 130
                       }
                },
            {
                "timestamp": 1516254715679,
                "metricsData": {
                "skillsMetrics": {
                    "12": {
                        "unassignedConversations": 1,
                        "actionableConversations": 1,
                        "notActionableConversations": 0,
                        "actionableAndManualSla": 1,
                        "actionableAndDuringTransfer": 0,
                        "actionableAndConsumerLastMessage": 0,
                        "notActionableDuringTransfer": 0,
                        "notActionableAndManualSla": 0,
                        "unassignedConversationsAndFirstTimeConsumer": 0,
                        "avgWaitTimeForAgentAssignment_NewConversation":700,
                        "avgWaitTimeForAgentAssignment_AfterTransfer": 1600,
                        "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 800,
                        "maxWaitTimeForAgentAssignment": 5550,
                        "waitTimeForAgentAssignment_50thPercentile":  990,
                        "waitTimeForAgentAssignment_90thPercentile": 870

                    },
                    "13": {
                        "unassignedConversations": 0,
                        "actionableConversations": 0,
                        "notActionableConversations": 0,
                        "actionableAndManualSla": 0,
                        "actionableAndDuringTransfer": 0,
                        "actionableAndConsumerLastMessage": 0,
                        "notActionableDuringTransfer": 0,
                        "notActionableAndManualSla": 0,
                        "unassignedConversationsAndFirstTimeConsumer": 0,
                        "avgWaitTimeForAgentAssignment_NewConversation":333,
                        "avgWaitTimeForAgentAssignment_AfterTransfer": 444,
                        "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 344,                        "maxWaitTimeForAgentAssignment": 555,
                        "waitTimeForAgentAssignment_50thPercentile":  333,
                        "waitTimeForAgentAssignment_90thPercentile": 384
                    }
                },
                "metricsTotal": {
                    "unassignedConversations": 1,
                    "actionableConversations": 1,
                    "notActionableConversations": 0,
                    "actionableAndManualSla": 1,
                    "actionableAndDuringTransfer": 0,
                    "actionableAndConsumerLastMessage": 0,
                    "notActionableDuringTransfer": 0,
                    "notActionableAndManualSla": 0,
                    "unassignedConversationsAndFirstTimeConsumer": 0,
                    "avgWaitTimeForAgentAssignment_NewConversation":520,
                    "avgWaitTimeForAgentAssignment_AfterTransfer": 490,
                    "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 547,
                    "maxWaitTimeForAgentAssignment": 5550,
                    "waitTimeForAgentAssignment_50thPercentile":  500,
                    "waitTimeForAgentAssignment_90thPercentile": 600
                }
                }
            }
        ],
        "timeframeSummary":
        {
               "skillsMetrics": {
                   "12": {
                       "unassignedConversations": 34,
                       "actionableConversations": 10,
                       "notActionableConversations": 14,
                       "actionableAndManualSla": 7,
                       "actionableAndDuringTransfer": 6,
                       "actionableAndConsumerLastMessage": 3,
                       "notActionableDuringTransfer": 0,
                       "notActionableAndManualSla": 0,
                       "unassignedConversationsAndFirstTimeConsumer": 4,
                       "avgWaitTimeForAgentAssignment_NewConversation":622,
                       "avgWaitTimeForAgentAssignment_AfterTransfer": 576,
                       "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 224,
                       "maxWaitTimeForAgentAssignment": 5550,
                       "waitTimeForAgentAssignment_50thPercentile":  655,
                       "waitTimeForAgentAssignment_90thPercentile": 734

                   },
                   "13": {
                       "unassignedConversations": 2,
                       "actionableConversations": 2,
                       "notActionableConversations": 0,
                       "actionableAndManualSla": 2,
                       "actionableAndDuringTransfer": 2,
                       "actionableAndConsumerLastMessage": 0,
                       "notActionableDuringTransfer": 0,
                       "notActionableAndManualSla": 0,
                       "unassignedConversationsAndFirstTimeConsumer": 0,
                       "avgWaitTimeForAgentAssignment_NewConversation":700,
                       "avgWaitTimeForAgentAssignment_AfterTransfer": 676,
                       "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 384,
                       "maxWaitTimeForAgentAssignment": 1011,
                       "waitTimeForAgentAssignment_50thPercentile":  588,
                       "waitTimeForAgentAssignment_90thPercentile": 797
                   }
               },
               "metricsTotal": {
                   "unassignedConversations": 36,
                   "actionableConversations": 12,
                   "notActionableConversations": 14,
                   "actionableAndManualSla": 9,
                   "actionableAndDuringTransfer": 2,
                   "actionableAndConsumerLastMessage": 3,
                   "notActionableDuringTransfer": 0,
                   "notActionableAndManualSla": 0,
                   "unassignedConversationsAndFirstTimeConsumer": 4,
                   "avgWaitTimeForAgentAssignment_NewConversation":723,
                   "avgWaitTimeForAgentAssignment_AfterTransfer": 721,
                   "avgWaitTimeForAgentAssignment_AfterTransferFromBot": 342,
                   "maxWaitTimeForAgentAssignment": 5550,
                   "waitTimeForAgentAssignment_50thPercentile":  600,
                   "waitTimeForAgentAssignment_90thPercentile": 785
               }
        }
    }
```

**Elements in the Response**

<div class="attn-note">All metrics under the hierarchy of 'skillsMetrics' represent the most recent values for each skill. Metrics under the 'metricsTotal' entity will contain the summation of all skills listed. <b>In case there is no relevant data on metrics the default value is -1</b>.</div>

| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillsMetrics | When skillIDs are provided: An array of skills with their metrics. <br> When interval size is provided: The response will have the skillsMetrics element in each interval representing the data for the related interval. <br> There will also be a skillsMetrics element at the end of the response, representing the data of the whole requested time frame. <br>If there is no data for a specific skill, it will not be included in the array. <br> If there is no data for any of the skills, this member will have an empty element as value. | element |
| metricsTotals | The total metrics for all requested skills.  <br> When interval is provided: Total metrics for all requested intervals.<br> If skill/sID/s are requested and there is no data for any of them, this element will still include all of the metrics with value zero. <br> Note: Totals may not add up due to rounding differences. | element |
| skill id | When skillIDs value(/s) provided: The skill ID. | long |
| timeframeSummary | When interval is provided in the request, this entity will contain data for the entire timeframe, similar to the response when requesting with no intervals. <br> Note that the averages values for the entire timeframe will NOT be equal to the summation of totals under each interval. | element |
| timestamp | When interval size is provided in the request, the response will be partitioned by intervals. The timestamp is the UTC timestamp in milliseconds representing the start time of the interval. <br> Example: Interval size: 10 min. Interval start and end time: 18/01/2018 08:25:32 - 18/01/2018 08:35:32. Timestamp: 1516263932000. <br> Intervals are not rounded, and will be determined by the time the request was made. <br> Example: Request was made at current time (now): 8:51:55, with interval=60 and timeframe=120 parameters specified. <br> The response will contain two intervals, latest representing data from 7:51:55-8:51:55 (timestamp of 7:51:55), and the earliest representing data from 6:51:55-7:51:55 (timestamp of 6:51:55). | long |
| unassignedConversations | The number of unassigned conversations. <br> Equal to the number of actionable conversation + not actionable conversation | double |
| actionableConversations | The number of actionable conversations. | double |
| notActionableConversations | The number of not actionable conversations. | double |
| actionableAndManualSla | The number of actionable conversations that have a manual SLA on them. | double |
| actionableAndDuringTransfer | The number of actionable conversations that were transferred. | double |
| actionableAndConsumerLastMessage | The number of actionable conversations in which the consumer wrote the last message. | double |
| notActionableDuringTransfer | The number of not actionable conversations that were transferred. | double |
| notActionableAndManualSla | The number of not actionable conversations that have a manual SLA on them. | double |
| avgWaitTimeForAgentAssignment_NewConversation | The average number of milliseconds a new conversation waited in the queue (unassigned) for the first agent to be assigned to it.|long|
| avgWaitTimeForAgentAssignment_AfterTransfer | The average number of milliseconds a transferred conversation waited in the queue (unassigned) for the next agent to be assigned to it. This metrics measures for transfers back-to-queue and skill-to-skill.|long|
| avgWaitTimeForAgentAssignment_AfterTransferFromBot | The average number of milliseconds a transferred conversation waited in the queue (unassigned), after it was transferred by a bot, for the next agent to be assigned to it.|long|
| maxWaitTimeForAgentAssignment | The maximum number of milliseconds a conversation waited in the queue (unassigned) for an agent to be assigned to it.|long|
| waitTimeForAgentAssignment_50thPercentile | 50% of the conversations in the queue (unassigned) waited to be assigned for less time than this value, i.e. the median wait time in queue.|long|
| waitTimeForAgentAssignment_90thPercentile | 90% of the conversations in the queue (unassigned) waited to be assigned for less time than this value.|long|
|avgWaitTimeForAgentAssignment_AfterTransferFromAgent|The average number of milliseconds a transferred conversation waited in the queue (unassigned) for the next agent to be assigned to it after it was  sent back-to-queue, transferred to another skill or transferred to specific agent.|long|
|maxWaitTimeForAgentAssignment_AfterTransferFromAgent|The  maximum  number of milliseconds a conversation waited in the queue (unassigned) for the next agent to be assigned to it, after it was transferred to a specific agent. This includes cases when destination agent is not available and the conversation is picked up by a fallback agent.|long|