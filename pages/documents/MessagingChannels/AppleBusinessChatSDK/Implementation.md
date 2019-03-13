---
pagename: Implementation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Apple Business Chat SDK
permalink: apple-business-chat-sdk-implementation.html
indicator: messaging
---

### Initializing the SDK

`LPABCSDK.initializeSDK()`  - default log level will be .info, enable = true

`LPABCSDK.initializeSDK(minimumLogLevel: .trace, enableLog: true)`

### Update the SDK upon recieving a new message

`updateWithIncomingInteractiveMessage`

Updating SDK with an incoming CIM for caching SDE reporting ability relevant payload. 

Should be implemented from both override functions:
- `didBecomeActive(with conversation: MSConversation)`
- `didReceive(_ message: MSMessage, conversation: MSConversation)`

in the iMessage extension `MSMessagesAppViewController`

### Create SDEs

```swift
createSDE(sdeType: SDE_Type,
          autoSendWhenIdle: Bool? = false,
          completion: (inout SDEBase))
```

Generates an SDEBase object with a template reference to the relevant [SDE type](engagement-attributes-types-of-engagement-attributes.html) that passed in parameter, as a completion closure. 

A setup call on the callback sde is required in order to initiate the sde with all relevant params, and add it to a stack. 

* optional - autoSendWhenIdle, when set to true, the sde will be added to the idleStack which automatically send the stack once idele timeout is met. Default is 5 sec but could be anything between 0-15 sec. see `setSDEStackIdleInterval(interval:)`
	 
### Auto Send SDE Stack Time Interval

`setSDEStackIdleInterval(interval:15)`

This will setup an Idle timeout interval for auto sending the idle SDE stack (optional). Default is 5 seconds and Max is 15.

### Manually Send SDE Stack

```swift
sendSDEStack(onSuccess success: successClosureType = nil,
             onFailure failure: failureClosureType = nil)
```

Sending the aggregated SDE stack (when idle stack is not enabled). Callback with success/failure closures.

### Closure Executed upon SDE Send Completion

`idleSDEStackCompletion`

A closure completion callback for sending idle SDE Stack.

### Custom Event Callback

- `implicitEventCallbackType` - Indicates the type of implicit event that is being called back from the implicitSDEClosure. 

- `implicitSDEClosure` - Invoked when a qualifying event is met, and callback the type of that event 

### Textual context for an outgoing CIM (device to LE) implement

`appendReplayMessagePayload(message: MSMessage, textContext: String)`

With the initiated MSMessage object, and the desired textual String. 
