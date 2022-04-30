---
pagename: Historical
redirect_from:
  - 
sitesection: Documents
categoryname: "Reporting"
documentname: Key Messaging Metrics API
subfoldername: Methods
order: 10
permalink: key-messaging-metrics-api-methods-historical.html

indicator: messaging

---

### General 

The trends API retrieves messaging metrics over time filtered by agent, group or skill  for a time frame of up to 24 hours.

Using this API, you can enrich your customized real-time dashboard. Here are some example use cases of the API, that can assist you in analyzing your contact center performance:

- Track how many conversation have been closed over time, for a pre-defined skill / agent / group 

- Track how many conversation have been transferred over time, for a pre-defined skill / agent / group 

- Track how many conversation have been concluded over time, for a pre-defined skill / agent / group 


### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST| https://[{domain}](/agent-manager-domain-api.html)/manager_workspace/api/account/{accountId}/historical

**URL Parameters**

Name| Description  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
interval| Time interval in minutes between the points to be returned  | integer | No | Notice that the number of points in the graph to be returned according to the given interval should not be higher than 100 points. If interval value is null or 0, we compute the optimized interval: it can either 5 minutes, 60 minutes, 1 day or the time window divided by 12 points. We select the first time interval that lead to a valid number of points which is less than 100 points.

**BODY Parameters**

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|filters | Contains parameters to filter by. | Container  | Required | See detailed description [below](#filters)
|metricsToRetrieveByTime | List of metrics that are calculated for the given time range| Array `<String>` | Optional | Valid values:<br/>transfers<br/>concluded_conversations<br/>closed_conversations<br/>



### filters
_filters info_

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|time {from, to} | Represents events time.  | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 1 minutes, respectively. Time range is limited up to the last 24 hours. Note: This field is required, even if you are not requesting metrics from the metricsToRetrieveByTime section but only asking for the metricsToRetrieveCurrentValue section. 
|agentIds| An array of agent IDs.| Array `<String>`| Optional |
|agentGroupIds | An array of agent group IDs.| Array `<String>` | Optional | 
|skillIds| An array of skill IDs.| Array `<String>`| Optional |
|userTypes | Type of the user conducting of the conversation. | alphanumeric  | Optional | Valid values: HUMAN, BOT.


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
    "metricsToRetrieveByTime": [
        "concluded_conversations",
        "transfers",
        "closed_conversations"
    ]
}
```


### Response

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
historicalMetricsIntervals | All the historical points over time.| container

_historicalMetricsIntervals info_

Name| Description | Type/Value
:-------- | :------------------------------------------------- | :-----------------
timestamp  | Timestamp in msec of the point within the trend   | numeric
values  | the values of the point within the trend   | container

_value info_

Name  | Description  | Type/Value
:------------------- | :----------------------------------------------------------------------------- | :---------
transfers  | Number of conversations that were _transferred_ in the time interval (aka during the hour before the timestamp value)  | Long
closedConversations  | Number of conversations that were _closed_ in the time interval  | Long
concludedConversations  | Number of conversations that were _concluded_ in the time interval. Concluded conversations comprises closed and forwarded conversations  | Long




Response DTO - json example:

```json

{
    "historicalMetricsIntervals": [
        {
            "timestamp": 1604498398800,
            "values": {
                "transfers": 3986.0,
                "closedConversations": 1041.0,
                "concludedConversations": 5027.0
            }
        },
        {
            "timestamp": 1604505598380,
            "values": {
                "transfers": 7385.0,
                "closedConversations": 2186.0,
                "concludedConversations": 9571.0
            }
        },
        {
            "timestamp": 1604512797960,
            "values": {
                "transfers": 7118.0,
                "closedConversations": 2623.0,
                "concludedConversations": 9741.0
            }
        },
        {
            "timestamp": 1604519997540,
            "values": {
                "transfers": 6902.0,
                "closedConversations": 2802.0,
                "concludedConversations": 9704.0
            }
        },
        {
            "timestamp": 1604527197120,
            "values": {
                "transfers": 6420.0,
                "closedConversations": 2648.0,
                "concludedConversations": 9068.0
            }
        },
        {
            "timestamp": 1604534396700,
            "values": {
                "transfers": 5948.0,
                "closedConversations": 2451.0,
                "concludedConversations": 8399.0
            }
        },
        {
            "timestamp": 1604541596280,
            "values": {
                "transfers": 4818.0,
                "closedConversations": 1785.0,
                "concludedConversations": 6603.0
            }
        },
        {
            "timestamp": 1604548795860,
            "values": {
                "transfers": 3067.0,
                "closedConversations": 1549.0,
                "concludedConversations": 4616.0
            }
        },
        {
            "timestamp": 1604555995440,
            "values": {
                "transfers": 1618.0,
                "closedConversations": 1190.0,
                "concludedConversations": 2808.0
            }
        },
        {
            "timestamp": 1604563195020,
            "values": {
                "transfers": 826.0,
                "closedConversations": 1442.0,
                "concludedConversations": 2268.0
            }
        },
        {
            "timestamp": 1604570394600,
            "values": {
                "transfers": 868.0,
                "closedConversations": 1135.0,
                "concludedConversations": 2003.0
            }
        },
        {
            "timestamp": 1604577594180,
            "values": {
                "transfers": 3601.0,
                "closedConversations": 1064.0,
                "concludedConversations": 4665.0
            }
        },
        {
            "timestamp": 1604584793760,
            "values": {
                "transfers": 2178.0,
                "closedConversations": 818.0,
                "concludedConversations": 2996.0
            }
        }
    ]
}

```
