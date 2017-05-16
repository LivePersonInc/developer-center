---
title: Start Chat
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 70
permalink: consumer-experience-server-chat-start-chat.html

---

Initiates a request to chat. If successful, a new chat session will be created, and the session will be placed in the queue until an agent accepts the chat. This URI returns a "session-URI" which uniquely identifies this session, and can be used for further interaction with the session.

*Note: The URI of the chat session is returned in the Location header. This URI is referred to as the chat-session-uri in the rest of the document.*

### Request

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/chat/request?v=1&NC=true |

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

**Body Parameters**

| Name	| Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| skill | Requests a chat with a specific skill. | alphanumeric | |
| ssoKey | Requests a Single Sign On chat. | alphanumeric | The SSO key is an encrypted set of custom variables. SSO  is an  account specific feature that is used by existing LivePerson customers. The account owner or LivePerson Account Manager will need to  be  involved in the implementation process.|
| serviceQueue | Requests a chat with a specific Service Queue. | alphanumeric | This parameter must be used together with the maxWaitTime parameter. |
| maxWaitTime | The maximum time in seconds that a visitor can wait before a chat starts. | numeric | This parameter must be between 0 and 86,400 seconds (24 hours). Use 0 for immediate availability. |
| agent | Requests a chat with a specific agent (agent login name). | alphanumeric | This parameter cannot be used with the skill, serviceQueue and maxWaitTime parameters. |
| visitorIp | Sets the visitor's IP address. | alphanumeric (IP) | The IP address can be used to identify a visitor if that visitor has been marked as "blocked". This can be viewed in the Agent Console's Info tab (IP). The visitor's host name is found using this IP address. If no IP address is specified, the visitor's IP will be taken from the request's IP.  |
| chatReferrer | Sets the location of where the chat button was clicked. | alphanumeric | Can have a URI format, but not mandatory. This is displayed in the Admin Console under Reporting & Analytics > Transcripts > select a transcript > Chat starting page (under General Chat Info). |
| userAgent | Sets the visitor's user agent.  | alphanumeric | If no user agent is specified, it will be taken from the HTTP "User-Agent" header. This can be viewed in the Agent Console's Info tab (Browser). |
| visitorId | A visitorId from a previous chat can be set in this parameter in order to link this chat to an existing visitor. | numeric | This will enable viewing chat history and visitor information from previous chats (of this visitor) in the Agent Console. Can be obtained using the Chat Information resource.  |
| preChatLines | A list of lines that are shown to the agent before the chat starts in a special color.  | XML/JSON object | These lines are not displayed to the visitor. |
| survey | Answers to a Pre-Chat survey. Answers and IDs must be according to the retrieved Pre-Chat survey. | XML/JSON object | |
| engagementId | The ID of the engagement.  | alphanumeric | |
| campaignId | The campaign ID to be used in this chat. | alphanumeric | |
| language | The language code of the auto messages to be used in this chat i.e. en-US. | alphanumeric | |

**Survey Body Parameters**

| Name	| Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| question | Contains answer elements for the survey's question with this ID || | 
| answer | Given answer for the container question. | alphanumeric | If the question is a multiselection type (CheckBox) it can contain more than one answer.|

Request Body Example

    {"request":{"skill":"Sales","interactionTimeout":40,"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36","LETagVisitorId":"rloXnVgEQ-iQuoOytvKNqA","LETagSessionId":"rN82d4rATN6EuiA4cJwaPg","LETagContextId":"2","engagementId":27469613,"campaignId":26948813,"language":"en-US"}}

*Notes:*

- *If the userAgent parameter is in the standard "User-Agent" header format, the relevant browser will be shown in the "Browser" parameter in the Agent Workspace.*
- *If the userAgent parameter is NOT in the standard header format, the userAgent parameter itself will be shown (unless its value includes a space character, in which case only the first word will be shown).*

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |
