---
title: Summary
level1: Documents
level2: Data
level3: Agent Metrics API
level4: Methods

order: 20
permalink: agent-metrics-api-methods-summary.html

indicator: messaging
---

Returns a summary on the current state of the contact center. This includes number of agents in the different logged in statuses, weighted average of the agents’ load etc.

**Request**

| Method   |      URL     |
|----------|-------------|
| POST |  https://&lt;domain>/messaging_history/api/account/{accountID}/agent-view/summary   |

_URL Parameters_

Optional:
**Note that you must send a valid JSON object as your request body. If you are using none of the below filters send `{}`**

| Name   |      Description      |  Type/Value |
|----------|-------------|------|
| status |  List of Agent's statuses to be filtered   | Array`<String>`|
| agentIds |  List of agent ids - when provided, data will be returned for the specified agents who are in logged in state. If not provided, data on all logged in agents will be returned   | Array`<String>`|
| skillIds|  List of skill ids - when provided, data will be returned for the agents with the specified skills who are in logged in state.   | Array`<String>`|
| agentGroupIds|  List of agent group ids - when provided, data will be returned for the agents that are member of the specified agent groups who are in logged in state.   | Array`<String>`|

**Response**

_JSON Example_

```json
{
	"accountID": "36703082",
	"summaryResults": {
		"openAssignedConversations": 0,
		"weightedAvgLoad": 2.1,
		"minLoad": 20,
		"maxLoad": 40,
		"minConfiguredMaxSlots": 2,
		"maxConfiguredMaxSlots": 3,
		"numAwayAgents": 0,
		"numBackSoonAgents": 0,
		"numOnlineAgents": 0
	}
}
```

**Elements in the Response**

| Name   |      Description      |  Type/Value |
|----------|-------------|------|
| openAssignedConversations|  Total number of open assigned conversations of logged in agents    | alphanumeric |
| weightedAvgLoad |  Weighted average load of logged in agents, this is represented in percentage value  | alphanumeric |
| minLoad|  Agent’s minimum load    | alphanumeric |
| maxLoad|  Agent’s maximum load    | alphanumeric |
| minConfiguredMaxSlots |  The minimum number of configured maximum slots among agents   | alphanumeric |
| maxConfiguredMaxSlots|  The maximum number of configured maximum slots among agents   | alphanumeric |
| numAwayAgents |  Number of agents in AWAY status    | alphanumeric |
| numBackSoonAgents|  Number of agents in BACK SOON status   | alphanumeric |
| numOnlineAgents|  Number of agents in ONLINE status   | alphanumeric |
