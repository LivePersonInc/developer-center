---
pagename: onLoad
redirect_from:
  - consumer-experience-javascript-chat-onload.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Events

order: 192
permalink: javascript-chat-sdk-events-onload.html

indicator: chat
---

This event fires when the chat API instance has been created and the DOM has loaded. It contains the current state of the API. If you are creating an instance of the chat API on page refresh or navigation, the state published here will be resume.

### Response 

**Properties in response Object**

| Property | Description             | Type   | Notes                                                                    |
|----------|-------------------------|--------|--------------------------------------------------------------------------|
| API      | The API description.    | string |                                                                          |
| version  | Current version in use. | string |                                                                          |
| state    | The current chat state. | string | See [Chat States](consumer-experience-javascript-chat-chat-states.html){:target="_blank"}. |

**Sample Response** 

```json
    {
        "API": "Chat API SDK Loaded",
        "version": "1.0.0",
        "state": "uninitialised"
    }
```