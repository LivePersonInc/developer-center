---
pagename: Limitations
redirect_from:
  - agent-workspace-sdk-limitations.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
documentname: Agent Workspace Widget SDK

order: 30
permalink: agent-workspace-widget-sdk-limitations.html

indicator: both
---

- The SDK will only communicate with LivePerson's Agent Workspace if the account has configured an iframe widget that refers to a web page developed using the SDK.

- The SDK only supports browsers which implement the postMessage API, and have native JSON implementation, for example, IE8+, Chrome, Firefox, Safari, Opera, IOS, Opera Mini, and Android.

- IE9, Firefox and Opera Mini do not support MessageChannel, and therefore the fallback uses basic postMessage. This makes the communication open to any handler registered for messages with the same origin.

- When the browser does not support passing an object using postMessage (IE8+, Opera Mini), and no special serialize/deserialize methods are supplied, all data is serialized using JSON.stringify/JSON.parse. This means that object data is limited to any JSON which supports types such as strings, numbers, null, arrays, and objects, and does not allow circular references. Trying to serialize other types will result in conversion to null (like Infinity or NaN) or to a string (Dates), that must be manually deserialized on the other side.

- If the agent refreshes the iframe widget, the page is reloaded from scratch. Any databindings that existed before refreshing are removed.

- The application you are developing must be able to open within an iframe. Some applications, known as 'Frame Busters’, prevent themselves from opening within an iframe.

- The application must be hosted over SSL, meaning that the URL must start with https.

- Custom widgets should not include LiveEngage chat buttons or any other LiveEngage objects such as the lpTag.
