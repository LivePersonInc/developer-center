---
pagename: Queue Health
redirect_from:
  - data-operational-realtime-queue-health.html
sitesection: Documents
categoryname: Data
documentname: Operational Realtime API
subfoldername: Methods
order: 10
permalink: operational-realtime-api-methods-queue-health.html

indicator: chat
---

Retrieves queue-related metrics at the account or skill level.

*Note: Queue Health is calculated using bucket-based aggregation techniques, where events are collected into 5 minute buckets. For this reason, events may be included that took place outside of the requested time frame.*

**Example**: If the time now is 13:29 and the time frame is 7 minutes, the API will use 2 buckets: 13:25 and 13:30. In other words, in practice the time of the data is not 13:22-13:29, but 13:20-13:29.

*Note*: this method is subject to Rate Limiting. This means that the maximum number of concurrent requests is limited on the server side. As most requests are in milliseconds, the likelihood of your requests actually encountering an issue is rare but should that happen, you can expect to receive a 429 Status Code from the server.

### Request

| Method | URL |
| :------- | :------ |
| GET | `https://<domain>/operations/api/account/{accountID}/queuehealth?timeframe=<timeframe in minutes>&skillIds=<skillIDs>&interval=<interval size in minutes>&v=<version>` |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| timeframe | The time range (in minutes) in which the data can be filtered. Where end time = current time, and start time = end time - timeframe. The maximum timeframe value is 1440 minutes (24 hours). | numeric | required |
| v | Version of API, for example, v=1. | numeric | required |
| skillIds | When provided, metrics on the response will be grouped by the requested skills. When not provided, metrics on the response will be calculated at the account level. You can provide one or more skillIDs. <br> Example: skillIds=4,153. To retrieve all skills active for the time period, use skillIds=all. | numeric, comma separated | optional |
| interval | Interval size in minutes (the minimum value is five minutes). When provided, the returned data will be aggregated by intervals of the requested size. The interval has to be smaller or equal to the time frame and also a divisor of the time frame. <br> Example: <br> timeframe=60&interval=30 (correct) <br> timeframe=60&interval=61 (bad request) <br> timeframe=60&interval=31 (bad request) | numeric | optional |

### Response

**JSON Example**

Request by skillIds=199,200 (no interval)

    {  
        "skillsMetrics":{  
            "199":{  
                "totalTimeToAnswer":7,
                "enteredQEng":5,
                "avgTimeToAnswer":0,
                "abandonmentRate":0.4,
                "abandonedEng":2,
                "connectedEng":3,
                "avgTimeToAbandon":1111,
                "totalTimeToAbandon":2222,
                "maxQueueSize":78,
                "minQueueSize":68,
                "averageQueueSize":72,
                "maxAvailableSlots":5,
                "minAvailableSlots":3,
                "averageAvailableSlots":4,
                "currentQueueState":78,
                "currentAvailableSlots":5,
                "availableSlotsSum":84,
                "availableSlotsCount":21,
                "queueSizeSum":216,
                "queueSizeCount":3
            },
            "200":{  
                "totalTimeToAnswer":3,
                "enteredQEng":5,
                "avgTimeToAnswer":0,
                "abandonmentRate":0.6,
                "abandonedEng":3,
                "connectedEng":2,
                "avgTimeToAbandon":2222,
                "totalTimeToAbandon":6666,
                "maxQueueSize":14,
                "minQueueSize":10,
                "averageQueueSize":13,
                "maxAvailableSlots":42,
                "minAvailableSlots":15,
                "averageAvailableSlots":25,
                "currentQueueState":14,
                "currentAvailableSlots":42,
                "availableSlotsSum":175,
                "availableSlotsCount":25,
                "queueSizeSum":65,
                "queueSizeCount":5
            }
        },
        "metricsTotals":{  
            "totalTimeToAnswer":10,
            "enteredQEng":10,
            "avgTimeToAnswer":0,
            "abandonmentRate":0.4,
            "abandonedEng":4,
            "connectedEng":5,
            "avgTimeToAbandon":2222,
            "totalTimeToAbandon":8888,
            "maxQueueSize":92,
            "minQueueSize":78,
            "averageQueueSize":35.125,
            "maxAvailableSlots":47,
            "minAvailableSlots":18,
            "averageAvailableSlots":5.63,
            "currentQueueSize":92,
            "currentAvailableSlots":47,
            "availableSlotsSum":259,
            "availableSlotsCount":46,
            "queueSizeSum":281,
            "queueSizeCount":8
        }
    }

Request by skillIds=11,21,269364510, interval=360, timeframe=720

    {  
        "metricsByIntervals":[  
            {  
                "timestamp":1465286700000,
                "metricsData":{  
                    "skillsMetrics":{  
                        "11":{  
                            "avgTimeToAbandon":0,
                            "totalTimeToAnswer":5,
                            "averageQueueSize":0.010390574264774098,
                            "maxAvailableSlots":9,
                            "availableSlotsSum":40540,
                            "abandonedEng":0,
                            "averageAvailableSlots":3.7610167919101958,
                            "maxQueueSize":1,
                            "minQueueSize":0,
                            "availableSlotsCount":10779,
                            "totalTimeToAbandon":0,
                            "enteredQEng":2,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":0,
                            "queueSizeCount":10779,
                            "avgTimeToAnswer":5,
                            "abandonmentRate":0,
                            "queueSizeSum":112,
                            "connectedEng":1
                        },
                        "21":{  
                            "avgTimeToAbandon":0,
                            "totalTimeToAnswer":2,
                            "averageQueueSize":0.0033572068039391225,
                            "maxAvailableSlots":12,
                            "availableSlotsSum":51655,
                            "abandonedEng":0,
                            "averageAvailableSlots":5.780550581915846,
                            "maxQueueSize":1,
                            "minQueueSize":0,
                            "availableSlotsCount":8936,
                            "totalTimeToAbandon":0,
                            "enteredQEng":0,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":0,
                            "queueSizeCount":8936,
                            "avgTimeToAnswer":2,
                            "abandonmentRate":0,
                            "queueSizeSum":30,
                            "connectedEng":1
                        },
                        "269364510":{  
                            "avgTimeToAbandon":0,
                            "totalTimeToAnswer":9,
                            "averageQueueSize":0.023550191345304682,
                            "maxAvailableSlots":9,
                            "availableSlotsSum":53645,
                            "abandonedEng":0,
                            "averageAvailableSlots":5.263958394661957,
                            "maxQueueSize":2,
                            "minQueueSize":0,
                            "availableSlotsCount":10191,
                            "totalTimeToAbandon":0,
                            "enteredQEng":1,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":0,
                            "queueSizeCount":10191,
                            "avgTimeToAnswer":9,
                            "abandonmentRate":0,
                            "queueSizeSum":240,
                            "connectedEng":1
                        }
                    },
                    "metricsTotals":{  
                        "avgTimeToAbandon":0,
                        "totalTimeToAnswer":17,
                        "averageQueueSize":0,
                        "maxAvailableSlots":30,
                        "availableSlotsSum":145840,
                        "abandonedEng":0,
                        "averageAvailableSlots":4,
                        "maxQueueSize":4,
                        "minQueueSize":0,
                        "availableSlotsCount":29906,
                        "totalTimeToAbandon":0,
                        "enteredQEng":3,
                        "currentAvailableSlots":-1,
                        "currentQueueSize":-1,
                        "minAvailableSlots":0,
                        "queueSizeCount":29906,
                        "avgTimeToAnswer":6,
                        "abandonmentRate":0,
                        "queueSizeSum":382,
                        "connectedEng":3
                    }
                }
            },
            {  
                "timestamp":1465308300000,
                "metricsData":{  
                    "skillsMetrics":{  
                        "11":{  
                            "avgTimeToAbandon":1,
                            "totalTimeToAnswer":220,
                            "averageQueueSize":0.239413988657845,
                            "maxAvailableSlots":7,
                            "availableSlotsSum":15740,
                            "abandonedEng":1,
                            "averageAvailableSlots":1.4877126654064272,
                            "maxQueueSize":2,
                            "minQueueSize":0,
                            "availableSlotsCount":10580,
                            "totalTimeToAbandon":1,
                            "enteredQEng":28,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":0,
                            "queueSizeCount":10580,
                            "avgTimeToAnswer":9,
                            "abandonmentRate":0.04,
                            "queueSizeSum":2533,
                            "connectedEng":25
                        },
                        "21":{  
                            "avgTimeToAbandon":4,
                            "totalTimeToAnswer":52,
                            "averageQueueSize":0.036370384115791424,
                            "maxAvailableSlots":19,
                            "availableSlotsSum":113009,
                            "abandonedEng":1,
                            "averageAvailableSlots":10.485154945258861,
                            "maxQueueSize":1,
                            "minQueueSize":0,
                            "availableSlotsCount":10778,
                            "totalTimeToAbandon":4,
                            "enteredQEng":1,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":3,
                            "queueSizeCount":10778,
                            "avgTimeToAnswer":10,
                            "abandonmentRate":0.17,
                            "queueSizeSum":392,
                            "connectedEng":5
                        },
                        "269364510":{  
                            "avgTimeToAbandon":0,
                            "totalTimeToAnswer":471,
                            "averageQueueSize":0.07260261106414953,
                            "maxAvailableSlots":15,
                            "availableSlotsSum":57671,
                            "abandonedEng":0,
                            "averageAvailableSlots":5.416643185873955,
                            "maxQueueSize":2,
                            "minQueueSize":0,
                            "availableSlotsCount":10647,
                            "totalTimeToAbandon":0,
                            "enteredQEng":2,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":0,
                            "queueSizeCount":10647,
                            "avgTimeToAnswer":26,
                            "abandonmentRate":0,
                            "queueSizeSum":773,
                            "connectedEng":18
                        }
                    },
                    "metricsTotals":{  
                        "avgTimeToAbandon":3,
                        "totalTimeToAnswer":743,
                        "averageQueueSize":0,
                        "maxAvailableSlots":41,
                        "availableSlotsSum":186420,
                        "abandonedEng":2,
                        "averageAvailableSlots":5,
                        "maxQueueSize":5,
                        "minQueueSize":0,
                        "availableSlotsCount":32005,
                        "totalTimeToAbandon":5,
                        "enteredQEng":31,
                        "currentAvailableSlots":-1,
                        "currentQueueSize":-1,
                        "minAvailableSlots":3,
                        "queueSizeCount":32005,
                        "avgTimeToAnswer":15,
                        "abandonmentRate":0.04,
                        "queueSizeSum":3698,
                        "connectedEng":48
                    }
                }
            },
            {  
                "timestamp":1465329900000,
                "metricsData":{  
                    "skillsMetrics":{  
                        "11":{  
                            "avgTimeToAbandon":198,
                            "totalTimeToAnswer":5073,
                            "averageQueueSize":0,
                            "maxAvailableSlots":1,
                            "availableSlotsSum":99,
                            "abandonedEng":2,
                            "averageAvailableSlots":1,
                            "maxQueueSize":0,
                            "minQueueSize":0,
                            "availableSlotsCount":99,
                            "totalTimeToAbandon":396,
                            "enteredQEng":46,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":1,
                            "queueSizeCount":99,
                            "avgTimeToAnswer":134,
                            "abandonmentRate":0.05,
                            "queueSizeSum":0,
                            "connectedEng":38
                        },
                        "21":{  
                            "avgTimeToAbandon":424,
                            "totalTimeToAnswer":365,
                            "averageQueueSize":0,
                            "maxAvailableSlots":4,
                            "availableSlotsSum":396,
                            "abandonedEng":1,
                            "averageAvailableSlots":4,
                            "maxQueueSize":0,
                            "minQueueSize":0,
                            "availableSlotsCount":99,
                            "totalTimeToAbandon":424,
                            "enteredQEng":5,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":4,
                            "queueSizeCount":99,
                            "avgTimeToAnswer":26,
                            "abandonmentRate":0.07,
                            "queueSizeSum":0,
                            "connectedEng":14
                        },
                        "269364510":{  
                            "avgTimeToAbandon":250,
                            "totalTimeToAnswer":1777,
                            "averageQueueSize":1,
                            "maxAvailableSlots":6,
                            "availableSlotsSum":594,
                            "abandonedEng":2,
                            "averageAvailableSlots":6,
                            "maxQueueSize":1,
                            "minQueueSize":1,
                            "availableSlotsCount":99,
                            "totalTimeToAbandon":500,
                            "enteredQEng":9,
                            "currentAvailableSlots":-1,
                            "currentQueueSize":-1,
                            "minAvailableSlots":6,
                            "queueSizeCount":99,
                            "avgTimeToAnswer":38,
                            "abandonmentRate":0.04,
                            "queueSizeSum":99,
                            "connectedEng":47
                        }
                    },
                    "metricsTotals":{  
                        "avgTimeToAbandon":264,
                        "totalTimeToAnswer":7215,
                        "averageQueueSize":0,
                        "maxAvailableSlots":11,
                        "availableSlotsSum":1089,
                        "abandonedEng":5,
                        "averageAvailableSlots":3,
                        "maxQueueSize":1,
                        "minQueueSize":1,
                        "availableSlotsCount":297,
                        "totalTimeToAbandon":1321,
                        "enteredQEng":60,
                        "currentAvailableSlots":-1,
                        "currentQueueSize":-1,
                        "minAvailableSlots":11,
                        "queueSizeCount":297,
                        "avgTimeToAnswer":73,
                        "abandonmentRate":0.05,
                        "queueSizeSum":99,
                        "connectedEng":99
                    }
                }
            }
        ],
        "skillsMetrics":{  
            "11":{  
                "avgTimeToAbandon":132,
                "totalTimeToAnswer":5299,
                "averageQueueSize":0.12326405070370025,
                "maxAvailableSlots":17,
                "availableSlotsSum":56379,
                "abandonedEng":3,
                "averageAvailableSlots":2.6274116879485505,
                "maxQueueSize":3,
                "minQueueSize":0,
                "availableSlotsCount":21458,
                "totalTimeToAbandon":397,
                "enteredQEng":76,
                "currentAvailableSlots":1,
                "currentQueueSize":0,
                "minAvailableSlots":1,
                "queueSizeCount":21458,
                "avgTimeToAnswer":83,
                "abandonmentRate":0.04,
                "queueSizeSum":2645,
                "connectedEng":64
            },
            "21":{  
                "avgTimeToAbandon":215,
                "totalTimeToAnswer":419,
                "averageQueueSize":0.021299147024680765,
                "maxAvailableSlots":35,
                "availableSlotsSum":165060,
                "abandonedEng":2,
                "averageAvailableSlots":8.330893857568263,
                "maxQueueSize":2,
                "minQueueSize":0,
                "availableSlotsCount":19813,
                "totalTimeToAbandon":429,
                "enteredQEng":6,
                "currentAvailableSlots":4,
                "currentQueueSize":0,
                "minAvailableSlots":7,
                "queueSizeCount":19813,
                "avgTimeToAnswer":21,
                "abandonmentRate":0.09,
                "queueSizeSum":422,
                "connectedEng":20
            },
            "269364510":{  
                "avgTimeToAbandon":250,
                "totalTimeToAnswer":2257,
                "averageQueueSize":0.053111716100683,
                "maxAvailableSlots":30,
                "availableSlotsSum":111910,
                "abandonedEng":2,
                "averageAvailableSlots":5.345082867650571,
                "maxQueueSize":5,
                "minQueueSize":1,
                "availableSlotsCount":20937,
                "totalTimeToAbandon":500,
                "enteredQEng":12,
                "currentAvailableSlots":6,
                "currentQueueSize":1,
                "minAvailableSlots":6,
                "queueSizeCount":20937,
                "avgTimeToAnswer":34,
                "abandonmentRate":0.03,
                "queueSizeSum":1112,
                "connectedEng":66
            }
        },
        "metricsTotals":{  
            "avgTimeToAbandon":189,
            "totalTimeToAnswer":7975,
            "averageQueueSize":0.06717785493827161,
            "maxAvailableSlots":82,
            "availableSlotsSum":333349,
            "abandonedEng":7,
            "averageAvailableSlots":5.3586194701646095,
            "maxQueueSize":10,
            "minQueueSize":1,
            "availableSlotsCount":62208,
            "totalTimeToAbandon":1326,
            "enteredQEng":94,
            "currentAvailableSlots":11,
            "currentQueueSize":1,
            "minAvailableSlots":14,
            "queueSizeCount":62208,
            "avgTimeToAnswer":53,
            "abandonmentRate":0.04,
            "queueSizeSum":4179,
            "connectedEng":150
        }
    }

**Elements in the Response**

| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| skillsMetrics | When skillIDs are provided: An array of skills with their metrics. <br> When interval size is provided: The response will have the skillsMetrics element in each interval representing the data for the related interval. <br> There will also be a skillsMetrics element at the end of the response, representing the data of the whole requested time frame (totals of all intervals). <br>If there is no data for a specific skill, it will not be included in the array. <br> If there is no data for any of the skills, this member will have an empty element as value. | element |
| metricsTotals | When skillIDs are provided: The total metrics for all requested skills. <br> When skillIDs are not provided: The site metrics. <br> When interval is provided: Total metrics for all requested intervals.<br> If skill/sID/s are requested and there is no data for any of them, this element will still include all of the metrics with value zero. <br> Note: Totals may not add up due to rounding differences. | element |
| skill id | When skillIDs value(/s) provided: The skill ID. | long |
| timestamp | When interval size is provided in the request, the response will be aggregated by intervals. The timestamp is the UTC timestamp in milliseconds representing the end time of the interval. <br> Example : Interval size: 30 min. Interval start and end time: 26/03/2014 07:30:00 - 26/03/2014 08:00:00. Timestamp: 1395820800000. <br> Intervals are rounded up to 5 minutes. Consequently: The latest interval time stamp will be rounded up. <br> Example: Now: 08:07. Last interval end time: 8:10. <br> The earliest interval will include only the remainder of the requested time frame, and will contain only 5 minutes of data. <br> Example: Now: 8:07. Request parameters: timeframe=20 and interval=10 (20 minutes in 10 minute intervals). Response from and to time: 7:45 - 8:07 --> 22 minutes. <br> Note: See Queue Health for further information about time frame rounding. <br> Response intervals: 8:00 - 8:10 (10 minutes. actual 7 minutes because now is 8:07). 7:50 - 8:00 (10 minutes). 7:45 - 7:50 (5 minutes). | long |
| totalTimeToAnswer | The total time, in seconds, that the visitors spent in the queue before being connected to an agent. | long |
| enteredQEng | The number of visitors that entered the queue. | long |
| avgTimeToAnswer | The average time, in seconds, that a visitor spent in the queue before being connected to an agent. <br> Calculation: totalTimeToAnswer / connectedEng. | long |
| abandonmentRate | The number of visitors that abandoned the queue out of the total visitors that started an engagement. <br> Calculation: abandonedEng / (abandonedEng + connectedEng). | double |
| abandonedEng | The number of visitors that abandoned the queue before being connected to an agent. | long |
| connectedEng | The number of visitors that were connected to an agent. | long |
| totalTimeToAbandon | Total time visitors spend in queue before abandon. | long |
| avgTimeToAbandon | The average time visitors spend in queue before abandon. <br> Calculation: totalTimeToAbandon / abandonedEng. | long |
| maxQueueSize | The maximum queue size within the given time frame. Default value if no such data exists is -1. | long |
| minQueueSize | The minimum queue size within the given time frame. Default value if no such data exists is -1. | long |
| averageQueueSize | The average queue size within the given time frame (rounded). Default value if no such data exists is -1. Calculated as queueSizeSum / queueSizeCount | double |
| maxAvailableSlots | The maximum available slots within the given time frame. Default value if no such data exists is -1. | long |
| maxAvailableSlots | The maximum available slots within the given time frame. Default value if no such data exists is -1. | long |
| minAvailableSlots | The minimum available slots within the given time frame. Default value if no such data exists is -1. | long |
| averageAvailableSlots | The average available slots within the given time frame (rounded). Default value if no such data exists is -1. Calculated as availableSlotsSum / availableSlotsCount | double |
| currentQueueState | The current queue size. Default value if no such data exists is -1. | long |
| currentAvailableSlots | The current available slots. Default value if no such data exists is -1. <br> Note: If the agent concurrency set to 'Unlimited', the number of current available slots for the associated skill will always be 1. | long |
| queueSizeSum | Sum of all queue sizes received (queue size sum is calculated as sum of all [queue size] * [counter column value]) | long |
| queueSizeCount | Total number of queue size measures made | long |
| availableSlotsSum | Sum of all available slots received (queue size sum is calculated as sum of all [queue size] * [counter column value]) | long |
| availableSlotsCount | Total number of available slots measures made | long |
