---
pagename: Messaging Current Queue Health
redirect_from:
  - data-messaging-operations-messaging-current-queue-health.html
sitesection: Documents
categoryname: "Reporting"
documentname: Messaging Operations API
subfoldername: Methods
order: 30
permalink: messaging-operations-api-methods-messaging-current-queue-health.html

indicator: messaging
---

Retrieves the information about the current messaging queue state (and all its related metrics) in the account and skill level

**Notes:**

1. The messaging queue data is currently not available by default, in order to enable the data flow please contact your account manager.

2. These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

3. **Limitation**: in order for the queue data to appear, there must be at least one agent logged in to LE.

4. Overdue metrics (like `overdueConversationsInQueue` for example)  will be calculated only for conversations that have started in the last four days.

### Request

| Method | URL |
| :------- | :------ |
| GET | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountID}/msgqueuehealth/current/?skillIds=<skillIDs>&v=<version> |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, defaults to 'all' skills. You can provide one or more skillIDs. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all or do not specify this parameter at all. | numeric, comma separated | optional |
| overdueConversations | When set to true, metrics in the response will also contain overdue conversations metrics. Defaults to false. For example: overdueConversations=true | boolean | optional |
| breakdown | When set to false, metrics in the response will not contain skills breakdown, only total values. Defaults to true. For example: breakdown=false | boolean | optional |
| metrics | When provided, response metrics will be filtered only by the requested metric. Possible values: queue, waittimes, overdue, all. example: metrics=queue,overdue. Default if not specified will return only queue and waittimes metrics. | string, comma separated | optional |
| groupIds | When provided, the overdueConversationsAssigned metric on the response will be filtered by the list provided. You can provide one or more agent group IDs. <br> Example: groupIds=123,124. To filter by all group IDs (which are allowed depending on the requesting user's permission), use groupIds=all. Default value is null and no filtering will occur.| numeric, comma separated | optional |

### Response

**JSON Example**

Request by skillIds=12,13 and overdueConversations=true

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
                "waitTimeForAgentAssignment_90thPercentile": 150,
                "overdueConversationsInQueue": 0,
                "overdueConversationsAssigned": 2,
                "overdueConversationsTotal": 2        
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
                "waitTimeForAgentAssignment_90thPercentile": 240,
                "overdueConversationsInQueue": 1,
                "overdueConversationsAssigned": 0,
                "overdueConversationsTotal": 1                
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
            "maxWaitTimeForAgentAssignment": 370,
            "waitTimeForAgentAssignment_50thPercentile":  170,
            "waitTimeForAgentAssignment_90thPercentile": 224,
            "overdueConversationsInQueue": 1,
            "overdueConversationsAssigned": 2,
            "overdueConversationsTotal": 3            
        }
    }
```

**Elements in the Response**

<div class="important">All metrics under the hierarchy of 'skillsMetrics' represent the most recent values for each skill. Metrics under the 'metricsTotal' entity will contain the summation of all skills listed. <b>In case there is no relevant data on metrics the default value is -1</b>.</div>

| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillsMetrics | An array of skills with their metrics. | element |
| metricsTotals | The total metrics for all requested skills.  <br> When interval is provided: Total metrics for all requested skills per each interval. | element |
| skill id | When skillIDs value(/s) provided: The skill ID. | long |
| The following metrics present the most recent queue metrics. |||
| time | The timestamp representing the 'freshness' of the returned data. <br> Will return the timestamp associated with the most recent data. |long|
| unassignedConversations | The number of unassigned conversations. <br> Equal to the number of actionable conversation + not actionable conversation. |long|
| actionableConversations | The number of actionable conversations. |long|
| notActionableConversations | The number of not actionable conversations. |long|
| actionableAndManualSla | The number of actionable conversations that have a manual SLA on them. |long|
| actionableAndDuringTransfer | The number of actionable conversations that were transferred. |long|
| actionableAndConsumerLastMessage | The number of actionable conversations in which the consumer wrote the last message. |long|
| notActionableDuringTransfer | The number of not actionable conversations that were transferred. |long|
| notActionableAndManualSla | The number of not actionable conversations that have a manual SLA on them. |long|
| The following metrics present current wait times statistics per skill for conversations that have been opened in the last 24 hours and are also currently in queue (have not been assigned). Conversation that are in queue and have been opened prior to 24 hours ago will be ignored. |||
| avgWaitTimeForAgentAssignment_NewConversation | The average number of milliseconds a new conversation waiting in the queue (unassigned) for the first agent to be assigned to it.|long|
| avgWaitTimeForAgentAssignment_AfterTransfer | The average number of milliseconds a transferred conversation waited in queue (unassigned) for the next agent to be assigned to it. This metrics measures for transfers back-to-queue and skill-to-skill.|long|
| maxWaitTimeForAgentAssignment | The maximum number of milliseconds a conversation waiting in queue (unassigned) for an agent to be assigned to it.|long|
| waitTimeForAgentAssignment_50thPercentile | 50% of the conversations in the queue (unassigned) waited to be assigned for less time than this value, i.e. the median wait time in queue.|long|
| waitTimeForAgentAssignment_90thPercentile | 90% of the conversations in the queue (unassigned) waited to be assigned for less time than this value.|long|
| avgWaitTimeForAgentAssignment_AfterTransferFromAgent|The average number of milliseconds a transferred conversation waiting in queue (unassigned) for the next agent to be assigned to it after it was  sent back-to-queue, transferred to another skill or  transferred to specific agent.|long|
| maxWaitTimeForAgentAssignment_AfterTransferFromAgent|The  maximum  number of milliseconds a conversation waiting in queue (unassigned) for the next agent to be assigned to it, after it was transferred to a specific agent. This includes cases when destination agent is not available and the conversation is picked up by a fallback agent.|long|
| The following metrics present the overdue conversation. It includes conversations that have been created in the last 5 daysConversation. |||
| overdueConversationsInQueue | The number of overdue conversations that are in the queue. | long |
| overdueConversationsAssigned | The number of overdue conversations that are assigned to an agent. | long |
| overdueConversationsTotal | The total number of conversations that are overdue (sum of inQueue + assigned). | long |
