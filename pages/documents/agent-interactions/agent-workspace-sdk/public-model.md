---
title: Public Model Structure
Keywords:
level1: Documents
level2: Agent Interactions
level3: Agent Workspace Widget SDK

order: 60
permalink: agent-workspace-sdk-public-model.html

indicator: both
---

**Notes**: 

- *The structure of the Public Model is subject to change, and may vary in future versions. In addition, data you are attempting to get/bind to may not be present, and so it is not guaranteed that you will receive data.*
- *This overall structure was originally designed for real-time chat. However, the same structure has also been used in order to support existing widgets for messaging conversations.*

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
| chatInfo.chatSkill                          | The chat skill                                                                                       | The conversation skill                                                                           | string  |                                                            |
| **chattingAgentInfo**                       | Information about the chatting agent (may not be the agent which is currently logged in)             | Information about the assigned agent (may not be the agent which is currently logged in) | object  |                                                            |
| chattingAgentInfo.agentName                 | The name of the agent                                                                                | The name of the agent                                                                    | string  |                                                            |
| chattingAgentInfo.agentGroupName            | The name of the agent group                                                                          | The name of the agent group                                                              | string  |                                                            |
| chattingAgentInfo.agentId                   | The ID of the agent                                                                                  | The ID of the agent                                                                      | number  |                                                            |
| chattingAgentInfo.agentNickname             | The nickname of the agent                                                                            | The nickname of the agent                                                                | string  |                                                            |
| **agentInfo**                               | Information about the agent which is currently logged in (may not be the chatting agent)             | Information about the agent which is currently logged in (may not be the assigned agent) | object  |                                                            |
| agentInfo.accountId                         | The account ID                                                                                       | The account ID                                                                           | string  |                                                            |
| agentInfo.agentName                         | The name of the agent                                                                                | The name of the agent                                                                    | string  |                                                            |
| agentInfo.agentId                           | The ID of the agent                                                                                  | The ID of the agent                                                                      | number  |                                                            |
| agentInfo.agentNickname                     | The nickname of the agent                                                                            | The nickname of the agent                                                                | string  |                                                            |
| agentInfo.agentEmail                        | The email of the agent                                                                               | The email of the agent                                                                   | string  |                                                            |
| agentInfo.maxChats                          | The maximum number of chats the agent can be in                                                      | The maximum number of (real-time) chats the agent can be in                              | number  |                                                            |
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
| **engagementInfo**                          | Information regarding the campaign engagement (The click to chat button)                             | Information regarding the campaign engagement (The click to chat button)                                                                                    | object  |                                                            |
| engagementInfo.VisitorBehavior              | Array of the visitor behavior                                                                        | Array of the visitor behavior                                                            | array   |                                                            |
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
| **SDE**                                     | Object containing SDEs (Engagement attributes) of the visitor                                        | N/A                                                                                      | object  | Messaging: Currently only authenticated SDEs are supported |
| SDE.customerDetails                         | Array of customer details                                                                            | N/A                                                                                      | array   |                                                            |
| SDE.personalInfo                            | Array of personal information                                                                        | N/A                                                                                      | array   |                                                            |
| SDE.marketingSource                         | Array of marketing information                                                                       | N/A                                                                                      | array   |                                                            |
| SDE.leadGeneration                          | Array of lead generation information                                                                 | N/A                                                                                      | array   |                                                            |
| SDE.transaction                             | Array of transactions                                                                                | N/A                                                                                      | array   |                                                            |
| SDE.viewedProducts                          | Array of viewed products                                                                             | N/A                                                                                      | array   |                                                            |
| SDE.shoppingCart                            | Array of shopping cart updates                                                                       | N/A                                                                                      | array   |                                                            |
| SDE.serviceActivity                         | Array of service activity information                                                                | N/A                                                                                      | array   |                                                            |
| SDE.error                                   | Array of visitor errors                                                                              | N/A                                                                                      | array   |                                                            |
| **authenticatedData**                       | Object containing SDEs (Engagement Attributes) received from authenticated visitors                  | Object containing SDEs (Engagement Attributes) received from authenticated consumers     | object  |                                                            |
| authenticatedData.customerDetails           | Array of customer details                                                                            | Array of customer details                                                                | array   |                                                            |
| authenticatedData.personalInfo              | Array of personal information Array of personal information array                                    |                                                                                          |         |                                                            |
| **customVariables**                         | Array of custom variables                                                                            | N/A                                                                                      | array   |                                                            |
| **splitSession**                            | Information from the previous split session                                                          | N/A                                                                                      | object  |                                                            |
| splitSession.customVariables                | Array of custom variables from previous split session                                                | N/A                                                                                      | array   |                                                            |

Structure example:

```javascript
{
    chatInfo: {
        rtSessionId: '',
        accountId: '',
        chatRequestedTime: 1,
        chatStartTime: 1,
        sessionStartTime: 1,
        chatStartUrl: '',
        spectatedEngagement: false,
        chatSkill: ''
    },
    chattingAgentInfo: {
        agentName: '',
        agentGroupName: '',
        agentId: 1,
        agentNickname: ''
    },
    agentInfo: {
        accountId: '',
        agentName: '',
        agentId: 1,
        agentNickname: '',
        agentEmail: '',
        maxChats: 1,
    }
    chatTranscript: {
        lines: []
    },
    surveyQuestions: {
        preChat: {
            email: {
                value: '',
                displayName: ''
            },
            phone: {
                 value: '',
                 displayName: ''
            },
            name: {
                 value: '',
                 displayName: ''
            },
            customizedQuestions: []
        },
        postChat: []
        agentSurvey: []
    },
    visitorInfo: {
        visitorId: '',
        visitorName: '',
        visitorSso: false,
        device: '',
        browser: '',
        operatingSystem: '',
        country: '',
        state: '',
        city: '',
        isp: '',
        organization: '',
        IpAddress: '',
        visitStartTime: '',
        chattingVisitorState: '',
        chatRequestedTime: '',
        chatStartUrl: '',
        visitorTimezone: '',
        visitorTyping: false
    },
    campaignInfo: {
        campaignName: '',
        campaignId: '',
        campaignDescription: '',
        targetAudience: [],
        goalName: '',
        goalId: '',
        goalDescription: ''
    },
    engagementInfo: {
        VisitorBehavior: [],
        skill: '',
        engagementType: '',
        engagementId: '',
        engagementName: '',
        agentNote: '',
        engagementSkill: ''
    },
    visitorJourney: {
        pages: [],
        searchEngine: {
            searchProvider: '',
            searchKeywords: ''
        }
    },
    SDE: {
        customerDetails: [],
        personalInfo: [],
        marketingSource: [],
        leadGeneration: [],
        transaction: [],
        viewedProducts: [],
        shoppingCart: [],
        serviceActivity: [],
        error: []
    },
    authenticatedData: {
        customerDetails: [],
        personalInfo: [],
    },
    customVariables: [],
    splitSession: {
        customVariables: []
    }
}
```

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



```javascript
{
    id: '',
    type: 'line',
    by: '',
    source: 'visitor',
    subType: 'REGULAR',
    systemMessageId: 1,
    text: '',
    textType: 'html',
    time: '',
    clientProperties: {
        appId: "LivePerson.SDK-Maker",
        appVersion: "",
        browser: "",
        browserVersion: "",
        deviceFamily: "TABLET",
        deviceModel: "iPad4,1",
        deviceManufacture: "",
        integration: "MOBILE_SDK",
        integrationVersion: "2.3.0.3",
        ipAddress: "192.168.226.81",
        os: "IOS",
        osName: "IOS",
        osVersion: "10.2.1",
        timeZone: "US/Pacific",
        features: {
            "CO_BROWSE",
            "CO_APP",
            "PHOTO_SHARING",
            "SECURE_FORMS",
            "AUTO_MESSAGES",
            "RICH_CONTENT"
        }
    }
}
```

*Note: Unlike other arrays/objects, binding to the chat transcript lines will give you updates which only include the recently added lines, not the entire array with all the lines from the beginning.*

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

```javascript
{
    @scope: 'session',
    @source: 'rule engine',
    name: '',
    displayName: '',
    time: '',
    value: ''
}
```

### campaignInfo.targetAudience

| Property    | Description                                              | Type   |
|-------------|----------------------------------------------------------|--------|
| id          | The ID of the target audience (visitor profile)          | number |
| name        | The name of the target audience (visitor profile)        | string |
| description | The description of the target audience (visitor profile) | string |

Structure example: 

```javascript
{
    id: 1,
    name: '',
    description: ''
}
```

### campaignInfo.VisitorBehavior

| Property    | Description                             | Type   |
|-------------|-----------------------------------------|--------|
| id          | The ID of the target visitor behavior   | number |
| name        | The name of the visitor behavior        | string |
| description | The description of the visitor behavior | string |

Structure example:

```javascript
{
    id: 1,
    name: '',
    description: ''
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

```javascript
{
    id: '',
    pageBasic: {
        referrer: '',
        sections: '',
        startTime: 1,
        title: '',
        url: ''
    },
    pageLoaded: true,
    pageTitle: '',
    referrer: '',
    revActiveOSLs: {
        1234: {
            revision: 1
        }
    },
    startTime: 1,
    timeOnPage: 1,
    url: ''
}
```

*Note: Some of the parameters are duplicated within the 'pageBasic' object.*

### SDE.customerDetails, authenticatedData.customerDetails

| Property         | Description                                           | Type   |
|------------------|-------------------------------------------------------|--------|
| accountName      | The name of the company or account                    | string |
| balance          | The current balance of the customer                   | string |
| companySize      | The number of employees                               | number |
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

```javascript
{
    accountName: '',
    balance: '',
    companySize: 1,
    customerId: '',
    imei: '',
    lastPaymentDate: '',
    registrationDate: '',
    role: '',
    socialId: '',
    status: '',
    type: '',
    userName: ''
}
```

### SDE.personalInfo, authenticatedData.personalInfo

| Property         | Description                                           | Type   |
|------------------|-------------------------------------------------------|--------|
| accountName      | The name of the company or account                    | string |
| balance          | The current balance of the customer                   | string |
| companySize      | The number of employees                               | number |
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

```javascript
{
    age: 1,
    birthday: '',
    company: '',
    contactInfo: [],
    gender: '',
    name: ''
}
```

### SDE.personalInfo.contactInfo, authenticatedData.personalInfo.contactInfo

| Property | Description                      | Type   |
|----------|----------------------------------|--------|
| email    | The email of the customer        | string |
| phone    | The phone number of the customer | string | 

Structure example:

```javascript
{
    email: '',
    phone: ''
}
```

*Note: This is an array in order that that the customer can provide home contact info, work contact info, and other contact info.*

### SDE.marketingSource

| Property           | Description                       | Type   |
|--------------------|-----------------------------------|--------|
| originatingChannel | The channel of the marketing data | string |
| affiliate          | The affiliate                     | string |
| campaignId         | The campaign ID                   | string | 

Structure example:

```javascript
{
    originatingChannel: '',
    affiliate: '',
    campaignId: ''
}
```

### SDE.leadGeneration 

| Property | Description           | Required | Type   |
|----------|-----------------------|----------|--------|
| leadId   | The ID of the lead    | optional | string |
| topic    | The topic of the lead | optional | string |
| value    | The value of the lead | optional | string |

Structure example:

```javascript
{
    leadId: '',
    topic: '',
    value: ''
}
```

### SDE.transaction

| Property | Description                        | Type   |
|----------|------------------------------------|--------|
| total    | The total value of the transaction | string |
| orderId  | The order ID                       | number |
| cart     | A shopping cart object             | object |

Structure example:

```javascript
{
    total: '',
    orderId: 1
    cart: {}
}
```

### SDE.shoppingCart, SDE.transaction.[].cart

| Property  | Description                                     | Type   |
|-----------|-------------------------------------------------|--------|
| cartTotal | The total value of the cart                     | string |
| numItems  | The number of items in the cart                 | number |
| products  | Array of products, as in the viewedProducts SDE | array  |

Structure example:

```javascript
{
    cartTotal: '',
    numItems: 1,
    products: []
}
```

### SDE.viewedProducts, SDE.transaction.[].products, SDE.shoppingCart.[].products

| Property | Description                                      | Type   |
|----------|--------------------------------------------------|--------|
| name     | The product name                                 | string |
| category | The product category                             | string |
| sku      | The product SKU                                  | string |
| price    | The price of the product                         | string |
| quantity | Where applicable - the number of identical items | number |

Structure example:

```javascript
{
    name: '',
    category: '',
    sku: '',
    price: '',
    quantity: 1
}
```

### SDE.serviceActivity

| Property | Description                          | Type   |
|----------|--------------------------------------|--------|
| category | The category of the service activity | string |
| id       | The ID of the service activity       | string |
| status   | The status of the service activity   | string |
| topic    | The topic of the service activity    | string |

Structure example:

```javascript
{
    category: '',
    id: '',
    status: '',
    topic: ''
}
```

### SDE.error

| Property       | Description                                      | Type    |
|----------------|--------------------------------------------------|---------|
| contextId      | The context ID                                   | string  |
| message        | The error message                                | string  |
| messageTooltip | The error message tooltip (for display purposes) | string  |
| code           | The error code                                   | string  |
| codeTooltip    | The error code tooltip (for display purposes)    | string  |
| level          | The error level                                  | string  |
| resolved       | Is the error resolved                            | Boolean |

Structure example:

```javascript
{
    contextId: '',
    message: '',
    messageTooltip: '',
    code: '',
    codeTooltip: '',
    level: '',
    resolved: true
}
```

### clientProperties

| Property       | Description                                      | Type    |
|----------------|--------------------------------------------------|---------|
| appId          | String representation of the Identification of the application        | string  |
| appVersion     | The application version, for example in case of mobile it will be the host app version | string  |
| browser        | String represent the browser. For example: chrome, firefox, etc...    | string  |
| browserVersion | Detailed version info of the user agent (browser or host-application) | string  |
| deviceFamily   | For example: personal_computer/tablet/mobile_phone                    | string  |
| deviceModel    | For example for G3 for LG, iPhone6s for Apple...                      | string  |
| deviceManufacture| For example LG, HP, Microsoft...                                    | string  |
| integration    | For example: web_sdk, mobile_sdk, and brand_sdk                       | string  |
| integrationVersion| String representation of the integration version                   | string  |
| ipAddress      | String representation of the ip address                               | string  |
| os             | String representation of the OS. Contains the operating system, including version info | string  |
| osName         | OS name is a text describing the operating system                     | string  |
| osVersion      | Specifies the operating system version, and distribution type (if relevant) | string  |
| timeZone       | String representation of the timeZone. For example: "America/Los_Angeles  | string  |
| features       | Strings representation of the features the user have got.             | string  |
