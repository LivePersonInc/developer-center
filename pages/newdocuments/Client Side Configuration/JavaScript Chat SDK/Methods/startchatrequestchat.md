---
pagename: requestChat
redirect_from:
  - consumer-experience-javascript-chat-requestchat.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Methods

order: 30
permalink: javascript-chat-sdk-methods-requestchat.html

indicator: chat
---

This method queues a chat request. It has a number of possible properties that can be passed to specify Skill or ServiceQueue requested and other information about the visitor.

**For consumer Authentication flow please collect the necessary parameters from the [authenticate](consumer-experience-javascript-chat-authenticate.html) method first.**
The parameters in question are `conversationId`, `participantId`. You will need to add these parameters to the request body for the requestChat method.

**Notes**:

- *If you displayed a Pre-chat survey, this is where you submit the answers to that survey.*
- *In response to a chat starting, the following events will be triggered: onStart, onState, onInfo and onLine (if there are any chat lines).*

### Request

**Properties**

| Element | Description | Type | Notes |
| :--- | :--- | :--- | :--- | :--- |
| skill |   A specific skill requested for this chat. | string | |
| serviceQueue | A ServiceQueue for this chat. | string | Will be ignored if a skill property is passed. Must be supplied with the maxWaitTime property. |
| maxWaitTime   | The number of seconds the visitor can wait for a chat. | number | Must be supplied in conjunction with the serviceQueue property. |
| referrer  | The referrer for this chat. | string | If not supplied, will default to the document.referrer property of the browser. |
| preChatLines  | An array of strings that should be received by the agent immediately when the chat starts. | array |  |
| survey |  The result of the Pre-chat survey. | object | |
| buttonName    | The name of the button clicked. This is used to create a pipeline report. | string | Takes preference over invitation. |
| invitation    | Indication if this was a result of an invitation. | Boolean   |  |
| siteContainer | In case of a federated site, you need to pass this in to locate the visitor in the secondary servers. | string | Exists in the Global variable on the parent page: window.lpMTagConfig.FPC_CONT. Required in case of federation. This is for the first chat only. |
| runWithRules  | Specifies if you want rules to be evaluated on the Pre-chat survey and applied to the chat. | Boolean | Example: have a skill question change the chat skill. <br> Default: off |
| interactionTimeout	| The number of seconds that have passed since the last request was sent to the server until the server disconnects the chat. | number | <br> Default: 40 |
| visitorSession | The monitored visitors session on the page. | string | Used to create pipeline reports from the page monitoring to the chat. |
| visitorId |   The monitored visitor ID in case of a LiveEngage account. | string |    |
| sessionId | The monitored visitor session ID in case of a LiveEngage account. | string | |
| contextId | The context ID of the engagement that was clicked in case of a LiveEngage account. | string   | |
| engagementId  | The engagement ID in case of a LiveEngage account. | string   | |
| campaignId    | The campaign ID in case of a LiveEngage account. | string | |
| language  | The language set in the engagement in case of a LiveEngage account (sets the system messages language for the chat). | string | |
| a2aSourceSiteId   | The source site for the account to account transfer | string  | Supplied on the account to account event. You must have a valid API key for the new account. |
| a2aSourceSessionId | The originating session ID for the account to account transfer | string | Supplied on the account to account event. You must have a valid API key for the new account |
| a2aEventId | The event ID of the account to account transfer | string | Supplied on the account to account event. You must have a valid API key for the new account |
| conversationId | The conversation ID required for authentication flow. | string | optional |
| participantId | The participant ID required for authentication flow. | string | optional |

**Sample code**

*preChatLines*

```json
{ "preChatLines" : [
    "This chat started from a  mobile browser",
    "Returning visitor from support"
  ]
}
```

*survey*

```json
{ "survey": {
    "id": 1,
    "question": [
          { "id": 1, "answer": "123345" },
          { "id": 2, "answer": ["1", "2"] }
    ]
  }
}
```

**Sample request**

```javascript
var failedRequest = chat.requestChat({
    skill : "support",
    preChatLines : [
        "Hello I need support",
        "Can you help me?" ] ,
    referrer : "https://liveperson.com",
    survey : {
        id :2 ,
        question: [
            { id :1 , answer : "PC" },
            { id: 2 , answer : "Ahtml"
        ]
    },
    success: myChat.showStartAnimation,
    error: myChat.showFailedRequest,
    context: myChat
}});

```

### Response

**Data in the response**

| Property  | Description | Type |
| :--- | :--- | :--- |
| events    | An object containing an event array of chat events. | object |
| info  | An info object that contains information for this chat. | object |

**Notes**:

- *The event is broken down into onState event and onLine events. For a detailed description of these properties, refer to [onState](consumer-experience-javascript-chat-onstate.html){:target="_blank"} and [onLine](consumer-experience-javascript-chat-online.html){:target="_blank"}.*
- *For a description of the info object, see [onInfo](consumer-experience-javascript-chat-oninfo.html){:target="_blank"}.*

**Sample response**

```json
{
    "events": {
        "event": [
            {
                "time": "2013-05-23T20:00:05.182-04:00",
                "@type": "state",
                "state": "waiting",
                "@id": "0"
            },
            {
                "text": "Please wait for a site operator to respond.",
                "time": "2013-05-23T20:00:05.183-04:00",
                "source": "system",
                "subType": "REGULAR",
                "@type": "line",
                "by": "info",
                "textType": "plain",
                "@id": "1",
                "systemMessageId": 4
            }
        ]
    },
    "info": {
        "visitorTyping": "not-typing",
        "visitorName": "you",
        "skillName": "testSkill",
        "lastUpdate": "2013-05-23T20:00:05.356-04:00",
        "state": "waiting",
        "startTime": "2013-05-23T20:00:05.183-04:00",
        "duration": 0,
        "visitorId": 12345678910,
        "agentTyping": "not-typing",
        "chatSessionKey": "H123345578-123456789096534324243",
        "rtSessionId": 12345678910,
        "chatTimeout": 40
    }
}
```
