---
pagename: Conversations
redirect_from:
  - data-messaging-interactions-conversations.html
sitesection: Documents
categoryname: "Historical Data"
documentname: Messaging Interactions API
subfoldername: Methods
order: 10
permalink: messaging-interactions-api-methods-conversations.html
indicator: messaging
---

This method retrieves a list of conversations with all their metadata and related messages based on a predefined search criteria. Search criteria includes filtering by time range, agent, skill, etc.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
POST   | https://[{domain}](/agent-domain-domain-api.html)/messaging_history/api/account/{accountID}/conversations/search?offset=0&limit=50

**URL Parameters**

Name   | Description                                                  | Type/Value | Required | Notes
:----- | :----------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
offset | The offset specifies from which record to retrieve the chat. | numeric    | Optional | Default is 0\. Example: Of 100 records, the first 20 have already been retrieved. Thus, in the next request will be specified with offset 21.
limit  | Max amount of conversations to be received in the response.  | numeric    | Optional | Default is 50\. Max value is 100\. The remaining conversations can be obtained using pagination (using offset, in a subsequent request).
sort   | Sort the results in a predefined order.                      | string     | Optional | Example: start:desc will order conversations by descending value of the start time. Valid values include: start, end. Order:[asc/desc]
v   | version of the API (1 or 2)                    | string     | Optional | default value is 1. Only in v=2 will unauthenticated engagement attributes (SDEs) be returned. When using v=2, both unauthenticated and authenticated SDEs will have a type as defined in the engagement attribute in question and not String.|

**BODY/POST Parameters**

#### Note: New capability - partial retrieval of data

The API now allows you to retrieve some of the content, per your need, instead of every possible key. This is done by calling the API with the contentToRetrive parameter and specifying the types of content you would like to get in the response.

<div class="important">Because this API retrieves <b>some</b> of the SDEs that are supported in LiveEngage by design, it is not suitable for brands looking for <b>all</b> of their data. The data retrieved by this API will be partial, usually limited to the last update LiveEngage performed to the SDEs. If you're looking into retrieving all of your data instead, the <a href="data-access-api-overview.html">Data Access API</a> is better suited to your needs. You can also refer to the <a href="messaging-interactions-api-methods-get-conversation-by-conversation-id.html">Get Conversation by ID method</a> of this API if you're looking for all SDEs for one specific conversation.</div>

The default types that are returned (without using contentToRetrieve) are: campaign, messageRecords, agentParticipants, agentParticipantsLeave, agentParticipantsActive, consumerParticipants, transfers, interactions, messageScores, messageStatuses, conversationSurveys, coBrowseSessions, summary, SDEs.

Filter is sent in the POST data (body) with the following JSON structure.

|Name  | Description | Type/Value  | Required | Notes|
|:---- | :---------- | :---------- | :------- | :---|
|start {from, to}    | Conversation's start time range.                                                              | long - epoch time in milliseconds. | Required | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
|end {from, to}    | Conversation's end time range.                                                              | long - epoch time in milliseconds. | Optional | Including bounds. From/to value is rounded to the last/next 10 minutes, respectively. The maximum time interval is three months. Larger intervals will be rejected.
|status              | Latest status of the conversation.                                                            | Array `<status>`                   | Optional | Valid values: "OPEN", "CLOSE"
|skillIds            | An array of skill IDs, represented as numbers.                                                | Array `<skillID>`                  | Optional | Any skill, through the entire flow of the conversation.
|latestSkillIds      | An array of latest skill IDs, represented as numbers. The latest skill ID is the latest skill which the conversation was assigned under.                                         | Array `<skillID>`                  | Optional | Filters only conversations whose latest skill appears in the array.
|agentIds            | An array of agent IDs, represented as numbers.                                                | Array `<agentID>`                  | Optional |
|latestAgentIds      | An array of latest agent IDs, represented as numbers.                                         | Array `<agentID>`                  | Optional | Filters only conversations whose latest agent appears in the array.
|agentGroupIds       | An array of agent group IDs, represented as numbers.                                          | Array `<agentGroupID>`             | Optional |
|keyword             | Specific word or phrase found in the messages of the conversation.                            | alphanumeric                       | Optional |
|summary             | Specific word or phrase found in the summary of the conversation.                             | alphanumeric                       | Optional |
|duration {from, to} | Range of conversation length (in seconds).                                                    | numeric, numeric                   | Optional | If one parameter is filled out, the other parameter must be as well. Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to 0 or the retention time of conversations (13 months), respectively.
|mcs {from,to}       | Range of Meaningful Connection Score in a particular conversation (including the boundaries). | numeric, numeric                   | Optional | Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to the minimal or maximal possible values of MCS, respectively.
|alertedMcsValues    | Alerted MCS of the conversation up until the most recent message.                             | Array `<alertedMCS>`               | Optional | Valid values: "-1", "0", "1"
|csat {from,to}      | Range of CSAT assigned to the conversation.                                                   | numeric, numeric                   | Optional | Either "from" or "to" fields are mandatory. In case one of the fields is missing, its value will be set to the minimal or maximal possible value of CSAT (1 or 5 respectively).
|source              | Source origin (Facebook, App etc.) from which the conversation was initially opened.          | Array `<String>`                   | Optional | Possible values: APP, SHARK (WEB), AGENT, SMS, FACEBOOK,Apple Business Chat
|device              | Type of device from which the conversation was initially opened.                              | Array `<String>`                   | Optional | Possible values: DESKTOP, TABLET, MOBILE, NA
|messageContentTypes | The type of the message                                                                       | Array `<String>`                   | Optional | Valid values: TEXT_PLAIN, TEXT_HTML, LINK, HOSTED_FILE, IMG, SECURE_FORM_INVITATION, SECURE_FORM_SUBMIT, RICH_CONTENT
|latestConversationQueueState | The queue state of the conversation                                                  | String   | Optional | Valid values: IN_QUEUE,ACTIVE|
|sdeSearch {list of SDEs types} | Search for values passed via engagement attributes(SDEs) | alphanumeric| Optional | Valid values: all parameters are optional , with a logical OR operator between them. The different SDE types are: personalInfo, customerInfo, userUpdate (relates to the userProfile content),marketingCampaignInfo,lead,purchase, viewedProduct,cartStatus,serviceActivity,visitorError,searchContent. See example below for how to execute a request with this parameter.|
responseTime |Response time range | epoch time in milliseconds | Optional | Either the "from" or "to" field is mandatory |
|contentToRetrieve | List of content types that should be retrieved | alphanumeric | Optional | Valid values: campaign, messageRecords, agentParticipants, agentParticipantsLeave, agentParticipantsActive, consumerParticipants, transfers, interactions, messageScores, messageStatuses, conversationSurveys, coBrowseSessions, summary, sdes, unAuthSdes, monitoring|

Filters examples:

|Name                | Description |
|:------------------ |:------------------------------------------------|
|start               | {″start″:{"from":1470037448000,"to":1472543048000}}|
|end                 | {″start″:{"from":1470037448000,"to":1472543048000},"end":{"from":1470908735000,"to":1472543048000}}|
|status              | {"start":{"from":1470037448000,"to":1472543048000},"status":["CLOSE","OPEN"]}|
|skillIds            | {"start":{"from":1470037448000,"to":1472543048000},"skillIds":["-1","2"]}|
|latestSkillIds      | {"start":{"from":1470037448000,"to":1472543048000},"latestSkillIds":["-1","2"]}|
|agentIds            | {"start":{"from":1470037448000,"to":1472543048000},"agentIds":["11111111-2222-3333-4444-555555555555","2"]} |
|latestAgentIds      | {"start":{"from":1470148243000,"to":1472543048000},"latestAgentIds":[3678429210,3673269110]}|
|agentGroupIds       | {"start":{"from":1470037448000,"to":1472543048000},"agentGroupIds":["0","2"]}|
|keyword             | {"start":{"from":1470037448000,"to":1472543048000},"keyword":"bonus"}|
|summary             | {"start":{"from":1481694532185,"to":1482324227482},"summary":"purchase"}|
|duration            | {"start":{"from":1470037448000,"to":1472543048000}, "duration":{"from":0,"to":1000}}|
|mcs                 | {"start":{"from":1470037448000,"to":1472543048000}, "mcs":{"from":0,"to":100}}|
|alertedMcsValues    | {"start": {"from": "1485330205108", "to": "1485942798000"}, "alertedMcsValues": ["-1","1"]}|
|csat                | {"start":{"from":1470037448000,"to":1472543048000}, "csat":{"from":4,"to":5}}|
|source              | {"start":{"from":1470037448000,"to":1472543048000}, "source":["APP"]}|
|device              | {"start":{"from":1470037448000,"to":1472543048000},"device":["DESKTOP"]}|
|messageContentTypes | {"start": {"from": "1484830093231", "to": "1485447764498"}, "messageContentTypes": ["TEXT_PLAIN"]}|
|latestConversationQueueState | {"start": {"from": "1484830093231", "to": "1485447764498"}, "latestConversationQueueState": "IN_QUEUE"}|
|sdeSearch | {"start":{"from":"1484830093231","to":"1485447764498"},"sdeSearch":{"personalInfo":"George","customerInfo":"Liveperson","userUpdate":"george@liveperson.com","marketingCampaignInfo":"campainTest","lead":"test1","purchase":"product1","viewedProduct":"product2","cartStatus":"test","serviceActivity":"test2","visitorError":"error1","searchContent":"Liveperson"}}|
|responseTime |{"start":{"from":1529566882153,"to":1530171697782},"status":["OPEN"],"responseTime":{"from":1530013618000,to":1530153993000},"contentToRetrieve":["responseTime"]}|
|contentToRetrieve | {"start":{"from":1518411320000,"to":-1},"contentToRetrieve":["campaign","messageRecords","agentParticipants","agentParticipantsLeave","agentParticipantsActive","consumerParticipants","transfers","interactions","messageScores","messageStatuses","conversationSurveys","coBrowseSessions","summary", "sdes","unAuthSdes","monitoring","responseTime"]}|

**Note: search by keywords, summary or engagement attributes**

In order to search for a specific phrase within the messages, summary or engagement attributes of the conversation, you will need to wrap the phrase in quotation marks. This will make sure that the search will run according to all specified characaters in the phrase and in the same position relative to each other. (For example: searching for "tester@liveperson.com", will search for the characters “tester” and “liveperson.com” in that order.)


### Response

**Elements in the Response**

_Metadata info_

Name      | Description                                        | Type/Value
:-------- | :------------------------------------------------- | :-----------------
metadata | All response-related Metadata.                     | container
rel       | Name of a link to be used in the next request.     | alphanumeric (256)
href      | A specific link to be used in the next request.    | alphanumeric (256)
count     | Number of sessions using the current query/filter. | numeric
info      | Information about a specific conversation.         | container

_Conversation record_

Name                 | Description                                                                    | Type/Value
:------------------- | :----------------------------------------------------------------------------- | :---------
info                 | Contains information on the conversation.                                      | container
campaign             | Campaign data of the messaging interaction.                                    | container
messagesRecords      | Contains information about a specific message.                                 | container
messageStatuses      | Contains information about message acceptance status (i.e. read/accept).       | container
agentParticipants    | Contains information about the agent(s) participating in the conversation.     | container
consumerParticipants | Contains information about the consumer(s) participating in the conversation.  | container
transfers            | Contains information about transfers in the conversation.                      | container
interactions         | Contains information about the interactions in the conversation.               | container
messageScore         | Contains information about the message's score, including raw and MCS.         | container
conversationSurveys  | Contains information about the different surveys for the current conversation. | container
coBrowseSessions     | Contains information about CoBrowse sessions for the current conversation.     | container
summary              | Contains information about the conversation's summary.                         | container
sdes                 | List of Engagement Attributes.                                                 | container
responseTime         | Response time                                                                  | container
dialogs              | Contains information about the different dialogs for the current conversation. | container

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
closeReasonDescription | Additional information regarding the conversation close reason            | string     |
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
fullDialogStatus     | Indicates the status of all the dialogs in the conversation.               | string     | Valid values: "OPEN", "CLOSE".

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
| engagementSource | The source of the campaign's engagement e.g. WEB_SITE, SOCIAL_MEDIA, etc. | alphanumeric  | |
| visitorBehaviorId | ID of the visitor behavior defined for the campaign's engagement (in case engagement id is available). | numeric  | |
| visitorBehaviorName | Name of the visitor behavior defined for the campaign's engagement (in case engagememt id is available). | alphanumeric (50) | |
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

_Monitoring_

Name                 | Description                                                                | Type/Value | Notes
:------------------- | :------------------------------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------
| country |  Name of country. | alphanumeric | |
| countryCode | Country's code. | alphanumeric | |
| state | Name of state. | alphanumeric  |  |
| city | Name of the city. | alphanumeric | |
| isp | Internet service provider's name. | alphanumeric | |
| org | Name of organization. | alphanumeric  | |
| device | Type of device. | alphanumeric  |Valid values: "DESKTOP", "TABLET", "MOBILE", "NA" |
| ipAddress | IP address of the consumer's device | alphanumeric  | |
| browser | Browser of the consumer who engaged in the conversation | alphanumeric  | |
| operatingSystem | Operating System of the consumer who engageed in the conversation. | alphanumeric | |
| conversationStartPage | The page's URL from which the conversation started. | alphanumeric| |
| conversationStartPageTitle | The page's title from which the conversation started. | alphanumeric | |


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
source        | Message's origin.                           | string     | deprecated (not supported)
device        | Device the message was sent from.           | string     | deprecated (not supported)
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

_Message Rich Content_

Name     | Description                    | Type/Value
:------- | :----------------------------- | :---------
content  | The json of rich content.      | string

_Message Quick Replies_

Name     | Description                    | Type/Value
:------- | :----------------------------- | :---------
content  | The json of the quick replies. | string

_Message Status info_

Name                  | Description                                                 | Type/Value
:-------------------- | :---------------------------------------------------------- | :---------
messageId             | ID of message.                                              | string
time                  | Time the change in message status occurred.                 | string
timeL                 | Time the change in message status occurred, in long format. | long
messageDeliveryStatus | The message's delivery status (i.e - sent. accept, read).   | string
dialogId              | The ID of the message dialog.                               | string
participantId         | The ID of the participant sending the message               | string
participantType       | The type of participant                                     | string

_Message Score info_

Name            | Description                                                        | Type/Value | Notes
:-------------- | :----------------------------------------------------------------- | :--------- | :--------------
messageId       | ID of message.                                                     | string     |
time            | Time the MCS was calculated.                                       | string     |
timeL           | Time the MCS was calculated, in long format.                       | long       |
mcs             | Meaningful Connection Score of the conversation up to this message | int        | Range: 0 - 100.
messageRawScore | Score of message.                                                  | int

*Conversation CoBrowse Sessions DTO*

| Name| Description| Type / Value| Notes|
| ---| ---| ---| ---|
|coBrowseSessionsList|Co browse sessions list|Array `<ConversationCoBrowseSessionDTO>`||

*Conversation CoBrowse Session DTO*

| Name| Description| Type / Value| Notes|
| ---| ---| ---| ---|
| sessionId| Session id| alphanumeric| |
| startTime| Start time| alphanumeric| |
| startTimeL| Start time | long – epoch time in milliseconds| |
| endTime| End time| alphanumeric| |
| endTimeL| End time | long – epoch time in milliseconds| |
| interactiveTime| The time the session became interactive| alphanumeric| |
| interactiveTimeL| The time the session became interactive | long – epoch time in milliseconds| |
| isInteractive| Is the session interactive| boolean| |
| endReason| CoBrowse end reason| alphanumeric| |
| duration| Duration of the CoBrowse session| numeric| |
| type| Type| alphanumeric| Valid values: "inApp", "web"|
|capabilities|Capabilities|Array `<alphanumeric>`||
| agentId| Agent id| alphanumeric| |


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
dialogId       | The ID of the dialog the agent is participating in.                   | string     |

_Consumer Participant info_

Name          | Description                                                      | Type/Value
:------------ | :--------------------------------------------------------------- | :---------
participantId | ID of consumer (in the LP database).                             | string
time          | Time in which the data was last updated.                         | string
timeL         | Time in which the data was last updated (in long format).        | long
joinTime      | Time the consumer joined the conversation.                       | string
joinTimeL     | Time the consumer joined the conversation (in long format).      | long
firstName     | Consumer's first name (provided by consumer in their profile).   | string
lastName      | Consumer's last name (provided by consumer in their profile).    | string
phone         | Consumer's phone number (provided by consumer in their profile). | string
email         | Consumer's email (provided by consumer in their profile).        | string
token         | Private identifier of the user.                                  | string
dialogId      | The ID of the dialog the agent is participating in.                 | string


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
dialogId               | The ID of the dialog being transfered.                        | string


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
dialogId            | The ID of the dialog having the interaction.              | string

_Survey info_

Name         | Description                                     | Type/Value | Notes
:----------- | :---------------------------------------------- | :--------- | :----------------------------
surveyType   | Type of the survey.                             | string     | Currently always "Resolution"
surveyStatus | Status of the submission of the survey.         | string     |
dialogId     | The ID of the dialog of the survey.             | string     |
surveyData   | List of the question and answers in the survey. | container  |

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
events          | The SDEs that were received from the brand. | Container (see [Appendix](/data-messaging-interactions-appendix.html))
serverTimeStamp | Event time stamp.                           | long – epoch time in milliseconds
sdeType         | Type of SDE.                                | enum

[Here](/data-messaging-interactions-appendix.html) you can find detailed information on the different attributes that are exposed for the engagement attributes via the API.


*Response Time Info*

Name            | Description                                       | Type/Value
:-------------- | :------------------------------------------------ | :---------
latestEffectiveResponseDueTime  | Latest effective response due time for agent to respond (by when should an agent respond to a message before it is considered overdue). -1 indicates waiting for consumer | long – epoch time in milliseconds
configuredResponseTime | Conversation's configured response time. | long – epoch time in milliseconds

_Dialog info_

Name         | Description                                     | Type/Value | Notes
:----------- | :---------------------------------------------- | :--------- | :----------------------------
dialogId     | The ID of the dialog.                           | string     |
status       | Status of the dialog.                           | string     |
dialogType   | The dialog type.                                | string     | Valid values: "POST_SURVEY", "MAIN".
dialogChannelType | The dialog channel type.                   | string     |
startTime    | The dialog start time, readable format.         | string     |
startTimeL   | The dialog start time, epoch time in milliseconds.| long – epoch time in milliseconds |
endTime      | The dialog end time, readable format.           | string     |
endTimeL     | The dialog end time, epoch time in milliseconds.| long – epoch time in milliseconds |
closeReason  | The dialog close reason.                        | string     |
closeReasonDescription | The dialog close reason description.  | string     |
skillId      | The skill ID associated with the dialog.        | string     |
skillName    | The name of the skill associated with the dialog.| string     |




**JSON Example**

```json
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
        "agentDeleted": false,
        "latestSkillId": -1,
        "latestSkillName": "Unassigned",
        "source": "APP",
        "closeReason": "AGENT",
        "closeReasonDescription": "MANUAL_CLOSE",
        "mcs": 67,
        "alertedMCS": 1,
        "status": "OPEN",
        "fullDialogStatus": "OPEN",
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
        "engagementApplicationName": "Some Mobile App Test",
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
      "monitoring": {
         "country": "United States",
         "countryCode": "US",
         "state": "Michigan",
         "city": "Michigan",
         "isp": "AT&T U-verse",
         "org": "AT&T U-verse",
         "device": "DESKTOP",
         "ipAddress": "192.000.12.240",
         "browser": "Chrome 66.0.3359.181",
         "operatingSystem": "WINDOWS",
         "conversationStartPage": "https://testPage",
         "conversationStartPageTitle": "LivePerson Page"
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
          "dialogId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
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
            },
            "quickReplies": {
              "content": "{\"type\":\"quickReplies\",\"itemsPerRow\":8,\"replies\":[{\"type\":\"button\",\"tooltip\":\"Hello\",\"title\":\"Hello\",\"click\":{\"actions\":[{\"type\":\"publishText\",\"text\":\"Hello\"}]}},{\"type\":\"button\",\"tooltip\":\"Howdy\",\"title\":\"Howdy\",\"click\":{\"actions\":[{\"type\":\"publishText\",\"text\":\"Howdy\"}]}}]}"
            }
          },
          "messageId": "ms::conv:e5c58e49-e4a5-4038-8b18-d6580d1d5630::msg:0",
          "seq": 1,
          "dialogId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
          "participantId": "3677470410",
          "source": "APP",
          "time": "2016-08-29 15:14:20.569+0000",
          "timeL": 1472483659564,
          "device": "undefined",
          "sentBy": "Agent",
          "contextData": {
            "rawMetadata": "[{\"type\":\"BotResponse\",\"intents\":[{\"id\":\"some intent identifier\",\"confidence\":\"MEDIUM\",\"confidenceScore\":0.753}],\"externalConversationId\":\"conversation identifier\",\"businessCases\":[\"business case name\"]},{\"type\":\"ActionReason\",\"reason\":\"some reason\",\"reasonId\":\"some reason ID\"}]",
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
          "dialogId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
          "participantId": "f92c9890-2c95-428b-8a32-083528620d31",
          "source": "APP",
          "time": "2016-08-29 15:15:42.568+0000",
          "timeL": 1472483742568,
          "device": "undefined",
          "sentBy": "Consumer"
        },
        {
          "type": "RICH_CONTENT",
          "messageData": {
            "quickReplies": {
              "content": "{\"type\":\"quickReplies\",\"itemsPerRow\":8,\"replies\":[{\"type\":\"button\",\"tooltip\":\"Yes\",\"title\":\"Yes\",\"click\":{\"actions\":[{\"type\":\"publishText\",\"text\":\"Yes\"}]}},{\"type\":\"button\",\"tooltip\":\"No\",\"title\":\"No\",\"click\":{\"actions\":[{\"type\":\"publishText\",\"text\":\"No\"}]}}]}"
            },
            "richContent": {
              "content": "{\"type\":\"vertical\",\"elements\":[{\"type\":\"image\",\"url\":\"https://media.giphy.com/media/3oKGzayyPJGE7xuytO/giphy.gif\",\"tooltip\":\"image tooltip\",\"click\":{\"metadata\":[{\"type\":\"ExternalId\",\"id\":\"123\"}],\"actions\":[{\"type\":\"navigate\",\"lo\":-73.9654,\"la\":40.7829},{\"type\":\"publishText\",\"text\":\"Manhaten\"}]}},{\"type\":\"text\",\"text\":\"Now on sale!\"},{\"type\":\"image\",\"url\":\"https://media.giphy.com/media/xT9IgsjDkpectclUI0/giphy.gif\",\"tooltip\":\"image tooltip\",\"click\":{\"metadata\":[{\"type\":\"ExternalId\",\"id\":\"123\"}],\"actions\":[{\"type\":\"navigate\",\"lo\":-73.9654,\"la\":40.7829},{\"type\":\"publishText\",\"text\":\"Manhaten\"}]}}]}"
            }
          },
          "messageId": "ms::conv:cd5926e0-5b57-4c82-85c5-9c95f88263a1::msg:8",
          "seq": 3,
          "dialogId": "e5c58e49-e4a5-40a8-8a18-d6580d1d5630",
          "participantId": "2198186612",
          "source": "APP",
          "time": "2017-10-24 10:24:52.962+0000",
          "timeL": 1508840692962,
          "device": "undefined",
          "sentBy": "Agent"
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
          "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1",
          "contextData": {
            "rawMetadata": "[{\"type\":\"BotResponse\",\"intents\":[{\"id\":\"some intent        identifier\",\"confidence\":\"MEDIUM\",\"confidenceScore\":0.753}],\"externalConversationId\":\"conversation   identifier\",\"businessCases\":[\"business case name\"]},{\"type\":\"ActionReason\",\"reason\":\"some    reason\",\"reasonId\":\"some reason ID\"}]",
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
          "consumerName": "Visitor",
	  "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
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
          "sourceAgentNickname": "michal1",
          "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
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
          "sourceAgentNickname": "michal",
	  "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
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
          "interactiveSequence": 1,
          "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
        }
      ],
      "dialogs": [
      	{
         "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1",
	 "status": "OPEN",
	 "dialogType": "MAIN",
	 "dialogChannelType": "MESSAGING",
	 "startTime": "2017-09-25 07:55:58.000+0000",
	 "startTimeL": 1506326158000,
	 "endTime": "2017-09-25 07:56:53.422+0000",
	 "endTimeL": 1506326213422,
	 "closeReason": “AGENT”,
	 “closeReasonDescription”:”MANUAL_CLOSE”,
	 “skillId”: 1234,
	 “skillName”: “skill3”
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
          "messageDeliveryStatus": "ACCEPT",
          "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
        },
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:2",
          "seq": 2,
          "time": "2016-08-29 15:15:42.609+0000",
          "timeL": 1472483742609,
          "participantId": "3677470410",
          "participantType": "Agent",
          "messageDeliveryStatus": "ACCEPT",
	  "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
        },
        {
          "messageId": "ms::conv:e5c58e49-e4a5-40a8-8a18-d6580d1d5630::msg:0",
          "seq": 0,
          "time": "2016-08-29 15:15:58.272+0000",
          "timeL": 1472483758272,
          "participantId": "3677470410",
          "participantType": "Agent",
          "messageDeliveryStatus": "READ",
	  "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1"
        }
      ],
      "conversationSurveys": [
        {
          "surveyType": "Satisfaction",
          "surveyStatus": "FILLED",
          "dialogId": "cd5926e0-5b57-4c82-85c5-9c95f88263a1",
          "surveyData": [
            {
              "question": "Confirm Resolution",
              "answer": "Yes"
            }
          ]
        }
      ],
      "coBrowseSessions": {
        "coBrowseSessionsList": [
          {
            "sessionId": "22207277:37084513__1d165aa8-9d37-4e40-baf8-06f5e80f6cd2_1506325721990",
            "startTime": "2017-09-25 07:48:42.000+0000",
            "startTimeL": 1506325722000,
            "endTime": "2017-09-25 07:50:01.789+0000",
            "endTimeL": 1506325801789,
            "endReason": "AGENT",
            "duration": 79789,
            "type": "inApp",
            "agentId": "37084513",
            "interactive": true
          },
          {
            "sessionId": "22207277:37084513__1d165aa8-9d37-4e40-baf8-06f5e80f6cd2_1506326147649",
            "startTime": "2017-09-25 07:55:58.000+0000",
            "startTimeL": 1506326158000,
            "endTime": "2017-09-25 07:56:53.422+0000",
            "endTimeL": 1506326213422,
            "endReason": "VISITOR",
            "duration": 55422,
            "type": "inApp",
            "capabilities": [
              "CONSUMER_VIDEO_CONNECTION",
              "CONSUMER_VOICE_CONNECTION",
              "AGENT_APP_CONTROL"
            ],
            "agentId": "37084513",
            "interactive": true
          }
        ]
      },
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
      "responseTime": {
        "latestEffectiveResponseDueTime": 1527174367230,
        "configuredResponseTime": 3000
      },
      "summary": {
        "text": "summary",
        "lastUpdatedTime": 1482333795318
      }
    }
  ]
}
```
