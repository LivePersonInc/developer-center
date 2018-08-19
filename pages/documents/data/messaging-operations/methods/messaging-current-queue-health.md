---
pagename: Messaging Current Queue Health
redirect_from:
  - data-messaging-operations-messaging-current-queue-health.html
sitesection: Documents
categoryname: Data
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

    {
        "skillsMetrics": {
            "12": {
                "time": 1516277646515,
                "unassignedConversations": 34,
                "actionableConversations": 10,
                "notActionableConversations": 14,
                "actionableAndManualSla": 7,
                "actionableAndDuringTransfer": 6
                "actionableAndConsumerLastMessage": 3,
                "notActionableDuringTransfer": 0,
                "notActionableAndManualSla": 0,
                "unassignedConversationsAndFirstTimeConsumer": 4        
            },
            "13": {
                "time": 1516277646515,
                "unassignedConversations": 2,
                "actionableConversations": 2,
                "notActionableConversations": 0,
                "actionableAndManualSla": 2,
                "actionableAndDuringTransfer": 2
                "actionableAndConsumerLastMessage": 0,
                "notActionableDuringTransfer": 0,
                "notActionableAndManualSla": 0,
                "unassignedConversationsAndFirstTimeConsumer": 0
            }
        },
        "metricsTotal": {
            "unassignedConversations": 36,
            "actionableConversations": 12,
            "notActionableConversations": 14,
            "actionableAndManualSla": 9,
            "actionableAndDuringTransfer": 2
            "actionableAndConsumerLastMessage": 3,
            "notActionableDuringTransfer": 0,
            "notActionableAndManualSla": 0,
            "unassignedConversationsAndFirstTimeConsumer": 4
        }
    }


**Elements in the Response**

*Note*: All metrics under the hierarchy of 'skillsMetrics' represent the most recent values for each skilll.
Metrics under the 'metricsTotal' entity will contain the summation of all skills listed.


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
| unassignedConversationsAndFirstTimeConsumer | The number of unassigned conversations where the consumer has started for the first time. |long|
