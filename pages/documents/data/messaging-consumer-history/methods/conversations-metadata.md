
---
title: Conversations
level1: Documents
level2: Data
level3: Messaging history for consumer API
level4: Methods
order: 10
permalink: data-messaging-history-consumer-conversations-metadata.html
indicator: messaging
---

This method retrieves a list of consumer's conversations' metadata. The retrieved data can be filtered by time range and state.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST   | `https://<domain>/messaging_history/api/account/{accountID}/conversations/consumer/metadata/search?offset=0&limit=50`

**URL Parameters**

Name   | Description                                                          | Type/Value | Required | Notes
:----- | :------------------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
offset | The offset specifies from which record to retrieve the conversation. | numeric    | Required | Default is 0\. Example: Of 100 records, the first 20 have already been retrieved. Thus, in the next request will be specified with offset 21.
limit  | Max amount of conversations to be received in the response.          | numeric    | Required | Default is 50\. Max value is 100\. The remaining conversations can be obtained using pagination (using offset, in a subsequent request).
sort   | Sort the results in a predefined order.                              | string     | Required | Example: start:desc will order conversations by descending value of the start time. Valid values include: start, end. Order:[asc/desc]

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

Name                | Description                                                                                   | Type/Value                         | Required | Notes
:------------------ | :-------------------------------------------------------------------------------------------- | :--------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
start {from, to}    | Conversation's start time range.                                                              | long - epoch time in milliseconds. | Optional | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is 13 months. Larger intervals will be rejected.
state               | Latest status of the conversation.                                                            | Array `<status>`                   | Optional | Valid values: "CLOSE", "ARCHIVE". Default value - ARCHIVE
=======

Filters examples:

Name                | Description
:------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
start               | {″start″:{"from":1470037448000,"to":1472543048000}}
state               | {"state":["CLOSE"]}

### Response

**Elements in the Response**

_responseMetadata

Name              | Description                                        | Type/Value
:---------------- | :------------------------------------------------- | :-----------------
_responseMetadata | All response-related pagination Metadata.          | container
rel               | Name of a link to be used in the next request.     | alphanumeric (256)
href              | A specific link to be used in the next request.    | alphanumeric (256)
count             | Number of sessions using the current query/filter. | numeric

_conversation record_

Name                 | Description                                                       | Type/Value
:------------------- | :---------------------------------------------------------------- | :---------
convId               | ID of the conversation.                                           | String     |
participants         | Contains information about the participating in the conversation. | container  |
startTs              | Start-time of the conversation.                                   | long       |
endTs                | End-time of the conversation.                                     | long       |
csat                 | Contains information about the csat given by the consumer.        | container  |

_Conversation participants

Name                 | Description                                 | Type/Value | Notes
:------------------- | :-------------------------------------------| :--------- | :------------------------------------------------------------------------------------------------------------
id                   | ID of the participant (Agent or Consumer).  | string     |
role                 | The role pf the participant .               | string     | Valid values: "CONSUMER", "ASSIGNED_AGENT", "READER", "MANAGER"


_Conversation csat

Name          | Description                                 | Type/Value | Notes
:------------ | :------------------------------------------ | :--------- | :-------------------------------------------------
csatRate                   | Time score given by the consumer.           | double     |
csatResolutionConfirmation | Indicates whether the issue was resolved.   | boolean    |
status                     | The status of the csat survey               | string     | Valid values: "FILLED", "PARTIALLY_FILLED","SKIPPED"

**JSON Example**

```
{
    "_responseMetadata": {
        "count": 1,
        "self": {
            "rel": "self",
            "href": "http://qtvr-wto133:8080/messaging_history/api/account/le69322492/conversations/consumer/metadata/search?limit=50&offset=0&sort=start:desc"
        },
        "shardsStatusResult": {
            "partialResult": true
        }
    },
    "conversationHistoryMetadataRecords": [
        {
            "convId": "2ba1f774-0455-4759-9e5c-42d9b67db3f1",
            "participants": [
                {
                    "id": "d74812871d96945af08f77b95b16b39cc2f29438bbe48b0109e2719575787332",
                    "role": "CONSUMER"
                },
                {
                    "id": "eea399b9-fed0-5cb0-8d38-00e3bc50d79b",
                    "role": "ASSIGNED_AGENT"
                }
            ],
            "state": "CLOSE",
            "startTs": 1501047777465,
            "endTs": 1501047800467,
            "csat": {
                "csatRate": 3,
                "csatResolutionConfirmation": false,
                "status": "FILLED"
            }
        }
    ]
}
```
