---
pagename: Conversation Util
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-conversation-util.html 
indicator: both
---

# Interface: IConversationUtil

## Table of contents

### Methods

- [getConversationById](#getconversationbyid)
- [scanConversationForKeywords](#scanconversationforkeywords)

## Methods

### getConversationById

▸ **getConversationById**(`conversationId`, `contentToRetrieve?`): `Promise`<[`IConversation`](#interface-iconversation)\>

Will retrieve a conversation Object from the Live-Engage Messaging Interaction API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversationId` | `string` | ID of the conversation which should be retrieved |
| `contentToRetrieve?` | [`ConversationContentTypes`](../enums/ConversationContentTypes.md)[] | Array which can be used to define which contents of the conversation should be retrieved. Use `const { ConversationContentTypes } = require("lp-faas-toolbelt");` to get an overview of possible options. |

#### Returns

`Promise`<[`IConversation`](#interface-iconversation)\>

___

### scanConversationForKeywords

▸ **scanConversationForKeywords**(`conversation`, `keywords`): [`IKeywordScannerResult`](#interface-ikeywordscannerresult)[]

Will scan a conversation Object for messages containing the provided keywords and collect them. Also it enriches them with additional information,
about when the message was sent, who it was sent by and because of which keyword it was selected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversation` | `any` | Conversation Object that has been retrieved with .getConversationById(conversationId). |
| `keywords` | `string`[] | Array of keywords which the conversation will be scanned for. |

#### Returns

[`IKeywordScannerResult`](#interface-ikeywordscannerresult)[]

___

## Related Interfaces / Enums

### Interface: IConversation

**Properties:**

- **\_metadata**: `object`
- **conversationHistoryRecords**: `any`[]
- `Optional` **ttlSecond**: `number`

### Interface: IKeywordScannerResult

**Properties:**

- **message**: `string`
- **sentBy**: `string`
- **sentTimestamp**: `number`
- **tag**: `string`

### Enumeration: LpServices

**Enumeration members:**

- **AGENT\_PARTICIPANTS** = `"agentParticipants"`
- **AGENT\_PARTICIPANTS\_ACTIVE** = `"agentParticipantsActive"`
- **AGENT\_PARTICIPANTS\_LEAVE** = `"agentParticipantsLeave"`
- **CAMPAIGN** = `"campaign"`
- **COBROWSE\_SESSIONS** = `"coBrowseSessions"`
- **CONSUMER\_PARTICIPANTS** = `"consumerParticipants"`
- **CONVERSATION\_SURVEYS** = `"conversationSurveys"`
- **DIALOGS** = `"dialogs"`
- **INFO** = `"info"`
- **INTENTS** = `"intents"`
- **INTERACTIONS** = `"interactions"`
- **LATEST\_AGENT\_SURVEY** = `"latestAgentSurvey"`
- **MESSAGE\_RECORDS** = `"messageRecords"`
- **MESSAGE\_SCORES** = `"messageScores"`
- **MESSAGE\_STATUSES** = `"messageStatuses"`
- **MONITORING** = `"monitoring"`
- **PREVIOUSLY\_SUBMITTED\_AGENT\_SURVEYS** = `"previouslySubmittedAgentSurveys"`
- **RESPONSE\_TIME** = `"responseTime"`
- **SDES** = `"sdes"`
- **SKILL\_CHANGES** = `"skillChanges"`
- **SUMMARY** = `"summary"`
- **TRANSFERS** = `"transfers"`
- **UNAUTH\_SDES** = `"unAuthSdes"`
- **UNIQUE\_INTENTS** = `"uniqueIntents"`
