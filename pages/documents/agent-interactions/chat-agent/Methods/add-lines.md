---
title: Send Lines & Structured Content
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 130
permalink: agent-add-lines.html

indicator: chat
---

Use this method to add a line.

### Request

| Method|  URL|
 |:---  |:--- |
 |POST|  https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events?v=1&NC=true |

**Request Headers**

 |Header  |Description |
 |:---|  :---|
 |Authorization Bearer| {bearer-from-login} |
 |Content-Type  |application/json |
 |Accept|  application/json|

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body Parameters**

 |Name|  Description|  Type/Value|  Notes|
 |:---|  :---|  :---|  :--- |
 |text|  Add a line of text to the visitor.|   alphanumeric|  Required|
 |textType|  The type of message and its proper UI representation.|  plain/html/rich-content| |
 |subType|  THe subtype of the message|  string|  Optional - valid value "ONLY_TO_REP"(=visible to agents only)
 |json | The JSON payload for the structured content template, as shown [here](structured-content-templates.html) | JSON | |

Request body examples:

    {
        "event":
        {
            "@type": "line",
            "text": "<div dir="ltr" style="direction: ltr; text-align: left;">this is a line of text</div>",
            "textType": "html"
        }
    }

    {
        "event":
        {
            "@type": "line",
            "text": "This is a private message, only visible to agents",
            "textType": "plain",
            "subType": "ONLY_TO_REP"
        }
    }

**Text Types**

It is possible to add different types of lines to the chat. When no text type is defined, it is assumed that a plain type was submitted.

**Best Practice**: our embedded window relies on the LE Agent UI to display the above sent text in an HTML format with a "<div>" wrapper. Therefore, to make sure that the LiveEngage UI displays your text correctly, it is important to use the HTML format as seen in the example above. The provided html cannot include the following: Iframes, Scripts, DOM actions, Links with "target="_blank".

Changing the text type is handled as follows:

| Name  | Description  | Notes |
|-------|-------------|----------|
| plain | The default type when non used, the text will be displayed as provided |    |
| html | For passing HTML content from the agent to the chat session.  | The provided html cannot include the following: Iframes, Scripts, DOM actions, Links with target="_blank". |
| rich-content | For passing Structured Content templates | [Refer to the Structured Content Templates document](structured-content-templates.html)  |

### Response

**Response Codes**

 |Code|  Response|
 |:---  |:--- |
 |201|  Created|

Response example for JSON (adding a line):

    {
     "chatEventLocation": {
       "link": {
         "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events/5",
         "@rel": "location"
       }
     }
    }

*Note: Only one event can be added per POST event request.*
