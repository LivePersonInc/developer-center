---
pagename: Event Structure
redirect_from:
  - rt-interactions-window-sdk-event-structure.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Engagement Window Widget SDK
subfoldername: Instructions

order: 30
permalink: engagement-window-widget-sdk-instructions-event-structure.html

indicator: both
---

Each event contains three parameters: id, type and data. They appear as follows:

```json
{
  "id": "<string>",
  "type": lpTag.LPWidgetSDK.API.events.[key],
  "data": "<object>"
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

```json
{
  "conversationId": ""<string>"",
  "sessionId": "<string>",
  "*dialogId": "<string>",
  "startTime": "<string>",
  "state": lpTag.LPWidgetSDK.API.states,
  "*dialogType": "<string>",
  "channelType": "<string>" // ("chat"/"messaging")
}
```

**"engagementInfo"**

```json
{
  "allowUnauthMsg": "<boolean>",
  "async": "<boolean>",
  "availabilityPolicy": 0,
  "cid": 1231231312,
  "connector": "<object>",
  "eid": 1231231312,
  "env": "<string>",
  "ename": "<string>",
  "eventName": "<string>",
  "isPopOut": "<boolean>",
  "lang": "<string>",
  "lewid": 1231231312,
  "params": "<string>",
  "scid": "<string>",
  "sessionKey": "<string>",
  "site": "<string>",
  "ssid": "<string>",
  "ssuid": "<string>",
  "svid": "<string>",
  "target": "<string>"
}
```

**"messages"**

```json
{
  "id": "<string>",
  "ts": 1231231312,
  "type": "<string>"
  "content": "<string>",
  "originator": {
      "type": "<string>" // ("visitor"/"agent"/"system"),
      "name": "<string>"
      }
}
```

**"participants"**

```json
{
  {
      "id": "<string>",
      "name": "<string>",
      "type": "visitor"
  },
  {
      "id": "<string>",
      "name": "<string>",
      "type": "agent",
      "imgPath": "<string>",
      "description": "<string>"
  }
}
```

**"uiWindow"**

```json
{
    "isMaximized": "<boolean>"
}
```

**"uiWidget"**

```json
{
    "isShown": "<boolean>"
}
```
