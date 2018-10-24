---
pagename: Messaging Current Queue Health
redirect_from:
  - data-messaging-operations-messaging-current-queue-health.html
sitesection: Documents
categoryname: "Real Time Data"
documentname: Messaging Operations API
subfoldername: Methods
order: 30
permalink: messaging-operations-api-methods-messaging-current-queue-health.html

indicator: messaging
---

Retrieves the information about the current messaging queue state (and all its related metrics) in the account and skill level


**Note**:

1. The messaging queue data is currently not available by default, in order to enable the data flow please contact your account manager.

2. This method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

3. **Limitation**: in order for the queue data to appear, there must be at least one agent logged in to LE.

### Request

| Method | URL |
| :------- | :------ |
| GET | `https://<domain>/operations/api/account/{accountID}/msgqueuehealth/current/?skillIds=<skillIDs>&v=<version>` |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, defaults to 'all' skills. You can provide one or more skillIDs. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all or do not specify this parameter at all. | numeric, comma separated | optional |

### Response

**JSON Example**

Request by skillIds=12,13

```json
    {
        "skillsMetrics": {
            "12": {
                "time": 1516277646515,
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
                "maxWaitTimeForAgentAssignment": 274,
                "waitTimeForAgentAssignment_50thPercentile": 160,
                "waitTimeForAgentAssignment_90thPercentile": 150        
            },
            "13": {
                "time": 1516277646515,
                "unassignedConversations": 2,
                "actionableConversations": 2,
                "notActionableConversations": 0,
                "actionableAndManualSla": 2,
                "actionableAndDuringTransfer": 2,
                "actionableAndConsumerLastMessage": 0,
                "notActionableDuringTransfer": 0,
                "notActionableAndManualSla": 0,
                "unassignedConversationsAndFirstTimeConsumer": 0,
                "unassignedConversationsAndFirstTimeConsumer": 0,
                "avgWaitTimeForAgentAssignment_NewConversation": 300,
                "avgWaitTimeForAgentAssignment_AfterTransfer": 245,
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
            "avgWaitTimeForAgentAssignment_AfterTransfer": 233 ,
            "maxWaitTimeForAgentAssignment": 370,
            "waitTimeForAgentAssignment_50thPercentile":  170,
            "waitTimeForAgentAssignment_90thPercentile": 224            
        }
    }
```

**Elements in the Response**

*Note*: All metrics under the hierarchy of 'skillsMetrics' represent the most recent values for each skilll.
Metrics under the 'metricsTotal' entity will contain the summation of all skills listed.

*default*: In case there is no relevant data on metrics the default value is -1. 


| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillsMetrics | An array of skills with their metrics. | element |
| metricsTotals | The total metrics for all requested skills.  <br> When interval is provided: Total metrics for all requested skills per each interval. | element |
| skill id | When skillIDs value(/s) provided: The skill ID. | long |
| time | The timestamp representing the 'freshness' of the returned data. <br> Will return the timestamp associated with the most recent data. |long|
| unassignedConversations | The number of unassigned conversations. <br> Equal to the number of actionable conversation + not actionable conversation. |long|
| actionableConversations | The number of actionable conversations. |long|
| notActionableConversations | The number of not actionable conversations. |long|
| actionableAndManualSla | The number of actionable conversations that have a manual SLA on them. |long|
| actionableAndDuringTransfer | The number of actionable conversations that were transferred. |long|
| actionableAndConsumerLastMessage | The number of actionable conversations in which the consumer wrote the last message. |long|
| notActionableDuringTransfer | The number of not actionable conversations that were transferred. |long|
| notActionableAndManualSla | The number of not actionable conversations that have a manual SLA on them. |long|
| avgWaitTimeForAgentAssignment_NewConversation | The average number of milliseconds a new conversation is waiting in queue (unassigned) for the first agent to be assigned to it.|long|
| avgWaitTimeForAgentAssignment_AfterTransfer | The average number of milliseconds a transferred conversation is waiting in queue (unassigned) for the next agent to be assigned to it.Measure for transfers back-to-queue and skill-to-skill.|long|
| maxWaitTimeForAgentAssignment | The maximum number of milliseconds a conversation is waiting in queue (unassigned) for an agent to be assigned to it.|long|
| waitTimeForAgentAssignment_50thPercentile | 50% of the conversations in queue (unassigned) are waiting below this value, i.e. the median wait time in queue.|long|
| waitTimeForAgentAssignment_90thPercentile | 90% of the conversations in queue (unassigned) are waiting below this value.|long|

