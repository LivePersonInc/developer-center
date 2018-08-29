---
pagename: Engagement Window Events
redirect_from:
  - lp-tag-engagement-window.html
sitesection: Documents
categoryname: Consumer Information
documentname: LE-Tag
subfoldername: Events

order: 30
permalink: le-tag-events-engagement-window-events.html

indicator: both
---

These are engagement window related events, including rendering, display and interactions with the engagement.

*Note: These events will only be triggered for embedded mode windows.*

### state

This event triggers when the chat state is changed.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "state" |
| appName | "lpUnifiedWindow" |

**Event Properties**

| Name | Description | Type | Notes |
| :-- | :--- | :--- | :--- |
| state | The chat state. | string | Available states: "resume", "initialised", "uninitialised", "preChat", "postChat", "offline", "waiting", "chatting", "interactive", "ended", "Notfound". Out of these, **only** "initialised", "chatting" and "ended" are relevant for Messaging. |

*Example:*

```{ "state" : "chatting" } //The current chat state```

### conversationInfo

This event triggers when the conversation data was changed, for example the conversation state.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "conversationInfo" |
| appName | "lpUnifiedWindow" |

**Event Properties**

| Name | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| agentName | The agent name to which the visitor is connected. | string | |
| agentId | The agent ID to which the visitor is connected. | ALPHA_NUMERIC | |
| conversationId | The conversation ID. | ALPHA_NUMERIC | For messaging |
| state | The chat state. | string | Available states: "resume", "initialised", "uninitialised", "waiting", "chatting", "ended", "Notfound" |
| monitoringSessionId | Session ID. | ALPHA_NUMERIC | |
| visitorId | Visitor ID. | ALPHA_NUMERIC | |
| skill | The conversation skill. | string | |
| engagementId | The engagement ID that was clicked to open the chat. | ALPHA_NUMERIC | |
| campaignId | The engagement’s campaign ID. | ALPHA_NUMERIC | |
| language | The conversation language. | string | An [ISO 639-1 Alpha-2](http://openid.net/specs/openid-connect-core-1_0.html#ISO639-1) language code in lowercase and an [ISO 3166-1 Alpha-2](http://openid.net/specs/openid-connect-core-1_0.html#ISO3166-1) country code in uppercase, separated by a dash. For example, en-US or fr-CA. |
| engagementName | The engagement name as defined in LiveEngage UI. | string  | |

*Example:*

```json
{
   "agentName": "John Doe",
   "agentId": 2,
   "conversationId": 4294973105,
   "state": "chatting",
   "monitoringSessionId":       
"WIoWBRC_RL6pkcK5fL-3-g.5bb46ddd7ae63b731b5eeb10189b15bc97226af0",
"visitorId": "UYxShcOtSEWq0oSsuMCrOQ",
   "skill": "MySkill",
   "engagementId": 1346152510,
   "campaignId": 1346152410,
   "language": "en-US",
   "engagementName": "Sticky chat button"
}
```

### engagementData

This event triggers when the state changes to "chatting" to show the engagement info.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "engagementData" |
| appName | "lpUnifiedWindow" |

**Event Properties**

| Name | Description | Type |
| :--- | :--- | :--- |
| engagementName | The engagement name as defined in LiveEngage UI | string | |
| state | The chat state ("chatting"). | string |

*Example:*

```json
{
    "engagementName" : "Sticky chat button",
    "state": "chatting"
}
```

### maximized

This event triggers when the chat window is in maximized view.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "maximized" |
| appName | "lpUnifiedWindow" |

### minimized

This event triggers when the chat window is in minimized view.

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "minimized" |
| appName | "lpUnifiedWindow" |

### windowClosed

This event triggers when the chat window is closed (disposed and removed from the DOM).

**Event Information**

| Name | Value |
| :--- | :--- |
| eventName | "windowClosed" |
| appName | "lpUnifiedWindow" |
