---
title: Event Structure
level1: Documents
level2: Real Time Interactions
level3: Engagement Window Widget SDK
level4: Instructions

order: 30
permalink: engagement-window-widget-sdk-instructions-event-structure.html

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

**"engagementInfo"**

```javascript
{
  allowUnauthMsg: <boolean>,
  async: <boolean>,
  availabilityPolicy: 0,
  cid: 1231231312,
  connector: <object>,
  eid: 1231231312,
  env: <string>,
  ename: <string>,
  eventName: <string>,
  isPopOut: <boolean>,
  lang: <string>,
  lewid: 1231231312,
  params: <string>,
  scid: <string>,
  sessionKey: <string>,
  site: <string>,
  ssid: <string>,
  ssuid: <string>,
  svid: <string>,
  target: <string>
}
```

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




