---
title: How to use LiveEngage Tag Events
level1: Documents
level2: Account Configuration
level3: LE-Tag

order: 2
permalink: lp-tag-tag-events-how.html

indicator: both
---

To listen to an event you can either:

- Call lpTag.events.bind method with the appName, eventName and your callback function.
	Code sample: ```lpTag.events.bind(appName, eventName, callbackFunction);```

- Call lpTag.events.bind method with an object configuration. This option includes more options.
Code sample:


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

| Name | Description | Type  | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| eventName | The name of the event. | string | Required | |
| appName | The name of the app triggering the event. | string | Optional | Default: "*". |
|func | The callback function when the event is triggered. | Function | Required | |
| context | The object which is the execution context of the function. Useful if you rely on context ("this") in your code. | Object | Optional | Default: null. |
| async | When set to yes, the callback will be triggered when there is free CPU time. This option is recommended when there is heavy procession to run, in order to avoid freezing the UI. | Boolean | Optional | Default: false.|
| triggerOnce  | When set to yes, your callback will unbind after it is called once.  | Boolean | Required | Default: false.|

**Event Information structure:**

       {
            eventName: "MYEVENT",
            appName: "TRIGGERINGAPP"
       }

**Callback Function example:**

The example below prints the event data and event info:


```javascript
function processThis(data, eventInfo){
     if(window.console && window.JSON){
            console.log(JSON.stringify(data) + " triggered by: " +  JSON.stringify(eventInfo));
        }
     }
```
