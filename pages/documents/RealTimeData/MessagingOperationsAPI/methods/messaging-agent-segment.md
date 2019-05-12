---
pagename: Messaging Agent Segment
redirect_from:
  - data-messaging-operations-messaging-agent-segment.html
sitesection: Documents
categoryname: "Real Time Data"
documentname: Messaging Operations API
subfoldername: Methods
permalink: messaging-operations-api-methods-messaging-agent-segment.html
indicator: messaging
---

Retrieves messaging conversation related metrics at the agent level.

This method returns data on metrics which are calculated for each agent separately. The logic behind these metrics is based on segments of Messaging conversations, since one conversation can potentially go through many different agents in its lifetime. 

An agent-segment begins when an agent is assigned to a messaging conversation and once the agent changes (for example, the conversation has been transferred or closed) the segment ends. A segment of a conversation is determined based on the agent assigned to it.

A single conversation may include more than one segment for each participating agent. This happens when the conversation is transferred to another agent and back to the original agent, for example.

### Limitations

The following messages are omitted from the calculations:
    - Responses given to the consumer by users who are not the assigned agent 
    - Messages provided by the Controller Bot (system) 
    - In case of resumed conversations - the first message sent by the agent after resuming a conversation is not included in the averages
    - Takeovers - the first message sent by the manager after taking over a conversation is not included in the averages


### Retrieving Messaging segment Data by Account and Agents

#### Request

| Method | URL |
| :------- | :------ |
| GET | `https://<domain>/operations/api/account/{accountID}/msgagentsegments?timeframe=<timeframe in minutes>&agentIds=<agentIds>&interval=<interval size in minutes>&skillIds=<skillIds>&groupIds=<agentGroupIds>&userType=<segment's user type>&source=<segment's integration source>&v=<version>&metrics=<desired metrics to be represented>` |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time <b>minus</b> the timeframe parameter. The maximum timeframe value is 1440 minutes (24 hours), meaning the maximum amount of time this API allows you to get data from is 24 hours back from the time when you make the call. | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| agentIds | When provided, metrics in the response will be grouped by the requested agents. When not provided, metrics in the response will be calculated for all agents. You can provide one or more agentIds. <br> Example: agentIds=4444,15333. To retrieve all agents active for the time period, use agentIds=all, or do not specify this parameter at all. | numeric, comma separated | optional |
| skillIds | When provided, metrics in the response will be grouped by the requested skills in addition to regular grouping. metrics will be provided per skill and per agent within each skill.  When not provided, metrics in the response will not be grouped by skills at all. You can provide one or more skillIds. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all. | numeric, comma separated | optional |
| groupIds | When provided, metrics in the response will be filtered by the requested agent's group Ids. When not provided, metrics in the response will be calculated for all groups. You can provide one or more groupIds. <br> Example: groupIds=4444,15333. To retrieve segments from all agent's groups active for the time period, use groupIds=all, or do not specify this parameter at all. | numeric, comma separated | optional |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |
| userType | When provided, metrics in the response will be filtered by the agent's user type (human only, bot only or all). "All" will select both user types. When provided, only segments with relevant user type will be returned. <br> Example: <br> timeframe=60&userType=human <br> timeframe=60&userType=bot <br> timeframe=60&userType=all | string | optional |
| source | When provided, metrics in the response will be filtered by the integration source - the source which the conversation of this segment has started from (for example: Facebook, SMS, Web, App etc.) To retrieve segments from all sources, use source=all, or do not specify this parameter at all.  <br> Example: <br> timeframe=60&source=APP <br> timeframe=60&source=FACEBOOK <br> timeframe=60&source=all | string | optional |
| metrics | When provided, only those metrics will be presented within the response. To include all metrics within the response, use metrics=all, or do not specify this parameter at all. totalAgentConversationSegments metric will always be displayed, no matter what is indicated in 'metrics'   <br> Example: <br> timeframe=60&metrics=avgAgentMessagesinAgentSegment <br> timeframe=60&metrics=avgTimetoFirstAgentMessageFromAgentAssignment,interactiveAgentSegments,agentSegmentsWithNonResponsiveConsumers <br> timeframe=60&metrics=all | string, comma separated | optional |

#### Response

**JSON Example**

Request by agentIds=12,13 (no interval), timeframe=180

```json
   {
   "agentsMetrics": {
       "metricsPerAgent": {
         "12": {
           "totalAgentConversationSegments": 5,
           "avgAgentMessagesinAgentSegment": 1.4,
           "avgAgentSegmentDuration": 13000,
           "interactiveAgentSegments": 5,
           "agentSegmentsAbandonedByConsumers": 0,
           "agentSegmentsWithNonResponsiveConsumers": 0,
           "agentSegmentsWithNonResponsiveAgents": 0,
           "avgTimetoFirstAgentMessageFromAgentAssignment": 1800,
           "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
           "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
           "avgTimeToResponseFromAgentAssignment": 2428
         },
         "13": {
           "totalAgentConversationSegments": 3,
           "avgAgentMessagesinAgentSegment": 1,
           "avgAgentSegmentDuration": 14000,
           "interactiveAgentSegments": 3,
           "agentSegmentsAbandonedByConsumers": 0,
           "agentSegmentsWithNonResponsiveConsumers": 0,
           "agentSegmentsWithNonResponsiveAgents": 0,
           "avgTimetoFirstAgentMessageFromAgentAssignment": 4000,
           "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
           "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
           "avgTimeToResponseFromAgentAssignment": 4000
         }
       }
     },
     "metricsTotal": {
       "totalAgentConversationSegments": 8,
       "avgAgentMessagesinAgentSegment": 1.25,
       "avgAgentSegmentDuration": 13375,
       "interactiveAgentSegments": 8,
       "agentSegmentsAbandonedByConsumers": 0,
       "agentSegmentsWithNonResponsiveConsumers": 0,
       "agentSegmentsWithNonResponsiveAgents": 0,
       "avgTimetoFirstAgentMessageFromAgentAssignment": 2625,
       "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
       "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
       "avgTimeToResponseFromAgentAssignment": 2900
     }
   }
```

Request by agentIds=12,13 and skillIds=333,444 (no interval), timeframe=180
```json
   {
       "metricsPerSkill": {
           "333": {
               "metricsPerAgent": {
                   "12": {
                     "totalAgentConversationSegments": 5,
                     "avgAgentMessagesinAgentSegment": 1.4,
                     "avgAgentSegmentDuration": 13000,
                     "interactiveAgentSegments": 5,
                     "agentSegmentsAbandonedByConsumers": 0,
                     "agentSegmentsWithNonResponsiveConsumers": 0,
                     "agentSegmentsWithNonResponsiveAgents": 0,
                     "avgTimetoFirstAgentMessageFromAgentAssignment": 1800,
                     "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
                     "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
                     "avgTimeToResponseFromAgentAssignment": 2428
                   }
               }
           },
          "444": {
              "metricsPerAgent": {
                  "13": {
                     "totalAgentConversationSegments": 3,
                     "avgAgentMessagesinAgentSegment": 1,
                     "avgAgentSegmentDuration": 14000,
                     "interactiveAgentSegments": 3,
                     "agentSegmentsAbandonedByConsumers": 0,
                     "agentSegmentsWithNonResponsiveConsumers": 0,
                     "agentSegmentsWithNonResponsiveAgents": 0,
                     "avgTimetoFirstAgentMessageFromAgentAssignment": 4000,
                     "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
                     "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
                     "avgTimeToResponseFromAgentAssignment": 4000
                  }
              }
          }
       },
       "agentsMetrics": {
           "metricsPerAgent": {
             "12": {
               "totalAgentConversationSegments": 5,
               "avgAgentMessagesinAgentSegment": 1.4,
               "avgAgentSegmentDuration": 13000,
               "interactiveAgentSegments": 5,
               "agentSegmentsAbandonedByConsumers": 0,
               "agentSegmentsWithNonResponsiveConsumers": 0,
               "agentSegmentsWithNonResponsiveAgents": 0,
               "avgTimetoFirstAgentMessageFromAgentAssignment": 1800,
               "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
               "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
               "avgTimeToResponseFromAgentAssignment": 2428
             },
             "13": {
               "totalAgentConversationSegments": 3,
               "avgAgentMessagesinAgentSegment": 1,
               "avgAgentSegmentDuration": 14000,
               "interactiveAgentSegments": 3,
               "agentSegmentsAbandonedByConsumers": 0,
               "agentSegmentsWithNonResponsiveConsumers": 0,
               "agentSegmentsWithNonResponsiveAgents": 0,
               "avgTimetoFirstAgentMessageFromAgentAssignment": 4000,
               "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
               "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
               "avgTimeToResponseFromAgentAssignment": 4000
             }
           }
         },
         "metricsTotal": {
           "totalAgentConversationSegments": 8,
           "avgAgentMessagesinAgentSegment": 1.25,
           "avgAgentSegmentDuration": 13375,
           "interactiveAgentSegments": 8,
           "agentSegmentsAbandonedByConsumers": 0,
           "agentSegmentsWithNonResponsiveConsumers": 0,
           "agentSegmentsWithNonResponsiveAgents": 0,
           "avgTimetoFirstAgentMessageFromAgentAssignment": 2625,
           "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
           "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
           "avgTimeToResponseFromAgentAssignment": 2900
         }
   }
```

Request by agentIds=12,13 and skillIds=333,444 with interval=5, timeframe=60 and metrics = avgTimeToResponseFromAgentAssignment, avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer, avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation


```json
{
  "metricsByIntervals": [
    {
      "timestamp": 1556798050118,
      "metricsData": {
        "metricsPerSkill": {
          "333": {
            "metricsPerAgent": {
              "12": {
                "totalAgentConversationSegments": 3,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1000,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
                "avgTimeToResponseFromAgentAssignment": 1000
              },
              "13": {
                "totalAgentConversationSegments": 1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 8000,
                "avgTimeToResponseFromAgentAssignment": 8000
              }
            }
          },
          "444": {
            "metricsPerAgent": {
              "12": {
                "totalAgentConversationSegments": 3,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1000,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
                "avgTimeToResponseFromAgentAssignment": 1000
              },
              "13": {
                "totalAgentConversationSegments": 1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 8000,
                "avgTimeToResponseFromAgentAssignment": 8000
              }
            }
          }
        },
        "agentsMetrics": {
          "metricsPerAgent": {
            "12": {
              "totalAgentConversationSegments": 3,
              "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1000,
              "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
              "avgTimeToResponseFromAgentAssignment": 1000
            },
            "13": {
              "totalAgentConversationSegments": 1,
              "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
              "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 8000,
              "avgTimeToResponseFromAgentAssignment": 8000
            }
          }
        },
        "metricsTotal": {
          "totalAgentConversationSegments": 4,
          "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1000,
          "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 8000,
          "avgTimeToResponseFromAgentAssignment": 2750
        }
      }
    },
    {
      "timestamp": 1556798350118,
      "metricsData": {
        "metricsPerSkill": {
          "333": {
            "metricsPerAgent": {
              "12": {
                "totalAgentConversationSegments": 2,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 3000,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
                "avgTimeToResponseFromAgentAssignment": 3500
              },
              "13": {
                "totalAgentConversationSegments": 2,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 2000,
                "avgTimeToResponseFromAgentAssignment": 2000
              }
            }
          },
          "444": {
            "metricsPerAgent": {
              "12": {
                "totalAgentConversationSegments": 2,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 3000,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
                "avgTimeToResponseFromAgentAssignment": 3500
              },
              "13": {
                "totalAgentConversationSegments": 2,
                "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
                "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 2000,
                "avgTimeToResponseFromAgentAssignment": 2000
              }
            }
          }
        },
        "agentsMetrics": {
          "metricsPerAgent": {
            "12": {
              "totalAgentConversationSegments": 2,
              "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 3000,
              "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
              "avgTimeToResponseFromAgentAssignment": 3500
            },
            "13": {
              "totalAgentConversationSegments": 2,
              "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
              "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 2000,
              "avgTimeToResponseFromAgentAssignment": 2000
            }
          }
        },
        "metricsTotal": {
          "totalAgentConversationSegments": 4,
          "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 3000,
          "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 2000,
          "avgTimeToResponseFromAgentAssignment": 3000
        }
      }
    }
  ],
  "timeframeSummary": {
    "metricsPerSkill": {
      "333": {
        "metricsPerAgent": {
          "12": {
            "totalAgentConversationSegments": 5,
            "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
            "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
            "avgTimeToResponseFromAgentAssignment": 2428
          },
          "13": {
            "totalAgentConversationSegments": 3,
            "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
            "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
            "avgTimeToResponseFromAgentAssignment": 4000
          }
        }
      },
      "444": {
        "metricsPerAgent": {
          "12": {
            "totalAgentConversationSegments": 5,
            "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
            "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
            "avgTimeToResponseFromAgentAssignment": 2428
          },
          "13": {
            "totalAgentConversationSegments": 3,
            "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
            "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
            "avgTimeToResponseFromAgentAssignment": 4000
          }
        }
      }
    },
    "agentsMetrics": {
      "metricsPerAgent": {
        "12": {
          "totalAgentConversationSegments": 5,
          "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
          "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": -1,
          "avgTimeToResponseFromAgentAssignment": 2428
        },
        "13": {
          "totalAgentConversationSegments": 3,
          "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": -1,
          "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
          "avgTimeToResponseFromAgentAssignment": 4000
        }
      }
    },
    "metricsTotal": {
      "totalAgentConversationSegments": 8,
      "avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer": 1800,
      "avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation": 4000,
      "avgTimeToResponseFromAgentAssignment": 2900
    }
  }
}

```

**Elements in the Response**

*Note*: All metrics under the hierarchy of `metricsPerAgent` represent the average values for each agent under the interval/aggregation they appear in (or the average/aggregate value of the entire timeframe if no intervals are provided). Metrics under the `metricsTotal` entity will contain the summation of all aggregation/average of the same hierarchy level.


| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| metricsPerAgent | When agentIds are provided: An array of agents with their metrics. <br> When interval size is provided: The response will have the metricsPerAgent element under each interval, representing the data for the related interval. <br> There will also be a metricsPerAgent element at the end of the response, representing the data of the whole requested timeframe. <br>If there is no data for a specific agent, it will not be included in the array. <br> If there is no data for any of the agents, this member will have an empty element as value. | element |
| agentsMetrics | contains an object of metricsPerAgent - representing agents' metrics without skills partition | element |
| metricsPerSkill | When skillIds are provided: An array of skills with their metrics. Under each skill there will be a metricsPerAgent object which has an array of agents with their metrics. The metrics will show values only of segments of the specified skill <br> When interval size is provided: The response will have the skillsMetrics element under each interval, representing the data for the related interval. <br> There will also be a skillsMetrics element at the end of the response, representing the data of the whole requested timeframe. <br>If there is no data for a specific skill, it will not be included in the array. <br> If there is no data for any of the skills, this member will have an empty element as value. | element |
| metricsTotals | The total metrics for all requested agents.  <br> When interval is provided: Total metrics for all requested intervals.<br> If an agentId or agentIds are requested and there is no data for any of them, this element will still include all of the metrics with the value set to zero. <br> Note: Totals may not add up due to rounding differences. | element |
| agent id | When agentIds values provided: The agent ID. | long |
| skill id | When skillIds values provided: The skill ID. | long |
| timeframeSummary | When interval is provided in the request, this entity will contain data for the entire timeframe, similar to the response when requesting with no intervals. <br> Note that the averages values for the entire timeframe will NOT be equal to the summation of totals under each interval. | element |
| timestamp | When interval size is provided in the request, the response will be partitioned by intervals. The timestamp is the UTC timestamp in milliseconds representing the start time of the interval. <br> Example : Interval size: 10 min. Interval start and end time: 18/01/2018 08:25:32 - 18/01/2018 08:35:32. Timestamp: 1516263932000. <br> Intervals are not rounded, and will be determined by the time the request was made. <br> Example: Request was made at current time (now): 8:51:55, with interval=60 and timeframe=120 parameters specified. <br> The response will contain two intervals, latest representing data from 7:51:55-8:51:55 (timestamp of 7:51:55), and the earliest representing data from 6:51:55-7:51:55 (timestamp of 6:51:55). | long |
| totalAgentConversationSegments | The number of times conversations were assigned to an agent. A conversation may be assigned more than once to a given agent. | Long |
| avgAgentMessagesinAgentSegment | Average number of responses provided by agent during an agent-segment. | Double |
| avgAgentSegmentDuration | Average duration of an agent-segment. Measured from the time the conversation was assigned to the agent until it was closed or transferred. Attributed to the assigned agent and skill. If there is no data for a specific agent, the metric will represent value of -1. | Long |
| interactiveAgentSegments |The number of agent-segments which ended in a transfer or closed with at least one response from a consumer to an agent’s message. Measured from the first message sent by an agent in a new agent-segment. | Long |
| agentSegmentsAbandonedByConsumers |The number of conversations closed by a consumer which included no agent message. Measured during the last agent-segment of the conversation, and is unaffected by the agent activity from previous segments. Attributed to the last agent assigned to the conversation. | Long |
| agentSegmentsWithNonResponsiveConsumers | The number of agent-segments which ended in a transfer or closed by an agent or system (“auto close”), with no message from an agent.   | Long |
| agentSegmentsWithNonResponsiveAgents |The number of agent-segments which ended in a transfer or closed with at least one response from a consumer to an agent’s message. Measured from the first message sent by an agent in a new agent-segment. | Long |
| avgTimetoFirstAgentMessageFromAgentAssignment | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent in a new conversation or after transfer. First response time of segment won't be calculated if segment is after TakeOver or Resume. Measured in Millisecond. If there is no data for a specific agent or there isn't a valid first response of an agent, the metric will represent value of -1. | Long |
| avgTimetoFirstAgentMessageFromAgentAssignment_AfterTransfer | The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent after the conversation was transferred. First response time of segment won't be calculated if segment is after TakeOver. Measured in Millisecond. If there is no data for a specific agent or there isn't a valid first response of an agent, the metric will represent value of -1. | Long |
| avgTimetoFirstAgentMessageFromAgentAssignment_NewConversation |The time on average taken by an agent to respond to a consumer from the time the agent is assigned to the conversation. Calculated only for the first agent message sent after the conversation started. First response time of segment won't be calculated if segment is after Resume. Measured in Millisecond. If there is no data for a specific agent or there isn't a valid first response of an agent, the metric will represent value of -1. | Long |
| avgTimeToResponseFromAgentAssignment | The time on average taken by an agent to respond to consumer message from the time the agent is assigned to the conversation. First response time of segment won't be calculated if segment is after TakeOver or Resume. Measured in Millisecond. If there is no data for a specific agent or there are no valid responses of an agent, the metric will represent value of -1. | Long |
