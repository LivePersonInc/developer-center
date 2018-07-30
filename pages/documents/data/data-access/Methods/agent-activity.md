---
title: Agent Activity
level1: Documents
level2: Data
level3: Data Access API
level4: Methods
order: 20

permalink: data-data-access-agent-activity.html

indicator: chat
---

Agent Activity retrieves the agent’s session data in .zip format files. The agent’s activity data is a list of sessions which occur from the agent’s login time to the agent’s logout time. This data is used to analyze agent efficiency and availability. Each session includes the agent’s information, such as login name, nickname, status changes, number of concurrent chats, etc.

### Request

| Method | URL |
| :----- | :------ |
| GET | `https://<domain>/data_access_le/account/{accountID}/le/agentActivity?startTime=<startTime>&endTime=<endTime>` |

**URL Parameters**

Required:

| Parameter | Description | Type / Value |
| :------ | :---------- | :------- |
| startTime | Start time in milliseconds, refers to the start time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |
| endTime | End time in milliseconds, refers to the end time boundary of the range the files were generated. Should be used as an incremental timestamp. | numeric |

### Response

**JSON Example**

Request for account 75555851:

    {
     "dataAccessFiles": {
       "@id": "28045150",
       "link": {
         "@href":
    "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity",
         "@rel": "self"
       },
       "file": [
         {
           "@name": "Agent.1461387600000.1461391200000.part-00001-0",
           "@scopeStartDate": "2016-04-23T01:00:00-04:00",
           "@scopeEndDate": "2016-04-23T02:00:00-04:00",
           "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity/Agent.1461387600000.1461391200000.part-00001-0.gz"
         },
         {
           "@name": "Agent.1461391200000.1461394800000.part-00001-0",
           "@scopeStartDate": "2016-04-23T02:00:00-04:00",
           "@scopeEndDate": "2016-04-23T03:00:00-04:00",
           "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity/Agent.1461391200000.1461394800000.part-00001-0.gz"
         },
         {
           "@name": "Agent.1461394800000.1461398400000.part-00001-0",
           "@scopeStartDate": "2016-04-23T03:00:00-04:00",
           "@scopeEndDate": "2016-04-23T04:00:00-04:00",
           "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity/Agent.1461394800000.1461398400000.part-00001-0.gz"
         },
         {
           "@name": "Agent.1461398400000.1461402000000.part-00000-0",
           "@scopeStartDate": "2016-04-23T04:00:00-04:00",
           "@scopeEndDate": "2016-04-23T05:00:00-04:00",
           "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity/Agent.1461398400000.1461402000000.part-00000-0.gz"
         },
         {
           "@name": "Agent.1461402000000.1461405600000.part-00000-0",
           "@scopeStartDate": "2016-04-23T05:00:00-04:00",
           "@scopeEndDate": "2016-04-23T06:00:00-04:00",
           "@href": "https://va-a.da.liveperson.net/data_access_le/account/28045150/le/agentActivity/Agent.1461402000000.1461405600000.part-00000-0"
         }
       ]
     }
    }

**Elements in the Response**

| Parameter | Description | Type / Value |
| :------- | :---------- | :--------- |
| id | LivePerson account number. | string |
| file | List of files. | array container |
| name | Name of file. | string |
| scopeStartDate | Start time of the automated process that generates the file. | ISO standard |
| scopeEndDate | End time of the automated process that generates the file. | ISO standard |
| href | URI to retrieve the file. | string |

**Data Structure**

JSON Example

    {
       "dataType": {
           "com.liveperson.dataaccess.DataTypeEnum": "AgentActivity"
       },
       "metaData": {
           "accountId": {
               "string": "75555851"
           },
           "schemaVersion": "1.0.0.4",
           "startTime": {
               "long": 1465992202047
           },
           "endTime": null
       },
       "recordCollection": [
           {
               "body": {
                   "com.liveperson.dataaccess.AgentActivityData": {
                       "header": {
                           "com.liveperson.dataaccess.AgentHeader": {
                               "agentSessionId": {
                                   "string": "75555851-684867733"
                               }
                           }
                       },
                       "agentSessionsData": {
                           "array": [
                               {
                                   "agentID": {
                                       "long": 9
                                   },
                                   "type": {
                                       "long": 3
                                   },
                                   "state": {
                                       "long": 0
                                   },
                                   "timestamp": {
                                       "long": 1465992202047
                                   },
                                   "prevState": {
                                       "long": 1
                                   },
                                   "agentEmployeeId": {
                                       "string": ""
                                   },
                                   "agentUsername": {
                                       "string": "CRAgent"
                                   },
                                   "agentNickname": {
                                       "string": "CRAgent"
                                   },
                                   "agentLoginname": {
                                       "string": "CRAgent@liveperson.com"
                                   },
                                   "prevConcurrentEng": {
                                       "long": 0
                                   },
                                   "concurrentEng": {
                                       "long": 0
                                   },
                                   "maxConcurrentEng": {
                                       "long": -9
                                   },
                                   "agentGroupID": {
                                       "long": -1
                                   }
                               }
                           ]
                       }
                   }
               }
           }
       ]
    }
    {
       "dataType": {
           "com.liveperson.dataaccess.DataTypeEnum": "AgentActivity"
       },
       "metaData": {
           "accountId": {
               "string": "75555851"
           },
           "schemaVersion": "1.0.0.4",
           "startTime": {
               "long": 1465992202047
           },
           "endTime": null
       },
       "recordCollection": [
           {
               "body": {
                   "com.liveperson.dataaccess.AgentActivityData": {
                       "header": {
                           "com.liveperson.dataaccess.AgentHeader": {
                               "agentSessionId": {
                                   "string": "75555851-684867733"
                               }
                           }
                       },
                       "agentSessionsData": {
                           "array": [
                               {
                                   "agentID": {
                                       "long": 9
                                   },
                                   "type": {
                                       "long": 3
                                   },
                                   "state": {
                                       "long": 0
                                   },
                                   "timestamp": {
                                       "long": 1465992202047
                                   },
                                   "prevState": {
                                       "long": 1
                                   },
                                   "agentEmployeeId": {
                                       "string": ""
                                   },
                                   "agentUsername": {
                                       "string": "CRAgent"
                                   },
                                   "agentNickname": {
                                       "string": "CRAgent"
                                   },
                                   "agentLoginname": {
                                       "string": "CRAgent@liveperson.com"
                                   },
                                   "prevConcurrentEng": {
                                       "long": 0
                                   },
                                   "concurrentEng": {
                                       "long": 0
                                   },
                                   "maxConcurrentEng": {
                                       "long": -9
                                   },
                                   "agentGroupID": {
                                       "long": -1
                                   }
                               }
                           ]
                       }
                   }
               }
           }
       ]
    }

The following table describes the information that is available in the agent activity data:

**Header**

| Parameter | Description | Type / Value |
| :--------- | :------------ | :------------ |
| agentSessionId | ID of the agent’s session. | string |

**Response Body**

| Parameter | Description | Type / Value |
| :------- | :------------ | :--------- |
|agentID | Unique agent identifier. | long |
| type | Type of event generated the session, can be one of the following: <br>-1 - Unknown,<br> 1 - Chat, <br>3- Login, <br>4 – Logout. | long |
| state | Agent’s status, can be one of the following: <br>-1 - Unknown, <br>0 - Irrelevant,<br> 1 - Offline, <br>2 - Online, <br>3 - Back Soon, <br>4 – Away. | long |
| timestamp | Time for the state change in UTC. | long |
| prevState | The previous agent’s status, can be one of the following: <br>-1 - Unknown, <br>0 - Irrelevant, <br>1 - Offline,<br> 2 - Online, <br>3 - Back Soon, <br>4 – Away. | long |
| agentEmployeeId | Agent’s employee ID. | long |
| agentUserName | Agent’s user name. | string |
| agentNickName | Agent’s nickname. | string |
| agentLoginName | Agent’s login name. | string |
| prevConcurrentEng | How many chats were handled concurrently prior to state change. | long |
| concurrentEng | How many chats were handled concurrently at the time of state change. | long |
| maxConcurrentEng | The maximum amount of chats the agent can take at one time. In cases of agent login / logout the value is -9. | long | 
| agentGroupID | Agent group’s ID. | long |
