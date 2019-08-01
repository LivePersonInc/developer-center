---
pagename: Agent List
sitesection: Documents
categoryname: "Real Time Data"
documentname: Agent Metrics API
subfoldername: Methods
permalink: agent-metrics-api-methods-agent-list.html
indicator: messaging
---

This method returns the list of  agents which are eligible to receive conversations and their state. This list of eligible agents depends on the transferred conversation's skill id and the privileges and permissions that the agent has (see offline users or not, take messages from the specific skill, etc.)

**Request**

| Method   |      URL      |
|----------|:-------------:|
| POST |  https://[{domain}](/agent-domain-domain-api.html)/messaging_history/api/account/{accountID}/agent-view/list |

_BODY / POST Parameters_

Filter is sent in the POST data (body) with the following JSON structure:

| Name   |      Description      |  Type/Value | Notes |
|----------|-------------|------|------|
| skillIds | Conversation skill id to determine which agents will be filtered by ability to transfer to skill |    Array`<String>` ||


**Response**

JSON Example:

```json
		        {
			"_metadata": {
				"count": 2,
				"self": {
					"rel": "self",
					"href": "http://va-a.msghist.liveperson.net/messaging_history/api/account/28045150/agent-view/list?limit=500"
				},
				"shardsStatusResult": {
					"partialResult": false
				}
			},
			"accountID": "28045150",
			"agentStatusRecords": [
				{
					"agentId": "3249823",
					"lastUpdatedTimeL": 1490033214963,
					"lastUpdatedTime": "2017-03-20 18:06:54.963+0000",
					"currentStatusStartTimeL": 1490033214963,
					"currentStatusStartTime": "2017-03-20 18:06:54.963+0000",
					"agentName": "agent_name1",
					"agentNickname": "agent_nick1",
					"agentLoginName": "agent1@liveperson.com",
					"agentSkills": [
						{
							"skillId": "2",
							"skillName": "cats"
						},
						{
							"skillId": "3",
							"skillName": "lpsocial"
						},
						{
							"skillId": "1",
							"skillName": "dogs"
						}
					],
					"agentGroupId": -1,
					"agentGroupName": "Main Group",
					"currentStatus": "ONLINE",
					"currentStatusDuration": 92854,
					"load": 0,
					"ringingSlots": 0,
					"configuredMaxSlots": 20,
					"busySlots": 0,
					"openAssignedConversations": 0,
					"intenseConversations": 0,
					"agentPresence": "true",
          "currentConnectionState": "CONNECTED"
				},
				{
					"agentId": "9824982",
					"lastUpdatedTimeL": 1490033214962,
					"lastUpdatedTime": "2017-03-20 18:06:54.962+0000",
					"currentStatusStartTimeL": 1490033214962,
					"currentStatusStartTime": "2017-03-20 18:06:54.962+0000",
					"currentStatusReasonStartTimeL": 1490033214962,
					"currentStatusReasonStartTime": "2017-03-20 18:06:54.962+0000",					
					"agentName": "agent_name2",
					"agentNickname": "agent_nick2",
					"agentLoginName": "agent2@liveperson.com",
					"agentSkills": [
						{
							"skillId": "2",
							"skillName": "cats"
						}
					],
					"agentGroupId": -1,
					"agentGroupName": "Main Group",
					"currentStatus": "AWAY",
					"currentStatusDuration": 10039,
					"currentStatusReasonDuration": 10039,
					"load": 0,
					"ringingSlots": 0,
					"configuredMaxSlots": 20,
					"busySlots": 0,
					"openAssignedConversations": 0,
					"intenseConversations": 0,
					"agentPresence": "true",
					"currentConnectionState": "CONNECTED"
				}
			]
		}
```

| Name   |      Description      |  Type/Value |
|----------|-------------|------|
| agentId |  Agent’s unique identifier   | alphanumeric |
| lastUpdatedTime | Timestamp for the time the metrics were last updated.  |   alphanumeric (yyyyMMddThh:mm:ss.SSS+time zone) |
| lastUpdatedTimeL | Timestamp for the time the metrics were last updated.  | Longnumeric |
| currentStatusStartTime | Timestamp for the time the current status was last updated.  |   alphanumeric (yyyyMMddThh:mm:ss.SSS+time zone) |
| currentStatusStartTimeL | Timestamp for the time the current status was last updated.  | Longnumeric |
| currentStatusReasonStartTime | Timestamp for the time the reason for the "AWAY" status was last updated.  |   alphanumeric (yyyyMMddThh:mm:ss.SSS+time zone) |
| currentStatusReasonStartTimeL | Timestamp for the time the reason for the "AWAY" status was last updated.  | Longnumeric |
| agentName | The agent's full name | alphanumeric  |
| agentNickname | The agent's nickname | alphanumeric  |
| agentLoginName| The agent’s login name  | alphanumeric   |
| agentPictureURL | URL for the picture of the agent  | alphanumeric|
| agentSkills| List of current agent’s skills  |    Array`<Skill>`  |
| agentGroupId| The agent’s group id |    alphanumeric  |
| agentGroupName| The agent’s group name |    alphanumeric  |
| currentStatus| The agent’s current status (can be ONLINE, AWAY, BACK_SOON, OFFLINE) |    alphanumeric  |
| currentStatusDuration | The duration of the current status (in Milliseconds) |    Longnumeric  |
| currentStatusReason| The id of the reason for the agent’s "AWAY" status |    alphanumeric  |
| currentStatusReasonDuration | The duration of the reason for the "AWAY" status (in Milliseconds) |    Longnumeric  |
| load| Indication for the agent’s efficiency (i.e. the amount of work the agent needs to handle, relative to the maximum capacity). It is the total weight of the assigned conversations divided by the agent’s maximum capacity. This is represented in percentage value. |    alphanumeric  |
| ringingSlots| Number of ringing slots |    alphanumeric  |
| configuredMaxSlots| The agent’s number of configured maximum slots |    alphanumeric  |
| busySlots| The agent’s number of busy slots |    alphanumeric  |
| openAssignedConversations| The agent’s number of open assigned conversations|    alphanumeric  |
| intenseConversations| The agent’s number of intense conversations |    alphanumeric  |
| currentConnectionState | The agent's state (CONNECTED or DISCONNECTED) | alphanumeric |
| agentPresence | Indicator whether the agent is in presence mode ("true" or "false") | alphanumeric |

_Skill_

| Name   |      Description      |  Type/Value |
|----------|-------------|------|
| skillId| Skill’s unique identifier |    alphanumeric  |
| skillName| Skill’s name |    alphanumeric  |
