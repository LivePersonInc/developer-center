---
title: How to use the SDK
level1: Documents
level2: Real Time Interactions
level3: Engagement Window Widget SDK
level4: Instructions


order: 20
permalink: engagement-window-widget-sdk-instructions-how-to-use-the-sdk.html
indicator: both
---

All public properties and methods can be found in the namespace lpTag.LPWidgetSDK.

### Public Properties

| Property | Description |
| :--- | :--- |
| version | The version of the service |
| name | The name of the service. ("LPWidgetSDK") |
| API | |

###  Examples

**API**

```javascript
{
      appName: "LivepersonWindowSDK",
      widgetName: "widgetName",
      events: {
          CONVERSATION_INFO: "conversationInfo",
          ENGAGEMENT_INFO: "engagementInfo",
          MESSAGES: "messages",
          PARTICIPANTS: "participants",
          UI_WINDOW: "uiWindow",
          UI_WIDGET: "uiWidget"
      },
      commands: {
          NOTIFICATION: "notification",
          DISPOSE: "dispose"
      },
      states: {
          OFFLINE: "offline",
          PRE_CONVERSATION: "preConversation",
          PENDING: "pending",
          ACCEPTED: "accepted",
          IN_QUEUE: "inQueue",
          INTERACTIVE: "interactive",
          POST_CONVERSATION: "postConversation",
          CONVERSATION_ENDED: "ended",
          ERROR: "error"
      }
};
```

### Public Methods

| Method | Description |
| :--- | :--- |
| `init (opts <optional>)` | The method used to initialize events binding with  object.
| `notify(data <optional> ), callback <optional>)` | This function used to send a notification to the engagement window. It can contain data and callback for error handling. <br> Note: Future versions will support data enrichment in notifications. |
| **`bind(event, callback, context <optional>)`** | Bind event data to callback function with optional context. In the case that no context is configured, default context would be the window context. <br> Event: lpTag.LPWidgetSDK.API.events |
| `unbind(event, callback,context<optional>)` | Unbind event handling. <br> Note: Whichever specifications were configured for’ bind’ must be identical in 'unbind’.
| dispose (callback) | This function is used to dispose\remove the widget from the visitor window. |
| `getQuery(key <optional>)` | Utility function for getting query parameter values. In case of empty input (ie: key is undefined), object results are returned without filtering parameters. * "widgetName" and  "accountId" Query parameters are passed for every iframe url.

###  Examples

**`init (opts <optional>)`**

Opts object configuration:

```javascript
{
  bind: {
      "eventName" : {func: callback, context: this }
  }
}
```

**`notify(data <optional> ), callback <optional>)`**

Callback example:


```javascript
{
function notificationCallback(err) {
  if (err) {
    console.log("Error on sending notification from widget");
  }
}
```

**`dispose (callback)`**

Callback example:

``` javascript
function notificationCallback(err) {
  if (err) {
    console.log("Error on disposing widget from ");
  }
}
```

A complete list of public properties and methods can be found in the namespace lpTag.LPWidgetSDK.
