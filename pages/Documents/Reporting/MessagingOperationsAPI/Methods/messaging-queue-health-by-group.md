---
pagename: Messaging Queue Health By Group
sitesection: Documents
categoryname: "Reporting"
documentname: Messaging Operations API
subfoldername: Methods
order: 30
permalink: messaging-operations-api-methods-messaging-queue-health-by-group.html

indicator: messaging
---

Retrieves the information about the current messaging queue state (and all its related metrics) in the account, skill and agent group level


**Note**:

1. The messaging queue data is currently not available by default, in order to enable the data flow please contact your account manager.

2. These methods are subject to Rate-Limiting policies. This means that the maximum number of concurrent requests is limited on the server side. As most incoming requests are measured in seconds, the likelihood of your requests actually encountering an issue is rare; however, if you do encounter a limit, you can expect to receive a 429 status code in an error response from the server.

If your request is throttled in this manner, it is recommended that you provide a window of at least 1 second in between subsequent request retries. Clients who submit "bursty" traffic patterns to UMS may face rate-limiting issues, so it is recommended to smoothen traffic to a more distributed pattern whenever possible.

3. **Limitation**: in order for the queue data to appear, there must be at least one agent logged in to LE.

### Request Headers

| Header | Description |
| :------ | :------------- |
| Authorization | Contains appkey and token (oAuth1) to allow request authentication and authorization. |

###Path Parameters

| Parameter | Description | Type / Value |
| :---------- | :------------- | :-------------- |
| accountId | LP site ID | String  |

### Request

| Method | URL |
| :------- | :------ |
| GET | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountID}/msgqueuehealthbygroup/current/?skillIds=<skillIDs>&allocatedAgentGroupIds=<agentGroupIDs>&includeSubGroups=<true/false>&metrics=<metrics>&timeframe=72&v=<version> |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, defaults to 'all' skills. You can provide one or more skillIDs. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all or do not specify this parameter at all. | numeric, comma separated | optional |
| allocatedAgentGroupIds | When set to true, metrics in the response will be grouped by the requested agent groups.  When not provided, defaults to 'all' agent groups.You can provide one or more agent group IDs. <br> Example: skillIds=44,173. To retrieve all agent groups active for the time period, use allocatedAgentGroupIds=all or do not specify this parameter at all.|  numeric, comma separated | optional |
| includeSubGroups | When set to true, metrics in the response will be calculated according to the agent groups and their sub groups. Default if not specified is false| boolean | optional |
| metrics | When provided, response metrics will be filtered only by the requested metric. Possible values: unassignedConversations,unassignedConversationsAndFirstTimeConsumer,actionableConversations,actionableAndDuringTransferToAgent,actionableAndDuringTransferToSkill,actionableAndDuringBackToQueue,notActionableConversations,notActionableAndDuringTransferToAgent,notActionableAndDuringTransferToSkill,notActionableAndDuringBackToQueue. example: metrics=notActionableAndDuringTransferToSkill,notActionableAndDuringBackToQueue. Default if not specified will return all metrics. | string, comma separated | optional |
| timeframe | Include conversation that were create or updated in the given timeframe. Time is in hours | string| optional, default is 24 hours |

### Response

**JSON Example**

Request by skillIds=12,13 and allocatedAgentGroupIds=22,33

```json
{
  "skillGroupMetrics": {
    "12": {
      "22": {
        "unassignedConversations": 24,
        "unassignedConversationsAndFirstTimeConsumer": 4,
        "actionableConversations": 10,
        "actionableAndDuringTransferToAgent": 2,
        "actionableAndDuringTransferToSkill": 0,
        "actionableAndDuringBackToQueue": 8,
        "notActionableConversations": 14,
        "notActionableAndDuringTransferToAgent": 5,
        "notActionableAndDuringTransferToSkill": 7,
        "notActionableAndDuringBackToQueue": 2
      },
      "33": {
        "unassignedConversations": 32,
        "unassignedConversationsAndFirstTimeConsumer": 7,
        "actionableConversations": 12,
        "actionableAndDuringTransferToAgent": 6,
        "actionableAndDuringTransferToSkill": 4,
        "actionableAndDuringBackToQueue": 2,
        "notActionableConversations": 20,
        "notActionableAndDuringTransferToAgent": 8,
        "notActionableAndDuringTransferToSkill": 7,
        "notActionableAndDuringBackToQueue": 5
      }
    },
    "13": {
      "33": {
        "unassignedConversations": 17,
        "unassignedConversationsAndFirstTimeConsumer": 4,
        "actionableConversations": 17,
        "actionableAndDuringTransferToAgent": 6,
        "actionableAndDuringTransferToSkill": 7,
        "actionableAndDuringBackToQueue": 4,
        "notActionableConversations": 0,
        "notActionableAndDuringTransferToAgent": 0,
        "notActionableAndDuringTransferToSkill": 0,
        "notActionableAndDuringBackToQueue": 0
      }
    }
  }
}
```

**Elements in the Response**

<div class="important">All metrics under the hierarchy of 'skillGroupMetrics' represent the most recent values for each skill ang agent group. <b>In case there is no relevant data on metrics the default value is -1</b>.</div>


| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillGroupMetrics | An array of skills group by agent groups with their metrics. | element |
| unassignedConversations | The number of unassigned conversations. <br> Equal to the number of actionable conversation + not actionable conversation. |long|
| actionableConversations | The number of actionable conversations. |long|
| notActionableConversations | The number of not actionable conversations. |long|
| actionableAndDuringTransferToAgent | The number of actionable conversations that were transferred to another agent. |long|
| actionableAndDuringTransferToSkill | The number of actionable conversations that were transferred to another skill. |long|
| actionableAndDuringBackToQueue | The number of actionable conversations that were returned to queue. |long|
| notActionableAndDuringTransferToAgent | The number of not actionable conversations that were transferred to another agent. |long|
| notActionableAndDuringTransferToSkill | The number of not actionable conversations that were transferred to another skill. |long|
| notActionableAndDuringBackToQueue | The number of not actionable conversations that were returned to queue. |long|