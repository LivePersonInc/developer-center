---
pagename: Event Binding
redirect_from:
  - lp-tag-tag-events-how.html
  - le-tag-how-to-use-liveengage-tag-events.html
  - lp-tag-tag-events-overview.html
  - le-tag-events.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: LE-Tag
subfoldername: Events
permalink: le-tag-events-event-binding.html

indicator: both
---

The `lpTag` handles the communication of many events that occur on the vistor's webpage.

These tag events provide transparency into the lifecycle flows of engagements, embeddeded chat windows, and more. 

You can find a list of events published on a web page by the LiveEngage Tag, each organized under an `appName` and given an `eventName`, [in the Events document](le-tag-events-events.html).

This document explains how to `bind` to events to help customize on-page behavior.

### Initialize

To listen for and bind to an event, you can use the `lpTag.events.bind` method. 

There are two ways to use this method.

- Call it with the appName, eventName and your callback function.
    
    ```javascript
    lpTag.events.bind(appName, eventName, callbackFunction);
    ```

- Call it with an object configuration.

    ```javascript
    lpTag.events.bind({
        eventName : "EVENTNAME",
        appName : "APPNAME",
        func: callbackFunction,
        context: callbackFunctionExecutionContext,  
        async: true, //default is false,
        triggerOnce : true //default is false
    });
    ```

**Properties**

| Name | Description | Type  | Required | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| eventName | The name of the event. | string | Yes | |
| appName | The name of the app triggering the event. | string | No | "*" |
|func | The callback function when the event is triggered. | Function | Yes | |
| context | The object which is the execution context of the function. Useful if you rely on context ("this") in your code. | Object | No | null |
| async | When set to yes, the callback will be triggered when there is free CPU time. This option is recommended when there is heavy procession to run, in order to avoid freezing the UI. | Boolean | No | false |
| triggerOnce  | When set to yes, your callback will unbind after it is called once.  | Boolean | No | false |

### Callback

The callback function that you define will be passed **event data** and **event information** as two separate objects.

The **event information** object will look like the below:

```javascript
{
  "eventName": "MYEVENT",
  "appName": "TRIGGERINGAPP"
}
```

The **event data** object will vary depending on the event that you are binding to.

### Example

```javascript
function processThis(data, eventInfo){
    if(window.console && window.JSON){
        console.log(JSON.stringify(data) + " triggered by: " +  JSON.stringify(eventInfo));
    }
}

// Use the above "processThis" callback to print event data and info to the console
lpTag.events.bind("lp_sdes", "VAR_ADDED", processThis);
```