---
pagename: Agent View
redirect_from:
  - 
sitesection: Documents
categoryname: "Reporting"
documentname: Key Messaging Metrics API
subfoldername: Methods
order: 10
permalink: key-messaging-metrics-api-methods-agent-view.html

indicator: messaging
---

This method returns core messaging metrics at agent level for up to the last 24 hours.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST| https://[{domain}](/agent-manager-domain-api.html)/manager_workspace/api/account/{accountId}/agent_view?offset=0&limit=50&sort=agentLoad:asc

**URL Parameters**

Name| Description  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
sort| Sort the results based on a given metric in a predefined order. | string  | Optional | Default value: agentId:asc<br/>**Valid sort values:**<br/> agentLoad<br/>closedConversations<br/>avgTimeToResponse<br/>avgTimeToFirstResponseFirstAssignment<br/>avgTimeToFirstResponseAllAssignments<br/>avgWaitTime<br/>avgWaitTimeFirstResponse<br/>assignedConversations<br/>activeConversations<br/>concludedConversations<br/>closedRate<br/>transferRate<br/>intentMatchedRate<br/>pendingAgentResponseRate<br/>agentName<br/>agentStatus<br/>csat<br/>fcr<br/>nps<br/>maxSlots<br/>**Valid order values:**<br/>asc/desc
offset  | The offset specifies from which record to retrieve the data.  | numeric | Optional | Default is 0.
limit  | Max amount of agents to be received in the response.  | numeric | Optional | Default is 50.

**Note:** Total supported results is 1000, meaning offset+limit can't exceed 1000.

**BODY Parameters**

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|filters | Contains parameters to filter by. | Container  | Required |
|includeAgentMetadata| Indicates whether the response should include agent's metadata. | Boolean | Optional | Default value: true.
|metricsToRetrieveByTime | List of metrics that are calculated for the given time range| Array `<String>` | Optional | Valid values:<br/>closed_conversations<br/>avg_wait_time<br/>avg_wait_time_first_response<br/>avg_time_to_response<br/>avg_time_to_first_response_first_assignment<br/>avg_time_to_first_response_all_assignments<br/>transfer_rate<br/>close_rate<br/>concluded_conversations<br/>transfers<br/>back_to_queue<br/>agent_status_duration<br/>agent_status_with_reason_duration<br/>agent_login_duration<br/>agent_online_duration<br/>closed_by_agent<br/>closed_by_consumer<br/>auto_closed<br/>intent_matched_rate<br/>fcr<br/>nps<br/>csat<br/>avg_conversations_duration<br/>
|metricsToRetrieveCurrentValue | List of metrics retrieving the current value, not influenced by time | Array `<String>` | Optional | Valid values:<br/>active_conversations<br/>assigned_conversations<br/>agent_load<br/>agent_current_status<br/>agent_current_status_start_time<br/>agent_current_status_reason<br/>agent_current_status_reason_start_time<br/>pending_agent_response<br/>pending_agent_response_rate<br/>available_slots<br/>max_slots

_filters info_ 

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|time {from, to} | Represents events time.  | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 1 minutes, respectively. Time range is limited up to the last 24 hours.
|agentIds| An array of agent IDs.| Array `<String>`| Optional |
|agentGroupIds | An array of agent group IDs.| Array `<String>` | Optional |
|agentSkillIds| An array of skill IDs.| Array `<String>`| Optional | The agent's configured skills. This filter impacts the returned agents' population so that only agents which are assigned to the given skills will be returned.
|userTypes | Type of the user conducting of the conversation. | alphanumeric  | Optional | Valid values: SYSTEM, HUMAN, BOT.
|effectiveAgentStatus | Current agent availablity.  | Array `<String>`  | Optional | Valid values: ONLINE, OFFLINE, AWAY, BACK_SOON.<br/>OFFLINE agents population will include agents which were logged in within the selected time frame and are currently logged out.<br/>Default value: ["ONLINE","BACK_SOON","AWAY"] 
    
Request body — JSON example:

```json
{
    "filters": {
        "time": {
            "from": 1573378572695,
            "to": 1573464967376
        },
        "agentIds": [
            "2434634412"
        ],
        "agentGroupIds": [
            "-1"
        ],
        "agentSkillIds": [
            "2434921912"
        ],
        "userTypes": [
            "HUMAN"
        ],
        "effectiveAgentStatus": [
            "ONLINE",
            "BACK_SOON",
            "AWAY"
        ]
    },
    "includeAgentMetadata": "true",
    "metricsToRetrieveCurrentValue": [
    	"agent_load",
        "active_conversations",
        "assigned_conversations",
        "agent_current_status",
        "agent_current_status_start_time",
        "agent_current_status_reason",
        "agent_current_status_reason_start_time"
    ],
    "metricsToRetrieveByTime": [
        "closed_conversations",
        "avg_wait_time",
        "avg_wait_time_first_response",
        "avg_time_to_response",
        "avg_time_to_first_response_first_assignment",
        "agent_status_duration"
    ]
}
```


### Response

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
metadata | All response-related Metadata.| container
agentViewRecords  | List of agents' records. | container

_metadata info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
count  | Number of agents returned based on the given filtering params| long

_agentViewRecords info_

| Name| Description | Type/ Value| Notes|
|-----|-------------|------------|------|
| agentMetadata| Agent's configuration data. | container | 
| agentId| The id of the agent. | String | 
| agentGroupId| The group the agent is assigned to. | long | 
| agentCurrentStatus| The current status of the agent. | String |
| agentCurrentStatusStartTime  | The start time of the current status as timestamp. Can be used for duration calculation. | Long| 
| agentCurrentStatusReason  | The current status reason in case of AWAY status | 
| agentCurrentStatusReasonStartTime  | The start time of the current status reason as timestamp. Can be used for duration calculation. | Long|
| activeConversations| The current active conversations of the agent.| Long |
| assignedConversations  | The current open conversations that are assigned to the agent  | Long|
| agentLoad| The current load of the agent, including bot agents.| Double |
| avgWaitTime  | The average time difference in millis between each human agent response and consumer message (first message in a seq) during the conversation, including transfers within the selected timeframe.  | Double|
| avgWaitTimeFirstResponse| The average time difference in millis between the first human agent response and the first consumer message in the conversation (does not include transfers) within the selected timeframe.| Double |
| avgTimeToResponse  | The average time difference in millis between each human agent response and consumer message (first message in a seq) during the conversation, including transfers within the selected timeframe. This value doesn't include the queue time before the agent assignment.  | Double|
| avgTimeToFirstResponseFirstAssignment| The average time difference in millis between the first human agent response and the first human agent assignment within the selected timeframe.| Double |
| avgTimeToFirstResponseAllAssignments  | The average time difference in millis between the first human agent response and the human agent assignment after every human agent assignment during the conversation within the selected timeframe. | Double|
| closedConversations| The number of conversations that were closed within the selected timeframe.| Long |
| agentStatusDurationList | Agent status duration grouped by login status (Online / BackSoon / Away) within the selected timeframe.| Array `<StatusDuration>` | Freshness: 1 minute, does not include offline status and bots
| agentStatusWithReasonDurationList | Agent status duration grouped by login status (Online / BackSoon / Away), and by away reason, within the selected timeframe.| Array `<StatusDuration>` | Freshness: 1 minute, does not include offline status and bots
| loginDuration | Agent login duration (Online / BackSoon / Away) within the selected timeframe.| Long | Freshness: 1 minute, does not include bots
| transfers | The number of escalated conversation with Skill or Agent reason, within the selected timeframe.| Long |
| backToQueue| The number conversations that were transferred back to queue within the selected timeframe.| Long |
| csat | The ratio bwtween the number of questions which were answered with 4 or 5 (top two boxes) to the total responses submitted by consumers to a CSAT question within the selected timeframe.| Double |
| avgConversationsDuration| The average handling time of closed conversations within the selected timeframe.| Long |
| onlineDuration | Agent online duration within the selected timeframe.| Long  | Freshness: 1 minute, does not include bots
| transferRate | transfers / concludedConversations within the selected timeframe.| Double
| closeRate | closedConversations / concludedConversations within the selected timeframe.| Double
| concludedConversations | The total number of conversations that were transferred or closed by the agent within the selected timeframe. | Long
| pendingAgentResponse | The total number of conversations that are pending for agent response.| Long
| pendingAgentResponseRate | pendingAgentResponse / assignedConversations | Double
| closedByAgent| The number of conversations closed by the agent within the selected timeframe.| Long |
| closedByConsumer| The number of conversations closed by the consumer within the selected timeframe.| Long |
| autoClosed| The number of conversations automatically closed within the selected timeframe.| Long |
| intentMatchedRate| The number of matched intents out of the total messages in the conversation within the selected timeframe.| Long |
| maxSlots| Agent's configured max slots.| Long |
| availableSlots| The number of currently available slots.| Long |

_agentMetadata info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
agentName  | Agent's name| String
agentNickname  | Agent's nickname| String
agentLoginName  | Agnet's login name| String
agentGroupName  | The name of the group the agent is assigned to| String
agentPictureUrl  | Agent's picture url| String
configuredMaxSlots  | Agent's configured max slot| Long
agentSkills  | Agent's configured skills| Array `<Skill>`

_skill info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
skillId  | Skill Id| Long
skillName  | Skill name| Stirng

_statusDuration info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
agentStatus  | (ONLINE / BACK_SOON / AWAY) | String
agentStatusDuration  | status duration in ms | Long
agentStatusReasonId |  (NA / away reason id) | String |


Response DTO — JSON example:

```json

{
    "metadata": {
        "count": 2,
        "self": {
            "rel": "self",
            "href": "https://lp-agentmngworkspace-qa.dev.lprnd.net/manager_workspace/api/account/le79144597/agent_view?offset=0&limit=1&sort=agentLoad:desc"
        },
        "next": {
            "rel": "next",
            "href": "https://lp-agentmngworkspace-qa.dev.lprnd.net/manager_workspace/api/account/le79144597/agent_view?offset=1&limit=1&sort=agentLoad:desc"
        },
        "last": {
            "rel": "last",
            "href": "https://lp-agentmngworkspace-qa.dev.lprnd.net/manager_workspace/api/account/le79144597/agent_view?offset=1&limit=1&sort=agentLoad:desc"
        }
    },
    "agentViewRecords": [
        {
            "agentId": "2434634412",
            "agentGroupId": -1,
            "agentCurrentStatus": "ONLINE",
            "agentCurrentStatusStartTime": 1597063917599,
            "agentCurrentStatusReasonId": "NA",
            "agentCurrentStatusReasonStartTime": 1597063919759,
            "activeConversations": 4,
            "assignedConversations": 4,
            "agentLoad": 0.133,
            "onlineDuration": 6555810,
            "loginDuration": 6555810, 
            "avgWaitTime": 71470.5,
            "avgWaitTimeFirstResponse": 136519.0,
            "avgTimeToResponse": 68209.5,
            "agentStatusDurationList": [
                {
                    "agentStatus": "AWAY",
                    "agentStatusDuration": 2000
                },
                {
                    "agentStatus": "ONLINE",
                    "agentStatusDuration": 6555810
                }
            ],
            "agentMetadata": {
                "agentName": "test@liveperson.com",
                "agentNickname": "test@liveperson.com",
                "agentLoginName": "test@liveperson.com",
                "agentGroupName": "Main Group",
                "configuredMaxSlots": 30,
                "agentSkills": [
                    {
                        "skillId": 2434921912,
                        "skillName": "skill1"
                    },
                    {
                        "skillId": 3662292910,
                        "skillName": "Skill2"
                    }
                ]
            }
        }
    ]
}


```



