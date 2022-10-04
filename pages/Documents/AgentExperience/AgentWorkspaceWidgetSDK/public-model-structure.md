---
pagename: Public Model Structure
redirect_from:
  - agent-workspace-sdk-public-model.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience"
documentname: Agent Workspace Widget SDK

order: 60
permalink: agent-workspace-widget-sdk-public-model-structure.html

indicator: both
---

**Notes:**

- *The structure of the Public Model is subject to change, and may vary in future versions. In addition, data you are attempting to get/bind to may not be present, and so it is not guaranteed that you will receive data.*
- *This overall structure was originally designed for real-time chat. However, the same structure has also been used in order to support existing widgets for messaging conversations.*

Structure example:

```json
{
    "chatInfo": {
        "rtSessionId": "",
        "accountId": "",
        "chatRequestedTime": 1,
        "chatStartTime": 1,
        "sessionStartTime": 1,
        "chatStartUrl": "",
        "spectatedEngagement": false,
        "chatSkill": ""
    },
    "chattingAgentInfo": {
        "agentName": "",
        "agentNickname": "",
        "agentGroupName": "",
        "agentId": 1
    },
    "agentInfo": {
        "accountId": "",
        "agentName": "",
        "agentNickname": "",
        "agentId": 1,
        "agentEmail": "",
        "employeeId": "",
        "maxChats": 1,
        "agentGroupName": ""
    },
    "chatTranscript": {
        "lines": []
    },
    "surveyQuestions": {
        "preChat": {
            "email": {
                "value": "",
                "displayName": ""
            },
            "phone": {
                 "value": "",
                 "displayName": ""
            },
            "name": {
                 "value": "",
                 "displayName": ""
            },
            "customizedQuestions": []
        },
        "postChat": [],
        "agentSurvey": []
    },
    "visitorInfo": {
        "visitorId": "",
        "visitorName": "",
        "visitorSso": false,
        "device": "",
        "browser": "",
        "operatingSystem": "",
        "country": "",
        "countryCode": "",
        "state": "",
        "city": "",
        "isp": "",
        "organization": "",
        "IpAddress": "",
        "visitStartTime": "",
        "chattingVisitorState": "",
        "chatRequestedTime": "",
        "chatStartUrl": "",
        "visitorTimezone": "",
        "visitorTyping": false
    },
    "campaignInfo": {
        "campaignName": "",
        "campaignId": "",
        "campaignDescription": "",
        "targetAudience": [],
        "goalName": "",
        "goalId": "",
        "goalDescription": ""
    },
    "engagementInfo": {
        "VisitorBehavior": [],
        "skill": "",
        "engagementType": "",
        "engagementId": "",
        "engagementName": "",
        "agentNote": "",
        "engagementSkill": ""
    },
    "visitorJourney": {
        "pages": [],
        "searchEngine": {
            "searchProvider": "",
            "searchKeywords": ""
        }
    },
    "SDE": {
        "customerDetails": [],
        "personalInfo": [],
        "marketingSource": [],
        "leadGeneration": [],
        "transaction": [],
        "viewedProducts": [],
        "shoppingCart": [],
        "serviceActivity": [],
        "error": []
    },
    "authenticatedData": {
        "customerDetails": [],
        "personalInfo": []
    },
    "claimsAndAuthType": {
        "claims": {},
        "acr": ""
    },
    "applicationInfo": {
        "theme": ""
    },
    "customVariables": [],
    "splitSession": {
        "customVariables": []
    }
}
```

| Property                                    |                                      Real-time Chat Description                                      |                                                       Messaging Conversation Description | Type    | Notes                                                      |
|:---------------------------------------------|:----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|---------|------------------------------------------------------------|
| **chatInfo**                                |                                    Information regarding the chat                                    |                                                   Information regarding the conversation | object  |                                                            |
| chatInfo.rtSessionId                        |                                  The real time session ID (chat ID)                                  |                                                                      The conversation ID | string  |                                                            |
| chatInfo.accountId                          | The account ID                                                                                       | The account ID                                                                           | string  |                                                            |
| chatInfo.chatRequestedTime                  | The time the chat was requested (the visitor clicked-to-chat)                                        | The time the conversation was started                                                    | number  |                                                            |
| chatInfo.chatStartTime                      | The time the chat started                                                                            | The time the conversation started                                                        | number  |                                                            |
| chatInfo.sessionStartTime                   | The time the session/visit started                                                                   | N/A                                                                                      | number  |                                                            |
| chatInfo.chatStartUrl                       | The URL of the page where the visitor clicked-to-chat                                                | N/A                                                                                      | string  |                                                            |
| chatInfo.spectatedEngagement                | True if the engagement is spectated (and the logged in agent is not the chatting agent)              | True if the engagement is spectated (and the logged in agent is not the assigned agent)  | Boolean |                                                            |
| chatInfo.isMessaging                        | False if a real-time chat                                                                            | True if a messaging conversation                                                         | Boolean |                                                            |
| chatInfo.chatSkill                          | The chat skill                                                                                       | The conversation skill                                                                   | string  |                                                            |
| **chattingAgentInfo**                       | Information about the chatting agent (may not be the agent which is currently logged in)             | Information about the assigned agent (may not be the agent which is currently logged in) | object  |                                                            |
| chattingAgentInfo.agentName                 | The name of the agent                                                                                | The name of the agent                                                                    | string  |                                                            |
| chattingAgentInfo.agentNickname             | N/A                                                                                                  | The nickname of the agent                                                                | string  |                                                            |
| chattingAgentInfo.agentGroupName            | N/A                                                                                                  | The name of the agent group                                                              | string  |                                                            |
| chattingAgentInfo.agentId                   | The ID of the agent                                                                                  | The ID of the agent                                                                      | number  |                                                            |
| **agentInfo**                               | Information about the agent which is currently logged in (may not be the chatting agent)             | Information about the agent which is currently logged in (may not be the assigned agent) | object  |                                                            |
| agentInfo.accountId                         | The account ID                                                                                       | The account ID                                                                           | string  |                                                            |
| agentInfo.agentName                         | The name of the agent                                                                                | The name of the agent                                                                    | string  |                                                            |
| agentInfo.agentNickname                     | N/A                                                                                                  | The nickname of the agent                                                                | string  |                                                            |
| agentInfo.agentId                           | The ID of the agent                                                                                  | The ID of the agent                                                                      | number  |                                                            |
| agentInfo.agentEmail                        | The email of the agent                                                                               | The email of the agent                                                                   | string  |                                                            |
| agentInfo.employeeId                        | N/A                                                                                                  | The ID of the employee                                                                   | string  |                                                            |
| agentInfo.maxChats                          | The maximum number of chats the agent can be in                                                      | The maximum number of (real-time) chats the agent can be in                              | number  |                                                            |
| agentInfo.agentGroupName                    | N/A                                                                                                  | The name of the agent group                                                              | string  |                                                            |
| chatTranscript.lines                        | Array of chat lines                                                                                  | Array of chat lines                                                                      | array   |                                                            |
| **surveyQuestions**                         | All the survey questions divided by survey type                                                      | Profile information about the consumer                                                   | object  |                                                            |
| surveyQuestions.preChat                     | All the pre-chat survey questions, with separated special questions                                  | Profile information about the consumer                                                   | object  |                                                            |
| surveyQuestions.preChat.email               | The email pre-chat survey question object                                                            | Contains the email address of the consumer                                               | object  |                                                            |
| surveyQuestions.preChat.email.value         | The email of the visitor, as entered in the pre-chat survey                                          | Email address of the consumer                                                            | string  |                                                            |
| surveyQuestions.preChat.email.displayName   | The pre-chat survey question asking for the email                                                    | N/A                                                                                      | string  |                                                            |
| surveyQuestions.preChat.phone               | The phone pre-chat survey question object                                                            | Contains the consumer ID                                                                 | object  | Messaging: May be a phone number                           |
| surveyQuestions.preChat.phone.value         | The phone number of the visitor, as entered in the pre-chat survey                                   | The consumer ID                                                                          | string  | Messaging: May be a phone number                           |
| surveyQuestions.preChat.phone.displayName   | The pre-chat survey question asking for the phone number                                             | N/A                                                                                      | string  |                                                            |
| surveyQuestions.preChat.name                | The name pre-chat survey question object                                                             | Contains the consumer name                                                               | object  |                                                            |
| surveyQuestions.preChat.name.value          | The name of the visitor, as entered in the pre-chat survey                                           | The consumer name                                                                        | string  |                                                            |
| surveyQuestions.preChat.name.displayName    | The pre-chat survey question asking for the name                                                     | N/A                                                                                      | string  |                                                            |
| surveyQuestions.preChat.customizedQuestions | Array of pre-chat survey questions containing 'displayName' (the question) and 'value' (the answer)  | N/A                                                                                      | array   |                                                            |
| surveyQuestions.postChat                    | Array of post-chat survey questions containing 'displayName' (the question) and 'value' (the answer) | N/A                                                                                      | array   |                                                            |
| surveyQuestions.agentSurvey                 | Array of agent survey questions containing 'displayName' (the question) and 'value' (the answer)     | N/A                                                                                      | array   |                                                            |
| **visitorInfo**                             | Information regarding the visitor                                                                    | Information regarding the consumer                                                       | object  |                                                            |
| visitorInfo.visitorId                       | The ID of the visitor                                                                                | The ID of the consumer                                                                   | string  |                                                            |
| visitorInfo.visitorName                     | The visitor name                                                                                     | The consumer name                                                                        | string  |                                                            |
| visitorInfo.visitorSso                      | Indicates if the visitor used a single sign on.                                                      | N/A                                                                                      | Boolean | Chat: Legacy accounts only.                                |
| visitorInfo.device                          | The device used by the visitor                                                                       | The device used by the consumer                                                          | string  | Valid values: 'DESKTOP', 'TABLET', 'MOBILE'.               |
| visitorInfo.browser                         | The browser used by the visitor                                                                      | The browser used by the consumer                                                         | string  | Messaging: Not always available                            |
| visitorInfo.operatingSystem                 | The operating system used by the visitor                                                             | The operating system used by the consumer                                                | string  | Messaging: Not always available                            |
| visitorInfo.country                         | The country of the visitor                                                                           | N/A                                                                                      | string  |                                                            |
| visitorInfo.countryCode                     | The country Code of the visitor                                                                      | N/A                                                                                      | string  | The value is 2 letter code in ISO3166-1 Alpha-2. **Supported only in the New Agent Workspace.**            |
| visitorInfo.state                           | The geographic state of the visitor                                                                  | N/A                                                                                      | string  |                                                            |
| visitorInfo.city                            | The city of the visitor                                                                              | N/A                                                                                      | string  |                                                            |
| visitorInfo.isp                             | The internet service provider of the visitor                                                         | N/A                                                                                      | string  |                                                            |
| visitorInfo.organization                    | The organization of the visitor                                                                      | N/A                                                                                      | string  |                                                            |
| visitorInfo.IpAddress                       | The IP address of the visitor                                                                        | N/A                                                                                      | string  |                                                            |
| visitorInfo.visitStartTime                  | The time the visitor entered the site                                                                | The time the consumer started the conversation                                           | string  |                                                            |
| visitorInfo.chattingVisitorState            | The chat state of the visitor                                                                        | The chat state of the consumer                                                           | string  | Valid values: 'CHATTING', 'ENDED'                          |
| visitorInfo.visitorTimezone                 | The timezone of the visitor                                                                          | N/A                                                                                      | string  |                                                            |
| visitorInfo.visitorTyping                   | Indicates if the visitor is typing                                                                   | N/A                                                                                      | Boolean |                                                            |
| **campaignInfo**                            | Information regarding the campaign                                                                   | N/A                                                                                      | object  |                                                            |
| campaignInfo.campaignName                   | The campaign name                                                                                    | The campaign name                                                                        | string  |                                                            |
| campaignInfo.campaignId                     | The campaign ID                                                                                      | The campaign ID                                                                          | string  |                                                            |
| campaignInfo.campaignDescription            | The campaign description                                                                             | The campaign description                                                                 | string  |                                                            |
| campaignInfo.targetAudience                 | The target audience (visitor profile)                                                                | The target audience (visitor profile)                                                    | array   |                                                            |
| campaignInfo.goalName                       | The goal name                                                                                        | The goal name                                                                            | string  |                                                            |
| campaignInfo.goalId                         | The goal ID                                                                                          | The goal ID                                                                              | string  |                                                            |
| campaignInfo.goalDescription                | The goal description                                                                                 | The goal description                                                                     | string  |                                                            |
| **engagementInfo**                          | Information regarding the campaign engagement (The click to chat button)                             | N/A                                                                                      | object  |                                                            |
| engagementInfo.VisitorBehavior              | Array of the behavioral targeting rules                                                              | Array of the behavioral targeting rules                                                  | array   |                                                            |
| engagementInfo.skill                        | The chat skill                                                                                       | The conversation skill                                                                   | string  |                                                            |
| engagementInfo.engagementType               | The engagement type                                                                                  | The engagement type                                                                      | string  |                                                            |
| engagementInfo.engagementId                 | The engagement ID                                                                                    | The engagement ID                                                                        | string  |                                                            |
| engagementInfo.engagementName               | The engagement name                                                                                  | The engagement name                                                                      | string  |                                                            |
| engagementInfo.agentNote                    | The agent note                                                                                       | The agent note                                                                           | string  |                                                            |
| engagementInfo.engagementSkill              | the engagement skill                                                                                 | the engagement skill                                                                     | string  |                                                            |
| **visitorJourney**                          | Information regarding the visitor's journey in the site                                              | N/A                                                                                      | object  |                                                            |
| visitorJourney.pages                        | Array of pages the visitor was in                                                                    | N/A                                                                                      | array   |                                                            |
| visitorJourney.searchEngine                 | Information regarding the search that led the visitor to the chat                                    | N/A                                                                                      | object  |                                                            |
| visitorJourney.searchEngine.searchProvider  | The search provider                                                                                  | N/A                                                                                      | string  |                                                            |
| visitorJourney.searchEngine.searchKeywords  | The search keywords                                                                                  | N/A                                                                                      | string  |                                                            |
| **SDE**                                     | Object containing SDEs (Engagement attributes) of the visitor                                        | N/A                                                                                      | object  |                                                            |
| SDE.customerDetails                         | Array of customer details                                                                            | Array of customer details                                                                | array   |                                                            |
| SDE.personalInfo                            | Array of personal information                                                                        | Array of personal information                                                            | array   |                                                            |
| SDE.marketingSource                         | Array of marketing information                                                                       | Array of marketing information                                                           | array   |                                                            |
| SDE.leadGeneration                          | Array of lead generation information                                                                 | Array of lead generation information                                                     | array   |                                                            |
| SDE.transaction                             | Array of transactions                                                                                | Array of transactions                                                                    | array   |                                                            |
| SDE.viewedProducts                          | Array of viewed products                                                                             | Array of viewed products                                                                 | array   |                                                            |
| SDE.shoppingCart                            | Array of shopping cart updates                                                                       | Array of shopping cart updates                                                           | array   |                                                            |
| SDE.serviceActivity                         | Array of service activity information                                                                | Array of service activity information                                                    | array   |                                                            |
| SDE.error                                   | Array of visitor errors                                                                              | Array of visitor errors                                                                  | array   |                                                            |
| **authenticatedData**                       | Object containing SDEs (Engagement Attributes) received from authenticated visitors                  | Object containing SDEs (Engagement Attributes) received from authenticated consumers     | object  | deprecated — use 'claimsAndAuthType' instead             |
| authenticatedData.customerDetails           | customer details                                                                                     | customer details                                                                         | object  | deprecated — use 'claimsAndAuthType.claims' instead                                            |
| authenticatedData.personalInfo              | personal information                                                                                 | personal information                                                                     | object  | deprecated — use 'claimsAndAuthType.claims' instead                                            |
| **claimsAndAuthType**                       | Object containing SDEs passed by the IDP on the JWT and authentication type                         | Object containing SDEs passed by the IDP on the JWT and authentication type              | object  |                                                              |
| claimsAndAuthType.claims                    | Object containing SDEs passed by the IDP on the JWT                                                 | Object containing SDEs passed by the IDP on the JWT                                      | object  | deprecates the "authenticatedData" key                |
| claimsAndAuthType.acr                       | The authentication type ("0" — unauthenticated, "loa1" — authenticated)                             | the authentication type ("0" — unauthenticated, "loa1" — authenticated)                  | object  |                                                              |
| **customVariables**                         | Array of custom variables                                                                            | N/A                                                                                      | array   |                                                            |
| **splitSession**                            | Information from the previous split session                                                          | N/A                                                                                      | object  |                                                            |
| splitSession.customVariables                | Array of custom variables from previous split session                                                | N/A                                                                                      | array   |                                                            |
| **applicationInfo**                          | N/A                                              | Information regarding the agent workspace application in the site                                                                                      | object  |                                                            |
| applicationInfo.theme                          | N/A                                              | the theme of the application                                                                                      | string  |                                                            |

Some of the public model data specified above returns an object or an array of objects. Below is the structure of these objects/arrays that can be returned.

### chatTranscript.lines

| Property        | Description                                                                                         | Type   | Notes                                            |
|-----------------|-----------------------------------------------------------------------------------------------------|--------|--------------------------------------------------|
| id              | The serial ID of the chat line                                                                      | string |                                                  |
| type            | Should always be 'line'                                                                             | string |                                                  |
| by              | The name of the visitor/agent who sent the line.                                                    | string | Can also be 'info'                               |
| source          | Is the chat line from 'visitor' or 'agent' or 'system' string                                       |        |                                                  |
| subType         | Should always be 'REGULAR'.                                                                         | string | May include other types of content in the future |
| systemMessageId | If it's a system message, this is the ID of the system message. If not, this property doesn't exist | number |                                                  |
| text            | Contains the text/html content of the chat line                                                     | string |                                                  |
| textType        | Can be 'plain' for plain text or 'html' for html content.                                           | string | All agent lines are html content.                |
| time            | String representation of the time the line was added                                                | string |                                                  |
| [clientProperties](agent-workspace-sdk-public-model.html#clientproperties)| Object containing client properties                                                                 | object |                                                  |

Structure example:

```json
{
    "id": "",
    "type": "line",
    "by": "",
    "source": "visitor",
    "subType": "REGULAR",
    "systemMessageId": 1,
    "text": "",
    "textType": "html",
    "time": "",
    "clientProperties": {
        "appId": "LivePerson.SDK-Maker",
        "appVersion": "",
        "browser": "",
        "browserVersion": "",
        "deviceFamily": "TABLET",
        "deviceModel": "iPad4,1",
        "deviceManufacture": "",
        "integration": "MOBILE_SDK",
        "integrationVersion": "2.3.0.3",
        "ipAddress": "192.168.226.81",
        "os": "IOS",
        "osName": "IOS",
        "osVersion": "10.2.1",
        "timeZone": "US/Pacific",
        "features": {
            "CO_BROWSE": "",
            "CO_APP": "",
            "PHOTO_SHARING": "",
            "SECURE_FORMS": "",
            "AUTO_MESSAGES": "",
            "RICH_CONTENT": ""
        }
    }
}
```

*Note: Unlike other arrays/objects, binding to the chat transcript lines will give you updates which only include the recently added lines, not the entire array with all the lines from the beginning.*

### metadata.connectorAuthResponse

<table>
  <thead>
    <th>Property</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>encrypted</td>
    <td>True if you have provided the responseEncryptionKey, False if you have not</td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>status</td>
    <td>Status of the consumer authentication — can be only true (successful) or false (failed) </td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>token</td>
    <td>Token string — will be available only when authentication was successful </td>
    <td>String</td>
  </tr>
  <tr>
    <td>requestIdentifier</td>
    <td>Matches the authentication request that you sent.</td>
    <td>String</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Type of authentication error as received from Apple — will be available only when authentication failed </td>
    <td>Array</td>
  </tr>
  </tbody>
</table>

Structure example:

```json
{
    "encrypted"         : true,
    "status"            : true,
    "token"             : "token encrypted string",
    "requestIdentifier" : "Request Identifier Unique Key",
    "errors"            : [{
        "message" : "Optional Error Message"
    }]
}
```

### metadata.connectorPaymentResponse

<table>
  <thead>
    <th>Property</th>
    <th>Description</th>
    <th>Type</th>
  </thead>
  <tbody>
  <tr>
    <td>status</td>
    <td>Status of the consumer payment — can be only true (successful) or false (failed) </td>
    <td>Boolean </td>
  </tr>
  <tr>
    <td>requestIdentifier</td>
    <td>Matches the payment request that you sent.</td>
    <td>String</td>
  </tr>
  <tr>
    <td>errors</td>
    <td>Type of authentication error as received from Apple — will be available only when payment failed </td>
    <td>Array</td>
  </tr>
  </tbody>
</table>

Structure example:

```json
{
    "type" : "ConnectorPaymentResponse",
    "requestIdentifier" : "Request Identifier Unique Key",
    "status": true,
    "errors" : [{
      "message": "Optional Error Message"
    }]
}
```

### surveyQuestions.preChat.customizedQuestions, surveyQuestions.postChat, surveyQuestions.agentSurvey, customVariables, splitSession.customVariables

| Property    | Description                                                                        | Type   | Notes                                                                                                                       |
|-------------|------------------------------------------------------------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------|
| @scope      | The scope of the survey question/custom variable                                   | string | Can have values such as 'session' or 'visitor'                                                                              |
| @source     | The source of the survey question/custom variable                                  | string | Can have values such as 'prechat', 'chat window', 'rule engine'                                                             |
| name        | The internal name of the survey question/custom variable                           | string | Used by the server as an ID                                                                                                 |
| displayName | The display name                                                                   | string | Usually identical to the name, but can be a 'prettier' version for display purposes. For surveys, this is the question text |
| time        | String representation of the time the survey question or custom variable was added | string |                                                                                                                             |
| value       | The answer to the survey question or the value of the custom variable              | string |                                                                                                                             |

Structure example:

```json
{
    "@scope": "session",
    "@source": "rule engine",
    "name": "",
    "displayName": "",
    "time": "",
    "value": ""
}
```

### campaignInfo.targetAudience

| Property    | Description                                              | Type   |
|-------------|----------------------------------------------------------|--------|
| id          | The ID of the target audience (visitor profile)          | number |
| name        | The name of the target audience (visitor profile)        | string |
| description | The description of the target audience (visitor profile) | string |

Structure example:

```json
{
    "id": 1,
    "name": "",
    "description": ""
}
```

### campaignInfo.VisitorBehavior

| Property    | Description                             | Type   |
|-------------|-----------------------------------------|--------|
| id          | The ID of the behavioral targeting rule   | number |
| name        | The name of the behavioral targeting rule      | string |
| description | The description of the behavioral targeting rule | string |

Structure example:

```json
{
    "id": 1,
    "name": "",
    "description": ""
}
```

### visitorJourney.pages

| Property                    | Description                                            | Type    | Notes       |
|-----------------------------|--------------------------------------------------------|---------|-------------|
| id                          | The ID of the page                                     | string  |             |
| pageBasic                   | The basic page information                             | object  |             |
| pageBasic.referrer          | The URL of the referrer                                | string  | Can be null |
| pageBasic.sections          | The page sections                                      | string  | Can be null |
| pageBasic.startTime         | The start time in standard milliseconds                | number  |             |
| pageBasic.title             | The title of the page                                  | string  |             |
| pageBasic.url               | The URL of the page                                    | string  |             |
| pageLoaded                  | True if the page has finished loading                  | Boolean |             |
| pageTitle                   | The title of the page                                  | string  |             |
| referrer                    | The URL of the referrer                                | string  | Can be null |
| revActiveOSLs               | Active on site locations                               | object  |             |
| revActiveOSLs.1234          | The property name is the ID of the on site location    | object  |             |
| revActiveOSLs.1234.revision | The revision of the on site location                   | number  |             |
| startTime                   | The start time in standard milliseconds                | number  |             |
| timeOnPage                  | The time (in seconds) the visitor has been on the page | number  |             |
| url                         | The URL of the page                                    | string  |             |

Structure example:

```json
{
    "id": "",
    "pageBasic": {
        "referrer": "",
        "sections": "",
        "startTime": 1,
        "title": "",
        "url": ""
    },
    "pageLoaded": true,
    "pageTitle": "",
    "referrer": "",
    "revActiveOSLs": {
        "1234": {
            "revision": 1
        }
    },
    "startTime": 1,
    "timeOnPage": 1,
    "url": ""
}
```

*Note: Some of the parameters are duplicated within the 'pageBasic' object.*

### SDE.customerDetails, authenticatedData.customerDetails, claimsAndAuthType.customerDetails

| Property         | Description                                           | Type   |
|------------------|-------------------------------------------------------|--------|
| accountName      | The name of the company or account                    | string |
| balance          | The current balance of the customer                   | string |
| companySize      | The number of employees                               | number |
| companyBranch    | The company's branch                                  | string |
| customerId       | The customer ID                                       | string |
| imei             | Unique phone identifier                               | string |
| lastPaymentDate  | The customer's last payment date                      | string |
| registrationDate | The customer's registration date                      | string |
| role             | Role title of the consumer in his brand               | string |
| socialId         | The social ID of your choice: Facebook, Twitter, etc. | string |
| status           | Customer status                                       | string |
| type             | Customer type                                         | string |
| userName         | Nickname or username of the consumer                  | string |

Structure example:

```json
{
    "accountName": "",
    "balance": "",
    "companySize": 1,
    "companyBranch": "",
    "customerId": "",
    "imei": "",
    "lastPaymentDate": "",
    "registrationDate": "",
    "role": "",
    "socialId": "",
    "status": "",
    "type": "",
    "userName": ""
}
```

### SDE.personalInfo, authenticatedData.personalInfo, claimsAndAuthType.personalInfo

| Property         | Description                                           | Type   |
|------------------|-------------------------------------------------------|--------|
| age              | The age of the customer                               | number |
| birthday         | The customer's date of birth                          | string |
| company          | The compamy the customer belongs to                   | string |
| contactInfo      | The contact info of the customer                      | array  |
| gender           | The gender of the customer                            | string |
| language         | The language the customer speaks                      | string |
| name             | The name of the customer                              | string |
| firstname        | The first name of the customer                        | string |
| lastname         | The last name of the customer                         | string |

Structure example:

```json
{
    "age": 1,
    "birthday": "",
    "company": "",
    "contactInfo": [],
    "gender": "",
    "language": "",
    "name": "",
    "firstname": "",
    "lastname": ""
}
```

### SDE.personalInfo.contactInfo, authenticatedData.personalInfo.contactInfo, claimsAndAuthType.personalInfo.contactInfo

| Property | Description                      | Type   |
|----------|----------------------------------|--------|
| email    | The email of the customer        | string |
| phone    | The phone number of the customer | string |

Structure example:

```json
{
    "email": "",
    "phone": ""
}
```

*Note: This is an array in order that that the customer can provide home contact info, work contact info, and other contact info.*

### claimsAndAuthType in unauthenticated case

| Property   | Description            | Type   |
|------------|------------------------|--------|
| customerId | The customer id        | string |

Structure example:

```json
{
  "claims": {
    "sub": "",
    "iss": "",
    "lp_sdes": [
      {
        "type": "ctmrinfo",
        "info": {
          "customerId": ""
        }
      },
      {
        "type": "personal",
        "personal": {}
      }
    ]
  },
  "acr": "0"
}
```

*note: This enables to send customer id even for unauthenticated user.*

### SDE.marketingSource

| Property           | Description                       | Type   |
|--------------------|-----------------------------------|--------|
| originatingChannel | The channel of the marketing data | string |
| affiliate          | The affiliate                     | string |
| campaignId         | The campaign ID                   | string |

Structure example:

```json
{
    "originatingChannel": "",
    "affiliate": "",
    "campaignId": ""
}
```

### SDE.leadGeneration

| Property | Description           | Required | Type   |
|----------|-----------------------|----------|--------|
| leadId   | The ID of the lead    | optional | string |
| topic    | The topic of the lead | optional | string |
| value    | The value of the lead | optional | string |

Structure example:

```json
{
    "leadId": "",
    "topic": "",
    "value": ""
}
```

### SDE.transaction

| Property | Description                                     | Type   |
|----------|-------------------------------------------------|--------|
| total    | The total value of the transaction              | string |
| orderId  | The order ID                                    | string |
| products | Array of products, as in the viewedProducts SDE | array  |
| numItems | The number of items in the purchase             | number |

Structure example:

```json
{
    "total": "",
    "orderId": "",
    "products": [],
    "numItems": 1
}
```

**Note:** There's currently a known issue with numItems. This key currently displays as null regardless of the number you pass it.

### SDE.shoppingCart

| Property  | Description                                     | Type   |
|-----------|-------------------------------------------------|--------|
| cartTotal | The total value of the cart                     | string |
| numItems  | The number of items in the cart                 | number |
| products  | Array of products, as in the viewedProducts SDE | array  |

Structure example:

```json
{
    "cartTotal": "",
    "numItems": 1,
    "products": []
}
```

### SDE.viewedProducts, SDE.transaction.[].products, SDE.shoppingCart.[].products

| Property | Description                                      | Type   |
|----------|--------------------------------------------------|--------|
| name     | The product name                                 | string |
| category | The product category                             | string |
| sku      | The product SKU                                  | string |
| price    | The price of the product                         | string |
| quantity | Where applicable — the number of identical items | number |
| statusInStock | Where applicable — the stock status of the product | string |
| quantityInStock | Where applicable — available quantity of products | string |

Structure example:

```json
{
    "name": "",
    "category": "",
    "sku": "",
    "price": "",
    "quantity": 1,
    "statusInStock": "low in stock",
    "quantityInStock": 5
}
```
**Note:** SDE.viewedProducts does not contain the quantity field.

**Note:** SDE.transaction.[].products and SDE.shoppingCart.[].products do not contain statusInStock and quantityInStock fields.

### SDE.serviceActivity

| Property | Description                          | Type   |
|----------|--------------------------------------|--------|
| category | The category of the service activity | string |
| id       | The ID of the service activity       | string |
| status   | The status of the service activity   | string |
| topic    | The topic of the service activity    | string |

Structure example:

```json
{
    "category": "",
    "id": "",
    "status": "",
    "topic": ""
}
```

### SDE.error

| Property       | Description                                      | Type    |
|----------------|--------------------------------------------------|---------|
| contextId      | The context ID                                   | string  |
| contextIdTooltip| (deprecated)                                   | string  |
| message        | The error message                                | string  |
| messageTooltip | The error message tooltip (for display purposes)(deprecated) | string  |
| code           | The error code                                   | string  |
| codeTooltip    | The error code tooltip (for display purposes)(deprecated)   | string  |
| level          | The error level                                  | number  |
| levelTooltip          | (deprecated)                                  | number  |
| resolved       | Is the error resolved                            | Boolean |
| resolvedTooltip| (deprecated)                            | string |

Structure example:

```json
{
    "contextId": "",
    "contextIdTooltip": "",
    "message": "",
    "messageTooltip": "",
    "code": "",
    "codeTooltip": "",
    "level": 1,
    "levelTooltip": "",
    "resolved": true,
    "resolvedTooltip": ""
}
```

### SDE.searchContent

| Property       | Description                                      | Type    |
|----------------|--------------------------------------------------|---------|
| keywords       | The search keywords                              | array   |

### SDE.searchContent.keywords

| Property | Description                      | Type   |
|----------|----------------------------------|--------|
| value    | The searched query value         | string |

Structure example:

```json
{
    "keywords": [
        { "value": "Hello world!" },
        { "value": "Hello again!" }
    ]
}
```

### clientProperties

| Property       | Description                                      | Type    |
|----------------|--------------------------------------------------|---------|
| appId          | String representation of the Identification of the application        | string  |
| appVersion     | The application version, for example in case of mobile it will be the host app version | string  |
| browser        | String represent the browser. For example: chrome, firefox, etc…    | string  |
| browserVersion | Detailed version info of the user agent (browser or host-application) | string  |
| deviceFamily   | For example: personal_computer/tablet/mobile_phone                    | string  |
| deviceModel    | For example for G3 for LG, iPhone6s for Apple…                      | string  |
| deviceManufacture| For example LG, HP, Microsoft…                                    | string  |
| integration    | For example: web_sdk, mobile_sdk, and brand_sdk                       | string  |
| integrationVersion| String representation of the integration version                   | string  |
| ipAddress      | String representation of the ip address                               | string  |
| os             | String representation of the OS. Contains the operating system, including version info | string  |
| osName         | OS name is a text describing the operating system                     | string  |
| osVersion      | Specifies the operating system version, and distribution type (if relevant) | string  |
| timeZone       | String representation of the timeZone. For example: "America/Los_Angeles  | string  |
| features       | Strings representation of the features the user have got.             | string  |