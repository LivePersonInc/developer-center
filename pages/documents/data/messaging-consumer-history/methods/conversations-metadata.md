
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
  "_metadata": {
    "count": 1,
    "self": {
      "rel": "self",
      "href": "https://localhost:8082/messaging_history/api/account/qa51680169/conversations/search?limit=50&offset=0"
    },
    "shardsStatusResult": {
      "partialResult": false
    }
  },
  "conversationHistoryRecords": [
    {
      "info": {
        "startTime": "2016-08-29 14:30:24.565+0000",
        "startTimeL": 1472481024565,
        "endTime": "undefined",
        "endTimeL": -1,
        "duration": 78970,
        "conversationId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
        "brandId": "qa26409991",
        "latestAgentId": "3677470410",
        "latestAgentNickname": "michal@lp.com",
        "latestAgentFullName": "michal@lp.com",
        "latestAgentLoginName": "michal@lp.com",
        "latestSkillId": -1,
        "latestSkillName": "Unassigned",
        "source": "APP",
        "closeReason": "AGENT",
	    "closeReasonDescription": "MANUAL_CLOSE",
        "mcs": 67,
        "alertedMCS": 1,
        "status": "OPEN",
        "firstConversation": false,
        "csatRate": 5,
        "device": "undefined",
        "latestAgentGroupId": -1,
        "latestAgentGroupName": "Unassigned",
        "latestQueueState": "ACTIVE",
        "isPartial": false
      },
      "messageRecords": [
        {
          "type": "TEXT_PLAIN",
          "messageData": {
            "msg": {
              "text": "Hi there #4"
            }
          },
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
          "seq": 0,
          "dialogId": "undefined",
          "participantId": "f92c9890-2c95-428b-8a32-083528620d31",
          "source": "APP",
          "time": "2016-08-29 15:14:19.564+0000",
          "timeL": 1472483659564,
          "device": "undefined",
          "sentBy": "Consumer"
        },
        {
          "type": "TEXT_PLAIN",
          "messageData": {
            "msg": {
              "text": "I love your service"
            }
          },
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
          "seq": 2,
          "dialogId": "undefined",
          "participantId": "f92c9890-2c95-428b-8a32-083528620d31",
          "source": "APP",
          "time": "2016-08-29 15:15:42.568+0000",
          "timeL": 1472483742568,
          "device": "undefined",
          "sentBy": "Consumer"
        }
      ],
      "agentParticipants": [
        {

          "agentFullName": "michal@lp.com",
          "agentNickname": "michal@lp.com",
          "agentLoginName": "michal@lp.com",
          "agentId": "3677470410",
          "userType": "1",
		  "userTypeName": "Human",
          "role": "AGENT",
          "agentGroupName": "Unassigned",
          "agentGroupId": -1,
          "time": "2016-08-29 15:14:05.005+0000",
          "timeL": 1472483645005,
          "permission": "ASSIGNED_AGENT"
        }
      ],
      "consumerParticipant": [
        {
          	"participantId": "f92c9890-2c95-428b-8a32-083528620d31",
			"firstName": "Visitor",
			"lastName": "Test",
			"token": "undefined",
			"email": "undefined",
			"phone": "0",
			"avatarURL": "undefined",
			"time": "2016-08-29 14:30:24.573+0000",
			"timeL": 1472481024573,
			"consumerName": "Visitor"
        }
      ],

      "transfers": [
        {
          "timeL": 1498127364726,
          "time": "2017-06-22 10:29:24.726+0000",
          "assignedAgentId": "null",
          "targetSkillId": 2,
          "targetSkillName": "cats",
          "reason": "Skill",
          "by": "196875613",
          "sourceSkillId": -1,
          "sourceSkillName": "Unassigned",
          "sourceAgentId": "196875613",
          "sourceAgentFullName": "michal1",
          "sourceAgentLoginName": "michal1",
          "sourceAgentNickname": "michal1"
        },
        {
          "timeL": 1498127562332,
          "time": "2017-06-22 10:32:42.332+0000",
          "assignedAgentId": "null",
          "targetSkillId": 3,
          "targetSkillName": "lpsocial",
          "reason": "Skill",
          "by": "7",
          "sourceSkillId": 2,
          "sourceSkillName": "cats",
          "sourceAgentId": "7",
          "sourceAgentFullName": "michal",
          "sourceAgentLoginName": "michal@lp.com",
          "sourceAgentNickname": "michal"
        }
      ],
      "interactions": [
        {
          "assignedAgentId": "3677470410",
          "assignedAgentFullName": "michal@lp.com",
          "assignedAgentLoginName": "michal@lp.com",
          "assignedAgentNickname": "michal@lp.com",
          "interactionTimeL": 1472483644999,
          "interactionTime": "2016-08-29 15:14:04.999+0000",
          "interactiveSequence": 1
        }
      ],
      "messageScore": [
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
          "messageRawScore": 0,
		  "mcs": 0,
          "time": "2016-08-29 15:14:26.314+0000",
          "timeL": 1472483666314
        },
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
          "messageRawScore": 0,
		  "mcs": 0,
          "time": "2016-08-29 15:15:49.225+0000",
          "timeL": 1472483749225
        }
      ],
      "messageStatuses": [
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
          "seq": 0,
          "time": "2016-08-29 15:14:19.626+0000",
          "timeL": 1472483659626,
          "participantId": "3677470410",
          "participantType": "Agent",
          "messageDeliveryStatus": "ACCEPT"
        },
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
          "seq": 2,
          "time": "2016-08-29 15:15:42.609+0000",
          "timeL": 1472483742609,
          "participantId": "3677470410",
          "participantType": "Agent",
          "messageDeliveryStatus": "ACCEPT"
        },
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
          "seq": 0,
          "time": "2016-08-29 15:15:58.272+0000",
          "timeL": 1472483758272,
          "participantId": "3677470410",
          "participantType": "Agent",
          "messageDeliveryStatus": "READ"
        }
      ],
	"conversationSurveys": [
				{
					"surveyType": "Satisfaction",
					"surveyStatus": "FILLED",
					"surveyData": [
						{
							"question": "Confirm Resolution",
							"answer": "Yes"
						}
					]
				}
			],
      "sdes": {
        "events": [
          {
            "customerInfo": {
              "serverTimeStamp": "1497871291351",
              "customerInfo": {
                "customerId": "12345678",
                "companyBranch": "dummyCompanyBranch"
              }
            },
            "sdeType": "CUSTOMER_INFO",
            "serverTimeStamp": "1497871291351"
          },
          {
            "personalInfo": {
              "serverTimeStamp": "1497871291351",
              "personalInfo": {
                "name": "dummyName",
                "surname": "dummySurename",
                "contacts": [
                  {
                    "personalContact": {
                      "email": "dummy@mail.com",
                      "phone": "12345678"
                    }
                  }
                ]
              }
            },
            "sdeType": "PERSONAL_INFO",
            "serverTimeStamp": "1497871291351"
          }
        ]
      },

      "summary": {
        "text": "summary",
        "lastUpdatedTime": 1482333795318
      }
    }
  ]
}
```
