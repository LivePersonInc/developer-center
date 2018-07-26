---
title: Conversations
level1: Documents
level2: Data
level3: Messaging Interactions API
level4: Methods
order: 10
permalink: data-messaging-interactions-conversations.html
indicator: messaging
---
 
This method retrieves a list of conversations with all their metadata and related messages based on a predefined search criteria. Search criteria includes filtering by time range, agent, skill, etc.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST   | `https://<domain>/messaging_history/api/account/{accountID}/conversations/search?offset=0&limit=50`

**URL Parameters**

Name   | Description                                                  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
offset | The offset specifies from which record to retrieve the chat. | numeric    | Required | Default is 0\. Example: Of 100 records, the first 20 have already been retrieved. Thus, in the next request will be specified with offset 21.
limit  | Max amount of conversations to be received in the response.  | numeric    | Required | Default is 50\. Max value is 100\. The remaining conversations can be obtained using pagination (using offset, in a subsequent request).
sort   | Sort the results in a predefined order.                      | string     | Required | Example: start:desc will order conversations by descending value of the start time. Valid values include: start, end. Order:[asc/desc]

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

Name                | Description                                                                                   | Type/Value                         | Required | Notes
:------------------ | :-------------------------------------------------------------------------------------------- | :--------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
start {from, to}    | Conversation's start time range.                                                              | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
end {from, to}    | Conversation's end time range.                                                              | long - epoch time in milliseconds. | Optional | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
status              | Latest status of the conversation.                                                            | Array `<status>`                   | Optional | Valid values: "OPEN", "CLOSE"
skillIds            | An array of skill IDs, represented as numbers.                                                | Array `<skillID>`                  | Optional | Any skill, through the entire flow of the conversation.
latestSkillIds      | An array of latest skill IDs, represented as numbers. The latest skill ID is the latest skill which the conversation was assigned under.                                         | Array `<skillID>`                  | Optional | Filters only conversations whose latest skill appears in the array.
agentIds            | An array of agent IDs, represented as numbers.                                                | Array `<agentID>`                  | Optional |
latestAgentIds      | An array of latest agent IDs, represented as numbers.                                         | Array `<agentID>`                  | Optional | Filters only conversations whose latest agent appears in the array.
agentGroupIds       | An array of agent group IDs, represented as numbers.                                          | Array `<agentGroupID>`             | Optional |
keyword             | Specific word or phrase found in the messages of the conversation.                            | alphanumeric                       | Optional |
summary             | Specific word or phrase found in the summary of the conversation.                             | alphanumeric                       | Optional |
duration {from, to} | Range of conversation length (in seconds).                                                    | numeric, numeric                   | Optional | If one parameter is filled out, the other parameter must be as well. Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to 0 or the retention time of conversations (13 months), respectively.
mcs {from,to}       | Range of Meaningful Connection Score in a particular conversation (including the boundaries). | numeric, numeric                   | Optional | Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to the minimal or maximal possible values of MCS, respectively.
alertedMcsValues    | Alerted MCS of the conversation up until the most recent message.                             | Array `<alertedMCS>`               | Optional | Valid values: "-1", "0", "1"
csat {from,to}      | Range of CSAT assigned to the conversation.                                                   | numeric, numeric                   | Optional | Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to the minimal or maximal possible value of CSAT (1 or 5 respectively).
source              | Source origin (Facebook, App etc.) from which the conversation was initially opened.          | Array `<String>`                   | Optional | Possible values: APP, WEB, AGENT, SMS, FACEBOOK
device              | Type of device from which the conversation was initially opened.                              | Array `<String>`                   | Optional | Possible values: DESKTOP, TABLET, MOBILE, NA
messageContentTypes | The type of the message                                                                       | Array `<String>`                   | Optional | Valid values: TEXT_PLAIN, TEXT_HTML, LINK, HOSTED_FILE, IMG, SECURE_FORM_INVITATION, SECURE_FORM_SUBMIT,
messageContentTypes | The type of the message                                                                       | Array `<String>`                   | Optional | Valid values: TEXT_PLAIN, TEXT_HTML, LINK, HOSTED_FILE, IMG, SECURE_FORM_INVITATION, SECURE_FORM_SUBMIT
latestConversationQueueState | The queue state of the conversation                                                                      | String                   | Optional | Valid values: IN_QUEUE,ACTIVE
| sdeSearch {personalInfo,customerInfo,userUpdate} | Search for values passed via engagement attributes(SDEs) | alphanumeric,alphanumeric,alphanumeric | Optional | Valid values: all parameters are optional , with logical OR operator between them. userUpdate - relates to the userProfile content. |

Filters examples:

Name                | Description
:------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
start               | {″start″:{"from":1470037448000,"to":1472543048000}}
end                 | {″start″:{"from":1470037448000,"to":1472543048000},"end":{"from":1470908735000,"to":1472543048000}}
status              | {"start":{"from":1470037448000,"to":1472543048000},"status":["CLOSE","OPEN"]}
skillIds            | {"start":{"from":1470037448000,"to":1472543048000},"skillIds":["-1","2"]}
latestSkillIds      | {"start":{"from":1470037448000,"to":1472543048000},"latestSkillIds":["-1","2"]}
agentIds            | {"start":{"from":1470037448000,"to":1472543048000},"agentIds":["11111111-2222-3333-4444-555555555555","2"]} latestAgentIds {"start":{"from":1470148243000,"to":1472543048000},"latestAgentIds":[3678429210,3673269110]}
agentGroupIds       | {"start":{"from":1470037448000,"to":1472543048000},"agentGroupIds":["0","2"]}
keyword             | {"start":{"from":1470037448000,"to":1472543048000},"keyword":"bonus"}
summary             | {"start":{"from":1481694532185,"to":1482324227482},"summary":"purchase"}
duration            | {"start":{"from":1470037448000,"to":1472543048000}, "duration":{"from":0,"to":1000}}
mcs                 | {"start":{"from":1470037448000,"to":1472543048000}, "mcs":{"from":0,"to":100}}
alertedMcsValues    | {"start": {"from": "1485330205108", "to": "1485942798000"}, "alertedMcsValues": ["-1","1"]}
csat                | {"start":{"from":1470037448000,"to":1472543048000}, "csat":{"from":4,"to":5}}
source              | {"start":{"from":1470037448000,"to":1472543048000}, "source":["APP"]}
device              | {"start":{"from":1470037448000,"to":1472543048000},"device":["DESKTOP"]}
messageContentTypes | {"start": {"from": "1484830093231", "to": "1485447764498"}, "messageContentTypes": ["TEXT_PLAIN"]}
latestConversationQueueState | {"start": {"from": "1484830093231", "to": "1485447764498"}, "latestConversationQueueState": "IN_QUEUE"}|
sdeSearch | {"start":{"from":"1484830093231","to":"1485447764498"},"sdeSearch":{"personalInfo":"George","customerInfo":"Liveperson","userUpdate":"george@liveperson.com"}} 
### Response

**Elements in the Response**

_Metadata info_

Name      | Description                                        | Type/Value
:-------- | :------------------------------------------------- | :-----------------
_metadata | All response-related Metadata.                     | container
rel       | Name of a link to be used in the next request.     | alphanumeric (256)
href      | A specific link to be used in the next request.    | alphanumeric (256)
count     | Number of sessions using the current query/filter. | numeric
info      | Information about a specific conversation.         | container

_Conversation record_

Name                 | Description                                                                    | Type/Value
:------------------- | :----------------------------------------------------------------------------- | :---------
info                 | Contains information on the conversation.                                      | container
campaign             | Campaign data of the messaging.                                                | container
messagesRecords      | Contains information about a specific message.                                 | container
messageStatuses      | Contains information about message acceptance status (i.e. read/accept).       | container
agentParticipants    | Contains information about the agent(s) participating in the conversation.     | container
consumerParticipants | Contains information about the consumer(s) participating in the conversation.  | container
transfers            | Contains information about transfers in the conversation.                      | container
interactions         | Contains information about the interactions in the conversation.               | container
messageScore         | Contains information about the message's score, including raw and MCS.         | container
conversationSurveys  | Contains information about the different surveys for the current conversation. | container
summary              | Contains information about the conversation's summary.                         | container
sdes                 | List of Engagement Attributes.                                                 | container

_Conversation info_

Name                 | Description                                                                | Type/Value | Notes
:------------------- | :------------------------------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------
conversationId       | ID of conversation.                                                        | string     |
brandId              | ID of brand.                                                               | string     |
status               | Latest status of the conversation.                                         | string     |
startTime            | Start-time of the conversation.                                            | long       |
endTime              | End-time of the conversation.                                              | long       |
duration             | Time from when the consumer started the conversation until it ended.       | long       | For open conversations, the duration returned is the time until the time the data was retrieved (in milliseconds).
closeReason          | Reason for closing the conversation - by agent / consumer.                 | string     |
firstConversation    | Whether it is the consumer's first conversation.                           | Boolean    |
csat                 | CSAT score of the conversation (as given in the answer).                   | int        | Range: 1 to 5.
mcs                  | Meaningful Connection Score of the conversation.                           | int        | Range: 0-100\. If it is for an open conversation, the score is take from the conversation up until the most recent interaction.
alertedMCS           | Divides the MCS score into 3 groups: Positive, Neutral, Negative.          | int        | Values: -1, 0, 1
source               | Source origin (Facebook, app, etc).                                        | string     |
device               | Device origin (desktop, smartphone, etc.).                                 | string     |
latestSkillId        | Most recent skill id of the conversation, will be updated after the conversation is started, assigned to an agent or transferred to a skill.                       | long       |
latestSkillName      | Most recent skill name that the conversation was assigned to.                | string     |
latestAgentId        | Most recent agent ID the conversation was assigned to.                     | long       |
latestAgentLoginName | The agent's login name.                                                    | string     |
latestAgentNickname  | The agent's nickname.                                                      | string     |
latestAgentFullName  | The agent's full name.                                                     | string     |
agentDeleted | Indicates whether agent was deleted. | Boolean |
latestAgentGroupId   | Group ID of the agent most recently assigned to the conversation.          | long       |
latestAgentGroupName | Group name of the agent most recently assigned to the conversation.        | string     |
browser | The browser or hosted application of the engagement.                 | string     |
operatingSystem |  Operating system of the device | string     | Possible values:WINDOWS, MAC_OSX, LINUX, IOS, ANDROID.
latestQueueState     | Indicates if the conversation is assigned to an agent or waiting in queue. | string     | Valid values: "IN_QUEUE", "ACTIVE"
isPartial            | Indicates whether the conversation's data is partial.                      | Boolean    | In order to retrieve its full data, use single conversation method (by conversation ID).

_Campaign info_

Name                 | Description                                                                | Type/Value | Notes
:------------------- | :------------------------------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------
| campaignEngagementId |  ID of the campaign's engagement. | numeric | |
| campaignEngagementName | Name of the campaign's engagement. | alphanumeric (50) | |
| campaignId | ID of the campaign. | numeric  | |
| campaignName | Name of the campaign. | alphanumeric (50) | |
| goalId | ID of the campaign's goal. | numeric | |
| goalName | Name of the campaign's goal. | alphanumeric (50) | |
| engagementAgentNote | Note to the Agent defined for the campaign's engagement. | alphanumeric  | |
| engagementSource | The source of the campaign's engagement .e.g. WEB_SITE, SOCIAL_MEDIA, etc. | alphanumeric  | |
| visitorBehaviorId | ID of the visitor behavior defined for the campaign's engagement. | numeric  | |
| visitorBehaviorName | Name of the visitor behavior defined for the campaign's engagement. | alphanumeric (50) | |
| engagementApplicationId | Engagement's application ID. | alphanumeric - UUID | |
| engagementApplicationName | Engagement's application name. | alphanumeric | |
| engagementApplicationTypeId | Engagement's application type id | alphanumeric | |
| engagementApplicationTypeName | Engagement's application type name | alphanumeric | |
| visitorProfileId | ID of the visitor profile defined for the campaign. | numeric | |
| visitorProfileName | Name of the visitor profile defined for the campaign. | alphanumeric | (50) | |
| lobId | ID of the line of business of the campaign. | numeric(long) | |
| lobName | Name of the line of business of the campaign. | alphanumeric | |
| LocationId | ID of the location of the engagement on the screen. | numeric  | |
| LocationName | describes the engagement display location. | alphanumeric | The default location is the entire website. |
| behaviorSystemDefault | Indicates whether visitor behavior is the default one. | Boolean | |
| profileSystemDefault | Indicates whether visitor behavior is the default one. | Boolean | |

_Message Info_

Name          | Description                                 | Type/Value | Notes
:------------ | :------------------------------------------ | :--------- | :-------------------------------------------------
time          | Time the message was sent.                  | string     |
timeL         | Time the message was sent in a long format. | long       |
type          | Type of data                                | string     | Valid values: "text", "file",
messageData   | Content of the message.                     | container  |
messageId     | ID of message.                              | string     |
seq           | Message's sequence in the conversation.     | string     | Does not have to be continuous, i.e. 0, 2, 5, etc.
dialogId      | ID of dialog bulk.                          | long       |
participantId | ID of participant.                          | string     |
source        | Message's origin.                           | string     |
device        | Device the message was sent from.           | string     |
sentBy        | Who sent the message                        | string     | Valid values: "agent", "consumer"
contextData   | Contains context information about the consumer's message, including raw and structured metadata.            | container| |

*Context Data*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
rawMetadata       | Raw meta data of context information about a consumer message in a json format.   | string|
structuredMetadata       | An array of structured metadata including both context data about a consumer message and an action reason in case of escalation   | Array `<StructuredMetadata>`|

*Structured Metadata*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
botResponse       | Container of structured context data about a consumer message   | container|
actionReason       | Contains information about the action's reason    | container|

*BotResponse*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
externalConversationId       | External platform conversation identifier.   | string|
businessCases       | The topic or business case of the conversation. In WVA this data is stored in capability field.   | Array `<String>`|
intents       | List of intents identified for a consumer message   | Array `<Intent>`|

*Intent*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
id       | Intent id.   | string|
name       | Intent name.   | string|
confidence       | Normalized intent confidence level (low, medium, high).   | string|
confidenceScore       | Intent confidence level value as calculated by the integrated platform.   | double|

*Action Reason*

Name       | Description                        | Type/Value |
:----------| :------------------                | :----------|
reason       | The reason behind an action that was taken by a bot or an agent, currently the action refers to escalation or transfer   | string|

_Message Text_

Name | Description                      | Type/Value
:--- | :------------------------------- | :---------
text | The text content of the message. | string

_Message File_

Name         | Description                        | Type/Value | Notes
:----------- | :--------------------------------- | :--------- | :----------------------------------------------
relativePath | Relative path of the file.         | string     |
fileType     | Type of the file.                  | string     | Valid values: "JPG", "PNG", "GIF", "TXT", "PDF"
caption      | The caption (heading) of the file. | string

_Message Link_

Name             | Description            | Type/Value | Notes
:--------------- | :--------------------- | :--------- | :----------------------------------------------
externalFileLink | Link to external file. | string     |
fileType         | Type of the file.      | string     | Valid values: "JPG", "PNG", "GIF", "TXT", "PDF"

_Message Status info_

Name                  | Description                                                 | Type/Value
:-------------------- | :---------------------------------------------------------- | :---------
messageId             | ID of message.                                              | string
time                  | Time the change in message status occurred.                 | string
timeL                 | Time the change in message status occurred, in long format. | long
messageDeliveryStatus | The message's delivery status (i.e - sent. accept, read).   | long

_Message Score info_

Name            | Description                                                        | Type/Value | Notes
:-------------- | :----------------------------------------------------------------- | :--------- | :--------------
messageId       | ID of message.                                                     | string     |
time            | Time the MCS was calculated.                                       | string     |
timeL           | Time the MCS was calculated, in long format.                       | long       |
mcs             | Meaningful Connection Score of the conversation up to this message | int        | Range: 0 - 100.
messageRawScore | Score of message.                                                  | int

_Participating Agent info_

Name           | Description                                                        | Type/Value | Notes
:------------- | :----------------------------------------------------------------- | :--------- | :---------------------------------
agentId        | ID of agent.                                                       | string     |
agentLoginName | Login name of the agent assigned to the conversation.              | string     |
agentNickname  | Nickname of the agent assigned to the conversation.                | string     |
agentFullName  | Full name of the agent assigned to the conversation.               | string     |
agentDeleted | Indicates whether agent was deleted. | Boolean |
time           | The time the agent was added to the conversation.                  | string     |
timeL          | The time the agent was added to the conversation (in long format). | long       |
role           | The agent's role in the conversation- assigned agent, manager etc. | string     |
userType       | The id of the user type, can be one of the following:0, 1, 2       | String     |
userTypeName   | The name of the user type,can be one of the following: System, Human or Bot            | String     |
agentGroupId   | Agent's group ID.                                                  | long       |
agentGroupName | The agent's group name.                                            | string     |
permission     | Agent's permission in the conversation (reader, assigned).         | string     | Valid values: "reader", "assigned"
contextData    | Contains context information about the transfer, including raw and structured metadata.| container| |

_Consumer Participant info_

Name          | Description                                                      | Type/Value
:------------ | :--------------------------------------------------------------- | :---------
participantId | ID of consumer (in the LP database).                             | string
time          | Time the consumer joined the conversation.                       | string
timeL         | Time the consumer joined the conversation (in long format).      | long
firstName     | Consumer's first name (provided by consumer in their profile).   | string
lastName      | Consumer's last name (provided by consumer in their profile).    | string
phone         | Consumer's phone number (provided by consumer in their profile). | string
email         | Consumer's email (provided by consumer in their profile).        | string
token         | Private identifier of the user.                                  | string

_Transfer info_

Name                   | Description                                                   | Type/Value
:--------------------- | :------------------------------------------------------------ | :---------
transfer               | Information about the transfer operation in the conversation. | container
time                   | Time of transfer                                              | string
timeL                  | Time of transfer (in long format).                            | long
assignedAgentId        | Target agent ID (to transfer to).                             | string
assignedAgentLoginName | The agent's login name.                                       | string
assignedAgentNickname  | The agent's nickname.                                         | string
assignedAgentFullName  | The agent's full name.                                        | string
targetSkillId          | Target skill ID (to transfer to).                             | long
targetSkillName        | Target skill name.                                            | string
sourceSkillId          | The source skill ID.                                          | long
sourceSkillName        | The source skill name.                                        | string
sourceAgentId          | The source agent ID.                                          | string
sourceAgentLoginName   | The source agent name.                                        | string
sourceAgentNickname    | The source agent nickname.                                    | string
sourceAgentFullName    | The source agent full name.                                   | string
reason                 | Reason for transfer (back2Q, Agent, Skill, TakeOver)          | string
contextData            | Contains context information about the transfer, including raw and structured metadata.            | container| |

_Interaction info_

Name                | Description                                               | Type/Value
:------------------ | :-------------------------------------------------------- | :---------
assignedAgentId     | ID of the agent participating in the current interaction. | string
agentLoginName      | The agent's login name.                                   | string
agentNickname       | The agent's nickname.                                     | string
agentFullName       | The agent's full name.                                    | string
interactionTime     | Interaction start time.                                   | string
interactionTimeL    | Interaction start time (in long format).                  | long
interactiveSequence | Interaction's sequence within the conversation.           | int

_Survey info_

Name         | Description                                     | Type/Value | Notes
:----------- | :---------------------------------------------- | :--------- | :----------------------------
surveyType   | Type of the survey.                             | string     | Currently always "Resolution"
surveyStatus | Status of the submission of the survey.         | string     |
surveyData   | List of the question and answers in the survey. | container

_SurveyData info_

Name     | Description           | Type/Value
:------- | :-------------------- | :---------
question | Survey question text. | string
answer   | Survey answer text,   | string

_Summary info_

Name            | Description                                       | Type/Value
:-------------- | :------------------------------------------------ | :---------
text            | Conversation's summary text.                      | string
lastUpdatedTime | Time the conversation's summary was last updated. | long

_Sdes info_

Name            | Description                                 | Type/Value
:-------------- | :------------------------------------------ | :--------------------------------------------------------------------
events          | The sdes that were received from the brand. | Container (see [Appendix](data-messaging-interactions-appendix.html))
serverTimeStamp | Event time stamp.                           | long – epoch time in milliseconds
sdeType         | Type of sde.                                | enum

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
        "agentDeleted":false,
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
        "browser": "chrome",
        "operatingSystem": "NA",
        "latestAgentGroupId": -1,
        "latestAgentGroupName": "Unassigned",
        "latestQueueState": "ACTIVE",
        "isPartial": false
      },
       "campaign": {
       "campaignEngagementId": "2330596212",
       "campaignEngagementName": "Engagement-123",
       "campaignId": "2266771712",
       "campaignName": "Live_Chat_on_your_site",
       "goalId": "2266719412",
       "goalName": "Interact with visitors",
       "engagementAgentNote": "agent-note-test-messaging",
       "engagementSource": "WEB_SITE",
       "visitorBehaviorId": "2379540212",
       "visitorBehaviorName": "someVisitorBehavior",
       "engagementApplicationId": "28879660-84fd-4cd8-a1d7-ba3247bdb252",
       "engagementApplicationName": "Mobile App",
       "engagementApplicationTypeId": "92274cfd-29e7-4d94-a013-0646212d8075",
       "engagementApplicationTypeName": "Mobile App",
       "visitorProfileId": "2286779312",
       "visitorProfileName": "All visitors",
       "lobId": 2389848512,
       "lobName": "lob_123",
       "locationId": "2266779612",
       "locationName": "Entire site",
       "profileSystemDefault": true,
       "behaviorSystemDefault": false
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
              "text": "Hi there, dear consumer!"
            }
          },
          "messageId": "ms::conv:e5c58e49-e4a5-4038-8b18-d6580d1d5630::msg:0",
          "seq": 1,
          "dialogId": "undefined",
          "participantId": "3677470410",
          "source": "APP",
          "time": "2016-08-29 15:14:20.569+0000",
          "timeL": 1472483659564,
          "device": "undefined",
          "sentBy": "Agent",
          "contextData": {
            "rawMetadata": "[{\"type\":\"BotResponse\",\"intents\":[{\"id\":\"some intent identifier\",\"confidence\":\"MEDIUM\",\"confidenceScore\":0.753}],\"externalConversationId\":\"conversation identifier\",\"businessCases\":[\"business case name\"]},{\"type\":\"ActionReason\",\"reason\":\"some reason\",\"reasonId\":\"some reason Id\"}]",
            "structuredMetadata": [
              {
                "botResponse": {
                  "externalConversationId": "conversation identifier",
                  "businessCases": [
                    "business case name"
                  ],
                  "intents": [
                    {
                      "id": "some intent identifier",
                      "confidence": "MEDIUM",
                      "confidenceScore": 0.753
                    }
                  ]
                }
              },
              {
                "actionReason": {
                  "reason": "some reason"
                }
              }
            ]
          }
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
          "permission": "ASSIGNED_AGENT",
          "contextData": {
            "rawMetadata": "[{\"type\":\"BotResponse\",\"intents\":[{\"id\":\"some intent        identifier\",\"confidence\":\"MEDIUM\",\"confidenceScore\":0.753}],\"externalConversationId\":\"conversation   identifier\",\"businessCases\":[\"business case name\"]},{\"type\":\"ActionReason\",\"reason\":\"some    reason\",\"reasonId\":\"some reason Id\"}]",
            "structuredMetadata": [
              {
                "botResponse": {
                  "externalConversationId": "conversation identifier",
                  "businessCases": [
                    "business case name"
                  ],
                  "intents": [
                    {
                      "id": "some intent identifier",
                      "confidence": "MEDIUM",
                      "confidenceScore": 0.753
                    }
                  ]
                }
              },
              {
                "actionReason": {
                  "reason": "some reason"
                }
              }
            ]
          }
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
