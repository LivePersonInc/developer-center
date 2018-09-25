---
pagename: Agent Activity
redirect_from:
  - data-operational-realtime-agent-activity.html
sitesection: Documents
categoryname: "Real Time Data"
documentname: Operational Realtime API
subfoldername: Methods
order: 30
permalink: operational-realtime-api-methods-agent-activity.html

indicator: chat
---

Retrieves Agent State Distribution data, which includes the following states:

- Logged in (total of all states)
- Online
- Away (with breakdown of multiple Away state reasons)
- Back soon

For each state, the following is indicated:

- Time spent chatting
- Time spent not chatting
- Time spent logged in and chatting concurrently with the maximum allowed chats

If no custom Away state reasons are configured, the 'reasons' field will be returned as an empty array.

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Request

| Method | URL |
| :------ | :---- |
| GET | `https://<domain>/operations/api/account/{accountID}/agentactivity?timeframe=<timeframe in minutes>&agentIds=<comma seperated agent ids list>&interval=<interval size in minutes>&v=<version>` |

 - Use POST request to pass long list of agentIds

| Method | URL | BODY (Json) |
| :------ | :---- | :---- |
| POST | `https://<domain>/operations/api/account/{accountID}/agentactivity` | `{"timeframe":"<timeframe in minutes>" , "agentIds":"<comma seperated agent ids list>", "interval":"<interval size in minutes>" , "v":"<version>" }` |

 - Example: `{"timeframe":"1440","v":"1","agentIds":"2152260212,2152260212","interval":"1440"}`

**URL Parameters**

| Name | Description | Type / Value | Required |
| :------ | :------------ | :--------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time - timeframe. | numeric | required |
| agentIds | When provided, metrics on the response will be grouped by the requested agents' IDs. If there is no data for the specified agents, an object will be returned with an empty value for key: "metricsPerAgent" with a map including all metrics valued zero. To retrieve all active agents for the time period, use agentIds=all.  | numeric, comma separated | required |
| v | Version of API, for example, v=1.| numeric | required |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame, and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |

### Response

**JSON Example**

Request by v=1 and timeframe=120 and agentIds=all (including two agentIds: 2 and 3).

```json
    {
      "agentsMetrics": {
        "metricsPerAgent": {
          "2": [
            {
              "id": 2,
              "name": "Online",
              "value": {
                "total": 4714,
                "chatting": 0,
                "notChatting": 4714,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "id": 3,
              "name": "Back in 5",
              "value": {
                "total": 2361,
                "chatting": 2361,
                "notChatting": 0,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "reasons": [
              {
                  "id": "2642559712",
                  "value": {
                      "total": 72,
                      "chatting": 0,
                      "notChatting": 72,
                      "chattingInMaxConcurrency": 0
                  }
              },
              {
                  "id": "2642559112",
                  "value": {
                      "total": 53,
                      "chatting": 0,
                      "notChatting": 53,
                      "chattingInMaxConcurrency": 0
                  }
              }
              ],
              "id": 4,
              "name": "Away",
              "value": {
                "total": 0,
                "chatting": 0,
                "notChatting": 125,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "id": -1,
              "name": "Logged in",
              "value": {
                "total": 7200,
                "chatting": 2486,
                "notChatting": 4714,
                "chattingInMaxConcurrency": 0
              }
            }
          ],
          "3": [
            {
              "id": 2,
              "name": "Online",
              "value": {
                "total": 2486,
                "chatting": 2486,
                "notChatting": 0,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "id": 3,
              "name": "Back in 5",
              "value": {
                "total": 4714,
                "chatting": 0,
                "notChatting": 4714,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "reasons": [],
              "id": 4,
              "name": "Away",
              "value": {
                "total": 0,
                "chatting": 0,
                "notChatting": 0,
                "chattingInMaxConcurrency": 0
              }
            },
            {
              "id": -1,
              "name": "Logged in",
              "value": {
                "total": 7200,
                "chatting": 2486,
                "notChatting": 4714,
                "chattingInMaxConcurrency": 0
              }
            }
          ]
        },
        "metricsTotals": []
      }
    }
```

Request by v=1 and timeframe=120 and agentIds=all and interval=60 (including two agentIds: 2 and 3).

```json
    {
      "metricsByIntervals": [
        {
          "timestamp": 1404226200000,
          "metricsData": {
            "agentsMetrics": {
              "metricsPerAgent": {
                "2": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 3268,
                      "chatting": 0,
                      "notChatting": 3268,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                   "reasons": [
                   {
                       "id": "2642559712",
                       "value": {
                           "total": 100,
                           "chatting": 0,
                           "notChatting": 100,
                           "chattingInMaxConcurrency": 0
                       }
                   }
                   ],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 100,
                      "chatting": 0,
                      "notChatting": 100,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 3368,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ],
                "3": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 3368,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "reasons": [],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 3368,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ]
              },
              "metricsTotals": []
            }
          }
        },
        {
          "timestamp": 1404222600000,
          "metricsData": {
            "agentsMetrics": {
              "metricsPerAgent": {
                "2": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 1376,
                      "chatting": 0,
                      "notChatting": 1376,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 2224,
                      "chatting": 2224,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "reasons": [],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 3600,
                      "chatting": 2224,
                      "notChatting": 1376,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ],
                "3": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 2224,
                      "chatting": 2224,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 1376,
                      "chatting": 0,
                      "notChatting": 1376,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "reasons": [],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 3600,
                      "chatting": 2224,
                      "notChatting": 1376,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ]
              },
              "metricsTotals": []
            }
          }
        },
        {
          "timestamp": 1404219000000,
          "metricsData": {
            "agentsMetrics": {
              "metricsPerAgent": {
                "2": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 232,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "reasons": [],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 232,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ],
                "3": [
                  {
                    "id": 2,
                    "name": "Online",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": 3,
                    "name": "Back in 5",
                    "value": {
                      "total": 232,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "reasons": [],
                    "id": 4,
                    "name": "Away",
                    "value": {
                      "total": 0,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  },
                  {
                    "id": -1,
                    "name": "Logged in",
                    "value": {
                      "total": 232,
                      "chatting": 0,
                      "notChatting": 0,
                      "chattingInMaxConcurrency": 0
                    }
                  }
                ]
              },
              "metricsTotals": []
            }
          }
        }
      ],
      "agentsMetrics": {
        "metricsPerAgent": {},
        "metricsTotals": []
      }
    }  
```

**Elements in the Response**

| Name | Description | Type / Value |
| :------ | :----------- | :---------------- |
| agentsMetrics | An object that represents the agents' data. It includes one member: • metricsPerAgent - A list of agent/s' id/s that were sent in the request with their metrics data. If there is no data for any agent/s, this member will have an empty object as value. If there is no data for a specific agent, it won't be included in this list. When interval size is provided in the request, the response will have the agentsMetrics element in each interval. There will also be an agentsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). | element |
| metricsTotals | When agentIDs are provided: Total metrics for all requested agents. When agentIDs are not provided: The site metrics. When interval is provided: Total metrics for all requested intervals. If agentIds are requested and there is no data for any of them, this element will still include all of the metrics with value zero. Note: Totals are not currently supported. | element |
| Timestamp | When interval size is provided in the request, the response will be aggregated by intervals. The timestamp is the UTC timestamp in milliseconds representing the end time on the interval. Example: Interval size: 30 min. Interval start and end time: 26/03/2014 07:30:00 - 26/03/2014 08:00:00. Timestamp: 1395820800000. Intervals are rounded up to 5 minutes. Consequently: •   The latest interval timestamp will be rounded up. Example: Now: 08:07. Last interval end time: 8:10. •  The earliest interval will include only the remainder of the requested timeframe - between the start of the timeframe (now - timeframe) and the end of the earliest interval. Example: Now: 8:07. Request parameters: timeframe=20&interval=10 (20 minutes in 10 minutes intervals). Response from and to time: 7:47 - 8:07 --> 20 minutes. Response intervals: 8:00 - 8:10 (10 minutes. actual 7 minutes because now is 8:07). 7:50 - 8:00 (10 minutes). 7:47 - 7:50 (only 3 minutes). | long |
| id | The ID of the agent state: logged in = -1 online = 2 back in 5 = 3 away = 4 | integer |
| name | The name of the agent state: "Logged in", "Online", "Back soon" and "Away" | string |
| value | This element contains all the values for a specific distribution agent state. | element |
| total | The total time the agent was in this state (seconds). | long |
| chatting | The total time the agent was chatting in this state (seconds). | long |
| notChatting | The total time the agent was not chatting in this state (seconds). | long |
| chattingInMaxConcurrency | The amount of time the agent was chatting concurrently with the maximum allowed chats in this state (seconds). | long |
| reasons | An array representing the breakdown of the 'Away' state to multiple away state reasons | element |
| id (reasons) | The ID of the away reason | string |
