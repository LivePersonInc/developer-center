---
pagename: Code Examples
redirect_from:
  - rt-interactions-window-sdk-code-examples.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Engagement Window Widget SDK
subfoldername: Instructions

order: 40
permalink: engagement-window-widget-sdk-instructions-code-examples.html

indicator: both
---

**'Init’ and 'bind’ (Single event)**

```javascript
{

  var lpWidgetSDK = lpTag.LPWidgetSDK.init();
  lpWidgetSDK.bind(lpTag.LPWidgetSDK.API.events.CONVERSATION_INFO, _onEvent, this);

  function _onEvent(eventData) {
    if (eventData) {
        console.log(eventData);

}
```

**'Init’ with 'bind’ (Multiple events)**


```javascript
{
  }
var lpWidgetSDK,
   widgetSDKAPI = lpTag.LPWidgetSDK.API
   opts = {bind: {}},
   bindingEvent = [widgetSDKAPI.events.CONVERSATION_INFO, widgetSDKAPI.events.MESSAGES];
   bindingEvent.forEach(function (eventName) {
   opts.bind[eventName] = {func: _onEvent, context: this};
   });

 lpWidgetSDK = lpTag.LPWidgetSDK.init(opts);

function _onEvent(eventData) {
  if (typeof eventData === "object") {
    console.log("Event id: " + eventData.id);
    console.log("Event type: " + eventData.type);
    console.log("Event data: " + eventData.data);
  }
}
```

**Send Notification**

```javascript
{

  var lpWidgetSDK = lpTag.LPWidgetSDK.init();
  lpWidgetSDK.bind(lpTag.LPWidgetSDK.API.events.CONVERSATION_INFO, _onEvent, this);

  function _onEvent(eventData) {
    if (eventData) {
            lpWidgetSDK.notify("Data was received!", notificationCallback);
    }
  }

  function notificationCallback(err) {
    if (err) {
         console.log("Error on sending notification from widget");

}
```

*Note: Notification causes the window to show a notification counter for widgets, which decreases to 0 when the widget is viewed by the visitor.*

**Dispose Widget**

```javascript
{

  var lpWidgetSDK = lpTag.LPWidgetSDK.init();
  lpWidgetSDK.dispose(disposeCallback);

  function disposeCallback(err) {
    if (err) {
        console.log("Error on widget disposal");

}
```

**End to End**

    <html>
    <head>
      <meta charset="UTF-8">
      <script src="https://lpcdn-a.lpsnmedia.net/unifiedwindow/widgetSDK.min.js"></script>
    </head>
    <body>
    <h1>Test Widget</h1>
    <script type="text/javascript">
      (function () {
          var lpWidgetSDK,
              widgetSDKAPI = lpTag.LPWidgetSDK.API;
          window.addEventListener("load", function () {
              var bindingEvent = [widgetSDKAPI.events.CONVERSATION_INFO, widgetSDKAPI.events.MESSAGES],
                      opts = {bind: {}};

              bindingEvent.forEach(function (eventName) {
                  opts.bind[eventName] = {func: _onEvent, context: this};
              });

              lpWidgetSDK = lpTag.LPWidgetSDK.init(opts);
          }.bind(this));

          function _onEvent(eventData) {
              if (eventData && widgetSDKAPI.events.MESSAGES === eventData.type) {
                  var content =  eventData.data.content = "";
                  console.log("MESSAGES data: ", eventData );
                  if (content.indexOf("disposeWidget") > -1) {
                      disposeWidget();
                  }
              } else if (eventData && widgetSDKAPI.events.CONVERSATION_INFO === eventData.type) {
                  console.log("CONVERSATION_INFO data: ", eventData );
              }
              sendNotification("Event received!");
          }
          function sendNotification(text) {
              if (typeof text === "string") {
                  lpWidgetSDK.notify({content: text}, function (err) {
                      if (err) {
                          console.log("Error on sending notification from widget");
                      }
                  });
              }
          }
          function disposeWidget() {
              lpWidgetSDK.dispose(function (data) {
                  console.log("bla");
              });
          }
      })();
    </script>
    </body>
