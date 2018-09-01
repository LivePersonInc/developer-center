---
pagename: Creating an Instance
redirect_from:
  - consumer-experience-javascript-chat-creating-an-instance.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK

order: 4
permalink: javascript-chat-sdk-creating-an-instance.html

indicator: chat
---

Creating your instance is the first thing to do when using the SDK.   
The instance expects a configuration file with an appkey and your lpNumber (LivePerson site ID).   
Once you create an instance of the API, it retrieves your site's domain and initializes the ability to request data and chat.   
At this stage you can also bind to the main events that you will be using throughout your chat application.

At this point, it is recommended to bind to at least the following methods: onLoad, onInit, onStart, onState, onStop, and onLine.

**Instance Code Sample**

```javascript
var myChatObj = new lpTag.taglets.ChatOverRestAPI({
    // The api key for this site
    appKey: "12345678945613",
    // The LivePerson site number
    lpNumber: "123456",
    
    //**************Here start samples of event binding via the config **************************************
    
    // Binding an inline function to onLoad
    onLoad: function (data) {
        alert(JSON.stringify(data));
    },
    // Binding a single callback to on init with a specified execution context
    onInit: {
        // The function that will be called back
        callback: myObj.handleInit,
        // The execution context
        context: myObj 
    },
    // Binding a function to the onState event
    onState: function (data) {
        alert(JSON.stringify(data));
    },
    // An Array of callbacks bound to this event
    onLine: [
        {
            // A function that will be called back
            callback: myObj.handleLine,
            // The execution context for this callback
            context: myObj 
        },
        // An inline callback also bound to onLine
        function (lineData) { 
            alert(JSON.stringify(data));
        }
    ]
});                                                                                              
```
**Expected properties of a configuration object in instantiation**

| Name | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| appKey | The app key that was provisioned for this account. | string | Required | |
| lpNumber | The LivePerson account number. | string | Required | |
| domain | If you know the domain for the site. | string | Optional | This is taken care of in case you do not know the domain. | 
| sessionUID | Allows you to control if the session is automatically resumed on refresh. | string | Optional | If set, it will need to be set to the same info for refreshes, otherwise the chat will not be automatically resumed. |
| failureTolerance | Allows you to control the number of concurrent failures (when trying to fetch events from the server), after which the chat is no longer valid for the client. | number | Optional | |
| moveToPrimaryRetry| The number of retries to get chat information when the server responds it has not found the visitor. | number | Optional ||
| moveToPrimaryInterval | Time in milliseconds between retries to find the visitor. | number | Optional | |
| transportOrder | Defines how the chat API will try to connect with the server. | array (of strings) | Optional | Currently only 'postmessage' is supported <br> It is best not to override this property since it may cause unexpected behavior. |
| Event Binding (see [Events](consumer-experience-javascript-chat-events.html)) | Here you can pass any binding you want performed on instantiation. | function, object, array of functions/objects | | Binding supports functions, objects and mixed arrays of both. |

**Binding Properties**

| Type | Value/Properties |
| :--- | :--- |
| Function  | An inline function or function pointer. | 
| Object | An object containing properties: <br> - callback - the callback function (Required) <br> - context - the execution context for the function (Optional) |
| Array | An array containing functions, or objects with the above syntax, or both. |
  
**Examples**

Function:


`onLoad: myOnLoad`

or

```javascript
onLoad: function(data){ alert(data); }
```    
Object: 

```javascript
{
onLoad: {
    callback: myObj.handlleLoad,
    context: myObj
}
```
Array:

```javascript
onLoad: [
    {
        callback: myObj.handlleLoad,
        context: myObj
    },
    function(data){ 
        alert(data); 
    }
]
```



