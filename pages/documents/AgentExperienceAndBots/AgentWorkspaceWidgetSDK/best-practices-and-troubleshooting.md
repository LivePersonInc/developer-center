---
pagename: Best Practices & Troubleshooting
redirect_from:
  - agent-workspace-sdk-best-practices-and-troubleshooting.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Agent Workspace Widget SDK

order: 80
permalink: agent-workspace-widget-sdk-best-practices-and-troubleshooting.html

indicator: both
---

## Best practices

### Prefer using "bind" over using "get"

When calling "get" you receive the current state of the data. The current state might not contain the data you are trying to use. When using "bind" your code is called with the data when it's available, and after every change. If you only wish to receive the data once - you can call "unbind" after receiving the initial data. Don't forget the behaviour for "bind" - each time you get the "newValue", not just the changes. The only exception is the chat lines - where each time the callback is called with the new lines only.

### Be specific

When calling "bind" (or "get") it's better to prefer specific child paths rather than generic parent paths (such as "SDE" or "authenticatedData"). The reason is that these parent objects are pseudo objects that we create by combining all the child elements - so if you call "bind" on "SDE", behind the scenes we're binding to every single "SDE" individually.

## Troubleshooting

### My widget doesn’t load

| Possible Cause                                                            | Resolution                                                                            |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Firewall is blocking the domain of the custom widget                      | Allow the custom widget domain                                                        |
| Firewall is blocking lpcdn.lpsnmedia.net where the SDK file is hosted     | Allow lpcdn.lpsnmedia.net                                                             |
| Need to login to external environment to load widget                      | Login to external environment (and add the link to the login page as the fallback)    |
| Error in custom widget code                                               | Check console/log for errors and follow-up accordingly                                |

### My widget doesn’t get the data

| Possible Cause                                            | Resolution                                                                        |
|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| No call to `lpTag.agentSDK.init({});` in the widget code  | You should add it at the beginning of the widget. The SDK won’t work without it   |
| The data doesn’t exist                                    | If it doesn’t appear in the visit info widget - the data doesn’t exist            |
| Using “get” instead of “bind”                             | We always recommend using “bind” as “get” might run before the data is available  |
| Error in custom widget code                               | Check console/log for errors and follow-up accordingly                            |

### Error logs

*Error initializing communication/Error creating instance of courier* - 
The widget failed to communicate with LE. Perhaps there are network issues. Never actually seen this happen.

*Error calling "get/bind/unbind/command" on the following key:*
There was a technical problem when trying to call get/bind/unbind (probably network, not related to the actual key). Never actually seen this happen.

*No channel defined when calling "get/bind/unbind/command". Maybe you are missing a call to "init"?*

*No key/cmdName provided when calling "get/bind/unbind/command"* - 
The custom widget code called one of the SDK functions without specifying what it wants. The creator of the widget needs to fix the code so it calls with a key/cmdName.

*Callback provided for {X} encountered an error* - 
The callback provided by the custom widget for {X} has a bug. The creator of the widget needs to fix their bug.