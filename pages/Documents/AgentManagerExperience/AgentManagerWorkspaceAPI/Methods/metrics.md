---
pagename: Metrics
sitesection: Documents
categoryname: "Agent Manager Experience"
documentname: Agent manager workspace API
subfoldername: methods
order: 10
permalink: agent-manager-workspace-api.html
indicator: messaging

---

### General 

The key messaging metrics API retrieves core messaging metrics at the account, skill or group level, for up to the last 24 hours.

Combining this information with other data sources enables you to create your own customized real-time dashboard. Here are some example use cases of the API, that can assist you in analyzing your contact center performance:

- Track how many of your agents are currently available (online, away, back soon) at the skill or group level

- Track how many conversations were resolved and how

- Track the response times of agents by group or skill

- Track consumers waiting times by group or skil

- Retrieve metrics at the group level and automatically include their sub groups

The API is being used today in the LivePerson Conversational Cloud to display the agent manager workspace:

![](img/amws.png)


**Note:**    

This method is subjected to Rate Limiting. User manager should not send more than *X concurrent request* (to be defined) and no more than *Y request per minute* (to be defined). Any additional requests might be rejected with a 429 Status Code. 



### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST| https://[{domain}](/agent-manager-domain-api.html)/manager_workspace/api/account/{accountId}/metrics?offset=0&limit=50&sort=closedConversations:desc

**URL Parameters**

Name| Description  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
sort| Sort the results based on a given metric in a predefined order. | string  | Optional |  <br/>**Valid sort values:**<br/> agentLoad<br/>humanAgentLoad<br/>closedConversations<br/>avgTimeToResponse<br/>avgTimeToFirstResponseFirstAssignment<br/>avgWaitTime<br/>avgWaitTimeFirstResponse<br/>assignedConversations<br/>activeConversations<br/>onlineAgents<br/>awayAgents<br/>backSoonAgents<br/>**Valid order values:**<br/>asc/desc<br/>**Default sort:**<br/>key:asc
offset  | The offset specifies from which record to retrieve the data.  | numeric | Optional | Default is 0
limit  | Max amount of keys (skillIds/agentGroupIds) to be retrieved in the response.  | numeric | Optional | Default is 50. Max value is 50.

**BODY Parameters**

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|filters | Contains parameters to filter by. | Container  | Required | See detailed description [below](#filters)
|metricsToRetrieveByTime | List of metrics that are calculated for the given time range| Array `<String>` | Optional | Valid values:<br/>avg_wait_time<br/>avg_wait_time_first_response<br/>avg_time_to_response<br/>avg_time_to_first_response_first_assignment<br/>closed_conversations<br/>closed_by_agent<br/>closed_by_consumer<br/>auto_closed
|metricsToRetrieveCurrentValue | List of metrics retrieving the current value, not influenced by time | Array `<String>` | Optional | Valid values:<br/>assigned_conversations<br/>active_conversations<br/>agent_load<br/>human_agent_load<br/>human_online_load<br/>online_agents<br/>back_soon_agents<br/>away_agents<br/>available_slots
|responseSections| Represents whether we should return the "all" section, "groupBy" section or both.  | Array `<String>` | Optional | Valid values: all, groupBy. Default value - both sections are returned.
|groupBy| Field according to which all of the metrics should be grouped.  | String | Optional | Valid values: skillId, agentGroupId. In case responseSections contains groupBy, a groupBy value must be returned in order to retrieve grouped metrics.


### filters
_filters info_

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|time {from, to} | Represents events time.  | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 1 minutes, respectively. Time range is limited up to the last 24 hours. Note: This field is required, even if you are not requesting metrics from the metricsToRetrieveByTime section but only asking for the metricsToRetrieveCurrentValue section. 
|agentIds| An array of agent IDs.| Array `<String>`| Optional |
|agentGroupIds | An array of agent group IDs.| Array `<String>` | Optional | 
|skillIds| An array of skill IDs.| Array `<String>`| Optional |
|userTypes | Type of the user conducting of the conversation. | alphanumeric  | Optional | Valid values: HUMAN, BOT.
|includeSubGroups|When this is set to true, any metric retrieved for a specific group will include the total value of the metric on the group level, including its sub-groups. Default value is set to false.|boolean|Optional| 

Request body - json example:

```json
{
    "filters": {
        "time": {
            "from": 1591951787590,
            "to": 1591955386814
        },
        "userTypes":["HUMAN"]
    },
    "groupBy" : "agentGroupId",
    "responseSections": [
       "groupBy"
    ],
    "metricsToRetrieveCurrentValue": [
        "assigned_conversations",	
	"human_agent_load"
    ],
    "metricsToRetrieveByTime": [
        "avg_wait_time",
        "avg_time_to_response",
        "avg_wait_time_first_response",
        "avg_time_to_first_response_first_assignment",
        "closed_conversations"
    ]
}
```


### Response

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
metadata | All response-related Metadata.| container
groupBy  | Contains grouped by metrics values based on the given groupBy and metrics parameters. | container
all | Contains metrics values for all relevant agents.| container

_metadata info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
count  | Number of groups returned based on the groupBy parameter. In case groupBy section is not passed in the request body, count will be set to zero | numeric

_groupBy info_

Name  | Description  | Type/Value
:------------------- | :----------------------------------------------------------------------------- | :---------
groupByField  | The name of the field by which the metrics data is grouped (agentId or agentGroupId) | String
groups  | A list of all the groups with the required metrics data  | Container

_groups info_

| Name| Description | Type/ Value| Notes|
|-----|-------------|------------|------|
| key| The value the metrics data was grouped by.If groupBy was set to skillId, then the key holds the skill id. If the groupBy was set to agentGroupId, then the key holds the group id.	| String |
| keyDescription| The descriptive value the metrics data was grouped by.If groupBy was set to skillId, then the keyDescription holds the skill name. If the groupBy was set to agentGroupId, then the keyDescription holds the group name. Notice: if ID was not successfully associated with any name, return "NA"	| String |
| metrics  | A list of all the metrics with their value | Container|

_metrics info_

| Name| Description | Type/ Value| Notes|
|-----|-------------|------------|------|
| assignedConversations  | The number of open conversations currently assigned to the agent. limited to conversations which started within the past 30 days.| Long|
| activeConversations  | The number of open conversations currently handled by the agent. limited to conversations which started within the past 30 days.| Long|
| agentLoad| The total weight of assigned conversations as a percentage of the maximum concurrent conversations of all agents, including bots.| Double |
| humanAgentLoad| The total weight of assigned conversations as a percentage of the maximum concurrent conversations of all human agents.| Double |
| humanOnlineLoad| The total weight of assigned conversations as a percentage of the maximum concurrent conversations of all human online agents.| Double |
| availableSlots| The total number of available conversations slots to take incoming conversations from the queue (the "Supply"). In case the response is grouped by skilldIds, same slots will be counted under all the skills an agent is assigned to.| Long |
| onlineAgents| Agents currently in the ONLINE state.| Long |
| backSoonAgents| Agents currently in the BACK SOON state.| Long |
| awayAgents| Agents currently in the AWAY state.| Long |
| avgWaitTime  | The average time in millis consumers wait for a human agent response in a conversation. Attributed to the skill and group at the time of response.| Double|
| avgWaitTimeFirstResponse| The average time in millis consumers wait for the first human response in a conversation. Attributed to the skill and group at the time of response.| Double |
| avgTimeToResponse  | The average time in millis it takes a human agent to send a message to the consumer from the time the agent was assigned to the conversation. Attributed to the skill and group at the time of response.| Double|
| avgTimeToFirstResponseFirstAssignment| The average time in millis it takes a human agent to respond to the first message from a consumer, from the time the agent was assigned to the conversation. Measured from the first human agent message sent in a new conversation.Attributed to the skill and group at the time of response.| Double |
| closedConversations| The number of conversations closed within the selected timeframe by the agent, system or consumer.| Long |
| closedByAgent| The number of conversations closed by the agent within the selected timeframe.| Long |
| closedByConsumer| The number of conversations closed by the consumer within the selected timeframe.| Long |
| autoClosed| The number of conversations automatically closed within the selected timeframe.| Long |



_all info_ 

Contains list of metrics with their values - same as in _metrics info_


Response DTO - json example:

```json

{
     "metadata": {
        "count": 3,
        "first": {
            "rel": "first",
            "href": "https://localhost:8082/manager_workspace/api/account/le79144597/metrics?offset=0&limit=1&sort=closedConversations:desc"
        },
        "prev": {
            "rel": "prev",
            "href": "https://localhost:8082/manager_workspace/api/account/le79144597/metrics?offset=0&limit=1&sort=closedConversations:desc"
        },
        "self": {
            "rel": "self",
            "href": "https://localhost:8082/manager_workspace/api/account/le79144597/metrics?offset=1&limit=1&sort=closedConversations:desc"
        },
        "next": {
            "rel": "next",
            "href": "https://localhost:8082/manager_workspace/api/account/le79144597/metrics?offset=2&limit=1&sort=closedConversations:desc"
        },
        "last": {
            "rel": "last",
            "href": "https://localhost:8082/manager_workspace/api/account/le79144597/metrics?offset=2&limit=1&sort=closedConversations:desc"
        }
    },
    "groupBy": {
        "groupByField": "agentGroupId",
        "groups": [                
            {
                "key": "1641709730",
		"keyDescription": "customerAssistanceSkill",
                "metrics": {
                    "assignedConversations": 6,
                    "humanAgentLoad": 1.18,
                    "avgWaitTime": 228876.654,
                    "avgWaitTimeFirstResponse": 798118.667,
                    "avgTimeToResponse": 58490.731,
                    "avgTimeToFirstResponseFirstAssignment": 59779.667,
                    "closedConversations": 1
                }
            }
        ]
    }
}

```
