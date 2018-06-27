---
title: Methods
Keywords:
level1: Documents
level2: Agent Interactions
level3: Agent Workspace Widget SDK

order: 50
permalink: agent-workspace-sdk-methods.html

indicator: both
---

_Note: You should call init once at the beginning before calling any other method._

### init

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|init|  Initializes the service and performs the handshake with the agent.  | Can be provided with an optional callback for notifications. |

Example:

```javascript

{
    var notificationHandler = function(data) {
    // Do something with the notifications
    };

    var focusHandler = function() {
    // Do something when the visitor is focused
    // Assume the visitor is focused to begin with
    };

    var blurHandler = function() {
    // Do something when the visitor is blurred
    // Assume the visitor is focused to begin with
    };
}
    lpTag.agentSDK.init({
    notificationCallback: notificationHandler,
    visitorFocusedCallback: focusHandler,
    visitorBlurredCallback: blurHandler
});
```

*Note: The callbacks are optional. Remember to call init once at the beginning, before calling any other method.*

### get

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|get | Gets data from the public model.  | The data that arrives in the callback is the data from the model. If no data can be found in the provided key: null.|

Example:

```javascript
    {
    var onSuccess = function(data) {
        // Do something with the returning data
    };

    var onError = function(err) {
        // Do something with the error
    };

    var pathToData = "visitorInfo.visitorName";

    lpTag.agentSDK.get(pathToData, onSuccess, onError);
}
```

### bind

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|bind | Binds to data in the public model. |  The data returns in the following structure {key: '', newValue: {}}, where the key is the location of the data within the public model, and the newValue is the data update. When binding, you will first receive a callback with existing data (if there is any), and then you will receive updates of the current data.  |

Example:

```javascript
{
    var updateCallback = function(data) {
        // Do something with the returning data
        var path = data.key;
        var value = data.newValue;
        // called each time the value is updated.
        // If there's an existing value when bind is called - this callback
        // will be called with the existing value
    };

    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the bind is completed successfully,
        // or when the action terminated with an error.
};

        var pathToData = "visitorInfo.visitorName";

        lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
}
```

*Note: notifyWhenDone is an optional callback.*

### unbind

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|unbind | Unbinds from data in the public model. |  The provided key and callback must be identical to those used to bind in order for the unbind operation to work. |

Example:

```javascript
{
    // Use the same callback for both bind and unbind
    var updateCallback = function(data) {
        // Do something with the returning data
        var path = data.key;
        var value = data.newValue;
        // called each time the value is updated.
        // If there's an existing value when bind is called - this callback
        // will be called with the existing value
    };

    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the unbind is completed successfully,
        // or when the action terminated with an error.
    };

    var pathToData = "visitorInfo.visitorName";

    lpTag.agentSDK.unbind(pathToData, updateCallback, notifyWhenDone);
}
```

_Note: The updateCallback must be the same callback provided for the bind._

### command

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|command | Sends a command to the agent. | |

#### Supported commands

|Command |Description |Const |Payload |
|:--- |:--- |:--- |:--- |
| "Write ChatLine" | write text to the chat input. In real-time chat the text should be sent in **HTML** format, in async messaging conversation in **plain text** format.| lpTag.agentSDK.cmdNames.write | {text: "text to write"} |
| "Write StructuredContent" | send structured content | lpTag.agentSDK.cmdNames.writeSC | {json: {...}, metadata: [...]} <br><br> matadata is optional |
| "Send Notification" | send notification | lpTag.agentSDK.cmdNames.notify | {} |

 Example 1 - 'Write ChatLine':

```javascript
{
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {text: "Some text"};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
```

Example 2 - 'Write StructuredContent'. Please see [this link](structured-content-templates.html) for the Structured Content JSON schema:

```javascript
{
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.writeSC; // = "Write StructuredContent"
    var data = {
		json: {
			"type": "text",
			"text": "product name",
			"tooltip": "text tooltip",
			"style": {
				"bold": true,
				"size": "large"
			}
		},
		metadata: [	//metadata is optional
			{"type":"ExternalId","id":"running364"},
			{"type":"ExternalId","id":"soccer486"}
		]
	};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
```

Example 3 - 'Send Notification':

```javascript
{
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = "Send Notification";
    var data = {};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
```

*Note: notifyWhenDone is an optional callback.*

### dispose

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|dispose | Disposes of the service.| | Optional|

Example

	`lpTag.agentSDK.dispose();`

*Note: You should only call dispose if and when you are completely done with the communication. You are not required to call dispose.*

### onNotify

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|onNotify  |Adds a listener to the Notify event.   | Notify events are sent. |Currently no|

```javascript
{
    var notificationHandler = function(data) {
        // Do something with the notifications
    };

    // Add a notification handler.
    lpTag.agentSDK.onNotify(notificationHandler);
}
```

*Note: This does not remove a listener added from 'init'. Currently no Notify events are sent.*

### onVisitorFocused

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|onVisitorFocused | Adds a listener to the Visitor Focus event.   |Sent whenever the visitor of the iFrame widget is focused. Assume the visitor is focused to begin with. |

```javascript
{
    var focusHandler = function() {
        // Do something when the visitor is focused
        // Assume the visitor is focused to begin with
    };

    // Add a visitor focus handler.
    lpTag.agentSDK.onVisitorFocused(focusHandler);
}
```

*Note: This does not remove a listener added from 'init'.*

### onVisitorBlurred

|Method|  Description|  Notes|  Required|
|:---  |:---  |:---  |:--- |
|onVisitorBlurred | Adds a listener to the Visitor Blur event.  | Sent whenever the visitor of the iFrame widget is blurred. Assume the visitor is focused to begin with.|

```javascript
{
    var blurHandler = function() {
        // Do something when the visitor is blurred
        // Assume the visitor is focused to begin with
    };

    // Add a visitor blur handler.
    lpTag.agentSDK.onVisitorBlurred(blurHandler);
}
```

*Note: This does not remove a listener added from 'init'.*

### Full flow

```javascript
{
var name = '';
var visitorLocation = '';
var triedCountry = false;

var notificationHandler = function(data) {
    // Do something with the notifications
};

var notifyWhenDone = function(err) {
    if (err) {
        // Do something with the error
    }
    // called when the bind is completed successfully,
    // or when the action terminated with an error.
};

{
var updateCallback = function(data) {
    // Do something with the returning data
    var path = data.key;
    var value = data.newValue;
    // called each time the value is updated.
    // If there's an existing value when bind is called - this callback
    // will be called with the existing value
    if (path === 'visitorInfo.visitorName') {
        lpTag.agentSDK.command(lpTag.agentSDK.cmdNames.write,
            {text: 'Hello ' + value + '!'}, notifyWhenDone);
        if (visitorLocation) {
            lpTag.agentSDK.command(lpTag.agentSDK.cmdNames.write,
                {text: 'I see you are from ' + visitorLocation}, notifyWhenDone);
        }
    }
};


{
var onSuccess = function(data) {
    // Do something with the returning data
    visitorLocation = data;
    lpTag.agentSDK.bind('visitorInfo.visitorName', updateCallback, notifyWhenDone);
};

var onError = function(err) {
    // Do something with the error
    if (err) {
        if (!triedCountry) {
            triedCountry = true;
            lpTag.agentSDK.get('country', onSuccess, onError);
        } else {
            lpTag.agentSDK.bind('visitorInfo.visitorName', updateCallback, notifyWhenDone);
        }
    }


lpTag.agentSDK.init({notificationCallback: notificationHandler});

lpTag.agentSDK.get('city', onSuccess, onError);
};
```
{% comment %}

### setConsumerProfile

**Note**: before using this method, you need to make sure that the "AgentSetConsumerProfile" feature is enabled for your account. Once it is, you will be able to grant the necessary permission to one of your agent/agent manager users (the necessary permission is "update consumer profile via API").

|Method|  Description|  Notes
|:---  |:---  |:---  |:--- |
|setConsumerProfile | Sets the consumer profile (unauthenticated data only). This action can only be performed by an assigned agent/agent manager with the necessary permissions | See the JSON structure for the request in the example below |

Example:

```javascript
var onSuccess = function() {
    // Do something with the success
};

var onError = function(err) {
    // Do something with the error
};

var consumerData = {
    avatarUrl:"",
    backgndImgUri:"",
    description: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
};

lpTag.agentSDK.setConsumerProfile(consumerData, onSuccess, onError);
```
*Note: the callbacks are optional.*

{% endcomment %}
