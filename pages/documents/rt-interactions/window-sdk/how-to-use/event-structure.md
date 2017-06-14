---
title: Event Structure
level1: Documents
level2: Real Time Interactions
level3: Engagement Window Widget SDK
level4: Instructions

order: 30
permalink: rt-interactions-window-sdk-event-structure.html

indicator: both
---

Each event contains three parameters: id, type and data. They appear as follows:

```javascript
{
  id: <string>,
  type: lpTag.LPWidgetSDK.API.events.[key],
  data: <object>
}
```

### Event types

| type: lpTag.LPWidgetSDK.API.events.[key] | Type |
| :--- | :--- | 
| "conversationInfo" | object |
| "messages" | object | 
| "participants" | array |
| "uiWindow" | object |
| "uiWidget" | object |

### Data examples

**"conversationInfo"**

```javascript
{
  conversationId: <string>,
  sessionId: <string>,
  *dialogId: <string>,
  startTime: <string>,
  state: lpTag.LPWidgetSDK.API.states,
  *dialogType: <string>,
  channelType: <string> // ("chat"/"messaging")
}
```

*Note: This data will be relevant for messaging in future versions.*

**"messages"**

```javascript
{
  id: <string>,
  ts: 1231231312,
  type: <string> 
  content: <string>,
  originator: {
      type: <string> // ("visitor"/"agent"/"system"), name: <string>
      }
}
```

**"participants"**

```javascript
{
  {
      "id": <string>,
      "name": <string>,
      "type": "visitor"
  },
  {
      "id": <string>,
      "name": <string>,
      "type": "agent",
      "imgPath": <string>,
      "description": <string>
  }
}
```

**"uiWindow"**

```javascript
{
    "isMaximized": <boolean>
}
```

**"uiWidget"**

```javascript
{
    "isShown": <boolean>
}
```




