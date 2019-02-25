---
pagename: Messaging Skill Segment
redirect_from:
  - data-messaging-operations-messaging-skill-segment.html
sitesection: Documents
categoryname: "Real Time Data"
documentname: Messaging Operations API
subfoldername: Methods
permalink: messaging-operations-api-methods-messaging-skill-segment.html
indicator: messaging
---

Retrieves messaging conversation related metrics at the skill level.

This method returns data on metrics which are calculated for each skill separately. The logic behind these metrics is based on segments of Messaging conversations, since one conversation can potentially go through many different skills in its lifetime. A skill-segment begins when a consumer enters a skill’s queue and once the skill changes (for example, when a transfer to another skill takes place), the segment ends. A segment of a conversation is determined based on the skill assigned to it.

A single conversation may include more than one segment for each participating skill. This happens when the conversation is transferred to another skill and back to the original skill, for example.

### Retrieving Messaging segment Data by Account and Skills

#### Request

| Method | URL |
| :------- | :------ |
| GET | `https://<domain>/operations/api/account/{accountID}/msgskillsegments?timeframe=<timeframe in minutes>&skillIds=<skillIds>&interval=<interval size in minutes>&userType=<segment user type>&v=<version>` |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time <b>minus</b> the timeframe parameter. The maximum timeframe value is 1440 minutes (24 hours), meaning the maximum amount of time this API allows you to get data from is 24 hours back from the time when you make the call. | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics in the response will be grouped by the requested skills. When not provided, metrics in the response will be calculated for all skills. You can provide one or more skillIds. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all, or do not specify this parameter at all. | numeric, comma separated | optional |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |
| userType | filter segments by user type (only human, only bot or all), both user types in segment will be calculated with all only. When provided, only segments with parameter user type will be aggregated. <br> Example: <br> timeframe=60&userType=human (correct) <br> timeframe=60&userType=bot (correct) <br> timeframe=60&userType=agent (bad request) | string | optional |

#### Response

**JSON Example**

Request by skillIds=12,13 (no interval), timeframe=180

```json
 {
    "skillsMetrics": {
        "12": {
	        "totalSkillConversationSegments": 95,
            "skillSegmentsAbandonedByConsumers": 21,
            "skillSegmentsAbandonedByConsumersInQueue": 17,
            "skillSegmentsWithNonResponsiveConsumers": 27,
            "skillSegmentsWithNonResponsiveAgents": 13,
            "interactiveSkillSegments": 34,
            "avgTimetoFirstAgentMessageFromAgentAssignment": 28
         },
        "13": {
		    "totalSkillConversationSegments": 82,
            "skillSegmentsAbandonedByConsumers": 14,
            "skillSegmentsAbandonedByConsumersInQueue": 10,
            "skillSegmentsWithNonResponsiveConsumers": 4,
            "skillSegmentsWithNonResponsiveAgents": 12,
            "interactiveSkillSegments": 52,
            "avgTimetoFirstAgentMessageFromAgentAssignment": 28
        }
    },
    "metricsTotal": {
	    "totalSkillConversationSegments": 177,
        "skillSegmentsAbandonedByConsumers": 35,
        "skillSegmentsAbandonedByConsumersInQueue": 27,
        "skillSegmentsWithNonResponsiveConsumers": 31,
        "skillSegmentsWithNonResponsiveAgents": 25,
        "interactiveSkillSegments": 86,
        "avgTimetoFirstAgentMessageFromAgentAssignment": 28
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
                "totalSkillConversationSegments": 45,
                "skillSegmentsAbandonedByConsumers": 8,
                "skillSegmentsAbandonedByConsumersInQueue": 6,
                "skillSegmentsWithNonResponsiveConsumers": 11,
                "skillSegmentsWithNonResponsiveAgents": 4,
                "interactiveSkillSegments": 22,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 40
              },
              "13": {
                "totalSkillConversationSegments": 40,
                "skillSegmentsAbandonedByConsumers": 6,
                "skillSegmentsAbandonedByConsumersInQueue": 4,
                "skillSegmentsWithNonResponsiveConsumers": 1,
                "skillSegmentsWithNonResponsiveAgents": 5,
                "interactiveSkillSegments": 28,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 30
              }
            },
            "metricsTotal": {
              "totalSkillConversationSegments": 85,
              "skillSegmentsAbandonedByConsumers": 14,
              "skillSegmentsAbandonedByConsumersInQueue": 10,
              "skillSegmentsWithNonResponsiveConsumers": 12,
              "skillSegmentsWithNonResponsiveAgents": 9,
              "interactiveSkillSegments": 50,
              "avgTimetoFirstAgentMessageFromAgentAssignment": 35
            }

        },
        {
            "timestamp": 1516258315679,
            "skillsMetrics": {
              "12": {
                "totalSkillConversationSegments": 50,
                "skillSegmentsAbandonedByConsumers": 13,
                "skillSegmentsAbandonedByConsumersInQueue": 11,
                "skillSegmentsWithNonResponsiveConsumers": 16,
                "skillSegmentsWithNonResponsiveAgents": 9,
                "interactiveSkillSegments": 12,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 25
              },
              "13": {
                "totalSkillConversationSegments": 42,
                "skillSegmentsAbandonedByConsumers": 8,
                "skillSegmentsAbandonedByConsumersInQueue": 6,
                "skillSegmentsWithNonResponsiveConsumers": 3,
                "skillSegmentsWithNonResponsiveAgents": 7,
                "interactiveSkillSegments": 24,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 35
              }
            },
            "metricsTotal": {
              "totalSkillConversationSegments": 92,
              "skillSegmentsAbandonedByConsumers": 21,
              "skillSegmentsAbandonedByConsumersInQueue": 17,
              "skillSegmentsWithNonResponsiveConsumers": 19,
              "skillSegmentsWithNonResponsiveAgents": 16,
              "interactiveSkillSegments": 36,
              "avgTimetoFirstAgentMessageFromAgentAssignment": 30
            }

        }
    ],
    "timeframeSummary":
    {
        "skillsMetrics": {
            "12": {
			    "totalSkillConversationSegments": 95,
                "skillSegmentsAbandonedByConsumers": 21,
                "skillSegmentsAbandonedByConsumersInQueue": 17,
                "skillSegmentsWithNonResponsiveConsumers": 27,
                "skillSegmentsWithNonResponsiveAgents": 13,
                "interactiveSkillSegments": 34,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 28
            },
            "13": {
			    "totalSkillConversationSegments": 82,
                "skillSegmentsAbandonedByConsumers": 14,
                "skillSegmentsAbandonedByConsumersInQueue": 10,
                "skillSegmentsWithNonResponsiveConsumers": 4,
                "skillSegmentsWithNonResponsiveAgents": 12,
                "interactiveSkillSegments": 52,
                "avgTimetoFirstAgentMessageFromAgentAssignment": 28
               }
           },
        "metricsTotal": {
	        "totalSkillConversationSegments": 177,
            "skillSegmentsAbandonedByConsumers": 35,
            "skillSegmentsAbandonedByConsumersInQueue": 27,
            "skillSegmentsWithNonResponsiveConsumers": 31,
            "skillSegmentsWithNonResponsiveAgents": 25,
            "interactiveSkillSegments": 86,
            "avgTimetoFirstAgentMessageFromAgentAssignment": 28
        }
    }
}

```

**Elements in the Response**

*Note*: All metrics under the hierarchy of `skillsMetrics` represent the average values for each skill under the interval/aggregation they appear in (or the average/aggregate value of the entire timeframe if no intervals are provided). Metrics under the `metricsTotal` entity will contain the summation of all aggregation/average of the same hierarchy level.


| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillsMetrics | When skillIds are provided: An array of skills with their metrics. <br> When interval size is provided: The response will have the skillsMetrics element under each interval, representing the data for the related interval. <br> There will also be a skillsMetrics element at the end of the response, representing the data of the whole requested timeframe. <br>If there is no data for a specific skill, it will not be included in the array. <br> If there is no data for any of the skills, this member will have an empty element as value. | element |
| metricsTotals | The total metrics for all requested skills.  <br> When interval is provided: Total metrics for all requested intervals.<br> If a skillId or SkillIds are requested and there is no data for any of them, this element will still include all of the metrics with the value set to zero. <br> Note: Totals may not add up due to rounding differences. | element |
| skill id | When skillIds values provided: The skill ID. | long |
| timeframeSummary | When interval is provided in the request, this entity will contain data for the entire timeframe, similar to the response when requesting with no intervals. <br> Note that the averages values for the entire timeframe will NOT be equal to the summation of totals under each interval. | element |
| timestamp | When interval size is provided in the request, the response will be partitioned by intervals. The timestamp is the UTC timestamp in milliseconds representing the start time of the interval. <br> Example : Interval size: 10 min. Interval start and end time: 18/01/2018 08:25:32 - 18/01/2018 08:35:32. Timestamp: 1516263932000. <br> Intervals are not rounded, and will be determined by the time the request was made. <br> Example: Request was made at current time (now): 8:51:55, with interval=60 and timeframe=120 parameters specified. <br> The response will contain two intervals, latest representing data from 7:51:55-8:51:55 (timestamp of 7:51:55), and the earliest representing data from 6:51:55-7:51:55 (timestamp of 6:51:55). | long |
| totalSkillConversationSegments | Total number of skill-segments. May be larger than the number of conversations assigned to the skill as a conversation may include more than one skill segment. | Long |
| skillSegmentsAbandonedByConsumers | Number of times consumers abandoned a conversation during the last skill-segment. An abandoned segment ends with the consumer closing the conversation with no response sent from the agent. | Long |
| skillSegmentsAbandonedByConsumersInQueue |Number of times consumers abandoned a conversation while in queue, waiting to be assigned to an agent. Measured for the last skill-segment of a conversation, for conversations closed by consumers. | Long |
| skillSegmentsWithNonResponsiveConsumers |The number of skill-segments which ended in a transfer to another skill or closed, with no response from the consumer to an agent’s message. | Long |
| skillSegmentsWithNonResponsiveAgents | The number of skill-segments which ended in a transfer to another skill or closed by an agent or system (“auto close”), with no message from an agent. | Long |
| interactiveSkillSegments |The number of skill-segments which ended in a transfer to another skill or closed with at least one response from a consumer to a an agent message. | Long |
| avgTimetoFirstAgentMessageFromAgentAssignment | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Measured in millisecond. | Long |
