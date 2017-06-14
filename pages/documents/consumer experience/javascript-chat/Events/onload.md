---
title: onLoad
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 192
permalink: consumer-experience-javascript-chat-onload.html

indicator: messaging
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